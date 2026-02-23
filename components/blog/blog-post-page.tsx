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
import { Mic, ArrowUpRight } from 'lucide-react'
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
          <h1 className="text-4xl font-mono font-bold text-foreground mb-4">
            404
          </h1>
          <p className="text-muted-foreground mb-6">Post not found.</p>
          <Link
            href={locale === 'de' ? '/de/blog' : '/blog'}
            className="text-primary hover:underline font-mono"
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
              <div className="prose prose-invert max-w-none prose-headings:scroll-mt-24 prose-headings:font-mono prose-headings:font-semibold prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-code:text-primary prose-pre:bg-muted/50 prose-pre:border prose-pre:border-border prose-blockquote:border-primary/40 prose-strong:text-foreground prose-td:border-border prose-th:border-border prose-tr:border-border">
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
                  <h2 className="text-lg font-semibold text-foreground mb-6 font-mono">
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
                    data-track="blog_post_download_clicked"
                  >
                    <Mic className="w-4 h-4 mr-2" />
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
            <div className="w-6 h-6 border border-primary/30 flex items-center justify-center">
              <Mic className="w-3 h-3 text-primary" />
            </div>
            <span className="font-mono text-sm text-foreground">SpeakQuick</span>
          </div>
          <div className="flex items-center gap-4 text-sm font-mono text-muted-foreground">
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
          <p className="text-xs text-muted-foreground font-mono">
            {translations[locale].footer.copyright.replace('{year}', String(new Date().getFullYear()))}
          </p>
        </div>
      </footer>
    </div>
  )
}
