"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
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
    <div className="fixed top-4 left-0 right-0 z-50 flex justify-center pointer-events-none">
      <motion.nav
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="pointer-events-auto"
      >
        <div
          className={`flex items-center gap-1 rounded-full border px-1.5 py-1 transition-all duration-300 ${
            scrolled
              ? "bg-white/[0.06] backdrop-blur-xl border-white/[0.08]"
              : "bg-white/[0.04] backdrop-blur-md border-white/[0.06]"
          }`}
        >
          <a
            href="/"
            className="px-3.5 py-1.5 text-sm text-white/70 hover:text-white transition-colors rounded-full"
          >
            Home
          </a>
          <a
            href={language === "de" ? "/de/blog" : "/blog"}
            className="px-3.5 py-1.5 text-sm text-white/70 hover:text-white transition-colors rounded-full"
          >
            Blog
          </a>
          <a
            href="#pricing"
            className="px-3.5 py-1.5 text-sm text-white/70 hover:text-white transition-colors rounded-full"
          >
            Pricing
          </a>

          <LanguageSwitcher />

          <a
            href="#pricing"
            className="ml-0.5 px-4 py-1.5 text-sm font-medium text-black bg-white rounded-full hover:bg-white/90 transition-colors"
          >
            Download
          </a>
        </div>
      </motion.nav>
    </div>
  );
}
