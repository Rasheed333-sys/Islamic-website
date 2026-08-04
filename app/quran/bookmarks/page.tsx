"use client";

import Link from "next/link";
import { Bookmark as BookmarkIcon } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { GeometricStar } from "@/components/ui/GeometricStar";
import { useQuranStore } from "@/lib/store/useQuranStore";

export default function BookmarksPage() {
  const bookmarks = useQuranStore((s) => s.bookmarks);

  const sorted = [...bookmarks].sort(
    (a, b) => new Date(b.savedAt).getTime() - new Date(a.savedAt).getTime(),
  );

  return (
    <Container className="py-14 sm:py-20">
      <h1 className="font-display text-display-md font-medium text-ink dark:text-ink-inverted">
        Your bookmarks
      </h1>
      <p className="mt-2 max-w-md text-ink-muted dark:text-ink-inverted/70">
        Ayahs you&apos;ve saved while reading, kept on this device.
      </p>

      {sorted.length === 0 ? (
        <div className="mt-16 flex flex-col items-center text-center">
          <GeometricStar size={40} className="text-emerald-400" />
          <p className="mt-4 text-ink-muted dark:text-ink-inverted/60">
            No bookmarks yet — tap the bookmark icon on any ayah while reading.
          </p>
          <Link
            href="/quran"
            className="mt-4 text-sm font-medium text-emerald-700 hover:text-emerald-900 dark:text-emerald-300 dark:hover:text-emerald-200"
          >
            Browse the Qur&apos;an
          </Link>
        </div>
      ) : (
        <ul className="mt-10 divide-y divide-line dark:divide-line-dark">
          {sorted.map((bookmark) => (
            <li key={`${bookmark.surahNumber}-${bookmark.ayahNumberInSurah}`} className="py-4">
              <Link
                href={`/quran/${bookmark.surahNumber}#ayah-${bookmark.ayahNumberInSurah}`}
                className="flex items-center gap-3 text-ink hover:text-emerald-800 dark:text-ink-inverted dark:hover:text-emerald-300"
              >
                <BookmarkIcon className="h-4 w-4 shrink-0 text-gold-500" fill="currentColor" />
                <span className="font-medium">
                  {bookmark.surahName} {bookmark.surahNumber}:{bookmark.ayahNumberInSurah}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </Container>
  );
}