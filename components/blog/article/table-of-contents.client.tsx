'use client'

import { useState, useEffect } from 'react'
import { cn } from '@/lib/utils'

export interface TOCItem {
  id: string
  text: string
  level: number
}

export interface TableOfContentsProps {
  items: TOCItem[]
}

export function TableOfContents({ items }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: '-100px 0px -80% 0px' },
    )

    const elements: Element[] = []
    items.forEach((item) => {
      const element = document.getElementById(item.id)
      if (element) {
        observer.observe(element)
        elements.push(element)
      }
    })

    return () => {
      elements.forEach((element) => observer.unobserve(element))
      observer.disconnect()
    }
  }, [items])

  const handleClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault()
    const element = document.getElementById(id)
    if (element) {
      const y =
        element.getBoundingClientRect().top + window.pageYOffset - 100
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }

  if (items.length === 0) return null

  return (
    <nav aria-label="Table of contents" className="text-sm">
      <p className="font-mono font-medium text-foreground mb-3 text-xs uppercase tracking-wider">
        On this page
      </p>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item.id}>
            <button
              onClick={(e) => handleClick(e, item.id)}
              className={cn(
                'block w-full text-left transition-colors hover:text-primary',
                activeId === item.id
                  ? 'text-primary font-medium'
                  : 'text-muted-foreground',
              )}
            >
              {item.text}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}
