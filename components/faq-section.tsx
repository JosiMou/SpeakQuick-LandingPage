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
    <section ref={ref} className="w-full section-spacing relative overflow-hidden">
      <div className="absolute inset-0 bg-muted/20" />
      <div className="absolute inset-0 grid-bg opacity-10" />
      <div className="absolute inset-0 noise-overlay" />
      
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] opacity-30 pointer-events-none">
        <div
          className="w-full h-full"
          style={{
            background: 'radial-gradient(ellipse at center, hsl(186 100% 50% / 0.1) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />
      </div>
      
      <div className="container px-4 md:px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
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
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="max-w-3xl mx-auto border border-border bg-card relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-primary/3 to-transparent opacity-50 pointer-events-none" />
          
          <Accordion type="single" collapsible className="w-full relative z-10">
            {t.faq.items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.05, duration: 0.3 }}
              >
                <AccordionItem value={`item-${index}`}>
                  <AccordionTrigger className="px-6 hover:text-primary transition-colors">
                    <span className="flex items-center gap-3">
                      <span className="text-xs font-mono text-primary">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      {item.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pl-14">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
