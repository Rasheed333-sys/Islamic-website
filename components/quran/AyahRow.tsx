"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Bookmark, Volume2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { useQuranStore } from "@/lib/store/useQuranStore";
import { getAyahAudioUrl } from "@/lib/quran/audio";
import { RECITATION_EDITION } from "@/lib/quran/editions";
import type { PairedAyah } from "@/lib/quran/types";

interface AyahRowProps {
  ayah: PairedAyah;
  surahNumber: number;
  surahName: string;
  wordByWord: boolean;
}

export function AyahRow({ ayah, surahNumber, surahName, wordByWord }: AyahRowProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const isBookmarked = useQuranStore((s) => s.isBookmarked(surahNumber, ayah.numberInSurah));
  const toggleBookmark = useQuranStore((s) => s.toggleBookmark);

  function playAyah() {
    if (!audioRef.current) {
      audioRef.current = new Audio(getAyahAudioUrl(ayah.globalAyahNumber, RECITATION_EDITION));
    }
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
      return;
    }
    audioRef.current.play();
    setIsPlaying(true);
    audioRef.current.onended = () => setIsPlaying(false);
  }

  const arabicWords = ayah.arabic.split(" ");

  return (
    <motion.div
      id={`ayah-${ayah.numberInSurah}`}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="scroll-mt-24 border-b border-line py-8 dark:border-line-dark"
    >
      <div className="flex items-start justify-between gap-4">
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-emerald-200 bg-emerald-50 text-xs font-semibold text-emerald-800 dark:border-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300">
          {ayah.numberInSurah}
        </span>

        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={playAyah}
            aria-label={isPlaying ? "Pause recitation" : "Play recitation"}
            className={cn(
              "flex h-9 w-9 items-center justify-center rounded-full transition-colors",
              isPlaying
                ? "bg-emerald-600 text-white"
                : "text-emerald-700 hover:bg-emerald-50 dark:text-emerald-300 dark:hover:bg-emerald-900/40",
            )}
          >
            <Volume2 className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() =>
              toggleBookmark({
                surahNumber,
                surahName,
                ayahNumberInSurah: ayah.numberInSurah,
              })
            }
            aria-label={isBookmarked ? "Remove bookmark" : "Bookmark this ayah"}
            aria-pressed={isBookmarked}
            className={cn(
              "flex h-9 w-9 items-center justify-center rounded-full transition-colors",
              isBookmarked
                ? "text-gold-600 dark:text-gold-400"
                : "text-ink-soft hover:bg-gold-100 hover:text-gold-600 dark:text-ink-inverted/40 dark:hover:bg-gold-500/10 dark:hover:text-gold-400",
            )}
          >
            <Bookmark className="h-4 w-4" fill={isBookmarked ? "currentColor" : "none"} />
          </button>
        </div>
      </div>

      {wordByWord ? (
        <p className="arabic mt-6 flex flex-wrap justify-end gap-x-3 gap-y-3 text-right text-arabic-lg leading-[2.6] text-ink dark:text-ink-inverted">
          {arabicWords.map((word, i) => (
            <span
              key={i}
              className="rounded-md px-1 transition-colors hover:bg-emerald-50 dark:hover:bg-emerald-900/30"
            >
              {word}
            </span>
          ))}
        </p>
      ) : (
        <p className="arabic mt-6 text-right text-arabic-lg text-ink dark:text-ink-inverted">
          {ayah.arabic}
        </p>
      )}

      <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-ink-muted dark:text-ink-inverted/70">
        {ayah.translation}
      </p>
    </motion.div>
  );
}