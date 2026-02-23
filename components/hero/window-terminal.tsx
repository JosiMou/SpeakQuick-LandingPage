"use client";

import { WindowTitleBar } from "./app-window";

interface WindowTerminalProps {
  progress: number;
}

/** Static code lines — always visible as context */
const CODE_LINES: Array<{ num: number; tokens: Array<{ text: string; color: string }> }> = [
  { num: 45, tokens: [{ text: "  fn ", color: "#DB90A5" }, { text: "process_audio", color: "#9CCCC2" }, { text: "(", color: "#ccc" }, { text: "&self", color: "#DB90A5" }, { text: ", path: ", color: "#ccc" }, { text: "&Path", color: "#9CCCC2" }, { text: ") -> ", color: "#ccc" }, { text: "Result", color: "#9CCCC2" }, { text: "<", color: "#ccc" }, { text: "Transcript", color: "#9CCCC2" }, { text: "> {", color: "#ccc" }] },
  { num: 46, tokens: [{ text: "    let ", color: "#DB90A5" }, { text: "audio = ", color: "#ccc" }, { text: "AudioFile", color: "#9CCCC2" }, { text: "::load(path)?;", color: "#ccc" }] },
  { num: 47, tokens: [{ text: "    let ", color: "#DB90A5" }, { text: "segments = self.", color: "#ccc" }, { text: "detect_speakers", color: "#D3C207" }, { text: "(&audio);", color: "#ccc" }] },
  { num: 48, tokens: [] },
  { num: 49, tokens: [{ text: "    // Transcribe each speaker segment", color: "#666" }] },
  { num: 50, tokens: [{ text: "    for ", color: "#DB90A5" }, { text: "segment ", color: "#ccc" }, { text: "in ", color: "#DB90A5" }, { text: "&segments {", color: "#ccc" }] },
  { num: 51, tokens: [{ text: "      let ", color: "#DB90A5" }, { text: "text = self.", color: "#ccc" }, { text: "whisper", color: "#9CCCC2" }, { text: ".", color: "#ccc" }, { text: "transcribe", color: "#D3C207" }, { text: "(", color: "#ccc" }] },
  { num: 52, tokens: [{ text: "        &segment.", color: "#ccc" }, { text: "audio_data", color: "#9CCCC2" }, { text: ",", color: "#ccc" }] },
  { num: 53, tokens: [{ text: "        self.", color: "#ccc" }, { text: "config", color: "#9CCCC2" }, { text: ".", color: "#ccc" }, { text: "language", color: "#9CCCC2" }, { text: ",", color: "#ccc" }] },
  { num: 54, tokens: [{ text: "      )?;", color: "#ccc" }] },
  { num: 55, tokens: [{ text: "      result.", color: "#ccc" }, { text: "push", color: "#D3C207" }, { text: "(", color: "#ccc" }, { text: "Entry", color: "#9CCCC2" }, { text: " {", color: "#ccc" }] },
  { num: 56, tokens: [{ text: "        speaker: segment.", color: "#ccc" }, { text: "speaker_id", color: "#9CCCC2" }, { text: ",", color: "#ccc" }] },
  { num: 57, tokens: [{ text: "        text,", color: "#ccc" }] },
  { num: 58, tokens: [{ text: "        timestamp: segment.", color: "#ccc" }, { text: "start", color: "#9CCCC2" }, { text: ",", color: "#ccc" }] },
  { num: 59, tokens: [{ text: "      });", color: "#ccc" }] },
  { num: 60, tokens: [{ text: "    }", color: "#ccc" }] },
  { num: 61, tokens: [] },
  { num: 62, tokens: [{ text: "    ", color: "#ccc" }, { text: "Ok", color: "#9CCCC2" }, { text: "(", color: "#ccc" }, { text: "Transcript", color: "#9CCCC2" }, { text: "::new(result))", color: "#ccc" }] },
  { num: 63, tokens: [{ text: "  }", color: "#ccc" }] },
];

/** The dictated prompt that types into the AI chat input */
const DICTATED_TEXT = "Refactor this to process segments in parallel using rayon and add proper error handling for each chunk";

/**
 * VS Code / Cursor-like code editor replica.
 * Code is static context. During Cycle 3 (pill active),
 * dictated text appears in the AI chat input.
 */
