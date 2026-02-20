"use client";

import { useI18n, Language } from "@/lib/i18n/index";
import { Globe } from "lucide-react";

export function LanguageSwitcher() {
  const { language, setLanguage } = useI18n();

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "de" : "en");
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-2 px-3 py-1.5 border border-border bg-muted/50 hover:border-primary/30 hover:bg-muted text-xs font-mono transition-colors"
      aria-label={`Switch to ${language === "en" ? "German" : "English"}`}
    >
      <Globe className="w-3.5 h-3.5 text-muted-foreground" />
      <span className="text-muted-foreground">{language === "en" ? "DE" : "EN"}</span>
    </button>
  );
}
