import { SITE } from '../config'

const o = SITE.origin

// ─── Types ───────────────────────────────────────────────────────────────────

export type ProductCategory = 'fresh' | 'eat' | 'forever' | 'wear'

export type Product = {
  id: string
  name: string
  price: number
  image: string
  href: string
  category: ProductCategory
  badge?: string
  description: string
  weight?: string
}

// ─── Navigation ──────────────────────────────────────────────────────────────

export const navLinks = [
  { label: 'Academy', href: `${o}/durianbb-academy` },
  { label: 'World', href: `${o}/durianbb-world` },
  { label: 'Park', href: `${o}/durianbb-park` },
  { label: 'Video', href: `${o}/durianbb-video` },
] as const

export const shopLinks = [
  { label: 'DurianBB Wear', href: `${o}/durianbb-wear` },
  { label: 'DurianBB Eat', href: `${o}/durianbb-eat` },
  { label: 'Forever Series', href: `${o}/durianbb-forever` },
  { label: 'Lifestyle', href: `${o}/durianbb-lifestyle` },
] as const

// ─── Products ─────────────────────────────────────────────────────────────────

export const products: Product[] = [
  // ── Fresh Durian ──
  {
    id: 'musang-king',
    name: 'Musang King (D197)',
    price: 188,
    image: `${o}/image/cache/data/theme/home/gallery/durianbb/group-1156_071025104825-522x294@1x.png`,
    href: `${o}/musang-king-durian`,
    category: 'fresh',
    badge: 'Popular',
    description:
      'The undisputed King of Durian. Intensely rich, creamy, and bittersweet flesh with a complex aroma. Sourced fresh from Pahang orchards every season.',
    weight: '1 kg ±',
  },
  {
    id: 'd24',
    name: 'D24 Sultan Durian',
    price: 120,
    image: `${o}/image/cache/data/theme/home/gallery/durianbb/durianbb-academy_071025104825-522x294@1x.png`,
    href: `${o}/d24-sultan-durian`,
    category: 'fresh',
    description:
      'Pale yellow, smooth and buttery with a mild bitterness. The classic all-rounder — perfect for newcomers and seasoned fans alike.',
    weight: '1 kg ±',
  },
  {
    id: 'black-thorn',
    name: 'Black Thorn (Duri Hitam)',
    price: 268,
    image: `${o}/image/cache/data/theme/banners/dbb.com.my/cube-forever_260326121308-522x294@1x.png`,
    href: `${o}/black-thorn-durian`,
    category: 'fresh',
    badge: 'Premium',
    description:
      'Deep orange flesh with an intensely sweet, creamy, and multi-layered flavour. One of the rarest and most sought-after varieties in Malaysia.',
    weight: '1 kg ±',
  },
  {
    id: 'xo',
    name: 'XO Durian',
    price: 148,
    image: `${o}/image/cache/data/theme/banners/dbb.com.my/dbbpark-outlet_260326141836-522x294@1x.png`,
    href: `${o}/xo-durian`,
    category: 'fresh',
    description:
      'Bold bitter notes with a dry, wine-like finish. Fermented-tasting and deeply aromatic — the true connoisseur\'s choice.',
    weight: '1 kg ±',
  },

  // ── Eat ──
  {
    id: 'freeze-dried',
    name: 'Freeze Dried Durian',
    price: 38,
    image: `${o}/image/cache/data/theme/products/food-product/durianbb-freeze-dried-fruit/freeze-dried-durian/ready-to-eat-freeze-dried-durian-1_241025130402-1000x1000@1x.png`,
    href: `${o}/freeze-dried-durian.html`,
    category: 'eat',
    badge: 'Best Seller',
    description:
      'All the intense flavour of fresh Musang King, freeze-dried into a light, satisfying crunch. No refrigeration needed — snack anytime, anywhere.',
  },
  {
    id: 'wafer',
    name: 'DurianBB Wafer',
    price: 28,
    image: `${o}/image/cache/data/theme/products/food-product/durian-wafer/durian-wafer_241025125401-1000x1000@1x.png`,
    href: `${o}/durianbb-wafer.html`,
    category: 'eat',
    description:
      'Crispy layered wafers with a real durian cream filling. A classic snack reimagined with an unmistakable DurianBB twist.',
  },
  {
    id: 'coffee',
    name: 'MSK 4-in-1 Coffee (8 sachets)',
    price: 48,
    image: `${o}/image/cache/data/theme/products/food-product/durianbb-msk-4in1-coffee/durianbb-4-in-1-coffee_241025125847-1000x1000@1x.png`,
    href: `${o}/durianbb-msk-4-in-1-coffee-8-sachets.html`,
    category: 'eat',
    description:
      'Musang King-inspired 4-in-1 instant coffee. Creamy, aromatic, and subtly durian-flavoured — morning fuel for the adventurous soul.',
  },

  // ── Forever ──
  {
    id: 'forever-cube',
    name: 'DurianBB Forever Cube',
    price: 98,
    image: `${o}/image/cache/data/theme/products/non-food-product/forever-cube/forevercube---1_201125071949-856x856@1x.png`,
    href: `${o}/durianbb-forever.html`,
    category: 'forever',
    badge: 'New',
    description:
      'A real durian seed preserved forever inside a flawless crystal-clear cube. A striking desk piece, trophy, or truly unique gift.',
  },
  {
    id: 'forever-magnet',
    name: 'DurianBB Forever Magnet',
    price: 48,
    image: `${o}/image/cache/data/theme/products/non-food-product/forever-magnet/forever-magnet---1_201125073527-856x856@1x.png`,
    href: `${o}/durianbb-forever-keychain.html`,
    category: 'forever',
    description:
      'A real durian encapsulated in crystal-clear resin, mounted as a strong fridge magnet. An instant conversation starter.',
  },
  {
    id: 'forever-keychain',
    name: 'DurianBB Forever Keychain',
    price: 48,
    image: `${o}/image/cache/data/theme/products/non-food-product/forever-keychain/forever-keychain---2_201125072933-856x856@1x.png`,
    href: `${o}/durianbb-forever-ants.html`,
    category: 'forever',
    description:
      'Carry a tiny real durian everywhere you go. Real durian preserved in resin on a beautifully crafted keychain.',
  },
  {
    id: '3d-keychain',
    name: '3D Keychain — SuperB',
    price: 38,
    image: `${o}/image/cache/data/theme/products/non-food-product/3d-keychain/3d-keychain---5_201125090203-856x856@1x.png`,
    href: `${o}/durianbb-3d-keychains-superb.html`,
    category: 'forever',
    description:
      'Vibrant, detailed 3D-printed DurianBB character keychain in the iconic SuperB style. Durable, collectible, and full of personality.',
  },
  {
    id: 'plushie-dragon',
    name: 'Original Plushie — Dragon',
    price: 98,
    image: `${o}/image/cache/data/theme/products/non-food-product/Plushie-ori/dbb-plushie-ori--3_201125074657-856x856@1x.png`,
    href: `${o}/durianbb-original-plushie-dragon.html`,
    category: 'forever',
    description:
      'The beloved DurianBB Dragon in irresistibly soft, huggable plushie form. The perfect gift for all ages — collect the whole squad!',
  },

  // ── Wear ──
  {
    id: 'wear-tee',
    name: 'DurianBB Classic Tee',
    price: 79,
    image: `${o}/image/cache/data/theme/home/gallery/durianbb/group-1156_071025104825-522x294@1x.png`,
    href: `${o}/durianbb-wear`,
    category: 'wear',
    badge: 'New',
    description:
      'Soft premium cotton tee with the iconic DurianBB character print. Show your love for the King of Fruits wherever you go.',
  },
  {
    id: 'wear-cap',
    name: 'DurianBB Cap',
    price: 49,
    image: `${o}/image/cache/data/theme/banners/dbb.com.my/dbbacademy-outlet_260326142145-522x294@1x.png`,
    href: `${o}/durianbb-wear`,
    category: 'wear',
    description:
      'Adjustable structured cap with embroidered DurianBB logo. Lightweight, breathable, and perfectly on-brand.',
  },
  {
    id: 'wear-tote',
    name: 'DurianBB Tote Bag',
    price: 39,
    image: `${o}/image/cache/data/theme/banners/dbb.com.my/dbblot10-outlet_260326142441-522x294@1x.png`,
    href: `${o}/durianbb-wear`,
    category: 'wear',
    description:
      'Heavy-duty canvas tote with the DurianBB mascot. Spacious enough for your market haul — or a whole durian.',
  },
]

