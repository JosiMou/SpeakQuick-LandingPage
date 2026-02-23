"use client";

import { type ReactNode } from "react";

interface AppWindowProps {
  children: ReactNode;
  progress: number;
  showThreshold: number;
  className?: string;
  style?: React.CSSProperties;
}

export function AppWindow({
  children,
  progress,
  showThreshold,
  className = "",
  style,
}: AppWindowProps) {
  const windowProgress = Math.max(
    0,
    Math.min(1, (progress - showThreshold) / 0.08)
  );

  // Cubic ease-out for spring-like pop
  const eased =
    windowProgress < 1 ? 1 - Math.pow(1 - windowProgress, 3) : 1;

  const scale = eased;
  const translateY = (1 - eased) * 280;
  const opacity = eased;
  const brightness = 1 + (1 - eased) * 0.3;

  return (
    <div
      className={`overflow-hidden ${className}`}
      style={{
        transform:
          opacity > 0
            ? `scale(${scale}) translateY(${translateY}px)`
            : "scale(0)",
        opacity,
        filter: opacity > 0 ? `brightness(${brightness})` : undefined,
        transformOrigin: "bottom center",
        borderRadius: 11,
        boxShadow: "rgba(0, 0, 0, 0.3) 0px 8px 32px",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

/** Reusable macOS title bar with traffic lights */
export function WindowTitleBar({
  children,
  className = "",
  style,
}: {
  children?: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      className={`group/titlebar flex items-center gap-2 px-[14px] py-[10px] ${className}`}
      style={style}
    >
      <div className="flex flex-row gap-[8px]">
        <div className="flex h-[12px] w-[12px] items-center justify-center rounded-full bg-[#555] group-hover/titlebar:bg-[#ED6A5E]">
          <svg
            className="pointer-events-none hidden group-hover/titlebar:block"
            width="6"
            height="6"
            viewBox="0 0 6 6"
            fill="none"
          >
            <path
              d="M0.5 0.5L5.5 5.5M5.5 0.5L0.5 5.5"
              stroke="black"
              strokeOpacity="0.5"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <div className="flex h-[12px] w-[12px] items-center justify-center rounded-full bg-[#555] group-hover/titlebar:bg-[#F4BD4F]">
          <svg
            className="pointer-events-none hidden group-hover/titlebar:block"
            width="6"
            height="2"
            viewBox="0 0 6 2"
            fill="none"
          >
            <path
              d="M0.5 1H5.5"
              stroke="black"
              strokeOpacity="0.5"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <div className="flex h-[12px] w-[12px] items-center justify-center rounded-full bg-[#555] group-hover/titlebar:bg-[#61C354]">
          <svg
            className="pointer-events-none hidden group-hover/titlebar:block"
            width="6"
            height="6"
            viewBox="0 0 6 6"
            fill="none"
          >
            <path
              d="M0.5 3.5L2.5 5.5L5.5 0.5"
              stroke="black"
              strokeOpacity="0.5"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
      {children}
    </div>
  );
}
