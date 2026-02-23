"use client";

export type TimeTheme = "night" | "dusk" | "day";

interface DemoGradientLayersProps {
  theme: TimeTheme;
  progress: number;
}

/**
 * Multi-layered gradient wallpaper backgrounds for three time-of-day themes.
 * Each theme uses stacked radial + linear gradients for depth and visual richness.
 */
export function DemoGradientLayers({
  theme,
  progress,
}: DemoGradientLayersProps) {
  const layerOpacity = Math.max(0, Math.min(1, (progress - 0.15) / 0.15));

  return (
    <div className="absolute inset-0 z-0" style={{ opacity: layerOpacity }}>
      {/* Night: deep blue-black with cyan ambient glow */}
      <div
        className="absolute inset-0 transition-opacity duration-[1200ms]"
        style={{
          opacity: theme === "night" ? 1 : 0,
          background: [
            "radial-gradient(ellipse 120% 80% at 25% 20%, rgba(20, 60, 140, 0.4) 0%, transparent 60%)",
            "radial-gradient(ellipse 100% 70% at 75% 70%, rgba(0, 180, 200, 0.15) 0%, transparent 55%)",
            "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(10, 30, 80, 0.5) 0%, transparent 70%)",
            "linear-gradient(180deg, hsl(220 40% 7%) 0%, hsl(230 30% 4%) 100%)",
          ].join(", "),
        }}
      />
      {/* Dusk: warm purple horizon fading into deep navy */}
      <div
        className="absolute inset-0 transition-opacity duration-[1200ms]"
        style={{
          opacity: theme === "dusk" ? 1 : 0,
          background: [
            "linear-gradient(180deg, rgba(0,0,0,0.3) 0%, rgba(0,5,46,0.5) 25%, rgba(41,40,94,0.5) 55%, rgba(84,60,123,0.5) 75%, rgba(133,90,146,0.4) 90%, rgba(195,134,171,0.3) 100%)",
            "radial-gradient(ellipse 140% 60% at 50% 100%, rgba(195,134,171,0.3) 0%, transparent 60%)",
            "radial-gradient(ellipse 80% 50% at 30% 30%, rgba(30,20,80,0.5) 0%, transparent 60%)",
          ].join(", "),
        }}
      />
      {/* Day: blue sky with soft golden light from the right */}
      <div
        className="absolute inset-0 transition-opacity duration-[1200ms]"
        style={{
          opacity: theme === "day" ? 1 : 0,
          background: [
            "linear-gradient(90deg, rgba(25,74,232,0.15) 0%, rgba(255,190,10,0.12) 100%)",
            "radial-gradient(ellipse 170% 100% at 50% -5%, rgba(38,84,144,0.5) 15%, rgba(255,255,255,0.3) 100%)",
            "radial-gradient(ellipse 100% 60% at 80% 80%, rgba(255,200,50,0.1) 0%, transparent 55%)",
            "linear-gradient(180deg, hsl(215 45% 18%) 0%, hsl(210 35% 12%) 100%)",
          ].join(", "),
        }}
      />
    </div>
  );
}
