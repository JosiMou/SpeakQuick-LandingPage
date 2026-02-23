"use client";

import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useI18n } from "@/lib/i18n/index";
import { Zap, Shield, Globe, Clock } from "lucide-react";

const CARDS = [
  { id: "local" as const, icon: Shield, metric: "100%", metricLabel: "Local" },
  { id: "speed" as const, icon: Zap, metric: "10x", metricLabel: "Faster" },
  { id: "accurate" as const, icon: Globe, metric: "25+", metricLabel: "Languages" },
  { id: "simple" as const, icon: Clock, metric: "1", metricLabel: "Click" },
];

export function WhyDifferentSection() {
  const { t } = useI18n();
  const { ref, isVisible } = useScrollAnimation<HTMLElement>(0.15);

  return (
    <section ref={ref} className="relative section-spacing px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="max-w-2xl mb-16"
        >
          <span className="section-label text-white/40">Why SpeakQuick</span>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4">
            {t.whyDifferent.title}
          </h2>
          <p className="text-lg text-[#888B91]">
            {t.whyDifferent.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {CARDS.map((card, index) => {
            const Icon = card.icon;
            const data = t.whyDifferent.cards[card.id];

            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                className="card-surface p-6 flex flex-col hover:border-white/10 transition-colors duration-300"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="p-2 rounded-xl bg-white/5">
                    <Icon className="w-5 h-5 text-[#888B91]" />
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-[#FAFAFA]">
                      {card.metric}
                    </div>
                    <div className="text-xs text-[#70757C] uppercase tracking-wider">
                      {card.metricLabel}
                    </div>
                  </div>
                </div>

                <div className="flex-1">
                  <h3 className="text-base font-semibold text-[#FAFAFA] mb-1">
                    {data.title}
                  </h3>
                  <p className="text-sm font-medium text-[#888B91] mb-3">
                    {data.subhead}
                  </p>
                  <p className="text-sm text-[#70757C] leading-relaxed">
                    {data.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
