/**
 * Meta Pixel standard events — see
 * https://developers.facebook.com/docs/meta-pixel/reference
 * https://www.facebook.com/business/help/402791146561655
 */

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void
  }
}

const CURRENCY = 'SGD'

function pixelAvailable() {
  return typeof window !== 'undefined' && typeof window.fbq === 'function'
}

/** Low-level: `fbq('track', event, data?)` */
export function pixelTrack(event: string, data?: Record<string, unknown>) {
  if (!pixelAvailable()) return
  if (data && Object.keys(data).length > 0) {
    window.fbq!('track', event, data)
  } else {
    window.fbq!('track', event)
  }
}

export function trackViewContent(productId: string, contentName: string, value: number) {
  pixelTrack('ViewContent', {
    content_ids: [productId],
    content_type: 'product',
    content_name: contentName,
    value,
    currency: CURRENCY,
  })
}

export function trackAddToCart(productId: string, quantity: number, unitPrice: number) {
  const value = unitPrice * quantity
  pixelTrack('AddToCart', {
    content_ids: [productId],
    content_type: 'product',
    contents: [{ id: productId, quantity }],
    value,
    currency: CURRENCY,
  })
}

type LineForPixel = { id: string; qty: number; price: number }

function checkoutPayload(lines: LineForPixel[], value: number) {
  return {
    content_ids: lines.map((l) => l.id),
    content_type: 'product',
    contents: lines.map((l) => ({ id: l.id, quantity: l.qty, item_price: l.price })),
    num_items: lines.reduce((s, l) => s + l.qty, 0),
    value,
    currency: CURRENCY,
  }
}

export function trackInitiateCheckout(lines: LineForPixel[], value: number) {
  pixelTrack('InitiateCheckout', checkoutPayload(lines, value))
}

export function trackPurchase(lines: LineForPixel[], value: number) {
  pixelTrack('Purchase', checkoutPayload(lines, value))
}
