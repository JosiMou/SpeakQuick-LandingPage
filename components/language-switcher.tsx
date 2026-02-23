"use client";

import { useI18n } from "@/lib/i18n/index";

export function LanguageSwitcher() {
  const { language, setLanguage } = useI18n();

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "de" : "en");
  };

  return (
    <button
      onClick={toggleLanguage}
      className="px-3 py-1.5 text-sm text-white/50 hover:text-white/80 transition-colors rounded-full"
      aria-label={`Switch to ${language === "en" ? "German" : "English"}`}
    >
      {language === "en" ? "DE" : "EN"}
    </button>
  );
}
