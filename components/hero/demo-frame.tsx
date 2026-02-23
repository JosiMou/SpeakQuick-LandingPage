"use client";

import { type ReactNode } from "react";
import { useIsMobile } from "@/hooks/use-is-mobile";

// Max inset values at full animation progress.
// Exported so child components can use the same values for positioning.
export const FRAME_INSETS = {
  top: 40,
  side: 64,
  bottom: 56,
  radius: 16,
} as const;

export const FRAME_INSETS_MOBILE = {
  top: 20,
  side: 16,
  bottom: 28,
  radius: 12,
} as const;

interface DemoFrameProps {
  progress: number;
  children: ReactNode;
}

export function DemoFrame({ progress, children }: DemoFrameProps) {
  const isMobile = useIsMobile();
  const insets = isMobile ? FRAME_INSETS_MOBILE : FRAME_INSETS;

  // Interpolate from full screen (progress 0) to rounded monitor frame (progress 0.30)
  const frameProgress = Math.max(0, Math.min(1, (progress - 0.10) / 0.20));

  // Smooth-step easing
  const eased = frameProgress * frameProgress * (3 - 2 * frameProgress);

  const topInset = eased * insets.top;
  const sideInset = eased * insets.side;
  const bottomInset = eased * insets.bottom;
  const borderRadius = eased * insets.radius;

  // Outer glow opacity scales with frame progress
  const glowOpacity = eased;

  return (
    <>
      {/* Outer glow behind the frame */}
      {glowOpacity > 0 && (
        <div
          className="absolute pointer-events-none"
          style={{
            top: topInset,
            left: sideInset,
            right: sideInset,
            bottom: bottomInset,
            borderRadius,
            opacity: glowOpacity,
            boxShadow: [
              "rgba(100, 140, 200, 0.08) 0px 0px 80px 20px",
              "rgba(80, 100, 180, 0.05) 0px 0px 120px 40px",
              "rgba(60, 80, 160, 0.03) 0px 0px 200px 80px",
            ].join(", "),
          }}
        />
      )}

      {/* Clipped content frame */}
      <div
        className="absolute inset-0"
        style={{
          clipPath: `inset(${topInset}px ${sideInset}px ${bottomInset}px ${sideInset}px round ${borderRadius}px)`,
        }}
      >
        {children}
      </div>
    </>
  );
}
