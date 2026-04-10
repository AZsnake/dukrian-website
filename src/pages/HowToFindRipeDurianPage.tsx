import { Link } from 'react-router-dom'
import { SEOHead } from '../components/seo/SEOHead'
import { Breadcrumbs } from '../components/seo/Breadcrumbs'
import { SITE } from '../config'

export default function HowToFindRipeDurianPage() {
  return (
    <>
      <SEOHead
        title="How to Find Ripe & Good Durian — Expert Guide from Singapore"
        description="Learn how to find ripe, good quality durian with expert tips from Dukrian Singapore. Visual cues, aroma test, sound test, stem check, and more. Pick the perfect Blackgold MSW, D24 Sultan every time."
        path="/how-to-find-ripe-good-durian"
        ogType="article"
        article={{ publishedTime: '2025-01-25', modifiedTime: '2026-04-01', author: 'Dukrian Team' }}
        jsonLd={[
          {
            '@context': 'https://schema.org',
            '@type': 'HowTo',
            name: 'How to Find Ripe and Good Quality Durian',
            description: 'Expert guide from Dukrian on selecting the perfect ripe durian — visual cues, aroma test, shake test, and more.',
            step: [
              { '@type': 'HowToStep', name: 'Check the stem', text: 'A fresh, plump stem indicates recent harvest. Dried or shrivelled stems mean the durian has been sitting for too long.' },
              { '@type': 'HowToStep', name: 'Smell the base', text: 'Smell the bottom of the durian where it naturally cracked or near the seams. A rich, sweet aroma means ripeness. No smell means underripe; sour smell means overripe.' },
              { '@type': 'HowToStep', name: 'Shake gently', text: 'Hold the durian by the stem and shake gently. If you feel or hear the seeds shifting inside, the flesh has pulled away from the husk — a sign of good ripeness.' },
              { '@type': 'HowToStep', name: 'Press the thorns', text: 'Gently press two adjacent thorns together. On a ripe durian, they should give slightly. If completely rigid, the fruit is underripe.' },
              { '@type': 'HowToStep', name: 'Look at the colour', text: 'A good durian has a uniform brownish-green to olive husk. Avoid fruit with dark patches (potential rot) or bright green colour (underripe).' },
              { '@type': 'HowToStep', name: 'Check the shape', text: 'Round, symmetrical durians tend to have more even flesh development. Irregular shapes may have some chambers underdeveloped.' },
            ],
          },
          {
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'How do you know if a durian is ripe?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Key indicators of a ripe durian include: a sweet, fragrant aroma from the base/seams; a slight give when pressing adjacent thorns together; a rattling sound when gently shaken (seeds shifting inside); a fresh, plump stem (not dried); and uniform brownish-green husk colour.',
                },
              },
              {
                '@type': 'Question',
                name: 'How do you pick a good Musang King durian?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'A good Musang King (MSW) should have a pronounced star-shaped pattern on its base, golden-brown husk with slight greenish tinge, strong aromatic smell at the seams, and a slight rattle when shaken. The thorns should be relatively pyramidal. Heavier fruits for their size tend to have more flesh.',
                },
              },
            ],
          },
        ]}
      />

      <article className="seo-page">
        <Breadcrumbs items={[{ label: 'How to Find Ripe Durian', href: '/how-to-find-ripe-good-durian' }]} />

        <header className="seo-page__hero">
          <h1>How to Find Ripe, Good Quality Durian: An Expert Guide</h1>
          <p className="seo-page__subtitle">
            Decades of collective experience from the Dukrian team distilled into practical tips —
            so you can confidently pick or assess the perfect durian every time.
          </p>
        </header>

        <section className="seo-page__section">
          <h2>Why Knowing How to Assess Durian Matters</h2>
          <p>
            Durian is unlike most fruit — you can't see the flesh before buying, and the price premium
            for varieties like <Link to="/blackgold-msw">Blackgold MSW</Link> means a bad pick hurts.
            Whether you're choosing whole fruit at a stall or assessing de-husked portions, understanding
            what "good durian" looks, smells, and feels like protects your investment and maximises your
            enjoyment.
          </p>
          <p>
            At Dukrian, our team grades every lot that arrives from Malaysia. We've rejected countless
            batches that didn't meet our standards — here's what we look for, and what you should too.
          </p>
        </section>

        <section className="seo-page__section">
          <h2>The 6 Tests for Picking Ripe Durian</h2>

          <h3>1. The Stem Check</h3>
          <p>
            The stem (the thick stalk where the durian hung from the tree) is your first clue about freshness.
          </p>
          <ul>
            <li><strong>Fresh stem</strong> — plump, slightly green or brown, and moist at the cut. Indicates recent harvest (1–2 days).</li>
            <li><strong>Dry stem</strong> — shrivelled, dark, and brittle. The durian has been sitting for too long and quality is declining.</li>
            <li><strong>No stem</strong> — if the stem has been cut very short or removed, the seller may be hiding how old the fruit is.</li>
          </ul>
          <p>
            <strong>Our practice:</strong> At Dukrian, we only accept fruit that arrived within hours.
            Since we sell de-husked portions, we check stem condition on the whole fruit before processing.
          </p>

          <h3>2. The Aroma Test</h3>
          <p>
            Smell the durian at the base (bottom) and along the seams where the husk sections meet. This is
            where aroma escapes first as the fruit ripens.
          </p>
          <ul>
            <li><strong>Rich, sweet, complex aroma</strong> — the durian is ripe and ready to eat</li>
            <li><strong>Little to no smell</strong> — the fruit is underripe; the flesh will be starchy and bland</li>
            <li><strong>Sour or fermented smell</strong> — overripe; the flesh may be mushy and unpleasant</li>
            <li><strong>Boozy/alcoholic notes</strong> — can indicate peak ripeness for varieties like Blackgold MSW, or over-ripeness for milder varieties like <Link to="/d24-sultan">D24 Sultan</Link></li>
          </ul>

          <h3>3. The Shake Test</h3>
          <p>
            Hold the durian by its stem (carefully, avoiding the thorns!) and shake it gently. Listen and feel:
          </p>
          <ul>
            <li><strong>Loose rattling</strong> — the flesh has naturally pulled away from the husk, a classic sign of perfect ripeness</li>
            <li><strong>No movement</strong> — the flesh is still tightly attached to the husk, meaning the fruit is not yet ripe</li>
            <li><strong>Sloshy/liquid feel</strong> — overripe; the flesh is breaking down</li>
          </ul>

          <h3>4. The Thorn Press Test</h3>
          <p>
            Gently press two adjacent thorns towards each other using your thumb and forefinger:
          </p>
          <ul>
            <li><strong>Slight give</strong> — good ripeness; the husk is softening as the fruit matures</li>
            <li><strong>Completely rigid</strong> — underripe; needs more time</li>
            <li><strong>Very soft</strong> — likely overripe</li>
          </ul>
          <p>
            This test takes practice — with experience, you develop a feel for the "just right" resistance.
          </p>

          <h3>5. Visual Inspection</h3>
          <p>
            Examine the husk colour and condition:
          </p>
          <ul>
            <li><strong>Uniform brownish-green to olive</strong> — healthy, properly ripened</li>
            <li><strong>Bright green all over</strong> — harvested too early, underripe</li>
            <li><strong>Dark black patches</strong> — potential rot or fungal damage inside</li>
            <li><strong>Cracked seams</strong> — can be a sign of over-ripeness, though slight natural cracking at the base is normal for ripe fruit</li>
          </ul>

          <h3>6. Shape and Weight</h3>
          <p>
            Round, symmetrical durians tend to have more evenly developed flesh chambers. Pick up the
            fruit — heavier durians for their size generally have more flesh and smaller seeds.
          </p>
          <p>
            For <Link to="/blackgold-msw">Musang King</Link> specifically, look for the characteristic
            five-pointed star pattern on the base of the fruit, which is a visual identifier for this cultivar.
          </p>
        </section>

        <section className="seo-page__section">
          <h2>How to Assess De-husked Durian</h2>
          <p>
            When buying pre-packed de-husked durian (like what we sell at Dukrian), you can't do the
            shake or thorn tests. Instead, focus on:
          </p>
          <ul>
            <li>
              <strong>Flesh colour</strong> — deep golden (Blackgold MSW), pale yellow (D24), or orange
              (Red Prawn) depending on variety. Avoid grey or brown discolouration.
            </li>
            <li>
              <strong>Texture</strong> — should look creamy and smooth, not watery or dried out
            </li>
            <li>
              <strong>Aroma</strong> — even through packaging, fresh durian has a distinct sweet aroma.
              Off or sour smells indicate problems.
            </li>
            <li>
              <strong>Packaging integrity</strong> — seals should be intact with no leakage or excess air
            </li>
            <li>
              <strong>Buy from a trusted source</strong> — a reputable seller who grades and selects
              their fruit (like Dukrian) removes most of the risk for you
            </li>
          </ul>
        </section>

        <section className="seo-page__section">
          <h2>Variety-Specific Tips</h2>

          <h3>Choosing Good Blackgold MSW</h3>
          <p>
            The best <Link to="/blackgold-msw">Blackgold MSW</Link> has deep amber to dark golden flesh,
            a pronounced bittersweet aroma, and thick, custardy texture. If buying whole, look for the
            star-shaped base pattern and relatively short, pyramidal thorns characteristic of Musang King.
          </p>

          <h3>Choosing Good D24 Sultan</h3>
          <p>
            Quality <Link to="/d24-sultan">D24 Sultan</Link> has uniformly pale yellow flesh that's thick
            and smooth. The aroma should be sweet and buttery, not too pungent. D24's larger seeds mean
            less flesh per fruit — look for lobes that are plump and fully developed.
          </p>

          <h3>Choosing Good XO Durian</h3>
          <p>
            XO's fermented, wine-like character is its signature. Good XO has very pale, almost translucent
            flesh with a sticky, slightly liquidy texture. If it smells overly sour (rather than
            pleasantly fermented), it's past its prime.
          </p>
        </section>

        <section className="seo-page__section">
          <h2>Red Flags: Signs of Bad Durian</h2>
          <ul>
            <li><strong>Sour or rotting smell</strong> — the fruit is spoiled; do not consume</li>
            <li><strong>Grey or brown flesh</strong> — oxidation or rot; should be discarded</li>
            <li><strong>Maggots or insects</strong> — natural but indicates the fruit has been sitting too long</li>
            <li><strong>Watery, thin flesh</strong> — poor quality fruit from young trees or bad growing conditions</li>
            <li><strong>Extreme stringiness/fibre</strong> — underripe or poor variety</li>
          </ul>
          <p>
            At Dukrian, our eat/baojiak promise means we'll replace any fruit that doesn't meet expectations.
            If you ever receive durian that shows any of these signs, WhatsApp us immediately for a replacement.
          </p>
        </section>

        <section className="seo-page__section seo-page__section--faq">
          <h2>Frequently Asked Questions</h2>

          <details className="seo-faq">
            <summary>How do you know if a durian is ripe?</summary>
            <p>
              Key indicators: sweet aroma from the base/seams, slight give when pressing thorns,
              rattling sound when shaken, fresh plump stem, and uniform brownish-green husk colour.
            </p>
          </details>

          <details className="seo-faq">
            <summary>How do you pick a good Musang King durian?</summary>
            <p>
              Look for the star-shaped base pattern, golden-brown husk, strong aromatic smell, slight
              rattle when shaken, and pyramidal thorns. Heavier fruit for its size means more flesh.
            </p>
          </details>

          <details className="seo-faq">
            <summary>Should I buy whole or de-husked durian?</summary>
            <p>
              De-husked is more convenient and easier to assess quality (you can see the flesh). Whole
              durian is a more traditional experience. At Dukrian, we sell de-husked for guaranteed
              freshness and quality grading.
            </p>
          </details>

          <details className="seo-faq">
            <summary>How long does fresh durian last after opening?</summary>
            <p>
              Fresh de-husked durian is best consumed within 2–3 hours at room temperature. Refrigerate
              for up to 2 days, or freeze for 1–2 months. Quality declines after opening, so eat it
              while it's fresh!
            </p>
          </details>
        </section>

        <section className="seo-page__section seo-page__cta-section">
          <h2>Skip the Guesswork — Order from Dukrian</h2>
          <p>
            Our expert team does the selection for you. Every box of{' '}
            <Link to="/blackgold-msw">Blackgold MSW</Link> and{' '}
            <Link to="/d24-sultan">D24 Sultan</Link> is graded for quality before it reaches
            your door via <Link to="/same-day-durian-delivery">same-day delivery</Link>.
          </p>
          <div className="seo-page__actions">
            <Link to="/#shop" className="btn btn--primary">Shop Quality Durian</Link>
            <a
              className="btn btn--ghost"
              href={`https://wa.me/${SITE.whatsappE164}`}
              target="_blank"
              rel="noreferrer"
            >
              Ask Us Anything
            </a>
          </div>
        </section>
      </article>
    </>
  )
}
