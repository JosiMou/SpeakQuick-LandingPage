"use client";

import { useI18n } from "@/lib/i18n/index";

interface ScrollHintProps {
  progress: number;
}

export function ScrollHint({ progress }: ScrollHintProps) {
  const { t } = useI18n();
  const opacity = Math.max(0, 1 - progress / 0.1);

  if (opacity <= 0) return null;

  return (
    <div
      className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-white/60"
      style={{ opacity }}
    >
      <span className="text-sm font-mono">{t.hero.scrollText}</span>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="animate-bounce"
      >
        <path d="M12 5v14M19 12l-7 7-7-7" />
      </svg>
    </div>
  );
}
