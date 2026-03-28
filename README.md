# Dukrian Web — 有家榴莲

Modern marketing and **on-site shopping** experience for **Dukrian** (有家榴莲), a Singapore-based seller of premium Pahang Highland **Blackgold Musang King (MSW)** and related durian products. The app combines a **scroll-driven 3D durian scene** (Three.js) with a full **browse → cart → checkout** flow, **WhatsApp** handoff for confirmation, and **Meta Pixel** analytics.

---

## Tech stack

| Layer | Choice |
|--------|--------|
| UI | **React 19** + **TypeScript** |
| Build | **Vite 5.4** + **`@vitejs/plugin-react` 4.x** (Node 18–compatible; Vite 8 requires Node 20.19+) |
| 3D | **Three.js** (lazy-loaded canvas, GLTF loader) |
| Icons | **lucide-react** |
| Styling | Global **CSS** (`src/index.css`) — custom properties, no CSS-in-JS |

---

## Prerequisites

- **Node.js** **≥ 18.18** (declared in `package.json` → `engines.node`)
- **npm** (or compatible client)

**Why not Vite 8?** Vite 8 and `@vitejs/plugin-react` 6 require **Node 20.19+** (or 22.12+). Hosts such as **Tencent CloudBase** default builders often ship **Node 18.x**, which then fails at `vite build` (`CustomEvent is not defined` in the CLI). This repo pins **Vite 5.4** so `npm run build` succeeds on Node 18. When your CI upgrades to Node 20+, you may bump Vite/plugin again if desired.

---

## Getting started

```bash
# Install dependencies
npm install

# Dev server (default http://localhost:5173)
npm run dev

# Production build → dist/
npm run build

# Preview production build locally
npm run preview

# Lint
npm run lint
```

---

## Project structure

```
durainbb/
├── public/
│   ├── favicon.png              # Site favicon
│   ├── images/dukrian/          # Brand product photos (1.png … 8.png) + channel JPGs
│   └── models/                  # Optional: durian-compressed.glb (see 3D section)
├── scripts/
│   └── write-placeholder-glb.mjs   # Optional tiny GLB for local dev
├── src/
│   ├── App.tsx                  # Page sections, hero, lazy Three canvas
│   ├── main.tsx                 # React root (StrictMode)
│   ├── config.ts                # SITE branding, URLs, WhatsApp, formatPrice()
│   ├── CartContext.tsx          # Cart state + addItem (fires Meta AddToCart)
│   ├── ScrollSceneContext.tsx   # Scroll + pointer for 3D
│   ├── content/
│   │   └── siteContent.ts       # Nav, products, order-how cards, social links
│   ├── components/
│   │   ├── layout/Header.tsx, Footer.tsx
│   │   ├── BrandMark.tsx        # Text wordmark (EN + 中文)
│   │   ├── DurianCanvas.tsx     # Mounts Three scene
│   │   ├── ShopSection.tsx, ShopProductCard.tsx
│   │   ├── ProductModal.tsx     # Detail modal (React portal → document.body)
│   │   ├── Cart.tsx, CheckoutModal.tsx
│   │   └── …
│   ├── lib/
│   │   ├── metaPixel.ts         # Meta Pixel standard events
│   │   ├── useWindowScrollProgress.ts
│   │   └── easing.ts
│   └── three/                   # DurianThreeView, GLTF load, frame loop, perf tuning
├── index.html                   # Meta Pixel base + preload GLB + favicon
├── vite.config.ts               # React plugin, GLB 404 helper, manual chunks
└── package.json
```

---

## Configuration

### Brand & business (`src/config.ts`)

Central place for copy and links:

- **SITE**: `name`, `nameCn`, taglines, `description`, `origin` (dukrian.com)
- **Contact**: `whatsappE164`, `whatsappDisplay`, `address`, `hours`, delivery notes
- **Social**: `instagramUrl`, `tiktokUrl`, `facebookUrl`
- **Helpers**: `formatPrice()` (SGD), `whatsappOrderUrl(message)`

Update phone, social handles, or legal site URL here; product list and nav live in **`src/content/siteContent.ts`**.

### Products & content (`src/content/siteContent.ts`)

- **`products`**: catalogue items (id, name, price SGD, image path, category, WhatsApp `href` prefill)
- **`orderHowCards`**: “How to order” section (mix of local PNGs + `channel-*.jpg` stock art)
- **`navLinks`**, **`headerQuickLinks`**, **`socialLinks`**

Image paths are served from **`public/`** (e.g. `/images/dukrian/1.png`).

### Path alias (`vite.config.ts`)

