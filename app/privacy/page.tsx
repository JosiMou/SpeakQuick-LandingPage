import type { Metadata } from 'next'
import Link from 'next/link'
import { Mic, ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Privacy Policy | SpeakQuick',
  description:
    'Learn how SpeakQuick protects your privacy. All audio processing happens locally on your Mac.',
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-3xl mx-auto px-6 py-12 md:py-20">
        {/* Back link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <div className="flex items-center gap-3 mb-8">
          <div className="w-8 h-8 border border-primary/30 flex items-center justify-center">
            <Mic className="w-4 h-4 text-primary" />
          </div>
          <span className="font-semibold text-foreground">
            SpeakQuick
          </span>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Privacy Policy
        </h1>

        <p className="text-sm text-muted-foreground mb-12">
          Last updated: February 21, 2026
        </p>

        <div className="prose prose-invert max-w-none prose-headings:font-semibold prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-strong:text-foreground">
          <section className="mb-10">
            <h2>Your Privacy Matters</h2>
            <p>
              SpeakQuick processes all audio entirely on your Mac. Your files
              never leave your device. This policy explains how we handle your
              data with complete transparency.
            </p>
          </section>

          <section className="mb-10">
            <h2>Local-Only Processing</h2>
            <p>
              SpeakQuick uses OpenAI Whisper models that run locally on your
              hardware. This means:
            </p>
            <ul>
              <li>No audio data is uploaded to any server</li>
              <li>No internet connection is required for transcription</li>
              <li>Your files remain exclusively on your device</li>
              <li>No third-party AI service ever receives your content</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2>What We Collect</h2>
            <p>We collect minimal data necessary for the app to function:</p>
            <ul>
              <li>License activation status (for purchased licenses)</li>
              <li>
                Anonymous usage statistics (number of transcriptions, not the
                content)
              </li>
              <li>Error logs (without file contents or transcription text)</li>
              <li>App preferences stored locally on your Mac</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2>What We Do Not Collect</h2>
            <ul>
              <li>Audio or video file contents</li>
              <li>Transcription output text</li>
              <li>File names or file paths</li>
              <li>Speaker identification data</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2>Data Security</h2>
            <ul>
              <li>
                All processing happens on-device using Apple Silicon
                optimizations
              </li>
              <li>License keys are stored securely in macOS Keychain</li>
              <li>No cloud storage or remote databases are involved</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2>Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Delete all app data at any time by removing SpeakQuick</li>
              <li>Request information about data processing</li>
              <li>
                Opt out of anonymous usage statistics in the app settings
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h2>Contact</h2>
            <p>
              If you have questions about this Privacy Policy, contact us at:{' '}
              <a href="mailto:support@speakquick.app">support@speakquick.app</a>
            </p>
          </section>

          <section className="mb-10">
            <h2>Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will
              notify you of any changes by posting the new Privacy Policy on
              this page and updating the &ldquo;Last updated&rdquo; date.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
