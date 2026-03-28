import { lazy, memo, Suspense, useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react'
import { Leaf, Truck, Gift, Star, Sparkles } from 'lucide-react'
import { ScrollSceneContext } from './ScrollSceneContext'
import { useWindowScrollProgress } from './lib/useWindowScrollProgress'
import { CartProvider } from './CartContext'
import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'
import { ShopSection } from './components/ShopSection'
import { Cart } from './components/Cart'
import { SITE } from './config'
import { experienceCards } from './content/siteContent'
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
  return (
    <a className="exp-card" href={href} target="_blank" rel="noreferrer">
      <img src={image} alt="" loading="lazy" decoding="async" width={522} height={294} />
      <div className="exp-card__body">
        <h3>{title}</h3>
        <p>{blurb}</p>
        <span className="exp-card__cta">View on site →</span>
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
  const [slowHint, setSlowHint] = useState(false)

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

  useEffect(() => {
    const id = window.setTimeout(() => setSlowHint(true), 10_000)
    return () => window.clearTimeout(id)
  }, [])

  return (
    <CartProvider>
      <ScrollSceneContext.Provider value={scrollSceneValue}>
        <div className="app" id="top">
          <Suspense fallback={<div className="durian-canvas durian-canvas--shell" aria-hidden />}>
            <DurianCanvas onLoadProgress={onLoadProgress} />
          </Suspense>

          {assetsLoading && (
            <div className="load-overlay" role="status" aria-live="polite" aria-busy="true">
              <div className="load-overlay__spinner" />
              <p className="load-overlay__text">Loading scene…</p>
              {slowHint && (
                <p className="load-overlay__hint">
                  If this takes long, add <code>durian-compressed.glb</code> under{' '}
                  <code>web/public/models/</code>, or check the network tab.
                </p>
              )}
            </div>
          )}

          <div className="content-layer">
            <Header />

            <main>
              {/* ── Hero ─────────────────────────────────── */}
              <section className="hero" aria-labelledby="hero-title">
                <div className="hero__inner">
                  <p className="eyebrow">Fresh durian delivery</p>
                  <h1 id="hero-title" className="hero__title">
                    {SITE.tagline}
                    <span className="hero__title-sub">{SITE.subtitle}</span>
                  </h1>
                  <p className="hero__lede">{SITE.description}</p>
                  <div className="hero__actions">
                    <a className="btn btn--primary" href="#shop">
                      Shop Now
                    </a>
                    <a className="btn btn--ghost" href="#experiences">
                      Experiences
                    </a>
                  </div>
                  <p className="hero__scroll-hint">Scroll to explore — the durian tilts with your pointer.</p>
                </div>
              </section>

              {/* ── Shop ─────────────────────────────────── */}
              <ShopSection />

              {/* ── Happiness Delivered ──────────────────── */}
              <section className="section section--tint" id="story">
                <div className="section__inner section__inner--split">
                  <div>
                    <h2 className="section__title">Happiness, Delivered</h2>
                    <p className="section__prose">
                      DurianBB sources the freshest seasonal durian directly from orchards across Malaysia. Every
                      box is selected by hand, packed with care, and delivered to your door.
                    </p>
                    <p className="section__prose">
                      We believe opening a DurianBB box should feel like a small celebration — because happiness
                      really can be delivered.
                    </p>
                    <a
                      className="btn btn--ghost"
                      href={`${SITE.origin}/about-us`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Our Story →
                    </a>
                  </div>
                  <div className="about-img-wrap">
                    <img
                      src={`${SITE.origin}/image/cache/data/theme/home/gallery/durianbb/group-1156_071025104825-522x294@1x.png`}
                      alt="DurianBB signature series"
                      loading="lazy"
                      className="about-img"
                    />
                  </div>
                </div>
              </section>

              {/* ── Stores & Experiences ─────────────────── */}
              <section className="section" id="experiences">
                <div className="section__inner">
                  <h2 className="section__title">Stores &amp; Experiences</h2>
                  <p className="section__prose section__prose--tight">
                    Step into parks, academies, and city counters — each with its own rhythm and menu.
                  </p>
                  <div className="card-grid">
                    {experienceCards.map((c) => (
                      <ExperienceCard
                        key={c.href}
                        href={c.href}
                        image={c.image}
                        title={c.title}
                        blurb={c.blurb}
                      />
                    ))}
                  </div>
                </div>
              </section>

              {/* ── Why DurianBB ─────────────────────────── */}
              <section className="section section--tint" id="why">
                <div className="section__inner">
                  <h2 className="section__title">
                    Why DurianBB <Sparkles size={18} className="section__stars" aria-hidden />
                  </h2>
                  <div className="why-grid">
                    {[
                      { Icon: Leaf, title: 'Farm Fresh', body: 'Sourced every season from trusted orchards in Pahang, Johor, and Penang.' },
                      { Icon: Truck, title: 'Fast Delivery', body: 'Same-day and next-day delivery options across the Klang Valley and beyond.' },
                      { Icon: Gift, title: 'Unique Gifts', body: 'From Forever Cubes to plushies — we have something for every durian lover.' },
                      { Icon: Star, title: 'Trusted Quality', body: 'Every batch is hand-selected and graded before it reaches your door.' },
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
