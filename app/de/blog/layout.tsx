import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    template: '%s | SpeakQuick Blog',
    default: 'SpeakQuick Blog',
  },
}

export default function DeBlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
