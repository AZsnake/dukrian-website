import { Link } from 'react-router-dom'
import { SEOHead } from '../components/seo/SEOHead'
import { Breadcrumbs } from '../components/seo/Breadcrumbs'
import { BtnLink } from '../components/BtnLink'
import { SITE } from '../config'

export default function D24SultanPage() {
  return (
    <>
      <SEOHead
        title="D24 Sultan Durian Singapore — Classic Buttery Durian"
        description="D24 Sultan durian from Dukrian Singapore. Pale yellow, buttery & mildly bitter classic. De-husked, fresh same-day delivery from Serangoon Garden."
        path="/d24-sultan"
        ogType="article"
        article={{ publishedTime: '2025-01-15', modifiedTime: '2026-04-01' }}
        jsonLd={[
          {
            '@context': 'https://schema.org',
            '@type': 'Product',
            name: 'D24 Sultan Durian',
            description: 'Pale yellow, buttery and mildly bitter D24 Sultan durian — an approachable classic alongside our Blackgold MSW.',
            brand: { '@type': 'Brand', name: 'Dukrian' },
            offers: {
              '@type': 'Offer',
              price: '42',
              priceCurrency: 'SGD',
              availability: 'https://schema.org/InStock',
            },
            image: `${SITE.origin}/images/dukrian/6.webp`,
          },
          {
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'What does D24 Sultan durian taste like?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'D24 Sultan has a pale yellow, thick and buttery flesh with a mildly bitter edge. The texture is smooth and creamy without being as intensely pungent as Musang King, making it an excellent choice for those who prefer a gentler durian experience.',
                },
              },
              {
                '@type': 'Question',
                name: 'Why is it called D24 Sultan?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'The "D" stands for "Daftar" (register in Malay), as D24 is the 24th registered durian clone in Malaysia. The "Sultan" nickname comes from its status as the reigning favourite of Malaysian durian lovers before Musang King rose to prominence — it was considered the king of durians.',
                },
              },
            ],
          },
        ]}
      />

      <article className="seo-page">
        <Breadcrumbs items={[{ label: 'D24 Sultan', href: '/d24-sultan' }]} />

        <header className="seo-page__hero">
          <h1>D24 Sultan Durian: The Classic Favourite in Singapore</h1>
          <p className="seo-page__subtitle">
            Buttery, mildly bitter, and effortlessly approachable — D24 Sultan is the durian that
            generations of Singaporeans grew up loving.
          </p>
        </header>

        <section className="seo-page__section reveal">
          <h2>The Story of D24 Sultan</h2>
          <p>
            Before Musang King claimed the spotlight, <strong>D24 Sultan</strong> was the undisputed king
            of durians in Malaysia and Singapore. Registered as the 24th durian clone (D24) in Malaysia's
            national registry, this cultivar earned the "Sultan" title for its regal flavour and consistent
            quality that made it the benchmark for premium durian for decades.
          </p>
          <p>
            While <Link to="/blackgold-msw">Blackgold MSW</Link> now commands the highest prices, D24
            Sultan remains a beloved staple — and many long-time durian lovers argue it's the more
            balanced, more "elegant" fruit. At Dukrian, we carry D24 Sultan alongside our flagship MSW
            specifically because so many of our customers consider it an essential part of any durian
            spread.
          </p>
        </section>

        <section className="seo-page__section reveal">
          <h2>D24 Sultan Flavour Profile</h2>
          <p>
            What makes D24 Sultan so enduringly popular is its balanced, approachable character:
          </p>
          <ul>
            <li>
              <strong>Pale yellow flesh</strong> — smooth, thick, and satiny with excellent seed-to-flesh ratio
            </li>
            <li>
              <strong>Buttery sweetness</strong> — a gentle, rounded sweetness that doesn't overwhelm,
              reminiscent of buttercream
            </li>
            <li>
              <strong>Mild bitterness</strong> — a subtle bitter undercurrent that adds sophistication
              without the intense boozy kick of Blackgold MSW
            </li>
            <li>
              <strong>Less pungent aroma</strong> — still unmistakably durian, but milder than Musang King,
              making it more approachable for newcomers
            </li>
          </ul>
          <p>
            D24 Sultan is an excellent "gateway durian" for first-timers, and a comforting classic for
            veterans. It pairs well with sticky rice, in pastries, or simply enjoyed on its own.
          </p>
        </section>

        <section className="seo-page__section reveal">
          <h2>D24 Sultan vs Musang King: What's the Difference?</h2>
          <div className="seo-page__comparison">
            <table className="seo-table">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>D24 Sultan</th>
                  <th>Musang King (MSW)</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Flesh colour</td><td>Pale yellow</td><td>Deep golden / amber</td></tr>
                <tr><td>Texture</td><td>Thick, buttery, smooth</td><td>Dense, creamy, custardy</td></tr>
                <tr><td>Sweetness</td><td>Moderate, gentle</td><td>Intense, concentrated</td></tr>
                <tr><td>Bitterness</td><td>Mild</td><td>Strong (especially Blackgold)</td></tr>
                <tr><td>Aroma intensity</td><td>Medium</td><td>Strong to very strong</td></tr>
                <tr><td>Price range (Dukrian)</td><td>From S$42</td><td>From S$58</td></tr>
                <tr><td>Best for</td><td>First-timers, balanced palate</td><td>Intense flavour seekers</td></tr>
              </tbody>
            </table>
          </div>
          <p>
            Can't decide? Our <Link to="/durian-bundles">durian bundles</Link> let you try multiple
            varieties in a single order — the best way to discover your preference.
          </p>
        </section>

        <section className="seo-page__section reveal">
          <h2>D24 Sultan Availability and Season</h2>
          <p>
            D24 Sultan is available at Dukrian during the main <Link to="/durian-season">durian season</Link> in
            Singapore, typically June–August and November–January. Because D24 trees are widely planted
            across Malaysia, availability tends to be more consistent than rarer cultivars.
          </p>
          <p>
            When in season, we source D24 Sultan from Johor and Pahang, selecting for the thick, creamy
            flesh our customers expect. Like all our durians, D24 is de-husked and double-sealed on the
            day of arrival for maximum freshness.
          </p>
        </section>

        <section className="seo-page__section reveal">
          <h2>Pricing</h2>
          <div className="seo-page__price-cards">
            <div className="seo-page__price-card">
              <h3>D24 Sultan — De-husked</h3>
              <p className="seo-page__price">From S$42</p>
              <p>Generous portions of fresh de-husked D24 Sultan. Perfect as a standalone treat or part of a multi-variety order.</p>
            </div>
          </div>
          <p>
            Combine with Blackgold MSW or other varieties for a taste comparison.
            Check our <Link to="/durian-deals">latest deals</Link> for seasonal pricing.
          </p>
        </section>

        <section className="seo-page__section reveal seo-page__section--faq">
          <h2>Frequently Asked Questions: D24 Sultan</h2>

          <details className="seo-faq">
            <summary>What does D24 Sultan durian taste like?</summary>
            <p>
              D24 Sultan has pale yellow, thick and buttery flesh with a mildly bitter edge. The texture
              is smooth and creamy without the intense pungency of Musang King, making it an excellent
              choice for those who prefer a gentler durian experience.
            </p>
          </details>

          <details className="seo-faq">
            <summary>Why is it called D24 Sultan?</summary>
            <p>
              "D" stands for "Daftar" (register in Malay), as D24 is the 24th registered durian clone in
              Malaysia. "Sultan" is its nickname — it was considered the king of durians before Musang King
              rose to fame.
            </p>
          </details>

          <details className="seo-faq">
            <summary>Is D24 Sultan good for durian beginners?</summary>
            <p>
              Absolutely. D24 Sultan is widely regarded as one of the best "starter" durians. Its milder
              aroma and balanced flavour make it more approachable than Musang King or XO, while still
              delivering an authentic, satisfying durian experience.
            </p>
          </details>

          <details className="seo-faq">
            <summary>Can I order D24 Sultan for same-day delivery?</summary>
            <p>
              Yes. When D24 Sultan is in stock, Dukrian offers{' '}
              <Link to="/same-day-durian-delivery">same-day delivery</Link> across Singapore. Order by
              6 PM for evening delivery the same night.
            </p>
          </details>
        </section>

        <section className="seo-page__section reveal seo-page__cta-section">
          <h2>Order D24 Sultan from Dukrian</h2>
          <p>
            Rediscover the classic that started it all. Available alongside{' '}
            <Link to="/blackgold-msw">Blackgold MSW</Link>, XO, Tekka, and more in our{' '}
            <Link to="/#shop">online shop</Link>.
          </p>
          <div className="seo-page__actions">
            <BtnLink to="/#shop">Shop D24 Sultan</BtnLink>
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
