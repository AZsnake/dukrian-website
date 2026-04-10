import { Link } from 'react-router-dom'
import { SEOHead } from '../components/seo/SEOHead'
import { Breadcrumbs } from '../components/seo/Breadcrumbs'
import { BtnLink } from '../components/BtnLink'
import { SITE } from '../config'

export default function BlackgoldMswPage() {
  return (
    <>
      <SEOHead
        title="Blackgold MSW Durian Singapore — Premium Musang King"
        description="Discover Blackgold MSW (Musang King) durian at Dukrian Singapore. Rich, creamy Pahang Highland Blackgold with bittersweet depth. De-husked, double-sealed, delivered fresh same-day from Serangoon Garden."
        path="/blackgold-msw"
        ogType="article"
        article={{ publishedTime: '2025-01-15', modifiedTime: '2026-04-01' }}
        jsonLd={[
          {
            '@context': 'https://schema.org',
            '@type': 'Product',
            name: 'Blackgold MSW Durian — De-husked Box',
            description: 'Pahang Highland Blackgold Musang King durian. Richer, creamier, often bittersweet or boozy. De-husked flesh, double-sealed for freshness.',
            brand: { '@type': 'Brand', name: 'Dukrian' },
            offers: {
              '@type': 'AggregateOffer',
              lowPrice: '58',
              highPrice: '68',
              priceCurrency: 'SGD',
              availability: 'https://schema.org/InStock',
              seller: { '@type': 'Organization', name: 'Dukrian' },
            },
            image: `${SITE.origin}/images/dukrian/1.webp`,
          },
          {
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'What is Blackgold MSW durian?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Blackgold MSW (Musang King) is a premium tier of Musang King durian sourced from Pahang Highlands in Malaysia. It is distinguished by its darker golden flesh, intensely creamy texture, and complex bittersweet or boozy flavour profile.',
                },
              },
              {
                '@type': 'Question',
                name: 'How much does Blackgold MSW cost in Singapore?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'At Dukrian, Blackgold MSW boxes start from S$58 for ~420g de-husked flesh. Promo boxes with free upsize (~520g) are available at S$68 during seasonal promotions.',
                },
              },
              {
                '@type': 'Question',
                name: 'Is Blackgold MSW the same as regular Musang King?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Blackgold MSW is a higher grade of Musang King. While all Blackgold MSW is Musang King, not all Musang King qualifies as Blackgold. The Blackgold grade denotes fruit with darker, richer flesh and more complex flavour, typically from older trees in Pahang Highlands.',
                },
              },
            ],
          },
        ]}
      />

      <article className="seo-page">
        <Breadcrumbs items={[{ label: 'Blackgold MSW', href: '/blackgold-msw' }]} />

        <header className="seo-page__hero">
          <h1>Blackgold MSW Durian: Singapore's Premium Musang King</h1>
          <p className="seo-page__subtitle">
            Pahang Highland Blackgold Musang King — the richest, creamiest tier of MSW durian,
            delivered fresh to your door from Dukrian Serangoon Garden.
          </p>
        </header>

        <section className="seo-page__section reveal">
          <h2>What Makes Blackgold MSW Special?</h2>
          <p>
            Among durian connoisseurs in Singapore and Malaysia, <strong>Blackgold MSW</strong> (also written
            as Black Gold Musang King or "猫山王黑金") sits at the top of the Musang King hierarchy. While
            regular Musang King is already prized for its rich, custardy flesh, the Blackgold grade takes
            everything a step further — darker golden colour, thicker and creamier texture, and a complex
            flavour that balances sweetness with a distinctive bittersweet or "boozy" depth.
          </p>
          <p>
            The name "Blackgold" refers to the darker amber hue of the flesh, a sign that the durian has
            achieved peak ripeness on the tree before natural drop. This natural ripening process concentrates
            the sugars and aromatics, producing a flavour intensity that lighter-fleshed MSW simply cannot match.
          </p>
        </section>

        <section className="seo-page__section reveal">
          <h2>Where Does Blackgold MSW Come From?</h2>
          <p>
            The best Blackgold MSW is sourced from <strong>Pahang Highlands</strong> in Peninsular Malaysia,
            particularly from the <strong>Raub</strong> district. At elevations between 300–800 metres, the
            cooler climate and mineral-rich volcanic soil create the ideal conditions for durian trees to
            produce fruit with deeper flavour complexity.
          </p>
          <p>
            At <strong>Dukrian ({SITE.nameCn})</strong>, we work directly with reputable plantations in Pahang that
            have old-growth Musang King trees — many over 15–20 years old. Older trees produce fewer but
            more flavourful fruit, which is why genuine Blackgold MSW commands a premium.
          </p>
          <p>
            Our sourcing process involves daily lot selection during peak season, where our team evaluates
            each batch for flesh colour, aroma, seed-to-flesh ratio, and taste. Only lots meeting our
            Blackgold criteria make it to our Serangoon Garden store and onto your table.
          </p>
        </section>

        <section className="seo-page__section reveal">
          <h2>Blackgold MSW Flavour Profile</h2>
          <p>
            What sets Blackgold apart from standard Musang King is its layered flavour profile:
          </p>
          <ul>
            <li>
              <strong>Initial sweetness</strong> — rich, caramel-like sweetness hits first, deeper than regular MSW
            </li>
            <li>
              <strong>Bittersweet middle</strong> — a pleasant bitter note emerges, similar to dark chocolate or aged cheese
            </li>
            <li>
              <strong>Boozy finish</strong> — the fermented, slightly alcoholic aftertaste that durian lovers
              crave and is the hallmark of peak-ripe Blackgold
            </li>
            <li>
              <strong>Creamy, thick texture</strong> — the flesh is dense and buttery with minimal fibre,
              coating the palate like a rich custard
            </li>
          </ul>
          <p>
            For those new to durian, Blackgold MSW can be intense — we often recommend starting with a
            milder variety like <Link to="/d24-sultan">D24 Sultan</Link> and working up to Blackgold.
            For seasoned durian lovers, however, this is the pinnacle.
          </p>
        </section>

        <section className="seo-page__section reveal">
          <h2>How We Deliver Blackgold MSW Fresh</h2>
          <p>
            Freshness is non-negotiable when it comes to premium durian. Our farm-to-table process ensures
            that most Blackgold MSW reaches customers within <strong>approximately 12 hours</strong> of
            de-husking:
          </p>
          <ol>
            <li>Fruit is harvested after natural tree-drop in Pahang (the gold standard for ripeness)</li>
            <li>Expert selectors grade each fruit; only Blackgold-tier MSW proceeds</li>
            <li>Flesh is de-husked, portioned, and immediately double-sealed in food-grade packaging</li>
            <li>Rush shipment from the plantation to our Serangoon Garden store</li>
            <li>Fresh stock arrives around 6 PM daily during season; deliveries run 7–11 PM</li>
          </ol>
          <p>
            We offer <Link to="/same-day-durian-delivery">same-day durian delivery</Link> across Singapore —
            order by 6 PM for evening delivery the same day. Self-collection at our
            Serangoon Garden location ({SITE.address}) is also available.
          </p>
        </section>

        <section className="seo-page__section reveal">
          <h2>Blackgold MSW Pricing at Dukrian</h2>
          <div className="seo-page__price-cards">
            <div className="seo-page__price-card">
              <h3>Blackgold MSW — Standard Box</h3>
              <p className="seo-page__price">From S$58</p>
              <p>~420g de-husked flesh. Our house favourite — perfect for one or sharing between two.</p>
            </div>
            <div className="seo-page__price-card">
              <h3>Blackgold MSW — Free Upsize Promo</h3>
              <p className="seo-page__price">From S$68</p>
              <p>~520g de-husked flesh. Available during promo runs — more durian at exceptional value.</p>
            </div>
          </div>
          <p>
            Looking for more options? Check out our <Link to="/durian-bundles">durian bundles</Link> for
            parties and events, or browse <Link to="/durian-deals">current durian deals</Link>.
          </p>
        </section>

        <section className="seo-page__section reveal seo-page__section--faq">
          <h2>Frequently Asked Questions: Blackgold MSW</h2>

          <details className="seo-faq">
            <summary>What is Blackgold MSW durian?</summary>
            <p>
              Blackgold MSW (Musang King) is a premium tier of Musang King durian sourced from Pahang
              Highlands in Malaysia. It is distinguished by its darker golden flesh, intensely creamy texture,
              and complex bittersweet or boozy flavour profile. The "Blackgold" name refers to the darker
              amber colour that comes from natural tree-drop ripening.
            </p>
          </details>

          <details className="seo-faq">
            <summary>How much does Blackgold MSW cost in Singapore?</summary>
            <p>
              At Dukrian, Blackgold MSW boxes start from S$58 for approximately 420g of de-husked flesh.
              During promotional periods, an upsized box (~520g) is available at S$68. Prices may vary
              during peak <Link to="/durian-season">durian season</Link>.
            </p>
          </details>

          <details className="seo-faq">
            <summary>Is Blackgold MSW the same as regular Musang King?</summary>
            <p>
              Blackgold MSW is a higher grade of Musang King. While all Blackgold MSW is Musang King,
              not all Musang King qualifies as Blackgold. The Blackgold grade denotes fruit from older trees
              with darker, richer flesh and more complex flavour — typically from Pahang Highlands at
              elevation.
            </p>
          </details>

          <details className="seo-faq">
            <summary>Can I get same-day delivery for Blackgold MSW?</summary>
            <p>
              Yes! Dukrian offers <Link to="/same-day-durian-delivery">same-day delivery</Link> across
              Singapore. Order by 6 PM for evening delivery between 7–11 PM the same day.
              {' '}{SITE.freeDeliveryNote}
            </p>
          </details>

          <details className="seo-faq">
            <summary>How should I store Blackgold MSW durian?</summary>
            <p>
              For the best experience, enjoy Blackgold MSW within 2–3 hours of opening at room temperature.
              If you need to store it, keep it sealed in the refrigerator for up to 2 days. For longer
              storage, freeze immediately — frozen durian can last 1–2 months. Thaw at room temperature
              for 15–20 minutes before eating.
            </p>
          </details>
        </section>

        <section className="seo-page__section reveal seo-page__cta-section">
          <h2>Order Blackgold MSW from Dukrian Today</h2>
          <p>
            Experience the king of durians delivered fresh to your Singapore address. Browse our full
            catalogue including <Link to="/d24-sultan">D24 Sultan</Link>,{' '}
            <Link to="/big-durians">large portion boxes</Link>, and{' '}
            <Link to="/durian-bundles">party bundles</Link>.
          </p>
          <div className="seo-page__actions">
            <BtnLink to="/#shop">Shop Blackgold MSW</BtnLink>
            <BtnLink
              variant="ghost"
              href={`https://wa.me/${SITE.whatsappE164}`}
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp Us
            </BtnLink>
          </div>
        </section>
      </article>
    </>
  )
}
