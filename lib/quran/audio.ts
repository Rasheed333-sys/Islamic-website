const CDN_BASE = process.env.NEXT_PUBLIC_QURAN_CDN_BASE_URL ?? "https://cdn.islamic.network/quran";

/** Builds a streaming URL for a full surah's recitation. */
export function getSurahAudioUrl(surahNumber: number, edition: string, bitrate = 128): string {
  return `${CDN_BASE}/audio-surah/${bitrate}/${edition}/${surahNumber}.mp3`;
}

/** Builds a streaming URL for a single ayah's recitation, keyed by its global (1–6236) number. */
export function getAyahAudioUrl(globalAyahNumber: number, edition: string, bitrate = 128): string {
  return `${CDN_BASE}/audio/${bitrate}/${edition}/${globalAyahNumber}.mp3`;
}