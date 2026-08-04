"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Star, Target } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { GeometricStar } from "@/components/ui/GeometricStar";

interface LessonCompleteScreenProps {
  xpEarned: number;
  accuracyPercent: number;
  nextLessonId: string | null;
}

export function LessonCompleteScreen({
  xpEarned,
  accuracyPercent,
  nextLessonId,
}: LessonCompleteScreenProps) {
  return (
    <div className="flex flex-col items-center py-10 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <GeometricStar size={56} spin className="text-gold-500" />
      </motion.div>

      <h2 className="mt-6 font-display text-display-md font-medium text-ink dark:text-ink-inverted">
        Lesson complete
      </h2>
      <p className="mt-2 text-ink-muted dark:text-ink-inverted/70">
        Great pace — that knowledge is now part of your streak.
      </p>

      <div className="mt-8 flex gap-4">
        <div className="flex flex-col items-center gap-1 rounded-lg border border-line bg-bg-elevated px-6 py-4 dark:border-line-dark dark:bg-bg-dark-elevated">
          <Star className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
          <span className="font-display text-xl font-medium text-ink dark:text-ink-inverted">
            +{xpEarned} XP
          </span>
        </div>
        <div className="flex flex-col items-center gap-1 rounded-lg border border-line bg-bg-elevated px-6 py-4 dark:border-line-dark dark:bg-bg-dark-elevated">
          <Target className="h-5 w-5 text-gold-600 dark:text-gold-400" />
          <span className="font-display text-xl font-medium text-ink dark:text-ink-inverted">
            {accuracyPercent}%
          </span>
        </div>
      </div>

      <div className="mt-10 flex w-full max-w-xs flex-col gap-3">
        {nextLessonId ? (
          <Link href={`/learn/${nextLessonId}`}>
            <Button size="lg" className="w-full">
              Next lesson
            </Button>
          </Link>
        ) : (
          <Link href="/learn">
            <Button size="lg" className="w-full">
              Back to path
            </Button>
          </Link>
        )}
        <Link href="/learn">
          <Button variant="secondary" size="lg" className="w-full">
            Return to path
          </Button>
        </Link>
      </div>
    </div>
  );
}