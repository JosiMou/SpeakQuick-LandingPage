import type { MetadataRoute } from 'next'

export const dynamic = 'force-static'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.speakquick.app'

function getBaseUrl(): string {
  return SITE_URL.endsWith('/') ? SITE_URL.slice(0, -1) : SITE_URL
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = getBaseUrl()

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      changeFrequency: 'monthly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/blog`,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/de/blog`,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/privacy`,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/legal-notice`,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/de/impressum`,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]

  // Blog posts from content directory
  const blogItems: MetadataRoute.Sitemap = []
  try {
    const blog = await import('@/lib/blog')
    const [postsEn, postsDe] = await Promise.all([
      blog.getAllPosts('en'),
      blog.getAllPosts('de'),
    ])

    for (const post of postsEn) {
      blogItems.push({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: post.date ? new Date(post.date) : undefined,
        changeFrequency: 'weekly',
        priority: 0.6,
      })
    }
    for (const post of postsDe) {
      blogItems.push({
        url: `${baseUrl}/de/blog/${post.slug}`,
        lastModified: post.date ? new Date(post.date) : undefined,
        changeFrequency: 'weekly',
        priority: 0.6,
      })
    }
  } catch {
    // Blog module or content not available
  }

  return [...staticPages, ...blogItems]
}
