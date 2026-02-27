import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import { OpenPanelComponent } from "@openpanel/nextjs";
import "./globals.css";
import { I18nProvider } from "@/lib/i18n/index";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

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
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon-32x32.png",
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
    <html lang="en" className={`dark ${inter.variable} ${instrumentSerif.variable}`}>
      <body className="font-sans antialiased">
        <OpenPanelComponent
          clientId="041bf4d1-8f03-4761-b92d-63324e2f809b"
          trackScreenViews={true}
          trackOutgoingLinks={true}
          trackAttributes={true}
        />
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  );
}
