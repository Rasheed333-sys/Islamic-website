"use client";

import { motion } from "framer-motion";
import { ArrowRight, PlayCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { DailyVerseCard } from "@/components/home/DailyVerseCard";

const TRUST_STATS = [
  { value: "40K+", label: "learners" },
  { value: "114", label: "surahs covered" },
  { value: "12min", label: "avg. daily lesson" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden pb-20 pt-14 sm:pb-28 sm:pt-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[36rem] bg-emerald-glow"
      />

      <Container className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="arabic-ui inline-block text-sm font-medium text-gold-600 dark:text-gold-400">
            بسم الله الرحمن الرحيم
          </span>

          <h1 className="mt-5 text-balance font-display text-display-xl font-medium text-ink dark:text-ink-inverted">
            Learn Arabic the way it opens the Qur&apos;an to you
          </h1>

          <p className="mt-6 max-w-xl text-balance text-lg leading-relaxed text-ink-muted dark:text-ink-inverted/70">
            A calm, structured path from your first letter to fluent reading —
            with daily lessons, trusted translations, and habits that actually
            stick.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button size="lg" className="group">
              Start learning free
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </Button>
            <Button variant="secondary" size="lg">
              <PlayCircle className="h-4 w-4" />
              See how it works
            </Button>
          </div>

          <dl className="mt-14 flex flex-wrap gap-x-10 gap-y-4">
            {TRUST_STATS.map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd className="font-display text-2xl font-medium text-ink dark:text-ink-inverted">
                  {stat.value}
                </dd>
                <p className="text-sm text-ink-soft dark:text-ink-inverted/50">
                  {stat.label}
                </p>
              </div>
            ))}
          </dl>
        </motion.div>

        <div className="flex justify-center lg:justify-end">
          <DailyVerseCard />
        </div>
      </Container>
    </section>
  );
}