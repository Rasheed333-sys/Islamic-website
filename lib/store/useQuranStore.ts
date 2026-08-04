import { create } from "zustand";
import { persist } from "zustand/middleware";
import { DEFAULT_TRANSLATION_EDITION } from "@/lib/quran/editions";

export interface Bookmark {
  surahNumber: number;
  surahName: string;
  ayahNumberInSurah: number;
  savedAt: string;
}

interface LastRead {
  surahNumber: number;
  surahName: string;
  ayahNumberInSurah: number;
}

interface QuranState {
  bookmarks: Bookmark[];
  translationEdition: string;
  lastRead: LastRead | null;
  isBookmarked: (surahNumber: number, ayahNumberInSurah: number) => boolean;
  toggleBookmark: (bookmark: Omit<Bookmark, "savedAt">) => void;
  setTranslationEdition: (edition: string) => void;
  setLastRead: (position: LastRead) => void;
}

export const useQuranStore = create<QuranState>()(
  persist(
    (set, get) => ({
      bookmarks: [],
      translationEdition: DEFAULT_TRANSLATION_EDITION,
      lastRead: null,

      isBookmarked: (surahNumber, ayahNumberInSurah) =>
        get().bookmarks.some(
          (b) => b.surahNumber === surahNumber && b.ayahNumberInSurah === ayahNumberInSurah,
        ),

      toggleBookmark: (bookmark) => {
        const exists = get().isBookmarked(bookmark.surahNumber, bookmark.ayahNumberInSurah);
        set({
          bookmarks: exists
            ? get().bookmarks.filter(
                (b) =>
                  !(
                    b.surahNumber === bookmark.surahNumber &&
                    b.ayahNumberInSurah === bookmark.ayahNumberInSurah
                  ),
              )
            : [...get().bookmarks, { ...bookmark, savedAt: new Date().toISOString() }],
        });
      },

      setTranslationEdition: (edition) => set({ translationEdition: edition }),

      setLastRead: (position) => set({ lastRead: position }),
    }),
    {
      name: "noor-quran",
    },
  ),
);