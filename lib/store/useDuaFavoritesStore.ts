import { create } from "zustand";
import { persist } from "zustand/middleware";

interface DuaFavoritesState {
  favoriteIds: string[];
  isFavorite: (duaId: string) => boolean;
  toggleFavorite: (duaId: string) => void;
}

export const useDuaFavoritesStore = create<DuaFavoritesState>()(
  persist(
    (set, get) => ({
      favoriteIds: [],
      isFavorite: (duaId) => get().favoriteIds.includes(duaId),
      toggleFavorite: (duaId) => {
        const isFav = get().favoriteIds.includes(duaId);
        set({
          favoriteIds: isFav
            ? get().favoriteIds.filter((id) => id !== duaId)
            : [...get().favoriteIds, duaId],
        });
      },
    }),
    {
      name: "noor-dua-favorites",
    },
  ),
);