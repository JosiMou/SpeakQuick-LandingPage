"use client";

import Image from "next/image";

interface MacDockProps {
  progress: number;
}

const apps = [
  { id: "zoom", label: "Zoom", src: "/demo/zoom.png" },
  { id: "notes", label: "Notes", src: "/demo/notes.png" },
  { id: "codex", label: "Codex", src: "/demo/codex.png" },
  { id: "claude", label: "Claude Code", src: "/demo/claude.png" },
  {
    id: "speakquick",
    label: "SpeakQuick",
    src: null as string | null, // SVG fallback for our own app
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

/** SpeakQuick's own icon — engraved dark waveform on space grey */
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
        <linearGradient id="dkBorder" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
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
      <rect x="32" y="32" width="448" height="448" rx="100" fill="url(#dkBg)" />
      <rect x="34" y="34" width="444" height="444" rx="98" fill="none" stroke="url(#dkBorder)" strokeWidth="3"/>
      <rect x="34" y="34" width="444" height="444" rx="98" fill="none" stroke="#000000" strokeOpacity="0.5" strokeWidth="4"/>
      <g fill="#1a1a1c" filter="url(#dkEngrave)">
        <rect x="126" y="166" width="44" height="180" rx="22" />
        <rect x="186" y="236" width="44" height="110" rx="22" />
        <rect x="246" y="186" width="44" height="160" rx="22" />
        <circle cx="268" cy="136" r="22" />
        <rect x="306" y="236" width="44" height="110" rx="22" />
        <rect x="366" y="166" width="44" height="180" rx="22" />
      </g>
    </svg>
  );
}
