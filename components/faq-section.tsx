"use client";

import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useI18n } from "@/lib/i18n/index";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FaqSection() {
  const { t, language } = useI18n();
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section ref={ref} className="w-full section-spacing relative bg-muted/20">
      <div className="absolute inset-0 grid-bg opacity-10" />
      
      <div className="container px-4 md:px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="text-xs font-mono text-primary uppercase tracking-wider mb-3">
            // FAQ
          </div>
          <h2 className="text-3xl sm:text-4xl font-mono font-semibold tracking-tight text-foreground mb-4">
            {t.faq.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {language === "de" 
              ? "Alles, was du über SpeakQuick wissen musst."
              : "Everything you need to know about SpeakQuick."}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-3xl mx-auto border border-border bg-card"
        >
          <Accordion type="single" collapsible className="w-full">
            {t.faq.items.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="px-6">
                  <span className="flex items-center gap-3">
                    <span className="text-xs font-mono text-muted-foreground">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {item.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-6">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
