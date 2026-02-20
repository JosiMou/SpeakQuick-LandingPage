import type { Metadata } from "next";
import "./globals.css";
import { I18nProvider } from "@/lib/i18n/index";

export const metadata: Metadata = {
  title: "SpeakQuick - AI-Powered Transcription for Mac",
  description: "Transform audio and video into accurate text with AI. Local processing, speaker detection, and lightning-fast transcription.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased">
        <I18nProvider>
          {children}
        </I18nProvider>
      </body>
    </html>
  );
}
