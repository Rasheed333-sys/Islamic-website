export interface UserProfile {
  id: string;
  name: string;
  email: string;
  streak: number;
  xp: number;
  level: number;
  dailyGoalMinutes: number;
  todayMinutes: number;
  completedLessonsCount: number;
}

export interface DailyVerse {
  arabic: string;
  transliteration: string;
  translation: string;
  reference: string;
  source: string;
}

export interface DailyDua {
  id: string;
  category: 'Morning' | 'Evening' | 'Prayer' | 'Protection' | 'Forced';
  arabic: string;
  transliteration: string;
  translation: string;
  reference: string;
}

export interface LessonModule {
  id: string;
  title: string;
  description: string;
  category: 'Alphabet' | 'Vocabulary' | 'Grammar' | 'Qur\'anic';
  durationMinutes: number;
  isCompleted: boolean;
  isLocked: boolean;
  order: number;
}

export interface SurahMeta {
  number: number;
  nameArabic: string;
  nameEnglish: string;
  englishTranslation: string;
  numberOfAyahs: number;
  revelationType: 'Meccan' | 'Medinan';
}