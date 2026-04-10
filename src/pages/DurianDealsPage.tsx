import { Link } from 'react-router-dom'
import { SEOHead } from '../components/seo/SEOHead'
import { Breadcrumbs } from '../components/seo/Breadcrumbs'
import { BtnLink } from '../components/BtnLink'
import { SITE } from '../config'

export default function DurianDealsPage() {
  return (
    <>
      <SEOHead
        title="Durian Deals Singapore 2026 — Promotions & Discounts"
        description="Find the best durian deals in Singapore at Dukrian. Seasonal promotions on Blackgold MSW, D24 Sultan, free upsize offers, bundle discounts, and free delivery. Updated for 2026 durian season."
        path="/durian-deals"
        ogType="article"
        article={{ publishedTime: '2025-03-01', modifiedTime: '2026-04-01' }}
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: 'What durian deals does Dukrian currently offer?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Dukrian regularly offers free upsize promotions on Blackgold MSW (520g for S$68 instead of 420g), free delivery on orders above S$105–S$120, and seasonal multi-box discounts. Follow our WhatsApp broadcast for real-time deal alerts.',
              },
            },
            {
              '@type': 'Question',
              name: 'When is the cheapest time to buy durian in Singapore?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Durian prices in Singapore are lowest during peak harvest months — typically late June to early August and late November to January. Mid-season surplus drives prices down, and many sellers including Dukrian run special promotions during these peak periods.',
              },
            },
          ],
        }}
      />

      <article className="seo-page">
        <Breadcrumbs items={[{ label: 'Durian Deals', href: '/durian-deals' }]} />

        <header className="seo-page__hero">
          <h1>Durian Deals Singapore: Best Promotions for 2026</h1>
          <p className="seo-page__subtitle">
            Premium durian doesn't have to break the bank. Discover our current promotions, seasonal
            discounts, and smart ways to get more durian for your dollar.
          </p>
        </header>

        <section className="seo-page__section reveal">
          <h2>Current Promotions at Dukrian</h2>
          <p>
            At <strong>Dukrian ({SITE.nameCn})</strong>, we believe premium durian should be accessible.
            Here are our ongoing and seasonal deals:
          </p>

          <div className="seo-page__price-cards">
            <div className="seo-page__price-card seo-page__price-card--highlight">
              <h3>Free Upsize Promo — Blackgold MSW</h3>
              <p className="seo-page__price">S$68 for ~520g</p>
              <p>
                During selected runs, get approximately 100g extra flesh compared to the standard box —
                that's nearly 25% more <Link to="/blackgold-msw">Blackgold MSW</Link> at exceptional value.
              </p>
            </div>
            <div className="seo-page__price-card seo-page__price-card--highlight">
              <h3>Free Delivery Threshold</h3>
              <p className="seo-page__price">Orders from ~S$105–S$120</p>
              <p>
                Hit the free delivery threshold and save S$8–S$10 on{' '}
                <Link to="/durian-delivery">delivery fees</Link>. Just two boxes of MSW typically qualifies.
              </p>
            </div>
            <div className="seo-page__price-card seo-page__price-card--highlight">
              <h3>WhatsApp Broadcast Exclusives</h3>
              <p className="seo-page__price">Members only</p>
              <p>
                Join our WhatsApp broadcast for flash deals, early access to limited lots, and
                exclusive discounts not available on the website.
              </p>
            </div>
          </div>
        </section>

        <section className="seo-page__section reveal">
          <h2>How to Get the Best Value on Durian</h2>
          <p>
            Buying smart during <Link to="/durian-season">durian season</Link> can save you significantly.
            Here are our insider tips:
          </p>

          <h3>1. Buy During Peak Season Surplus</h3>
          <p>
            When Malaysia's harvest peaks (typically late June through early August), supply increases
            and prices tend to soften. This is when we run our best promotions because we're passing
            the savings from abundant supply directly to customers.
          </p>

          <h3>2. Order in Bulk or Bundles</h3>
          <p>
            Our <Link to="/durian-bundles">durian bundles</Link> offer better per-gram value than
            single boxes. A party bundle for 10–20 people works out significantly cheaper per person
            than individual orders.
          </p>

          <h3>3. Hit the Free Delivery Threshold</h3>
          <p>
            At around S$105–S$120, your order qualifies for free delivery. Ordering with friends or
            neighbours to hit this threshold is a common strategy among our regular customers.
          </p>

          <h3>4. Follow Our WhatsApp Broadcast</h3>
          <p>
            We announce flash deals, surplus stock clearances, and exclusive promotions through our
            WhatsApp broadcast. Some deals sell out within hours, so broadcast members always get first access.
          </p>

          <h3>5. Try Value Varieties</h3>
          <p>
            While <Link to="/blackgold-msw">Blackgold MSW</Link> is our premium flagship, varieties like{' '}
            <Link to="/d24-sultan">D24 Sultan</Link> (from S$42) and D13 Red Prawn (from S$44) offer
            excellent flavour at a lower price point.
          </p>
        </section>

        <section className="seo-page__section reveal">
          <h2>Seasonal Durian Price Guide</h2>
          <p>
            Durian prices in Singapore fluctuate significantly throughout the year based on supply:
          </p>
          <div className="seo-page__comparison">
            <table className="seo-table">
              <thead>
                <tr>
                  <th>Period</th>
                  <th>Supply Level</th>
                  <th>Price Tendency</th>
                  <th>Best For</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Early season (May–Jun)</td><td>Low</td><td>Higher</td><td>First taste of the year</td></tr>
                <tr><td>Peak season (Jul–Aug)</td><td>High</td><td>Best deals</td><td>Maximum value</td></tr>
                <tr><td>Off-peak (Sep–Oct)</td><td>Very low</td><td>Premium</td><td>Limited availability</td></tr>
                <tr><td>Minor season (Nov–Jan)</td><td>Moderate</td><td>Good value</td><td>Holiday gifting</td></tr>
                <tr><td>Off-season (Feb–Apr)</td><td>Minimal</td><td>Variable</td><td>Frozen durian available</td></tr>
              </tbody>
            </table>
          </div>
          <p>
            Read our full <Link to="/durian-season">durian season guide</Link> for detailed timing information.
          </p>
        </section>

        <section className="seo-page__section reveal">
          <h2>Student and Group Discounts</h2>
          <p>
            Planning a durian party for your school, university group, or community? Contact us via
            WhatsApp for group pricing on orders of 10+ boxes. We've catered for university halls,
            company D&Ds, and neighbourhood gatherings with special group rates.
          </p>
        </section>

        <section className="seo-page__section reveal seo-page__section--faq">
          <h2>Frequently Asked Questions: Durian Deals</h2>

          <details className="seo-faq">
            <summary>What durian deals does Dukrian currently offer?</summary>
            <p>
              We regularly offer free upsize promotions on Blackgold MSW, free delivery on orders above
              S$105–S$120, and seasonal multi-box discounts. Join our WhatsApp broadcast for real-time
              deal alerts and exclusive offers.
            </p>
          </details>

          <details className="seo-faq">
            <summary>When is the cheapest time to buy durian in Singapore?</summary>
            <p>
              Prices are lowest during peak harvest months — late June to early August and late November
              to January. Mid-season surplus drives prices down, and sellers run their best promotions
              during these peaks.
            </p>
          </details>

          <details className="seo-faq">
            <summary>Does Dukrian offer a loyalty or repeat customer discount?</summary>
            <p>
              We reward our regulars through WhatsApp broadcast exclusives — returning customers often
              get early access to limited lots and special pricing. Message us on WhatsApp and we'll add
              you to our broadcast list.
            </p>
          </details>

          <details className="seo-faq">
            <summary>Is there a minimum order for free delivery?</summary>
            <p>
              {SITE.freeDeliveryNote} Self-collection at Serangoon Garden is always free regardless
              of order size.
            </p>
          </details>
        </section>

        <section className="seo-page__section reveal seo-page__cta-section">
          <h2>Don't Miss Our Next Deal</h2>
          <p>
            Join our WhatsApp broadcast to be the first to know about flash deals, limited lots,
            and seasonal promotions. Or shop now and enjoy our current offers.
          </p>
          <div className="seo-page__actions">
            <BtnLink to="/#shop">Shop Current Deals</BtnLink>
            <BtnLink
              variant="ghost"
              href={`https://wa.me/${SITE.whatsappE164}?text=${encodeURIComponent('Hi Dukrian! Please add me to your WhatsApp broadcast for deal alerts.')}`}
              target="_blank"
              rel="noreferrer"
            >
              Join WhatsApp Broadcast
            </BtnLink>
          </div>
        </section>
      </article>
    </>
  )
}
