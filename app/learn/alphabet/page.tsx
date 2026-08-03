'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, Sparkles, X, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export default function AlphabetPage() {
  const [selectedLetter, setSelectedLetter] = useState<any | null>(null);

  const alphabet = [
    { ar: 'أ', name: 'Alif', sound: 'a / aa', desc: 'First letter of the Arabic alphabet. Acts as a long vowel carrier.' },
    { ar: 'ب', name: 'Ba', sound: 'b', desc: 'Expressed with lips pressed together. Equivalent to English B.' },
    { ar: 'ت', name: 'Ta', sound: 't', desc: 'Dental stop consonant produced by placing the tip of the tongue against the upper teeth.' },
    { ar: 'ث', name: 'Tha', sound: 'th (think)', desc: 'Soft interdental fricative sound.' },
    { ar: 'ج', name: 'Jeem', sound: 'j (jar)', desc: 'Palatal affricate sound.' },
    { ar: 'ح', name: 'Haa', sound: 'h (deep)', desc: 'Pharyngeal voiceless fricative, produced deep in the throat.' },
    { ar: 'خ', name: 'Khaa', sound: 'kh (loch)', desc: 'Velar fricative, like clearing the throat.' },
  ];

  return (
    <div className="min-h-screen bg-surface-light dark:bg-surface-dark flex flex-col selection:bg-emerald-500 selection:text-white">
      <Navbar />

      <main className="flex-grow pt-32 px-4 sm:px-8 pb-20">
        <div className="max-w-5xl mx-auto">
          {/* Back link */}
          <Link href="/learn" className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-800 dark:text-emerald-300 mb-6 hover:opacity-80">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Learning Hub</span>
          </Link>

          <div className="glass-panel rounded-3xl p-8 sm:p-10 mb-10 shadow-card border border-emerald-500/15">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 text-xs font-semibold mb-4">
              <Sparkles className="w-3.5 h-3.5 text-gold-500" />
              <span>Foundational Module</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-display font-bold text-emerald-950 dark:text-white mb-3">
              Arabic Alphabet Matrix
            </h1>
            <p className="text-emerald-900/70 dark:text-emerald-200/70 text-sm sm:text-base max-w-2xl">
              Click any letter to hear native audio pronunciations and inspect its positional writing variants.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {alphabet.map((item, index) => (
              <motion.button
                key={item.name}
                onClick={() => setSelectedLetter(item)}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="glass-panel p-6 rounded-2xl text-center shadow-soft hover:border-emerald-500/40 transition-all flex flex-col items-center justify-center gap-3 border border-emerald-500/10"
              >
                <span className="arabic-text text-4xl font-bold text-emerald-950 dark:text-white">
                  {item.ar}
                </span>
                <div className="flex flex-col">
                  <span className="text-xs font-semibold text-emerald-900 dark:text-emerald-100">{item.name}</span>
                  <span className="text-[10px] text-gold-600 font-medium">/{item.sound}/</span>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </main>

      {/* Letter Details Modal */}
      <AnimatePresence>
        {selectedLetter && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-emerald-950/40 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="glass-panel max-w-md w-full rounded-3xl p-8 shadow-card relative border border-emerald-500/20 bg-surface-light dark:bg-surface-dark"
            >
              <button
                onClick={() => setSelectedLetter(null)}
                className="absolute top-6 right-6 p-2 rounded-xl text-emerald-900 dark:text-emerald-100 hover:bg-emerald-100/50 dark:hover:bg-emerald-900/30"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="text-center mb-6">
                <span className="arabic-text text-6xl font-bold text-emerald-950 dark:text-white block mb-2">
                  {selectedLetter.ar}
                </span>
                <h3 className="text-xl font-display font-semibold text-emerald-950 dark:text-white">
                  {selectedLetter.name}
                </h3>
                <span className="text-xs text-gold-600 font-semibold">Sound: /{selectedLetter.sound}/</span>
              </div>

              <p className="text-emerald-900/80 dark:text-emerald-200/80 text-sm text-center mb-8 leading-relaxed">
                {selectedLetter.desc}
              </p>

              <button
                onClick={() => alert(`Playing audio for ${selectedLetter.name}`)}
                className="w-full py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm shadow-card flex items-center justify-center gap-2 transition-all"
              >
                <Volume2 className="w-4 h-4" />
                <span>Listen to Pronunciation</span>
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}