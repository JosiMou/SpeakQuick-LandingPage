import { getAllPosts, toBlogPostViewModels } from '@/lib/blog'
import { BlogFeed } from '@/components/blog/feed'
import { translations } from '@/lib/i18n/translations'
import type { Language } from '@/lib/i18n/translations'
import type { Metadata } from 'next'
import Link from 'next/link'
import { Mic, ArrowUpRight } from 'lucide-react'
import { SPEAKQUICK_DOWNLOAD_URL } from '@/lib/download-url'

export function buildBlogIndexMetadata(locale: Language): Metadata {
  const t = translations[locale]
  return {
    title: t.blog.metaTitle,
    description: t.blog.metaDescription,
  }
}

export async function BlogIndexPage({
  locale,
}: {
  locale: Language
}) {
  const t = translations[locale]

  const posts = await getAllPosts(locale)
  const viewModels = toBlogPostViewModels(posts)

  const blogPrefix = locale === 'de' ? '/de/blog' : '/blog'

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <main className="flex-1">
        <div className="max-w-3xl mx-auto px-6">
          {/* Header */}
          <header className="py-12 md:py-16 border-b border-border/40">
            <div className="flex items-start justify-between gap-4">
              <div>
                <Link
                  href={locale === 'de' ? '/de/blog' : '/blog'}
                  className="inline-flex items-center gap-2 mb-4 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <div className="w-6 h-6 border border-primary/30 flex items-center justify-center">
                    <Mic className="w-3 h-3 text-primary" />
                  </div>
                  <span className="font-mono text-sm">SpeakQuick</span>
                </Link>
                <h1 className="text-2xl md:text-3xl font-semibold tracking-tight text-foreground mb-3 font-mono">
                  {t.blog.indexTitle}
                </h1>
                <p className="text-muted-foreground max-w-xl">
                  {t.blog.indexSubtitle}
                </p>
              </div>
            </div>
          </header>

          {/* Feed */}
          <section className="py-8 md:py-12">
            <BlogFeed
              posts={viewModels}
              locale={locale}
              labels={{
                searchPlaceholder: t.blog.searchPlaceholder,
                noPostsTitle: t.blog.noPostsTitle,
                noPostsMessage: t.blog.noPostsMessage,
                noPostsSearch: t.blog.noPostsSearch,
                clearFilters: t.blog.clearFilters,
                resultCount: t.blog.resultCount,
              }}
            />
          </section>

          {/* CTA */}
          <section className="py-12 md:py-16 border-t border-border/40">
            <div className="text-center">
              <h2 className="text-lg font-medium text-foreground mb-2 font-mono">
                {t.blog.ctaTitle}
              </h2>
              <p className="text-sm text-muted-foreground mb-4">
                {t.blog.ctaDescription}
              </p>
              <a
                href={SPEAKQUICK_DOWNLOAD_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-mono font-medium rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors group"
                data-track="blog_index_download_clicked"
              >
                <Mic className="w-4 h-4 mr-2" />
                {t.blog.ctaButton}
                <ArrowUpRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </section>
        </div>
      </main>

      {/* Simple footer for blog pages */}
      <footer className="border-t border-border py-8">
        <div className="max-w-3xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 border border-primary/30 flex items-center justify-center">
              <Mic className="w-3 h-3 text-primary" />
            </div>
            <span className="font-mono text-sm text-foreground">SpeakQuick</span>
          </div>
          <div className="flex items-center gap-4 text-sm font-mono text-muted-foreground">
            <Link href={blogPrefix} className="hover:text-primary transition-colors">
              Blog
            </Link>
            <span className="text-border">/</span>
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
          </div>
          <p className="text-xs text-muted-foreground font-mono">
            {translations[locale].footer.copyright.replace('{year}', String(new Date().getFullYear()))}
          </p>
        </div>
      </footer>
    </div>
  )
}
