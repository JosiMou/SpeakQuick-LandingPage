import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'

export type { BlogPostViewModel, TOCItem } from './blog-utils'
export { filterBlogPosts, extractHeadingsFromContent } from './blog-utils'

import type { BlogPostViewModel } from './blog-utils'
import type { Language } from '@/lib/i18n/translations'

function getPostsDirectory(locale: Language): string {
  return locale === 'de'
    ? path.join(process.cwd(), 'content/blog/de')
    : path.join(process.cwd(), 'content/blog')
}

export interface BlogPost {
  slug: string
  title: string
  description: string
  date: string
  dateModified?: string
  author: string
  category: string
  tags: string[]
  featured: boolean
  readTime: string
  image?: string
  content: string
  rawContent: string
}

export interface BlogPostMeta {
  slug: string
  title: string
  description: string
  date: string
  dateModified?: string
  author: string
  category: string
  tags: string[]
  featured: boolean
  readTime: string
  image?: string
}

export async function getAllPosts(locale: Language = 'en'): Promise<BlogPostMeta[]> {
  const postsDirectory = getPostsDirectory(locale)

  if (!fs.existsSync(postsDirectory)) {
    fs.mkdirSync(postsDirectory, { recursive: true })
    return []
  }

  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith('.mdx'))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, '')
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data, content } = matter(fileContents)
      const stats = readingTime(content)

      return {
        slug,
        title: data.title,
        description: data.description,
        date: data.date,
        dateModified: data.updated || data.dateModified || undefined,
        author: data.author || 'SpeakQuick Team',
        category: data.category || 'General',
        tags: data.tags || [],
        featured: data.featured || false,
        readTime: stats.text,
        image: data.image || undefined,
      } as BlogPostMeta
    })

  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1))
}

export async function getPostBySlug(
  slug: string,
  locale: Language = 'en'
): Promise<BlogPost | null> {
  try {
    const postsDirectory = getPostsDirectory(locale)
    const fullPath = path.join(postsDirectory, `${slug}.mdx`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)
    const stats = readingTime(content)

    // Strip top-level MDX ESM imports/exports while preserving code fences
    const lines = content.split('\n')
    let inFence = false
    let seenContent = false
    const filteredLines: string[] = []

    for (const line of lines) {
      const trimmed = line.trim()
      if (trimmed.startsWith('```')) {
        inFence = !inFence
        filteredLines.push(line)
        continue
      }
      if (!inFence && !seenContent) {
        if (trimmed === '') {
          filteredLines.push(line)
          continue
        }
        if (/^import\s/.test(trimmed) || /^export\s/.test(trimmed)) {
          continue
        }
        seenContent = true
      }
      filteredLines.push(line)
    }

    const cleanedContent = filteredLines.join('\n').trim()

    return {
      slug,
      title: data.title,
      description: data.description,
      date: data.date,
      dateModified: data.updated || data.dateModified || undefined,
      author: data.author || 'SpeakQuick Team',
      category: data.category || 'General',
      tags: data.tags || [],
      featured: data.featured || false,
      readTime: stats.text,
      image: data.image || undefined,
      content: cleanedContent,
      rawContent: content,
    }
  } catch (error) {
    console.error(`Error loading post ${slug}:`, error)
    return null
  }
}

export async function getRelatedPosts(
  slug: string,
  limit: number = 3,
  locale: Language = 'en'
): Promise<BlogPostMeta[]> {
  const allPosts = await getAllPosts(locale)
  const currentPost = allPosts.find((post) => post.slug === slug)

  if (!currentPost) return []

  return allPosts
    .filter((post) => post.slug !== slug)
    .map((post) => {
      let score = 0
      if (post.category === currentPost.category) score += 2
      post.tags.forEach((tag) => {
        if (currentPost.tags.includes(tag)) score += 1
      })
      return { post, score }
    })
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(({ post }) => post)
}

// ============================================================================
// View Model Helpers
// ============================================================================

const SHORT_MONTH_NAMES = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
]

const MONTH_NAMES = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
]

export function toBlogPostViewModel(post: BlogPostMeta): BlogPostViewModel {
  const date = new Date(post.date)
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()

  return {
    slug: post.slug,
    title: post.title,
    description: post.description,
    category: post.category,
    tags: post.tags,
    dateISO: post.date,
    dateLabel: `${SHORT_MONTH_NAMES[month - 1]} ${day}, ${year}`,
    year,
    month,
    monthLabel: MONTH_NAMES[month - 1],
    readTimeLabel: post.readTime,
    featured: post.featured,
    author: post.author,
  }
}

export function toBlogPostViewModels(posts: BlogPostMeta[]): BlogPostViewModel[] {
  return posts.map(toBlogPostViewModel)
}
