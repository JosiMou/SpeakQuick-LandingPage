"use client";

import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useI18n } from "@/lib/i18n/index";
import { Button } from "@/components/ui/button";
import { Check, Mic } from "lucide-react";
import { useState } from "react";
import { SPEAKQUICK_DOWNLOAD_URL } from "@/lib/download-url";

export function PricingSection() {
  const { t } = useI18n();
  const { ref, isVisible } = useScrollAnimation(0.1);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section ref={ref} className="w-full section-spacing relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-muted/10 via-transparent to-muted/10" />

      <div className="container px-4 md:px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-12"
        >
          <div className="text-xs font-mono text-primary uppercase tracking-wider mb-3">
            // Pricing
          </div>
          <h2 className="text-3xl sm:text-4xl font-mono font-semibold tracking-tight text-foreground mb-4">
            {t.pricing.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.pricing.subtitle}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="max-w-md mx-auto"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <motion.div
            className="relative p-8 flex flex-col border bg-primary/5 border-primary/30 overflow-hidden"
            animate={{
              scale: isHovered ? 1.02 : 1,
              y: isHovered ? -4 : 0,
            }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            style={{
              boxShadow: isHovered
                ? '0 0 30px hsl(186 100% 50% / 0.2), 0 20px 40px hsl(0 0% 0% / 0.3)'
                : '0 0 20px hsl(186 100% 50% / 0.1)',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent pointer-events-none" />

            <motion.div
              className="absolute inset-0 opacity-30 pointer-events-none"
              style={{
                background: 'radial-gradient(circle at 50% 0%, hsl(186 100% 50% / 0.15) 0%, transparent 50%)',
              }}
              animate={{ opacity: isHovered ? 0.5 : 0.3 }}
            />

            <div className="mb-6 relative z-10 text-center">
              <div className="flex items-baseline justify-center gap-1">
                <span
                  className={`text-5xl font-mono font-bold transition-all duration-300 ${
                    isHovered ? 'text-primary' : 'text-foreground'
                  }`}
                  style={{
                    textShadow: isHovered ? '0 0 20px hsl(186 100% 50% / 0.5)' : 'none',
                  }}
                >
                  {t.pricing.price}
                </span>
                <span className="text-sm font-mono text-muted-foreground">
                  /{t.pricing.period}
                </span>
              </div>
              <p className="text-sm mt-2 text-muted-foreground">
                {t.pricing.description}
              </p>
              <p className="text-xs mt-1.5 font-mono text-primary">
                {t.pricing.trialNote}
              </p>
            </div>

            <ul className="space-y-3 mb-8 flex-1 relative z-10">
              {t.pricing.features.map((feature, featureIndex) => (
                <motion.li
                  key={featureIndex}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -10 }}
                  animate={isVisible ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + featureIndex * 0.05, duration: 0.3 }}
                >
                  <div className="mt-0.5 w-4 h-4 flex items-center justify-center flex-shrink-0 text-primary">
                    <Check className="w-3 h-3" />
                  </div>
                  <span className="text-sm text-foreground/80">
                    {feature}
                  </span>
                </motion.li>
              ))}
            </ul>

            <Button className="w-full font-mono relative z-10" size="lg" asChild>
              <a
                href={SPEAKQUICK_DOWNLOAD_URL}
                target="_blank"
                rel="noopener noreferrer"
                data-track="pricing_download_clicked"
              >
                <Mic className="w-4 h-4 mr-2" />
                {t.pricing.cta}
              </a>
            </Button>
          </motion.div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center text-sm text-muted-foreground mt-8 font-mono"
        >
          {t.pricing.guarantee}
        </motion.p>
      </div>
    </section>
  );
}
