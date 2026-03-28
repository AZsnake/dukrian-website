import { ChevronDown, MessageCircle } from 'lucide-react'
import { navLinks, headerQuickLinks } from '../../content/siteContent'
import { SITE } from '../../config'
import { BrandMark } from '../BrandMark'
import { useCartActions, useCartState } from '../../CartContext'

export function Header() {
  const { itemCount } = useCartState()
  const { openCart } = useCartActions()

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <a className="site-logo site-logo--text" href="#top" aria-label={`${SITE.name} ${SITE.nameCn}`}>
          <BrandMark variant="header" />
        </a>

        <nav className="site-nav" aria-label="Primary">
          <ul>
            <li>
              <a href="#shop">Shop</a>
            </li>
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href}>
                  {l.label}
                </a>
              </li>
            ))}
            <li className="site-nav__shop">
              <span className="site-nav__shop-label">
                Quick links <ChevronDown size={13} aria-hidden style={{ verticalAlign: 'middle' }} />
              </span>
              <ul className="site-nav__sub">
                {headerQuickLinks.map((l) => (
                  <li key={l.href + l.label}>
                    <a href={l.href} {...(l.external ? { target: '_blank', rel: 'noreferrer' } : {})}>
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </nav>

        <div className="header-actions">
          <a
            className="icon-btn cart-icon-btn header-wa"
            href={`https://wa.me/${SITE.whatsappE164}`}
            target="_blank"
            rel="noreferrer"
            aria-label={`WhatsApp ${SITE.whatsappDisplay}`}
          >
            <MessageCircle size={22} aria-hidden />
          </a>
          <button
            className="icon-btn cart-icon-btn"
            onClick={openCart}
            aria-label={`Open cart${itemCount ? ` (${itemCount} items)` : ''}`}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
              width="22"
              height="22"
              aria-hidden="true"
            >
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 01-8 0" />
            </svg>
            {itemCount > 0 && <span className="cart-badge">{itemCount}</span>}
          </button>
        </div>
      </div>
    </header>
  )
}
