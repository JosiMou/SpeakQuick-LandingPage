"use client";

import { WindowTitleBar } from "./app-window";

interface WindowNotesProps {
  progress: number;
}

/**
 * Apple Notes replica showing a voice-dictated to-do list.
 * Tasks appear via typewriter animation timed to the recorder pill,
 * so the connection between voice input and text output is visual, not labelled.
 */
export function WindowNotes({ progress }: WindowNotesProps) {
  // Cycle 2: pill active 0.58–0.74, text types within that window
  const typewriterStart = 0.60;

  const tasks = [
    { text: "Review pull request from Lisa", delay: 0 },
    { text: "Prepare slides for product demo", delay: 0.03 },
    { text: "Send updated contract to legal", delay: 0.06 },
    { text: "Book flights for Berlin conference", delay: 0.09 },
    { text: "Call dentist to reschedule", delay: 0.12 },
  ];

  const sidebarNotes = [
    { title: "Today's Tasks", preview: "Review pull request from...", time: "8:31 AM", active: true },
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
          <div className="px-[12px] pb-[4px]">
            <h3 className="text-[11px] font-bold" style={{ color: "#1D1D1D" }}>
              Today&apos;s Tasks
            </h3>
          </div>

          {/* To-do items */}
          <div className="px-[12px] space-y-[5px]">
            {tasks.map(({ text, delay }, i) => {
              const lineProg = Math.max(0, Math.min(1, (progress - typewriterStart - delay) / 0.04));
              if (lineProg <= 0) return null;

              const visibleChars = Math.floor(lineProg * text.length);
              const displayText = text.slice(0, visibleChars);
              const showCursor = lineProg < 1;
              const isDone = lineProg >= 1;

              return (
                <div key={i} className="flex items-start gap-[5px]">
                  {/* Checkbox */}
                  <div
                    className="mt-[1px] flex h-[10px] w-[10px] flex-shrink-0 items-center justify-center rounded-[3px]"
                    style={{
                      border: isDone ? "none" : "1.5px solid #ccc",
                      background: isDone ? "hsl(186,100%,40%)" : "transparent",
                    }}
                  >
                    {isDone && (
                      <svg width="6" height="6" viewBox="0 0 6 6" fill="none">
                        <path d="M1 3l1.5 1.5L5 1.5" stroke="white" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </div>
                  <p className="text-[8px] leading-[12px]" style={{ color: "#333" }}>
                    {displayText}
                    {showCursor && (
                      <span
                        className="inline-block w-[1px] h-[8px] animate-pulse ml-[1px] align-baseline"
                        style={{ background: "hsl(186,100%,40%)" }}
                      />
                    )}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
