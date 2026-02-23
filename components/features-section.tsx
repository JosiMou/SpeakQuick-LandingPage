"use client";

import { useMemo, useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useI18n } from "@/lib/i18n/index";
import { Mic, Users, FileText, Globe, Cpu, Zap, Clock, Shield } from "lucide-react";

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

function getFeatureCategories(t: ReturnType<typeof useI18n>["t"]): FeatureCategory[] {
  return [
    {
      name: t.features.categories.transcription.name,
      tagline: t.features.categories.transcription.tagline,
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
      name: t.features.categories.export.name,
      tagline: t.features.categories.export.tagline,
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
      name: t.features.categories.privacy.name,
      tagline: t.features.categories.privacy.tagline,
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
}

function TerminalHeader({ title }: { title: string }) {
  return (
    <div className="terminal-header">
      <div className="terminal-dot-red" />
      <div className="terminal-dot-yellow" />
      <div className="terminal-dot-green" />
      <div className="ml-4 text-xs font-mono text-muted-foreground">
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
    <div className="flex gap-1 overflow-x-auto pb-1 -mb-1">
      {categories.map((c, index) => {
        const active = c.name === activeCategory;
        return (
          <motion.button
            key={c.name}
            onClick={() => onSelect(c.name)}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.3 }}
            className={`
              px-4 py-2 text-sm font-mono whitespace-nowrap transition-all duration-300
              ${active
                ? "bg-primary text-primary-foreground shadow-[0_0_15px_hsl(186_100%_50%_/_0.3)]"
                : "bg-muted text-muted-foreground hover:text-foreground hover:bg-muted/80"
              }
            `}
          >
            {c.name}
          </motion.button>
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
    <div className="border border-border bg-card overflow-hidden">
      <div className="px-4 py-3 border-b border-border bg-muted/30">
        <div className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
          {category.tagline}
        </div>
      </div>

      <div className="divide-y divide-border">
        {category.features.map((f, index) => {
          const active = f.title === activeFeature;
          return (
            <motion.button
              key={f.title}
              onClick={() => onSelect(f.title)}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.3 }}
              className={`
                w-full text-left px-4 py-4 transition-all duration-300
                ${active 
                  ? "bg-primary/5 border-l-2 border-l-primary shadow-[inset_0_0_20px_hsl(186_100%_50%_/_0.05)]" 
                  : "border-l-2 border-l-transparent hover:bg-muted/20"
                }
              `}
            >
              <div className="flex items-start gap-3">
                <div
                  className={`
                    p-1.5 border transition-all duration-300
                    ${active 
                      ? "border-primary/50 text-primary shadow-[0_0_10px_hsl(186_100%_50%_/_0.3)]" 
                      : "border-border text-muted-foreground"
                    }
                  `}
                >
                  {f.icon}
                </div>
                <div className="min-w-0 flex-1">
                  <div
                    className={`
                      font-mono text-sm transition-colors duration-300
                      ${active ? "text-foreground" : "text-foreground/80"}
                    `}
                  >
                    {f.title}
                  </div>
                  <div className="text-sm text-muted-foreground line-clamp-2 mt-1">
                    {f.description}
                  </div>
                </div>
              </div>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}

function DetailPanel({ feature }: { feature: Feature }) {
  return (
    <div className="border border-border bg-card p-6 h-full flex flex-col relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-50 pointer-events-none" />
      
      <AnimatePresence mode="wait">
        <motion.div
          key={feature.title}
          initial={{ opacity: 0, y: 15, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -15, scale: 0.98 }}
          transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="flex-1 flex flex-col relative z-10"
        >
          <div className="flex items-center gap-3">
            <div className="p-2 border border-primary/30 text-primary relative">
              {feature.icon}
              <div className="absolute inset-0 bg-primary/20" style={{ filter: 'blur(8px)' }} />
            </div>
            <h3 className="text-xl font-mono font-semibold tracking-tight text-foreground">
              {feature.title}
            </h3>
          </div>

          <p className="mt-4 text-muted-foreground leading-relaxed">
            {feature.description}
          </p>

          <ul className="mt-6 space-y-3">
            {feature.bullets.map((b, index) => (
              <motion.li
                key={b}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
                className="flex gap-3 text-sm text-muted-foreground"
              >
                <span className="mt-1.5 h-1.5 w-1.5 bg-primary flex-shrink-0 shadow-[0_0_6px_hsl(186_100%_50%_/_0.5)]" />
                <span className="leading-relaxed">{b}</span>
              </motion.li>
            ))}
          </ul>

          <div className="mt-auto pt-8">
            <div className="border border-dashed border-border bg-muted/10 aspect-video flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 grid-bg opacity-20" />
              <div className="text-center relative z-10">
                <div className="w-12 h-12 border border-primary/30 flex items-center justify-center mx-auto mb-3 text-primary animate-breathe">
                  {feature.icon}
                </div>
                <span className="text-sm font-mono text-muted-foreground/70">
                  {feature.title}
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export function FeaturesSection() {
  const { t } = useI18n();
  const { ref, isVisible } = useScrollAnimation(0.1);

  const featureCategories = useMemo(() => getFeatureCategories(t), [t]);

  const [activeCategory, setActiveCategory] = useState(
    featureCategories[0].name
  );

  const activeCategoryData = useMemo(
    () =>
      featureCategories.find((c: FeatureCategory) => c.name === activeCategory) ??
      featureCategories[0],
    [activeCategory, featureCategories]
  );

  const [activeFeatureTitle, setActiveFeatureTitle] = useState(
    featureCategories[0]?.features[0]?.title
  );

  const handleCategoryChange = (name: string) => {
    setActiveCategory(name);
    const category = featureCategories.find((c: FeatureCategory) => c.name === name);
    if (category?.features[0]) {
      setActiveFeatureTitle(category.features[0].title);
    }
  };

  const activeFeature = useMemo(
    () =>
      activeCategoryData.features.find(
        (f: Feature) => f.title === activeFeatureTitle
      ) ?? activeCategoryData.features[0],
    [activeCategoryData, activeFeatureTitle]
  );

  return (
    <section
      ref={ref}
      className="relative section-spacing px-6 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/5 to-background" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] opacity-30 pointer-events-none">
        <div
          className="w-full h-full"
          style={{
            background: 'radial-gradient(ellipse at center, hsl(186 100% 50% / 0.1) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-12"
        >
          <div className="text-xs font-mono text-primary uppercase tracking-wider mb-3">
            // Features
          </div>
          <h2 className="text-4xl sm:text-5xl font-mono font-semibold tracking-tight text-foreground">
            {t.features.title}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.features.subtitle}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          animate={isVisible ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="terminal-window relative"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-primary/3 to-transparent opacity-50 pointer-events-none" />
          
          <TerminalHeader title={t.features.windowTitle} />

          <div className="p-5 sm:p-6 relative">
            <CategoryTabs
              categories={featureCategories}
              activeCategory={activeCategory}
              onSelect={handleCategoryChange}
            />

            <div className="mt-6 grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-6">
              <FeatureList
                category={activeCategoryData}
                activeFeature={activeFeatureTitle}
                onSelect={setActiveFeatureTitle}
              />

              <DetailPanel feature={activeFeature} />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
