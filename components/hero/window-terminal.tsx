"use client";

import { WindowTitleBar } from "./app-window";

interface WindowTerminalProps {
  progress: number;
}

/** Code lines with syntax highlighting colors */
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

/**
 * VS Code / Cursor-like code editor replica.
 * Shows SpeakQuick-related Rust code with syntax highlighting.
 */
export function WindowTerminal({ progress }: WindowTerminalProps) {
  // Cycle 3: pill active 0.80–0.94, code lines type within that window
  const typewriterStart = 0.82;
  const totalLines = CODE_LINES.length;

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

      {/* Gradient separator like VS Code */}
      <div
        className="h-[1px] w-full"
        style={{
          background: "linear-gradient(to right, rgba(255,255,255,0.3), rgba(255,255,255,0.08), transparent)",
        }}
      />

      <div className="flex flex-1 min-h-0">
        {/* Code panel */}
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
              {/* Rust icon */}
              <svg width="10" height="10" viewBox="0 0 24 24" fill="#DEA584">
                <circle cx="12" cy="12" r="10" />
                <text x="12" y="16" textAnchor="middle" fill="#000" fontSize="11" fontWeight="bold">R</text>
              </svg>
              <span className="text-[9px] text-white/80">mod.rs</span>
              <svg width="8" height="8" viewBox="0 0 24 24" fill="none" className="ml-1 opacity-0 group-hover:opacity-50">
                <path d="M6 6l12 12M18 6L6 18" stroke="white" strokeWidth="2" />
              </svg>
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

          {/* Code area */}
          <div className="flex-1 overflow-hidden py-[4px]" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
            {CODE_LINES.map((line, i) => {
              // Each line fades in based on scroll progress
              const lineStart = typewriterStart + (i / totalLines) * 0.12;
              const lineProgress = Math.max(0, Math.min(1, (progress - lineStart) / 0.02));

              return (
                <div
                  key={line.num}
                  className="flex items-center leading-[14px]"
                  style={{ opacity: lineProgress > 0 ? 1 : 0.15 }}
                >
                  {/* Line number */}
                  <span
                    className="w-[28px] flex-shrink-0 text-right pr-[8px] text-[8px] select-none"
                    style={{ color: "rgba(255,255,255,0.15)" }}
                  >
                    {line.num}
                  </span>
                  {/* Code tokens */}
                  <span className="text-[8px] whitespace-pre">
                    {line.tokens.map((token, j) => (
                      <span key={j} style={{ color: token.color }}>
                        {token.text}
                      </span>
                    ))}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right panel: AI chat (like Codex's assistant) */}
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

          {/* AI message */}
          <div className="flex-1 px-[6px] py-[2px]">
            <p className="text-[7px] leading-[10px] text-white/40">
              The transcription pipeline processes audio through speaker detection, then iterates
              segments for Whisper inference.
            </p>
          </div>

          {/* Input */}
          <div className="px-[6px] py-[6px]">
            <div
              className="rounded-[4px] px-[6px] py-[3px]"
              style={{ border: "1px solid rgba(255,255,255,0.1)" }}
            >
              <span className="text-[7px] text-white/20">Ask about this code...</span>
            </div>
            {/* Model selector */}
            <div className="mt-[4px] flex items-center gap-[3px]">
              <span className="text-[6px] text-white/25">Model:</span>
              <span className="text-[6px] text-white/40">claude-4-sonnet</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
