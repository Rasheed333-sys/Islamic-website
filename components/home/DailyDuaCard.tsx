"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { Card } from "@/components/ui/Card";

const PLACEHOLDER_DUA = {
  title: "Dua for ease",
  arabic: "رَبِّ اشْرَحْ لِي صَدْرِي وَيَسِّرْ لِي أَمْرِي",
  transliteration: "Rabbi-shrah li sadri wa yassir li amri",
  translation: "My Lord, expand for me my chest and ease my task for me.",
  reference: "Qur'an 20:25–26",
};

export function DailyDuaCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <Card className="relative overflow-hidden">
        <div className="flex items-start justify-between">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wide text-gold-600 dark:text-gold-400">
              Dua of the day
            </span>
            <h3 className="mt-1 font-display text-xl font-medium text-ink dark:text-ink-inverted">
              {PLACEHOLDER_DUA.title}
            </h3>
          </div>
          <button
            type="button"
            aria-label="Add to favorites"
            className="flex h-9 w-9 items-center justify-center rounded-full text-ink-soft transition-colors hover:bg-gold-100 hover:text-gold-600 dark:text-ink-inverted/50 dark:hover:bg-gold-500/10 dark:hover:text-gold-400"
          >
            <Heart className="h-4 w-4" />
          </button>
        </div>

        <p className="arabic mt-6 text-right text-arabic-md text-ink dark:text-ink-inverted">
          {PLACEHOLDER_DUA.arabic}
        </p>

        <p className="mt-4 text-sm italic text-ink-soft dark:text-ink-inverted/50">
          {PLACEHOLDER_DUA.transliteration}
        </p>
        <p className="mt-2 text-[15px] leading-relaxed text-ink-muted dark:text-ink-inverted/70">
          {PLACEHOLDER_DUA.translation}
        </p>

        <p className="mt-5 border-t border-line pt-4 text-xs text-ink-soft dark:border-line-dark dark:text-ink-inverted/50">
          {PLACEHOLDER_DUA.reference}
        </p>
      </Card>
    </motion.div>
  );
}