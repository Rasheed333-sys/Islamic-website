"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Volume2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import type { FlashcardExercise as FlashcardExerciseType } from "@/lib/types/learning";

interface FlashcardExerciseProps {
  exercise: FlashcardExerciseType;
  onComplete: () => void;
}

export function FlashcardExercise({ exercise, onComplete }: FlashcardExerciseProps) {
  const [revealed, setRevealed] = useState(false);

  return (
    <div className="flex flex-col items-center">
      <p className="text-sm font-medium uppercase tracking-wide text-ink-soft dark:text-ink-inverted/50">
        New letter
      </p>

      <div className="mt-8 flex flex-col items-center gap-4 rounded-lg border border-line bg-bg-elevated px-16 py-14 shadow-card dark:border-line-dark dark:bg-bg-dark-elevated">
        <button
          type="button"
          aria-label="Play pronunciation"
          className="flex h-10 w-10 items-center justify-center rounded-full text-emerald-700 transition-colors hover:bg-emerald-50 dark:text-emerald-300 dark:hover:bg-emerald-900/40"
        >
          <Volume2 className="h-5 w-5" />
        </button>
        <span className="arabic text-6xl text-ink dark:text-ink-inverted">{exercise.arabic}</span>

        <AnimatePresence mode="wait">
          {revealed ? (
            <motion.div
              key="revealed"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-2 max-w-xs text-center"
            >
              <p className="font-display text-xl font-medium text-emerald-800 dark:text-emerald-300">
                {exercise.transliteration}
              </p>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-muted dark:text-ink-inverted/70">
                {exercise.meaning}
              </p>
              {exercise.hint && (
                <p className="mt-2 text-xs text-gold-600 dark:text-gold-400">
                  Tip: {exercise.hint}
                </p>
              )}
            </motion.div>
          ) : (
            <motion.p
              key="hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-2 text-sm text-ink-soft dark:text-ink-inverted/40"
            >
              Tap reveal to see how it sounds
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      <div className="mt-8 flex w-full max-w-xs flex-col gap-3">
        {!revealed ? (
          <Button size="lg" onClick={() => setRevealed(true)}>
            Reveal
          </Button>
        ) : (
          <Button size="lg" onClick={onComplete}>
            Continue
          </Button>
        )}
      </div>
    </div>
  );
}