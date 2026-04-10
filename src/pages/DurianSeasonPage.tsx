import { Link } from 'react-router-dom'
import { SEOHead } from '../components/seo/SEOHead'
import { Breadcrumbs } from '../components/seo/Breadcrumbs'
import { BtnLink } from '../components/BtnLink'
import { SITE } from '../config'

export default function DurianSeasonPage() {
  return (
    <>
      <SEOHead
        title="Durian Season Singapore 2026 — When Is Durian Season?"
        description="Guide to durian season in Singapore & Malaysia 2026. Peak harvest months, best time for Blackgold MSW & D24 Sultan, pricing tips from Dukrian."
        path="/durian-season/"
        ogType="article"
        article={{ publishedTime: '2025-01-10', modifiedTime: '2026-04-01' }}
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: 'When is durian season in Singapore?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Singapore\'s durian season follows Malaysia\'s harvest cycle. The main season runs from June to August (peak around late June to July), with a smaller secondary season from November to January. Exact timing varies year to year depending on weather conditions.',
              },
            },
            {
              '@type': 'Question',
              name: 'When is the best time to buy durian in Singapore?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'The best time for both quality and value is during peak season — late June through early August. Supply is highest, prices are most competitive, and the fruit quality tends to be excellent due to optimal growing conditions. For the very best Blackgold MSW lots, experienced buyers target mid-July.',
              },
            },
          ],
        }}
      />

      <article className="seo-page">
        <Breadcrumbs items={[{ label: 'Durian Season', href: '/durian-season/' }]} />

        <header className="seo-page__hero">
          <h1>Durian Season 2026: Your Complete Singapore Guide</h1>
          <p className="seo-page__subtitle">
            When does durian season start? When are prices lowest? When is quality at its peak?
            Everything you need to know from the team at Dukrian.
          </p>
        </header>

        <section className="seo-page__section reveal">
          <h2>When Is Durian Season in Singapore?</h2>
          <p>
            Singapore doesn't grow commercial durians — our supply comes almost entirely from
            Malaysia, primarily from Pahang, Johor, and Penang. This means Singapore's{' '}
            <strong>durian season</strong> mirrors Malaysia's harvest cycle, which is driven by weather
            patterns, particularly the monsoon seasons.
          </p>
          <p>
            In a typical year, there are <strong>two durian seasons</strong>:
          </p>
          <ul>
            <li>
              <strong>Main season (June – August)</strong> — the primary harvest period, with peak supply
              usually from late June through mid-August. This is when the greatest variety and volume
              of durian floods Singapore's market.
            </li>
            <li>
              <strong>Minor season (November – January)</strong> — a smaller harvest following the
              northeast monsoon rains. Supply is lower but still significant, with some connoisseurs
              preferring minor-season fruit for its slightly different flavour characteristics.
            </li>
          </ul>
        </section>

        <section className="seo-page__section reveal">
          <h2>2026 Durian Season Calendar</h2>
          <p>
            Based on weather patterns and our plantation partners' forecasts, here's what to expect
            for the 2026 durian season in Singapore:
          </p>
          <div className="seo-page__comparison">
            <table className="seo-table">
              <thead>
                <tr>
                  <th>Month</th>
                  <th>Season Phase</th>
                  <th>Supply</th>
                  <th>Pricing</th>
                  <th>What to Expect</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Jan–Feb</td><td>Minor season tail</td><td>Low</td><td>Moderate</td><td>Final minor-season lots; limited variety</td></tr>
                <tr><td>Mar–Apr</td><td>Off-season</td><td>Very low</td><td>Premium</td><td>Occasional frozen durian; little fresh supply</td></tr>
                <tr><td>May</td><td>Early season</td><td>Emerging</td><td>Higher</td><td>First main-season drops; small volumes, eager demand</td></tr>
                <tr><td>Jun</td><td>Main season ramp</td><td>Growing</td><td>Dropping</td><td>Increasing supply, expanding variety selection</td></tr>
                <tr><td>Jul</td><td>Peak season</td><td>Highest</td><td>Best value</td><td>Maximum supply; best deals and variety</td></tr>
                <tr><td>Aug</td><td>Late main season</td><td>Moderate</td><td>Good value</td><td>Quality still excellent; supply tapering</td></tr>
                <tr><td>Sep–Oct</td><td>Off-peak</td><td>Low</td><td>Rising</td><td>Between seasons; limited fresh durian</td></tr>
                <tr><td>Nov–Dec</td><td>Minor season</td><td>Moderate</td><td>Good</td><td>Second harvest; festive demand</td></tr>
              </tbody>
            </table>
          </div>
          <p>
            <em>
              Note: exact timing varies year to year. Durian fruiting is triggered by dry spells
              followed by rain — unusual weather can shift the season by 2–4 weeks in either direction.
            </em>
          </p>
        </section>

        <section className="seo-page__section reveal">
          <h2>How Weather Affects Durian Season</h2>
          <p>
            Durian trees fruit in response to environmental triggers — specifically, a period of
            drought stress followed by rainfall. Here's the science behind the seasons:
          </p>
          <ul>
            <li>
              <strong>Dry spell triggers flowering</strong> — when durian trees experience 7–14 days
              without rain, they respond by flowering. In Peninsular Malaysia, this typically
              occurs in March–April (ahead of the main season) and August–September (ahead of the minor season).
            </li>
            <li>
              <strong>Fruit development</strong> — it takes approximately 100–120 days from flowering
              to mature fruit ready for harvest, which is why a March dry spell produces June–July fruit.
            </li>
            <li>
              <strong>El Niño / La Niña effects</strong> — El Niño years (drier conditions) can
              trigger earlier, more intense durian seasons with slightly smaller but more flavourful
              fruit. La Niña (wetter conditions) may delay or reduce the season.
            </li>
          </ul>
          <p>
            At Dukrian, we maintain close relationships with our plantation partners in Pahang to
            track flowering and fruiting progress, giving us advance notice of when the best lots
            will arrive.
          </p>
        </section>

        <section className="seo-page__section reveal">
          <h2>Variety Availability by Season</h2>
          <p>
            Not all durian varieties are available at the same time. Here's a general guide:
          </p>
          <ul>
            <li>
              <strong><Link to="/blackgold-msw/">Blackgold MSW (Musang King)</Link></strong> — available
              throughout both main and minor seasons. Peak quality lots from old-growth Pahang trees
              arrive in July.
            </li>
            <li>
              <strong><Link to="/d24-sultan/">D24 Sultan</Link></strong> — widely available during both
              seasons. One of the most consistently available premium varieties.
            </li>
            <li>
              <strong>XO Durian</strong> — primarily main season (June–August). Tends to arrive slightly
              later than MSW as XO trees fruit on a different cycle.
            </li>
            <li>
              <strong>Tekka (Bamboo Leg)</strong> — seasonal alongside MSW. Available when our Pahang
              suppliers have harvest.
            </li>
            <li>
              <strong>D13 Red Prawn</strong> — mainly from Johor; available during the main season.
            </li>
          </ul>
        </section>

        <section className="seo-page__section reveal">
          <h2>Tips for Buying Durian in Season</h2>
          <ol>
            <li>
              <strong>Follow the broadcast</strong> — join our WhatsApp broadcast for real-time updates
              on what's arrived today and what the quality is like
            </li>
            <li>
              <strong>Peak season = best value</strong> — don't wait for the "perfect" time; when supply
              is abundant (July), prices are competitive and you get the best selection
            </li>
            <li>
              <strong>Try multiple varieties</strong> — season is the time to order a{' '}
              <Link to="/durian-bundles/">tasting bundle</Link> and compare
            </li>
            <li>
              <strong>Stock up for off-season</strong> — buy extra during peak season and freeze it
              properly for enjoyment in the off-months
            </li>
            <li>
              <strong>Check for <Link to="/durian-deals/">deals</Link></strong> — we run our best
              promotions during peak supply periods
            </li>
          </ol>
        </section>

        <section className="seo-page__section reveal seo-page__section--faq">
          <h2>Frequently Asked Questions: Durian Season</h2>

          <details className="seo-faq">
            <summary>When is durian season in Singapore?</summary>
            <p>
              The main season runs June to August (peak in July), with a minor season from November
              to January. Singapore's supply comes from Malaysia, so timing follows Malaysia's harvest cycle.
            </p>
          </details>

          <details className="seo-faq">
            <summary>When is the best time to buy durian?</summary>
            <p>
              Late June through early August offers the best combination of quality, variety, and price.
              For the absolute best <Link to="/blackgold-msw/">Blackgold MSW</Link> lots, mid-July
              is the sweet spot.
            </p>
          </details>

          <details className="seo-faq">
            <summary>Can I get durian outside of season?</summary>
            <p>
              Fresh durian is very limited outside season. During off-months (March–May, September–October),
              we may have frozen durian available. Check our website or WhatsApp for current availability.
            </p>
          </details>

          <details className="seo-faq">
            <summary>Why do durian prices change so much during the year?</summary>
            <p>
              Durian pricing is driven by supply and demand. During peak season, abundant supply from
              Malaysia means lower prices. During off-season or the start of season when supply is
              limited but demand is high, prices rise accordingly.
            </p>
          </details>

          <details className="seo-faq">
            <summary>How do I know when durian season starts?</summary>
            <p>
              Follow Dukrian on WhatsApp, Instagram, or TikTok for season updates. We announce the
              first arrivals of the season and keep customers updated on supply and quality throughout.
            </p>
          </details>
        </section>

        <section className="seo-page__section reveal seo-page__cta-section">
          <h2>Stay Updated on Durian Season 2026</h2>
          <p>
            Join our WhatsApp broadcast to receive daily updates on fresh arrivals, seasonal
            varieties, and <Link to="/durian-deals/">special deals</Link> throughout the season.
          </p>
          <div className="seo-page__actions">
            <BtnLink to="/#shop">Shop When In Season</BtnLink>
            <BtnLink
              variant="ghost"
              href={`https://wa.me/${SITE.whatsappE164}?text=${encodeURIComponent('Hi Dukrian! Please add me to your season updates broadcast.')}`}
              target="_blank"
              rel="noreferrer"
            >
              Get Season Alerts
            </BtnLink>
          </div>
        </section>
      </article>
    </>
  )
}
