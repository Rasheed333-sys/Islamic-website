import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merges Tailwind class names safely, resolving conflicting utility
 * classes in favor of the last one supplied.
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

/**
 * Formats a duration in minutes into a compact, human-readable string,
 * e.g. 95 -> "1h 35m".
 */
export function formatDuration(minutes: number): string {
  if (minutes < 60) return `${minutes}m`;
  const hours = Math.floor(minutes / 60);
  const rest = minutes % 60;
  return rest === 0 ? `${hours}h` : `${hours}h ${rest}m`;
}

/**
 * Formats a streak count into a human-readable phrase.
 */
export function formatStreak(days: number): string {
  if (days === 0) return "Start your streak today";
  if (days === 1) return "1 day streak";
  return `${days} day streak`;
}