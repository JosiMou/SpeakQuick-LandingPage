"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const DOWNLOAD_URL =
  "https://github.com/JosiMou/SpeakQuick/releases/latest/download/SpeakQuick.dmg";

export function ThankYouContent() {
  const downloadRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      downloadRef.current?.click();
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative flex-1 flex items-center justify-center px-6">
      <div className="pt-36 pb-28 text-center max-w-2xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-4xl sm:text-5xl font-semibold tracking-tight text-[var(--text-primary)] mb-4"
        >
          Get started with SpeakQuick
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.1,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="text-[var(--text-secondary)] text-base mb-8"
        >
          If the download doesn&apos;t start automatically, click below.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.2,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          <Button size="lg" asChild>
            <a ref={downloadRef} href={DOWNLOAD_URL}>
              <Download className="w-4 h-4" />
              Download for macOS
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
