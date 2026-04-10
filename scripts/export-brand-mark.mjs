/**
 * Renders the header BrandMark with the same CSS as the site and saves a transparent PNG.
 * Requires a Chromium-based browser (Chrome or Edge) via Playwright channel.
 */
import { chromium } from 'playwright-core'
import { mkdir } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, '..')
const outPath = join(root, 'public', 'images', 'brand-mark-header.png')
/** Device pixel ratio for the PNG (default 4x; override with BRAND_MARK_DPR, max 8). */
const deviceScaleFactor = Math.min(
  8,
  Math.max(1, Number.parseFloat(process.env.BRAND_MARK_DPR ?? '4') || 4),
)

const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8" />
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,700;1,9..144,700&family=Outfit:wght@600;700&family=Noto+Sans+SC:wght@600&display=block" rel="stylesheet" />
<style>
  html, body {
    margin: 0;
    padding: 0;
    background: transparent;
  }
  .brand-mark {
    -webkit-font-smoothing: antialiased;
    text-rendering: geometricPrecision;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
    line-height: 1.2;
    width: max-content;
  }
  .brand-mark__title {
    font-family: 'Fraunces Variable', 'Fraunces', Georgia, serif;
    font-weight: 700;
    color: #f4e4bc;
    letter-spacing: 0.02em;
    font-size: 1.28rem;
  }
  .brand-mark__cn {
    font-family: 'Outfit Variable', 'Outfit', 'Noto Sans SC', system-ui, sans-serif;
    font-size: 0.8rem;
    font-weight: 600;
    color: #f8c74f;
    margin-top: 0.12rem;
    letter-spacing: 0.08em;
  }
  .brand-mark__sg {
    font-family: 'Outfit Variable', 'Outfit', system-ui, sans-serif;
    font-size: 0.6rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.16em;
    color: rgba(255, 230, 180, 0.72);
    margin-top: 0.18rem;
  }
</style>
</head>
<body>
  <span class="brand-mark brand-mark--header">
    <span class="brand-mark__title">Dukrian</span>
    <span class="brand-mark__cn">有家榴莲</span>
    <span class="brand-mark__sg">Singapore</span>
  </span>
</body>
</html>`

async function tryLaunch() {
  const channels = ['chrome', 'msedge']
  let lastErr
  for (const channel of channels) {
    try {
      return await chromium.launch({ channel, headless: true })
    } catch (e) {
      lastErr = e
    }
  }
  throw lastErr ?? new Error('Could not launch Chrome or Edge')
}

const browser = await tryLaunch()
try {
  const page = await browser.newPage({ deviceScaleFactor })
  await page.setContent(html, { waitUntil: 'networkidle' })
  await page.evaluate(() => document.fonts.ready)
  await mkdir(dirname(outPath), { recursive: true })
  const mark = page.locator('.brand-mark')
  await mark.screenshot({ path: outPath, omitBackground: true })
  console.log('Wrote', outPath, `(@${deviceScaleFactor}x)`)
} finally {
  await browser.close()
}
