"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Mic, ArrowDown, Sparkles } from "lucide-react";

function MeshGradientBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "hsl(var(--background))" }}
      />

      {/* Gradient blob 1 - Blue */}
      <div
        className="absolute -top-[10%] -right-[20%] w-[80%] h-[80%] rounded-full animate-blob-drift-1"
        style={{
          background:
            "radial-gradient(circle, hsl(216 100% 60% / 0.15) 0%, hsl(216 100% 60% / 0) 70%)",
          filter: "blur(90px)",
          opacity: 0.85,
          willChange: "transform",
        }}
      />

      {/* Gradient blob 2 - Purple */}
      <div
        className="absolute -bottom-[20%] -left-[20%] w-[70%] h-[70%] rounded-full animate-blob-drift-2"
        style={{
          background:
            "radial-gradient(circle, hsl(280 80% 60% / 0.12) 0%, hsl(280 80% 60% / 0) 70%)",
          filter: "blur(100px)",
          opacity: 0.78,
          animationDelay: "-5s",
          willChange: "transform",
        }}
      />

      {/* Gradient blob 3 - Cyan */}
      <div
        className="absolute top-[30%] left-[10%] w-[50%] h-[50%] rounded-full animate-blob-drift-3"
        style={{
          background:
            "radial-gradient(circle, hsl(190 90% 55% / 0.12) 0%, hsl(190 90% 55% / 0) 70%)",
          filter: "blur(85px)",
          opacity: 0.72,
          animationDelay: "-10s",
          willChange: "transform",
        }}
      />

      {/* Fine grain layer */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='grain'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.2' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3CfeComponentTransfer%3E%3CfeFuncR type='linear' slope='2' intercept='-0.5'/%3E%3CfeFuncG type='linear' slope='2' intercept='-0.5'/%3E%3CfeFuncB type='linear' slope='2' intercept='-0.5'/%3E%3C/feComponentTransfer%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23grain)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "180px 180px",
          opacity: 0.12,
          mixBlendMode: "overlay",
        }}
      />

      {/* Bottom fade for smooth transition */}
      <div
        className="absolute inset-x-0 bottom-0 h-48 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, transparent 0%, hsl(var(--background)) 100%)",
        }}
      />
    </div>
  );
}

function WaveformVisualizer() {
  return (
    <div className="flex items-end justify-center gap-[3px] h-24">
      {[...Array(24)].map((_, i) => (
        <motion.div
          key={i}
          className="w-[4px] rounded-full bg-gradient-to-t from-primary/60 to-primary"
          animate={{
            height: ["20%", "80%", "30%", "100%", "40%"],
          }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            repeatType: "reverse",
            delay: i * 0.05,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

function TranscriptionDemo() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="relative w-full max-w-3xl mx-auto"
    >
      <div className="surface-panel rounded-2xl overflow-hidden">
        {/* Window chrome */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-black/5 bg-white/50">
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
            <span className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
            <span className="w-3 h-3 rounded-full bg-[#28C840]" />
          </div>
          <div className="ml-4 text-xs font-medium text-muted-foreground">
            SpeakQuick
          </div>
        </div>

        {/* Demo content */}
        <div className="p-6 bg-gradient-to-b from-white/80 to-white/40">
          {/* Audio waveform area */}
          <div className="rounded-xl bg-gradient-to-br from-primary/5 to-primary/10 p-6 mb-4 border border-primary/10">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <Mic className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <div className="text-sm font-medium">Team_Meeting_Recording.m4a</div>
                  <div className="text-xs text-muted-foreground">24:32</div>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs text-emerald-600 font-medium">Transcribing...</span>
              </div>
            </div>
            <WaveformVisualizer />
          </div>

          {/* Transcription preview */}
          <div className="space-y-3">
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-xs font-medium text-blue-600 flex-shrink-0">
                JD
              </div>
              <div>
                <div className="text-xs text-muted-foreground mb-0.5">John Doe · 00:00:15</div>
                <p className="text-sm text-foreground/90">
                  So the main takeaway from this quarter is that we need to focus on improving our transcription accuracy for technical terminology.
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-xs font-medium text-purple-600 flex-shrink-0">
                SM
              </div>
              <div>
                <div className="text-xs text-muted-foreground mb-0.5">Sarah Miller · 00:00:42</div>
                <p className="text-sm text-foreground/90">
                  Absolutely. I have been testing SpeakQuick with our medical recordings and the speaker detection is incredibly accurate.
                </p>
              </div>
            </div>
            <div className="flex gap-3 opacity-50">
              <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-xs font-medium text-orange-600 flex-shrink-0">
                AK
              </div>
              <div>
                <div className="text-xs text-muted-foreground mb-0.5">Alex Kim · 00:01:03</div>
                <p className="text-sm text-foreground/90">
                  The export options are also really flexible. We can get SRT files for subtitles...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function Hero() {
  return (
    <section className="relative min-h-screen pt-24 md:pt-32 pb-16 overflow-hidden">
      <MeshGradientBackground />

      {/* Centered messaging */}
      <div className="flex flex-col items-center text-center max-w-4xl mx-auto px-4 mb-8 md:mb-12">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-6"
        >
          <Sparkles className="w-3.5 h-3.5 text-primary" />
          <span className="text-xs font-medium text-primary">
            Now with Whisper v3
          </span>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]"
        >
          Turn Audio Into
          <span className="text-primary block sm:inline sm:ml-3">
            Accurate Text.
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-2xl"
        >
          AI-powered transcription for podcasts, meetings, and interviews. Local processing, speaker detection, and export to any format.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 flex flex-col sm:flex-row gap-4 items-center"
        >
          <Button
            size="lg"
            className="mac-pill rounded-xl px-8 h-12 text-base"
          >
            <Mic className="w-4 h-4 mr-2" />
            Download for macOS
          </Button>
          <Button
            size="lg"
            variant="ghost"
            className="h-12 px-6 text-base"
          >
            Watch Demo
          </Button>
        </motion.div>

        {/* Meta info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-6 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xs text-muted-foreground"
        >
          <span className="font-mono">macOS 13.0+</span>
          <span className="text-muted-foreground/40">|</span>
          <span className="font-mono">Free Trial · 60 Minutes</span>
          <span className="text-muted-foreground/40">|</span>
          <span className="font-mono">No subscription required</span>
        </motion.div>
      </div>

      {/* Demo */}
      <TranscriptionDemo />

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-muted-foreground"
        >
          <span className="text-xs">Scroll to explore</span>
          <ArrowDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}
