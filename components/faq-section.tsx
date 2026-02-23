"use client";

import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useI18n } from "@/lib/i18n/index";
import { Button } from "@/components/ui/button";
import { BookOpen, Mail } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FaqSection() {
  const { t } = useI18n();
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section ref={ref} className="relative section-spacing px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mb-16"
        >
          <span className="section-label text-[#FF9DC4]">FAQ</span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-12">
          {/* Left: heading + accordion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#888B91] mb-8">
              {t.faq.title}
            </h2>

            <Accordion type="single" collapsible className="w-full">
              {t.faq.items.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-[#FAFAFA]/80">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent>
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>

          {/* Right: support card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="lg:mt-16"
          >
            <div className="card-surface p-6 sticky top-24">
              <h3 className="text-base font-semibold text-[#FAFAFA] mb-2">
                {t.faq.supportTitle}
              </h3>
              <p className="text-sm text-[#888B91] mb-6">
                {t.faq.supportDescription}
              </p>

              <div className="space-y-3">
                <Button variant="secondary" className="w-full justify-start gap-2" asChild>
                  <a href="/blog">
                    <BookOpen className="w-4 h-4" />
                    Documentation
                  </a>
                </Button>
                <Button variant="outline" className="w-full justify-start gap-2" asChild>
                  <a href="mailto:support@speakquick.app">
                    <Mail className="w-4 h-4" />
                    Contact Support
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
