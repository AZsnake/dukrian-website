import { lazy, memo, Suspense, useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react'
import { Leaf, Truck, ShieldCheck, Star, Sparkles } from 'lucide-react'
import { ScrollSceneContext } from './ScrollSceneContext'
import { useWindowScrollProgress } from './lib/useWindowScrollProgress'
import { CartProvider } from './CartContext'
import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'
import { ShopSection } from './components/ShopSection'
import { Cart } from './components/Cart'
import { Loader } from './components/Loader'
import { BtnLink } from './components/BtnLink'
import { SEOHead } from './components/seo/SEOHead'
import { SITE } from './config'
import { orderHowCards } from './content/siteContent'
import './index.css'

const DurianCanvas = lazy(() =>
  import('./components/DurianCanvas').then((m) => ({ default: m.DurianCanvas })),
)

const ExperienceCard = memo(function ExperienceCard({
  href,
  image,
  title,
  blurb,
}: {
  href: string
  image: string
  title: string
  blurb: string
}) {
  const external = href.startsWith('http')
  return (
    <a
      className="exp-card"
      href={href}
      {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
    >
      <img src={image} alt={title} loading="lazy" decoding="async" width={522} height={294} />
      <div className="exp-card__body">
        <h3>{title}</h3>
        <p>{blurb}</p>
        <span className="exp-card__cta">{external ? 'Open WhatsApp →' : 'View →'}</span>
      </div>
    </a>
  )
})

export default function App() {
  const { progressRef, reducedMotion } = useWindowScrollProgress()
  const reducedMotionRef = useRef(reducedMotion)
  useLayoutEffect(() => {
    reducedMotionRef.current = reducedMotion
  }, [reducedMotion])
  const pointerRef = useRef({ x: 0, y: 0 })
  const [assetsLoading, setAssetsLoading] = useState(true)

  useEffect(() => {
    let raf = 0
    let cx = 0
    let cy = 0
    const flush = () => {
      raf = 0
      const w = window.innerWidth || 1
      const h = window.innerHeight || 1
      pointerRef.current.x = (cx / w) * 2 - 1
      pointerRef.current.y = (cy / h) * 2 - 1
    }
    const onMove = (e: PointerEvent) => {
      cx = e.clientX
      cy = e.clientY
      if (!raf) raf = requestAnimationFrame(flush)
    }
    window.addEventListener('pointermove', onMove, { passive: true })
    return () => {
      window.removeEventListener('pointermove', onMove)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  const onLoadProgress = useCallback((active: boolean) => setAssetsLoading(active), [])

  const scrollSceneValue = useMemo(
    () => ({ progressRef, reducedMotion, reducedMotionRef, pointerRef }),
    [progressRef, reducedMotion, reducedMotionRef, pointerRef],
  )


  return (
    <CartProvider>
      <SEOHead
        title={`${SITE.name} ${SITE.nameCn} | Fresh MSW Durian Delivery Singapore`}
        description="Premium Pahang Highland Blackgold MSW durian delivered fresh across Singapore from Serangoon Garden. Same-day delivery, D24 Sultan, bundles & deals."
        path="/"
        jsonLd={[
          {
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: `${SITE.name} ${SITE.nameCn}`,
            url: SITE.origin,
            potentialAction: {
              '@type': 'SearchAction',
              target: `${SITE.origin}/#shop?q={search_term_string}`,
              'query-input': 'required name=search_term_string',
            },
          },
          {
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: `${SITE.name} ${SITE.nameCn}`,
            url: SITE.origin,
            logo: `${SITE.origin}/favicon.png`,
            contactPoint: {
              '@type': 'ContactPoint',
              telephone: `+${SITE.whatsappE164}`,
              contactType: 'customer service',
              areaServed: 'SG',
              availableLanguage: ['English', 'Chinese'],
            },
            sameAs: [SITE.instagramUrl, SITE.tiktokUrl, SITE.facebookUrl],
          },
        ]}
      />
      <ScrollSceneContext.Provider value={scrollSceneValue}>
        <div className="app" id="top">
          <Suspense fallback={<div className="durian-canvas durian-canvas--shell" aria-hidden />}>
            <DurianCanvas onLoadProgress={onLoadProgress} />
          </Suspense>

          {assetsLoading && <Loader overlay />}

          <div className="content-layer">
            <Header />

            <main>
              {/* ── Hero ─────────────────────────────────── */}
              <section className="hero" aria-labelledby="hero-title">
                <div className="hero__inner">
                  <p className="eyebrow">Serangoon Garden · Singapore</p>
                  <h1 id="hero-title" className="hero__title">
                    {SITE.tagline}
                    <span className="hero__title-sub">{SITE.subtitle}</span>
                  </h1>
                  <p className="hero__lede">{SITE.description}</p>
                  <div className="hero__actions">
                    <BtnLink href="#shop">Shop &amp; checkout</BtnLink>
                    <BtnLink variant="ghost" href="#channels">How to order</BtnLink>
                  </div>
                  <p className="hero__scroll-hint">Scroll to explore — the 3D durian follows your pointer.</p>
                </div>
              </section>

              {/* ── Shop ─────────────────────────────────── */}
              <ShopSection />

              {/* ── Delivery & location ─────────────────── */}
              <section className="section section--tint reveal" id="delivery">
                <div className="section__inner section__inner--split">
                  <div>
                    <h2 className="section__title">From Malaysian farms to your table</h2>
                    <p className="section__prose">
                      Nestled in Serangoon Garden, Dukrian chases the best seasonal lots of Pahang Highland Blackgold
                      Musang King from reputable plantations. Fruit is de-husked, double-sealed, and rushed so many
                      customers enjoy farm-to-table freshness within about twelve hours.
                    </p>
                    <p className="section__prose">
                      Operating daily {SITE.hours.toLowerCase()}. {SITE.deliveryWindow}. {SITE.sameDayCutoff}{' '}
                      {SITE.freeDeliveryNote}
                    </p>
                    <BtnLink
                      variant="ghost"
                      href={`https://wa.me/${SITE.whatsappE164}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      WhatsApp +65 {SITE.whatsappDisplay} →
                    </BtnLink>
                  </div>
                  <div className="about-img-wrap">
                    <img
                      src="/images/dukrian/8.webp"
                      alt="Premium durian flesh ready to enjoy"
                      loading="lazy"
                      decoding="async"
                      width={800}
                      height={450}
                      className="about-img"
                    />
                  </div>
                </div>
              </section>

              {/* ── Order channels ───────────────────────── */}
              <section className="section reveal" id="channels">
                <div className="section__inner">
                  <h2 className="section__title">How to order on Dukrian</h2>
                  <p className="section__prose section__prose--tight">
                    Everything runs on this website: pick your boxes, open the cart, and complete checkout. Use WhatsApp
                    for broadcast updates and quick questions — no need to leave for another marketplace.
                  </p>
                  <div className="card-grid">
                    {orderHowCards.map((c) => (
                      <ExperienceCard
                        key={c.id}
                        href={c.href}
                        image={c.image}
                        title={c.title}
                        blurb={c.blurb}
                      />
                    ))}
                  </div>
                </div>
              </section>

              {/* ── Why Dukrian ─────────────────────────── */}
              <section className="section section--tint reveal" id="why">
                <div className="section__inner">
                  <h2 className="section__title">
                    Why Dukrian <Sparkles size={18} className="section__stars" aria-hidden />
                  </h2>
                  <div className="why-grid">
                    {[
                      {
                        Icon: Leaf,
                        title: 'Blackgold MSW focus',
                        body: 'Premium Pahang Highland Blackgold Musang King — richer, creamier, often bittersweet or boozy.',
                      },
                      {
                        Icon: Truck,
                        title: 'Evening delivery rhythm',
                        body: 'Fresh arrivals around 6 PM with routes typically between 7 PM and 11 PM across Singapore.',
                      },
                      {
                        Icon: ShieldCheck,
                        title: 'Eat / baojiak promise',
                        body: '100% satisfaction stance with replacements when fruit does not meet expectations.',
                      },
                      {
                        Icon: Star,
                        title: 'Generous portions',
                        body: 'Reviews often note boxes weighing above label — plus seasonal free-upsize promos.',
                      },
                    ].map(({ Icon, title, body }) => (
                      <div key={title} className="why-card">
                        <span className="why-card__icon" aria-hidden>
                          <Icon size={28} />
                        </span>
                        <h3 className="why-card__title">{title}</h3>
                        <p className="why-card__body">{body}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            </main>

            <Footer />
          </div>

          <Cart />
        </div>
      </ScrollSceneContext.Provider>
    </CartProvider>
  )
}
