"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Check, Lock, Play } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Lesson } from "@/lib/types/learning";

type NodeStatus = "completed" | "current" | "locked";

interface LessonNodeProps {
  lesson: Lesson;
  status: NodeStatus;
  offset: "left" | "center" | "right";
}

const offsetClass: Record<LessonNodeProps["offset"], string> = {
  left: "sm:-translate-x-16",
  center: "",
  right: "sm:translate-x-16",
};

export function LessonNode({ lesson, status, offset }: LessonNodeProps) {
  const isLocked = status === "locked";

  const node = (
    <motion.div
      whileHover={isLocked ? undefined : { scale: 1.05 }}
      whileTap={isLocked ? undefined : { scale: 0.97 }}
      className={cn("flex flex-col items-center gap-2", offsetClass[offset])}
    >
      <div
        className={cn(
          "flex h-16 w-16 items-center justify-center rounded-full border-2 shadow-soft transition-colors",
          status === "completed" &&
            "border-emerald-700 bg-emerald-600 text-white dark:border-emerald-400",
          status === "current" &&
            "border-gold-500 bg-gold-500 text-emerald-950 motion-safe:animate-pulse",
          status === "locked" &&
            "border-line bg-bg-elevated text-ink-soft dark:border-line-dark dark:bg-bg-dark-elevated dark:text-ink-inverted/40",
        )}
      >
        {status === "completed" && <Check className="h-6 w-6" />}
        {status === "current" && <Play className="h-6 w-6" />}
        {status === "locked" && <Lock className="h-5 w-5" />}
      </div>
      <div className="max-w-[9rem] text-center">
        <p
          className={cn(
            "text-sm font-semibold",
            isLocked ? "text-ink-soft dark:text-ink-inverted/40" : "text-ink dark:text-ink-inverted",
          )}
        >
          {lesson.title}
        </p>
        <p className="arabic text-xs text-ink-soft dark:text-ink-inverted/40">
          {lesson.titleArabic}
        </p>
      </div>
    </motion.div>
  );

  if (isLocked) {
    return <div aria-disabled="true">{node}</div>;
  }

  return (
    <Link href={`/learn/${lesson.id}`} aria-label={`Start lesson: ${lesson.title}`}>
      {node}
    </Link>
  );
}