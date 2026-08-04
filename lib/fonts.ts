import { Fraunces, Plus_Jakarta_Sans, Noto_Kufi_Arabic, Amiri } from "next/font/google";

/**
 * Display serif — used sparingly for headlines. Its warmth and slight
 * calligraphic contrast echoes manuscript typography without imitating
 * Arabic script directly.
 */
export const fontDisplay = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

/**
 * Body sans — comfortable for long-form reading of lessons and UI copy.
 */
export const fontBody = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

/**
 * Arabic UI face — used for interface labels, navigation, and short
 * Arabic strings where a clean geometric kufi reads clearly at small sizes.
 */
export const fontArabicUi = Noto_Kufi_Arabic({
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-arabic-ui",
  display: "swap",
});

/**
 * Arabic Qur'an/Dua face — a traditional naskh style reserved for Qur'anic
 * ayat and dua text, kept visually distinct from UI Arabic.
 */
export const fontArabicQuran = Amiri({
  subsets: ["arabic"],
  weight: ["400", "700"],
  variable: "--font-arabic-quran",
  display: "swap",
});