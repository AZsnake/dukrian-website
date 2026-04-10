import { Helmet } from 'react-helmet-async'
import { SITE } from '../../config'

export type SEOHeadProps = {
  title: string
  description: string
  path: string
  ogImage?: string
  ogType?: string
  article?: {
    publishedTime?: string
    modifiedTime?: string
    author?: string
  }
  jsonLd?: Record<string, unknown> | Record<string, unknown>[]
}

export function SEOHead({
  title,
  description,
  path,
  ogImage = '/images/dukrian/og-default.webp',
  ogType = 'website',
  article,
  jsonLd,
}: SEOHeadProps) {
  const canonicalUrl = `${SITE.origin}${path}`
  const fullTitle = path === '/' ? title : `${title} | ${SITE.name}`
  const absoluteOgImage = ogImage.startsWith('http') ? ogImage : `${SITE.origin}${ogImage}`

  const baseJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: `${SITE.name} ${SITE.nameCn}`,
    description: SITE.description,
    url: SITE.origin,
    telephone: `+${SITE.whatsappE164}`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: '48 Crowhurst Drive',
      addressLocality: 'Singapore',
      postalCode: '557927',
      addressCountry: 'SG',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 1.3621,
      longitude: 103.8661,
    },
    openingHours: 'Mo-Su 14:00-23:00',
    priceRange: '$$',
    image: absoluteOgImage,
    sameAs: [SITE.instagramUrl, SITE.tiktokUrl, SITE.facebookUrl],
  }

  const jsonLdScripts = Array.isArray(jsonLd)
    ? [baseJsonLd, ...jsonLd]
    : jsonLd
      ? [baseJsonLd, jsonLd]
      : [baseJsonLd]

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={absoluteOgImage} />
      <meta property="og:site_name" content={`${SITE.name} ${SITE.nameCn}`} />
      <meta property="og:locale" content="en_SG" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={absoluteOgImage} />

      {/* Article meta */}
      {article?.publishedTime && (
        <meta property="article:published_time" content={article.publishedTime} />
      )}
      {article?.modifiedTime && (
        <meta property="article:modified_time" content={article.modifiedTime} />
      )}

      {/* JSON-LD */}
      {jsonLdScripts.map((ld, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(ld)}
        </script>
      ))}
    </Helmet>
  )
}
