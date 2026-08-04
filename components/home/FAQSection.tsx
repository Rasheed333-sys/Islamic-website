"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

const FAQS = [
  {
    question: "Do I need any prior knowledge of Arabic to start?",
    answer:
      "No. Noor begins at the very first letter of the alphabet and builds up gradually, so complete beginners and those refreshing rusty knowledge both have a clear starting point.",
  },
  {
    question: "Where does the Qur'an text and translation come from?",
    answer:
      "Arabic text and translations are loaded from established, publicly documented Qur'an data sources rather than stored or altered within the app, with the source clearly attributed on every page.",
  },
  {
    question: "How much time do I need each day?",
    answer:
      "Most lessons take 10–15 minutes. The platform is designed around short, consistent daily sessions rather than long, infrequent study blocks.",
  },
  {
    question: "Can I use Noor offline?",
    answer:
      "Core lessons and your saved Duas are available offline once downloaded. Live Qur'an lookups and audio recitation require a connection.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 sm:py-32">
      <Container className="max-w-3xl">
        <h2 className="text-balance font-display text-display-md font-medium text-ink dark:text-ink-inverted">
          Common questions
        </h2>

        <div className="mt-10 divide-y divide-line dark:divide-line-dark">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={faq.question} className="py-2">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 py-4 text-left"
                >
                  <span className="font-medium text-ink dark:text-ink-inverted">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={cn(
                      "h-4 w-4 shrink-0 text-ink-soft transition-transform duration-300 ease-calm dark:text-ink-inverted/50",
                      isOpen && "rotate-180",
                    )}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-5 pr-8 text-[15px] leading-relaxed text-ink-muted dark:text-ink-inverted/70">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}