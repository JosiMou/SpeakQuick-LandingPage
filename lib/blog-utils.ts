// ============================================================================
// Client-safe blog utilities (no Node.js modules)
// These can be imported in both server and client components
// ============================================================================

/**
 * Slugify a heading for use as an ID.
 * Used by both TOC extraction and MDX heading components to ensure IDs match.
 */
export function slugifyHeading(text: string): string {
  return text
    .toLowerCase()
    .replace(/&[a-z0-9#]+;/g, ' ')
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/[\s-]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

export type BlogPostViewModel = {
  slug: string
  title: string
  description: string
  category: string
  tags: string[]
  dateISO: string
  dateLabel: string
  year: number
  month: number
  monthLabel: string
  readTimeLabel: string
  featured: boolean
  author: string
}

// ============================================================================
// Pure functions for filtering (client-safe)
// ============================================================================

export function filterBlogPosts(
  posts: BlogPostViewModel[],
  query: string,
): BlogPostViewModel[] {
  if (!query || !query.trim()) return posts

  const searchLower = query.toLowerCase().trim()
  return posts.filter((post) => {
    const titleMatch = post.title.toLowerCase().includes(searchLower)
    const descMatch = post.description.toLowerCase().includes(searchLower)
    const categoryMatch = post.category.toLowerCase().includes(searchLower)
    const tagMatch = post.tags.some((tag) =>
      tag.toLowerCase().includes(searchLower)
    )
    return titleMatch || descMatch || categoryMatch || tagMatch
  })
}

// ============================================================================
// TOC heading extraction (server-safe, works with raw MDX content)
// ============================================================================

export interface TOCItem {
  id: string
  text: string
  level: number
}

/**
 * Extract h2 headings from raw MDX/markdown content for table of contents.
 */
export function extractHeadingsFromContent(content: string): TOCItem[] {
  const headings: TOCItem[] = []
  const headingRegex = /^##\s+(.+)$/gm
  let match

  while ((match = headingRegex.exec(content)) !== null) {
    const text = match[1]
      .replace(/\*\*(.+?)\*\*/g, '$1')
      .replace(/\*(.+?)\*/g, '$1')
      .replace(/`(.+?)`/g, '$1')
      .replace(/\[(.+?)\]\(.+?\)/g, '$1')
      .trim()

    if (text) {
      headings.push({
        id: slugifyHeading(text),
        text,
        level: 2,
      })
    }
  }

  return headings
}
