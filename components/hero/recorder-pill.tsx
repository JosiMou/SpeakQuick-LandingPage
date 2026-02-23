"use client";

import { useState } from "react";

interface RecorderPillProps {
  progress: number;
}

/**
 * Dictation recorder pill that cycles between active and idle states.
 *
 * Two recording cycles, each tied to one app window:
 *   Cycle 1 (Notes):  active 0.36–0.56, text types 0.38–0.55
 *   Cycle 2 (Code):   active 0.64–0.84, text types 0.66–0.83
 *
 * The pill expands and shows waveform bars when active, then
 * shrinks back to a tiny bar when idle. This temporal coupling
 * with text appearing in the focused window communicates voice→text.
 */

const CYCLES = [
  { start: 0.36, end: 0.56 },
  { start: 0.64, end: 0.84 },
];

export function RecorderPill({ progress }: RecorderPillProps) {
  const [isHovered, setIsHovered] = useState(false);

  // Pill fades in at 0.34
  const pillAppear = Math.max(0, Math.min(1, (progress - 0.33) / 0.04));

  // Active when inside any recording cycle
  const isActive = CYCLES.some((c) => progress >= c.start && progress <= c.end);

  if (pillAppear <= 0) return <div className="h-[34px]" />;

  // Size: tiny bar when idle, expanded pill when active, larger on hover
  const pillWidth = isHovered ? 130 : isActive ? 64 : 45;
  const pillHeight = isHovered ? 38 : isActive ? 34 : 10;

  // Bar config
  const barCount = isHovered ? 7 : 5;
  const barGap = isHovered ? 5 : 4;
  const barWidth = 3;
  const maxBarH = isHovered ? 20 : 16;

  // Bell-curve envelope: center bars taller
  const bars = Array.from({ length: barCount }, (_, i) => {
    const center = (barCount - 1) / 2;
    const dist = Math.abs(i - center) / center;
    const envelope = 1 - dist * 0.55;
    return maxBarH * envelope;
  });

  const svgWidth = barCount * (barWidth + barGap) - barGap;
  const svgHeight = maxBarH + 4;

  // Subtle cyan glow when active
  const glowShadow = isActive
    ? "0 4px 30px rgba(0, 0, 0, 0.5), 0 0 20px rgba(0, 200, 220, 0.35)"
    : "0 4px 30px rgba(0, 0, 0, 0.5)";

  return (
    <div className="z-30" style={{ opacity: pillAppear }}>
      <div
        className="relative flex items-center justify-center overflow-hidden border border-white/10 bg-black/80 backdrop-blur-xl"
        style={{
          width: pillWidth,
          height: pillHeight,
          borderRadius: pillHeight / 2,
          transition:
            "width 0.5s cubic-bezier(0.25, 0.1, 0.1, 1), height 0.5s cubic-bezier(0.25, 0.1, 0.1, 1), border-radius 0.5s cubic-bezier(0.25, 0.1, 0.1, 1), box-shadow 0.4s ease",
          boxShadow: glowShadow,
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {isActive && (
          <svg
            width={svgWidth}
            height={svgHeight}
            viewBox={`0 0 ${svgWidth} ${svgHeight}`}
            xmlns="http://www.w3.org/2000/svg"
            style={{ animation: "dyn-waveform-fade 0.4s ease" }}
          >
            {bars.map((h, i) => {
              const x = i * (barWidth + barGap);
              const y = (svgHeight - h) / 2;
              const delay = Math.abs(i - (barCount - 1) / 2) * 0.15;
              return (
                <rect
                  key={i}
                  x={x}
                  y={y}
                  width={barWidth}
                  height={h}
                  rx={barWidth / 2}
                  fill="white"
                  style={{
                    transformOrigin: "center",
                    animation: "whisper-bar 1.2s ease-in-out infinite",
                    animationDelay: `${delay}s`,
                    filter: "drop-shadow(0 0 3px rgba(255,255,255,0.4))",
                  }}
                />
              );
            })}
          </svg>
        )}
      </div>
    </div>
  );
}
