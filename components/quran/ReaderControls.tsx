"use client";

import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { LayoutList } from "lucide-react";
import { TRANSLATION_EDITIONS } from "@/lib/quran/editions";
import { useQuranStore } from "@/lib/store/useQuranStore";
import { cn } from "@/lib/utils";

export function ReaderControls() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const setTranslationEdition = useQuranStore((s) => s.setTranslationEdition);

  const currentEdition = searchParams.get("translation") ?? TRANSLATION_EDITIONS[0]?.identifier;
  const wordByWord = searchParams.get("wbw") === "1";

  function updateParam(key: string, value: string | null) {
    const params = new URLSearchParams(searchParams.toString());
    if (value === null) {
      params.delete(key);
    } else {
      params.set(key, value);
    }
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  }

  return (
    <div className="flex flex-wrap items-center gap-3">
      <select
        value={currentEdition}
        onChange={(e) => {
          setTranslationEdition(e.target.value);
          updateParam("translation", e.target.value);
        }}
        aria-label="Translation"
        className="h-10 rounded-lg border border-line bg-bg-elevated px-3 text-sm font-medium text-ink dark:border-line-dark dark:bg-bg-dark-elevated dark:text-ink-inverted"
      >
        {TRANSLATION_EDITIONS.map((edition) => (
          <option key={edition.identifier} value={edition.identifier}>
            {edition.englishName}
          </option>
        ))}
      </select>

      <button
        type="button"
        onClick={() => updateParam("wbw", wordByWord ? null : "1")}
        aria-pressed={wordByWord}
        className={cn(
          "inline-flex h-10 items-center gap-2 rounded-lg border px-3 text-sm font-medium transition-colors",
          wordByWord
            ? "border-emerald-600 bg-emerald-50 text-emerald-800 dark:border-emerald-400 dark:bg-emerald-900/40 dark:text-emerald-300"
            : "border-line bg-bg-elevated text-ink dark:border-line-dark dark:bg-bg-dark-elevated dark:text-ink-inverted",
        )}
      >
        <LayoutList className="h-4 w-4" />
        Word-by-word view
      </button>
    </div>
  );
}