"use client";

import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useI18n } from "@/lib/i18n/index";
import { Shield, Users, Globe, Keyboard, FileText, Cpu } from "lucide-react";

const FEATURE_ICONS = [Keyboard, Shield, Users, Globe, FileText, Cpu];

export function FeaturesSection() {
  const { t } = useI18n();
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section ref={ref} className="relative section-spacing px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {FEATURE_ICONS.map((Icon, i) => {
            const cardData = t.features.cards[i];
            const isComingSoon = cardData?.comingSoon;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.5,
                  delay: 0.1 + i * 0.08,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
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
    </section>
  );
}
