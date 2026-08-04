"use client";

import { useMemo } from "react";
import { GeometricStar } from "@/components/ui/GeometricStar";
import { LessonNode } from "@/components/learn/LessonNode";
import { useProgressStore } from "@/lib/store/useProgressStore";
import type { Unit } from "@/lib/types/learning";

interface LessonMapProps {
  unit: Unit;
  /** Lesson ids from prior units, used to determine if this unit's first lesson unlocks. */
  priorLessonIds: string[];
}

const OFFSET_PATTERN: Array<"left" | "center" | "right"> = ["center", "right", "left"];

export function LessonMap({ unit, priorLessonIds }: LessonMapProps) {
  const completedLessonIds = useProgressStore((s) => s.completedLessonIds);

  const orderedLessonIds = useMemo(
    () => [...priorLessonIds, ...unit.lessons.map((l) => l.id)],
    [priorLessonIds, unit.lessons],
  );

  return (
    <div className="relative">
      <div className="mb-10 flex items-center gap-3">
        <GeometricStar size={26} className="text-emerald-600 dark:text-emerald-400" />
        <div>
          <h2 className="font-display text-xl font-medium text-ink dark:text-ink-inverted">
            {unit.title}
          </h2>
          <p className="text-sm text-ink-muted dark:text-ink-inverted/60">{unit.description}</p>
        </div>
      </div>

      <div className="flex flex-col items-center gap-12">
        {unit.lessons.map((lesson) => {
          const indexInSequence = orderedLessonIds.indexOf(lesson.id);
          const previousLessonId = orderedLessonIds[indexInSequence - 1];
          const isCompleted = completedLessonIds.includes(lesson.id);
          const isUnlocked =
            indexInSequence === 0 ||
            previousLessonId === undefined ||
            completedLessonIds.includes(previousLessonId);

          const status = isCompleted ? "completed" : isUnlocked ? "current" : "locked";

          return (
            <LessonNode
              key={lesson.id}
              lesson={lesson}
              status={status}
              offset={OFFSET_PATTERN[lesson.order % OFFSET_PATTERN.length] ?? "center"}
            />
          );
        })}
      </div>
    </div>
  );
}