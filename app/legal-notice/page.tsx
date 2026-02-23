import type { Metadata } from 'next'
import Link from 'next/link'
import { Mic, ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Legal Notice | SpeakQuick',
  description:
    'Legal notice and company information for SpeakQuick.',
}

export default function LegalNoticePage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-3xl mx-auto px-6 py-12 md:py-20">
        {/* Back link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors font-mono mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <div className="flex items-center gap-3 mb-8">
          <div className="w-8 h-8 border border-primary/30 flex items-center justify-center">
            <Mic className="w-4 h-4 text-primary" />
          </div>
          <span className="font-mono font-semibold text-foreground">
            SpeakQuick
          </span>
        </div>

        <h1 className="text-3xl md:text-4xl font-mono font-bold text-foreground mb-12">
          Legal Notice
        </h1>

        <div className="prose prose-invert max-w-none prose-headings:font-mono prose-headings:font-semibold prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-strong:text-foreground">
          <section className="mb-10">
            <h2>Information according to &sect; 5 TMG</h2>
            <p>
              Josef Moucachen
              <br />
              Overhoeksplein 3
              <br />
              1031KS Amsterdam
              <br />
              Netherlands
            </p>
          </section>

          <section className="mb-10">
            <h2>Contact</h2>
            <p>
              Email:{' '}
              <a href="mailto:support@speakquick.app">support@speakquick.app</a>
            </p>
          </section>

          <section className="mb-10">
            <h2>Commercial Register</h2>
            <p>KvK (Chamber of Commerce): 94099660</p>
          </section>

          <section className="mb-10">
            <h2>EU Dispute Resolution</h2>
            <p>
              The European Commission provides a platform for online dispute
              resolution (ODR):{' '}
              <a
                href="https://ec.europa.eu/consumers/odr/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://ec.europa.eu/consumers/odr/
              </a>
            </p>
            <p>
              We are not willing or obliged to participate in dispute resolution
              proceedings before a consumer arbitration board.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
