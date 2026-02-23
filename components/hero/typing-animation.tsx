"use client";

import { useState, useEffect, useRef } from "react";

interface TypingAnimationProps {
  text: string;
  /** Milliseconds between each character reveal */
  typingSpeed?: number;
  className?: string;
  /** Whether the animation should start. Defaults to true. */
  active?: boolean;
  /** Called once all characters have been revealed. */
  onComplete?: () => void;
}

/**
 * Mini waveform cursor: 3 animated bars that pulse like an audio visualizer,
 * reinforcing the voice/transcription nature of the product.
 */
function WaveformCursor({ active }: { active: boolean }) {
  const bars = [
    { height: "55%", delay: "0s" },
    { height: "100%", delay: "0.15s" },
    { height: "70%", delay: "0.3s" },
  ];

  return (
    <span
      className="inline-flex items-center gap-[2px] ml-0.5 align-middle"
      style={{ height: "0.85em", verticalAlign: "middle" }}
    >
      {bars.map((bar, i) => (
        <span
          key={i}
          className="inline-block w-[2px] rounded-full bg-white"
          style={{
            height: bar.height,
            animation: active
              ? `subtitle-waveform 0.8s ease-in-out ${bar.delay} infinite`
              : "none",
            opacity: active ? 1 : 0,
            transition: "opacity 0.3s ease-out",
          }}
        />
      ))}
    </span>
  );
}

export function TypingAnimation({
  text,
  typingSpeed = 40,
  className = "",
  active = true,
  onComplete,
}: TypingAnimationProps) {
  const [revealCount, setRevealCount] = useState(0);
  const [done, setDone] = useState(false);
  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;

  const chars = text.split("");

  useEffect(() => {
    if (!active || done) return;

    if (revealCount < text.length) {
      const timer = setTimeout(
        () => setRevealCount((c) => c + 1),
        typingSpeed,
      );
      return () => clearTimeout(timer);
    }

    // All characters revealed — done
    setDone(true);
    onCompleteRef.current?.();
  }, [active, revealCount, text.length, typingSpeed, done]);

  const isTyping = active && !done;

  return (
    <span className={className}>
      {/* Revealed characters */}
      {chars.slice(0, revealCount).map((char, i) => (
        <span
          key={i}
          style={{
            opacity: 1,
            transition: "opacity 0.15s ease-out",
          }}
        >
          {char}
        </span>
      ))}
      {/* Waveform cursor: visible only while typing */}
      <WaveformCursor active={isTyping} />
      {/* Unrevealed characters: invisible but preserve layout width */}
      {chars.slice(revealCount).map((char, i) => (
        <span
          key={`u-${revealCount + i}`}
          style={{ opacity: 0 }}
          aria-hidden="true"
        >
          {char}
        </span>
      ))}
    </span>
  );
}
