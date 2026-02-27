"use client";

import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useI18n } from "@/lib/i18n/index";
import { Shield, Users, Globe, Keyboard, FileText, Cpu } from "lucide-react";

const ease = [0.25, 0.46, 0.45, 0.94] as const;

interface FeatureCard {
  icon: typeof Keyboard;
  index: number;
  iconTint?: string;
}

const HERO_CARD: FeatureCard = { icon: Keyboard, index: 0 };

const MEDIUM_CARDS: FeatureCard[] = [
  { icon: Shield, index: 1, iconTint: "rgba(59, 130, 246, 0.06)" },
  { icon: Cpu, index: 5, iconTint: "rgba(168, 85, 247, 0.06)" },
];

const SMALL_CARDS: FeatureCard[] = [
  { icon: Users, index: 2 },
  { icon: Globe, index: 3 },
  { icon: FileText, index: 4 },
];

export function FeaturesSection() {
  const { t } = useI18n();
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section ref={ref} className="relative section-spacing px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease }}
          className="mb-16"
        >
          <span className="section-label text-white/40">Features</span>
          <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight">
            {t.features.title}
          </h2>
          <p className="mt-4 text-lg text-[#888B91] max-w-2xl">
            {t.features.subtitle}
          </p>
        </motion.div>

        <div className="flex flex-col gap-4">
          {/* Hero card: Push to Talk */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1, ease }}
            className="card-surface rounded-[20px] p-8 sm:p-10 relative"
            style={{ borderColor: "rgba(255, 255, 255, 0.08)" }}
          >
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6">
              <div className="flex-1 max-w-xl">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-white/[0.06]">
                  <HERO_CARD.icon className="h-6 w-6 text-white/70" />
                </div>
                <h3 className="text-xl font-semibold text-[#FAFAFA] mb-2">
                  {t.features.cards[0]?.title}
                </h3>
                <p className="text-sm sm:text-base leading-relaxed text-[#888B91]">
                  {t.features.cards[0]?.description}
                </p>
              </div>

              {/* Keyboard shortcut visualization */}
              <div className="hidden sm:flex items-center gap-2 pt-2 select-none" aria-hidden="true">
                <span className="px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.06] text-sm text-white/40 font-mono">
                  Fn
                </span>
                <span className="text-white/20 text-sm">hold</span>
                <span className="text-white/20 mx-1">&rarr;</span>
                <span className="text-white/20 text-sm">speak</span>
                <span className="text-white/20 mx-1">&rarr;</span>
                <span className="text-white/20 text-sm">release</span>
                <span className="text-white/20 mx-1">&rarr;</span>
                <span className="px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.06] text-sm text-white/40 font-mono">
                  text
                </span>
              </div>
            </div>
          </motion.div>

          {/* Medium cards: Works Offline + Apple Silicon */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {MEDIUM_CARDS.map((card, i) => {
              const Icon = card.icon;
              const cardData = t.features.cards[card.index];
              return (
                <motion.div
                  key={card.index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.18 + i * 0.08, ease }}
                  className="card-surface rounded-[20px] p-7 relative"
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl" style={{ background: card.iconTint || "rgba(255,255,255,0.04)" }}>
                    <Icon className="h-5 w-5 text-white/60" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#FAFAFA]">
                    {cardData?.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#888B91]">
                    {cardData?.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Small cards: Speaker Detection, 25+ Languages, Smart Export */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {SMALL_CARDS.map((card, i) => {
              const Icon = card.icon;
              const cardData = t.features.cards[card.index];
              const isComingSoon = cardData?.comingSoon;
              return (
                <motion.div
                  key={card.index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.08, ease }}
                  className={`card-surface rounded-[20px] p-6 relative${isComingSoon ? " opacity-60" : ""}`}
                >
                  {isComingSoon && (
                    <span className="absolute top-4 right-4 text-[10px] font-medium uppercase tracking-wider text-white/40 border border-white/10 rounded-full px-2.5 py-0.5">
                      Coming Soon
                    </span>
                  )}
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.04]">
                    <Icon className="h-5 w-5 text-white/60" />
                  </div>
                  <h3 className="text-base font-semibold text-[#FAFAFA]">
                    {cardData?.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#888B91]">
                    {cardData?.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
