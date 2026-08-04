"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { GeometricStar } from "@/components/ui/GeometricStar";
import { DailyDuaCard } from "@/components/home/DailyDuaCard";

const STAGES = [
  {
    stage: "Foundations",
    title: "The alphabet, sounds, and how letters connect",
    detail:
      "Trace each letter, hear it spoken, and learn how its shape changes at the start, middle, and end of a word.",
  },
  {
    stage: "Reading",
    title: "Vowel marks, short words, and your first sentences",
    detail:
      "Move from sounding out letters to reading full words fluently, with spaced repetition to lock it in.",
  },
  {
    stage: "Understanding",
    title: "Core grammar and everyday vocabulary",
    detail:
      "Learn the grammar patterns that unlock the Qur'an's structure, alongside vocabulary for daily conversation.",
  },
  {
    stage: "Qur'an",
    title: "Reading Surahs with word-by-word meaning",
    detail:
      "Apply everything you've learned directly to the Qur'an — word-by-word breakdowns connect language to meaning.",
  },
];

export function RoadmapPreview() {
  return (
    <section className="py-24 sm:py-32">
      <Container className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_0.75fr] lg:gap-12">
        <div>
          <div className="flex items-center gap-3">
            <GeometricStar size={22} className="text-emerald-600 dark:text-emerald-400" />
            <span className="text-sm font-semibold uppercase tracking-wide text-emerald-700 dark:text-emerald-400">
              Your path
            </span>
          </div>
          <h2 className="mt-4 max-w-lg text-balance font-display text-display-md font-medium text-ink dark:text-ink-inverted">
            Four stages. One clear route to the Qur&apos;an.
          </h2>
          <p className="mt-4 max-w-md text-ink-muted dark:text-ink-inverted/70">
            No wandering between disconnected topics — every lesson builds on
            the last, toward a single destination.
          </p>

          <ol className="mt-12 space-y-10 border-l border-line pl-8 dark:border-line-dark">
            {STAGES.map((item, index) => (
              <motion.li
                key={item.stage}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="relative"
              >
                <span className="absolute -left-[2.6rem] flex h-8 w-8 items-center justify-center rounded-full border border-emerald-200 bg-emerald-50 font-display text-sm font-medium text-emerald-800 dark:border-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300">
                  {index + 1}
                </span>
                <p className="text-xs font-semibold uppercase tracking-wide text-gold-600 dark:text-gold-400">
                  {item.stage}
                </p>
                <h3 className="mt-1 font-display text-lg font-medium text-ink dark:text-ink-inverted">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-[15px] leading-relaxed text-ink-muted dark:text-ink-inverted/70">
                  {item.detail}
                </p>
              </motion.li>
            ))}
          </ol>
        </div>

        <div className="lg:pt-24">
          <DailyDuaCard />
        </div>
      </Container>
    </section>
  );
}