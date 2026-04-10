import { Link } from 'react-router-dom'
import { SEOHead } from '../components/seo/SEOHead'
import { Breadcrumbs } from '../components/seo/Breadcrumbs'
import { SITE } from '../config'

export default function BigDuriansPage() {
  return (
    <>
      <SEOHead
        title="Big Durians Singapore — Large Portions & Generous Boxes"
        description="Order big durians and generous portion boxes from Dukrian Singapore. Our Blackgold MSW boxes often weigh above label. Free upsize promos, XL portions, and large party packs available."
        path="/big-durians"
        ogType="article"
        article={{ publishedTime: '2025-02-15', modifiedTime: '2026-04-01' }}
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: 'How big are Dukrian\'s durian portions?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Dukrian\'s standard Blackgold MSW box contains approximately 420g of de-husked flesh. The promo upsize box contains approximately 520g. Customer reviews frequently note boxes weighing above the stated label weight — we believe in generous portioning.',
              },
            },
            {
              '@type': 'Question',
              name: 'Can I get extra large durian portions?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes. Beyond our standard and upsize boxes, you can order multiple boxes or request custom large portions via WhatsApp. For parties and events, our bundle packages include generous XL portions.',
              },
            },
          ],
        }}
      />

      <article className="seo-page">
        <Breadcrumbs items={[{ label: 'Big Durians', href: '/big-durians' }]} />

        <header className="seo-page__hero">
          <h1>Big Durians: Generous Portions That Deliver</h1>
          <p className="seo-page__subtitle">
            At Dukrian, we believe in giving more than expected. Our boxes frequently weigh above label —
            because durian lovers deserve generous portions of premium fruit.
          </p>
        </header>

        <section className="seo-page__section">
          <h2>Why Size Matters with Durian</h2>
          <p>
            When you're paying premium prices for <Link to="/blackgold-msw">Blackgold MSW</Link> or
            other high-quality durian varieties, the last thing you want is to open a box and feel
            shortchanged. The durian market in Singapore has a well-known problem: many sellers quote
            weights that don't match what's in the box, or use packaging that makes portions look larger
            than they are.
          </p>
          <p>
            At <strong>Dukrian ({SITE.nameCn})</strong>, we take the opposite approach. Our philosophy is
            simple: <strong>give more, not less</strong>. Customer reviews consistently note that our boxes
            weigh above the stated label — and that's by design. We'd rather you be pleasantly surprised
            than disappointed.
          </p>
        </section>

        <section className="seo-page__section">
          <h2>Our Portion Sizes</h2>
          <div className="seo-page__price-cards">
            <div className="seo-page__price-card">
              <h3>Standard Blackgold MSW Box</h3>
              <p className="seo-page__price">~420g de-husked flesh</p>
              <p>
                Our everyday box — perfect for one person's indulgent session or comfortable sharing
                between two. Frequently weighs above 420g.
              </p>
            </div>
            <div className="seo-page__price-card seo-page__price-card--highlight">
              <h3>Free Upsize Promo Box</h3>
              <p className="seo-page__price">~520g de-husked flesh</p>
              <p>
                Available during promo runs — nearly 25% more durian at exceptional value. Our most
                popular option when available.
              </p>
            </div>
            <div className="seo-page__price-card">
              <h3>Party / Event Portions</h3>
              <p className="seo-page__price">Custom sizing</p>
              <p>
                Need XL portions for a gathering? Our <Link to="/durian-bundles">bundle packages</Link>{' '}
                include generous servings scaled to your headcount.
              </p>
            </div>
          </div>
        </section>

        <section className="seo-page__section">
          <h2>How We Select for Big, Quality Fruit</h2>
          <p>
            Not all durians are equal in size — fruit from older trees, higher elevations, and optimal
            growing conditions tends to be larger with more flesh and smaller seeds. Here's how our
            sourcing ensures you get big, premium durian:
          </p>
          <ul>
            <li>
              <strong>Old-growth trees</strong> — we prioritise fruit from trees that are 15–20+ years
              old in Pahang Highlands. Older trees produce fewer but larger, more flavourful fruit with
              better flesh-to-seed ratios.
            </li>
            <li>
              <strong>Natural tree-drop only</strong> — we don't take fruit that's been cut or forced
              off the tree. Natural drop ensures the durian reaches full size and peak ripeness before
              harvest.
            </li>
            <li>
              <strong>Generous portioning</strong> — when de-husking and packing, our team errs on
              the side of adding extra flesh rather than being stingy. A box labelled 420g often
              contains 430g or more.
            </li>
            <li>
              <strong>Seed-to-flesh ratio checks</strong> — we select fruit with smaller seeds and
              thicker flesh lobes, which means more edible durian in every box.
            </li>
          </ul>
        </section>

        <section className="seo-page__section">
          <h2>What Determines Durian Size?</h2>
          <p>
            Several factors influence how big a durian grows:
          </p>

          <h3>Tree Age</h3>
          <p>
            Young durian trees (under 8 years) produce smaller fruit. Trees over 15 years tend to
            produce larger, more concentrated fruit. The best <Link to="/blackgold-msw">Blackgold MSW</Link>{' '}
            comes from trees that have been producing for decades.
          </p>

          <h3>Growing Elevation</h3>
          <p>
            Highland durians from Pahang (300–800m elevation) grow more slowly in cooler temperatures,
            resulting in denser, more flavourful flesh. Lowland durians grow faster and larger overall
            but may have more watery flesh.
          </p>

          <h3>Soil and Nutrition</h3>
          <p>
            Volcanic soils in the Malaysian highlands are rich in minerals that promote strong fruit
            development. Well-managed plantations with proper nutrition produce consistently large,
            healthy durians.
          </p>

          <h3>Weather Conditions</h3>
          <p>
            The right amount of rain during fruit development is crucial. Too much rain can dilute
            flavours; too little can stunt growth. The best{' '}
            <Link to="/durian-season">durian season</Link> years produce the biggest, most flavourful fruit.
          </p>
        </section>

        <section className="seo-page__section">
          <h2>Getting the Most Durian for Your Money</h2>
          <ol>
            <li>
              <strong>Watch for upsize promos</strong> — our free upsize promotions give you ~100g extra
              for a modest price increase
            </li>
            <li>
              <strong>Order bundles</strong> — <Link to="/durian-bundles">multi-box bundles</Link> often
              include extra portions as bonus
            </li>
            <li>
              <strong>Buy during peak season</strong> — July's abundant supply means we can be more
              generous with portioning. Check our <Link to="/durian-deals">current deals</Link>
            </li>
            <li>
              <strong>Try different varieties</strong> — <Link to="/d24-sultan">D24 Sultan</Link> and
              D13 Red Prawn offer generous portions at lower price points than MSW
            </li>
            <li>
              <strong>Combine with friends</strong> — split a large order to hit the{' '}
              <Link to="/durian-delivery">free delivery threshold</Link> and save on delivery fees
            </li>
          </ol>
        </section>

        <section className="seo-page__section seo-page__section--faq">
          <h2>Frequently Asked Questions: Big Durians</h2>

          <details className="seo-faq">
            <summary>How big are Dukrian's durian portions?</summary>
            <p>
              Our standard Blackgold MSW box is ~420g de-husked flesh, with promo boxes at ~520g.
              Reviews frequently note boxes weighing above the stated label weight — we believe in
              generous portioning.
            </p>
          </details>

          <details className="seo-faq">
            <summary>Can I get extra large durian portions?</summary>
            <p>
              Yes. Order multiple boxes or request custom large portions via WhatsApp. For parties
              and events, our <Link to="/durian-bundles">bundle packages</Link> include generous
              XL portions scaled to your headcount.
            </p>
          </details>

          <details className="seo-faq">
            <summary>Why do some durians have more flesh than others?</summary>
            <p>
              Flesh-to-seed ratio depends on the variety, tree age, growing conditions, and ripeness.
              Older trees and highland-grown fruit tend to have thicker flesh lobes and smaller seeds.
              This is one reason we source from established Pahang plantations.
            </p>
          </details>

          <details className="seo-faq">
            <summary>Do you sell whole durians?</summary>
            <p>
              Currently, Dukrian specialises in de-husked, double-sealed portions for convenience and
              freshness. If you'd like a whole durian experience, contact us via WhatsApp — we can
              sometimes accommodate special requests during peak season.
            </p>
          </details>
        </section>

        <section className="seo-page__section seo-page__cta-section">
          <h2>Order Generous Durian Portions</h2>
          <p>
            Experience the Dukrian difference — where the box always feels a little heavier than expected.
          </p>
          <div className="seo-page__actions">
            <Link to="/#shop" className="btn btn--primary">Shop Big Portions</Link>
            <a
              className="btn btn--ghost"
              href={`https://wa.me/${SITE.whatsappE164}`}
              target="_blank"
              rel="noreferrer"
            >
              Ask About XL Portions
            </a>
          </div>
        </section>
      </article>
    </>
  )
}