// ─── Experience Cards ─────────────────────────────────────────────────────────

export const experienceCards = [
  {
    title: 'DurianBB Park',
    blurb: 'Taste the season in a space built around the fruit.',
    href: `${o}/durianbb-park`,
    image: `${o}/image/cache/data/theme/banners/dbb.com.my/dbbpark-outlet_260326141836-522x294@1x.png`,
  },
  {
    title: 'DurianBB Academy',
    blurb: 'Learn stories, varieties, and how we choose each box.',
    href: `${o}/durianbb-academy`,
    image: `${o}/image/cache/data/theme/banners/dbb.com.my/dbbacademy-outlet_260326142145-522x294@1x.png`,
  },
  {
    title: 'Lot 10 & more',
    blurb: 'Visit our outlets and seasonal pop-ups.',
    href: `${o}/stores-and-experiences/`,
    image: `${o}/image/cache/data/theme/banners/dbb.com.my/dbblot10-outlet_260326142441-522x294@1x.png`,
  },
] as const

// ─── Social ───────────────────────────────────────────────────────────────────

export const socialLinks = [
  { label: 'Facebook', href: 'https://www.facebook.com/DurianBB.com.my/' },
  { label: 'Instagram', href: 'https://www.instagram.com/DurianBB.my/' },
  { label: 'YouTube', href: 'https://www.youtube.com/@DurianBBMalaysia' },
] as const
