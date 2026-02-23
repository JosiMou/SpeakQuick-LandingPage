import type { Metadata } from "next";
import "./globals.css";
import { I18nProvider } from "@/lib/i18n/index";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.speakquick.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "SpeakQuick - AI-Powered Transcription for Mac",
    template: "%s | SpeakQuick",
  },
  description:
    "Transform audio and video into accurate text with AI. Local processing, speaker detection, and lightning-fast transcription on macOS.",
  keywords: [
    "transcription",
    "macOS app",
    "AI transcription",
    "Whisper",
    "speech to text",
    "audio to text",
    "local transcription",
    "offline transcription",
    "speaker detection",
  ],
  authors: [{ name: "SpeakQuick" }],
  creator: "SpeakQuick",
  publisher: "SpeakQuick",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    title: "SpeakQuick - AI-Powered Transcription for Mac",
    description:
      "Transform audio and video into accurate text with AI. Local processing, speaker detection, and lightning-fast transcription on macOS.",
    siteName: "SpeakQuick",
    images: [
      {
        url: `${SITE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "SpeakQuick - AI-Powered Transcription for Mac",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SpeakQuick - AI-Powered Transcription for Mac",
    description:
      "Transform audio and video into accurate text with AI. Local processing on macOS.",
    images: [`${SITE_URL}/og-image.png`],
  },
  alternates: {
    canonical: "./",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large" as const,
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased">
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  );
}
