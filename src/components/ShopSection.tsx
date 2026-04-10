import { useMemo, useState, useTransition } from 'react'
import { products, type ProductCategory } from '../content/siteContent'
import { ShopProductCard } from './ShopProductCard'

type TabId = ProductCategory | 'all'

const TABS: { id: TabId; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'signature', label: 'Blackgold MSW' },
  { id: 'variety', label: 'More varieties' },
  { id: 'bundle', label: 'Bundles & events' },
]

export function ShopSection() {
  const [active, setActive] = useState<TabId>('all')
  const [, startTabTransition] = useTransition()

  const filtered = useMemo(
    () => (active === 'all' ? products : products.filter((p) => p.category === active)),
    [active],
  )

  return (
    <section className="section shop-section reveal" id="shop">
      <div className="section__inner">
        <h2 className="section__title">Shop Dukrian</h2>
        <p className="section__prose section__prose--tight">
          Browse de-husked boxes and bundles, add to cart, and check out on this site with your delivery or pickup details
          and preferred payment. Message us on WhatsApp anytime if you need help choosing.
        </p>

        <div className="shop-tabs" role="tablist" aria-label="Product categories">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={active === tab.id}
              className={`shop-tab${active === tab.id ? ' shop-tab--active' : ''}`}
              onClick={() => startTabTransition(() => setActive(tab.id))}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="shop-grid">
          {filtered.map((product) => (
            <ShopProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
