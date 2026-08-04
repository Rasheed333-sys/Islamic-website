import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LessonPlayer } from "@/components/learn/LessonPlayer";
import { getAllLessonsFlat, getLessonById, getNextLessonId } from "@/lib/data/alphabet-unit";

interface LessonPageProps {
  params: { lessonId: string };
}

export function generateStaticParams() {
  return getAllLessonsFlat().map((lesson) => ({ lessonId: lesson.id }));
}

export function generateMetadata({ params }: LessonPageProps): Metadata {
  const result = getLessonById(params.lessonId);
  if (!result) return { title: "Lesson" };
  return {
    title: result.lesson.title,
    description: result.lesson.description,
  };
}

export default function LessonPage({ params }: LessonPageProps) {
  const result = getLessonById(params.lessonId);
  if (!result) notFound();

  const nextLessonId = getNextLessonId(params.lessonId);

  return <LessonPlayer lesson={result.lesson} nextLessonId={nextLessonId} />;
}