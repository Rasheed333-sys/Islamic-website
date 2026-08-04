"use client";

import { Flame, Star } from "lucide-react";
import { useProgressStore } from "@/lib/store/useProgressStore";
import { formatStreak } from "@/lib/utils";

export function StatsBar() {
  const streak = useProgressStore((s) => s.streak);
  const xp = useProgressStore((s) => s.xp);

  return (
    <div className="flex flex-wrap items-center gap-3">
      <div className="inline-flex items-center gap-2 rounded-full border border-line bg-bg-elevated px-4 py-2 text-sm font-semibold text-ink dark:border-line-dark dark:bg-bg-dark-elevated dark:text-ink-inverted">
        <Flame className="h-4 w-4 text-gold-600 dark:text-gold-400" />
        {formatStreak(streak)}
      </div>
      <div className="inline-flex items-center gap-2 rounded-full border border-line bg-bg-elevated px-4 py-2 text-sm font-semibold text-ink dark:border-line-dark dark:bg-bg-dark-elevated dark:text-ink-inverted">
        <Star className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
        {xp} XP
      </div>
    </div>
  );
}