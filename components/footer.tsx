"use client";

import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n/index";
import { Button } from "@/components/ui/button";
import { Mic, Github, Twitter, ArrowUpRight } from "lucide-react";
import { SPEAKQUICK_DOWNLOAD_URL } from "@/lib/download-url";

export function Footer() {
  const { t, language } = useI18n();

  return (
    <footer className="w-full py-16 border-t border-border relative overflow-hidden">
      <div className="absolute inset-0 noise-overlay" />
      
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] opacity-20 pointer-events-none">
        <div
          className="w-full h-full"
          style={{
            background: 'radial-gradient(ellipse at center bottom, hsl(186 100% 50% / 0.15) 0%, transparent 60%)',
            filter: 'blur(60px)',
          }}
        />
      </div>
      
      <div className="container px-4 md:px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
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
          <Button size="lg" className="font-mono group" asChild>
            <a
              href={SPEAKQUICK_DOWNLOAD_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-track="footer_download_clicked"
            >
              <Mic className="w-4 h-4 mr-2" />
              {t.footer.cta.button}
              <ArrowUpRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </Button>
        </motion.div>

        <div className="divider-fade mb-8" />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 border border-primary/30 flex items-center justify-center relative">
              <Mic className="w-4 h-4 text-primary" />
              <div 
                className="absolute inset-0 bg-primary/10 animate-pulse"
                style={{ filter: 'blur(6px)' }}
              />
            </div>
            <span className="font-mono font-semibold text-foreground">SpeakQuick</span>
          </div>

          <div className="flex items-center gap-6 text-sm font-mono text-muted-foreground">
            <a href="/blog" className="hover:text-primary transition-colors relative group">
              Blog
              <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-primary transition-all group-hover:w-full" />
            </a>
            <span className="text-border">/</span>
            <a href="/privacy" className="hover:text-primary transition-colors relative group">
              {t.footer.links.privacy}
              <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-primary transition-all group-hover:w-full" />
            </a>
            <span className="text-border">/</span>
            <a href={language === "de" ? "/de/impressum" : "/legal-notice"} className="hover:text-primary transition-colors relative group">
              {t.footer.links.terms}
              <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-primary transition-all group-hover:w-full" />
            </a>
            <span className="text-border">/</span>
            <a href="mailto:support@speakquick.app" className="hover:text-primary transition-colors relative group">
              {t.footer.links.support}
              <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-primary transition-all group-hover:w-full" />
            </a>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="#"
              className="w-9 h-9 border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 hover:shadow-[0_0_10px_hsl(186_100%_50%_/_0.2)] transition-all"
            >
              <Twitter className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="w-9 h-9 border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 hover:shadow-[0_0_10px_hsl(186_100%_50%_/_0.2)] transition-all"
            >
              <Github className="w-4 h-4" />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-8 text-sm font-mono text-muted-foreground"
        >
          {t.footer.copyright.replace("{year}", String(new Date().getFullYear()))}
        </motion.div>
      </div>
    </footer>
  );
}
