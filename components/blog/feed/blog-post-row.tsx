import Link from 'next/link'

export interface BlogPostRowProps {
  href: string
  title: string
  description?: string
  author: string
  dateLabel: string
  dateISO: string
  readTime?: string
}

export function BlogPostRow({
  href,
  title,
  description,
  author,
  dateLabel,
  dateISO,
  readTime,
}: BlogPostRowProps) {
  return (
    <Link
      href={href}
      className="group block py-6 border-b border-border/40 last:border-b-0 transition-colors hover:bg-muted/20 -mx-4 px-4 rounded-lg"
    >
      {/* Meta line */}
      <div className="flex items-center gap-1.5 text-sm text-muted-foreground mb-2">
        <span>{author}</span>
        <span className="text-border">·</span>
        <time dateTime={dateISO}>{dateLabel}</time>
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2 mb-1.5">
        {title}
      </h3>

      {/* Description */}
      {description && (
        <p className="text-sm text-muted-foreground line-clamp-2">
          {description}
        </p>
      )}

      {/* Read time */}
      {readTime && (
        <p className="text-xs text-muted-foreground/70 mt-2">
          {readTime}
        </p>
      )}
    </Link>
  )
}
