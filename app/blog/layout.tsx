import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    template: '%s | SpeakQuick Blog',
    default: 'SpeakQuick Blog',
  },
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
