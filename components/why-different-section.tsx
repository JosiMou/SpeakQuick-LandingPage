"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Zap, Shield, Clock, Globe } from "lucide-react";

const ACCENT_HSL = "216 100% 50%";

// =============================================================================
// CARD DATA
// =============================================================================

const DIFFERENTIATOR_CARDS = [
  {
    id: "local",
    title: "Local First",
    subhead: "Your audio never leaves your Mac",
    description:
      "Unlike cloud-based services, SpeakQuick processes everything locally. No uploads, no waiting, no privacy concerns. Your sensitive recordings stay exactly where they should—on your device.",
    icon: Shield,
    demo: "local",
  },
  {
    id: "speed",
    title: "Lightning Fast",
    subhead: "10x faster than cloud transcription",
    description:
      "Optimized for Apple Silicon. Transcribe an hour of audio in under 5 minutes. No internet connection required means no upload delays or network bottlenecks.",
    icon: Zap,
    demo: "speed",
  },
  {
    id: "accurate",
    title: "Incredibly Accurate",
    subhead: "Powered by Whisper v3",
    description:
      "State-of-the-art AI that handles accents, technical jargon, and multiple speakers with ease. Industry-leading accuracy across 99+ languages.",
    icon: Globe,
    demo: "accurate",
  },
  {
    id: "simple",
    title: "Dead Simple",
    subhead: "Drag, drop, done",
    description:
      "No complicated workflows or steep learning curves. Just drag your audio file onto SpeakQuick and get perfect transcripts. It's transcription that actually works the way you expect.",
    icon: Clock,
    demo: "simple",
  },
];

// =============================================================================
// DEMO COMPONENTS
// =============================================================================

function LocalProcessingDemo({ isHovered }: { isHovered: boolean }) {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-4">
      <div className="relative">
        {/* Mac icon */}
        <motion.div
          animate={{
            scale: isHovered ? [1, 1.05, 1] : 1,
          }}
          transition={{ duration: 2, repeat: isHovered ? Infinity : 0 }}
          className="w-16 h-12 rounded-lg bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center shadow-lg"
        >
          <div className="w-14 h-8 rounded bg-gradient-to-b from-gray-800 to-gray-900 flex items-center justify-center">
            <span className="text-[8px] text-white/60 font-medium">Mac</span>
          </div>
        </motion.div>

        {/* Lock icon */}
        <motion.div
          animate={{
            scale: isHovered ? 1 : 0.8,
            opacity: isHovered ? 1 : 0,
          }}
          className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center shadow-lg"
        >
          <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
        </motion.div>
      </div>

      {/* Cloud crossed out - only shows on hover */}
      <motion.div
        animate={{
          opacity: isHovered ? 0.3 : 0,
          y: isHovered ? 0 : 10,
        }}
        className="mt-4 text-center"
      >
        <div className="relative inline-block">
          <svg className="w-8 h-8 text-muted-foreground" fill="currentColor" viewBox="0 0 24 24">
            <path d="M18.42 9.22a6 6 0 00-11.38 0A4.99 4.99 0 006 19h13a4.5 4.5 0 00-.58-8.78z" />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-10 h-0.5 bg-red-500 rotate-45" />
          </div>
        </div>
        <p className="text-[10px] text-muted-foreground mt-1">No cloud</p>
      </motion.div>

      <motion.p
        animate={{ opacity: isHovered ? 1 : 0.5 }}
        className="text-[10px] text-center mt-2 font-medium"
        style={{ color: isHovered ? `hsl(${ACCENT_HSL})` : "hsl(var(--muted-foreground))" }}
      >
        100% Private
      </motion.p>
    </div>
  );
}

