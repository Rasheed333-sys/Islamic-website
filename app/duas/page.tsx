import type { Metadata } from "next";
import Link from "next/link";
import { Heart } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { DuaCategoryGrid } from "@/components/duas/DuaCategoryGrid";
import { DUA_CATEGORIES } from "@/lib/data/duas";

export const metadata: Metadata = {
  title: "Duas",
  description:
    "Authenticated daily duas for morning, evening, travel, parents, health, and more — with Arabic, transliteration, translation, and references.",
};

export default function DuasIndexPage() {
  return (
    <Container className="py-14 sm:py-20">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="font-display text-display-md font-medium text-ink dark:text-ink-inverted">
            Duas
          </h1>
          <p className="mt-2 max-w-md text-ink-muted dark:text-ink-inverted/70">
            Supplications for daily life, sourced from the Qur&apos;an and
            authenticated hadith.
          </p>
        </div>
        <Link
          href="/duas/favorites"
          className="inline-flex items-center gap-2 text-sm font-medium text-emerald-700 hover:text-emerald-900 dark:text-emerald-300 dark:hover:text-emerald-200"
        >
          <Heart className="h-4 w-4" />
          Your favorites
        </Link>
      </div>

      <div className="mt-10">
        <DuaCategoryGrid categories={DUA_CATEGORIES} />
      </div>
    </Container>
  );
}