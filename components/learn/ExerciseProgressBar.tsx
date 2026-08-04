"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ExerciseProgressBarProps {
  total: number;
  currentIndex: number;
}

export function ExerciseProgressBar({ total, currentIndex }: ExerciseProgressBarProps) {
  return (
    <div className="flex gap-1.5" role="progressbar" aria-valuemin={0} aria-valuemax={total} aria-valuenow={currentIndex}>
      {Array.from({ length: total }).map((_, index) => (
        <div
          key={index}
          className={cn(
            "h-1.5 flex-1 overflow-hidden rounded-full bg-line dark:bg-line-dark",
          )}
        >
          {index <= currentIndex && (
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="h-full origin-left rounded-full bg-emerald-600 dark:bg-emerald-400"
            />
          )}
        </div>
      ))}
    </div>
  );
}