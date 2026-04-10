import { Clock, MapPin, Package, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'
import { socialLinks, seoPageLinks } from '../../content/siteContent'
import { SITE } from '../../config'
import { BrandMark } from '../BrandMark'

export function Footer() {
  return (
    <footer className="site-footer" id="contact">
      <div className="site-footer__grid site-footer__grid--4col">
        <div className="site-footer__brand-col">
          <Link to="/" className="site-footer__brand-link" aria-label={`${SITE.name} ${SITE.nameCn}`}>
            <BrandMark variant="footer" />
          </Link>
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
              <Link className="site-footer__link" to="/#shop">
                Shop &amp; cart
              </Link>
            </li>
            <li>
              <Link className="site-footer__link" to="/durian-delivery">
                Delivery &amp; pickup
              </Link>
            </li>
            <li>
              <Link className="site-footer__link" to="/durian-deals">
                Durian deals
              </Link>
            </li>
            <li>
              <Link className="site-footer__link" to="/durian-bundles">
                Bundles &amp; parties
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="site-footer__head">Guides</p>
          <ul className="site-footer__links">
            {seoPageLinks.map((l) => (
              <li key={l.href}>
                <Link className="site-footer__link" to={l.href}>
                  {l.label}
                </Link>
              </li>
            ))}
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

        </div>
      </div>

      <p className="site-footer__note">
        © {new Date().getFullYear()} Dukrian ({SITE.nameCn}). All rights reserved.
      </p>
    </footer>
  )
}
