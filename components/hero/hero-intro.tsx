"use client";

import { Button } from "@/components/ui/button";
import { Mic, Zap } from "lucide-react";
import { useI18n } from "@/lib/i18n/index";
import { SPEAKQUICK_DOWNLOAD_URL } from "@/lib/download-url";

interface HeroIntroProps {
  progress: number;
  onPlayDemo: () => void;
}

export function HeroIntro({ progress, onPlayDemo }: HeroIntroProps) {
  const { t } = useI18n();

  const opacity = Math.max(0, 1 - progress / 0.2);

  if (opacity <= 0) return null;

  return (
    <div
      className="absolute inset-0 z-10 flex flex-col items-center justify-center px-4 text-center"
      style={{ opacity }}
    >
      <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-primary/30 bg-primary/5 mb-6 animate-glow-pulse">
        <Zap className="w-3.5 h-3.5 text-primary" />
        <span className="text-xs font-mono text-primary uppercase tracking-wider">
          {t.hero.badge}
        </span>
      </div>

      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] font-display max-w-4xl">
        {t.hero.headline}
        <span className="text-primary block sm:inline sm:ml-3 glow-text">
          {t.hero.headlineHighlight}
        </span>
      </h1>

      <p className="mt-6 text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-2xl">
        {t.hero.subtitle}
      </p>

      <div className="mt-8 flex flex-col sm:flex-row gap-4 items-center">
        <Button size="lg" className="font-mono" asChild>
          <a
            href={SPEAKQUICK_DOWNLOAD_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-track="hero_download_clicked"
          >
            <Mic className="w-4 h-4 mr-2" />
            {t.hero.downloadButton}
          </a>
        </Button>
        <Button
          size="lg"
          variant="outline"
          className="font-mono"
          onClick={onPlayDemo}
        >
          {t.hero.watchDemo}
        </Button>
      </div>

      <div className="mt-6 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs font-mono text-muted-foreground">
        <span className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 bg-primary animate-pulse" />
          {t.hero.metaInfo.macOS}
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 bg-primary animate-pulse" />
          {t.hero.metaInfo.trial}
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 bg-primary animate-pulse" />
          {t.hero.metaInfo.noSubscription}
        </span>
      </div>
    </div>
  );
}
