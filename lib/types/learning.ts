/**
 * A single learn-and-recognize card: an Arabic letter or word, its
 * pronunciation, and its meaning (or, for pure alphabet cards, a memory hook).
 */
export interface FlashcardExercise {
  id: string;
  type: "flashcard";
  arabic: string;
  transliteration: string;
  meaning: string;
  hint?: string;
}

/**
 * A single-answer multiple-choice check. `promptArabic` is optional so the
 * same shape covers both "what sound is this letter?" (Arabic prompt) and
 * "which letter makes the 'th' sound?" (English prompt) question styles.
 */
export interface MultipleChoiceExercise {
  id: string;
  type: "multiple-choice";
  prompt: string;
  promptArabic?: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export type Exercise = FlashcardExercise | MultipleChoiceExercise;

export interface Lesson {
  id: string;
  unitId: string;
  order: number;
  title: string;
  titleArabic: string;
  description: string;
  xp: number;
  estimatedMinutes: number;
  exercises: Exercise[];
}

export interface Unit {
  id: string;
  order: number;
  title: string;
  description: string;
  lessons: Lesson[];
}