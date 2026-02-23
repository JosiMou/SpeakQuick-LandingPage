"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Mic } from "lucide-react";
import { useI18n } from "@/lib/i18n/index";
import { LanguageSwitcher } from "./language-switcher";

export function Navbar() {
  const { language } = useI18n();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-6 h-14 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 group">
          <div className="w-7 h-7 border border-primary/30 flex items-center justify-center transition-all group-hover:border-primary/60 group-hover:shadow-[0_0_10px_hsl(186_100%_50%_/_0.15)]">
            <Mic className="w-3.5 h-3.5 text-primary" />
          </div>
          <span className="font-mono font-semibold text-sm text-foreground">
            SpeakQuick
          </span>
        </a>

        {/* Navigation links + language switcher */}
        <div className="flex items-center gap-6">
          <a
            href={language === "de" ? "/de/blog" : "/blog"}
            className="text-sm font-mono text-muted-foreground hover:text-primary transition-colors"
          >
            Blog
          </a>
          <LanguageSwitcher />
        </div>
      </div>
    </motion.nav>
  );
}
