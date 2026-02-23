"use client";

/**
 * Layered hero background: rich mesh gradient base + slowly drifting
 * gradient orbs for organic depth. No photography required.
 */

const orbs = [
  {
    // Large blue glow — upper left, drifts right and down
    size: "45vw",
    left: "-5%",
    top: "-10%",
    gradient:
      "radial-gradient(circle, rgba(0, 100, 230, 0.18) 0%, rgba(0, 60, 180, 0.06) 40%, transparent 70%)",
    blur: 80,
    animation: "orb-drift-1 20s ease-in-out infinite",
  },
  {
    // Teal accent — right side, drifts left and up
    size: "35vw",
    left: "65%",
    top: "25%",
    gradient:
      "radial-gradient(circle, rgba(20, 200, 170, 0.12) 0%, rgba(28, 236, 187, 0.04) 40%, transparent 70%)",
    blur: 100,
    animation: "orb-drift-2 25s ease-in-out infinite",
  },
  {
    // Deep indigo — bottom center, drifts up
    size: "40vw",
    left: "25%",
    top: "60%",
    gradient:
      "radial-gradient(circle, rgba(80, 40, 180, 0.1) 0%, rgba(40, 20, 120, 0.04) 40%, transparent 70%)",
    blur: 90,
    animation: "orb-drift-3 22s ease-in-out infinite",
  },
] as const;

export function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Rich mesh gradient base */}
      <div className="absolute inset-0 hero-atmosphere" />

      {/* Floating gradient orbs */}
      {orbs.map((orb, i) => (
        <div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: orb.size,
            height: orb.size,
            left: orb.left,
            top: orb.top,
            background: orb.gradient,
            filter: `blur(${orb.blur}px)`,
            animation: orb.animation,
            willChange: "transform",
          }}
        />
      ))}
    </div>
  );
}
