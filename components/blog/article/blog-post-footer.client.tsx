'use client'

import { useState } from 'react'
import { Link2, Check } from 'lucide-react'

export interface BlogPostFooterProps {
  author: string
  datePublished: string
  dateISO: string
}

export function BlogPostFooter({
  author,
  datePublished,
  dateISO,
}: BlogPostFooterProps) {
  const [copied, setCopied] = useState(false)

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy link:', err)
    }
  }

  return (
    <footer className="mt-16 pt-8 border-t border-border/40">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span className="font-medium text-foreground">{author}</span>
          <span className="text-border">·</span>
          <time dateTime={dateISO}>{datePublished}</time>
        </div>

        <button
          onClick={handleCopyLink}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground bg-muted/50 hover:bg-muted rounded-lg transition-all"
        >
          {copied ? (
            <>
              <Check className="w-4 h-4 text-primary" />
              <span>Copied</span>
            </>
          ) : (
            <>
              <Link2 className="w-4 h-4" />
              <span>Copy link</span>
            </>
          )}
        </button>
      </div>
    </footer>
  )
}
