"use client";

import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ_ITEMS = [
  {
    question: "Does SpeakQuick work offline?",
    answer:
      "Yes! SpeakQuick processes all audio locally on your Mac. No internet connection is required after the initial download. Your audio files never leave your device, ensuring complete privacy.",
  },
  {
    question: "What audio formats are supported?",
    answer:
      "SpeakQuick supports all common audio and video formats including MP3, WAV, M4A, AAC, FLAC, OGG, MP4, MOV, AVI, and MKV. If you have a file format that is not working, contact us and we will add support.",
  },
  {
    question: "How accurate is the transcription?",
    answer:
      "SpeakQuick uses OpenAI's Whisper v3, one of the most accurate speech recognition models available. It handles accents, technical terminology, and multiple speakers exceptionally well. Accuracy typically exceeds 95% for clear audio.",
  },
  {
    question: "Can it identify different speakers?",
    answer:
      "Yes! SpeakQuick includes speaker diarization that automatically distinguishes between different speakers in your audio. Each speaker is labeled in the transcript (Speaker 1, Speaker 2, etc.) making it easy to follow conversations.",
  },
  {
    question: "Is there a subscription fee?",
    answer:
      "No. SpeakQuick is a one-time purchase of $49. You get unlimited transcription, all export formats, and lifetime updates. No recurring fees, ever.",
  },
  {
    question: "What languages are supported?",
    answer:
      "SpeakQuick supports 99+ languages including English, Spanish, French, German, Italian, Portuguese, Dutch, Russian, Chinese, Japanese, Korean, Arabic, Hindi, and many more. The app can auto-detect the language or you can set it manually.",
  },
  {
    question: "Can I transcribe live audio?",
    answer:
      "Yes! SpeakQuick supports real-time transcription from your microphone. This is perfect for taking notes during meetings, dictation, or creating transcripts while recording audio.",
  },
  {
    question: "What export formats are available?",
    answer:
      "You can export transcripts as plain text (TXT), subtitles (SRT, VTT), structured data (JSON, CSV), and more. All exports include timestamps and speaker labels where applicable.",
  },
];

export function FaqSection() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section ref={ref} className="w-full section-spacing relative bg-muted/30">
      <div className="container px-4 md:px-6 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about SpeakQuick.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="w-full">
            {FAQ_ITEMS.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-base font-medium hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
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
