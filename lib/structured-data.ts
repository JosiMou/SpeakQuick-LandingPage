/**
 * Structured data (JSON-LD) builders for SEO.
 * Schema.org compliant markup for blog posts.
 */

import { canonicalUrl, getSiteUrl } from './canonical'
import type { Language } from '@/lib/i18n/translations'

export interface BlogPostForSchema {
  slug: string
  title: string
  description: string
  date: string
  dateModified?: string
  author: string
  category: string
  tags: string[]
  image?: string
}

export interface BreadcrumbItem {
  name: string
  url: string
}

function languageTag(locale: Language): string {
  return locale === 'de' ? 'de-DE' : 'en-US'
}

function withLocale(path: string, locale: Language): string {
  return locale === 'de' ? `/de${path}` : path
}

/**
 * Build BlogPosting JSON-LD schema for a blog post.
 * @see https://schema.org/BlogPosting
 */
export function buildBlogPostingJsonLd(
  post: BlogPostForSchema,
  locale: Language = 'en'
): Record<string, unknown> {
  const siteUrl = getSiteUrl()
  const postUrl = canonicalUrl(withLocale(`/blog/${post.slug}`, locale))

  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    inLanguage: languageTag(locale),
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.dateModified || post.date,
    url: postUrl,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': postUrl,
    },
    author: {
      '@type': 'Person',
      name: post.author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'SpeakQuick',
      url: siteUrl,
    },
    keywords: [...post.tags, post.category].filter(Boolean).join(', '),
    articleSection: post.category,
  }

  if (post.image) {
    schema.image = {
      '@type': 'ImageObject',
      url: post.image.startsWith('http') ? post.image : `${siteUrl}${post.image}`,
    }
  }

  return schema
}

/**
 * Build BreadcrumbList JSON-LD schema for navigation.
 * @see https://schema.org/BreadcrumbList
 */
export function buildBreadcrumbListJsonLd(
  items: BreadcrumbItem[]
): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

/**
 * Build breadcrumb items for a blog post.
 */
export function buildBlogBreadcrumbs(
  post: { title: string; slug: string },
  locale: Language = 'en'
): BreadcrumbItem[] {
  const homeLabel = locale === 'de' ? 'Startseite' : 'Home'
  return [
    { name: homeLabel, url: canonicalUrl(withLocale('/', locale)) },
    { name: 'Blog', url: canonicalUrl(withLocale('/blog', locale)) },
    {
      name: post.title,
      url: canonicalUrl(withLocale(`/blog/${post.slug}`, locale)),
    },
  ]
}

/**
 * Build SoftwareApplication JSON-LD for the landing page.
 * @see https://schema.org/SoftwareApplication
 */
export function buildSoftwareApplicationJsonLd(): Record<string, unknown> {
  const siteUrl = getSiteUrl()
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'SpeakQuick',
    applicationCategory: 'UtilitiesApplication',
    operatingSystem: 'macOS',
    url: siteUrl,
    description:
      'AI-powered transcription for podcasts, meetings, and interviews. Local processing, speaker detection, and export to any format.',
    offers: {
      '@type': 'Offer',
      price: '49',
      priceCurrency: 'USD',
    },
    publisher: {
      '@type': 'Organization',
      name: 'SpeakQuick',
      url: siteUrl,
    },
  }
}
