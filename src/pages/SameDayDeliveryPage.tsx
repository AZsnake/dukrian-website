import { Link } from 'react-router-dom'
import { SEOHead } from '../components/seo/SEOHead'
import { Breadcrumbs } from '../components/seo/Breadcrumbs'
import { SITE } from '../config'

export default function SameDayDeliveryPage() {
  return (
    <>
      <SEOHead
        title="Same Day Durian Delivery Singapore — Order by 6 PM"
        description="Same-day durian delivery across Singapore from Dukrian. Order Blackgold MSW, D24 Sultan & more by 6 PM — delivered fresh 7–11 PM the same evening. De-husked, double-sealed, farm-to-table freshness."
        path="/same-day-durian-delivery"
        ogType="article"
        article={{ publishedTime: '2025-01-20', modifiedTime: '2026-04-01' }}
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: 'Can I get same-day durian delivery in Singapore?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes. Dukrian offers same-day durian delivery across Singapore. Order by 6 PM on the website or via WhatsApp, and your fresh de-husked durian will be delivered between 7 PM and 11 PM the same evening.',
              },
            },
            {
              '@type': 'Question',
              name: 'What is the cut-off time for same-day durian delivery?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'The cut-off for same-day delivery at Dukrian is usually 6 PM. Orders placed after 6 PM will be scheduled for the next day. Fresh stock arrives from Malaysia around 6 PM, so same-day orders use the freshest available durian.',
              },
            },
          ],
        }}
      />

      <article className="seo-page">
        <Breadcrumbs items={[{ label: 'Same Day Durian Delivery', href: '/same-day-durian-delivery' }]} />

        <header className="seo-page__hero">
          <h1>Same Day Durian Delivery in Singapore</h1>
          <p className="seo-page__subtitle">
            Craving durian tonight? Order by 6 PM and enjoy fresh, de-husked premium durian
            delivered to your door the same evening.
          </p>
        </header>

        <section className="seo-page__section">
          <h2>How Same-Day Delivery Works</h2>
          <p>
            At <strong>Dukrian ({SITE.nameCn})</strong>, same-day delivery isn't just convenient — it's
            how we ensure you receive the <em>freshest possible</em> durian. Here's the timeline:
          </p>
          <div className="seo-page__timeline">
            <div className="seo-page__timeline-item">
              <span className="seo-page__timeline-time">Morning</span>
              <p>Naturally tree-dropped durians are harvested at Pahang Highland plantations in Malaysia</p>
            </div>
            <div className="seo-page__timeline-item">
              <span className="seo-page__timeline-time">Afternoon</span>
              <p>Fruit is de-husked, graded to Blackgold/premium standards, and double-sealed</p>
            </div>
            <div className="seo-page__timeline-item">
              <span className="seo-page__timeline-time">~6 PM</span>
              <p>Fresh stock arrives at our Serangoon Garden store. This is the order cut-off time.</p>
            </div>
            <div className="seo-page__timeline-item">
              <span className="seo-page__timeline-time">7–11 PM</span>
              <p>Our delivery team fans out across Singapore. Your durian arrives at your door.</p>
            </div>
          </div>
          <p>
            This means the durian you enjoy tonight was literally on a tree in Pahang this morning.
            That's what "farm-to-table within approximately 12 hours" really means.
          </p>
        </section>

        <section className="seo-page__section">
          <h2>Same-Day Delivery: Step by Step</h2>
          <ol>
            <li>
              <strong>Browse and order</strong> — visit our <Link to="/#shop">online shop</Link> and
              add your preferred durians to the cart. Choose from{' '}
              <Link to="/blackgold-msw">Blackgold MSW</Link>, <Link to="/d24-sultan">D24 Sultan</Link>,
              XO, Tekka, and more.
            </li>
            <li>
              <strong>Complete checkout by 6 PM</strong> — fill in your delivery address and preferred
              payment method (PayNow, PayLah, card). Orders placed after 6 PM are queued for the next day.
            </li>
            <li>
              <strong>We prepare your order</strong> — once fresh stock arrives around 6 PM, your order
              is packed from the freshest available lot, double-sealed, and placed into insulated bags.
            </li>
            <li>
              <strong>Delivery between 7–11 PM</strong> — our driver will contact you shortly before
              arrival. Average delivery time within Singapore is 30–60 minutes from dispatch.
            </li>
            <li>
              <strong>Enjoy immediately</strong> — for the best flavour and texture, enjoy your durian
              within 2–3 hours of receiving it at room temperature.
            </li>
          </ol>
        </section>

        <section className="seo-page__section">
          <h2>Same-Day Delivery Fees</h2>
          <p>
            Same-day delivery follows the same fee structure as our{' '}
            <Link to="/durian-delivery">standard delivery</Link>:
          </p>
          <div className="seo-page__price-cards">
            <div className="seo-page__price-card">
              <h3>Standard Same-Day</h3>
              <p className="seo-page__price">S$8–S$10</p>
              <p>Per delivery location. No express surcharge for same-day orders placed before 6 PM.</p>
            </div>
            <div className="seo-page__price-card seo-page__price-card--highlight">
              <h3>Free Same-Day Delivery</h3>
              <p className="seo-page__price">Orders from ~S$105–S$120</p>
              <p>{SITE.freeDeliveryNote}</p>
            </div>
          </div>
        </section>

        <section className="seo-page__section">
          <h2>When Same-Day Delivery is Available</h2>
          <p>
            Same-day delivery operates daily during <Link to="/durian-season">durian season</Link> (typically
            June–August and November–January) when fresh stock arrives from Malaysia every evening.
          </p>
          <p>
            During off-peak periods, availability depends on supply. We recommend checking our website
            or WhatsApp broadcast for current availability. If same-day isn't available, we'll let
            you know the next available delivery date.
          </p>
          <p>
            <strong>Self-collection alternative:</strong> If you need durian urgently and delivery
            slots are full, you can always collect from our store at <strong>{SITE.address}</strong> during
            operating hours ({SITE.hours.toLowerCase()}).
          </p>
        </section>

        <section className="seo-page__section">
          <h2>Tips for a Smooth Same-Day Delivery</h2>
          <ul>
            <li>
              <strong>Order early</strong> — while the cut-off is 6 PM, ordering earlier ensures we can
              reserve your preferred varieties from the day's lot
            </li>
            <li>
              <strong>Provide clear address details</strong> — include unit number, block number, and
              any gate/lobby access instructions to avoid delays
            </li>
            <li>
              <strong>Be available 7–11 PM</strong> — keep your phone handy; our driver will call
              shortly before arriving
            </li>
            <li>
              <strong>Have a plan to eat or store</strong> — fresh durian is best eaten promptly; if
              you can't eat immediately, refrigerate and consume within 2 days
            </li>
          </ul>
        </section>

        <section className="seo-page__section seo-page__section--faq">
          <h2>Frequently Asked Questions: Same-Day Delivery</h2>

          <details className="seo-faq">
            <summary>Can I get same-day durian delivery in Singapore?</summary>
            <p>
              Yes. Order by 6 PM on our website or via WhatsApp, and your fresh de-husked durian will
              be delivered between 7–11 PM the same evening, island-wide across Singapore.
            </p>
          </details>

          <details className="seo-faq">
            <summary>What is the cut-off time for same-day delivery?</summary>
            <p>
              The cut-off is usually 6 PM. Orders placed after 6 PM will be scheduled for the next
              available delivery day. Fresh stock arrives from Malaysia around 6 PM, so same-day
              orders use the freshest durian.
            </p>
          </details>

          <details className="seo-faq">
            <summary>Is there an extra charge for same-day delivery?</summary>
            <p>
              No. Same-day delivery is our standard service — there's no express surcharge. The same
              delivery fees apply: S$8–S$10, or free on orders from ~S$105–S$120.
            </p>
          </details>

          <details className="seo-faq">
            <summary>Can I choose a specific delivery time within the 7–11 PM window?</summary>
            <p>
              We try to accommodate timing preferences where possible. Let us know your preferred window
              via WhatsApp and we'll prioritise it in our routing, though exact times depend on the
              evening's delivery schedule.
            </p>
          </details>

          <details className="seo-faq">
            <summary>What if I miss the 6 PM cut-off?</summary>
            <p>
              You can still place your order — it will be delivered the next evening. Alternatively,
              come to our store for self-collection during operating hours.
            </p>
          </details>
        </section>

        <section className="seo-page__section seo-page__cta-section">
          <h2>Order Now for Same-Day Delivery</h2>
          <p>
            Fresh <Link to="/blackgold-msw">Blackgold MSW</Link>,{' '}
            <Link to="/d24-sultan">D24 Sultan</Link>, and more — at your door tonight.
          </p>
          <div className="seo-page__actions">
            <Link to="/#shop" className="btn btn--primary">Order Before 6 PM</Link>
            <a
              className="btn btn--ghost"
              href={`https://wa.me/${SITE.whatsappE164}?text=${encodeURIComponent('Hi Dukrian! I\'d like same-day delivery today.')}`}
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp for Quick Order
            </a>
          </div>
        </section>
      </article>
    </>
  )
}
