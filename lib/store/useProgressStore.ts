import { create } from "zustand";
import { persist } from "zustand/middleware";

interface ProgressState {
  completedLessonIds: string[];
  xp: number;
  streak: number;
  lastActivityDate: string | null;
  isLessonCompleted: (lessonId: string) => boolean;
  completeLesson: (lessonId: string, xpEarned: number) => void;
}

/** Returns today's date as a stable YYYY-MM-DD key, in the user's local time. */
function todayKey(): string {
  const now = new Date();
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(
    now.getDate(),
  ).padStart(2, "0")}`;
}

/** Returns yesterday's date as the same YYYY-MM-DD key format. */
function yesterdayKey(): string {
  const d = new Date();
  d.setDate(d.getDate() - 1);
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(
    d.getDate(),
  ).padStart(2, "0")}`;
}

export const useProgressStore = create<ProgressState>()(
  persist(
    (set, get) => ({
      completedLessonIds: [],
      xp: 0,
      streak: 0,
      lastActivityDate: null,

      isLessonCompleted: (lessonId) => get().completedLessonIds.includes(lessonId),

      completeLesson: (lessonId, xpEarned) => {
        const { completedLessonIds, lastActivityDate, streak, xp } = get();
        const alreadyCompleted = completedLessonIds.includes(lessonId);
        const today = todayKey();

        let nextStreak = streak;
        if (lastActivityDate === today) {
          nextStreak = streak;
        } else if (lastActivityDate === yesterdayKey()) {
          nextStreak = streak + 1;
        } else {
          nextStreak = 1;
        }

        set({
          completedLessonIds: alreadyCompleted
            ? completedLessonIds
            : [...completedLessonIds, lessonId],
          xp: alreadyCompleted ? xp : xp + xpEarned,
          streak: nextStreak,
          lastActivityDate: today,
        });
      },
    }),
    {
      name: "noor-progress",
    },
  ),
);