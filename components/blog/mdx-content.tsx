import * as runtime from 'react/jsx-runtime'
import { compile, run } from '@mdx-js/mdx'
import remarkGfm from 'remark-gfm'
import { useMDXComponents as getMDXComponents } from '@/mdx-components'
import { marked } from 'marked'

interface MDXContentProps {
  content: string
}

// Server Component: compiles MDX to React and renders with custom components
export async function MDXContent({ content }: MDXContentProps) {
  const components = getMDXComponents()

  try {
    const compiled = await compile(content, {
      outputFormat: 'function-body',
      development: false,
      remarkPlugins: [remarkGfm],
    })

    const { default: MDXComponent } = await run(compiled, {
      ...runtime,
      useMDXComponents: getMDXComponents,
    })

    return <MDXComponent components={components} />
  } catch {
    // Fallback: render Markdown to HTML
    const src = content
      .replace(/^\s*import\s.+$/gm, '')
      .replace(/className=/g, 'class=')

    marked.setOptions({ gfm: true, breaks: false })
    const html = marked.parse(src) as string
    const withIds = addIdsToHtmlHeadings(html)
    return <div dangerouslySetInnerHTML={{ __html: withIds }} />
  }
}

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/&[a-z0-9#]+;/g, ' ')
    .replace(/<[^>]*>/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

function addIdsToHtmlHeadings(html: string) {
  return html.replace(
    /<h([2-4])(\s+[^>]*)?>([\s\S]*?)<\/h\1>/gi,
    (m, level, attrs = '', inner) => {
      const text = inner.replace(/<[^>]*>/g, '')
      const idMatch = /id\s*=\s*"([^"]+)"/i.exec(attrs || '')
      const id = idMatch?.[1] || slugify(text)
      const cleanAttrs = (attrs || '').replace(/\s*id\s*=\s*"[^"]+"/i, '')
      return `<h${level} id="${id}"${cleanAttrs}>${inner}</h${level}>`
    },
  )
}
