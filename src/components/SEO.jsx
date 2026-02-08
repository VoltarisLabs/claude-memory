import { Helmet } from 'react-helmet-async'

const SEO = ({
  title,
  description,
  canonical,
  ogImage = 'https://titlevoice.ai/og-cover.png',
  jsonLd,
}) => {
  const siteTitle = 'Title Voice'
  const fullTitle = title ? `${title} | ${siteTitle}` : `${siteTitle} – AI Voice Agent for Title Companies`
  const fullDescription = description || 'AI-powered voice receptionist for title companies. Title Voice automates calls, retrieves deal info, and keeps your clients updated.'
  const fullCanonical = canonical ? `https://titlevoice.ai${canonical}` : 'https://titlevoice.ai'

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={fullDescription} />
      <link rel="canonical" href={fullCanonical} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={fullDescription} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={siteTitle} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={fullDescription} />
      <meta name="twitter:image" content={ogImage} />

      {/* Structured Data */}
      {jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      )}
    </Helmet>
  )
}

export default SEO
