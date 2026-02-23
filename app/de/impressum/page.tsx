import type { Metadata } from 'next'
import Link from 'next/link'
import { Mic, ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Impressum | SpeakQuick',
  description:
    'Rechtliche Angaben und Unternehmensinformationen für SpeakQuick.',
}

export default function ImpressumPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-3xl mx-auto px-6 py-12 md:py-20">
        {/* Back link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors font-mono mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Zurück zur Startseite
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
          Impressum
        </h1>

        <div className="prose prose-invert max-w-none prose-headings:font-mono prose-headings:font-semibold prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-strong:text-foreground">
          <section className="mb-10">
            <h2>Angaben gem&auml;&szlig; &sect; 5 TMG</h2>
            <p>
              Josef Moucachen
              <br />
              Overhoeksplein 3
              <br />
              1031KS Amsterdam
              <br />
              Niederlande
            </p>
          </section>

          <section className="mb-10">
            <h2>Kontakt</h2>
            <p>
              E-Mail:{' '}
              <a href="mailto:support@speakquick.app">support@speakquick.app</a>
            </p>
          </section>

          <section className="mb-10">
            <h2>Handelsregister</h2>
            <p>KvK (Kamer van Koophandel): 94099660</p>
          </section>

          <section className="mb-10">
            <h2>EU-Streitschlichtung</h2>
            <p>
              Die Europ&auml;ische Kommission stellt eine Plattform zur
              Online-Streitbeilegung (OS) bereit:{' '}
              <a
                href="https://ec.europa.eu/consumers/odr/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://ec.europa.eu/consumers/odr/
              </a>
            </p>
            <p>
              Wir sind nicht bereit oder verpflichtet, an
              Streitbeilegungsverfahren vor einer
              Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
