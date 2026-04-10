import { Link } from 'react-router-dom'
import { SEOHead } from '../components/seo/SEOHead'
import { Breadcrumbs } from '../components/seo/Breadcrumbs'
import { SITE } from '../config'

export default function DurianDeliveryPage() {
  return (
    <>
      <SEOHead
        title="Durian Delivery Singapore — Fresh Evening Delivery Island-Wide"
        description="Fresh durian delivery across Singapore from Dukrian Serangoon Garden. Evening delivery 7–11 PM, free delivery from ~S$105. Blackgold MSW, D24 Sultan & more delivered de-husked and double-sealed."
        path="/durian-delivery"
        ogType="article"
        article={{ publishedTime: '2025-01-20', modifiedTime: '2026-04-01' }}
        jsonLd={[
          {
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Dukrian Durian Delivery Singapore',
            description: 'Fresh durian delivery across Singapore from Serangoon Garden. Evening delivery 7–11 PM daily during durian season.',
            provider: {
              '@type': 'LocalBusiness',
              name: `${SITE.name} ${SITE.nameCn}`,
              address: { '@type': 'PostalAddress', streetAddress: '48 Crowhurst Drive', addressLocality: 'Singapore', postalCode: '557927', addressCountry: 'SG' },
            },
            areaServed: { '@type': 'City', name: 'Singapore' },
            serviceType: 'Food delivery',
          },
          {
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'Does Dukrian deliver durian island-wide in Singapore?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes, Dukrian delivers fresh durian across Singapore. Delivery routes typically run between 7 PM and 11 PM daily during durian season. Delivery fee is about S$8–S$10 per location, with free delivery available for orders above approximately S$105–S$120.',
                },
              },
              {
                '@type': 'Question',
                name: 'What are the delivery hours for Dukrian?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Dukrian operates daily from 2 PM to 11 PM / midnight. Fresh stock arrives around 6 PM from Malaysia. Delivery routes run 7 PM to 11 PM. For same-day delivery, order by 6 PM.',
                },
              },
            ],
          },
        ]}
      />

      <article className="seo-page">
        <Breadcrumbs items={[{ label: 'Durian Delivery', href: '/durian-delivery' }]} />

        <header className="seo-page__hero">
          <h1>Durian Delivery in Singapore: Fresh to Your Door</h1>
          <p className="seo-page__subtitle">
            Premium de-husked durian delivered across Singapore every evening. From our Serangoon
            Garden store to your table — fresh within hours of arrival from Malaysia.
          </p>
        </header>

        <section className="seo-page__section">
          <h2>How Our Delivery Works</h2>
          <p>
            At <strong>Dukrian ({SITE.nameCn})</strong>, freshness drives every step of our delivery
            process. Our durians travel from Malaysian plantations to your Singapore address in a
            carefully timed chain:
          </p>
          <ol>
            <li>
              <strong>Morning harvest</strong> — naturally tree-dropped durians are collected from
              Pahang Highland plantations
            </li>
            <li>
              <strong>Same-day processing</strong> — fruit is de-husked, graded, and double-sealed
              in food-grade packaging
            </li>
            <li>
              <strong>Rush to Singapore</strong> — fresh stock arrives at our Serangoon Garden store
              around 6 PM daily
            </li>
            <li>
              <strong>Evening delivery routes</strong> — our delivery team sets out between 7 PM and
              11 PM across Singapore
            </li>
            <li>
              <strong>At your door</strong> — you receive durian that was on a tree that same morning
            </li>
          </ol>
        </section>

        <section className="seo-page__section">
          <h2>Delivery Coverage and Timing</h2>

          <h3>Island-Wide Delivery</h3>
          <p>
            We deliver to all areas of Singapore, including:
          </p>
          <ul>
            <li><strong>Central</strong> — Orchard, Toa Payoh, Bishan, Novena, Ang Mo Kio</li>
            <li><strong>East</strong> — Bedok, Tampines, Pasir Ris, Changi, Marine Parade</li>
            <li><strong>West</strong> — Jurong, Clementi, Bukit Batok, Choa Chu Kang</li>
            <li><strong>North</strong> — Woodlands, Yishun, Sembawang, Admiralty</li>
            <li><strong>North-East</strong> — Hougang, Sengkang, Punggol, Serangoon (our home base!)</li>
          </ul>

          <h3>Delivery Hours</h3>
          <p>
            {SITE.deliveryWindow}. Our store operates {SITE.hours.toLowerCase()}.
            For <Link to="/same-day-durian-delivery">same-day delivery</Link>, place your order by 6 PM.
          </p>

          <h3>Self-Collection</h3>
          <p>
            Prefer to pick up? Visit our Serangoon Garden location at{' '}
            <strong>{SITE.address}</strong>. Self-collection is always free regardless of order size,
            and you can inspect your durian before taking it home.
          </p>
        </section>

        <section className="seo-page__section">
          <h2>Delivery Fees and Free Delivery</h2>
          <div className="seo-page__price-cards">
            <div className="seo-page__price-card">
              <h3>Standard Delivery</h3>
              <p className="seo-page__price">S$8–S$10</p>
              <p>Per delivery location. Exact fee depends on distance from Serangoon Garden.</p>
            </div>
            <div className="seo-page__price-card seo-page__price-card--highlight">
              <h3>Free Delivery</h3>
              <p className="seo-page__price">Orders from ~S$105–S$120</p>
              <p>{SITE.freeDeliveryNote}</p>
            </div>
            <div className="seo-page__price-card">
              <h3>Self-Collection</h3>
              <p className="seo-page__price">Free</p>
              <p>Pick up at {SITE.address}. Available during operating hours.</p>
            </div>
          </div>
          <p>
            <strong>Pro tip:</strong> ordering with friends or neighbours to reach the free delivery
            threshold is a popular strategy. Two boxes of{' '}
            <Link to="/blackgold-msw">Blackgold MSW</Link> typically qualifies for free delivery.
          </p>
        </section>

        <section className="seo-page__section">
          <h2>How We Keep Your Durian Fresh During Delivery</h2>
          <p>
            Durian is a perishable fruit — once de-husked, the clock is ticking. Our delivery protocol
            is designed to maintain freshness:
          </p>
          <ul>
            <li>
              <strong>Double-sealed packaging</strong> — each box is vacuum-sealed and then sealed in
              a secondary container to prevent aroma leakage and maintain temperature
            </li>
            <li>
              <strong>Insulated delivery bags</strong> — our drivers use insulated thermal bags to
              keep durian at optimal temperature throughout the route
            </li>
            <li>
              <strong>Optimised routing</strong> — we plan delivery routes to minimise time in transit,
              ensuring each order arrives within a predictable time window
            </li>
            <li>
              <strong>Direct-to-door</strong> — no middlemen, no warehousing. Your durian goes from
              our store to your door in one step
            </li>
          </ul>
        </section>

        <section className="seo-page__section">
          <h2>Our Satisfaction Promise</h2>
          <p>
            We stand behind every delivery with our <strong>eat/baojiak promise</strong>: if the durian
            doesn't meet expectations, we'll arrange a replacement. Fresh durian is a natural product and
            no two fruits are identical, but we'll always make it right.
          </p>
          <p>
            If there's any issue with your delivery — damaged packaging, quality concerns, or a
            missed delivery window — WhatsApp us immediately at{' '}
            <strong>+65 {SITE.whatsappDisplay}</strong> and we'll resolve it.
          </p>
        </section>

        <section className="seo-page__section seo-page__section--faq">
          <h2>Frequently Asked Questions: Durian Delivery</h2>

          <details className="seo-faq">
            <summary>Does Dukrian deliver island-wide in Singapore?</summary>
            <p>
              Yes. We deliver across all areas of Singapore. Delivery routes run 7–11 PM daily during
              season. Fee is S$8–S$10 per location, with free delivery above ~S$105–S$120.
            </p>
          </details>

          <details className="seo-faq">
            <summary>What are the delivery hours?</summary>
            <p>
              Our store operates {SITE.hours.toLowerCase()}. {SITE.deliveryWindow}. For same-day delivery,
              order by 6 PM.
            </p>
          </details>

          <details className="seo-faq">
            <summary>Can I schedule a specific delivery time?</summary>
            <p>
              We deliver within the 7–11 PM window and try to accommodate timing preferences where
              possible. WhatsApp us with your preferred time and we'll do our best, though exact times
              depend on routing.
            </p>
          </details>

          <details className="seo-faq">
            <summary>What if I'm not home when the driver arrives?</summary>
            <p>
              Our driver will contact you before arrival. If you're temporarily unavailable, we can
              leave the package in a safe spot (e.g., outside your door) per your instructions. For
              condos, we can leave at the lobby or guardhouse with your permission.
            </p>
          </details>

          <details className="seo-faq">
            <summary>Do you deliver to offices and events?</summary>
            <p>
              Yes. We deliver to offices, event venues, and any Singapore address. For large{' '}
              <Link to="/durian-bundles">event orders</Link>, we can arrange earlier delivery
              times by prior arrangement.
            </p>
          </details>
        </section>

        <section className="seo-page__section seo-page__cta-section">
          <h2>Order Fresh Durian Delivery Today</h2>
          <p>
            Shop our full range of <Link to="/blackgold-msw">Blackgold MSW</Link>,{' '}
            <Link to="/d24-sultan">D24 Sultan</Link>, and more. Free delivery on qualifying orders.
          </p>
          <div className="seo-page__actions">
            <Link to="/#shop" className="btn btn--primary">Shop & Get Delivery</Link>
            <a
              className="btn btn--ghost"
              href={`https://wa.me/${SITE.whatsappE164}`}
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp for Delivery Questions
            </a>
          </div>
        </section>
      </article>
    </>
  )
}
