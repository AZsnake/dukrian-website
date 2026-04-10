import { SITE, whatsappOrderUrl } from '../config'

// ─── Types ───────────────────────────────────────────────────────────────────

/** Signature MSW, other cultivars, or curated bundles. */
export type ProductCategory = 'signature' | 'variety' | 'bundle'

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

export type OrderHowCard = {
  id: string
  title: string
  blurb: string
  href: string
  image: string
}

/** Brand photos: `public/images/dukrian/1.png` … `8.png`. */
const img = {
  p1: '/images/dukrian/1.png',
  p2: '/images/dukrian/2.png',
  p3: '/images/dukrian/3.png',
  p4: '/images/dukrian/4.png',
  p5: '/images/dukrian/5.png',
  p6: '/images/dukrian/6.png',
  p7: '/images/dukrian/7.png',
  p8: '/images/dukrian/8.png',
  /** #channels cards — stock photos (Pexels, free use). */
  channelShop: '/images/dukrian/channel-shop.jpg',
  channelDelivery: '/images/dukrian/channel-delivery.jpg',
  channelWhatsapp: '/images/dukrian/channel-whatsapp.jpg',
} as const

function waProduct(name: string) {
  return whatsappOrderUrl(`Hi Dukrian! I'd like to order: ${name}`)
}

// ─── Navigation ──────────────────────────────────────────────────────────────

export const navLinks = [
  { label: 'Delivery', href: '#delivery' },
  { label: 'How to order', href: '#channels' },
  { label: 'Why Dukrian', href: '#why' },
] as const

/** Header dropdown: on-site destinations + WhatsApp for help. */
export const headerQuickLinks = [
  { label: 'Shop all', href: '#shop', external: false },
  { label: 'Delivery & pickup', href: '#delivery', external: false },
  { label: 'How to order', href: '#channels', external: false },
  { label: 'WhatsApp', href: `https://wa.me/${SITE.whatsappE164}`, external: true },
] as const

/** SEO content pages — guides and informational content. */
export const seoPageLinks = [
  { label: 'Blackgold MSW', href: '/blackgold-msw' },
  { label: 'D24 Sultan', href: '/d24-sultan' },
  { label: 'Durian Delivery', href: '/durian-delivery' },
  { label: 'Same-Day Delivery', href: '/same-day-durian-delivery' },
  { label: 'Durian Bundles', href: '/durian-bundles' },
  { label: 'Durian Deals', href: '/durian-deals' },
  { label: 'Durian Season', href: '/durian-season' },
  { label: 'Big Durians', href: '/big-durians' },
  { label: 'How to Pick Durian', href: '/how-to-find-ripe-good-durian' },
  { label: 'Durian Varieties', href: '/best-durian-varieties' },
] as const

// ─── Products (illustrative catalogue — confirm live prices with the team) ──

export const products: Product[] = [
  {
    id: 'blackgold-msw-420',
    name: 'Blackgold MSW — de-husked box (~420g)',
    price: 58,
    image: img.p1,
    href: waProduct('Blackgold MSW box ~420g'),
    category: 'signature',
    badge: 'House favourite',
    description:
      'Pahang Highland Blackgold Musang King: richer, creamier, often with bitter / boozy depth. De-husked flesh, double-sealed for freshness.',
    weight: '~420g net',
  },
  {
    id: 'blackgold-msw-520',
    name: 'Blackgold MSW — promo box (~520g)',
    price: 68,
    image: img.p2,
    href: waProduct('Blackgold MSW promo box ~520g'),
    category: 'signature',
    badge: 'Free upsize promo',
    description:
      'When our free-upsize runs are on, a larger box at exceptional value — same Blackgold MSW quality Dukrian is known for.',
    weight: '~520g net',
  },
  {
    id: 'xo',
    name: 'XO durian — de-husked',
    price: 48,
    image: img.p3,
    href: waProduct('XO durian de-husked'),
    category: 'variety',
    description:
      'Bold, complex profile with fermented, wine-like undertones — a favourite among those who love intense, aromatic pulp.',
    weight: 'Portion varies',
  },
  {
    id: 'tekka',
    name: 'Tekka (Bamboo Leg)',
    price: 52,
    image: img.p4,
    href: waProduct('Tekka durian'),
    category: 'variety',
    description:
      'Distinctive, often nutty-sweet with a firm texture — available seasonally alongside our MSW line.',
    weight: 'Portion varies',
  },
  {
    id: 'd13-red-prawn',
    name: 'D13 Johor Red Prawn',
    price: 44,
    image: img.p5,
    href: waProduct('D13 Johor Red Prawn'),
    category: 'variety',
    description:
      'Orange-hued, sticky-sweet flesh with small seeds — a crowd-pleasing variety when in season.',
    weight: 'Portion varies',
  },
  {
    id: 'd24',
    name: 'D24 Sultan',
    price: 42,
    image: img.p6,
    href: waProduct('D24 Sultan'),
    category: 'variety',
    description:
      'Pale yellow, buttery and mildly bitter — an approachable classic next to our Blackgold MSW.',
    weight: 'Portion varies',
  },
  {
    id: 'party-tasting',
    name: 'Party / office tasting bundle',
    price: 198,
    image: img.p7,
    href: waProduct('Party or office tasting bundle'),
    category: 'bundle',
    badge: 'Events',
    description:
      'Wholesale, corporate events, and live durian parties — tell us your headcount and we’ll propose varieties and portions.',
    weight: 'Custom',
  },
]

// ─── How to order (on this site) ─────────────────────────────────────────────

export const orderHowCards: OrderHowCard[] = [
  {
    id: 'shop-here',
    title: 'Shop & checkout here',
    blurb:
      'Browse de-husked boxes, add to your cart, and complete checkout on this website — pay with PayNow, PayLah, card, or other methods we support.',
    href: '#shop',
    image: img.channelShop,
  },
  {
    id: 'delivery',
    title: 'Delivery & Serangoon pickup',
    blurb:
      'Evening delivery slots across Singapore, or collect at Crowhurst Drive. Fees and free-delivery thresholds vary by season — details below.',
    href: '#delivery',
    image: img.channelDelivery,
  },
  {
    id: 'whatsapp',
    title: 'WhatsApp broadcast & support',
    blurb:
      'Join our broadcast for today’s arrivals and promos, or message us anytime about stock, timing, and special requests.',
    href: `https://wa.me/${SITE.whatsappE164}`,
    image: img.channelWhatsapp,
  },
]

// ─── Social (footer) ──────────────────────────────────────────────────────────

export const socialLinks = [
  { label: 'Instagram', href: SITE.instagramUrl },
  { label: 'TikTok', href: SITE.tiktokUrl },
  { label: 'Facebook', href: SITE.facebookUrl },
  { label: 'WhatsApp', href: `https://wa.me/${SITE.whatsappE164}` },
] as const
