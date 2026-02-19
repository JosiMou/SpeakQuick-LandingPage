import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "blob-drift-1": {
          "0%, 100%": { transform: "translate(0, 0) scale(1) rotate(0deg)" },
          "25%": { transform: "translate(5%, 10%) scale(1.05) rotate(5deg)" },
          "50%": { transform: "translate(-5%, 5%) scale(0.95) rotate(-3deg)" },
          "75%": { transform: "translate(8%, -5%) scale(1.02) rotate(2deg)" },
        },
        "blob-drift-2": {
          "0%, 100%": { transform: "translate(0, 0) scale(1) rotate(0deg)" },
          "33%": { transform: "translate(-8%, -6%) scale(1.08) rotate(-4deg)" },
          "66%": { transform: "translate(6%, 8%) scale(0.92) rotate(6deg)" },
        },
        "blob-drift-3": {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "50%": { transform: "translate(3%, -4%) scale(1.1)" },
        },
        "pulse-ring": {
          "0%": { transform: "scale(0.8)", opacity: "0.5" },
          "100%": { transform: "scale(2)", opacity: "0" },
        },
        "waveform": {
          "0%, 100%": { height: "20%" },
          "50%": { height: "100%" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.6s ease-out forwards",
        "blob-drift-1": "blob-drift-1 25s ease-in-out infinite",
        "blob-drift-2": "blob-drift-2 20s ease-in-out infinite",
        "blob-drift-3": "blob-drift-3 30s ease-in-out infinite",
        "pulse-ring": "pulse-ring 2s ease-out infinite",
        "waveform": "waveform 1s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
