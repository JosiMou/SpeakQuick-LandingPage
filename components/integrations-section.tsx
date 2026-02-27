"use client";

import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useI18n } from "@/lib/i18n/index";

interface AppIcon {
  name: string;
  color: string;
  icon: string;
}

const ROW_1: AppIcon[] = [
  { name: "Slack", color: "#4A154B", icon: "slack" },
  { name: "Notion", color: "#000000", icon: "notion" },
  { name: "Notes", color: "#FFCC02", icon: "applenotes" },
  { name: "Pages", color: "#FF9500", icon: "applepages" },
  { name: "Mail", color: "#1A8CFF", icon: "applemail" },
  { name: "Messages", color: "#34C759", icon: "applemessages" },
  { name: "Chrome", color: "#4285F4", icon: "googlechrome" },
  { name: "VS Code", color: "#007ACC", icon: "visualstudiocode" },
  { name: "Cursor", color: "#000000", icon: "cursor" },
  { name: "Arc", color: "#5B57D1", icon: "arc" },
  { name: "Obsidian", color: "#7C3AED", icon: "obsidian" },
  { name: "Telegram", color: "#26A5E4", icon: "telegram" },
  { name: "WhatsApp", color: "#25D366", icon: "whatsapp" },
  { name: "Discord", color: "#5865F2", icon: "discord" },
  { name: "Bear", color: "#D94444", icon: "bear" },
  { name: "TextEdit", color: "#8E8E93", icon: "appletextedit" },
  { name: "Safari", color: "#006CFF", icon: "safari" },
  { name: "Linear", color: "#5E6AD2", icon: "linear" },
];

const ROW_2: AppIcon[] = [
  { name: "Gmail", color: "#EA4335", icon: "gmail" },
  { name: "Google Docs", color: "#4285F4", icon: "googledocs" },
  { name: "Figma", color: "#A259FF", icon: "figma" },
  { name: "Zoom", color: "#2D8CFF", icon: "zoom" },
  { name: "Teams", color: "#6264A7", icon: "microsoftteams" },
  { name: "Claude", color: "#D4A27F", icon: "claude" },
  { name: "ChatGPT", color: "#10A37F", icon: "openai" },
  { name: "Raycast", color: "#FF6363", icon: "raycast" },
  { name: "Keynote", color: "#009BDB", icon: "applekeynote" },
  { name: "Numbers", color: "#34C759", icon: "applenumbers" },
  { name: "Finder", color: "#1D9BF0", icon: "applefinder" },
  { name: "Terminal", color: "#000000", icon: "appleterminal" },
  { name: "Xcode", color: "#1575F6", icon: "xcode" },
  { name: "Signal", color: "#3A76F0", icon: "signal" },
  { name: "Things", color: "#4A90D9", icon: "things" },
];

function AppIconTile({ app }: { app: AppIcon }) {
  return (
    <div className="flex-shrink-0 group" title={app.name}>
      <div
        className="w-14 h-14 sm:w-16 sm:h-16 rounded-[14px] sm:rounded-2xl flex items-center justify-center transition-all duration-300 border border-white/[0.06] group-hover:border-white/[0.12] group-hover:scale-110"
        style={{
          background: `linear-gradient(135deg, ${app.color}18, ${app.color}08)`,
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`/apps/${app.icon}.svg`}
          alt={app.name}
          width={28}
          height={28}
          className="w-7 h-7 sm:w-8 sm:h-8 opacity-50 transition-opacity duration-300 group-hover:opacity-80"
          loading="lazy"
        />
      </div>
    </div>
  );
}

function ScrollingRow({
  apps,
  duration,
  reverse = false,
}: {
  apps: AppIcon[];
  duration: number;
  reverse?: boolean;
}) {
  const doubled = [...apps, ...apps];

  return (
    <div className="overflow-hidden relative py-2">
      <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-20 z-10 pointer-events-none bg-gradient-to-r from-[rgb(20,20,22)] to-transparent" />
      <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-20 z-10 pointer-events-none bg-gradient-to-l from-[rgb(20,20,22)] to-transparent" />

      <div
        className="flex gap-4 sm:gap-5"
        style={{
          animation: `${reverse ? "scroll-right" : "scroll-left"} ${duration}s linear infinite`,
          width: "max-content",
        }}
      >
        {doubled.map((app, i) => (
          <AppIconTile key={`${app.name}-${i}`} app={app} />
        ))}
      </div>
    </div>
  );
}

export function IntegrationsSection() {
  const { t } = useI18n();
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section ref={ref} className="relative section-spacing px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mb-12 sm:mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight">
            <span className="text-[#888B91]">Works </span>
            <span className="text-[var(--text-primary)]">everywhere</span>
            <br />
            <span className="text-[#888B91]">you write</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.7,
            delay: 0.15,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="rounded-3xl overflow-hidden py-8 sm:py-10"
          style={{
            background: "rgb(20, 20, 22)",
            border: "1px solid rgb(28, 29, 31)",
          }}
        >
          <div className="space-y-4 sm:space-y-5">
            <ScrollingRow apps={ROW_1} duration={60} />
            <ScrollingRow apps={ROW_2} duration={70} reverse />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.5,
            delay: 0.3,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="mt-8 sm:mt-10"
        >
          <p className="text-base sm:text-lg text-[#888B91] max-w-md">
            {t.integrations.subtitle}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
