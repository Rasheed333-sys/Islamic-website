import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        emerald: {
          50: '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          500: '#10b981',
          600: '#059669',
          700: '#047857',
          800: '#065f46',
          900: '#064e3b',
          950: '#022c22',
        },
        gold: {
          50: '#fbf8ec',
          100: '#f5eed3',
          200: '#ebd89e',
          300: '#e1c36a',
          400: '#d4af37', // Primary Warm Gold
          500: '#b89228',
          600: '#96731e',
          700: '#755718',
        },
        surface: {
          light: '#fdfbf7', // Soft Warm White
          dark: '#0f1712',  // Deep Green-Charcoal
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        arabic: ['var(--font-amiri)', 'serif'],
        display: ['var(--font-outfit)', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
        card: '0 10px 30px -5px rgba(16, 185, 129, 0.05)',
        glow: '0 0 25px -5px rgba(212, 175, 55, 0.2)',
      },
    },
  },
  plugins: [],
};

export default config;