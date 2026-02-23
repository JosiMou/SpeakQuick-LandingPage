import type { Metadata } from 'next'
import { BlogIndexPage, buildBlogIndexMetadata } from '@/components/blog/blog-index-page'

export function generateMetadata(): Metadata {
  return buildBlogIndexMetadata('en')
}

export default function BlogPage() {
  return BlogIndexPage({ locale: 'en' })
}
