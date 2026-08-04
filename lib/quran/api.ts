import "server-only";
import type { PairedAyah, SurahInEdition, SurahListItem } from "@/lib/quran/types";

const API_BASE = process.env.NEXT_PUBLIC_QURAN_API_BASE_URL ?? "https://api.alquran.cloud/v1";

/** The Uthmani-script Arabic edition identifier — the canonical text used throughout the reader. */
const ARABIC_EDITION = "quran-uthmani";

/** Revalidate cached Qur'an data periodically; the underlying text never changes, but this keeps deploys simple. */
const REVALIDATE_SECONDS = 60 * 60 * 24;

class QuranApiError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "QuranApiError";
  }
}

async function fetchJson<T>(path: string): Promise<T> {
  const res = await fetch(`${API_BASE}${path}`, {
    next: { revalidate: REVALIDATE_SECONDS },
  });

  if (!res.ok) {
    throw new QuranApiError(`Qur'an API request failed (${res.status}): ${path}`);
  }

  const json = (await res.json()) as { code: number; status: string; data: T };
  return json.data;
}

/** Fetches the full 114-surah index. */
export async function getAllSurahs(): Promise<SurahListItem[]> {
  return fetchJson<SurahListItem[]>("/surah");
}

/** Fetches metadata + Arabic text for a single surah. */
export async function getSurahArabic(surahNumber: number): Promise<SurahInEdition> {
  return fetchJson<SurahInEdition>(`/surah/${surahNumber}/${ARABIC_EDITION}`);
}

/**
 * Fetches a surah's Arabic text and a chosen translation together in a
 * single request, then pairs each ayah by position. This is the primary
 * function the reader page uses.
 */
export async function getSurahPaired(
  surahNumber: number,
  translationEdition: string,
): Promise<{ meta: SurahInEdition; ayahs: PairedAyah[] }> {
  const [arabic, translation] = await fetchJson<[SurahInEdition, SurahInEdition]>(
    `/surah/${surahNumber}/editions/${ARABIC_EDITION},${translationEdition}`,
  );

  const ayahs: PairedAyah[] = arabic.ayahs.map((ayah, index) => ({
    numberInSurah: ayah.numberInSurah,
    globalAyahNumber: ayah.number,
    arabic: ayah.text,
    translation: translation.ayahs[index]?.text ?? "",
    juz: ayah.juz,
    page: ayah.page,
  }));

  return { meta: arabic, ayahs };
}