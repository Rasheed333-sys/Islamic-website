'usr client';
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Search, BookOpen, Sparkles, ArrowRight } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

interface Surah {
  number: number;
  name: string;
  englishName: string;
  englishNameTranslation: string;
  numberOfAyahs: number;
  revelationType: string;
}

export default function QuranExplorerPage() {
  const [surahs, setSurahs] = useState<Surah[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.alquran.cloud/v1/surah')
      .then((res) => res.json())
      .then((data) => {
        if (data.code === 200) {
          setSurahs(data.data);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error('Failed to fetch surahs', err);
        setLoading(false);
      });
  }, []);

  const filteredSurahs = surahs.filter(
    (s) =>
      s.englishName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.englishNameTranslation.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.number.toString().includes(searchQuery)
  );

  return (
    <div className="min-h-screen bg-surface-light dark:bg-surface-dark flex flex-col selection:bg-emerald-500 selection:text-white">
      <Navbar />

      <main className="flex-grow pt-32 px-4 sm:px-8 pb-20">
        <div className="max-w-6xl mx-auto">
          {/* Header Banner */}
          <div className="glass-panel rounded-3xl p-8 sm:p-10 mb-10 shadow-card relative overflow-hidden border border-emerald-500/15">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="max-w-2xl relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 text-xs font-semibold mb-4">
                <Sparkles className="w-3.5 h-3.5 text-gold-500" />
                <span>Uthmani Script & Verified Translations</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-display font-bold text-emerald-950 dark:text-white mb-3">
                The Noble Qur'an Explorer
              </h1>
              <p className="text-emerald-900/70 dark:text-emerald-200/70 text-sm sm:text-base mb-8">
                Read, listen, and analyze all 114 Surahs with word-by-word breakdowns and authorized academic translations.
              </p>

              {/* Search input */}
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                <input
                  type="text"
                  placeholder="Search by Surah name or number (e.g., Al-Fatihah, 1)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-2xl glass-panel text-emerald-950 dark:text-white placeholder-emerald-900/40 dark:placeholder-emerald-200/40 focus:outline-none focus:border-emerald-500 text-sm transition-all border border-emerald-500/20"
                />
              </div>
            </div>
          </div>

          {/* Surah Grid */}
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="glass-panel h-36 rounded-3xl animate-pulse bg-emerald-500/5" />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {filteredSurahs.map((surah) => (
                <Link
                  key={surah.number}
                  href={`/quran/${surah.number}`}
                  className="glass-panel p-6 rounded-3xl shadow-soft hover:border-emerald-500/40 transition-all flex items-center justify-between group border border-emerald-500/10"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 font-bold flex items-center justify-center text-sm group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                      {surah.number}
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-emerald-950 dark:text-white text-base group-hover:text-emerald-600 transition-colors">
                        {surah.englishName}
                      </h3>
                      <p className="text-xs text-emerald-900/60 dark:text-emerald-200/60 font-medium">
                        {surah.englishNameTranslation} • {surah.numberOfAyahs} Ayahs
                      </p>
                    </div>
                  </div>

                  <div className="text-right">
                    <span className="arabic-text text-2xl font-bold text-emerald-950 dark:text-emerald-50 block">
                      {surah.name}
                    </span>
                    <span className="text-[10px] uppercase font-semibold text-gold-600">
                      {surah.revelationType}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}