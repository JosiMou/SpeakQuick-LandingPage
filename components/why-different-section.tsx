"use client";

import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useI18n } from "@/lib/i18n/index";
import { Zap, Shield, Clock, Globe } from "lucide-react";
import { useRef, useState, useEffect } from "react";

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
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePosition({ x, y });
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      className="h-full"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div 
        className="tech-card h-full p-6 flex flex-col relative overflow-hidden"
        style={{
          ['--mouse-x' as string]: `${mousePosition.x}%`,
          ['--mouse-y' as string]: `${mousePosition.y}%`,
        }}
        animate={{
          scale: isHovered ? 1.02 : 1,
          y: isHovered ? -4 : 0,
        }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
      >
        <div 
          className="absolute inset-0 opacity-0 transition-opacity duration-300 pointer-events-none"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, hsl(186 100% 50% / 0.1) 0%, transparent 50%)`,
            opacity: isHovered ? 1 : 0,
          }}
        />

        <div className="flex items-start justify-between mb-6 relative z-10">
          <div 
            className={`p-2 border transition-all duration-300 ${
              isHovered 
                ? 'border-primary/50 text-primary' 
                : 'border-border text-muted-foreground'
            }`}
          >
            <Icon className="w-5 h-5" />
          </div>
          <div className="text-right">
            <div 
              className={`text-3xl font-mono font-bold transition-all duration-300 ${
                isHovered ? 'text-primary' : 'text-foreground'
              }`}
              style={{
                textShadow: isHovered ? '0 0 20px hsl(186 100% 50% / 0.5)' : 'none',
              }}
            >
              {card.metric}
            </div>
            <div className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
              {card.metricLabel}
            </div>
          </div>
        </div>

        <div className="flex-1 relative z-10">
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

        <div className="divider-fade mt-6 mb-4" />
        
        <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground relative z-10">
          <motion.span 
            className="w-1.5 h-1.5 bg-primary"
            animate={{
              boxShadow: isHovered ? '0 0 8px hsl(186 100% 50%)' : 'none',
            }}
          />
          {card.id === "local" && "Zero cloud dependency"}
          {card.id === "speed" && "Apple Silicon optimized"}
          {card.id === "accurate" && "Whisper v3 powered"}
          {card.id === "simple" && "Drag and drop"}
        </div>
      </motion.div>
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
      <div className="absolute inset-0 grid-bg opacity-15" />
      <div className="absolute inset-0 noise-overlay" />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] opacity-30 pointer-events-none">
        <div
          className="w-full h-full"
          style={{
            background: 'radial-gradient(ellipse at center, hsl(186 100% 50% / 0.08) 0%, transparent 60%)',
            filter: 'blur(80px)',
          }}
        />
      </div>

      <div className="container px-4 md:px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
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
