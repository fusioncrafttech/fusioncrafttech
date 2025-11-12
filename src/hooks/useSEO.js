import { useEffect } from 'react'

const SITE_NAME = 'FusionCraft Tech'
const DEFAULT_TITLE = `${SITE_NAME} | Digital Solutions & Innovation`
const DEFAULT_DESCRIPTION =
  'FusionCraft Tech delivers custom web development, mobile applications, UI/UX design, and cloud solutions that accelerate business growth.'
const DEFAULT_KEYWORDS = [
  'FusionCraft Tech',
  'software development company',
  'web development services',
  'mobile app development',
  'UI UX design',
  'digital transformation partner'
]
const DEFAULT_OG_IMAGE = `${import.meta.env.VITE_SITE_URL ?? 'https://www.fusioncrafttech.com'}/og-image.jpg`

const slugify = (value) =>
  value
    ?.toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    || 'fusioncraft-tech'

const ensureMetaTag = (attribute, value) => {
  if (typeof document === 'undefined') return null

  let tag = document.head.querySelector(`meta[${attribute}="${value}"]`)
  if (!tag) {
    tag = document.createElement('meta')
    tag.setAttribute(attribute, value)
    document.head.appendChild(tag)
  }

  return tag
}

const setMetaContent = (attribute, value, content) => {
  if (!content) return
  const tag = ensureMetaTag(attribute, value)
  if (tag) {
    tag.setAttribute('content', content)
  }
}

const setCanonicalLink = (canonicalUrl) => {
  if (typeof document === 'undefined' || !canonicalUrl) return

  let link = document.head.querySelector('link[rel="canonical"]')
  if (!link) {
    link = document.createElement('link')
    link.setAttribute('rel', 'canonical')
    document.head.appendChild(link)
  }

  link.setAttribute('href', canonicalUrl)
}

const setStructuredData = (structuredData, identifier) => {
  if (typeof document === 'undefined') return () => {}
  if (!structuredData) return () => {}

  const scriptId = `seo-jsonld-${identifier}`
  let scriptTag = document.getElementById(scriptId)

  if (!scriptTag) {
    scriptTag = document.createElement('script')
    scriptTag.setAttribute('type', 'application/ld+json')
    scriptTag.id = scriptId
    document.head.appendChild(scriptTag)
  }

  scriptTag.textContent = JSON.stringify(structuredData)

  return () => {
    const existing = document.getElementById(scriptId)
    if (existing) {
      existing.remove()
    }
  }
}

export function useSEO({
  title,
  description,
  keywords,
  canonicalPath,
  canonicalUrl,
  ogType = 'website',
  ogImage,
  structuredData
}) {
  useEffect(() => {
    if (typeof document === 'undefined') return undefined

    const origin =
      canonicalUrl ??
      (typeof window !== 'undefined'
        ? window.location.origin + (canonicalPath ?? window.location.pathname)
        : (import.meta.env.VITE_SITE_URL ?? 'https://www.fusioncrafttech.com') + (canonicalPath ?? '/'))

    const pageTitle = title ? `${title} | ${SITE_NAME}` : DEFAULT_TITLE
    const pageDescription = description ?? DEFAULT_DESCRIPTION
    const pageKeywords = keywords?.length ? keywords.join(', ') : DEFAULT_KEYWORDS.join(', ')
    const pageOgImage = ogImage ?? DEFAULT_OG_IMAGE

    document.title = pageTitle

    setMetaContent('name', 'description', pageDescription)
    setMetaContent('name', 'keywords', pageKeywords)
    setMetaContent('name', 'robots', 'index,follow')

    setMetaContent('property', 'og:title', pageTitle)
    setMetaContent('property', 'og:description', pageDescription)
    setMetaContent('property', 'og:type', ogType)
    setMetaContent('property', 'og:site_name', SITE_NAME)
    setMetaContent('property', 'og:url', origin)
    setMetaContent('property', 'og:image', pageOgImage)

    setMetaContent('name', 'twitter:card', 'summary_large_image')
    setMetaContent('name', 'twitter:title', pageTitle)
    setMetaContent('name', 'twitter:description', pageDescription)
    setMetaContent('name', 'twitter:image', pageOgImage)

    setCanonicalLink(origin)

    const identifier = slugify(title || SITE_NAME)
    const cleanupStructuredData = setStructuredData(structuredData, identifier)

    return () => {
      cleanupStructuredData()
    }
  }, [
    title,
    description,
    keywords,
    canonicalPath,
    canonicalUrl,
    ogType,
    ogImage,
    structuredData
  ])
}


