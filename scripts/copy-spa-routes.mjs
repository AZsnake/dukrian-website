import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

/**
 * Static buckets (S3-style) request an object per URL path. SPA deep links need a real
 * object at each route. Keep this list in sync with <Route path="…"> in src/main.tsx.
 */
const SPA_ROUTE_SEGMENTS = [
  'blackgold-msw',
  'd24-sultan',
  'durian-bundles',
  'durian-deals',
  'durian-delivery',
  'same-day-durian-delivery',
  'durian-season',
  'big-durians',
  'how-to-find-ripe-good-durian',
  'best-durian-varieties',
]

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const distDir = path.resolve(__dirname, '..', 'dist')
const indexHtml = path.join(distDir, 'index.html')

if (!fs.existsSync(indexHtml)) {
  console.error('copy-spa-routes: dist/index.html missing — run vite build first')
  process.exit(1)
}

const html = fs.readFileSync(indexHtml, 'utf8')
for (const seg of SPA_ROUTE_SEGMENTS) {
  const outFile = path.join(distDir, seg)
  fs.writeFileSync(outFile, html)
}
console.log(`copy-spa-routes: wrote ${SPA_ROUTE_SEGMENTS.length} HTML shells alongside index.html`)
