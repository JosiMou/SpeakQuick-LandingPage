"use client";

import { Button } from "@/components/ui/button";
function AppleLogo({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 814 1000" fill="currentColor">
      <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76.5 0-103.7 40.8-165.9 40.8s-105.6-57.8-155.5-127.4c-58.3-81.1-105.9-207.7-105.9-328.6 0-193.2 125.7-295.7 249.4-295.7 65.7 0 120.4 43.1 161.6 43.1 39.2 0 100.4-45.7 174.3-45.7 28.2 0 129.4 2.5 196.2 95.3zM554.1 159.4c31.1-36.9 53.1-88.1 53.1-139.3 0-7.1-.6-14.3-1.9-20.1-50.6 1.9-110.8 33.7-147.1 75.8-28.8 32.4-54.4 83.7-54.4 135.5 0 7.8 1.3 15.6 1.9 18.1 3.2.6 8.4 1.3 13.6 1.3 45.4 0 102.5-30.4 134.8-71.3z" />
    </svg>
  );
}
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
      <h1 className="max-w-4xl font-serif">
        <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal italic tracking-normal leading-[1.15] text-white/85 hero-text-glow">
          {t.hero.headline}
        </span>
        <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal italic tracking-normal leading-[1.15] mt-1 hero-gradient-text">
          {t.hero.headlineHighlight}
        </span>
      </h1>

      <div className="mt-8 max-w-lg space-y-2">
        <p className="text-base sm:text-lg font-normal text-white/70 tracking-wide">
          {t.hero.subtitle}
        </p>
        <p className="text-sm sm:text-base font-normal text-white/40 tracking-wider">
          {t.hero.subtitleLight}
        </p>
      </div>

      <div className="mt-10 flex flex-col sm:flex-row gap-3 items-center">
        <Button size="lg" asChild>
          <a
            href={SPEAKQUICK_DOWNLOAD_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-track="hero_download_clicked"
          >
            <AppleLogo className="w-4 h-4" />
            {t.hero.downloadButton}
          </a>
        </Button>
        <Button
          size="lg"
          variant="outline"
          onClick={onPlayDemo}
        >
          {t.hero.watchDemo}
        </Button>
      </div>
    </div>
  );
}
