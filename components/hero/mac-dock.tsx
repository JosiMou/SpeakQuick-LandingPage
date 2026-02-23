"use client";

import Image from "next/image";

interface MacDockProps {
  progress: number;
}

const apps = [
  { id: "slack", label: "Slack", src: "/demo/slack.png" },
  { id: "notes", label: "Notes", src: "/demo/notes.png" },
  { id: "codex", label: "Codex", src: "/demo/codex.png" },
  { id: "claude", label: "Claude Code", src: "/demo/claude.png" },
  {
    id: "speakquick",
    label: "SpeakQuick",
    src: null as string | null,
  },
];

export function MacDock({ progress }: MacDockProps) {
  const dockProgress = Math.max(0, Math.min(1, (progress - 0.32) / 0.08));
  const translateY = (1 - dockProgress) * 100;
  const opacity = dockProgress;

  if (opacity <= 0) return <div className="h-[58px]" />;

  return (
    <div
      className="z-50"
      style={{
        transform: `translateY(${translateY}%)`,
        opacity,
      }}
    >
      <div
        className="flex items-end gap-[4px] px-[6px] py-[4px]"
        style={{
          borderRadius: 18,
          background:
            "linear-gradient(rgba(255,255,255,0), rgba(0,0,0,0.2)), rgba(0,0,0,0.4)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          border: "1px solid rgba(122,122,122,0.4)",
          boxShadow: "rgba(0,0,0,0.5) 0px 0px 0px 0.33px",
          outline: "rgba(0,0,0,0.6) solid 1px",
        }}
      >
        {apps.map(({ id, label, src }) => (
          <div key={id} className="group relative">
            <button
              className="flex items-center justify-center transition-transform duration-150 hover:scale-110 active:brightness-50"
              style={{
                width: 44,
                height: 44,
                transformOrigin: "bottom center",
              }}
              title={label}
            >
              {src ? (
                <Image
                  src={src}
                  alt={label}
                  width={44}
                  height={44}
                  className="h-full w-full object-contain"
                  style={{ transformOrigin: "bottom center" }}
                />
              ) : (
                <SpeakQuickIcon />
              )}
            </button>
            {/* Tooltip */}
            <div className="absolute -top-[36px] left-1/2 z-[9999] hidden -translate-x-1/2 group-hover:block">
              <div
                className="whitespace-nowrap px-[8px] py-[2px] text-[10px]"
                style={{
                  background: "rgb(234,234,234)",
                  color: "rgba(0,0,0,0.9)",
                  borderRadius: 4,
                  backdropFilter: "blur(10px)",
                  boxShadow: "rgba(0,0,0,0.5) 0px 0px 2px 0.4px",
                }}
              >
                {label}
              </div>
              {/* Arrow */}
              <div
                className="mx-auto h-[5px] w-[10px]"
                style={{
                  clipPath: "polygon(50% 100%, 0 0, 100% 0)",
                  background: "rgb(234,234,234)",
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/** SpeakQuick icon — engraved dark waveform on space grey, no border strokes */
function SpeakQuickIcon() {
  return (
    <svg
      viewBox="0 0 512 512"
      className="h-full w-full"
      style={{ borderRadius: 12 }}
    >
      <defs>
        <linearGradient id="dkBg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#5c5c62" />
          <stop offset="50%" stopColor="#3a3a3e" />
          <stop offset="100%" stopColor="#212124" />
        </linearGradient>
        <filter id="dkEngrave" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="1" floodColor="#ffffff" floodOpacity="0.3" result="bottomLight"/>
          <feOffset dx="0" dy="6" in="SourceAlpha" result="offsetAlphaInner"/>
          <feGaussianBlur stdDeviation="6" in="offsetAlphaInner" result="blurInner"/>
          <feComposite operator="out" in="SourceGraphic" in2="blurInner" result="inverseInner"/>
          <feFlood floodColor="#000000" floodOpacity="0.9" result="colorInner"/>
          <feComposite operator="in" in="colorInner" in2="inverseInner" result="innerShadow"/>
          <feMerge>
            <feMergeNode in="bottomLight"/>
            <feMergeNode in="SourceGraphic"/>
            <feMergeNode in="innerShadow"/>
          </feMerge>
        </filter>
      </defs>
      <rect x="0" y="0" width="512" height="512" rx="110" fill="url(#dkBg)" />
      <g fill="#1a1a1c" filter="url(#dkEngrave)">
        <rect x="114" y="192" width="44" height="180" rx="22" />
        <rect x="174" y="262" width="44" height="110" rx="22" />
        <rect x="234" y="212" width="44" height="160" rx="22" />
        <circle cx="256" cy="162" r="22" />
        <rect x="294" y="262" width="44" height="110" rx="22" />
        <rect x="354" y="192" width="44" height="180" rx="22" />
      </g>
    </svg>
  );
}

