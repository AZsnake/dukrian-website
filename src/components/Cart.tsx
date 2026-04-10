import { lazy, Suspense, useState } from 'react'
import { ShoppingCart } from 'lucide-react'
import { formatPrice, SITE } from '../config'
import { useCart } from '../CartContext'
import { trackInitiateCheckout } from '../lib/metaPixel'

const CheckoutModal = lazy(() => import('./CheckoutModal').then(m => ({ default: m.CheckoutModal })))

export function Cart() {
  const { items, open, total, itemCount, removeItem, setQty, closeCart } = useCart()
  const [checkoutOpen, setCheckoutOpen] = useState(false)

  return (
    <>
      {open && <div className="cart-overlay" onClick={closeCart} aria-hidden="true" />}

      <aside
        className={`cart-drawer${open ? ' cart-drawer--open' : ''}`}
        aria-label="Shopping cart"
        aria-hidden={open ? undefined : true}
        inert={!open ? true : undefined}
      >
        <div className="cart-drawer__header">
          <h2 className="cart-drawer__title">
            Cart
            {itemCount > 0 && <span className="cart-count-badge">{itemCount}</span>}
          </h2>
          <button className="cart-drawer__close icon-btn" onClick={closeCart} aria-label="Close cart">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        {items.length === 0 ? (
          <div className="cart-empty">
            <ShoppingCart size={42} className="cart-empty__icon" aria-hidden />
            <p>Your cart is empty</p>
            <button className="btn btn--ghost btn--sm" onClick={closeCart}>
              Continue shopping
            </button>
          </div>
        ) : (
          <>
            <ul className="cart-items" role="list">
              {items.map((item) => (
                <li key={item.id} className="cart-item">
                  <img src={item.image} alt={item.name} className="cart-item__img" loading="lazy" width={64} height={64} />
                  <div className="cart-item__info">
                    <p className="cart-item__name">{item.name}</p>
                    <p className="cart-item__price">{formatPrice(item.price)}</p>
                    <div className="qty-control qty-control--sm">
                      <button
                        className="qty-btn"
                        onClick={() => setQty(item.id, item.qty - 1)}
                        aria-label="Decrease"
                      >
                        −
                      </button>
                      <span className="qty-val">{item.qty}</span>
                      <button
                        className="qty-btn"
                        onClick={() => setQty(item.id, item.qty + 1)}
                        aria-label="Increase"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <button
                    className="cart-item__remove icon-btn"
                    onClick={() => removeItem(item.id)}
                    aria-label={`Remove ${item.name}`}
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                      <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                  </button>
                </li>
              ))}
            </ul>

            <div className="cart-footer">
              <div className="cart-total-row">
                <span>Subtotal</span>
                <span>{formatPrice(total)}</span>
              </div>
              <p className="cart-delivery-note">
                {SITE.deliveryFeeNote} {SITE.freeDeliveryNote} WhatsApp {SITE.whatsappDisplay} for exact fees tonight.
              </p>
              <button
                className="btn btn--primary cart-checkout-btn"
                onClick={() => {
                  trackInitiateCheckout(
                    items.map((i) => ({ id: i.id, qty: i.qty, price: i.price })),
                    total,
                  )
                  setCheckoutOpen(true)
                }}
              >
                Checkout →
              </button>
            </div>
          </>
        )}
      </aside>

      {checkoutOpen && (
        <Suspense fallback={null}>
          <CheckoutModal
            items={items}
            total={total}
            onClose={() => setCheckoutOpen(false)}
            onSuccess={() => {
              setCheckoutOpen(false)
              closeCart()
            }}
          />
        </Suspense>
      )}
    </>
  )
}
