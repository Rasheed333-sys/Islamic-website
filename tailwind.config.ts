import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        sm: "2rem",
        lg: "3rem",
        xl: "4rem",
      },
    },
    extend: {
      colors: {
        bg: {
          DEFAULT: "#FAF8F3",
          elevated: "#FFFFFF",
          dark: "#0D1917",
          "dark-elevated": "#142622",
        },
        ink: {
          DEFAULT: "#142420",
          muted: "#4A5D57",
          soft: "#6E827B",
          inverted: "#F3F1E9",
        },
        emerald: {
          950: "#07231C",
          900: "#0B3B30",
          800: "#0F4E3F",
          700: "#146B54",
          600: "#1A8267",
          500: "#1F9574",
          400: "#4CB08F",
          300: "#8ECFB7",
          100: "#DCF0E7",
          50: "#F0F8F4",
        },
        gold: {
          700: "#8C6A2C",
          600: "#B98A3E",
          500: "#C9A15C",
          400: "#D4AF6A",
          300: "#E4CB98",
          100: "#F6ECD6",
        },
        line: {
          DEFAULT: "rgba(20,36,32,0.10)",
          dark: "rgba(243,241,233,0.10)",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
        arabicUi: ["var(--font-arabic-ui)", "sans-serif"],
        arabicQuran: ["var(--font-arabic-quran)", "serif"],
      },
      fontSize: {
        "display-xl": ["clamp(2.75rem, 5vw, 4.75rem)", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "display-lg": ["clamp(2.25rem, 4vw, 3.5rem)", { lineHeight: "1.08", letterSpacing: "-0.015em" }],
        "display-md": ["clamp(1.75rem, 2.5vw, 2.5rem)", { lineHeight: "1.15", letterSpacing: "-0.01em" }],
        "arabic-lg": ["clamp(1.75rem, 3vw, 2.75rem)", { lineHeight: "2.1" }],
        "arabic-md": ["clamp(1.375rem, 2vw, 1.875rem)", { lineHeight: "2" }],
      },
      borderRadius: {
        xs: "0.5rem",
        sm: "0.75rem",
        md: "1rem",
        lg: "1.5rem",
        xl: "2rem",
        "2xl": "2.5rem",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(20,36,32,0.04), 0 8px 24px -8px rgba(20,36,32,0.10)",
        card: "0 2px 4px rgba(20,36,32,0.04), 0 16px 40px -12px rgba(20,36,32,0.14)",
        glow: "0 0 0 1px rgba(31,149,116,0.12), 0 20px 60px -20px rgba(31,149,116,0.35)",
      },
      backgroundImage: {
        "emerald-glow":
          "radial-gradient(60% 60% at 50% 40%, rgba(31,149,116,0.16) 0%, rgba(31,149,116,0) 70%)",
        "gold-glow":
          "radial-gradient(50% 50% at 50% 50%, rgba(201,161,92,0.18) 0%, rgba(201,161,92,0) 70%)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "star-spin-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s cubic-bezier(0.16,1,0.3,1) forwards",
        "star-spin-slow": "star-spin-slow 40s linear infinite",
      },
      transitionTimingFunction: {
        calm: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};

export default config;