- **`@dukrian`** → `public/dukrian` (reserved for static assets if you add that folder)

---

## 3D durian scene

- **Entry**: `DurianCanvas` lazy-loads `DurianThreeView` and a GLB from **`DURIAN_MODEL_URL`** in `config.ts` (default `/models/durian-compressed.glb`).
- **Fallback**: If the GLB fails to load, a procedural mesh is used (see console hint).
- **Dev UX**: Custom Vite middleware returns **plain-text 404** for missing `.glb` so the GLTF loader does not try to parse HTML as JSON.

**Add your model**

1. Place `durian-compressed.glb` under `public/models/`.
2. Or generate a minimal placeholder: `npm run gen:placeholder-glb` (writes into `public/models/` if the script is configured accordingly).

`index.html` preloads the GLB for faster first paint when the file exists.

---

## E-commerce flow (on-site)

1. **Shop** — Tabs: All / Blackgold MSW / More varieties / Bundles & events.
2. **Product detail** — Click card image → modal (portal to `body`, viewport-centered). **ViewContent** fires on open (see Pixel section).
3. **Add to cart** — From card or modal; **AddToCart** Pixel event via `CartContext.addItem`.
4. **Cart drawer** — Quantities, remove, subtotal in **S$**.
5. **Checkout** — Delivery vs Serangoon pickup, slots, payment preference (PayNow, PayLah, card, COD, etc.). **InitiateCheckout** when opening modal; **Purchase** on successful submit (demo clears cart + closes UI).

Backend payment capture is **out of scope**; copy explains WhatsApp confirmation.

---

## Meta Pixel (`src/lib/metaPixel.ts` + `index.html`)

- **Base code** in `index.html`: `fbq('init', '…')` and `PageView`.  
- **Noscript** image lives in **`<body>`** (HTML5 disallows `<img>` inside `<head><noscript>` — avoids Vite/parse5 errors).

**Standard events** (see [Meta Pixel reference](https://developers.facebook.com/docs/meta-pixel/reference)):

| Event | When |
|--------|------|
| `PageView` | Initial load (snippet) |
| `ViewContent` | User opens product detail (`ShopProductCard` open handler — avoids StrictMode double `useEffect`) |
| `AddToCart` | Every `addItem` |
| `InitiateCheckout` | Cart → Checkout |
| `Purchase` | Checkout form submit (before cart clear) |

**Changing Pixel ID**: edit both the `<script>` `fbq('init', '…')` and the `<noscript>` `tr?id=…` URLs in `index.html`.

**SPA note**: There is no client-side router; `PageView` fires once per full load. If you add React Router later, call `fbq('track', 'PageView')` on route changes.

---

## Styling & layout notes

- **Product modal**: Left column uses **container queries** (`container-type: size`) so the image is a **square** with side `min(100cqw, 100cqh)`, **vertically centered** in `.product-modal__media` on desktop.
- **Sections** use `contain: layout style`; modals that must align to the **viewport** use **`createPortal(..., document.body)`** for the overlay.
- **Currency**: Display is **S$** throughout; tune copy in `config` / `CheckoutModal` if you add multi-currency.

---

## Build & quality

```bash
npm run build   # tsc -b && vite build
npm run lint    # ESLint (may report pre-existing issues in CartContext patterns)
```

Output: **`dist/`** — static assets suitable for any static host (Netlify, Vercel, S3+CloudFront, nginx, etc.).

**Manual chunks** (in `vite.config.ts`): `three` and `icons` split for caching.

---

## Deployment checklist

- [ ] CI / CloudBase: use **Node ≥ 18.18** (or 20+); run `npm ci` / `npm install` then `npm run build` from the **repository root** (where `package.json` lives)
- [ ] Set correct **`SITE.origin`** and social URLs in `config.ts`
- [ ] Replace **`public/favicon.png`** if needed
- [ ] Ensure **`public/images/dukrian/*.png`** (and `channel-*.jpg` if used) are present
- [ ] Add **`public/models/durian-compressed.glb`** for production 3D (optional)
- [ ] Verify **Meta Pixel** ID in `index.html` and events in Events Manager
- [ ] Configure **HTTPS** and **CSP** if you tighten third-party scripts (Facebook, WhatsApp links)

---

## Legacy / reference

The repo root may still contain saved HTML/CSS from an older **“Dukrian! 有家榴莲”** page (`Dukrian! 有家榴莲.html` and `_files/`). The **active application** is this Vite app under `src/` + `public/` + `index.html`.

---

## License

Private project (`"private": true` in `package.json`). All rights reserved by the business owner unless stated otherwise.
