"use client";

import { WindowTitleBar } from "./app-window";

interface WindowMeetingProps {
  progress: number;
}

const participants = [
  { name: "Sarah Chen", initial: "S", color: "#E06C75" },
  { name: "Mike Rodriguez", initial: "M", color: "#61AFEF" },
  { name: "You", initial: "Y", color: "#98C379" },
];

/**
 * Zoom-like meeting app replica.
 * Shows a video call with live transcription appearing at the bottom,
 * making it clear that SpeakQuick transcribes meetings.
 */
export function WindowMeeting({ progress }: WindowMeetingProps) {
  // Cycle 1: pill active 0.36–0.53, text types within that window
  const typewriterStart = 0.38;

  const line1Progress = Math.max(0, Math.min(1, (progress - typewriterStart) / 0.05));
  const line2Progress = Math.max(0, Math.min(1, (progress - typewriterStart - 0.06) / 0.05));
  const line3Progress = Math.max(0, Math.min(1, (progress - typewriterStart - 0.12) / 0.05));

  const captions = [
    { speaker: "Sarah", text: "The main takeaway is we need to improve transcription accuracy for technical terms.", progress: line1Progress },
    { speaker: "Mike", text: "I tested SpeakQuick with our medical recordings. Speaker detection is incredibly accurate.", progress: line2Progress },
    { speaker: "Sarah", text: "The export options are also really flexible...", progress: line3Progress },
  ];

  return (
    <div className="flex h-full flex-col" style={{ background: "#1a1a1a" }}>
      {/* Title bar */}
      <WindowTitleBar>
        <div className="ml-2 flex flex-1 items-center justify-center">
          <span className="text-[9px] text-white/50">Q4 Product Review</span>
          <span className="ml-2 flex items-center gap-1 text-[7px] text-white/30">
            <span className="inline-block h-[5px] w-[5px] rounded-full bg-red-500 animate-pulse" />
            Recording
          </span>
        </div>
      </WindowTitleBar>

      {/* Video grid */}
      <div className="flex-1 min-h-0 grid grid-cols-3 gap-[3px] px-[6px] py-[4px]">
        {participants.map(({ name, initial, color }) => (
          <div
            key={name}
            className="relative flex items-center justify-center rounded-[6px] overflow-hidden"
            style={{ background: "#242424" }}
          >
            {/* Avatar circle */}
            <div
              className="flex items-center justify-center rounded-full"
              style={{
                width: 36,
                height: 36,
                background: color,
              }}
            >
              <span className="text-[14px] font-semibold text-white">{initial}</span>
            </div>
            {/* Name label */}
            <div className="absolute bottom-[3px] left-[4px] flex items-center gap-[3px]">
              <span className="text-[7px] text-white/70 bg-black/50 px-[4px] py-[1px] rounded-[2px]">
                {name}
              </span>
            </div>
            {/* Mic indicator */}
            <div className="absolute bottom-[3px] right-[4px]">
              <svg width="8" height="8" viewBox="0 0 24 24" fill="none">
                <path d="M12 2a3 3 0 00-3 3v6a3 3 0 006 0V5a3 3 0 00-3-3z" fill="rgba(255,255,255,0.5)" />
                <path d="M7 10a5 5 0 0010 0" stroke="rgba(255,255,255,0.3)" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
          </div>
        ))}
      </div>

      {/* Live transcription panel */}
      <div
        className="mx-[6px] mb-[4px] rounded-[6px] px-[8px] py-[5px] overflow-hidden"
        style={{
          background: "rgba(0,0,0,0.6)",
          border: "1px solid rgba(255,255,255,0.06)",
          minHeight: 48,
        }}
      >
        <div className="flex items-center gap-[4px] mb-[3px]">
          <span className="text-[7px] font-semibold text-white/40">
            Live Transcript
          </span>
        </div>
        <div className="space-y-[2px]">
          {captions.map(({ speaker, text, progress: p }, i) => {
            if (p <= 0) return null;
            const visibleChars = Math.floor(p * text.length);
            const displayText = text.slice(0, visibleChars);
            const showCursor = p < 1;

            return (
              <div key={i} className="flex gap-[4px]">
                <span className="text-[7px] font-semibold text-white/60 flex-shrink-0 w-[28px]">
                  {speaker}:
                </span>
                <span className="text-[7px] leading-[10px] text-white/80">
                  {displayText}
                  {showCursor && (
                    <span
                      className="inline-block w-[1px] h-[7px] animate-pulse ml-[1px] align-baseline"
                      style={{ background: "hsl(186,100%,50%)" }}
                    />
                  )}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Meeting controls toolbar */}
      <div
        className="flex items-center justify-center gap-[8px] px-[10px] py-[5px]"
        style={{ background: "#242424" }}
      >
        {/* Mute */}
        <div className="flex h-[20px] w-[20px] items-center justify-center rounded-full bg-white/10">
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
            <path d="M12 2a3 3 0 00-3 3v6a3 3 0 006 0V5a3 3 0 00-3-3z" fill="white" />
            <path d="M7 10a5 5 0 0010 0" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </div>
        {/* Camera */}
        <div className="flex h-[20px] w-[20px] items-center justify-center rounded-full bg-white/10">
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
            <rect x="2" y="5" width="14" height="14" rx="2" stroke="white" strokeWidth="1.5" />
            <path d="M16 10l5-3v10l-5-3z" fill="white" />
          </svg>
        </div>
        {/* Share */}
        <div className="flex h-[20px] w-[20px] items-center justify-center rounded-full bg-white/10">
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
            <path d="M4 12v6a2 2 0 002 2h12a2 2 0 002-2v-6" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M12 3v12M8 7l4-4 4 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        {/* End call */}
        <div className="flex h-[20px] w-[28px] items-center justify-center rounded-full bg-red-500">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
            <path d="M3 11c0-2 3-5 9-5s9 3 9 5v2a1 1 0 01-1 1h-3a1 1 0 01-1-1v-2c0-.5-1.5-2-4-2s-4 1.5-4 2v2a1 1 0 01-1 1H4a1 1 0 01-1-1v-2z" fill="white" />
          </svg>
        </div>
      </div>
    </div>
  );
}
