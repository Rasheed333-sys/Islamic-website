import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { LessonMap } from "@/components/learn/LessonMap";
import { StatsBar } from "@/components/learn/StatsBar";
import { ALL_UNITS } from "@/lib/data/alphabet-unit";

export const metadata: Metadata = {
  title: "Learn Arabic",
  description: "Your Arabic learning path — from the alphabet to reading fluently.",
};

export default function LearnPage() {
  let priorLessonIds: string[] = [];

  return (
    <Container className="py-14 sm:py-20">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="font-display text-display-md font-medium text-ink dark:text-ink-inverted">
            Your learning path
          </h1>
          <p className="mt-2 max-w-md text-ink-muted dark:text-ink-inverted/70">
            Work through each unit in order — every lesson unlocks the next.
          </p>
        </div>
        <StatsBar />
      </div>

      <div className="mt-16 flex flex-col gap-20">
        {ALL_UNITS.map((unit) => {
          const map = <LessonMap key={unit.id} unit={unit} priorLessonIds={priorLessonIds} />;
          priorLessonIds = [...priorLessonIds, ...unit.lessons.map((l) => l.id)];
          return map;
        })}
      </div>
    </Container>
  );
}