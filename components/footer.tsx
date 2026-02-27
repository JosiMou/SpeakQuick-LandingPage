"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n/index";
import { SPEAKQUICK_DOWNLOAD_URL } from "@/lib/download-url";

/**
 * Animated SiriWave (iOS9 style) used as a decorative voice
 * visualization in the footer. Amplitude oscillates slowly
 * to simulate ambient speech activity.
 */
function FooterWaveform() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible || !containerRef.current) return;

    type SiriWaveInstance = { setAmplitude: (v: number) => void; dispose: () => void };
    let sw: SiriWaveInstance | null = null;
    let ampFrame: number;

    import("siriwave").then(({ default: SiriWave }) => {
      if (!containerRef.current) return;

      sw = new SiriWave({
        container: containerRef.current,
        style: "ios9",
        autostart: true,
        speed: 0.08,
        amplitude: 2.5,
        cover: true,
        curveDefinition: [
          { color: "180,190,255", supportLine: true },
          { color: "80,130,255" },
          { color: "140,90,245" },
          { color: "60,200,210" },
        ],
      });

      // Oscillate amplitude for organic speech-like movement
      const animate = () => {
        const t = performance.now() / 1000;
        const amp =
          1.6 +
          0.8 * Math.sin(t * 0.4) +
          0.35 * Math.sin(t * 1.1) +
          0.2 * Math.sin(t * 2.3);
        sw?.setAmplitude(Math.max(0.5, amp));
        ampFrame = requestAnimationFrame(animate);
      };
      ampFrame = requestAnimationFrame(animate);
    });

    return () => {
      cancelAnimationFrame(ampFrame);
      sw?.dispose();
    };
  }, [isVisible]);

  return (
    <div
      ref={containerRef}
      className="relative mt-16 mb-4 h-40 overflow-hidden"
      aria-hidden="true"
      style={{
        opacity: isVisible ? 1 : 0,
        transition: "opacity 0.8s ease",
      }}
    />
  );
}

export function Footer() {
  const { t, language } = useI18n();

  return (
    <footer className="relative px-6 pt-28 pb-12">
      <div className="max-w-6xl mx-auto">
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
              <li>
                <a
                  href="https://namequick.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#888B91] hover:text-[#FAFAFA] transition-colors"
                >
                  NameQuick
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

        {/* Waveform */}
        <FooterWaveform />

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
