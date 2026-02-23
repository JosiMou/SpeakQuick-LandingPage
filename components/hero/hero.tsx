"use client";

import { useRef, useState, useCallback } from "react";
import { useScrollProgress } from "@/hooks/use-scroll-progress";
import { useIsMobile } from "@/hooks/use-is-mobile";
import { type TimeTheme } from "./demo-gradient-layers";
import { FRAME_INSETS, FRAME_INSETS_MOBILE } from "./demo-frame";
import { HeroIntro } from "./hero-intro";
import { DemoFrame } from "./demo-frame";
import { DemoGradientLayers } from "./demo-gradient-layers";
import { DemoFloatingNav } from "./demo-floating-nav";
import { TimeSwitcher } from "./time-switcher";
import { RecorderPill } from "./recorder-pill";
import { AppWindow } from "./app-window";
import { WindowNotes } from "./window-notes";
import { WindowSlack } from "./window-slack";
import { WindowTerminal } from "./window-terminal";
import { MacDock } from "./mac-dock";
import { ScrollHint } from "./scroll-hint";
import { HeroBackground } from "./hero-background";

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const progress = useScrollProgress(containerRef);
  const [theme, setTheme] = useState<TimeTheme>("night");
  const isMobile = useIsMobile();

  const handlePlayDemo = useCallback(() => {
    if (!containerRef.current) return;
    const containerTop =
      containerRef.current.getBoundingClientRect().top + window.scrollY;
    const scrollableDistance =
      containerRef.current.offsetHeight - window.innerHeight;
    const targetScroll = containerTop + scrollableDistance * 0.35;
    window.scrollTo({ top: targetScroll, behavior: "smooth" });
  }, []);

  // Compute live insets so content padding matches the clip-path at every scroll position
  const insets = isMobile ? FRAME_INSETS_MOBILE : FRAME_INSETS;
  const frameProgress = Math.max(0, Math.min(1, (progress - 0.10) / 0.20));
  const eased = frameProgress * frameProgress * (3 - 2 * frameProgress);
  const pad = {
    top: eased * insets.top,
    side: eased * insets.side,
    bottom: eased * insets.bottom,
  };

  return (
    <section ref={containerRef} className="relative" style={{ height: "450vh" }}>
      {/* Fixed viewport container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Atmospheric background: mesh gradient + animated orbs */}
        <HeroBackground />

        {/* Demo frame with gradient layers inside */}
        <DemoFrame progress={progress}>
          <DemoGradientLayers theme={theme} progress={progress} />

          {/* Content safe area: padded to stay inside the clip-path at all times */}
          <div
            className="absolute inset-0 flex flex-col"
            style={{
              paddingTop: pad.top + 8,
              paddingLeft: pad.side + 8,
              paddingRight: pad.side + 8,
              paddingBottom: pad.bottom + 8,
            }}
          >
            {/* Top bar: floating nav + time switcher */}
            <div className="relative flex items-center justify-between flex-shrink-0 mb-3">
              <DemoFloatingNav progress={progress} />
              <TimeSwitcher
                theme={theme}
                onChange={setTheme}
                progress={progress}
              />
            </div>

            {/* App windows: sequentially revealed with z-index following active cycle */}
            <div className="flex-1 min-h-0 relative">
              {/* Notes (left) — Cycle 1: 0.32–0.54 */}
              <AppWindow
                progress={progress}
                showThreshold={0.32}
                className="absolute"
                style={isMobile ? {
                  left: "3%",
                  top: "3%",
                  width: "94%",
                  height: "82%",
                  zIndex: progress < 0.54 ? 30 : 10,
                } : {
                  left: "2%",
                  top: "5%",
                  width: "34%",
                  height: "70%",
                  zIndex: progress < 0.54 ? 30 : 10,
                }}
              >
                <WindowNotes progress={progress} />
              </AppWindow>

              {/* Slack (center) — Cycle 2: 0.54–0.75 */}
              <AppWindow
                progress={progress}
                showThreshold={0.54}
                className="absolute"
                style={isMobile ? {
                  left: "3%",
                  top: "3%",
                  width: "94%",
                  height: "82%",
                  zIndex: progress >= 0.54 && progress < 0.75 ? 30 : 20,
                } : {
                  left: "18%",
                  top: "2%",
                  width: "42%",
                  height: "76%",
                  zIndex: progress >= 0.54 && progress < 0.75 ? 30 : 20,
                }}
              >
                <WindowSlack progress={progress} />
              </AppWindow>

              {/* Code editor (right, overlapping) — Cycle 3: 0.75–0.96 */}
              <AppWindow
                progress={progress}
                showThreshold={0.75}
                className="absolute"
                style={isMobile ? {
                  left: "3%",
                  top: "3%",
                  width: "94%",
                  height: "82%",
                  zIndex: progress >= 0.75 ? 30 : 15,
                } : {
                  left: "30%",
                  top: "12%",
                  width: "66%",
                  height: "84%",
                  zIndex: progress >= 0.75 ? 30 : 15,
                }}
              >
                <WindowTerminal progress={progress} />
              </AppWindow>
            </div>

            {/* Bottom area: recorder pill + dock */}
            <div className="flex flex-col items-center gap-2 flex-shrink-0 mt-2 relative z-40">
              <RecorderPill progress={progress} />
              <MacDock progress={progress} />
            </div>
          </div>
        </DemoFrame>

        {/* Hero intro text overlay (above everything) */}
        <HeroIntro progress={progress} onPlayDemo={handlePlayDemo} />

        {/* Scroll hint */}
        <ScrollHint progress={progress} />
      </div>
    </section>
  );
}
