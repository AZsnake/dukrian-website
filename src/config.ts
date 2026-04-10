/** GLB under Vite `public/` (e.g. `public/models/durian-compressed.glb` → `/models/durian-compressed.glb`). */
export const DURIAN_MODEL_URL = '/models/durian-compressed.glb'

export const SITE = {
  name: 'Dukrian',
  nameCn: '有家榴莲',
  tagline: 'Farm to Table',
  subtitle: 'Within 12 Hours',
  description:
    'Premium Pahang Highland Blackgold Musang King (MSW) from trusted Malaysian plantations — de-husked, double-sealed, delivered fresh across Singapore from Serangoon Garden.',
  origin: 'https://dukrian.renthub.cloud',
  whatsappE164: '6584838466',
  whatsappDisplay: '8483 8466',
  address: '48 Crowhurst Drive, Singapore 557927',
  hours: 'Daily 2:00 PM – 11:00 PM / midnight',
  deliveryWindow: 'Fresh stock arrives ~6 PM; deliveries typically 7 PM – 11 PM',
  freeDeliveryNote: 'Free delivery from about S$105–S$120 depending on season; Serangoon area often free via store pickup.',
  deliveryFeeNote: 'Delivery fee about S$8–S$10 per location unless waived.',
  sameDayCutoff: 'Same-day orders: usually by 6 PM.',
  /** Official social */
  instagramUrl: 'https://www.instagram.com/Dukrainsg',
  tiktokUrl: 'https://www.tiktok.com/@Dukrian',
  facebookUrl: 'https://www.facebook.com/dukriansg/',
} as const

export function formatPrice(amount: number) {
  return `S$${amount.toFixed(2)}`
}

export const whatsappOrderUrl = (message: string) =>
  `https://wa.me/${SITE.whatsappE164}?text=${encodeURIComponent(message)}`
