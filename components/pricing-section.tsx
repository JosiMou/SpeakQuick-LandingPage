"use client";

import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useI18n } from "@/lib/i18n/index";
import { Button } from "@/components/ui/button";
import { Check, Zap } from "lucide-react";

interface PricingTier {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  cta: string;
  highlighted: boolean;
  badge?: string;
}

function getPricingTiers(t: ReturnType<typeof useI18n>["t"]): PricingTier[] {
  return [
    {
      name: t.pricing.tiers.free.name,
      price: t.pricing.tiers.free.price,
      period: "",
      description: t.pricing.tiers.free.description,
      features: t.pricing.features.free,
      cta: t.pricing.tiers.free.cta,
      highlighted: false,
    },
    {
      name: t.pricing.tiers.full.name,
      price: t.pricing.tiers.full.price,
      period: t.pricing.tiers.full.period,
      description: t.pricing.tiers.full.description,
      features: t.pricing.features.full,
      cta: t.pricing.tiers.full.cta,
      highlighted: true,
      badge: t.pricing.tiers.full.badge,
    },
  ];
}

export function PricingSection() {
  const { t } = useI18n();
  const { ref, isVisible } = useScrollAnimation(0.1);
  
  const pricingTiers = getPricingTiers(t);

  return (
    <section ref={ref} className="w-full section-spacing relative">
      <div className="container px-4 md:px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`
                relative p-6 flex flex-col border
                ${tier.highlighted
                  ? "bg-primary/5 border-primary/30"
                  : "bg-card border-border"
                }
              `}
            >
              {tier.highlighted && tier.badge && (
                <div className="absolute -top-3 left-4">
                  <div className="flex items-center gap-1.5 px-3 py-1 bg-primary text-primary-foreground text-xs font-mono uppercase tracking-wider">
                    <Zap className="w-3 h-3" />
                    {tier.badge}
                  </div>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-lg font-mono font-semibold mb-2 text-foreground">
                  {tier.name}
                </h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-mono font-bold text-foreground">
                    {tier.price}
                  </span>
                  {tier.period && (
                    <span className="text-sm font-mono text-muted-foreground">
                      /{tier.period}
                    </span>
                  )}
                </div>
                <p className="text-sm mt-2 text-muted-foreground">
                  {tier.description}
                </p>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {tier.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <div
                      className={`
                        mt-0.5 w-4 h-4 flex items-center justify-center flex-shrink-0
                        ${tier.highlighted ? "text-primary" : "text-muted-foreground"}
                      `}
                    >
                      <Check className="w-3 h-3" />
                    </div>
                    <span className="text-sm text-foreground/80">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full font-mono ${tier.highlighted ? "" : "border-border"}`}
                variant={tier.highlighted ? "default" : "outline"}
              >
                {tier.cta}
              </Button>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center text-sm text-muted-foreground mt-8 font-mono"
        >
          {t.pricing.guarantee}
        </motion.p>
      </div>
    </section>
  );
}
