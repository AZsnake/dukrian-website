import sharp from 'sharp'
import { readdir, stat, unlink, readFile, writeFile } from 'fs/promises'
import { join, extname, basename, relative } from 'path'
import { existsSync } from 'fs'

const ROOT = join(import.meta.dirname, '..')
const IMAGES_DIR = join(ROOT, 'public', 'images')
const SRC_DIR = join(ROOT, 'src')

const IMAGE_EXTS = new Set(['.jpg', '.jpeg', '.png', '.bmp', '.tiff', '.gif'])
const SKIP = new Set(['favicon.png'])
const SOURCE_EXTS = new Set(['.ts', '.tsx', '.css', '.html', '.json'])

const MAX_SIZE = 500 * 1024 // 500 KB target
const START_QUALITY = 82

// ── Collect images recursively ──────────────────────────────────────────────

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true })
  const files = []
  for (const e of entries) {
    const full = join(dir, e.name)
    if (e.isDirectory()) files.push(...(await walk(full)))
    else if (IMAGE_EXTS.has(extname(e.name).toLowerCase()) && !SKIP.has(e.name))
      files.push(full)
  }
  return files
}

// ── Convert a single image ──────────────────────────────────────────────────

async function convertImage(filePath) {
  const name = basename(filePath)
  const webpPath = filePath.replace(/\.[^.]+$/, '.webp')
  const webpName = basename(webpPath)

  const original = await stat(filePath)
  const originalKB = (original.size / 1024).toFixed(1)

  let quality = START_QUALITY
  let outputSize = Infinity

  while (quality >= 20) {
    await sharp(filePath)
      .rotate()
      .webp({ quality, effort: 4 })
      .toFile(webpPath)

    outputSize = (await stat(webpPath)).size
    if (outputSize <= MAX_SIZE) break
    quality -= 8
  }

  if (outputSize > MAX_SIZE) {
    const meta = await sharp(filePath).metadata()
    let scale = 0.75
    while (outputSize > MAX_SIZE && scale > 0.2) {
      const newW = Math.round((meta.width || 4000) * scale)
      await sharp(filePath)
        .rotate()
        .resize({ width: newW, withoutEnlargement: true })
        .webp({ quality: 30, effort: 4 })
        .toFile(webpPath)
      outputSize = (await stat(webpPath)).size
      scale -= 0.1
    }
  }

  const finalKB = (outputSize / 1024).toFixed(1)
  const saved = (((original.size - outputSize) / original.size) * 100).toFixed(1)

  for (let attempt = 0; attempt < 5; attempt++) {
    try {
      await unlink(filePath)
      break
    } catch (err) {
      if (err.code === 'EBUSY' && attempt < 4) {
        await new Promise((r) => setTimeout(r, 500 * (attempt + 1)))
      } else {
        console.warn(`  [warn] Could not delete ${name}: ${err.message}`)
        break
      }
    }
  }

  console.log(
    `  ${name} (${originalKB} KB) → ${webpName} (${finalKB} KB)  [q=${quality}, -${saved}%]`,
  )

  return { original: name, webp: webpName }
}

// ── Update source references ────────────────────────────────────────────────

async function collectSources(dir) {
  const entries = await readdir(dir, { withFileTypes: true })
  const files = []
  for (const e of entries) {
    const full = join(dir, e.name)
    if (e.isDirectory()) files.push(...(await collectSources(full)))
    else if (SOURCE_EXTS.has(extname(e.name).toLowerCase())) files.push(full)
  }
  return files
}

async function updateSourceRefs(renames) {
  const srcFiles = await collectSources(SRC_DIR)
  let totalUpdated = 0

  for (const file of srcFiles) {
    let content = await readFile(file, 'utf-8')
    const before = content
    for (const { original, webp } of renames) {
      content = content.replaceAll(original, webp)
    }
    if (content !== before) {
      await writeFile(file, content, 'utf-8')
      const relPath = relative(ROOT, file)
      totalUpdated++
      console.log(`  updated ${relPath}`)
    }
  }

  console.log(`\nUpdated ${totalUpdated} source file(s)`)
}

// ── Main ────────────────────────────────────────────────────────────────────

async function main() {
  if (!existsSync(IMAGES_DIR)) {
    console.log(`No images directory found at ${IMAGES_DIR}`)
    return
  }

  const images = await walk(IMAGES_DIR)

  if (images.length === 0) {
    console.log('No images to convert.')
    return
  }

  console.log(`Found ${images.length} image(s) to convert\n`)

  const renames = []
  let totalBefore = 0
  let totalAfter = 0

  for (const filePath of images) {
    const before = (await stat(filePath)).size
    totalBefore += before

    const result = await convertImage(filePath)
    renames.push(result)

    const afterPath = filePath.replace(/\.[^.]+$/, '.webp')
    totalAfter += (await stat(afterPath)).size
  }

  console.log(`\n${'─'.repeat(50)}`)
  console.log(
    `Total: ${(totalBefore / 1024).toFixed(0)} KB → ` +
      `${(totalAfter / 1024).toFixed(0)} KB ` +
      `(-${(((totalBefore - totalAfter) / totalBefore) * 100).toFixed(1)}%)`,
  )

  console.log(`\nUpdating source references…`)
  await updateSourceRefs(renames)

  console.log('Done. Originals deleted, references updated.')
}

main().catch(console.error)
