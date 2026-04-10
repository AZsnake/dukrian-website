```
$$$$$$$\  $$\   $$\ $$\   $$\ $$$$$$$\  $$$$$$\  $$$$$$\  $$\   $$\ 
$$  __$$\ $$ |  $$ |$$ | $$  |$$  __$$\ \_$$  _|$$  __$$\ $$$\  $$ |
$$ |  $$ |$$ |  $$ |$$ |$$  / $$ |  $$ |  $$ |  $$ /  $$ |$$$$\ $$ |
$$ |  $$ |$$ |  $$ |$$$$$  /  $$$$$$$  |  $$ |  $$$$$$$$ |$$ $$\$$ |
$$ |  $$ |$$ |  $$ |$$  $$<   $$  __$$<   $$ |  $$  __$$ |$$ \$$$$ |
$$ |  $$ |$$ |  $$ |$$ |\$$\  $$ |  $$ |  $$ |  $$ |  $$ |$$ |\$$$ |
$$$$$$$  |\$$$$$$  |$$ | \$$\ $$ |  $$ |$$$$$$\ $$ |  $$ |$$ | \$$ |
\_______/  \______/ \__|  \__|\__|  \__|\______|\__|  \__|\__|  \__|
                                                                                                                             
                                                       有 家 榴 莲
```

> Premium Pahang Highland Blackgold MSW durian — delivered fresh across Singapore from Serangoon Garden.

---

## Overview

**Dukrian Web** is a modern storefront combining a **scroll-driven 3D durian scene** (Three.js), a full **browse → cart → checkout** flow, **10 SEO content pages** with structured data, and **Meta Pixel** analytics — all in a single React SPA.

---

## Tech Stack

| Layer | Choice |
|-------|--------|
| **UI** | React 19 · TypeScript · React Router 7 |
| **Build** | Vite 5.4 · `@vitejs/plugin-react` 4.x |
| **3D** | Three.js (lazy canvas, GLTF/Draco/Meshopt) |
| **SEO** | react-helmet-async · JSON-LD · Breadcrumbs |
| **Icons** | lucide-react |
| **Images** | WebP (via sharp conversion script) |
| **Styling** | Global CSS with custom properties — no CSS-in-JS |

---

## Quick Start

```bash
npm install          # install dependencies
npm run dev          # dev server → http://localhost:5173
npm run build        # tsc + vite build → dist/
npm run preview      # preview production build
npm run lint         # ESLint
```

> **Node ≥ 18.18** required. Vite 5.4 is pinned for Node 18 compatibility (Vite 8 needs Node 20.19+).

---

## Project Structure

```
durainbb/
├── public/
│   ├── favicon.png
│   ├── images/dukrian/         # Brand photos (*.webp) + channel images
│   └── models/                 # durian-compressed.glb (3D model)
│
├── scripts/
│   ├── convert-to-webp.mjs     # Batch image → WebP conversion + ref update
│   └── write-placeholder-glb.mjs
│
├── src/
│   ├── main.tsx                # Router, scroll-reveal init, lazy routes
│   ├── App.tsx                 # Home: hero, shop, delivery, channels, why
│   ├── config.ts               # SITE branding, URLs, WhatsApp, formatPrice()
│   ├── CartContext.tsx          # Cart state (fires Meta AddToCart)
│   ├── ScrollSceneContext.tsx   # Scroll + pointer refs for 3D
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx      # Sticky nav, cart icon, smart logo scroll
│   │   │   ├── Footer.tsx
│   │   │   └── PageLayout.tsx  # Shared wrapper for content pages
│   │   ├── BtnLink.tsx         # Unified <Link>/<a> button component
│   │   ├── Loader.tsx          # Branded loading indicator
│   │   ├── BrandMark.tsx       # Text wordmark (EN + 中文)
│   │   ├── DurianCanvas.tsx    # Mounts Three.js scene
│   │   ├── ShopSection.tsx     # Tabbed product grid
│   │   ├── ShopProductCard.tsx
│   │   ├── ProductModal.tsx    # Detail modal (portal to body)
│   │   ├── Cart.tsx            # Slide-out cart drawer
│   │   ├── CheckoutModal.tsx
│   │   └── seo/
│   │       ├── SEOHead.tsx     # <Helmet> wrapper: meta, OG, JSON-LD
│   │       └── Breadcrumbs.tsx
│   │
│   ├── pages/                  # 10 SEO content pages (lazy-loaded)
│   │   ├── BlackgoldMswPage.tsx
│   │   ├── D24SultanPage.tsx
│   │   ├── DurianDeliveryPage.tsx
│   │   ├── SameDayDeliveryPage.tsx
│   │   ├── DurianSeasonPage.tsx
│   │   ├── BigDuriansPage.tsx
│   │   ├── DurianBundlesPage.tsx
│   │   ├── DurianDealsPage.tsx
│   │   ├── BestDurianVarietiesPage.tsx
│   │   └── HowToFindRipeDurianPage.tsx
│   │
│   ├── content/
│   │   └── siteContent.ts      # Products, nav, order-how cards, social links
│   │
│   ├── lib/
│   │   ├── scrollReveal.ts     # IntersectionObserver scroll-reveal system
│   │   ├── metaPixel.ts        # Meta Pixel standard events
│   │   ├── easing.ts           # Cubic + smoothstep easing
│   │   └── useWindowScrollProgress.ts
│   │
│   ├── three/                  # 3D scene: GLTF load, frame loop, perf tuning
│   │   ├── DurianThreeView.ts
│   │   ├── durianGltfModel.ts
│   │   ├── frameUpdates.ts
│   │   ├── durianConstants.ts
│   │   ├── adaptivePixelRatio.ts
│   │   ├── meshPerfTuning.ts
│   │   └── sceneIdleSnapshot.ts
│   │
│   └── index.css               # All styles: layout, components, animations
│
├── index.html                  # Meta Pixel base + GLB preload
├── vite.config.ts              # React plugin, GLB 404 helper, manual chunks
└── package.json
```

