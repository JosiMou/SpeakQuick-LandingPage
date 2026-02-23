import { getAllPosts, getPostBySlug } from '@/lib/blog'
import type { Metadata } from 'next'
import { BlogPostPage } from '@/components/blog/blog-post-page'
import { canonicalUrl } from '@/lib/canonical'

export async function generateStaticParams() {
  const posts = await getAllPosts('en')
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = await getPostBySlug(slug, 'en')

  if (!post) {
    return { title: 'Post Not Found' }
  }

  const url = canonicalUrl(`/blog/${slug}`)
  return {
    title: post.title,
    description: post.description,
    keywords: [...post.tags, post.category, 'SpeakQuick', 'transcription'],
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.description,
      url,
      publishedTime: post.date,
      modifiedTime: post.dateModified || post.date,
      authors: [post.author],
      tags: post.tags,
      ...(post.image && { images: [{ url: post.image }] }),
    },
  }
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  return BlogPostPage({ params, locale: 'en' })
}
