import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

/**
 * S3-style hosts need a real object per URL. Each page is served as <segment>/index.html
 * (canonical URL: /<segment>/). Also writes 404.html — set the host’s custom404 page to
 * 404.html so wrong keys still return HTML (then React redirects no-trailing-slash → /…/).
 * Keep SPA_ROUTE_SEGMENTS in sync with src/main.tsx.
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
  const dir = path.join(distDir, seg)
  fs.mkdirSync(dir, { recursive: true })
  fs.writeFileSync(path.join(dir, 'index.html'), html)
}
fs.writeFileSync(path.join(distDir, '404.html'), html)

console.log(
  `copy-spa-routes: ${SPA_ROUTE_SEGMENTS.length} route shells + 404.html (set host custom 404 → 404.html)`,
)
