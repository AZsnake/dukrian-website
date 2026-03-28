import { useState } from 'react'
import { CheckCircle2 } from 'lucide-react'
import { useCartActions, type CartItem } from '../CartContext'
import { formatPrice, SITE } from '../config'
import { trackPurchase } from '../lib/metaPixel'

type Props = {
  items: CartItem[]
  total: number
  onClose: () => void
  onSuccess: () => void
}

function localDateYmd(d: Date) {
  const y = d.getFullYear()
  const m = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  return `${y}-${m}-${day}`
}

export function CheckoutModal({ items, total, onClose, onSuccess }: Props) {
  const { clearCart } = useCartActions()
  const [done, setDone] = useState(false)
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    postal: '',
    unit: '',
    date: localDateYmd(new Date()),
    slot: '19-23',
    fulfillment: 'delivery' as 'delivery' | 'pickup',
    payment: 'paynow',
    notes: '',
  })

  const minDate = localDateYmd(new Date())

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (items.length > 0) {
      trackPurchase(
        items.map((i) => ({ id: i.id, qty: i.qty, price: i.price })),
        total,
      )
    }
    setDone(true)
    clearCart()
    setTimeout(onSuccess, 2800)
  }

  const deliveryFeeHint =
    total >= 110 ? 'Your subtotal may qualify for free delivery (seasonal threshold).' : SITE.deliveryFeeNote

  return (
    <div className="modal-overlay checkout-overlay" role="dialog" aria-modal aria-label="Checkout">
      <div className="checkout-modal">
        <button className="modal-close" onClick={onClose} aria-label="Close">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        {done ? (
          <div className="checkout-success">
            <CheckCircle2 size={52} className="checkout-success__icon" aria-hidden />
            <h3>Order received</h3>
            <p>
              Thanks, {form.name || 'friend'}! Our team will confirm stock and delivery slot via WhatsApp (
              {SITE.whatsappDisplay}) as soon as possible — usually the same evening for orders before{' '}
              {SITE.sameDayCutoff}
            </p>
            <p className="checkout-success__sub">100% eat-satisfaction focus — we replace unsatisfactory fruit per policy.</p>
          </div>
        ) : (
          <>
            <h2 className="checkout-modal__title">Checkout &amp; payment preference</h2>
            <p className="checkout-modal__lede">
              Submit your cart here on Dukrian; our team confirms stock, slot, and payment (PayNow, PayLah, card, COD, etc.)
              by WhatsApp. Choose how you prefer to pay so we can match it when we reply.
            </p>

            <form onSubmit={handleSubmit} className="checkout-form" noValidate>
              <div className="checkout-form__grid">
                <div className="form-group form-group--full">
                  <p className="form-label">Fulfillment *</p>
                  <div className="payment-methods">
                    <label
                      className={`payment-option${form.fulfillment === 'delivery' ? ' payment-option--selected' : ''}`}
                    >
                      <input
                        type="radio"
                        name="fulfillment"
                        value="delivery"
                        checked={form.fulfillment === 'delivery'}
                        onChange={handleChange}
                      />
                      Delivery (evening window)
                    </label>
                    <label
                      className={`payment-option${form.fulfillment === 'pickup' ? ' payment-option--selected' : ''}`}
                    >
                      <input
                        type="radio"
                        name="fulfillment"
                        value="pickup"
                        checked={form.fulfillment === 'pickup'}
                        onChange={handleChange}
                      />
                      Store pickup — {SITE.address.split(',')[0]} (Serangoon; often free local pickup)
                    </label>
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="chk-name">
                    Full Name *
                  </label>
                  <input
                    id="chk-name"
                    className="form-input"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="chk-phone">
                    Mobile (WhatsApp) *
                  </label>
                  <input
                    id="chk-phone"
                    className="form-input"
                    type="tel"
                    name="phone"
                    required
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+65 8483 8466"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="chk-email">
                    Email (optional)
                  </label>
                  <input
                    id="chk-email"
                    className="form-input"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="For receipt copy"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="chk-date">
                    Preferred date *
                  </label>
                  <input
                    id="chk-date"
                    className="form-input"
                    type="date"
                    name="date"
                    required
                    value={form.date}
                    onChange={handleChange}
                    min={minDate}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="chk-slot">
                    Evening slot
                  </label>
                  <select id="chk-slot" className="form-input" name="slot" value={form.slot} onChange={handleChange}>
                    <option value="19-21">7 PM – 9 PM</option>
                    <option value="19-23">7 PM – 11 PM (typical)</option>
                    <option value="21-23">9 PM – 11 PM</option>
                  </select>
                </div>

                {form.fulfillment === 'delivery' && (
                  <>
                    <div className="form-group">
                      <label className="form-label" htmlFor="chk-postal">
                        Postal code *
                      </label>
                      <input
                        id="chk-postal"
                        className="form-input"
                        name="postal"
                        required={form.fulfillment === 'delivery'}
                        value={form.postal}
                        onChange={handleChange}
                        placeholder="e.g. 557927"
                        inputMode="numeric"
                        maxLength={6}
                      />
                    </div>
                    <div className="form-group form-group--full">
                      <label className="form-label" htmlFor="chk-unit">
                        Street address &amp; unit *
                      </label>
                      <input
                        id="chk-unit"
                        className="form-input"
                        name="unit"
                        required={form.fulfillment === 'delivery'}
                        value={form.unit}
                        onChange={handleChange}
                        placeholder="Block, street, unit number"
                      />
                    </div>
                  </>
                )}

                <div className="form-group form-group--full">
                  <p className="form-label">Payment preference *</p>
                  <div className="payment-methods payment-methods--wrap">
                    {[
                      { value: 'paynow', label: 'PayNow' },
                      { value: 'paylah', label: 'PayLah' },
                      { value: 'card', label: 'Card' },
                      { value: 'cod', label: 'Cash on delivery' },
                      { value: 'favepay', label: 'FavePay' },
                      { value: 'grabpay', label: 'GrabPay' },
                      { value: 'shopeepay', label: 'ShopeePay' },
                    ].map((opt) => (
                      <label
                        key={opt.value}
                        className={`payment-option${form.payment === opt.value ? ' payment-option--selected' : ''}`}
                      >
                        <input
                          type="radio"
                          name="payment"
                          value={opt.value}
                          checked={form.payment === opt.value}
                          onChange={handleChange}
                        />
                        {opt.label}
                      </label>
                    ))}
                  </div>
                </div>

                <div className="form-group form-group--full">
                  <label className="form-label" htmlFor="chk-notes">
                    Notes
                  </label>
                  <textarea
                    id="chk-notes"
                    className="form-input form-textarea"
                    name="notes"
                    value={form.notes}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Ripeness, access instructions, gate codes, party size…"
                  />
                </div>
              </div>

              <p className="checkout-hints">
                {SITE.deliveryWindow}. {deliveryFeeHint} {SITE.freeDeliveryNote}
              </p>

              <div className="checkout-total-row">
                <span>Subtotal</span>
                <strong>{formatPrice(total)}</strong>
              </div>

              <button type="submit" className="btn btn--primary checkout-submit-btn">
                Submit order request — {formatPrice(total)}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  )
}
