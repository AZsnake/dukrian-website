import { Package, Phone } from 'lucide-react'
import { socialLinks, shopLinks } from '../../content/siteContent'
import { SITE } from '../../config'

export function Footer() {
  return (
    <footer className="site-footer" id="contact">
      <div className="site-footer__grid">
        <div>
          <a href="#top" aria-label={SITE.name}>
            <img
              src="https://www.durianbb.com/image/data/theme/logo/durianbb-logo-white_071025102339.png"
              alt={SITE.name}
              height="32"
              className="site-footer__logo"
            />
          </a>
          <p className="site-footer__muted" style={{ marginTop: '0.75rem' }}>
            {SITE.description}
          </p>
          <div style={{ marginTop: '0.5rem', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
            <span className="site-footer__info-row">
              <Package size={14} aria-hidden />
              Delivery across Malaysia
            </span>
            <span className="site-footer__info-row">
              <Phone size={14} aria-hidden />
              WhatsApp: +60 11-XXXX XXXX
            </span>
          </div>
        </div>

        <div>
          <p className="site-footer__head">Shop</p>
          <ul className="site-footer__links">
            <li>
              <a className="site-footer__link" href="#shop">
                Fresh Durian
              </a>
            </li>
            {shopLinks.map((l) => (
              <li key={l.href}>
                <a className="site-footer__link" href={l.href} target="_blank" rel="noreferrer">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="site-footer__head">Follow Us</p>
          <ul className="site-footer__social">
            {socialLinks.map((s) => (
              <li key={s.href}>
                <a href={s.href} target="_blank" rel="noreferrer">
                  {s.label}
                </a>
              </li>
            ))}
          </ul>

          <p className="site-footer__head" style={{ marginTop: '1.5rem' }}>
            Official Store
          </p>
          <a
            className="site-footer__link"
            href={`${SITE.origin}/`}
            target="_blank"
            rel="noreferrer"
          >
            www.durianbb.com
          </a>
        </div>
      </div>

      <p className="site-footer__note">
        © {new Date().getFullYear()} DurianBB. All rights reserved. Orders are processed by DurianBB Sdn Bhd.
      </p>
    </footer>
  )
}
