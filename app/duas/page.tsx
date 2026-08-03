'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Volume2, Bookmark, Search, Compass } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export default function DuasPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'Morning', 'Evening', 'Prayer', 'Protection', 'Forgiveness'];

  const duas = [
    {
      id: '1',
      category: 'Morning',
      title: 'Morning Remembrance',
      arabic: 'اللَّهُمَّ بِكَ أَصْبَحْنَا، وَبِكَ أَمْسَيْنَا، وَبِكَ نَحْيَا، وَبِكَ نَمُوتُ، وَإِلَيْكَ النُّشُورُ',
      transliteration: 'Allahumma bika asbahna, wa bika amsayna, wa bika nahya, wa bika namootu, wa ilaykan-nushoor.',
      translation: 'O Allah, by You we enter the morning and by You we enter the evening, by You we live and by You we die, and to You is the final return.',
      reference: 'Sunan At-Tirmidhi 3391',
    },
    {
      id: '2',
      category: 'Protection',
      title: 'Seeking Protection from Harm',
      arabic: 'بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ',
      transliteration: 'Bismillahオールladhi la yadurru ma\'asmihi shay\'un fil-ardi wa la fis-sama\'i wa huwas-samee\'ul- \'aleem.',
      translation: 'In the name of Allah, with whose name nothing can cause harm on earth or in the heavens, and He is the All-Hearing, the All-Knowing.',
      reference: 'Sunan Abu Dawud 5088',
    },
    {
      id: '3',
      category: 'Forgiveness',
      title: 'Master Supplication for Forgiveness (Sayyid al-Istighfar)',
      arabic: 'اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَهَ إِلَّا أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ...',
      transliteration: 'Allahumma anta Rabbi la ilaha illa anta, khalaqtani wa ana \'abduka...',
      translation: 'O Allah, You are my Lord, there is no god except You. You created me and I am your servant...',
      reference: 'Sahih Al-Bukhari 6306',
    },
  ];

  const filteredDuas = duas.filter((dua) => {
    const matchesCat = activeCategory === 'All' || dua.category === activeCategory;
    const matchesSearch = dua.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          dua.translation.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-surface-light dark:bg-surface-dark flex flex-col selection:bg-emerald-500 selection:text-white">
      <Navbar />

      <main className="flex-grow pt-32 px-4 sm:px-8 pb-20">
        <div className="max-w-4xl mx-auto">
          {/* Header Banner */}
          <div className="glass-panel rounded-3xl p-8 sm:p-10 mb-10 shadow-card relative overflow-hidden border border-emerald-500/15">
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 text-xs font-semibold mb-4">
                <Compass className="w-3.5 h-3.5 text-gold-500" />
                <span>Daily Adhkar & Supplications</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-display font-bold text-emerald-950 dark:text-white mb-3">
                Fortress of the Believer
              </h1>
              <p className="text-emerald-900/70 dark:text-emerald-200/70 text-sm sm:text-base mb-8 max-w-xl">
                Authentic morning, evening, and situational duas verified from authentic Sunnah collections.
              </p>

              {/* Search & Category Filter */}
              <div className="space-y-4">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                  <input
                    type="text"
                    placeholder="Search duas by title or translation..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 rounded-2xl glass-panel text-emerald-950 dark:text-white placeholder-emerald-900/40 dark:placeholder-emerald-200/40 focus:outline-none focus:border-emerald-500 text-sm transition-all border border-emerald-500/20"
                  />
                </div>

                <div className="flex flex-wrap gap-2">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                        activeCategory === cat
                          ? 'bg-emerald-600 text-white shadow-sm'
                          : 'glass-panel text-emerald-900 dark:text-emerald-200 hover:bg-emerald-50 dark:hover:bg-emerald-900/40 border-emerald-500/10'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Duas List */}
          <div className="space-y-6">
            {filteredDuas.map((dua) => (
              <motion.div
                key={dua.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="glass-panel rounded-3xl p-8 shadow-soft border border-emerald-500/10 space-y-6"
              >
                <div className="flex items-center justify-between border-b border-emerald-500/10 pb-4">
                  <div>
                    <span className="text-[10px] uppercase font-semibold text-gold-600 tracking-wider">
                      {dua.category}
                    </span>
                    <h3 className="text-lg font-display font-semibold text-emerald-950 dark:text-white">
                      {dua.title}
                    </h3>
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

                <p className="arabic-text text-3xl sm:text-4xl text-emerald-950 dark:text-emerald-50 text-right leading-loose">
                  {dua.arabic}
                </p>

                <p className="text-xs font-semibold text-gold-600 italic">
                  {dua.transliteration}
                </p>

                <p className="text-emerald-900/80 dark:text-emerald-200/90 text-sm sm:text-base leading-relaxed font-light pt-2 border-t border-emerald-500/10">
                  "{dua.translation}"
                </p>

                <div className="text-[10px] font-semibold text-emerald-800 dark:text-emerald-400 uppercase tracking-wide">
                  Reference: {dua.reference}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}