function SpeedDemo({ isHovered }: { isHovered: boolean }) {
  const [progress, setProgress] = useState(0);

  // Animate progress when hovered
  useState(() => {
    if (isHovered) {
      const interval = setInterval(() => {
        setProgress((p) => (p >= 100 ? 0 : p + 2));
      }, 20);
      return () => clearInterval(interval);
    }
  });

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-4">
      {/* Speed indicator */}
      <div className="relative w-20 h-20">
        {/* Background circle */}
        <svg className="w-full h-full -rotate-90">
          <circle
            cx="40"
            cy="40"
            r="36"
            fill="none"
            stroke="hsl(var(--muted))"
            strokeWidth="6"
          />
          <motion.circle
            cx="40"
            cy="40"
            r="36"
            fill="none"
            stroke={`hsl(${ACCENT_HSL})`}
            strokeWidth="6"
            strokeLinecap="round"
            strokeDasharray={226}
            animate={{
              strokeDashoffset: isHovered ? 0 : 226,
            }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
        </svg>
        
        {/* Center content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            animate={{ scale: isHovered ? [1, 1.1, 1] : 1 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <span className="text-xl font-bold" style={{ color: `hsl(${ACCENT_HSL})` }}>
              10x
            </span>
          </motion.div>
        </div>
      </div>

      <motion.p
        animate={{ opacity: isHovered ? 1 : 0.5 }}
        className="text-[10px] text-center mt-3 font-medium"
        style={{ color: isHovered ? `hsl(${ACCENT_HSL})` : "hsl(var(--muted-foreground))" }}
      >
        {isHovered ? "Processing..." : "Faster than cloud"}
      </motion.p>
    </div>
  );
}

function AccuracyDemo({ isHovered }: { isHovered: boolean }) {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-4">
      {/* Accuracy visualization */}
      <div className="relative">
        <motion.div
          animate={{
            scale: isHovered ? [1, 1.05, 1] : 1,
          }}
          transition={{ duration: 2, repeat: isHovered ? Infinity : 0 }}
          className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center border border-primary/20"
        >
          <span className="text-2xl font-bold text-primary">99%</span>
        </motion.div>

        {/* Orbiting dots */}
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-primary/40"
            animate={isHovered ? {
              rotate: 360,
            } : {}}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "linear",
            }}
            style={{
              top: "50%",
              left: "50%",
              marginLeft: -4,
              marginTop: -4,
              transformOrigin: `${40 + i * 8}px center`,
            }}
          />
        ))}
      </div>

      {/* Language indicators */}
      <motion.div
        animate={{ opacity: isHovered ? 1 : 0.5 }}
        className="flex gap-2 mt-4"
      >
        {["EN", "DE", "FR", "ES"].map((lang, i) => (
          <motion.span
            key={lang}
            initial={{ opacity: 0, y: 10 }}
            animate={{
              opacity: isHovered ? 1 : 0.5,
              y: 0,
            }}
            transition={{ delay: i * 0.1 }}
            className="text-[8px] px-1.5 py-0.5 rounded bg-primary/10 text-primary font-medium"
          >
            {lang}
          </motion.span>
        ))}
      </motion.div>

      <p className="text-[10px] text-muted-foreground mt-3">
        99+ languages
      </p>
    </div>
  );
}

function SimpleDemo({ isHovered }: { isHovered: boolean }) {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-4">
      {/* Drag and drop visualization */}
      <div className="relative">
        {/* Drop zone */}
        <motion.div
          animate={{
            borderColor: isHovered ? `hsl(${ACCENT_HSL})` : "hsl(var(--border))",
            backgroundColor: isHovered ? `hsl(${ACCENT_HSL} / 0.05)` : "transparent",
          }}
          className="w-20 h-20 rounded-xl border-2 border-dashed flex items-center justify-center transition-colors"
        >
          <motion.div
            animate={{
              y: isHovered ? [0, -5, 0] : 0,
              rotate: isHovered ? [0, -5, 5, 0] : 0,
            }}
            transition={{ duration: 1, repeat: isHovered ? Infinity : 0 }}
            className="w-10 h-12 rounded bg-gradient-to-br from-gray-100 to-gray-200 shadow-md flex items-center justify-center"
          >
            <svg className="w-5 h-5 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
            </svg>
          </motion.div>
        </motion.div>

        {/* Success check */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{
            scale: isHovered ? 1 : 0,
          }}
          className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center shadow-lg"
        >
          <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
          </svg>
        </motion.div>
      </div>

      <motion.p
        animate={{ opacity: isHovered ? 1 : 0.5 }}
        className="text-[10px] text-center mt-3 font-medium"
        style={{ color: isHovered ? `hsl(${ACCENT_HSL})` : "hsl(var(--muted-foreground))" }}
      >
        {isHovered ? "Done!" : "Drag & Drop"}
      </motion.p>
    </div>
  );
}

