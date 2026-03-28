import { Clock, MapPin, Package, Phone } from 'lucide-react'
import { socialLinks } from '../../content/siteContent'
import { SITE } from '../../config'
import { BrandMark } from '../BrandMark'

export function Footer() {
  return (
    <footer className="site-footer" id="contact">
      <div className="site-footer__grid">
        <div className="site-footer__brand-col">
          <a href="#top" className="site-footer__brand-link" aria-label={`${SITE.name} ${SITE.nameCn}`}>
            <BrandMark variant="footer" />
          </a>
          <p className="site-footer__muted">{SITE.description}</p>
          <div className="site-footer__info-block">
            <span className="site-footer__info-row">
              <MapPin size={14} aria-hidden />
              {SITE.address}
            </span>
            <span className="site-footer__info-row">
              <Clock size={14} aria-hidden />
              {SITE.hours}
            </span>
            <span className="site-footer__info-row">
              <Package size={14} aria-hidden />
              {SITE.deliveryWindow}
            </span>
            <span className="site-footer__info-row">
              <Phone size={14} aria-hidden />
              WhatsApp +65 {SITE.whatsappDisplay}
            </span>
          </div>
        </div>

        <div>
          <p className="site-footer__head">Order on Dukrian</p>
          <ul className="site-footer__links">
            <li>
              <a className="site-footer__link" href="#shop">
                Shop &amp; cart
              </a>
            </li>
            <li>
              <a className="site-footer__link" href="#delivery">
                Delivery &amp; pickup
              </a>
            </li>
            <li>
              <a className="site-footer__link" href="#channels">
                How to order
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="site-footer__head">Follow Dukrian</p>
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
            Website
          </p>
          <a className="site-footer__link" href={`${SITE.origin}/`} target="_blank" rel="noreferrer">
            dukrian.com
          </a>
        </div>
      </div>

      <p className="site-footer__note">
        © {new Date().getFullYear()} Dukrian ({SITE.nameCn}). All rights reserved.
      </p>
    </footer>
  )
}
