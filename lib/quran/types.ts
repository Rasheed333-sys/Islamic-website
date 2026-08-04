export type RevelationType = "Meccan" | "Medinan";

/** A single entry from GET /v1/surah — the 114-surah index. */
export interface SurahListItem {
  number: number;
  name: string;
  englishName: string;
  englishNameTranslation: string;
  numberOfAyahs: number;
  revelationType: RevelationType;
}

/** A single ayah as returned within a surah/edition response. */
export interface Ayah {
  number: number;
  text: string;
  numberInSurah: number;
  juz: number;
  page: number;
  sajda: boolean | { id: number; recommended: boolean; obligatory: boolean };
}

/** A full surah in one specific edition (e.g. Arabic Uthmani, or a translation). */
export interface SurahInEdition {
  number: number;
  name: string;
  englishName: string;
  englishNameTranslation: string;
  revelationType: RevelationType;
  numberOfAyahs: number;
  ayahs: Ayah[];
}

/** A translation edition available on the API, curated to a known-good subset. */
export interface TranslationEdition {
  identifier: string;
  language: string;
  name: string;
  englishName: string;
}

/** One ayah, paired across the Arabic text and the selected translation. */
export interface PairedAyah {
  numberInSurah: number;
  globalAyahNumber: number;
  arabic: string;
  translation: string;
  juz: number;
  page: number;
}