"use client";

import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useI18n } from "@/lib/i18n/index";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { SPEAKQUICK_DOWNLOAD_URL } from "@/lib/download-url";

function AppleLogo({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 814 1000" fill="currentColor">
      <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76.5 0-103.7 40.8-165.9 40.8s-105.6-57.8-155.5-127.4c-58.3-81.1-105.9-207.7-105.9-328.6 0-193.2 125.7-295.7 249.4-295.7 65.7 0 120.4 43.1 161.6 43.1 39.2 0 100.4-45.7 174.3-45.7 28.2 0 129.4 2.5 196.2 95.3zM554.1 159.4c31.1-36.9 53.1-88.1 53.1-139.3 0-7.1-.6-14.3-1.9-20.1-50.6 1.9-110.8 33.7-147.1 75.8-28.8 32.4-54.4 83.7-54.4 135.5 0 7.8 1.3 15.6 1.9 18.1 3.2.6 8.4 1.3 13.6 1.3 45.4 0 102.5-30.4 134.8-71.3z" />
    </svg>
  );
}

export function CtaSection() {
  const { t } = useI18n();
  const { ref, isVisible } = useScrollAnimation<HTMLElement>(0.15);

  const ease = [0.25, 0.46, 0.45, 0.94] as const;

  return (
    <section ref={ref} className="relative section-spacing px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease }}
          className="card-surface rounded-3xl p-12 sm:p-16 lg:p-20 text-center"
          style={{
            background: "linear-gradient(180deg, rgb(18, 18, 20) 0%, rgb(14, 14, 16) 100%)",
            borderColor: "rgba(255, 255, 255, 0.06)",
          }}
        >
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease }}
            className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#FAFAFA] mb-4"
          >
            {t.ctaSection.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2, ease }}
            className="text-base sm:text-lg text-[#888B91] mb-10"
          >
            {t.ctaSection.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3, ease }}
          >
            <Button size="lg" className="group" asChild>
              <a
                href={SPEAKQUICK_DOWNLOAD_URL}
                target="_blank"
                rel="noopener noreferrer"
                data-track="cta_section_download_clicked"
              >
                <AppleLogo className="w-4 h-4" />
                {t.ctaSection.button}
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
