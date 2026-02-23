import Link from 'next/link'
import { getPostBySlug, getRelatedPosts } from '@/lib/blog'
import { extractHeadingsFromContent } from '@/lib/blog-utils'
import { MDXContent } from '@/components/blog/mdx-content'
import {
  BlogPostHeader,
  BlogPostFooter,
  TableOfContents,
} from '@/components/blog/article'
import { translations } from '@/lib/i18n/translations'
import type { Language } from '@/lib/i18n/translations'
import { ArrowUpRight } from 'lucide-react'
import { SPEAKQUICK_DOWNLOAD_URL } from '@/lib/download-url'
import {
  buildBlogPostingJsonLd,
  buildBreadcrumbListJsonLd,
  buildBlogBreadcrumbs,
} from '@/lib/structured-data'

function formatDate(dateString: string, locale: Language) {
  const date = new Date(dateString)
  return date.toLocaleDateString(locale === 'de' ? 'de-DE' : 'en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })
}

export async function BlogPostPage({
  params,
  locale,
}: {
  params: Promise<{ slug: string }>
  locale: Language
}) {
  const { slug } = await params
  const post = await getPostBySlug(slug, locale)
  const t = translations[locale]

  if (!post) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            404
          </h1>
          <p className="text-muted-foreground mb-6">Post not found.</p>
          <Link
            href={locale === 'de' ? '/de/blog' : '/blog'}
            className="text-primary hover:underline"
          >
            Back to Blog
          </Link>
        </div>
      </div>
    )
  }

  const relatedPosts = await getRelatedPosts(slug, 3, locale)
  const tocItems = extractHeadingsFromContent(post.content)
  const blogPrefix = locale === 'de' ? '/de/blog' : '/blog'

  const postingJsonLd = buildBlogPostingJsonLd(
    {
      slug: post.slug,
      title: post.title,
      description: post.description,
      date: post.date,
      author: post.author,
      category: post.category,
      tags: post.tags || [],
    },
    locale
  )
  const breadcrumbJsonLd = buildBreadcrumbListJsonLd(
    buildBlogBreadcrumbs({ title: post.title, slug: post.slug }, locale)
  )

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(postingJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <main className="flex-1">
        <div className="max-w-6xl mx-auto px-6 py-12 md:py-16">
          <div className="lg:grid lg:grid-cols-[1fr_220px] lg:gap-12">
            {/* Main content */}
            <article className="max-w-3xl">
              <BlogPostHeader
                title={post.title}
                author={post.author}
                datePublished={formatDate(post.date, locale)}
                dateISO={post.date}
                category={post.category}
                locale={locale}
              />

              {/* Content */}
              <div className="prose prose-invert max-w-none prose-headings:scroll-mt-24 prose-headings:font-semibold prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-code:text-primary prose-pre:bg-muted/50 prose-pre:border prose-pre:border-border prose-blockquote:border-primary/40 prose-strong:text-foreground prose-td:border-border prose-th:border-border prose-tr:border-border">
                <MDXContent content={post.content} />
              </div>

              {/* Footer */}
              <BlogPostFooter
                author={post.author}
                datePublished={formatDate(post.date, locale)}
                dateISO={post.date}
              />

              {/* Related Posts */}
              {relatedPosts.length > 0 && (
                <section className="mt-16 pt-8 border-t border-border/40">
                  <h2 className="text-lg font-semibold text-foreground mb-6">
                    {t.blog.relatedPosts}
                  </h2>
                  <div className="space-y-4">
                    {relatedPosts.map((related) => (
                      <Link
                        key={related.slug}
                        href={`${blogPrefix}/${related.slug}`}
                        className="block group"
                      >
                        <h3 className="text-foreground group-hover:text-primary transition-colors font-medium">
                          {related.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {formatDate(related.date, locale)}
                        </p>
                      </Link>
                    ))}
                  </div>
                </section>
              )}

              {/* CTA */}
              <section className="mt-16 pt-8 border-t border-border/40">
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
                    data-track="blog_post_download_clicked"
                  >
                    <svg className="w-4 h-4 mr-2" viewBox="0 0 814 1000" fill="currentColor">
                      <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76.5 0-103.7 40.8-165.9 40.8s-105.6-57.8-155.5-127.4c-58.3-81.1-105.9-207.7-105.9-328.6 0-193.2 125.7-295.7 249.4-295.7 65.7 0 120.4 43.1 161.6 43.1 39.2 0 100.4-45.7 174.3-45.7 28.2 0 129.4 2.5 196.2 95.3zM554.1 159.4c31.1-36.9 53.1-88.1 53.1-139.3 0-7.1-.6-14.3-1.9-20.1-50.6 1.9-110.8 33.7-147.1 75.8-28.8 32.4-54.4 83.7-54.4 135.5 0 7.8 1.3 15.6 1.9 18.1 3.2.6 8.4 1.3 13.6 1.3 45.4 0 102.5-30.4 134.8-71.3z" />
                    </svg>
                    {t.blog.ctaButton}
                    <ArrowUpRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </section>
            </article>

            {/* Sidebar with TOC */}
            {tocItems.length > 0 && (
              <aside className="hidden lg:block">
                <div className="sticky top-32">
                  <TableOfContents items={tocItems} />
                </div>
              </aside>
            )}
          </div>
        </div>
      </main>

      {/* Simple footer */}
      <footer className="border-t border-border py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <img src="/icon.svg" alt="SpeakQuick" className="w-6 h-6 rounded-[5px]" />
            <span className="text-sm text-foreground">SpeakQuick</span>
          </div>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <Link
              href={blogPrefix}
              className="hover:text-primary transition-colors"
            >
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
