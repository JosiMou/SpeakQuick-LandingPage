"use client";

import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n/index";
import { Button } from "@/components/ui/button";
import { Mic, Github, Twitter, ArrowUpRight } from "lucide-react";
import { SPEAKQUICK_DOWNLOAD_URL } from "@/lib/download-url";

export function Footer() {
  const { t, language } = useI18n();

  return (
    <footer className="relative px-6 pt-28 pb-12">
      <div className="max-w-6xl mx-auto">
        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-20"
        >
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-4">
            {t.footer.cta.title}
          </h2>
          <Button size="lg" className="group" asChild>
            <a
              href={SPEAKQUICK_DOWNLOAD_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-track="footer_download_clicked"
            >
              <Mic className="w-4 h-4" />
              {t.footer.cta.button}
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </Button>
        </motion.div>

        {/* Divider */}
        <div className="divider mb-12" />

        {/* Footer grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {/* Product */}
          <div className="card-surface p-5 rounded-xl">
            <h4 className="text-xs font-medium text-[#70757C] uppercase tracking-wider mb-4">
              Product
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a href="#pricing" className="text-sm text-[#888B91] hover:text-[#FAFAFA] transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="/blog" className="text-sm text-[#888B91] hover:text-[#FAFAFA] transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a
                  href={SPEAKQUICK_DOWNLOAD_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#888B91] hover:text-[#FAFAFA] transition-colors"
                >
                  Download
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="card-surface p-5 rounded-xl">
            <h4 className="text-xs font-medium text-[#70757C] uppercase tracking-wider mb-4">
              Legal
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a href="/privacy" className="text-sm text-[#888B91] hover:text-[#FAFAFA] transition-colors">
                  {t.footer.links.privacy}
                </a>
              </li>
              <li>
                <a
                  href={language === "de" ? "/de/impressum" : "/legal-notice"}
                  className="text-sm text-[#888B91] hover:text-[#FAFAFA] transition-colors"
                >
                  {t.footer.links.terms}
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="card-surface p-5 rounded-xl">
            <h4 className="text-xs font-medium text-[#70757C] uppercase tracking-wider mb-4">
              {t.footer.links.support}
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a href="mailto:support@speakquick.app" className="text-sm text-[#888B91] hover:text-[#FAFAFA] transition-colors">
                  Email
                </a>
              </li>
              <li>
                <a href="/blog" className="text-sm text-[#888B91] hover:text-[#FAFAFA] transition-colors">
                  Documentation
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div className="card-surface p-5 rounded-xl">
            <h4 className="text-xs font-medium text-[#70757C] uppercase tracking-wider mb-4">
              Connect
            </h4>
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-[#888B91] hover:text-[#FAFAFA] hover:bg-white/10 transition-all"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-[#888B91] hover:text-[#FAFAFA] hover:bg-white/10 transition-all"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12 text-sm text-[#70757C]"
        >
          {t.footer.copyright.replace("{year}", String(new Date().getFullYear()))}
        </motion.div>
      </div>
    </footer>
  );
}
