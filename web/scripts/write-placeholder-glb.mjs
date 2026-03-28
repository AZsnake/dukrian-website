/**
 * Downloads a tiny valid GLB (Khronos Box sample) to public/models/durian.glb.
 * Replace that file with your full durian scan when ready.
 * Run: npm run gen:placeholder-glb
 */
import { mkdirSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const modelsDir = join(__dirname, '..', 'public', 'models')
mkdirSync(modelsDir, { recursive: true })
const out = join(modelsDir, 'durian.glb')
const url =
  'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Assets/main/Models/Box/glTF-Binary/Box.glb'

const res = await fetch(url)
if (!res.ok) throw new Error(`Fetch failed ${res.status}: ${url}`)
const buf = Buffer.from(await res.arrayBuffer())
writeFileSync(out, buf)
console.log('Wrote', out, `(${(buf.length / 1024).toFixed(1)} KB)`)
