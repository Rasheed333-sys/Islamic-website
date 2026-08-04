"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import type { MultipleChoiceExercise as MultipleChoiceExerciseType } from "@/lib/types/learning";

interface MultipleChoiceExerciseProps {
  exercise: MultipleChoiceExerciseType;
  onComplete: (wasCorrect: boolean) => void;
}

export function MultipleChoiceExercise({ exercise, onComplete }: MultipleChoiceExerciseProps) {
  const [selected, setSelected] = useState<number | null>(null);

  const hasAnswered = selected !== null;
  const isCorrect = selected === exercise.correctIndex;

  return (
    <div className="flex flex-col items-center">
      <p className="text-sm font-medium uppercase tracking-wide text-ink-soft dark:text-ink-inverted/50">
        Quick check
      </p>

      <h3 className="mt-4 max-w-md text-balance text-center font-display text-xl font-medium text-ink dark:text-ink-inverted">
        {exercise.prompt}
      </h3>

      {exercise.promptArabic && (
        <span className="arabic mt-4 text-5xl text-ink dark:text-ink-inverted">
          {exercise.promptArabic}
        </span>
      )}

      <div className="mt-8 grid w-full max-w-md grid-cols-1 gap-3 sm:grid-cols-2">
        {exercise.options.map((option, index) => {
          const isSelected = selected === index;
          const isCorrectOption = index === exercise.correctIndex;
          const showState = hasAnswered && (isSelected || isCorrectOption);

          return (
            <button
              key={option}
              type="button"
              disabled={hasAnswered}
              onClick={() => setSelected(index)}
              className={cn(
                "flex items-center justify-between rounded-xl border px-4 py-3.5 text-left text-[15px] font-medium transition-colors duration-200",
                "border-line bg-bg-elevated text-ink hover:border-emerald-300 hover:bg-emerald-50 dark:border-line-dark dark:bg-bg-dark-elevated dark:text-ink-inverted dark:hover:border-emerald-700 dark:hover:bg-emerald-900/20",
                showState &&
                  isCorrectOption &&
                  "border-emerald-600 bg-emerald-50 text-emerald-800 dark:border-emerald-400 dark:bg-emerald-900/40 dark:text-emerald-300",
                showState &&
                  isSelected &&
                  !isCorrectOption &&
                  "border-red-400 bg-red-50 text-red-700 dark:border-red-500 dark:bg-red-950/30 dark:text-red-400",
                hasAnswered && !showState && "opacity-50",
              )}
            >
              {option}
              {showState && isCorrectOption && <Check className="h-4 w-4 shrink-0" />}
              {showState && isSelected && !isCorrectOption && <X className="h-4 w-4 shrink-0" />}
            </button>
          );
        })}
      </div>

      {hasAnswered && (
        <motion.p
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          className={cn(
            "mt-6 max-w-md text-center text-sm leading-relaxed",
            isCorrect
              ? "text-emerald-700 dark:text-emerald-300"
              : "text-ink-muted dark:text-ink-inverted/70",
          )}
        >
          {exercise.explanation}
        </motion.p>
      )}

      <div className="mt-8 w-full max-w-xs">
        {hasAnswered && (
          <Button size="lg" className="w-full" onClick={() => onComplete(isCorrect)}>
            Continue
          </Button>
        )}
      </div>
    </div>
  );
}