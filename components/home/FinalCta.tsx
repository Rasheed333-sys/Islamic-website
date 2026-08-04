"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { GeometricStar } from "@/components/ui/GeometricStar";

export function FinalCta() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-96 bg-gold-glow"
      />
      <Container className="flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <GeometricStar size={44} spin className="mx-auto text-emerald-600 dark:text-emerald-400" />
        </motion.div>

        <h2 className="mt-8 max-w-xl text-balance font-display text-display-md font-medium text-ink dark:text-ink-inverted">
          Begin today. One letter, one verse at a time.
        </h2>
        <p className="mt-4 max-w-md text-ink-muted dark:text-ink-inverted/70">
          Your first lesson takes less than ten minutes — and starts the
          streak that carries you the rest of the way.
        </p>

        <Button size="lg" className="group mt-9">
          Start learning free
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
        </Button>
      </Container>
    </section>
  );
}