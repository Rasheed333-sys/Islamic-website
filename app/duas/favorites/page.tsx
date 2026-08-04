"use client";

import Link from "next/link";
import { Heart } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { GeometricStar } from "@/components/ui/GeometricStar";
import { DuaCard } from "@/components/duas/DuaCard";
import { useDuaFavoritesStore } from "@/lib/store/useDuaFavoritesStore";
import { DUAS } from "@/lib/data/duas";

export default function DuaFavoritesPage() {
  const favoriteIds = useDuaFavoritesStore((s) => s.favoriteIds);
  const favoriteDuas = DUAS.filter((dua) => favoriteIds.includes(dua.id));

  return (
    <Container className="py-14 sm:py-20">
      <h1 className="font-display text-display-md font-medium text-ink dark:text-ink-inverted">
        Your favorite duas
      </h1>
      <p className="mt-2 max-w-md text-ink-muted dark:text-ink-inverted/70">
        Saved on this device, ready whenever you need them.
      </p>

      {favoriteDuas.length === 0 ? (
        <div className="mt-16 flex flex-col items-center text-center">
          <GeometricStar size={40} className="text-gold-400" />
          <p className="mt-4 text-ink-muted dark:text-ink-inverted/60">
            No favorites yet — tap the heart icon on any dua to save it here.
          </p>
          <Link
            href="/duas"
            className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-emerald-700 hover:text-emerald-900 dark:text-emerald-300 dark:hover:text-emerald-200"
          >
            <Heart className="h-4 w-4" />
            Browse duas
          </Link>
        </div>
      ) : (
        <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-2">
          {favoriteDuas.map((dua) => (
            <DuaCard key={dua.id} dua={dua} />
          ))}
        </div>
      )}
    </Container>
  );
}