// =============================================================================
// CARD COMPONENT
// =============================================================================

function DifferentiatorCard({
  card,
  index,
  isVisible,
}: {
  card: (typeof DIFFERENTIATOR_CARDS)[0];
  index: number;
  isVisible: boolean;
}) {
  const [isHovered, setIsHovered] = useState(false);

  const Icon = card.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="h-full"
      style={{
        zIndex: isHovered ? 30 : 10 + index,
      }}
    >
      <motion.div
        className="relative rounded-2xl cursor-default h-full overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        animate={{
          y: isHovered ? -4 : 0,
          scale: isHovered ? 1.02 : 1,
        }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
      >
        {/* Glass background */}
        <div
          className="absolute inset-0 rounded-2xl"
          style={{
            background: "hsl(var(--card) / 0.8)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(0,0,0,0.08)",
          }}
        />

        {/* Shadow */}
        <motion.div
          className="absolute inset-0 rounded-2xl pointer-events-none"
          animate={{
            boxShadow: isHovered
              ? "0 20px 40px rgba(0,0,0,0.1), 0 0 0 1px rgba(0,0,0,0.05)"
              : "0 4px 12px rgba(0,0,0,0.05), 0 0 0 1px rgba(0,0,0,0.03)",
          }}
          transition={{ duration: 0.2 }}
        />

        {/* Card content */}
        <div className="relative p-6">
          {/* Demo area */}
          <div
            className="mb-5 rounded-xl overflow-hidden"
            style={{
              height: 140,
              background: "linear-gradient(180deg, rgba(0,0,0,0.02) 0%, rgba(0,0,0,0.01) 100%)",
              border: "1px solid rgba(0,0,0,0.06)",
            }}
          >
            {card.demo === "local" ? (
              <LocalProcessingDemo isHovered={isHovered} />
            ) : card.demo === "speed" ? (
              <SpeedDemo isHovered={isHovered} />
            ) : card.demo === "accurate" ? (
              <AccuracyDemo isHovered={isHovered} />
            ) : (
              <SimpleDemo isHovered={isHovered} />
            )}
          </div>

          {/* Icon and title */}
          <div className="flex items-center gap-2 mb-2">
            <div
              className="p-1.5 rounded-lg transition-colors"
              style={{
                backgroundColor: isHovered
                  ? `hsl(${ACCENT_HSL} / 0.1)`
                  : "hsl(var(--muted))",
                color: isHovered ? `hsl(${ACCENT_HSL})` : "hsl(var(--muted-foreground))",
              }}
            >
              <Icon className="w-4 h-4" />
            </div>
            <motion.h3
              className="text-lg font-semibold tracking-tight"
              animate={{
                color: isHovered
                  ? `hsl(${ACCENT_HSL})`
                  : "hsl(var(--foreground))",
              }}
              transition={{ duration: 0.2 }}
            >
              {card.title}
            </motion.h3>
          </div>

          {/* Subhead */}
          <p className="text-sm font-medium mb-2 text-muted-foreground">
            {card.subhead}
          </p>

          {/* Description */}
          <p className="text-sm text-muted-foreground/80 leading-relaxed">
            {card.description}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

// =============================================================================
// MAIN SECTION
// =============================================================================

export function WhyDifferentSection() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>(0.15);

  return (
    <section
      ref={ref}
      className="w-full section-spacing relative overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, hsl(var(--background)) 0%, hsl(220 12% 97%) 100%)",
      }}
    >
      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 30%, rgba(0,0,0,0.02) 0%, transparent 50%),
                           radial-gradient(circle at 80% 70%, rgba(0,0,0,0.015) 0%, transparent 50%)`,
        }}
      />

      <div className="container px-4 md:px-6 relative">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground mb-4">
            Why SpeakQuick?
          </h2>
          <p className="text-lg text-muted-foreground">
            Built specifically for macOS with privacy and performance at its core. 
            No subscriptions, no cloud uploads, no compromises.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {DIFFERENTIATOR_CARDS.map((card, index) => (
            <DifferentiatorCard
              key={card.id}
              card={card}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
