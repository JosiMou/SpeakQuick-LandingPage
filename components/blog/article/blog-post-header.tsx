import Link from 'next/link'
import type { Language } from '@/lib/i18n/translations'

export interface BlogPostHeaderProps {
  title: string
  author: string
  datePublished: string
  dateISO: string
  category?: string
  locale?: Language
}

export function BlogPostHeader({
  title,
  author,
  datePublished,
  dateISO,
  category,
  locale = 'en',
}: BlogPostHeaderProps) {
  const blogHref = locale === 'de' ? '/de/blog' : '/blog'

  return (
    <header className="mb-10">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-1 text-sm text-muted-foreground mb-6">
        <Link
          href={blogHref}
          className="hover:text-primary transition-colors font-mono"
        >
          Blog
        </Link>
      </nav>

      {/* Title */}
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-6 leading-tight">
        {title}
      </h1>

      {/* Meta line */}
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <span className="font-medium text-foreground">{author}</span>
        <span className="text-border">·</span>
        <time dateTime={dateISO}>{datePublished}</time>
        {category && (
          <>
            <span className="text-border">·</span>
            <span className="text-muted-foreground">{category}</span>
          </>
        )}
      </div>
    </header>
  )
}
