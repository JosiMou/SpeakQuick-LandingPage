"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useI18n } from "@/lib/i18n/index";
import { Keyboard, Mic } from "lucide-react";

function AnimatedCounter({
  target,
  isVisible,
  duration = 1.5,
  delay = 0,
}: {
  target: number;
  isVisible: boolean;
  duration?: number;
  delay?: number;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    const delayMs = delay * 1000;
    const timeout = setTimeout(() => {
      const startTime = performance.now();
      const durationMs = duration * 1000;

      function step(currentTime: number) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / durationMs, 1);
        // Ease out cubic
        const eased = 1 - Math.pow(1 - progress, 3);
        setCount(Math.round(eased * target));
        if (progress < 1) {
          requestAnimationFrame(step);
        }
      }

      requestAnimationFrame(step);
    }, delayMs);

    return () => clearTimeout(timeout);
  }, [isVisible, target, duration, delay]);

  return <span>{count}</span>;
}

export function SpeedComparisonSection() {
  const { t } = useI18n();
  const { ref, isVisible } = useScrollAnimation<HTMLElement>(0.15);

  const ease = [0.25, 0.46, 0.45, 0.94] as const;

  return (
    <section ref={ref} className="relative section-spacing px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease }}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight mb-16 sm:mb-20">
            <span className="text-[#888B91]">{t.speedComparison.title.split(".")[0]}.</span>
            <br />
            <span className="text-[var(--text-primary)]">{t.speedComparison.title.split(".")[1]?.trim() || ""}</span>
          </h2>
        </motion.div>

        {/* Comparison cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-10 sm:mb-14">
          {/* Typing card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1, ease }}
            className="card-surface p-8 sm:p-10 flex flex-col items-center text-center"
          >
            <div className="p-3 rounded-2xl bg-white/5 mb-6">
              <Keyboard className="w-6 h-6 text-[#70757C]" />
            </div>
            <div className="text-6xl sm:text-7xl font-bold text-[#70757C] tabular-nums mb-1">
              <AnimatedCounter target={40} isVisible={isVisible} delay={0.3} />
            </div>
            <div className="text-sm text-[#70757C] uppercase tracking-wider mb-3">
              {t.speedComparison.unit}
            </div>
            <div className="text-base text-[#888B91]">
              {t.speedComparison.typingLabel}
            </div>
          </motion.div>

          {/* SpeakQuick card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2, ease }}
            className="card-surface p-8 sm:p-10 flex flex-col items-center text-center"
            style={{
              borderColor: "rgba(255, 255, 255, 0.08)",
            }}
          >
            <div className="p-3 rounded-2xl bg-white/5 mb-6">
              <Mic className="w-6 h-6 text-[#FAFAFA]" />
            </div>
            <div className="text-6xl sm:text-7xl font-bold text-[#FAFAFA] tabular-nums mb-1">
              <AnimatedCounter target={150} isVisible={isVisible} delay={0.4} duration={2} />
            </div>
            <div className="text-sm text-[#FAFAFA]/60 uppercase tracking-wider mb-3">
              {t.speedComparison.unit}
            </div>
            <div className="text-base text-[#FAFAFA]/80">
              {t.speedComparison.voiceLabel}
            </div>
          </motion.div>
        </div>

        {/* Speed bars */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.35, ease }}
          className="space-y-4 mb-10 sm:mb-14"
        >
          {/* Typing bar */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-[#70757C]">{t.speedComparison.barTyping}</span>
              <span className="text-sm text-[#70757C] tabular-nums">40 {t.speedComparison.unit}</span>
            </div>
            <div className="h-2 rounded-full bg-white/[0.04] overflow-hidden">
              <motion.div
                className="h-full rounded-full bg-white/10"
                initial={{ width: 0 }}
                animate={isVisible ? { width: "27%" } : {}}
                transition={{ duration: 1.2, delay: 0.5, ease }}
              />
            </div>
          </div>

          {/* Voice bar */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-[#888B91]">{t.speedComparison.barVoice}</span>
              <span className="text-sm text-[#FAFAFA] tabular-nums">150 {t.speedComparison.unit}</span>
            </div>
            <div className="h-2 rounded-full bg-white/[0.04] overflow-hidden">
              <motion.div
                className="h-full rounded-full"
                style={{
                  background: "linear-gradient(90deg, rgba(255,255,255,0.15), rgba(255,255,255,0.25))",
                }}
                initial={{ width: 0 }}
                animate={isVisible ? { width: "100%" } : {}}
                transition={{ duration: 1.6, delay: 0.6, ease }}
              />
            </div>
          </div>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5, ease }}
          className="text-base sm:text-lg text-[#888B91] max-w-lg"
        >
          {t.speedComparison.subtitle}
        </motion.p>
      </div>
    </section>
  );
}
