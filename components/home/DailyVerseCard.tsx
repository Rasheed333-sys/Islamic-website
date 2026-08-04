"use client";

import { motion } from "framer-motion";
import { BookMarked, Volume2 } from "lucide-react";
import { GeometricStar } from "@/components/ui/GeometricStar";

/**
 * Static placeholder content shown until the live "verse of the day" is
 * fetched from the Qur'an data layer (see lib/quran). Kept structurally
 * identical to the live card so no layout shift occurs on hydration.
 */
const PLACEHOLDER_VERSE = {
  surahName: "Ash-Sharh",
  surahNumber: 94,
  ayahNumber: 6,
  arabic: "إِنَّ مَعَ ٱلْعُسْرِ يُسْرًا",
  translation: "Indeed, with hardship comes ease.",
};

export function DailyVerseCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, rotate: -1 }}
      animate={{ opacity: 1, y: 0, rotate: -1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
      whileHover={{ rotate: 0, y: -4 }}
      className="surface-glass relative w-full max-w-sm rounded-lg p-7 shadow-glow"
    >
      <div className="absolute -right-3 -top-3 rounded-full bg-bg-elevated p-2 shadow-soft dark:bg-bg-dark-elevated">
        <GeometricStar size={22} spin className="text-gold-500" />
      </div>

      <div className="flex items-center justify-between">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300">
          Verse of the day
        </span>
        <button
          type="button"
          aria-label="Play recitation"
          className="flex h-8 w-8 items-center justify-center rounded-full text-emerald-700 transition-colors hover:bg-emerald-50 dark:text-emerald-300 dark:hover:bg-emerald-900/40"
        >
          <Volume2 className="h-4 w-4" />
        </button>
      </div>

      <p className="arabic mt-6 text-right text-arabic-md font-normal text-ink dark:text-ink-inverted">
        {PLACEHOLDER_VERSE.arabic}
      </p>

      <p className="mt-4 text-[15px] leading-relaxed text-ink-muted dark:text-ink-inverted/70">
        &ldquo;{PLACEHOLDER_VERSE.translation}&rdquo;
      </p>

      <div className="mt-5 flex items-center justify-between border-t border-line pt-4 text-xs text-ink-soft dark:border-line-dark dark:text-ink-inverted/50">
        <span>
          Surah {PLACEHOLDER_VERSE.surahName} · {PLACEHOLDER_VERSE.surahNumber}:
          {PLACEHOLDER_VERSE.ayahNumber}
        </span>
        <button
          type="button"
          className="inline-flex items-center gap-1 font-medium text-emerald-700 hover:text-emerald-900 dark:text-emerald-300 dark:hover:text-emerald-200"
        >
          <BookMarked className="h-3.5 w-3.5" />
          Save
        </button>
      </div>
    </motion.div>
  );
}