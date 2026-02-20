"use client";

import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n/index";
import { Button } from "@/components/ui/button";
import { Mic, Github, Twitter, ArrowUpRight } from "lucide-react";

export function Footer() {
  const { t, language } = useI18n();

  return (
    <footer className="w-full py-16 border-t border-border">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl sm:text-3xl font-mono font-semibold tracking-tight text-foreground mb-4">
            {t.footer.cta.title}
          </h2>
          <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
            {language === "de"
              ? "Lade SpeakQuick noch heute herunter und erlebe die schnellste, privateste Transkription auf macOS."
              : "Download SpeakQuick today and experience the fastest, most private transcription on macOS."}
          </p>
          <Button size="lg" className="font-mono">
            <Mic className="w-4 h-4 mr-2" />
            {t.footer.cta.button}
            <ArrowUpRight className="w-4 h-4 ml-2" />
          </Button>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-border">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 border border-primary/30 flex items-center justify-center">
              <Mic className="w-4 h-4 text-primary" />
            </div>
            <span className="font-mono font-semibold text-foreground">SpeakQuick</span>
          </div>

          <div className="flex items-center gap-6 text-sm font-mono text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">
              {t.footer.links.privacy}
            </a>
            <span className="text-border">/</span>
            <a href="#" className="hover:text-primary transition-colors">
              {t.footer.links.terms}
            </a>
            <span className="text-border">/</span>
            <a href="#" className="hover:text-primary transition-colors">
              {t.footer.links.support}
            </a>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="#"
              className="w-9 h-9 border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors"
            >
              <Twitter className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="w-9 h-9 border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="text-center mt-8 text-sm font-mono text-muted-foreground">
          {t.footer.copyright}
        </div>
      </div>
    </footer>
  );
}