---

## Key Features

### 3D Durian Hero

- Scroll-driven camera + pointer-following tilt (Three.js)
- Lazy-loaded canvas with GLTF/Draco/Meshopt decoders
- Adaptive pixel ratio to maintain frame budget across devices
- Procedural fallback mesh if GLB fails to load

### E-Commerce Flow

1. **Shop** — Filterable tabs: All · Blackgold MSW · More varieties · Bundles
2. **Product detail** — Modal with image, description, WhatsApp order link
3. **Add to cart** — From card or modal; fires `AddToCart` Pixel event
4. **Cart drawer** — Quantities, remove, subtotal in S$
5. **Checkout** — Delivery vs self-collection, time slots, payment preference
6. **WhatsApp handoff** — Order details pre-filled for confirmation

### SEO Content Pages

10 long-form guides with:
- `react-helmet-async` for `<title>`, meta, Open Graph
- JSON-LD structured data (Service, FAQPage, Article)
- Breadcrumb navigation
- FAQ accordions
- Internal cross-linking between pages

### Animations & UX

- **Scroll-reveal** — Sections and cards fade up as they enter the viewport (IntersectionObserver + MutationObserver for dynamic content)
- **Staggered cards** — Grid children animate in sequence with cascading delays
- **Smooth scrolling** — CSS `scroll-behavior: smooth` for all anchor navigation
- **Page transitions** — Fade-up entry animation on route changes
- **Reduced motion** — All animations disabled for `prefers-reduced-motion`

### Image Optimization

All product and channel images are **WebP** format, converted via:

```bash
node scripts/convert-to-webp.mjs
```

The script scans `public/images/`, converts JPG/PNG → WebP with quality stepping, deletes originals, and auto-updates all source references.

---

## Configuration

### Brand & Business — `src/config.ts`

| Key | Purpose |
|-----|---------|
| `SITE.name` / `nameCn` | English & Chinese brand names |
| `SITE.origin` | Canonical URL |
| `SITE.whatsappE164` | WhatsApp number (international format) |
| `SITE.address` / `hours` | Store location & operating hours |
| `SITE.deliveryWindow` | Delivery timing copy |
| `formatPrice()` | S$ currency formatter |

### Products & Content — `src/content/siteContent.ts`

- **`products`** — Catalogue (id, name, price, image, category, WhatsApp href)
- **`orderHowCards`** — "How to order" channel cards
- **`navLinks`** / **`seoPageLinks`** — Navigation items

### Meta Pixel — `index.html` + `src/lib/metaPixel.ts`

| Event | Trigger |
|-------|---------|
| `PageView` | Initial page load |
| `ViewContent` | Product detail modal opens |
| `AddToCart` | Item added to cart |
| `InitiateCheckout` | Checkout modal opens |
| `Purchase` | Checkout form submitted |

---

## 3D Model Setup

1. Place `durian-compressed.glb` in `public/models/`
2. Or generate a placeholder: `npm run gen:placeholder-glb`

The model is preloaded in `index.html` for faster first paint. Vite middleware returns a plain-text 404 for missing `.glb` so the GLTF loader doesn't try to parse HTML.

---

## Deployment Checklist

- [ ] **Node ≥ 18.18** in CI environment
- [ ] Set **`SITE.origin`** and social URLs in `config.ts`
- [ ] All **`public/images/dukrian/*.webp`** present
- [ ] **`public/models/durian-compressed.glb`** for 3D (optional)
- [ ] Verify **Meta Pixel ID** in `index.html`
- [ ] Configure **HTTPS** and **CSP** headers
- [ ] Run `npm ci && npm run build` → deploy `dist/`

Output is a fully static `dist/` folder — deploy to Netlify, Vercel, CloudBase, S3+CloudFront, nginx, or any static host.

---

## License

Private project. All rights reserved by the business owner unless stated otherwise.
