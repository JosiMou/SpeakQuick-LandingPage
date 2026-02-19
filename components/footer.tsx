"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mic, Github, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full py-16 border-t border-border/50">
      <div className="container px-4 md:px-6">
        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground mb-4">
            Ready to transform your audio?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
            Download SpeakQuick today and experience the fastest, most private transcription on macOS.
          </p>
          <Button size="lg" className="mac-pill rounded-xl px-8">
            <Mic className="w-4 h-4 mr-2" />
            Download for Free
          </Button>
        </motion.div>

        {/* Footer links */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-border/50">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
              <Mic className="w-4 h-4 text-primary" />
            </div>
            <span className="font-semibold text-foreground">SpeakQuick</span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Contact
            </a>
          </div>

          {/* Social */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="w-9 h-9 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted/80 transition-colors"
            >
              <Twitter className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="w-9 h-9 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted/80 transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-8 text-sm text-muted-foreground">
          © {new Date().getFullYear()} SpeakQuick. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
