"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Mic, Users, FileText, Globe, Cpu, Zap, Clock, Shield } from "lucide-react";

// =============================================================================
// TYPES
// =============================================================================

interface Feature {
  title: string;
  description: string;
  bullets: string[];
  icon: React.ReactNode;
}

interface FeatureCategory {
  name: string;
  tagline: string;
  features: Feature[];
}

// =============================================================================
// FEATURE DATA
// =============================================================================

const FEATURE_CATEGORIES: FeatureCategory[] = [
  {
    name: "Transcription",
    tagline: "State-of-the-art speech recognition powered by OpenAI Whisper.",
    features: [
      {
        title: "Whisper AI Engine",
        description:
          "Powered by OpenAI's Whisper v3 model for industry-leading accuracy across 99 languages.",
        bullets: [
          "99+ languages supported with native accuracy",
          "Handles accents, background noise, and technical jargon",
          "Local processing - your audio never leaves your Mac",
        ],
        icon: <Mic className="w-5 h-5" />,
      },
      {
        title: "Speaker Diarization",
        description:
          "Automatically identifies and labels different speakers in your audio files.",
        bullets: [
          "Distinguish between multiple speakers automatically",
          "Speaker labels in exports (Speaker 1, Speaker 2, etc.)",
          "Perfect for meetings, interviews, and podcasts",
        ],
        icon: <Users className="w-5 h-5" />,
      },
      {
        title: "Real-time Transcription",
        description:
          "Transcribe live audio from your microphone with minimal latency.",
        bullets: [
          "Live dictation and note-taking",
          "Instant transcription as you speak",
          "Pause and resume anytime",
        ],
        icon: <Zap className="w-5 h-5" />,
      },
    ],
  },
  {
    name: "Export & Formats",
    tagline: "Export your transcripts in any format you need.",
    features: [
      {
        title: "Multiple Formats",
        description:
          "Export to TXT, SRT, VTT, JSON, CSV, and more. Compatible with any workflow.",
        bullets: [
          "Subtitle files (SRT, VTT) with timestamps",
          "Plain text, JSON, and CSV exports",
          "Customizable timestamp formats",
        ],
        icon: <FileText className="w-5 h-5" />,
      },
      {
        title: "Timestamp Control",
        description:
          "Precise control over timestamp granularity and formatting.",
        bullets: [
          "Word-level or segment-level timestamps",
          "Adjustable timecode formats",
          "Frame-accurate for video workflows",
        ],
        icon: <Clock className="w-5 h-5" />,
      },
      {
        title: "Batch Processing",
        description:
          "Process multiple files at once with queue management.",
        bullets: [
          "Drag and drop multiple files",
          "Background processing queue",
          "Progress tracking for large batches",
        ],
        icon: <Cpu className="w-5 h-5" />,
      },
    ],
  },
  {
    name: "Privacy & Speed",
    tagline: "Your data stays yours. Process locally at incredible speeds.",
    features: [
      {
        title: "100% Local Processing",
        description:
          "All transcription happens on your Mac. No cloud uploads, no internet required.",
        bullets: [
          "Works completely offline",
          "No data ever sent to external servers",
          "Perfect for sensitive recordings",
        ],
        icon: <Shield className="w-5 h-5" />,
      },
      {
        title: "Apple Silicon Optimized",
        description:
          "Designed from the ground up for M1, M2, and M3 chips.",
        bullets: [
          "Up to 10x faster than cloud solutions",
          "Neural Engine acceleration",
          "Efficient battery usage",
        ],
        icon: <Cpu className="w-5 h-5" />,
      },
      {
        title: "Multilingual",
        description:
          "Transcribe in 99+ languages with automatic language detection.",
        bullets: [
          "Auto-detect language or set manually",
          "Mixed-language support",
          "Translation-ready output",
        ],
        icon: <Globe className="w-5 h-5" />,
      },
    ],
  },
];

// =============================================================================
// COMPONENTS
// =============================================================================

function WindowChrome({ title = "Features" }: { title?: string }) {
  return (
    <div className="flex items-center gap-2 px-5 py-3 border-b border-black/5 bg-muted/30">
      <div className="flex gap-1.5">
        <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
        <span className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
        <span className="w-3 h-3 rounded-full bg-[#28C840]" />
      </div>
      <div className="ml-3 text-xs font-medium text-muted-foreground">
        {title}
      </div>
    </div>
  );
}

function CategoryTabs({
  categories,
  activeCategory,
  onSelect,
}: {
  categories: FeatureCategory[];
  activeCategory: string;
  onSelect: (name: string) => void;
}) {
  return (
    <div className="flex gap-2 overflow-x-auto pb-1 -mb-1">
      {categories.map((c) => {
        const active = c.name === activeCategory;
        return (
          <button
            key={c.name}
            onClick={() => onSelect(c.name)}
            className={`
              px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all
              ${
                active
                  ? "bg-foreground text-background shadow-sm"
                  : "bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground"
              }
            `}
          >
            {c.name}
            <span className={`ml-1.5 ${active ? "opacity-70" : "opacity-50"}`}>
              {c.features.length}
            </span>
          </button>
        );
      })}
    </div>
  );
}

