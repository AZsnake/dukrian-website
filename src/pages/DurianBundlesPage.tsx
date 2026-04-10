import { Link } from 'react-router-dom'
import { SEOHead } from '../components/seo/SEOHead'
import { Breadcrumbs } from '../components/seo/Breadcrumbs'
import { BtnLink } from '../components/BtnLink'
import { SITE } from '../config'

export default function DurianBundlesPage() {
  return (
    <>
      <SEOHead
        title="Durian Bundles Singapore — Party Packs & Multi-Variety Sets"
        description="Durian bundles & party packs from Dukrian Singapore. Tasting sets, corporate packages & family bundles with Blackgold MSW & D24 Sultan."
        path="/durian-bundles/"
        ogType="article"
        article={{ publishedTime: '2025-02-01', modifiedTime: '2026-04-01' }}
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: 'What durian bundles does Dukrian offer?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Dukrian offers party and office tasting bundles starting from S$198, family sharing bundles, and custom corporate event packages. Bundles can include a mix of Blackgold MSW, D24 Sultan, XO, Tekka, and seasonal varieties.',
              },
            },
            {
              '@type': 'Question',
              name: 'Can I customise a durian bundle?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes. WhatsApp Dukrian at +65 8483 8466 with your headcount, preferred varieties, and any dietary requirements. We will propose a custom bundle with appropriate portions and pricing.',
              },
            },
          ],
        }}
      />

      <article className="seo-page">
        <Breadcrumbs items={[{ label: 'Durian Bundles', href: '/durian-bundles/' }]} />

        <header className="seo-page__hero">
          <h1>Durian Bundles: Multi-Variety Packs for Every Occasion</h1>
          <p className="seo-page__subtitle">
            From intimate family tastings to large-scale corporate events — our durian bundles bring
            Singapore's best varieties together in one order.
          </p>
        </header>

        <section className="seo-page__section reveal">
          <h2>Why Order a Durian Bundle?</h2>
          <p>
            The best way to experience durian isn't just eating one variety — it's comparing several
            side by side. A durian bundle lets you taste the rich, bittersweet depth of{' '}
            <Link to="/blackgold-msw/">Blackgold MSW</Link> right next to the gentle butteriness of{' '}
            <Link to="/d24-sultan/">D24 Sultan</Link>, the fermented complexity of XO, and the nutty
            sweetness of Tekka.
          </p>
          <p>
            At <strong>Dukrian ({SITE.nameCn})</strong>, we've designed our bundles around real scenarios:
            a family gathering of 4–6 people, an office team building session of 15–20, or a
            full-blown durian party for 50+. Each bundle is curated to give every guest a satisfying
            taste of multiple varieties.
          </p>
        </section>

        <section className="seo-page__section reveal">
          <h2>Our Bundle Options</h2>

          <div className="seo-page__price-cards">
            <div className="seo-page__price-card">
              <h3>Family Sharing Bundle</h3>
              <p className="seo-page__price">From S$120</p>
              <p>
                2–3 varieties for 4–6 people. Includes Blackgold MSW plus one or two seasonal
                varieties. Perfect for weekend family indulgence.
              </p>
            </div>
            <div className="seo-page__price-card">
              <h3>Party / Office Tasting Bundle</h3>
              <p className="seo-page__price">From S$198</p>
              <p>
                A curated selection of 3–4 varieties with generous portions. Ideal for team events,
                birthday parties, and social gatherings of 10–20 people.
              </p>
            </div>
            <div className="seo-page__price-card">
              <h3>Corporate Event Package</h3>
              <p className="seo-page__price">Custom pricing</p>
              <p>
                Large-scale durian experiences for 20–100+ guests. We handle variety selection,
                portioning, and logistics. Includes premium presentation and serving suggestions.
              </p>
            </div>
          </div>
        </section>

        <section className="seo-page__section reveal">
          <h2>What's Included in Our Bundles?</h2>
          <p>
            Every Dukrian bundle is built around our core commitment to freshness and quality:
          </p>
          <ul>
            <li>
              <strong>Multiple varieties</strong> — each bundle includes at least 2 durian varieties for
              comparison tasting
            </li>
            <li>
              <strong>De-husked and sealed</strong> — all flesh is freshly de-husked, portioned, and
              double-sealed for hygiene and convenience
            </li>
            <li>
              <strong>Same-day freshness</strong> — bundles are prepared on delivery day with the
              freshest available stock
            </li>
            <li>
              <strong>Variety labels</strong> — each box is clearly labelled so your guests know
              exactly what they're tasting
            </li>
            <li>
              <strong>Tasting notes</strong> — for larger events, we can provide tasting guides to
              help guests appreciate each variety
            </li>
          </ul>
        </section>

        <section className="seo-page__section reveal">
          <h2>Popular Bundle Combinations</h2>
          <p>Based on our most popular orders, here are some winning bundle ideas:</p>

          <h3>The "MSW Experience" (Best for Musang King fans)</h3>
          <p>
            Two or three boxes of <Link to="/blackgold-msw/">Blackgold MSW</Link> at different grades —
            compare standard and promo sizes side by side. Add a D24 Sultan for contrast.
          </p>

          <h3>The "Variety Tasting" (Best for groups and first-timers)</h3>
          <p>
            One box each of Blackgold MSW, D24 Sultan, XO, and Tekka or D13 Red Prawn. This gives
            every guest a journey through the durian flavour spectrum from mild to intense.
          </p>

          <h3>The "Office Crowd-Pleaser"</h3>
          <p>
            Three or more large boxes featuring <Link to="/d24-sultan/">D24 Sultan</Link> (the most
            approachable variety) as the base, plus one or two premium MSW boxes for the adventurous
            colleagues. Works well for 15–25 people.
          </p>
        </section>

        <section className="seo-page__section reveal">
          <h2>How to Order a Durian Bundle</h2>
          <ol>
            <li>
              <strong>Browse our catalogue</strong> — check the <Link to="/#shop">online shop</Link> for
              current varieties and pricing
            </li>
            <li>
              <strong>Build your bundle</strong> — add multiple products to your cart, or WhatsApp us
              at <strong>+65 {SITE.whatsappDisplay}</strong> for a custom bundle proposal
            </li>
            <li>
              <strong>Choose delivery</strong> — <Link to="/durian-delivery/">standard evening delivery</Link>{' '}
              or <Link to="/same-day-durian-delivery/">same-day delivery</Link> available
            </li>
            <li>
              <strong>Enjoy together</strong> — receive your freshly packed bundle and start tasting
            </li>
          </ol>
          <p>
            For events with specific timing needs, contact us early so we can reserve stock from the
            best lots. {SITE.freeDeliveryNote}
          </p>
        </section>

        <section className="seo-page__section reveal seo-page__section--faq">
          <h2>Frequently Asked Questions: Durian Bundles</h2>

          <details className="seo-faq">
            <summary>What durian bundles does Dukrian offer?</summary>
            <p>
              We offer family sharing bundles (from S$120), party/office tasting bundles (from S$198),
              and custom corporate event packages. Bundles can include Blackgold MSW, D24 Sultan, XO,
              Tekka, D13 Red Prawn, and other seasonal varieties.
            </p>
          </details>

          <details className="seo-faq">
            <summary>Can I customise a durian bundle?</summary>
            <p>
              Absolutely. WhatsApp us at +65 {SITE.whatsappDisplay} with your headcount, preferred
              varieties, budget, and any requirements. We'll propose a tailored bundle with appropriate
              portions and pricing.
            </p>
          </details>

          <details className="seo-faq">
            <summary>How far in advance should I order a bundle?</summary>
            <p>
              For standard bundles, same-day ordering is fine during season. For large corporate events
              (20+ guests), we recommend ordering at least 1–2 days in advance so we can reserve the
              best lots.
            </p>
          </details>

          <details className="seo-faq">
            <summary>Is delivery free for bundles?</summary>
            <p>
              {SITE.freeDeliveryNote} Most bundles exceed the free delivery threshold naturally.
              Self-collection at our Serangoon Garden location is always free.
            </p>
          </details>
        </section>

        <section className="seo-page__section reveal seo-page__cta-section">
          <h2>Build Your Durian Bundle</h2>
          <p>
            Whether it's two boxes for date night or twenty for the whole office, we'll make sure
            everyone gets their fill of premium durian.
          </p>
          <div className="seo-page__actions">
            <BtnLink to="/#shop">Shop All Durians</BtnLink>
            <BtnLink
              variant="ghost"
              href={`https://wa.me/${SITE.whatsappE164}?text=${encodeURIComponent('Hi Dukrian! I\'d like to order a durian bundle for [number] people.')}`}
              target="_blank"
              rel="noreferrer"
            >
              Custom Bundle via WhatsApp
            </BtnLink>
          </div>
        </section>
      </article>
    </>
  )
}
