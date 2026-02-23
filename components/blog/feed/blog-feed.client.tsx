'use client'

import { useState, useMemo } from 'react'
import type { BlogPostViewModel } from '@/lib/blog-utils'
import { filterBlogPosts } from '@/lib/blog-utils'
import { BlogSearch } from './blog-search.client'
import { BlogPostRow } from './blog-post-row'
import { FileText } from 'lucide-react'

export interface BlogFeedProps {
  posts: BlogPostViewModel[]
  initialQuery?: string
  locale: string
  labels: {
    searchPlaceholder: string
    noPostsTitle: string
    noPostsMessage: string
    noPostsSearch: string
    resultCount: string
    clearFilters: string
  }
}

export function BlogFeed({
  posts,
  initialQuery = '',
  locale,
  labels,
}: BlogFeedProps) {
  const [query, setQuery] = useState(initialQuery)

  const filteredPosts = useMemo(() => {
    return filterBlogPosts(posts, query)
  }, [posts, query])

  const blogPrefix = locale === 'de' ? '/de/blog' : '/blog'

  return (
    <div className="space-y-6">
      {/* Search */}
      <div className="w-full sm:max-w-sm">
        <BlogSearch
          value={query}
          onChange={setQuery}
          placeholder={labels.searchPlaceholder}
        />
      </div>

      {/* Active filter indicator */}
      {query && (
        <div className="flex items-center gap-2 text-sm text-muted-foreground font-mono">
          <span>
            {filteredPosts.length} {labels.resultCount}
          </span>
          <button
            onClick={() => setQuery('')}
            className="text-primary hover:underline"
          >
            {labels.clearFilters}
          </button>
        </div>
      )}

      {/* Posts list */}
      {filteredPosts.length > 0 ? (
        <div>
          {filteredPosts.map((post) => (
            <BlogPostRow
              key={post.slug}
              href={`${blogPrefix}/${post.slug}`}
              title={post.title}
              description={post.description}
              author={post.author}
              dateLabel={post.dateLabel}
              dateISO={post.dateISO}
              readTime={post.readTimeLabel}
            />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <div className="w-12 h-12 rounded-full bg-muted/50 flex items-center justify-center mb-4">
            <FileText className="w-6 h-6 text-muted-foreground" />
          </div>
          <h3 className="text-lg font-medium text-foreground mb-1">
            {labels.noPostsTitle}
          </h3>
          <p className="text-sm text-muted-foreground max-w-sm">
            {query ? labels.noPostsSearch : labels.noPostsMessage}
          </p>
        </div>
      )}
    </div>
  )
}