function FeatureList({
  category,
  activeFeature,
  onSelect,
}: {
  category: FeatureCategory;
  activeFeature: string;
  onSelect: (title: string) => void;
}) {
  return (
    <div className="rounded-2xl border border-black/5 bg-background overflow-hidden">
      <div className="px-4 py-3 border-b border-black/5 bg-muted/20">
        <div className="text-xs font-medium text-muted-foreground">
          {category.tagline}
        </div>
      </div>

      <div className="divide-y divide-border/50">
        {category.features.map((f) => {
          const active = f.title === activeFeature;
          return (
            <button
              key={f.title}
              onClick={() => onSelect(f.title)}
              className={`
                w-full text-left px-4 py-4 transition-colors
                ${active ? "bg-muted/40" : "hover:bg-muted/20"}
              `}
            >
              <div className="flex items-start gap-3">
                {/* Accent bar */}
                <div
                  className={`
                    mt-0.5 w-1 h-12 rounded-full transition-colors
                    ${active ? "bg-primary" : "bg-border"}
                  `}
                />
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <div
                      className={`
                        p-1.5 rounded-lg transition-colors
                        ${active ? "bg-primary/10 text-primary" : "text-muted-foreground"}
                      `}
                    >
                      {f.icon}
                    </div>
                    <div
                      className={`
                        font-medium transition-colors
                        ${active ? "text-foreground" : "text-foreground/80"}
                      `}
                    >
                      {f.title}
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground line-clamp-2 mt-1">
                    {f.description}
                  </div>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

function DetailPanel({ feature }: { feature: Feature }) {
  return (
    <div className="rounded-2xl border border-black/5 bg-muted/10 p-6 h-full flex flex-col">
      <AnimatePresence mode="wait">
        <motion.div
          key={feature.title}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2 }}
          className="flex-1 flex flex-col"
        >
          {/* Title */}
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-primary/10 text-primary">
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold tracking-tight text-foreground">
              {feature.title}
            </h3>
          </div>

          {/* Description */}
          <p className="mt-4 text-muted-foreground leading-relaxed">
            {feature.description}
          </p>

          {/* Bullets */}
          <ul className="mt-6 space-y-3">
            {feature.bullets.map((b) => (
              <li key={b} className="flex gap-3 text-sm text-muted-foreground">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary/60 flex-shrink-0" />
                <span className="leading-relaxed">{b}</span>
              </li>
            ))}
          </ul>

          {/* Visual demo area */}
          <div className="mt-auto pt-8">
            <div className="rounded-2xl border-2 border-dashed border-border/50 bg-muted/20 aspect-video flex items-center justify-center">
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  {feature.icon}
                </div>
                <span className="text-sm text-muted-foreground/70">
                  {feature.title} Demo
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

// =============================================================================
// MAIN COMPONENT
// =============================================================================

export function FeaturesSection() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  const [activeCategory, setActiveCategory] = useState(
    FEATURE_CATEGORIES[0].name
  );

  const activeCategoryData = useMemo(
    () =>
      FEATURE_CATEGORIES.find((c) => c.name === activeCategory) ??
      FEATURE_CATEGORIES[0],
    [activeCategory]
  );

  const [activeFeatureTitle, setActiveFeatureTitle] = useState(
    FEATURE_CATEGORIES[0]?.features[0]?.title
  );

  // Reset active feature when category changes
  const handleCategoryChange = (name: string) => {
    setActiveCategory(name);
    const category = FEATURE_CATEGORIES.find((c) => c.name === name);
    if (category?.features[0]) {
      setActiveFeatureTitle(category.features[0].title);
    }
  };

  const activeFeature = useMemo(
    () =>
      activeCategoryData.features.find(
        (f) => f.title === activeFeatureTitle
      ) ?? activeCategoryData.features[0],
    [activeCategoryData, activeFeatureTitle]
  );

  return (
    <section
      ref={ref}
      className="relative section-spacing px-6 overflow-hidden"
    >
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/20 to-transparent" />

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-foreground">
            Everything you need for transcription
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional-grade transcription with the simplicity you expect from a Mac app.
          </p>
        </motion.div>

        {/* App Window Container */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="rounded-3xl border border-black/5 bg-background shadow-lg overflow-hidden"
        >
          {/* Window Chrome */}
          <WindowChrome title="Feature Explorer" />

          {/* Content */}
          <div className="p-5 sm:p-6">
            {/* Category Tabs */}
            <CategoryTabs
              categories={FEATURE_CATEGORIES}
              activeCategory={activeCategory}
              onSelect={handleCategoryChange}
            />

            {/* Body: List + Detail */}
            <div className="mt-6 grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-6">
              {/* Feature List */}
              <FeatureList
                category={activeCategoryData}
                activeFeature={activeFeatureTitle}
                onSelect={setActiveFeatureTitle}
              />

              {/* Detail Panel */}
              <DetailPanel feature={activeFeature} />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
