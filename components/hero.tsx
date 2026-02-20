"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Mic, ArrowDown, Zap } from "lucide-react";
import { useI18n } from "@/lib/i18n/index";
import { LanguageSwitcher } from "./language-switcher";

function GridBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10">
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
    </div>
  );
}

function TechnicalWaveform() {
  const bars = 32;
  
  return (
    <div className="flex items-end justify-center gap-[2px] h-20">
      {[...Array(bars)].map((_, i) => {
        const center = bars / 2;
        const distance = Math.abs(i - center);
        const baseHeight = Math.max(20, 100 - distance * 6);
        
        return (
          <motion.div
            key={i}
            className="w-[3px] bg-primary/80"
            style={{ 
              borderRadius: 0,
              height: `${baseHeight}%`,
            }}
            animate={{
              scaleY: [0.4, 1, 0.6, 0.9, 0.5],
            }}
            transition={{
              duration: 0.8,
              repeat: Infinity,
              delay: i * 0.03,
              ease: "easeInOut",
            }}
          />
        );
      })}
    </div>
  );
}

function TerminalDemo() {
  const { t, language } = useI18n();
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="relative w-full max-w-3xl mx-auto"
    >
      <div className="terminal-window">
        <div className="terminal-header">
          <div className="terminal-dot-red" />
          <div className="terminal-dot-yellow" />
          <div className="terminal-dot-green" />
          <div className="ml-4 text-xs font-mono text-muted-foreground">
            {t.hero.demo.windowTitle}
          </div>
        </div>

        <div className="p-6">
          <div className="flex items-center gap-4 mb-6 pb-4 border-b border-border">
            <div className="w-10 h-10 border border-primary/30 flex items-center justify-center">
              <Mic className="w-5 h-5 text-primary" />
            </div>
            <div className="flex-1">
              <div className="text-sm font-mono text-foreground">{t.hero.demo.fileName}</div>
              <div className="text-xs font-mono text-muted-foreground">{t.hero.demo.duration}</div>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-primary animate-pulse" />
              <span className="text-xs font-mono text-primary uppercase">{t.hero.demo.transcribing}</span>
            </div>
          </div>

          <div className="mb-6">
            <TechnicalWaveform />
          </div>

          <div className="space-y-4 font-mono text-sm">
            <div className="flex gap-3">
              <div className="w-7 h-7 border border-border flex items-center justify-center text-xs text-muted-foreground flex-shrink-0">
                01
              </div>
              <div className="flex-1">
                <div className="text-xs text-muted-foreground mb-1">00:00:15</div>
                <p className="text-foreground/90">
                  {language === "de"
                    ? "Der Hauptpunkt aus diesem Quartal ist, dass wir uns darauf konzentrieren müssen, die Transkriptionsgenauigkeit für Fachterminologie zu verbessern."
                    : "So the main takeaway from this quarter is that we need to focus on improving our transcription accuracy for technical terminology."}
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="w-7 h-7 border border-border flex items-center justify-center text-xs text-muted-foreground flex-shrink-0">
                02
              </div>
              <div className="flex-1">
                <div className="text-xs text-muted-foreground mb-1">00:00:42</div>
                <p className="text-foreground/90">
                  {language === "de"
                    ? "Absolut. Ich habe SpeakQuick mit unseren medizinischen Aufnahmen getestet und die Sprechererkennung ist unglaublich präzise."
                    : "Absolutely. I have been testing SpeakQuick with our medical recordings and the speaker detection is incredibly accurate."}
                </p>
              </div>
            </div>
            <div className="flex gap-3 opacity-50">
              <div className="w-7 h-7 border border-border flex items-center justify-center text-xs text-muted-foreground flex-shrink-0">
                03
              </div>
              <div className="flex-1">
                <div className="text-xs text-muted-foreground mb-1">00:01:03</div>
                <p className="text-foreground/90">
                  {language === "de"
                    ? "Die Exportoptionen sind auch sehr flexibel..."
                    : "The export options are also really flexible..."}
                  <span className="animate-cursor-blink">|</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function Hero() {
  const { t } = useI18n();

  return (
    <section className="relative min-h-screen pt-24 md:pt-32 pb-16 overflow-hidden">
      <GridBackground />

      <div className="absolute top-4 right-4 z-50">
        <LanguageSwitcher />
      </div>

      <div className="flex flex-col items-center text-center max-w-4xl mx-auto px-4 mb-8 md:mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 border border-primary/30 bg-primary/5 mb-6"
        >
          <Zap className="w-3.5 h-3.5 text-primary" />
          <span className="text-xs font-mono text-primary uppercase tracking-wider">
            {t.hero.badge}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] font-display"
        >
          {t.hero.headline}
          <span className="text-primary block sm:inline sm:ml-3">
            {t.hero.headlineHighlight}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-2xl"
        >
          {t.hero.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 flex flex-col sm:flex-row gap-4 items-center"
        >
          <Button size="lg" className="font-mono">
            <Mic className="w-4 h-4 mr-2" />
            {t.hero.downloadButton}
          </Button>
          <Button size="lg" variant="outline" className="font-mono">
            {t.hero.watchDemo}
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-6 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs font-mono text-muted-foreground"
        >
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 bg-primary" />
            {t.hero.metaInfo.macOS}
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 bg-primary" />
            {t.hero.metaInfo.trial}
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 bg-primary" />
            {t.hero.metaInfo.noSubscription}
          </span>
        </motion.div>
      </div>

      <TerminalDemo />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-muted-foreground"
        >
          <span className="text-xs font-mono uppercase tracking-wider">{t.hero.scrollText}</span>
          <ArrowDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}
