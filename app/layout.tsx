import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
