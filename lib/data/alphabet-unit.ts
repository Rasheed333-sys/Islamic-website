import type { Unit } from "@/lib/types/learning";

/**
 * Unit 1 covers the first seven letters of the Arabic alphabet across three
 * short lessons. Each lesson pairs flashcards (introduce) with multiple-
 * choice checks (recall) so a learner never quizzes on something they
 * haven't first seen.
 */
export const alphabetUnit: Unit = {
  id: "unit-alphabet-1",
  order: 1,
  title: "The Alphabet — Part 1",
  description: "Learn your first seven letters and how they sound.",
  lessons: [
    {
      id: "lesson-alif-ba-ta",
      unitId: "unit-alphabet-1",
      order: 1,
      title: "Alif, Ba, Ta",
      titleArabic: "ا ب ت",
      description: "The first three letters of the Arabic alphabet.",
      xp: 15,
      estimatedMinutes: 6,
      exercises: [
        {
          id: "ex-1",
          type: "flashcard",
          arabic: "ا",
          transliteration: "alif",
          meaning: "A vertical stroke — the first letter, often a long 'aa' sound.",
          hint: "Doesn't connect to the letter after it.",
        },
        {
          id: "ex-2",
          type: "flashcard",
          arabic: "ب",
          transliteration: "ba",
          meaning: "Sounds like the English 'b', with one dot underneath.",
        },
        {
          id: "ex-3",
          type: "flashcard",
          arabic: "ت",
          transliteration: "ta",
          meaning: "Sounds like the English 't', with two dots above.",
        },
        {
          id: "ex-4",
          type: "multiple-choice",
          prompt: "Which letter is this?",
          promptArabic: "ب",
          options: ["alif", "ba", "ta", "tha"],
          correctIndex: 1,
          explanation: "ب (ba) has a single dot beneath the letter.",
        },
        {
          id: "ex-5",
          type: "multiple-choice",
          prompt: "Which letter has two dots above it?",
          options: ["ا  alif", "ب  ba", "ت  ta"],
          correctIndex: 2,
          explanation: "ت (ta) is written with two dots above the letter body.",
        },
      ],
    },
    {
      id: "lesson-tha-jeem-ha-kha",
      unitId: "unit-alphabet-1",
      order: 2,
      title: "Tha, Jeem, Ha, Kha",
      titleArabic: "ث ج ح خ",
      description: "Four more letters, including two throat sounds.",
      xp: 15,
      estimatedMinutes: 7,
      exercises: [
        {
          id: "ex-1",
          type: "flashcard",
          arabic: "ث",
          transliteration: "tha",
          meaning: "Like the 'th' in \"think\" — three dots above.",
        },
        {
          id: "ex-2",
          type: "flashcard",
          arabic: "ج",
          transliteration: "jeem",
          meaning: "Sounds like the English 'j', with one dot beneath a rounded body.",
        },
        {
          id: "ex-3",
          type: "flashcard",
          arabic: "ح",
          transliteration: "ha",
          meaning: "A breathy 'h' from deep in the throat — no dots.",
          hint: "Different from ه — this one has no separate softer form.",
        },
        {
          id: "ex-4",
          type: "flashcard",
          arabic: "خ",
          transliteration: "kha",
          meaning: "A rasping sound from the back of the throat, like clearing it gently.",
        },
        {
          id: "ex-5",
          type: "multiple-choice",
          prompt: "Which letter makes the 'th' sound, as in \"think\"?",
          options: ["ج  jeem", "ث  tha", "خ  kha", "ح  ha"],
          correctIndex: 1,
          explanation: "ث (tha) carries three dots above and matches the English 'th' in \"think\".",
        },
        {
          id: "ex-6",
          type: "multiple-choice",
          prompt: "Which letter is this?",
          promptArabic: "خ",
          options: ["ha", "jeem", "kha", "tha"],
          correctIndex: 2,
          explanation: "خ (kha) has a dot above ح's body and a raspier throat sound.",
        },
      ],
    },
    {
      id: "lesson-dal-dhal-ra-zay",
      unitId: "unit-alphabet-1",
      order: 3,
      title: "Dal, Dhal, Ra, Zay",
      titleArabic: "د ذ ر ز",
      description: "Four letters that never connect to the letter after them.",
      xp: 15,
      estimatedMinutes: 6,
      exercises: [
        {
          id: "ex-1",
          type: "flashcard",
          arabic: "د",
          transliteration: "dal",
          meaning: "Sounds like the English 'd'.",
        },
        {
          id: "ex-2",
          type: "flashcard",
          arabic: "ذ",
          transliteration: "dhal",
          meaning: "Like the 'th' in \"this\" — dal with a dot above.",
        },
        {
          id: "ex-3",
          type: "flashcard",
          arabic: "ر",
          transliteration: "ra",
          meaning: "A rolled 'r', similar to Spanish.",
        },
        {
          id: "ex-4",
          type: "flashcard",
          arabic: "ز",
          transliteration: "zay",
          meaning: "Sounds like the English 'z' — ra with a dot above.",
        },
        {
          id: "ex-5",
          type: "multiple-choice",
          prompt: "Which letter matches the 'th' in \"this\" (not \"think\")?",
          options: ["ذ  dhal", "ز  zay", "د  dal", "ر  ra"],
          correctIndex: 0,
          explanation: "ذ (dhal) is dal with a dot above, and softens to the 'th' in \"this\".",
        },
        {
          id: "ex-6",
          type: "multiple-choice",
          prompt: "What do dal, dhal, ra, and zay have in common?",
          options: [
            "They're all throat letters",
            "None of them connect to the letter that follows",
            "They all have dots beneath them",
            "They're only used at the end of a word",
          ],
          correctIndex: 1,
          explanation:
            "These four letters connect to the letter before them but never to the one after — a small group worth memorizing early.",
        },
      ],
    },
  ],
};

export const ALL_UNITS: Unit[] = [alphabetUnit];

export function getLessonById(lessonId: string) {
  for (const unit of ALL_UNITS) {
    const lesson = unit.lessons.find((l) => l.id === lessonId);
    if (lesson) return { lesson, unit };
  }
  return null;
}

/** Flattens every lesson across every unit, in path order. */
export function getAllLessonsFlat() {
  return ALL_UNITS.flatMap((unit) => unit.lessons);
}

/** Returns the id of the lesson immediately after the given one, or null if it's the last. */
export function getNextLessonId(lessonId: string): string | null {
  const flat = getAllLessonsFlat();
  const index = flat.findIndex((l) => l.id === lessonId);
  if (index === -1 || index + 1 >= flat.length) return null;
  return flat[index + 1]?.id ?? null;
}