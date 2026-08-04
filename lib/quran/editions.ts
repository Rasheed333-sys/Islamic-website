import type { TranslationEdition } from "@/lib/quran/types";

/**
 * A deliberately small, curated subset of AlQuran.cloud's translation
 * editions — chosen for being widely recognized. The full catalog is
 * available at GET /v1/edition/type/translation if more are needed later.
 */
export const TRANSLATION_EDITIONS: TranslationEdition[] = [
  {
    identifier: "en.sahih",
    language: "en",
    name: "Saheeh International",
    englishName: "Saheeh International (English)",
  },
  {
    identifier: "en.pickthall",
    language: "en",
    name: "Pickthall",
    englishName: "Mohammed Marmaduke Pickthall (English)",
  },
  {
    identifier: "en.yusufali",
    language: "en",
    name: "Yusuf Ali",
    englishName: "Abdullah Yusuf Ali (English)",
  },
  {
    identifier: "ur.jalandhry",
    language: "ur",
    name: "Jalandhry",
    englishName: "Fateh Muhammad Jalandhry (Urdu)",
  },
];

export const DEFAULT_TRANSLATION_EDITION = "en.sahih";

export const RECITATION_EDITION = "ar.alafasy";
export const RECITER_LABEL = "Mishary Rashid Al-Afasy";