export function WindowTerminal({ progress }: WindowTerminalProps) {
  // Cycle 3: pill active 0.80–0.94, dictated text types within that window
  const typeStart = 0.82;
  const typeEnd = 0.92;
  const typeProgress = Math.max(0, Math.min(1, (progress - typeStart) / (typeEnd - typeStart)));

  // How many characters to show
  const charsVisible = Math.floor(typeProgress * DICTATED_TEXT.length);
  const visibleText = DICTATED_TEXT.slice(0, charsVisible);
  const showCursor = typeProgress > 0 && typeProgress < 1;

  return (
    <div className="flex h-full flex-col" style={{ background: "#181818" }}>
      {/* Title bar */}
      <WindowTitleBar>
        <div className="ml-3 flex items-center gap-[6px]">
          <svg width="9" height="9" viewBox="0 0 24 24" fill="none">
            <rect x="3" y="3" width="8" height="8" rx="1" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
            <rect x="13" y="3" width="8" height="8" rx="1" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
            <rect x="3" y="13" width="8" height="8" rx="1" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
            <rect x="13" y="13" width="8" height="8" rx="1" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
          </svg>
        </div>
      </WindowTitleBar>

      {/* Gradient separator */}
      <div
        className="h-[1px] w-full"
        style={{
          background: "linear-gradient(to right, rgba(255,255,255,0.3), rgba(255,255,255,0.08), transparent)",
        }}
      />

      <div className="flex flex-1 min-h-0">
        {/* Code panel — static context */}
        <div className="flex flex-1 flex-col min-w-0">
          {/* File tab */}
          <div className="flex items-center" style={{ background: "#1e1e1e" }}>
            <div
              className="flex items-center gap-[4px] px-[10px] py-[4px]"
              style={{
                background: "#181818",
                borderTop: "1.5px solid #0088FF",
                borderRight: "0.5px solid rgba(255,255,255,0.1)",
              }}
            >
              <svg width="10" height="10" viewBox="0 0 24 24" fill="#DEA584">
                <circle cx="12" cy="12" r="10" />
                <text x="12" y="16" textAnchor="middle" fill="#000" fontSize="11" fontWeight="bold">R</text>
              </svg>
              <span className="text-[9px] text-white/80">mod.rs</span>
            </div>
          </div>

          {/* Breadcrumb */}
          <div className="flex items-center gap-[2px] px-[10px] py-[2px]" style={{ background: "#1e1e1e" }}>
            <span className="text-[8px] text-white/40">src</span>
            <svg width="6" height="6" viewBox="0 0 24 24" fill="none">
              <path d="M9 5l7 7-7 7" stroke="rgba(255,255,255,0.3)" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <span className="text-[8px] text-white/40">transcribe</span>
            <svg width="6" height="6" viewBox="0 0 24 24" fill="none">
              <path d="M9 5l7 7-7 7" stroke="rgba(255,255,255,0.3)" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <span className="text-[8px] text-white/60">mod.rs</span>
          </div>

          {/* Code area — always visible */}
          <div className="flex-1 overflow-hidden py-[4px]" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
            {CODE_LINES.map((line) => (
              <div key={line.num} className="flex items-center leading-[14px]">
                <span
                  className="w-[28px] flex-shrink-0 text-right pr-[8px] text-[8px] select-none"
                  style={{ color: "rgba(255,255,255,0.15)" }}
                >
                  {line.num}
                </span>
                <span className="text-[8px] whitespace-pre">
                  {line.tokens.map((token, j) => (
                    <span key={j} style={{ color: token.color }}>
                      {token.text}
                    </span>
                  ))}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right panel: AI chat */}
        <div
          className="flex w-[120px] flex-shrink-0 flex-col"
          style={{
            background: "#1a1a1a",
            borderLeft: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          {/* Panel header */}
          <div className="flex items-center justify-between px-[8px] py-[4px]" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
            <span className="text-[8px] font-semibold text-white/60">AI Chat</span>
            <div className="flex items-center gap-[4px]">
              <div className="h-[4px] w-[4px] rounded-full bg-emerald-400" />
            </div>
          </div>

          {/* Context pill */}
          <div className="px-[6px] py-[6px]">
            <div className="flex items-center gap-[3px] rounded-[4px] bg-white/5 px-[5px] py-[3px]">
              <svg width="7" height="7" viewBox="0 0 24 24" fill="none">
                <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" stroke="rgba(255,255,255,0.4)" strokeWidth="2" />
              </svg>
              <span className="text-[7px] text-white/50 truncate">mod.rs</span>
            </div>
          </div>

          {/* Input — dictated text appears here, pushed to bottom */}
          <div className="flex-1" />
          <div className="px-[6px] py-[6px]">
            <div
              className="flex items-end gap-[3px] rounded-[4px] px-[6px] py-[3px] min-h-[18px]"
              style={{
                border: typeProgress > 0
                  ? "1px solid rgba(0, 136, 255, 0.4)"
                  : "1px solid rgba(255,255,255,0.1)",
                background: typeProgress > 0 ? "rgba(0, 136, 255, 0.04)" : "transparent",
                transition: "border-color 0.3s, background 0.3s",
              }}
            >
              <span className="flex-1 text-[7px] leading-[10px]">
                {typeProgress > 0 ? (
                  <span className="text-white/70">
                    {visibleText}
                    {showCursor && (
                      <span
                        className="inline-block w-[3px] h-[8px] ml-[1px] align-middle"
                        style={{
                          background: "rgba(0, 136, 255, 0.8)",
                          animation: "blink-cursor 1s step-end infinite",
                        }}
                      />
                    )}
                  </span>
                ) : (
                  <span className="text-white/20">Ask about this code...</span>
                )}
              </span>
              {/* Send arrow */}
              <div
                className="flex h-[12px] w-[12px] flex-shrink-0 items-center justify-center rounded-[3px]"
                style={{
                  background: typeProgress >= 1 ? "rgba(0, 136, 255, 0.8)" : "rgba(255,255,255,0.06)",
                  transition: "background 0.3s",
                }}
              >
                <svg width="7" height="7" viewBox="0 0 24 24" fill="none">
                  <path d="M12 19V5M5 12l7-7 7 7" stroke={typeProgress >= 1 ? "#fff" : "rgba(255,255,255,0.25)"} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
            {/* Model selector */}
            <div className="mt-[3px] flex items-center gap-[3px]">
              <span className="text-[6px] text-white/25">Model:</span>
              <span className="text-[6px] text-white/40">claude-4-sonnet</span>
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
