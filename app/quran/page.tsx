import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SurahGrid } from "@/components/quran/SurahGrid";
import { getAllSurahs } from "@/lib/quran/api";

export const metadata: Metadata = {
  title: "The Qur'an",
  description: "Read all 114 surahs with trusted translations and recitation audio.",
};

export const revalidate = 86400;

export default async function QuranIndexPage() {
  const surahs = await getAllSurahs();

  return (
    <Container className="py-14 sm:py-20">
      <h1 className="font-display text-display-md font-medium text-ink dark:text-ink-inverted">
        The Qur&apos;an
      </h1>
      <p className="mt-2 max-w-md text-ink-muted dark:text-ink-inverted/70">
        All 114 surahs, with Arabic text, trusted translations, and recitation
        audio.
      </p>

      <div className="mt-10">
        <SurahGrid surahs={surahs} />
      </div>

      <p className="mt-12 text-xs text-ink-soft dark:text-ink-inverted/40">
        Text and translations sourced from{" "}
        
          href="https://alquran.cloud"
          className="underline underline-offset-2 hover:text-emerald-700 dark:hover:text-emerald-300"
          target="_blank"
          rel="noreferrer"
        >
          AlQuran.cloud
        </a>
        .
      </p>
    </Container>
  );
}