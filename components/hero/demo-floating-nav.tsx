"use client";

import { useI18n } from "@/lib/i18n/index";

interface DemoFloatingNavProps {
  progress: number;
}

export function DemoFloatingNav({ progress }: DemoFloatingNavProps) {
  const { t } = useI18n();
  const opacity = Math.max(0, Math.min(1, (progress - 0.25) / 0.1));

  if (opacity <= 0) return <div />;

  const items = t.hero.demo.navItems;

  return (
    <div style={{ opacity }}>
      <nav className="flex items-center gap-1 rounded-full border border-white/10 bg-black/60 px-2 py-1.5 backdrop-blur-xl">
        {items.map((item: string, i: number) => (
          <span
            key={i}
            className="px-3 py-1 text-xs text-white/50 transition-colors hover:text-white/80"
          >
            {item}
          </span>
        ))}
      </nav>
    </div>
  );
}
