import { Link } from 'react-router-dom'
import { SITE } from '../../config'

export type BreadcrumbItem = {
  label: string
  href?: string
}

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.origin },
      ...items.map((item, i) => ({
        '@type': 'ListItem',
        position: i + 2,
        name: item.label,
        ...(item.href ? { item: `${SITE.origin}${item.href}` } : {}),
      })),
    ],
  }

  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ol className="breadcrumbs__list">
        <li>
          <Link to="/">Home</Link>
        </li>
        {items.map((item, i) => (
          <li key={i}>
            {item.href && i < items.length - 1 ? (
              <Link to={item.href}>{item.label}</Link>
            ) : (
              <span aria-current="page">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
