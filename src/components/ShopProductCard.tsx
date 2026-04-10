import { lazy, memo, Suspense, useCallback, useState } from 'react'
import type { Product } from '../content/siteContent'
import { formatPrice } from '../config'
import { useCartActions } from '../CartContext'
import { trackViewContent } from '../lib/metaPixel'

const ProductModal = lazy(() => import('./ProductModal').then(m => ({ default: m.ProductModal })))

type Props = {
  product: Product
}

export const ShopProductCard = memo(function ShopProductCard({ product }: Props) {
  const { addItem } = useCartActions()
  const [detailOpen, setDetailOpen] = useState(false)

  const openDetail = useCallback(() => {
    trackViewContent(product.id, product.name, product.price)
    setDetailOpen(true)
  }, [product.id, product.name, product.price])
  const closeDetail = useCallback(() => setDetailOpen(false), [])

  const onAdd = useCallback(() => {
    addItem({ id: product.id, name: product.name, price: product.price, image: product.image })
  }, [addItem, product.id, product.name, product.price, product.image])

  return (
    <>
      <article className="shop-card">
        <button
          className="shop-card__img-btn"
          onClick={openDetail}
          aria-label={`View ${product.name}`}
        >
          {product.badge && <span className="product-badge">{product.badge}</span>}
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            decoding="async"
            width={400}
            height={400}
            sizes="(max-width: 639px) 50vw, (max-width: 999px) 33vw, 220px"
            fetchPriority="low"
          />
        </button>
        <div className="shop-card__body">
          <h3 className="shop-card__name">{product.name}</h3>
          {product.weight && <p className="shop-card__weight">{product.weight}</p>}
          <div className="shop-card__footer">
            <span className="shop-card__price">{formatPrice(product.price)}</span>
            <button type="button" className="btn btn--primary btn--sm" onClick={onAdd}>
              Add
            </button>
          </div>
        </div>
      </article>

      {detailOpen && <Suspense fallback={null}><ProductModal product={product} onClose={closeDetail} /></Suspense>}
    </>
  )
})
