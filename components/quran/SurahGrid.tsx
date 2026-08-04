"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import type { SurahListItem } from "@/lib/quran/types";
import { cn } from "@/lib/utils";

interface SurahGridProps {
  surahs: SurahListItem[];
}

export function SurahGrid({ surahs }: SurahGridProps) {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return surahs;
    return surahs.filter(
      (s) =>
        s.englishName.toLowerCase().includes(q) ||
        s.englishNameTranslation.toLowerCase().includes(q) ||
        s.name.includes(q) ||
        String(s.number) === q,
    );
  }, [surahs, query]);

  return (
    <div>
      <div className="relative max-w-md">
        <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-soft dark:text-ink-inverted/40" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by name or number…"
          aria-label="Search surahs"
          className="h-12 w-full rounded-xl border border-line bg-bg-elevated pl-11 pr-4 text-[15px] text-ink placeholder:text-ink-soft focus:border-emerald-400 dark:border-line-dark dark:bg-bg-dark-elevated dark:text-ink-inverted dark:placeholder:text-ink-inverted/40"
        />
      </div>

      <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((surah, index) => (
          <motion.div
            key={surah.number}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: Math.min(index, 12) * 0.02 }}
          >
            <Link
              href={`/quran/${surah.number}`}
              className={cn(
                "flex items-center gap-4 rounded-xl border border-line bg-bg-elevated p-4 transition-colors duration-200",
                "hover:border-emerald-300 hover:bg-emerald-50/50 dark:border-line-dark dark:bg-bg-dark-elevated dark:hover:border-emerald-700 dark:hover:bg-emerald-900/10",
              )}
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-emerald-200 bg-emerald-50 font-display text-sm font-medium text-emerald-800 dark:border-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300">
                {surah.number}
              </span>
              <div className="min-w-0 flex-1">
                <p className="truncate font-medium text-ink dark:text-ink-inverted">
                  {surah.englishName}
                </p>
                <p className="truncate text-xs text-ink-soft dark:text-ink-inverted/50">
                  {surah.englishNameTranslation} · {surah.numberOfAyahs} ayahs ·{" "}
                  {surah.revelationType}
                </p>
              </div>
              <span className="arabic shrink-0 text-xl text-ink dark:text-ink-inverted">
                {surah.name}
              </span>
            </Link>
          </motion.div>
        ))}

        {filtered.length === 0 && (
          <p className="col-span-full py-10 text-center text-sm text-ink-soft dark:text-ink-inverted/50">
            No surahs match &ldquo;{query}&rdquo;.
          </p>
        )}
      </div>
    </div>
  );
}