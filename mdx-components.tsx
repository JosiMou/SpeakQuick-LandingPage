import type { MDXComponents } from 'mdx/types'
import React from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { slugifyHeading } from '@/lib/blog-utils'

function collectText(children: React.ReactNode): string {
  if (typeof children === 'string') return children
  if (Array.isArray(children)) return children.map(collectText).join('')
  if (React.isValidElement(children)) return collectText(children.props.children)
  return ''
}

function headingRenderer<T extends HTMLHeadingElement>(
  levelClass: string,
  tag: 'h2' | 'h3' | 'h4' | 'h5' | 'h6',
) {
  return ({ className, id, children, ...props }: React.HTMLAttributes<T>) => {
    const text = collectText(children)
    const computedId = id || slugifyHeading(text)
    const Tag = tag as keyof React.JSX.IntrinsicElements

    return (
      <Tag
        id={computedId}
        className={cn('group relative', levelClass, className)}
        {...(props as Record<string, unknown>)}
      >
        <a
          href={`#${computedId}`}
          className="absolute -left-6 top-0 h-full items-center hidden group-hover:flex text-muted-foreground hover:text-primary"
          aria-label={`Link to ${text}`}
        >
          <span className="text-sm">#</span>
        </a>
        {children}
      </Tag>
    )
  }
}

/**
 * Callout component for tips, warnings, and info blocks in MDX.
 * Usage: <Callout type="info">Content here</Callout>
 */
function Callout({
  type = 'info',
  title,
  children,
}: {
  type?: 'info' | 'warning' | 'tip'
  title?: string
  children: React.ReactNode
}) {
  const styles = {
    info: {
      border: 'border-primary/40',
      bg: 'bg-primary/5',
      icon: 'ℹ',
      defaultTitle: 'Info',
    },
    warning: {
      border: 'border-yellow-500/40',
      bg: 'bg-yellow-500/5',
      icon: '⚠',
      defaultTitle: 'Warning',
    },
    tip: {
      border: 'border-green-500/40',
      bg: 'bg-green-500/5',
      icon: '💡',
      defaultTitle: 'Tip',
    },
  }
  const s = styles[type]
  return (
    <div className={cn('my-6 rounded-lg border p-4', s.border, s.bg)}>
      <p className="mb-2 text-sm font-semibold">
        <span className="mr-2">{s.icon}</span>
        {title || s.defaultTitle}
      </p>
      <div className="text-sm text-muted-foreground [&>p]:mt-2 [&>p:first-child]:mt-0">
        {children}
      </div>
    </div>
  )
}

/**
 * Panel component for highlighted content sections in MDX.
 * Usage: <Panel title="Section Title">Content here</Panel>
 */
function Panel({
  title,
  children,
}: {
  title?: string
  children: React.ReactNode
}) {
  return (
    <div className="my-6 rounded-lg border border-border bg-card/50 p-6">
      {title && (
        <h4 className="mb-3 text-base font-semibold text-foreground">
          {title}
        </h4>
      )}
      <div className="text-muted-foreground [&>p]:mt-2 [&>p:first-child]:mt-0">
        {children}
      </div>
    </div>
  )
}

export const mdxComponents = {
  h1: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1
      className={cn(
        'mt-2 scroll-m-20 text-4xl font-bold tracking-tight',
        className,
      )}
      {...props}
    />
  ),
  h2: headingRenderer<HTMLHeadingElement>(
    'mt-10 scroll-m-20 pb-1 text-3xl font-bold tracking-tight first:mt-0',
    'h2',
  ),
  h3: headingRenderer<HTMLHeadingElement>(
    'mt-8 scroll-m-20 text-2xl font-semibold tracking-tight',
    'h3',
  ),
  h4: headingRenderer<HTMLHeadingElement>(
    'mt-8 scroll-m-20 text-xl font-semibold tracking-tight',
    'h4',
  ),
  h5: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h5
      className={cn(
        'mt-8 scroll-m-20 text-lg font-semibold tracking-tight',
        className,
      )}
      {...props}
    />
  ),
  h6: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h6
      className={cn(
        'mt-8 scroll-m-20 text-base font-semibold tracking-tight',
        className,
      )}
      {...props}
    />
  ),
  a: ({
    className,
    href,
    ...rest
  }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
    const classes = cn(
      'font-medium text-primary underline underline-offset-4 hover:text-primary/80',
      className,
    )
    if (!href) {
      return <a className={classes} {...rest} />
    }
    const isExternal =
      /^https?:\/\//.test(href) ||
      href.startsWith('mailto:') ||
      href.startsWith('tel:')
    if (isExternal) {
      return (
        <a
          className={classes}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          {...rest}
        />
      )
    }
    return (
      <Link
        className={classes}
        href={href}
        {...(rest as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      />
    )
  },
  p: ({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p
      className={cn('leading-7 [&:not(:first-child)]:mt-6', className)}
      {...props}
    />
  ),
  ul: ({ className, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className={cn('my-6 ml-6 list-disc', className)} {...props} />
  ),
  ol: ({ className, ...props }: React.HTMLAttributes<HTMLOListElement>) => (
    <ol className={cn('my-6 ml-6 list-decimal', className)} {...props} />
  ),
  li: ({ className, ...props }: React.HTMLAttributes<HTMLLIElement>) => (
    <li className={cn('', className)} {...props} />
  ),
  blockquote: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <blockquote
      className={cn(
        'mt-6 border-l-2 border-primary/40 pl-6 italic text-muted-foreground',
        className,
      )}
      {...props}
    />
  ),
  hr: ({ ...props }: React.HTMLAttributes<HTMLHRElement>) => (
    <hr className="my-4 md:my-8 border-border" {...props} />
  ),
  table: ({
    className,
    ...props
  }: React.HTMLAttributes<HTMLTableElement>) => (
    <div className="my-6 w-full overflow-y-auto">
      <table className={cn('w-full', className)} {...props} />
    </div>
  ),
  tr: ({
    className,
    ...props
  }: React.HTMLAttributes<HTMLTableRowElement>) => (
    <tr
      className={cn('m-0 border-t border-border p-0 even:bg-muted/30', className)}
      {...props}
    />
  ),
  th: ({
    className,
    ...props
  }: React.HTMLAttributes<HTMLTableCellElement>) => (
    <th
      className={cn(
        'border border-border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right',
        className,
      )}
      {...props}
    />
  ),
  td: ({
    className,
    ...props
  }: React.HTMLAttributes<HTMLTableCellElement>) => (
    <td
      className={cn(
        'border border-border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right',
        className,
      )}
      {...props}
    />
  ),
  pre: ({ className, ...props }: React.HTMLAttributes<HTMLPreElement>) => (
    <pre
      className={cn(
        'mb-4 mt-6 overflow-x-auto rounded-lg border border-border bg-muted/50 p-4',
        className,
      )}
      {...props}
    />
  ),
  code: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <code
      className={cn(
        'relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm text-primary',
        className,
      )}
      {...props}
    />
  ),
  Callout,
  Panel,
} satisfies MDXComponents

export function useMDXComponents(userComponents: MDXComponents = {}): MDXComponents {
  return {
    ...mdxComponents,
    ...userComponents,
  }
}
