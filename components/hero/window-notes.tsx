"use client";

import { WindowTitleBar } from "./app-window";

interface WindowNotesProps {
  progress: number;
}

/** Dictated text that types into the note body */
const DICTATED_NOTE =
  "Follow up with the design team about the new onboarding flow. They mentioned some concerns about the drop-off rate on step three. We should also look into simplifying the permissions screen before the next release.";

/**
 * Apple Notes replica showing voice-dictated prose.
 * Text appears via typewriter animation timed to the recorder pill,
 * so the connection between voice input and text output is visual.
 */
export function WindowNotes({ progress }: WindowNotesProps) {
  // Cycle 1: pill active 0.36–0.52, text types within that window
  const typeStart = 0.38;
  const typeEnd = 0.51;
  const typeProgress = Math.max(0, Math.min(1, (progress - typeStart) / (typeEnd - typeStart)));

  const charsVisible = Math.floor(typeProgress * DICTATED_NOTE.length);
  const visibleText = DICTATED_NOTE.slice(0, charsVisible);
  const showCursor = typeProgress > 0 && typeProgress < 1;

  const sidebarNotes = [
    { title: "Meeting Notes", preview: "Follow up with the design...", time: "8:31 AM", active: true },
    { title: "Project Ideas", preview: "Voice-first workflows for...", time: "Yesterday", active: false },
    { title: "Grocery List", preview: "Oat milk, avocados, bread...", time: "Feb 21", active: false },
  ];

  return (
    <div className="flex h-full flex-col" style={{ background: "#F5F5F5" }}>
      {/* Title bar */}
      <WindowTitleBar style={{ borderBottom: "1px solid #D1D1D1" }}>
        <div className="ml-2 flex items-center gap-2">
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
            <path d="M15 19l-7-7 7-7" stroke="rgba(0,0,0,0.3)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
            <path d="M9 5l7 7-7 7" stroke="rgba(0,0,0,0.3)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </WindowTitleBar>

      <div className="flex flex-1 min-h-0">
        {/* Notes sidebar */}
        <div
          className="flex w-[100px] flex-shrink-0 flex-col"
          style={{ borderRight: "1px solid #D1D1D1" }}
        >
          <div className="px-[8px] py-[4px]" style={{ borderBottom: "1px solid #D1D1D1" }}>
            <span className="text-[8px] font-semibold" style={{ color: "#6B6B6B" }}>Today</span>
          </div>
          <div className="flex flex-col py-[2px]">
            {sidebarNotes.map(({ title, preview, time, active }) => (
              <div
                key={title}
                className="mx-[4px] rounded-[4px] px-[6px] py-[4px]"
                style={{ background: active ? "#FFE48F" : "transparent" }}
              >
                <div className="text-[8px] font-semibold truncate" style={{ color: "#1D1D1D" }}>{title}</div>
                <div className="flex items-center gap-[4px] mt-[1px]">
                  <span className="text-[7px]" style={{ color: "#1D1D1D" }}>{time}</span>
                  <span className="text-[7px] truncate" style={{ color: "rgba(0,0,0,0.4)" }}>{preview}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Note content */}
        <div className="flex flex-1 flex-col min-w-0" style={{ background: "white" }}>
          {/* Date header */}
          <div className="px-[12px] pt-[8px] pb-[4px] text-center">
            <span className="text-[7px]" style={{ color: "#999" }}>February 23, 2026 at 8:31 AM</span>
          </div>

          {/* Title */}
          <div className="px-[12px] pb-[6px]">
            <h3 className="text-[11px] font-bold" style={{ color: "#1D1D1D" }}>
              Meeting Notes
            </h3>
          </div>

          {/* Dictated body text */}
          <div className="px-[12px] flex-1">
            <p className="text-[8px] leading-[13px]" style={{ color: "#333" }}>
              {visibleText}
              {showCursor && (
                <span
                  className="inline-block w-[1px] h-[9px] ml-[1px] align-baseline"
                  style={{ background: "#0088FF", animation: "blink-cursor 1s step-end infinite" }}
                />
              )}
              {typeProgress === 0 && (
                <span style={{ color: "#bbb" }}>Start typing or dictate...</span>
              )}
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blink-cursor {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </div>
  );
}
