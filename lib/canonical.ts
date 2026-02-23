/**
 * Canonical URL utilities for consistent URL generation
 * across metadata, JSON-LD schemas, and sitemap.
 */

const DEFAULT_SITE_URL = 'https://www.speakquick.app'

/**
 * Get the site URL from environment or fallback to default.
 */
export function getSiteUrl(): string {
  const url = process.env.NEXT_PUBLIC_SITE_URL || DEFAULT_SITE_URL
  return url.endsWith('/') ? url.slice(0, -1) : url
}

/**
 * Build a canonical URL from a pathname.
 * @param pathname - Path starting with / (e.g., '/blog/my-post')
 * @returns Full canonical URL
 */
export function canonicalUrl(pathname: string): string {
  const siteUrl = getSiteUrl()
  const normalizedPath = pathname.startsWith('/') ? pathname : `/${pathname}`
  const cleanPath =
    normalizedPath.length > 1 && normalizedPath.endsWith('/')
      ? normalizedPath.slice(0, -1)
      : normalizedPath
  return `${siteUrl}${cleanPath}`
}
