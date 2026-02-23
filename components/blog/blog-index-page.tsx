import { getAllPosts, toBlogPostViewModels } from '@/lib/blog'
import { BlogFeed } from '@/components/blog/feed'
import { translations } from '@/lib/i18n/translations'
import type { Language } from '@/lib/i18n/translations'
import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
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
                  href={locale === 'de' ? '/de' : '/'}
                  className="inline-flex items-center gap-2 mb-4 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <img src="/icon.svg" alt="SpeakQuick" className="w-6 h-6 rounded-[5px]" />
                  <span className="text-sm">SpeakQuick</span>
                </Link>
                <h1 className="text-2xl md:text-3xl font-semibold tracking-tight text-foreground mb-3">
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
              <h2 className="text-lg font-medium text-foreground mb-2">
                {t.blog.ctaTitle}
              </h2>
              <p className="text-sm text-muted-foreground mb-4">
                {t.blog.ctaDescription}
              </p>
              <a
                href={SPEAKQUICK_DOWNLOAD_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors group"
                data-track="blog_index_download_clicked"
              >
                <svg className="w-4 h-4 mr-2" viewBox="0 0 814 1000" fill="currentColor">
                  <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76.5 0-103.7 40.8-165.9 40.8s-105.6-57.8-155.5-127.4c-58.3-81.1-105.9-207.7-105.9-328.6 0-193.2 125.7-295.7 249.4-295.7 65.7 0 120.4 43.1 161.6 43.1 39.2 0 100.4-45.7 174.3-45.7 28.2 0 129.4 2.5 196.2 95.3zM554.1 159.4c31.1-36.9 53.1-88.1 53.1-139.3 0-7.1-.6-14.3-1.9-20.1-50.6 1.9-110.8 33.7-147.1 75.8-28.8 32.4-54.4 83.7-54.4 135.5 0 7.8 1.3 15.6 1.9 18.1 3.2.6 8.4 1.3 13.6 1.3 45.4 0 102.5-30.4 134.8-71.3z" />
                </svg>
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
            <img src="/icon.svg" alt="SpeakQuick" className="w-6 h-6 rounded-[5px]" />
            <span className="text-sm text-foreground">SpeakQuick</span>
          </div>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <Link href={blogPrefix} className="hover:text-primary transition-colors">
              Blog
            </Link>
            <span className="text-border">/</span>
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
          </div>
          <p className="text-xs text-muted-foreground">
            {translations[locale].footer.copyright.replace('{year}', String(new Date().getFullYear()))}
          </p>
        </div>
      </footer>
    </div>
  )
}
