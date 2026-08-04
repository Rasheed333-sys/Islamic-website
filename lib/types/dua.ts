export type DuaIconName =
  | "sunrise"
  | "sunset"
  | "hand"
  | "plane"
  | "users"
  | "heart-pulse"
  | "shield"
  | "refresh-ccw"
  | "moon"
  | "utensils"
  | "building";

export interface DuaCategory {
  id: string;
  label: string;
  labelArabic: string;
  description: string;
  icon: DuaIconName;
}

export interface Dua {
  id: string;
  categoryId: string;
  title: string;
  arabic: string;
  transliteration: string;
  translation: string;
  reference: string;
  /** Supplementary context — e.g. a paired dua for the reverse action (leaving vs. entering). */
  note?: string;
}