import { useState } from 'react'
import { createPortal } from 'react-dom'
import { useCartActions } from '../CartContext'
import { formatPrice, SITE } from '../config'
import type { Product } from '../content/siteContent'

type Props = {
  product: Product
  onClose: () => void
}

const CATEGORY_LABELS: Record<string, string> = {
  signature: 'Blackgold MSW',
  variety: 'More varieties',
  bundle: 'Bundles & events',
}

export function ProductModal({ product, onClose }: Props) {
  const { addItem } = useCartActions()
  const [qty, setQty] = useState(1)
  const [added, setAdded] = useState(false)

  function handleAdd() {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      addQty: qty,
    })
    setAdded(true)
    setTimeout(onClose, 900)
  }

  return createPortal(
    <div className="modal-overlay" role="dialog" aria-modal aria-label={product.name} onClick={onClose}>
      <div className="product-modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        <div className="product-modal__layout">
          <div className="product-modal__media">
            <div className="product-modal__img-wrap">
              <img src={product.image} alt={product.name} className="product-modal__img" width={410} height={410} />
              {product.badge && <span className="product-badge product-badge--lg">{product.badge}</span>}
            </div>
          </div>

          <div className="product-modal__info">
            <p className="product-modal__cat">{CATEGORY_LABELS[product.category] ?? product.category}</p>
            <h2 className="product-modal__name">{product.name}</h2>
            {product.weight && <p className="product-modal__weight">Net weight: {product.weight}</p>}
            <p className="product-modal__price">{formatPrice(product.price)}</p>
            <p className="product-modal__desc">{product.description}</p>

            <div className="product-modal__qty-row">
              <span className="product-modal__qty-label">Qty</span>
              <div className="qty-control">
                <button
                  className="qty-btn"
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  disabled={qty <= 1}
                  aria-label="Decrease quantity"
                >
                  −
                </button>
                <span className="qty-val">{qty}</span>
                <button className="qty-btn" onClick={() => setQty((q) => q + 1)} aria-label="Increase quantity">
                  +
                </button>
              </div>
            </div>

            <button
              className={`btn btn--primary product-modal__add-btn${added ? ' btn--added' : ''}`}
              onClick={handleAdd}
              disabled={added}
            >
              {added ? '✓ Added to Cart' : `Add to Cart — ${formatPrice(product.price * qty)}`}
            </button>

            <a href={product.href} target="_blank" rel="noreferrer" className="product-modal__ext-link">
              Chat on WhatsApp about this item →
            </a>
            <p className="product-modal__fineprint">
              Photos are illustrative; today&apos;s stock and promos are confirmed when you check out on this site or chat on
              WhatsApp {SITE.whatsappDisplay}.
            </p>
          </div>
        </div>
      </div>
    </div>,
    document.body,
  )
}
