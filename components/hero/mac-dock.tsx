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

/** SpeakQuick's own icon (no installed app to extract from) */
function SpeakQuickIcon() {
  return (
    <div
      className="flex h-full w-full items-center justify-center rounded-[12px]"
      style={{ background: "hsl(186, 100%, 50%)" }}
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 4a3 3 0 00-3 3v5a3 3 0 006 0V7a3 3 0 00-3-3z"
          fill="rgba(0,0,0,0.7)"
        />
        <path
          d="M7 12a5 5 0 0010 0"
          stroke="rgba(0,0,0,0.5)"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <line
          x1="12"
          y1="17"
          x2="12"
          y2="20"
          stroke="rgba(0,0,0,0.5)"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
