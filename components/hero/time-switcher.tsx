"use client";

import { type TimeTheme } from "./demo-gradient-layers";

interface TimeSwitcherProps {
  theme: TimeTheme;
  onChange: (theme: TimeTheme) => void;
  progress: number;
}

export function TimeSwitcher({ theme, onChange, progress }: TimeSwitcherProps) {
  const opacity = Math.max(0, Math.min(1, (progress - 0.25) / 0.1));

  if (opacity <= 0) return <div />;

  const themes: { id: TimeTheme; icon: React.ReactNode }[] = [
    {
      id: "day",
      icon: (
        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
          <circle cx="12" cy="12" r="5" />
          <path
            d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
          />
        </svg>
      ),
    },
    {
      id: "dusk",
      icon: (
        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 7a5 5 0 0 1 5 5h-10a5 5 0 0 1 5-5z" />
          <path
            d="M12 2v2M4.22 4.22l1.42 1.42M2 12h2M4.22 19.78l1.42-1.42M19.78 4.22l-1.42 1.42M22 12h-2"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M3 17h18M5 20h14"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            fill="none"
            opacity="0.6"
          />
        </svg>
      ),
    },
    {
      id: "night",
      icon: (
        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      ),
    },
  ];

  const activeIndex = themes.findIndex((t) => t.id === theme);

  return (
    <div
      className="flex items-center gap-0 rounded-full border border-white/10 bg-black/60 p-[5px] backdrop-blur-xl"
      style={{ opacity }}
    >
      <div
        className="absolute h-6 w-6 rounded-full bg-white/15 transition-all duration-200"
        style={{ top: 5, left: 5 + activeIndex * 24 }}
      />
      {themes.map(({ id, icon }) => (
        <button
          key={id}
          onClick={() => onChange(id)}
          className={`relative z-10 flex h-6 w-6 items-center justify-center transition-colors duration-200 ${
            theme === id ? "text-white/95" : "text-white/40 hover:text-white/70"
          }`}
        >
          {icon}
        </button>
      ))}
    </div>
  );
}
