"use client";

import { motion } from "framer-motion";
import { Heart, Volume2 } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { cn } from "@/lib/utils";
import { useDuaFavoritesStore } from "@/lib/store/useDuaFavoritesStore";
import type { Dua } from "@/lib/types/dua";

interface DuaCardProps {
  dua: Dua;
}

export function DuaCard({ dua }: DuaCardProps) {
  const isFavorite = useDuaFavoritesStore((s) => s.isFavorite(dua.id));
  const toggleFavorite = useDuaFavoritesStore((s) => s.toggleFavorite);

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      <Card>
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-display text-lg font-medium text-ink dark:text-ink-inverted">
            {dua.title}
          </h3>
          <div className="flex shrink-0 items-center gap-1">
            <button
              type="button"
              disabled
              aria-label="Audio coming soon"
              title="Audio coming soon"
              className="flex h-9 w-9 cursor-not-allowed items-center justify-center rounded-full text-ink-soft/40 dark:text-ink-inverted/20"
            >
              <Volume2 className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => toggleFavorite(dua.id)}
              aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
              aria-pressed={isFavorite}
              className={cn(
                "flex h-9 w-9 items-center justify-center rounded-full transition-colors",
                isFavorite
                  ? "text-gold-600 dark:text-gold-400"
                  : "text-ink-soft hover:bg-gold-100 hover:text-gold-600 dark:text-ink-inverted/40 dark:hover:bg-gold-500/10 dark:hover:text-gold-400",
              )}
            >
              <Heart className="h-4 w-4" fill={isFavorite ? "currentColor" : "none"} />
            </button>
          </div>
        </div>

        <p className="arabic mt-5 text-right text-arabic-md text-ink dark:text-ink-inverted">
          {dua.arabic}
        </p>

        <p className="mt-4 text-sm italic text-ink-soft dark:text-ink-inverted/50">
          {dua.transliteration}
        </p>
        <p className="mt-2 text-[15px] leading-relaxed text-ink-muted dark:text-ink-inverted/70">
          {dua.translation}
        </p>

        {dua.note && (
          <p className="mt-3 rounded-lg bg-emerald-50 px-3 py-2 text-xs leading-relaxed text-emerald-800 dark:bg-emerald-900/20 dark:text-emerald-300">
            {dua.note}
          </p>
        )}

        <p className="mt-4 border-t border-line pt-3 text-xs text-ink-soft dark:border-line-dark dark:text-ink-inverted/40">
          {dua.reference}
        </p>
      </Card>
    </motion.div>
  );
}