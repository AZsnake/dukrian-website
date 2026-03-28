import {
  createContext,
  useContext,
  useReducer,
  useCallback,
  useMemo,
  type ReactNode,
} from 'react'
import { trackAddToCart } from './lib/metaPixel'

export type CartItem = {
  id: string
  name: string
  price: number
  image: string
  qty: number
}

/** Pass `addQty` to add more than one in a single state update (better INP). */
export type AddCartLineInput = Omit<CartItem, 'qty'> & { addQty?: number }

type CartState = {
  items: CartItem[]
  open: boolean
}

type CartAction =
  | { type: 'ADD'; payload: AddCartLineInput }
  | { type: 'REMOVE'; id: string }
  | { type: 'SET_QTY'; id: string; qty: number }
  | { type: 'OPEN' }
  | { type: 'CLOSE' }
  | { type: 'CLEAR' }

function reducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case 'ADD': {
      const addQty = Math.max(1, Math.floor(action.payload.addQty ?? 1))
      const { addQty: _drop, ...line } = action.payload
      const idx = state.items.findIndex((i) => i.id === line.id)
      const items =
        idx >= 0
          ? state.items.map((i, k) => (k === idx ? { ...i, qty: i.qty + addQty } : i))
          : [...state.items, { ...line, qty: addQty }]
      return { items, open: true }
    }
    case 'REMOVE':
      return { ...state, items: state.items.filter((i) => i.id !== action.id) }
    case 'SET_QTY':
      if (action.qty <= 0) return { ...state, items: state.items.filter((i) => i.id !== action.id) }
      return { ...state, items: state.items.map((i) => (i.id === action.id ? { ...i, qty: action.qty } : i)) }
    case 'OPEN':
      return { ...state, open: true }
    case 'CLOSE':
      return { ...state, open: false }
    case 'CLEAR':
      return { items: [], open: false }
    default:
      return state
  }
}

export type CartStateSnapshot = {
  items: CartItem[]
  open: boolean
  total: number
  itemCount: number
}

type CartActions = {
  addItem: (item: AddCartLineInput) => void
  removeItem: (id: string) => void
  setQty: (id: string, qty: number) => void
  openCart: () => void
  closeCart: () => void
  clearCart: () => void
}

const CartStateContext = createContext<CartStateSnapshot | null>(null)
const CartActionsContext = createContext<CartActions | null>(null)

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, { items: [], open: false })

  const addItem = useCallback((item: AddCartLineInput) => {
    const addQty = Math.max(1, Math.floor(item.addQty ?? 1))
    dispatch({ type: 'ADD', payload: item })
    trackAddToCart(item.id, addQty, item.price)
  }, [])
  const removeItem = useCallback((id: string) => dispatch({ type: 'REMOVE', id }), [])
  const setQty = useCallback((id: string, qty: number) => dispatch({ type: 'SET_QTY', id, qty }), [])
  const openCart = useCallback(() => dispatch({ type: 'OPEN' }), [])
  const closeCart = useCallback(() => dispatch({ type: 'CLOSE' }), [])
  const clearCart = useCallback(() => dispatch({ type: 'CLEAR' }), [])

  const total = useMemo(
    () => state.items.reduce((s, i) => s + i.price * i.qty, 0),
    [state.items],
  )
  const itemCount = useMemo(() => state.items.reduce((s, i) => s + i.qty, 0), [state.items])

  const stateValue = useMemo<CartStateSnapshot>(
    () => ({
      items: state.items,
      open: state.open,
      total,
      itemCount,
    }),
    [state.items, state.open, total, itemCount],
  )

  const actionsValue = useMemo<CartActions>(
    () => ({ addItem, removeItem, setQty, openCart, closeCart, clearCart }),
    [addItem, removeItem, setQty, openCart, closeCart, clearCart],
  )

  return (
    <CartActionsContext.Provider value={actionsValue}>
      <CartStateContext.Provider value={stateValue}>{children}</CartStateContext.Provider>
    </CartActionsContext.Provider>
  )
}

/** Subscribe to cart contents / drawer open state (re-renders when they change). */
export function useCartState() {
  const ctx = useContext(CartStateContext)
  if (!ctx) throw new Error('useCartState must be used within CartProvider')
  return ctx
}

/** Stable actions only — use in lists (e.g. shop grid) to avoid re-rendering every card on cart updates. */
export function useCartActions() {
  const ctx = useContext(CartActionsContext)
  if (!ctx) throw new Error('useCartActions must be used within CartProvider')
  return ctx
}

/** Full cart API; prefer `useCartState` + `useCartActions` in hot paths. */
export function useCart(): CartStateSnapshot & CartActions {
  return { ...useCartState(), ...useCartActions() }
}
