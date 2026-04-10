import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import react from '@vitejs/plugin-react'
import type { Plugin } from 'vite'
import { defineConfig } from 'vite'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

/** Avoid returning index.html for missing *.glb (prevents GLTFLoader JSON parse errors). */
function glbMissingPlain404(): Plugin {
  return {
    name: 'glb-missing-plain-404',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const url = req.url?.split('?')[0] ?? ''
        if (!url.endsWith('.glb')) return next()
        const rel = url.startsWith('/') ? url.slice(1) : url
        const file = path.join(server.config.root, 'public', rel)
        if (!fs.existsSync(file)) {
          res.statusCode = 404
          res.setHeader('Content-Type', 'text/plain; charset=utf-8')
          res.end(
            `Missing GLB: public/${rel}\n` +
              `Add your model or run: npm run gen:placeholder-glb\n`,
          )
          return
        }
        next()
      })
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@dukrian': path.resolve(__dirname, 'public/dukrian'),
    },
  },
  plugins: [react(), glbMissingPlain404()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/three')) return 'three'
          if (id.includes('node_modules/lucide-react')) return 'icons'
          if (id.includes('node_modules/react-helmet-async') || id.includes('node_modules/react-router-dom') || id.includes('node_modules/react-router')) return 'router'
        },
      },
    },
  },
})
