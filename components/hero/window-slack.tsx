"use client";

import { WindowTitleBar } from "./app-window";

interface WindowSlackProps {
  progress: number;
}

/** Dictated message that types into the Slack input */
const DICTATED_MESSAGE =
  "Hey team, just finished reviewing the Q4 metrics. Conversion is up 12% since we shipped the new onboarding. Let's sync tomorrow to plan the next iteration.";

/** Existing messages in the channel as static context */
const CHANNEL_MESSAGES = [
  {
    name: "Alex Kim",
    initials: "AK",
    color: "#4A9FD9",
    time: "9:12 AM",
    text: "Quick update: the new API docs are live. Let me know if anything looks off.",
  },
  {
    name: "Priya Sharma",
    initials: "PS",
    color: "#E0A85E",
    time: "9:24 AM",
    text: "Looks great! I noticed a typo in the auth section, I'll push a fix.",
  },
  {
    name: "Alex Kim",
    initials: "AK",
    color: "#4A9FD9",
    time: "9:25 AM",
    text: "Thanks Priya 🙏",
  },
];

/**
 * Slack-like messaging app replica.
 * Channel messages are static context. During Cycle 2 (pill active),
 * dictated text appears in the message input at the bottom.
 */
export function WindowSlack({ progress }: WindowSlackProps) {
  // Cycle 2: pill active 0.56–0.72, text types within that window
  const typeStart = 0.58;
  const typeEnd = 0.71;
  const typeProgress = Math.max(0, Math.min(1, (progress - typeStart) / (typeEnd - typeStart)));

  const charsVisible = Math.floor(typeProgress * DICTATED_MESSAGE.length);
  const visibleText = DICTATED_MESSAGE.slice(0, charsVisible);
  const showCursor = typeProgress > 0 && typeProgress < 1;

  const sidebarChannels = [
    { name: "general", unread: false },
    { name: "product", unread: true, active: true },
    { name: "engineering", unread: false },
    { name: "design", unread: true },
    { name: "random", unread: false },
  ];

  return (
    <div className="flex h-full flex-col" style={{ background: "#1a1a2e" }}>
      {/* Title bar */}
      <WindowTitleBar>
        <div className="ml-2 flex flex-1 items-center justify-center">
          <span className="text-[9px] text-white/50">Slack — Acme Inc</span>
        </div>
      </WindowTitleBar>

      <div className="flex flex-1 min-h-0">
        {/* Sidebar */}
        <div
          className="flex w-[80px] flex-shrink-0 flex-col py-[4px]"
          style={{ background: "#13132b", borderRight: "1px solid rgba(255,255,255,0.06)" }}
        >
          {/* Workspace header */}
          <div className="px-[8px] py-[4px] mb-[4px]">
            <div className="flex items-center gap-[4px]">
              <div
                className="flex h-[14px] w-[14px] items-center justify-center rounded-[3px] text-[7px] font-bold text-white"
                style={{ background: "#611f69" }}
              >
                A
              </div>
              <span className="text-[8px] font-semibold text-white/80 truncate">Acme Inc</span>
            </div>
          </div>

          {/* Channels label */}
          <div className="px-[8px] py-[2px]">
            <span className="text-[7px] font-semibold text-white/30 uppercase tracking-wider">Channels</span>
          </div>

          {/* Channel list */}
          {sidebarChannels.map((ch) => (
            <div
              key={ch.name}
              className="mx-[4px] rounded-[3px] px-[6px] py-[2px] flex items-center gap-[4px]"
              style={{ background: ch.active ? "rgba(255,255,255,0.08)" : "transparent" }}
            >
              <span className="text-[7px] text-white/30">#</span>
              <span
                className="text-[8px] truncate"
                style={{
                  color: ch.unread ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.4)",
                  fontWeight: ch.unread ? 600 : 400,
                }}
              >
                {ch.name}
              </span>
            </div>
          ))}
        </div>

        {/* Main chat area */}
        <div className="flex flex-1 flex-col min-w-0" style={{ background: "#1a1a2e" }}>
          {/* Channel header */}
          <div
            className="flex items-center px-[10px] py-[5px]"
            style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
          >
            <span className="text-[7px] text-white/30 mr-[3px]">#</span>
            <span className="text-[9px] font-semibold text-white/80">product</span>
            <span className="ml-[6px] text-[7px] text-white/25">3 members</span>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-hidden px-[10px] py-[6px] space-y-[8px]">
            {CHANNEL_MESSAGES.map((msg, i) => (
              <div key={i} className="flex gap-[6px]">
                <div
                  className="flex h-[18px] w-[18px] flex-shrink-0 items-center justify-center rounded-[4px] text-[7px] font-bold text-white"
                  style={{ background: msg.color }}
                >
                  {msg.initials}
                </div>
                <div className="min-w-0">
                  <div className="flex items-baseline gap-[4px]">
                    <span className="text-[8px] font-semibold text-white/80">{msg.name}</span>
                    <span className="text-[6px] text-white/20">{msg.time}</span>
                  </div>
                  <p className="text-[8px] leading-[12px] text-white/60">{msg.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Message input — dictated text appears here */}
          <div className="px-[8px] py-[6px]">
            <div
              className="rounded-[5px] px-[8px] py-[5px] min-h-[22px]"
              style={{
                border: typeProgress > 0
                  ? "1px solid rgba(255,255,255,0.15)"
                  : "1px solid rgba(255,255,255,0.08)",
                background: typeProgress > 0 ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.02)",
                transition: "border-color 0.3s, background 0.3s",
              }}
            >
              <span className="text-[8px] leading-[12px]">
                {typeProgress > 0 ? (
                  <span className="text-white/70">
                    {visibleText}
                    {showCursor && (
                      <span
                        className="inline-block w-[1px] h-[9px] ml-[1px] align-baseline"
                        style={{
                          background: "rgba(255,255,255,0.6)",
                          animation: "blink-cursor 1s step-end infinite",
                        }}
                      />
                    )}
                  </span>
                ) : (
                  <span className="text-white/20">Message #product</span>
                )}
              </span>
            </div>
            {/* Toolbar icons */}
            <div className="mt-[3px] flex items-center gap-[6px] px-[2px]">
              <svg width="8" height="8" viewBox="0 0 24 24" fill="none">
                <path d="M12 20h9M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" stroke="rgba(255,255,255,0.2)" strokeWidth="2" strokeLinecap="round" />
              </svg>
              <svg width="8" height="8" viewBox="0 0 24 24" fill="none">
                <path d="M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48" stroke="rgba(255,255,255,0.2)" strokeWidth="2" strokeLinecap="round" />
              </svg>
              <svg width="8" height="8" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" stroke="rgba(255,255,255,0.2)" strokeWidth="2" />
                <path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01" stroke="rgba(255,255,255,0.2)" strokeWidth="2" strokeLinecap="round" />
              </svg>
              <div className="flex-1" />
              {/* Send button */}
              <div
                className="flex h-[14px] w-[14px] items-center justify-center rounded-[3px]"
                style={{
                  background: typeProgress >= 1 ? "#007a5a" : "rgba(255,255,255,0.04)",
                  transition: "background 0.3s",
                }}
              >
                <svg width="8" height="8" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"
                    stroke={typeProgress >= 1 ? "#fff" : "rgba(255,255,255,0.15)"}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
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
