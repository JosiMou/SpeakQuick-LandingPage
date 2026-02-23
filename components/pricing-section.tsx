"use client";

import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useI18n } from "@/lib/i18n/index";
import { Button } from "@/components/ui/button";
import { Check, Mic } from "lucide-react";
import { SPEAKQUICK_DOWNLOAD_URL } from "@/lib/download-url";

export function PricingSection() {
  const { t } = useI18n();
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section id="pricing" ref={ref} className="relative section-spacing px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-16"
        >
          <span className="section-label text-white/40">Pricing</span>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4">
            {t.pricing.title}
          </h2>
          <p className="text-lg text-[#888B91] max-w-2xl mx-auto">
            {t.pricing.subtitle}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="max-w-md mx-auto"
        >
          <div className="card-surface rounded-[24px] p-8 flex flex-col">
            <div className="mb-6 text-center">
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-5xl font-bold text-[#FAFAFA]">
                  {t.pricing.price}
                </span>
                <span className="text-sm text-[#888B91]">
                  /{t.pricing.period}
                </span>
              </div>
              <p className="text-sm mt-2 text-[#888B91]">
                {t.pricing.description}
              </p>
              <p className="text-xs mt-1.5 text-white/50">
                {t.pricing.trialNote}
              </p>
            </div>

            <ul className="space-y-3 mb-8 flex-1">
              {t.pricing.features.map((feature, i) => (
                <motion.li
                  key={i}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -10 }}
                  animate={isVisible ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.05, duration: 0.3 }}
                >
                  <div className="mt-0.5 flex-shrink-0 text-white/40">
                    <Check className="w-4 h-4" />
                  </div>
                  <span className="text-sm text-[#FAFAFA]/80">
                    {feature}
                  </span>
                </motion.li>
              ))}
            </ul>

            <Button className="w-full" size="lg" asChild>
              <a
                href={SPEAKQUICK_DOWNLOAD_URL}
                target="_blank"
                rel="noopener noreferrer"
                data-track="pricing_download_clicked"
              >
                <Mic className="w-4 h-4" />
                {t.pricing.cta}
              </a>
            </Button>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center text-sm text-[#70757C] mt-8"
        >
          {t.pricing.guarantee}
        </motion.p>
      </div>
    </section>
  );
}
