import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "brand-red": "#d42b2b",
        "brand-orange": "#e85a1b",
        "brand-gold": "#f0ac3c",
        "brand-amber": "#e8941b",
        "brand-charcoal": "#1a1008",
        "brand-dark": "#0d0a04",
        "brand-dark2": "#110e06",
        "brand-cream": "#fdf5e4",
        "brand-muted": "#a08060",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "bounce-subtle": "bounce-subtle 2s ease-in-out infinite",
        "slide-up": "slideUp 0.35s ease-out",
        "fade-in": "fadeIn 0.4s ease-out",
        "glow-pulse": "glowPulse 2s ease-in-out infinite",
      },
      keyframes: {
        "bounce-subtle": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-4px)" },
        },
        slideUp: {
          "0%": { transform: "translateY(100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        glowPulse: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(232, 90, 27, 0.4)" },
          "50%": { boxShadow: "0 0 40px rgba(232, 90, 27, 0.8)" },
        },
      },
      backgroundImage: {
        "flame-gradient":
          "radial-gradient(ellipse at center, rgba(232, 90, 27, 0.15) 0%, rgba(212, 43, 43, 0.08) 45%, transparent 70%)",
        "card-gradient":
          "linear-gradient(135deg, rgba(26, 16, 8, 0.95) 0%, rgba(17, 14, 6, 0.98) 100%)",
        "gold-gradient":
          "linear-gradient(135deg, #f0ac3c 0%, #e8941b 50%, #e85a1b 100%)",
        "hero-radial":
          "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(232, 90, 27, 0.2) 0%, rgba(212, 43, 43, 0.1) 40%, transparent 70%)",
      },
    },
  },
  plugins: [],
};

export default config;
