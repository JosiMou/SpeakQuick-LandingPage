"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import Image from "next/image";

const DOWNLOAD_URL =
  "https://github.com/JosiMou/SpeakQuick/releases/latest/download/SpeakQuick.dmg";

/* ------------------------------------------------------------------ */
/*  Step illustration components                                       */
/* ------------------------------------------------------------------ */

function StepInstall() {
  return (
    <div className="w-full h-full flex items-center justify-center gap-6 px-6">
      {/* App icon */}
      <div className="flex flex-col items-center gap-1.5">
        <div className="w-16 h-16 rounded-[14px] overflow-hidden shadow-lg shadow-black/30">
          <Image
            src="/speakquick-icon-1024.png"
            alt="SpeakQuick"
            width={64}
            height={64}
          />
        </div>
        <span className="text-[10px] text-white/40">SpeakQuick</span>
      </div>

      {/* Arrow */}
      <div className="flex items-center gap-1">
        <div className="w-6 h-px bg-white/20" />
        <svg
          width="8"
          height="12"
          viewBox="0 0 8 12"
          fill="none"
          className="text-white/20"
        >
          <path
            d="M1.5 1L6.5 6L1.5 11"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* Applications folder */}
      <div className="flex flex-col items-center gap-1.5">
        <div className="w-16 h-16 rounded-[14px] bg-gradient-to-b from-[#4CA2F8] to-[#2176DE] flex items-center justify-center shadow-lg shadow-black/30">
          <svg
            width="28"
            height="24"
            viewBox="0 0 28 24"
            fill="none"
            className="text-white/90"
          >
            <path
              d="M2 6C2 4.89543 2.89543 4 4 4H10L13 7H24C25.1046 7 26 7.89543 26 9V20C26 21.1046 25.1046 22 24 22H4C2.89543 22 2 21.1046 2 20V6Z"
              fill="currentColor"
              fillOpacity="0.3"
              stroke="currentColor"
              strokeWidth="1.5"
            />
          </svg>
        </div>
        <span className="text-[10px] text-white/40">Applications</span>
      </div>
    </div>
  );
}

function StepPermissions() {
  return (
    <div className="w-full h-full flex items-center justify-center px-5">
      {/* macOS-style permission dialog */}
      <div className="w-full max-w-[220px] rounded-xl bg-[#1c1c1e] border border-white/[0.08] shadow-2xl shadow-black/50 overflow-hidden">
        {/* Dialog header */}
        <div className="px-4 pt-4 pb-3 flex flex-col items-center gap-2.5">
          <div className="w-10 h-10 rounded-[9px] overflow-hidden">
            <Image
              src="/speakquick-icon-1024.png"
              alt="SpeakQuick"
              width={40}
              height={40}
            />
          </div>
          <p className="text-[11px] text-white/80 text-center leading-snug">
            &ldquo;SpeakQuick&rdquo; would like to
            <br />
            access the microphone.
          </p>
        </div>
        {/* Dialog buttons */}
        <div className="border-t border-white/[0.08] flex">
          <button className="flex-1 py-2 text-[11px] text-white/40 border-r border-white/[0.08]">
            Don&apos;t Allow
          </button>
          <button className="flex-1 py-2 text-[11px] text-[#4CA2F8] font-medium">
            OK
          </button>
        </div>
      </div>
    </div>
  );
}

function StepDictate() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-3 px-5">
      {/* Keyboard shortcut badge */}
      <div className="flex items-center gap-1.5">
        <kbd className="px-2 py-1 rounded-md bg-white/[0.06] border border-white/[0.1] text-[11px] text-white/60 font-mono">
          Fn
        </kbd>
        <span className="text-[10px] text-white/30">twice</span>
      </div>

      {/* Recorder pill mockup */}
      <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-[#0066CC]/30 to-[#0088FF]/20 border border-[#0088FF]/30">
        <div className="w-2 h-2 rounded-full bg-[#FF3B30] animate-pulse" />
        <div className="flex items-end gap-[2px]">
          {[0.4, 0.7, 1, 0.8, 0.5, 0.9, 0.6, 0.3, 0.7, 0.5].map((h, i) => (
            <div
              key={i}
              className="w-[2px] rounded-full bg-white/50"
              style={{
                height: `${h * 14}px`,
                animation: `waveform-pulse ${0.6 + i * 0.08}s ease-in-out infinite`,
                animationDelay: `${i * 0.05}s`,
              }}
            />
          ))}
        </div>
        <span className="text-[10px] text-white/50 ml-0.5">0:03</span>
      </div>

      {/* Text appearing */}
      <p className="text-[11px] text-white/60 font-mono">
        Hello, this is a test...
      </p>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Steps data                                                         */
/* ------------------------------------------------------------------ */

const steps = [
  {
    number: 1,
    illustration: StepInstall,
    description:
      "Drag SpeakQuick into your Applications folder",
  },
  {
    number: 2,
    illustration: StepPermissions,
    description:
      "Open SpeakQuick and grant permissions",
  },
  {
    number: 3,
    illustration: StepDictate,
    description:
      "Press your shortcut key and start dictating",
  },
];

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export function ThankYouContent() {
  const downloadRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      downloadRef.current?.click();
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative flex-1 px-6">
      {/* Hero */}
      <div className="pt-36 pb-16 text-center max-w-2xl mx-auto">
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

      {/* Setup steps */}
      <div className="max-w-4xl mx-auto pb-28">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.3 + i * 0.1,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="flex flex-col items-center text-center"
            >
              <div className="card-surface rounded-[20px] w-full aspect-[4/3] overflow-hidden mb-5">
                <step.illustration />
              </div>
              <span className="text-2xl font-semibold text-[var(--text-primary)] mb-2">
                {step.number}
              </span>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
