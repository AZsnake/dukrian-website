import { Link } from 'react-router-dom'
import { SEOHead } from '../components/seo/SEOHead'
import { Breadcrumbs } from '../components/seo/Breadcrumbs'
import { BtnLink } from '../components/BtnLink'
import { SITE } from '../config'

export default function BestDurianVarietiesPage() {
  return (
    <>
      <SEOHead
        title="Best Durian Varieties in Singapore — Complete Name Guide"
        description="Best durian varieties in Singapore: Musang King (MSW), D24 Sultan, XO, Red Prawn, Tekka & more. Flavour profiles, prices & tips from Dukrian."
        path="/best-durian-varieties"
        ogType="article"
        article={{ publishedTime: '2025-01-10', modifiedTime: '2026-04-01', author: 'Dukrian Team' }}
        jsonLd={[
          {
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Best Durian Varieties and Names: A Complete Singapore Guide',
            author: { '@type': 'Organization', name: `${SITE.name} ${SITE.nameCn}` },
            publisher: { '@type': 'Organization', name: `${SITE.name} ${SITE.nameCn}`, logo: { '@type': 'ImageObject', url: `${SITE.origin}/favicon.png` } },
            datePublished: '2025-01-10',
            dateModified: '2026-04-01',
          },
          {
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'What are the best durian varieties in Singapore?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'The most popular and best-regarded durian varieties in Singapore are: Musang King (MSW/D197) — the undisputed premium favourite with rich, bittersweet flesh; D24 Sultan — a classic with buttery, mildly bitter taste; XO — intensely fermented and boozy; Red Prawn (D13) — sweet with orange flesh; and Tekka/Bamboo Leg — nutty and firm.',
                },
              },
              {
                '@type': 'Question',
                name: 'What is the most expensive durian variety?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Musang King (especially the Blackgold grade) is the most expensive commonly available durian variety in Singapore, typically S$50–80+ per box. Black Thorn is another premium variety. The exact prices depend on season, supply, and quality grade.',
                },
              },
            ],
          },
        ]}
      />

      <article className="seo-page">
        <Breadcrumbs items={[{ label: 'Best Durian Varieties', href: '/best-durian-varieties' }]} />

        <header className="seo-page__hero">
          <h1>Best Durian Varieties: A Complete Guide to Durian Names</h1>
          <p className="seo-page__subtitle">
            From the king of durians (Musang King) to classic D24 Sultan and exotic XO — your definitive
            guide to every major durian variety available in Singapore.
          </p>
        </header>

        <section className="seo-page__section reveal">
          <h2>Understanding Durian Names and Varieties</h2>
          <p>
            There are over <strong>200 registered durian varieties</strong> (known as "clones") in Malaysia's
            national registry, each assigned a "D" number. However, only about 10–15 varieties are commonly
            available in Singapore's market. Each has a distinct flavour profile, texture, aroma intensity,
            and price point.
          </p>
          <p>
            The naming system can be confusing — varieties have official D-numbers, common names, Chinese
            names, and sometimes multiple nicknames. This guide covers the most popular varieties
            available at Dukrian and across Singapore, with their various names and what makes each special.
          </p>
        </section>

        <section className="seo-page__section reveal">
          <h2>The Top Durian Varieties in Singapore</h2>

          <h3>1. Musang King / MSW / Mao Shan Wang (猫山王) — D197</h3>
          <p>
            <strong>The undisputed king of durians</strong> and by far the most sought-after variety in Singapore.
          </p>
          <ul>
            <li><strong>Also known as:</strong> MSW, Mao Shan Wang, D197, Raja Kunyit ("Turmeric King")</li>
            <li><strong>Flesh colour:</strong> Deep golden to amber</li>
            <li><strong>Taste:</strong> Intensely sweet with complex bittersweet depth, creamy and custardy</li>
            <li><strong>Aroma:</strong> Strong, aromatic, unmistakable</li>
            <li><strong>Price at Dukrian:</strong> From S$58 (standard box)</li>
          </ul>
          <p>
            The premium <Link to="/blackgold-msw">Blackgold grade</Link> of Musang King features even darker
            flesh and more intense bittersweet/boozy notes, sourced from old-growth trees in Pahang Highlands.
          </p>

          <h3>2. D24 Sultan (苏丹王)</h3>
          <p>
            <strong>The beloved classic</strong> — for decades, D24 was the #1 durian in Southeast Asia before Musang King rose to prominence.
          </p>
          <ul>
            <li><strong>Also known as:</strong> D24, Sultan, Sultan King</li>
            <li><strong>Flesh colour:</strong> Pale yellow</li>
            <li><strong>Taste:</strong> Buttery, mildly sweet with subtle bitter notes</li>
            <li><strong>Aroma:</strong> Medium — less pungent than MSW</li>
            <li><strong>Price at Dukrian:</strong> From S$42</li>
          </ul>
          <p>
            Read our detailed <Link to="/d24-sultan">D24 Sultan guide</Link> to learn more about this classic variety.
          </p>

          <h3>3. XO Durian</h3>
          <p>
            <strong>The connoisseur's choice</strong> — named after XO cognac for its intense, fermented character.
          </p>
          <ul>
            <li><strong>Also known as:</strong> XO, Golden Phoenix (金凤)</li>
            <li><strong>Flesh colour:</strong> Pale, almost translucent</li>
            <li><strong>Taste:</strong> Strongly fermented, wine-like, boozy, complex</li>
            <li><strong>Aroma:</strong> Distinctly alcoholic and pungent</li>
            <li><strong>Price at Dukrian:</strong> From S$48</li>
          </ul>
          <p>
            XO is an acquired taste — if you love it, you <em>really</em> love it. The fermented, almost
            alcoholic flavour is polarising but deeply satisfying for those who appreciate its complexity.
          </p>

          <h3>4. Red Prawn / D13 (红虾)</h3>
          <p>
            <strong>The sweet crowd-pleaser</strong> — named for its distinctive reddish-orange flesh colour.
          </p>
          <ul>
            <li><strong>Also known as:</strong> D13, Red Prawn, Ang Heh, Udang Merah</li>
            <li><strong>Flesh colour:</strong> Orange to reddish-orange</li>
            <li><strong>Taste:</strong> Very sweet, sticky, mild bitterness</li>
            <li><strong>Aroma:</strong> Sweet and fragrant, moderate intensity</li>
            <li><strong>Price at Dukrian:</strong> From S$44</li>
          </ul>
          <p>
            D13 Red Prawn is especially popular in our Johor-sourced lots. Its sweeter profile and smaller
            seeds make it a favourite for those who prefer less bitterness.
          </p>

          <h3>5. Tekka / Bamboo Leg (竹脚)</h3>
          <p>
            <strong>The nutty alternative</strong> — with a distinctive flavour that sets it apart from the MSW-D24 spectrum.
          </p>
          <ul>
            <li><strong>Also known as:</strong> Tekka, Bamboo Leg, Kaki Bambu</li>
            <li><strong>Flesh colour:</strong> Medium yellow</li>
            <li><strong>Taste:</strong> Nutty-sweet with firm, drier texture</li>
            <li><strong>Aroma:</strong> Moderate</li>
            <li><strong>Price at Dukrian:</strong> From S$52</li>
          </ul>

          <h3>6. Black Thorn / Duri Hitam (黑刺)</h3>
          <p>
            <strong>The rising star</strong> — increasingly popular and rapidly approaching MSW-level pricing in some markets.
          </p>
          <ul>
            <li><strong>Also known as:</strong> D200, Hei Ci, Ochee</li>
            <li><strong>Flesh colour:</strong> Orange-yellow</li>
            <li><strong>Taste:</strong> Sweet and aromatic with caramel notes, less bitter than MSW</li>
            <li><strong>Aroma:</strong> Fragrant and distinct</li>
            <li><strong>Availability:</strong> Seasonal, limited</li>
          </ul>

          <h3>7. Other Notable Varieties</h3>
          <ul>
            <li><strong>D101</strong> — sweet, mild, often used in pastries and desserts</li>
            <li><strong>D88 (金枕头 / Golden Pillow / Monthong)</strong> — the Thai variety; very sweet, milder aroma, widely exported</li>
            <li><strong>Hor Lor (葫芦)</strong> — gourd-shaped, fragrant and sweet with a unique floral note</li>
            <li><strong>S17 / Green Skin</strong> — bright green husk, moderately sweet flesh</li>
          </ul>
        </section>

        <section className="seo-page__section reveal">
          <h2>Quick Comparison: Top Durian Varieties</h2>
          <div className="seo-page__comparison">
            <table className="seo-table">
              <thead>
                <tr>
                  <th>Variety</th>
                  <th>Sweetness</th>
                  <th>Bitterness</th>
                  <th>Creaminess</th>
                  <th>Aroma</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Blackgold MSW</td><td>High</td><td>High</td><td>Very high</td><td>Strong</td><td>S$58+</td></tr>
                <tr><td>D24 Sultan</td><td>Medium</td><td>Low</td><td>High</td><td>Medium</td><td>S$42+</td></tr>
                <tr><td>XO</td><td>Low</td><td>Medium</td><td>Medium</td><td>Very strong</td><td>S$48+</td></tr>
                <tr><td>Red Prawn D13</td><td>Very high</td><td>Very low</td><td>Medium</td><td>Medium</td><td>S$44+</td></tr>
                <tr><td>Tekka</td><td>Medium</td><td>Low</td><td>Low (firm)</td><td>Medium</td><td>S$52+</td></tr>
                <tr><td>Black Thorn</td><td>High</td><td>Low</td><td>High</td><td>Medium</td><td>Premium</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="seo-page__section reveal">
          <h2>Which Durian Should You Try First?</h2>

          <h3>If you're a first-timer</h3>
          <p>
            Start with <Link to="/d24-sultan">D24 Sultan</Link> — its milder aroma and balanced flavour
            make it the perfect introduction. If you enjoy it, graduate to Musang King next.
          </p>

          <h3>If you want the best of the best</h3>
          <p>
            Go straight to <Link to="/blackgold-msw">Blackgold MSW</Link>. There's a reason it's the most
            sought-after variety — the flavour complexity is unmatched.
          </p>

          <h3>If you love bold, complex flavours</h3>
          <p>
            Try XO durian. Its fermented, boozy profile is a unique experience that no other fruit can match.
          </p>

          <h3>If you prefer sweet without bitterness</h3>
          <p>
            Red Prawn D13 is your variety. Sticky-sweet with minimal bitter notes, it's the most
            approachable for those who find MSW too intense.
          </p>

          <h3>If you want to try everything</h3>
          <p>
            Order a <Link to="/durian-bundles">tasting bundle</Link> — it's the best way to discover your
            personal favourite across multiple varieties in one session.
          </p>
        </section>

        <section className="seo-page__section reveal seo-page__section--faq">
          <h2>Frequently Asked Questions: Durian Varieties</h2>

          <details className="seo-faq">
            <summary>What are the best durian varieties in Singapore?</summary>
            <p>
              The most popular are Musang King (MSW/D197), D24 Sultan, XO, Red Prawn (D13), and Tekka.
              Musang King is the premium favourite; D24 is the beloved classic; XO is for fermented
              flavour seekers.
            </p>
          </details>

          <details className="seo-faq">
            <summary>What is the most expensive durian variety?</summary>
            <p>
              Musang King, especially <Link to="/blackgold-msw">Blackgold grade</Link>, is the most
              expensive commonly available variety (S$50–80+ per box). Black Thorn (D200) is another
              premium variety with rising prices.
            </p>
          </details>

          <details className="seo-faq">
            <summary>What does the "D" in durian names mean?</summary>
            <p>
              "D" stands for "Daftar," meaning "register" in Malay. Each durian clone registered in
              Malaysia's national agricultural registry receives a D-number (e.g., D24, D197, D200).
              Not all varieties have official D-numbers — some are known only by common names.
            </p>
          </details>

          <details className="seo-faq">
            <summary>What is the mildest durian for beginners?</summary>
            <p>
              <Link to="/d24-sultan">D24 Sultan</Link> or D13 Red Prawn are the mildest popular
              varieties. D24 is buttery with subtle bitterness; Red Prawn is sweet with minimal bite.
              Both have lower aroma intensity than Musang King.
            </p>
          </details>

          <details className="seo-faq">
            <summary>Is Musang King the same as Mao Shan Wang?</summary>
            <p>
              Yes. Musang King, Mao Shan Wang (猫山王), MSW, and D197 all refer to the same durian
              variety. "Musang King" is the English name, "Mao Shan Wang" is the Mandarin name, and
              D197 is the official Malaysian registry number.
            </p>
          </details>
        </section>

        <section className="seo-page__section reveal seo-page__cta-section">
          <h2>Try Singapore's Best Durian Varieties at Dukrian</h2>
          <p>
            From flagship <Link to="/blackgold-msw">Blackgold MSW</Link> to classic{' '}
            <Link to="/d24-sultan">D24 Sultan</Link> and beyond — explore our curated selection
            with <Link to="/same-day-durian-delivery">same-day delivery</Link> across Singapore.
          </p>
          <div className="seo-page__actions">
            <BtnLink to="/#shop">Shop All Varieties</BtnLink>
            <BtnLink
              variant="ghost"
              href={`https://wa.me/${SITE.whatsappE164}?text=${encodeURIComponent('Hi Dukrian! What varieties do you have today?')}`}
              target="_blank"
              rel="noreferrer"
            >
              Check Today's Stock
            </BtnLink>
          </div>
        </section>
      </article>
    </>
  )
}
