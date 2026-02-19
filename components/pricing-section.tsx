"use client";

import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Button } from "@/components/ui/button";
import { Check, Sparkles } from "lucide-react";

const PRICING_TIERS = [
  {
    name: "Free Trial",
    price: "Free",
    period: "",
    description: "Try before you buy. No credit card required.",
    features: [
      "60 minutes of transcription",
      "All export formats",
      "Speaker detection",
      "Local processing",
      "macOS app",
    ],
    cta: "Download Free",
    highlighted: false,
  },
  {
    name: "Full Version",
    price: "$49",
    period: "one-time",
    description: "Lifetime license. All future updates included.",
    features: [
      "Unlimited transcription",
      "All export formats",
      "Speaker detection",
      "Local processing",
      "Batch processing",
      "Priority support",
      "Lifetime updates",
    ],
    cta: "Buy Now",
    highlighted: true,
  },
];

export function PricingSection() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section ref={ref} className="w-full section-spacing relative">
      <div className="container px-4 md:px-6 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground mb-4">
            Simple Pricing
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            One-time purchase. No subscriptions, no recurring fees. Own SpeakQuick forever.
          </p>
        </motion.div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {PRICING_TIERS.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`
                relative rounded-2xl p-6 flex flex-col
                ${
                  tier.highlighted
                    ? "bg-foreground text-background shadow-xl scale-105 md:scale-110"
                    : "bg-card border border-border"
                }
              `}
            >
              {/* Popular badge */}
              {tier.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-medium">
                    <Sparkles className="w-3 h-3" />
                    Most Popular
                  </div>
                </div>
              )}

              {/* Tier info */}
              <div className="mb-6">
                <h3
                  className={`text-lg font-semibold mb-2 ${
                    tier.highlighted ? "text-background" : "text-foreground"
                  }`}
                >
                  {tier.name}
                </h3>
                <div className="flex items-baseline gap-1">
                  <span
                    className={`text-4xl font-bold ${
                      tier.highlighted ? "text-background" : "text-foreground"
                    }`}
                  >
                    {tier.price}
                  </span>
                  {tier.period && (
                    <span
                      className={`text-sm ${
                        tier.highlighted
                          ? "text-background/70"
                          : "text-muted-foreground"
                      }`}
                    >
                      /{tier.period}
                    </span>
                  )}
                </div>
                <p
                  className={`text-sm mt-2 ${
                    tier.highlighted
                      ? "text-background/80"
                      : "text-muted-foreground"
                  }`}
                >
                  {tier.description}
                </p>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8 flex-1">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div
                      className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                        tier.highlighted
                          ? "bg-background/20"
                          : "bg-primary/10"
                      }`}
                    >
                      <Check
                        className={`w-3 h-3 ${
                          tier.highlighted
                            ? "text-background"
                            : "text-primary"
                        }`}
                      />
                    </div>
                    <span
                      className={`text-sm ${
                        tier.highlighted
                          ? "text-background/90"
                          : "text-foreground/80"
                      }`}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button
                className={`w-full ${
                  tier.highlighted
                    ? "bg-background text-foreground hover:bg-background/90"
                    : ""
                }`}
                variant={tier.highlighted ? "default" : "outline"}
              >
                {tier.cta}
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Trust note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center text-sm text-muted-foreground mt-8"
        >
          30-day money-back guarantee. No questions asked.
        </motion.p>
      </div>
    </section>
  );
}
