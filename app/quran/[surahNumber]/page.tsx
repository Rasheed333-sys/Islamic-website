'use client';

import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Volume2, Bookmark, Sparkles, BookOpen } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

interface Ayah {
  number: number;
  text: string;
  numberInSurah: number;
  juz: number;
}

interface SurahDetail {
  number: number;
  name: string;
  englishName: string;
  englishNameTranslation: string;
  revelationType: string;
  ayahs: Ayah[];
}

export default function SurahReaderPage() {
  const params = useParams();
  const surahNumber = params.surahNumber as string;

  const [surah, setSurah] = useState<SurahDetail | null>(null);
  const [translation, setTranslation] = useState<SurahDetail | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!surahNumber) return;

    Promise.all([
      fetch(`https://api.alquran.cloud/v1/surah/${surahNumber}`).then((res) => res.json()),
      fetch(`https://api.alquran.cloud/v1/surah/${surahNumber}/en.sahih`).then((res) => res.json()),
    ])
      .then(([arabicRes, translationRes]) => {
        if (arabicRes.code === 200) setSurah(arabicRes.data);
        if (translationRes.code === 200) setTranslation(translationRes.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Failed to load Surah data', err);
        setLoading(false);
      });
  }, [surahNumber]);

  return (
    <div className="min-h-screen bg-surface-light dark:bg-surface-dark flex flex-col selection:bg-emerald-500 selection:text-white">
      <Navbar />

      <main className="flex-grow pt-32 px-4 sm:px-8 pb-20">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/quran"
            className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-800 dark:text-emerald-300 mb-6 hover:opacity-80"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Surah List</span>
          </Link>

          {loading || !surah || !translation ? (
            <div className="glass-panel p-12 rounded-3xl text-center space-y-4 animate-pulse">
              <div className="h-8 bg-emerald-500/10 rounded-xl w-1/3 mx-auto" />
              <div className="h-4 bg-emerald-500/10 rounded-xl w-1/2 mx-auto" />
            </div>
          ) : (
            <div>
              {/* Surah Header Banner */}
              <div className="glass-panel rounded-3xl p-8 sm:p-10 mb-10 text-center relative overflow-hidden shadow-card border border-emerald-500/15">
                <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />
                
                <span className="text-xs uppercase tracking-widest text-gold-600 font-semibold mb-2 block">
                  Surah {surah.number} • {surah.revelationType} • {surah.ayahs.length} Ayahs
                </span>
                <h1 className="text-4xl sm:text-5xl font-display font-bold text-emerald-950 dark:text-white mb-2">
                  {surah.englishName}
                </h1>
                <p className="text-emerald-900/70 dark:text-emerald-200/70 text-sm mb-6">
                  {surah.englishNameTranslation}
                </p>

                <div className="arabic-text text-3xl sm:text-4xl text-emerald-950 dark:text-emerald-50 font-bold mb-6">
                  {surah.number !== 9 && surah.number !== 1 ? 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ' : ''}
                </div>

                <div className="flex items-center justify-center gap-3">
                  <button className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold flex items-center gap-2 shadow-sm transition-all">
                    <Volume2 className="w-4 h-4" />
                    <span>Play Full Recitation</span>
                  </button>
                </div>
              </div>

              {/* Ayahs List */}
              <div className="space-y-6">
                {surah.ayahs.map((ayah, index) => {
                  const translationAyah = translation.ayahs[index];
                  return (
                    <div
                      key={ayah.number}
                      className="glass-panel rounded-3xl p-6 sm:p-8 shadow-soft border border-emerald-500/10 space-y-6"
                    >
                      <div className="flex items-center justify-between border-b border-emerald-500/10 pb-4">
                        <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 font-bold text-xs flex items-center justify-center">
                          {ayah.numberInSurah}
                        </div>
                        <div className="flex items-center gap-2">
                          <button className="p-2 rounded-xl text-emerald-700 dark:text-emerald-300 hover:bg-emerald-100/50 dark:hover:bg-emerald-900/30">
                            <Volume2 className="w-4 h-4" />
                          </button>
                          <button className="p-2 rounded-xl text-emerald-700 dark:text-emerald-300 hover:bg-emerald-100/50 dark:hover:bg-emerald-900/30">
                            <Bookmark className="w-4 h-4" />
                          </button>
                        </div>
                      </div>

                      {/* Arabic Text */}
                      <p
                        className="arabic-text text-3xl sm:text-4xl text-emerald-950 dark:text-emerald-50 text-right leading-loose"
                        translate="no"
                      >
                        {ayah.text}
                      </p>

                      {/* English Translation */}
                      <div className="pt-4 border-t border-emerald-500/10">
                        <p className="text-emerald-900/80 dark:text-emerald-200/90 text-base sm:text-lg leading-relaxed font-light">
                          {translationAyah?.translation}
                        </p>
                        <span className="text-[10px] text-gold-600 font-semibold uppercase mt-2 block">
                          Source: Sahih International (Authorized)
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}