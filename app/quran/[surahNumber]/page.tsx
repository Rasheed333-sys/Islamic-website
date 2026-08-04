import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { AyahRow } from "@/components/quran/AyahRow";
import { AudioPlayerBar } from "@/components/quran/AudioPlayerBar";
import { ReaderControls } from "@/components/quran/ReaderControls";
import { getSurahPaired } from "@/lib/quran/api";
import { DEFAULT_TRANSLATION_EDITION } from "@/lib/quran/editions";

interface SurahPageProps {
  params: { surahNumber: string };
  searchParams: { translation?: string; wbw?: string };
}

export async function generateMetadata({ params }: SurahPageProps): Promise<Metadata> {
  const surahNumber = Number(params.surahNumber);
  if (!Number.isInteger(surahNumber) || surahNumber < 1 || surahNumber > 114) {
    return { title: "Surah" };
  }
  const { meta } = await getSurahPaired(surahNumber, DEFAULT_TRANSLATION_EDITION);
  return {
    title: `Surah ${meta.englishName}`,
    description: `${meta.englishNameTranslation} — ${meta.numberOfAyahs} ayahs, ${meta.revelationType}.`,
  };
}

export const revalidate = 86400;

export default async function SurahPage({ params, searchParams }: SurahPageProps) {
  const surahNumber = Number(params.surahNumber);
  if (!Number.isInteger(surahNumber) || surahNumber < 1 || surahNumber > 114) {
    notFound();
  }

  const translationEdition = searchParams.translation ?? DEFAULT_TRANSLATION_EDITION;
  const wordByWord = searchParams.wbw === "1";

  const { meta, ayahs } = await getSurahPaired(surahNumber, translationEdition);

  return (
    <div className="flex min-h-[calc(100vh-4.5rem)] flex-col">
      <Container className="flex-1 py-14 sm:py-16">
        <div className="flex flex-col gap-6 border-b border-line pb-8 dark:border-line-dark sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700 dark:text-emerald-400">
              Surah {meta.number} · {meta.revelationType} · {meta.numberOfAyahs} ayahs
            </p>
            <h1 className="mt-2 font-display text-display-md font-medium text-ink dark:text-ink-inverted">
              {meta.englishName}
            </h1>
            <p className="mt-1 text-ink-muted dark:text-ink-inverted/70">
              {meta.englishNameTranslation}
            </p>
          </div>
          <span className="arabic text-4xl text-ink dark:text-ink-inverted">{meta.name}</span>
        </div>

        <div className="mt-8">
          <ReaderControls />
        </div>

        <div className="mt-4">
          {ayahs.map((ayah) => (
            <AyahRow
              key={ayah.globalAyahNumber}
              ayah={ayah}
              surahNumber={meta.number}
              surahName={meta.englishName}
              wordByWord={wordByWord}
            />
          ))}
        </div>

        <p className="mt-10 text-xs text-ink-soft dark:text-ink-inverted/40">
          Arabic text and translation sourced from{" "}
          
            href="https://alquran.cloud"
            className="underline underline-offset-2 hover:text-emerald-700 dark:hover:text-emerald-300"
            target="_blank"
            rel="noreferrer"
          >
            AlQuran.cloud
          </a>
          . Recitation by Mishary Rashid Al-Afasy, streamed from the Islamic
          Network CDN.
        </p>
      </Container>

      <AudioPlayerBar surahNumber={meta.number} surahEnglishName={meta.englishName} />
    </div>
  );
}