"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { X } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ExerciseProgressBar } from "@/components/learn/ExerciseProgressBar";
import { FlashcardExercise } from "@/components/learn/exercises/FlashcardExercise";
import { MultipleChoiceExercise } from "@/components/learn/exercises/MultipleChoiceExercise";
import { LessonCompleteScreen } from "@/components/learn/LessonCompleteScreen";
import { useProgressStore } from "@/lib/store/useProgressStore";
import type { Lesson } from "@/lib/types/learning";

interface LessonPlayerProps {
  lesson: Lesson;
  nextLessonId: string | null;
}

export function LessonPlayer({ lesson, nextLessonId }: LessonPlayerProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [gradedCount, setGradedCount] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const completeLesson = useProgressStore((s) => s.completeLesson);

  const currentExercise = lesson.exercises[currentIndex];

  function advance(wasGraded: boolean, wasCorrect: boolean) {
    if (wasGraded) {
      setGradedCount((c) => c + 1);
      if (wasCorrect) setCorrectCount((c) => c + 1);
    }

    if (currentIndex + 1 >= lesson.exercises.length) {
      completeLesson(lesson.id, lesson.xp);
      setIsComplete(true);
      return;
    }
    setCurrentIndex((i) => i + 1);
  }

  if (isComplete) {
    const accuracyPercent =
      gradedCount === 0 ? 100 : Math.round((correctCount / gradedCount) * 100);

    return (
      <Container className="max-w-lg py-14">
        <LessonCompleteScreen
          xpEarned={lesson.xp}
          accuracyPercent={accuracyPercent}
          nextLessonId={nextLessonId}
        />
      </Container>
    );
  }

  if (!currentExercise) return null;

  return (
    <div className="flex min-h-[calc(100vh-4.5rem)] flex-col">
      <div className="border-b border-line py-4 dark:border-line-dark">
        <Container className="flex items-center gap-4">
          <Link
            href="/learn"
            aria-label="Exit lesson"
            className="flex h-9 w-9 items-center justify-center rounded-full text-ink-soft transition-colors hover:bg-ink/5 dark:text-ink-inverted/50 dark:hover:bg-white/10"
          >
            <X className="h-5 w-5" />
          </Link>
          <ExerciseProgressBar total={lesson.exercises.length} currentIndex={currentIndex} />
        </Container>
      </div>

      <Container className="flex flex-1 items-center justify-center py-14">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentExercise.id}
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -24 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="w-full"
          >
            {currentExercise.type === "flashcard" ? (
              <FlashcardExercise
                exercise={currentExercise}
                onComplete={() => advance(false, false)}
              />
            ) : (
              <MultipleChoiceExercise
                exercise={currentExercise}
                onComplete={(wasCorrect) => advance(true, wasCorrect)}
              />
            )}
          </motion.div>
        </AnimatePresence>
      </Container>
    </div>
  );
}