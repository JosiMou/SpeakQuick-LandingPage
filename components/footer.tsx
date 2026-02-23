"use client";

import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n/index";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
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
              <svg className="w-4 h-4" viewBox="0 0 814 1000" fill="currentColor">
                <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76.5 0-103.7 40.8-165.9 40.8s-105.6-57.8-155.5-127.4c-58.3-81.1-105.9-207.7-105.9-328.6 0-193.2 125.7-295.7 249.4-295.7 65.7 0 120.4 43.1 161.6 43.1 39.2 0 100.4-45.7 174.3-45.7 28.2 0 129.4 2.5 196.2 95.3zM554.1 159.4c31.1-36.9 53.1-88.1 53.1-139.3 0-7.1-.6-14.3-1.9-20.1-50.6 1.9-110.8 33.7-147.1 75.8-28.8 32.4-54.4 83.7-54.4 135.5 0 7.8 1.3 15.6 1.9 18.1 3.2.6 8.4 1.3 13.6 1.3 45.4 0 102.5-30.4 134.8-71.3z" />
              </svg>
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
                href="https://x.com/sagguts"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-[#888B91] hover:text-[#FAFAFA] hover:bg-white/10 transition-all"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
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
