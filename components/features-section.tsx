"use client";

import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useI18n } from "@/lib/i18n/index";
import { Shield, Users, Globe, Zap, FileText, Cpu } from "lucide-react";

const FEATURE_CARDS = [
  {
    icon: Shield,
    color: "#DD55E7",
    bg: "rgb(28, 3, 31)",
    gradient: "linear-gradient(135deg, rgba(221, 85, 231, 0.12) 0%, rgba(221, 85, 231, 0.02) 100%)",
  },
  {
    icon: Users,
    color: "#1CECBB",
    bg: "rgb(3, 19, 16)",
    gradient: "linear-gradient(135deg, rgba(28, 236, 187, 0.12) 0%, rgba(28, 236, 187, 0.02) 100%)",
  },
  {
    icon: Globe,
    color: "#0088FF",
    bg: "rgb(3, 7, 25)",
    gradient: "linear-gradient(135deg, rgba(0, 136, 255, 0.12) 0%, rgba(0, 136, 255, 0.02) 100%)",
  },
  {
    icon: Zap,
    color: "#FF5252",
    bg: "rgb(32, 4, 1)",
    gradient: "linear-gradient(135deg, rgba(255, 82, 82, 0.12) 0%, rgba(255, 82, 82, 0.02) 100%)",
  },
  {
    icon: FileText,
    color: "#17C253",
    bg: "rgb(2, 22, 11)",
    gradient: "linear-gradient(135deg, rgba(23, 194, 83, 0.12) 0%, rgba(23, 194, 83, 0.02) 100%)",
  },
  {
    icon: Cpu,
    color: "#FFDD00",
    bg: "rgb(25, 19, 3)",
    gradient: "linear-gradient(135deg, rgba(255, 221, 0, 0.12) 0%, rgba(255, 221, 0, 0.02) 100%)",
  },
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
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mb-16"
        >
          <span className="section-label text-[#DD55E7]">Features</span>
          <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight">
            {t.features.title}
          </h2>
          <p className="mt-4 text-lg text-[#888B91] max-w-2xl">
            {t.features.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {FEATURE_CARDS.map((card, i) => {
            const Icon = card.icon;
            const cardData = t.features.cards[i];

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
                className="group rounded-[20px] p-6 transition-colors duration-300"
                style={{
                  background: card.gradient,
                  border: `1px solid rgba(255, 255, 255, 0.06)`,
                }}
              >
                <div
                  className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl"
                  style={{ background: `${card.color}15` }}
                >
                  <Icon
                    className="h-5 w-5"
                    style={{ color: card.color }}
                  />
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
