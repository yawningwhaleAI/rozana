import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content.ts",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#FAF3E3",
        green: {
          DEFAULT: "#14512F",
          deep: "#14512F",
        },
        yellow: {
          DEFAULT: "#F2C230",
          warm: "#F2C230",
        },
        tomato: "#D6412B",
        navy: "#1D4E89",
        charcoal: "#2B2B2B",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        hand: ["var(--font-hand)", "cursive"],
      },
      borderRadius: {
        pill: "999px",
      },
      maxWidth: {
        content: "1120px",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "draw-underline": {
          "0%": { transform: "scaleX(0)" },
          "100%": { transform: "scaleX(1)" },
        },
        "sparkle-pop": {
          "0%,100%": { transform: "scale(1) rotate(0deg)", opacity: "0.9" },
          "50%": { transform: "scale(1.15) rotate(8deg)", opacity: "1" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out both",
        "sparkle-pop": "sparkle-pop 2.4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
