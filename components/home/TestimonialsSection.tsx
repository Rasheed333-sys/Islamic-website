"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";

/**
 * Placeholder testimonials. Replace with real, permissioned learner
 * quotes before launch — do not present these as verified reviews.
 */
const TESTIMONIALS = [
  {
    quote:
      "I finally understand the grammar behind verses I've recited my whole life without knowing what they meant.",
    name: "Learner story — placeholder",
    context: "6-month streak",
  },
  {
    quote:
      "The daily lesson is short enough that I never skip it, even on my busiest days.",
    name: "Learner story — placeholder",
    context: "3-month streak",
  },
  {
    quote:
      "Word-by-word mode changed how I read Qur'an. Everything clicked into place.",
    name: "Learner story — placeholder",
    context: "1-year streak",
  },
];

export function TestimonialsSection() {
  return (
    <section className="border-y border-line bg-bg-elevated py-24 dark:border-line-dark dark:bg-bg-dark-elevated sm:py-32">
      <Container>
        <h2 className="max-w-md text-balance font-display text-display-md font-medium text-ink dark:text-ink-inverted">
          Learners building a daily habit
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((item, index) => (
            <motion.div
              key={item.name + index}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              <Card className="flex h-full flex-col justify-between">
                <p className="text-[15px] leading-relaxed text-ink dark:text-ink-inverted">
                  &ldquo;{item.quote}&rdquo;
                </p>
                <div className="mt-6 border-t border-line pt-4 text-sm dark:border-line-dark">
                  <p className="font-medium text-ink dark:text-ink-inverted">{item.name}</p>
                  <p className="text-ink-soft dark:text-ink-inverted/50">{item.context}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}