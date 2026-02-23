import type { Metadata } from 'next'
import { BlogIndexPage, buildBlogIndexMetadata } from '@/components/blog/blog-index-page'

export function generateMetadata(): Metadata {
  return buildBlogIndexMetadata('de')
}

export default function DeBlogPage() {
  return BlogIndexPage({ locale: 'de' })
}
