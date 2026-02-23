"use client";

import { type ReactNode } from "react";

// Max inset values at full animation progress.
// Exported so child components can use the same values for positioning.
export const FRAME_INSETS = {
  top: 40,
  side: 64,
  bottom: 56,
  radius: 16,
} as const;

interface DemoFrameProps {
  progress: number;
  children: ReactNode;
}

export function DemoFrame({ progress, children }: DemoFrameProps) {
  // Interpolate from full screen (progress 0) to rounded monitor frame (progress 0.30)
  const frameProgress = Math.max(0, Math.min(1, (progress - 0.10) / 0.20));

  // Smooth-step easing
  const eased = frameProgress * frameProgress * (3 - 2 * frameProgress);

  const topInset = eased * FRAME_INSETS.top;
  const sideInset = eased * FRAME_INSETS.side;
  const bottomInset = eased * FRAME_INSETS.bottom;
  const borderRadius = eased * FRAME_INSETS.radius;

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
