"use client";

import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useI18n } from "@/lib/i18n/index";
import { Zap, Shield, Clock, Globe } from "lucide-react";

const ACCENT_HSL = "186 100% 50%";

function getDifferentiatorCards(t: ReturnType<typeof useI18n>["t"]) {
  return [
    {
      id: "local",
      title: t.whyDifferent.cards.local.title,
      subhead: t.whyDifferent.cards.local.subhead,
      description: t.whyDifferent.cards.local.description,
      icon: Shield,
      metric: "100%",
      metricLabel: "Local",
    },
    {
      id: "speed",
      title: t.whyDifferent.cards.speed.title,
      subhead: t.whyDifferent.cards.speed.subhead,
      description: t.whyDifferent.cards.speed.description,
      icon: Zap,
      metric: "10x",
      metricLabel: "Faster",
    },
    {
      id: "accurate",
      title: t.whyDifferent.cards.accurate.title,
      subhead: t.whyDifferent.cards.accurate.subhead,
      description: t.whyDifferent.cards.accurate.description,
      icon: Globe,
      metric: "99+",
      metricLabel: "Languages",
    },
    {
      id: "simple",
      title: t.whyDifferent.cards.simple.title,
      subhead: t.whyDifferent.cards.simple.subhead,
      description: t.whyDifferent.cards.simple.description,
      icon: Clock,
      metric: "1",
      metricLabel: "Click",
    },
  ];
}

interface CardType {
  id: string;
  title: string;
  subhead: string;
  description: string;
  icon: typeof Shield;
  metric: string;
  metricLabel: string;
}

function MetricCard({
  card,
  index,
  isVisible,
}: {
  card: CardType;
  index: number;
  isVisible: boolean;
}) {
  const Icon = card.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="h-full"
    >
      <div className="tech-card h-full p-6 flex flex-col">
        <div className="flex items-start justify-between mb-6">
          <div className="p-2 border border-border text-muted-foreground">
            <Icon className="w-5 h-5" />
          </div>
          <div className="text-right">
            <div className="text-3xl font-mono font-bold text-primary">
              {card.metric}
            </div>
            <div className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
              {card.metricLabel}
            </div>
          </div>
        </div>

        <div className="flex-1">
          <h3 className="text-lg font-mono font-semibold tracking-tight text-foreground mb-1">
            {card.title}
          </h3>
          <p className="text-sm font-medium text-muted-foreground mb-3">
            {card.subhead}
          </p>
          <p className="text-sm text-muted-foreground/80 leading-relaxed">
            {card.description}
          </p>
        </div>

        <div className="divider mt-6 pt-4">
          <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground">
            <span className="w-1.5 h-1.5 bg-primary" />
            {card.id === "local" && "Zero cloud dependency"}
            {card.id === "speed" && "Apple Silicon optimized"}
            {card.id === "accurate" && "Whisper v3 powered"}
            {card.id === "simple" && "Drag and drop"}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function WhyDifferentSection() {
  const { t } = useI18n();
  const { ref, isVisible } = useScrollAnimation<HTMLElement>(0.15);
  
  const differentiatorCards = getDifferentiatorCards(t);

  return (
    <section
      ref={ref}
      className="w-full section-spacing relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-muted/20" />
      <div className="absolute inset-0 grid-bg opacity-20" />

      <div className="container px-4 md:px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mb-12"
        >
          <div className="text-xs font-mono text-primary uppercase tracking-wider mb-3">
            // Why SpeakQuick
          </div>
          <h2 className="text-3xl sm:text-4xl font-mono font-semibold tracking-tight text-foreground mb-4">
            {t.whyDifferent.title}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t.whyDifferent.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {differentiatorCards.map((card: CardType, index: number) => (
            <MetricCard
              key={card.id}
              card={card}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
