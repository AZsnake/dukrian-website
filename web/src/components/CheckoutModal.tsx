import { useState } from 'react'
import { CheckCircle2 } from 'lucide-react'
import { useCartActions } from '../CartContext'

type Props = {
  total: number
  onClose: () => void
  onSuccess: () => void
}

export function CheckoutModal({ total, onClose, onSuccess }: Props) {
  const { clearCart } = useCartActions()
  const [done, setDone] = useState(false)
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    date: '',
    payment: 'fpx',
    notes: '',
  })

  const minDate = new Date(Date.now() + 2 * 86_400_000).toISOString().split('T')[0]

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setDone(true)
    clearCart()
    setTimeout(onSuccess, 2800)
  }

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
            <h3>Order Placed!</h3>
            <p>Thank you, {form.name || 'friend'}! We'll confirm via email and WhatsApp within 24 hours.</p>
            <p className="checkout-success__sub">Get ready for some happiness delivery.</p>
          </div>
        ) : (
          <>
            <h2 className="checkout-modal__title">Complete Your Order</h2>

            <form onSubmit={handleSubmit} className="checkout-form" noValidate>
              <div className="checkout-form__grid">
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
                  <label className="form-label" htmlFor="chk-email">
                    Email *
                  </label>
                  <input
                    id="chk-email"
                    className="form-input"
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@email.com"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="chk-phone">
                    Phone *
                  </label>
                  <input
                    id="chk-phone"
                    className="form-input"
                    type="tel"
                    name="phone"
                    required
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+60 12-345 6789"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="chk-date">
                    Delivery Date *
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

                <div className="form-group form-group--full">
                  <label className="form-label" htmlFor="chk-address">
                    Delivery Address *
                  </label>
                  <input
                    id="chk-address"
                    className="form-input"
                    name="address"
                    required
                    value={form.address}
                    onChange={handleChange}
                    placeholder="Unit, Street, City, Postcode, State"
                  />
                </div>

                <div className="form-group form-group--full">
                  <p className="form-label">Payment Method *</p>
                  <div className="payment-methods">
                    {[
                      { value: 'fpx', label: 'Online Banking (FPX)' },
                      { value: 'card', label: 'Credit / Debit Card' },
                      { value: 'duitnow', label: 'DuitNow QR' },
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
                    Special Instructions
                  </label>
                  <textarea
                    id="chk-notes"
                    className="form-input form-textarea"
                    name="notes"
                    value={form.notes}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Allergies, ripeness preference, access instructions…"
                  />
                </div>
              </div>

              <div className="checkout-total-row">
                <span>Order Total</span>
                <strong>RM {total.toFixed(2)}</strong>
              </div>

              <button type="submit" className="btn btn--primary checkout-submit-btn">
                Place Order — RM {total.toFixed(2)}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  )
}
