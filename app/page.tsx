'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Sparkles, Trophy, Flame, CheckCircle2, Volume2, Bookmark } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export default function HomePage() {
  const dailyVerse = {
    arabic: "فَإِنَّ مَعَ الْعُسْرِ يُسْرًا • إِنَّ مَعَ الْعُسْرِ يُسْرًا",
    translation: "For indeed, with hardship [will be] ease. Indeed, with hardship [will be] ease.",
    reference: "Surah Ash-Sharh (94:5-6)",
  };

  return (
    <div className="min-h-screen bg-surface-light dark:bg-surface-dark flex flex-col selection:bg-emerald-500 selection:text-white">
      <Navbar />

      {/* Hero Section */}
      <main className="flex-grow pt-32 px-4 sm:px-8">
        <section className="max-w-7xl mx-auto text-center py-12 md:py-20 relative">
          {/* Subtle Background Glow Accent */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/10 dark:bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100/60 dark:bg-emerald-950/60 border border-emerald-500/20 text-emerald-800 dark:text-emerald-300 text-xs font-semibold mb-8 shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-gold-500" />
            <span>The Modern Standard for Learning Arabic & Qur'an</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl md:text-7xl font-display font-bold tracking-tight text-emerald-950 dark:text-white max-w-4xl mx-auto leading-[1.15] mb-6"
          >
            Understand the Qur’an in Arabic. <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-gold-500">Naturally.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-emerald-900/70 dark:text-emerald-200/70 max-w-2xl mx-auto mb-10 font-normal leading-relaxed"
          >
            A calm, distraction-free environment combining advanced spaced repetition, verified translations, and beautiful typography to guide your language journey.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
          >
            <Link
              href="/learn"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-base shadow-card flex items-center justify-center gap-3 transition-all group"
            >
              <span>Begin Your Journey</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/quran"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl glass-panel hover:bg-emerald-50 dark:hover:bg-emerald-900/40 text-emerald-950 dark:text-emerald-100 font-medium text-base flex items-center justify-center gap-2 transition-all"
            >
              <BookOpen className="w-4 h-4 text-emerald-600" />
              <span>Explore Qur'an</span>
            </Link>
          </motion.div>

          {/* Daily Verse / Reflection Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-3xl mx-auto glass-panel rounded-3xl p-8 sm:p-10 shadow-card text-left relative overflow-hidden border border-emerald-500/15"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/10 rounded-bl-full pointer-events-none" />
            <div className="flex items-center justify-between mb-6">
              <span className="text-xs uppercase tracking-widest text-gold-600 font-semibold flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" /> Daily Reflection
              </span>
              <button className="p-2 rounded-xl text-emerald-700 dark:text-emerald-300 hover:bg-emerald-100/50 dark:hover:bg-emerald-900/40 transition-colors">
                <Volume2 className="w-4 h-4" />
              </button>
            </div>

            <p className="arabic-text text-2xl sm:text-3xl text-emerald-950 dark:text-emerald-50 text-right mb-6 leading-loose">
              {dailyVerse.arabic}
            </p>

            <p className="text-emerald-900/80 dark:text-emerald-200/90 text-base sm:text-lg italic font-light mb-4">
              "{dailyVerse.translation}"
            </p>

            <div className="flex items-center justify-between pt-4 border-t border-emerald-500/10 text-xs text-emerald-700 dark:text-emerald-400 font-medium">
              <span>{dailyVerse.reference}</span>
              <span className="text-gold-600">Verified Uthmani Text</span>
            </div>
          </motion.div>
        </section>

        {/* Statistics & Feature Grid Preview */}
        <section className="max-w-7xl mx-auto py-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glass-panel p-8 rounded-3xl space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center font-bold text-xl">
              01
            </div>
            <h3 className="text-xl font-display font-semibold text-emerald-950 dark:text-white">Structured Mastery</h3>
            <p className="text-emerald-900/70 dark:text-emerald-200/70 text-sm leading-relaxed">
              Progress smoothly from foundational alphabet recognition to fluent Qur'anic comprehension with adaptive exercises.
            </p>
          </div>

          <div className="glass-panel p-8 rounded-3xl space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-gold-500/10 text-gold-600 flex items-center justify-center font-bold text-xl">
              02
            </div>
            <h3 className="text-xl font-display font-semibold text-emerald-950 dark:text-white">Authentic Qur'an Text</h3>
            <p className="text-emerald-900/70 dark:text-emerald-200/70 text-sm leading-relaxed">
              Read all 114 Surahs with word-by-word structural breakdown, multiple approved translations, and integrated audio.
            </p>
          </div>

          <div className="glass-panel p-8 rounded-3xl space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center font-bold text-xl">
              03
            </div>
            <h3 className="text-xl font-display font-semibold text-emerald-950 dark:text-white">Spiritual Consistency</h3>
            <p className="text-emerald-900/70 dark:text-emerald-200/70 text-sm leading-relaxed">
              Build daily habits with carefully curated morning and evening Adhkar, streaks, and mindful micro-learning goals.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}