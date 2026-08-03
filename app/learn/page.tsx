'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { BookOpen, CheckCircle2, Lock, Play, Sparkles, Award, ArrowRight } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export default function LearnHubPage() {
  const modules = [
    {
      id: 'alphabet-1',
      title: 'Module 1: Arabic Alphabet Foundations',
      description: 'Master the 28 letters, isolated forms, and basic short vowels (Harakat).',
      category: 'Alphabet',
      lessonsCount: 6,
      completedCount: 6,
      status: 'completed',
    },
    {
      id: 'alphabet-2',
      title: 'Module 2: Connected Letter Forms',
      description: 'Learn how letters change shape depending on initial, medial, and final positions.',
      category: 'Alphabet',
      lessonsCount: 5,
      completedCount: 3,
      status: 'in-progress',
    },
    {
      id: 'vocab-1',
      title: 'Module 3: High-Frequency Qur\'anic Vocabulary',
      description: 'Learn the top 100 words that make up over 50% of the entire Holy Qur\'an text.',
      category: 'Vocabulary',
      lessonsCount: 10,
      completedCount: 0,
      status: 'available',
    },
    {
      id: 'grammar-1',
      title: 'Module 4: Nominal Sentences (Jumla Ismiyya)',
      description: 'Understand subject and predicate structures in classical Arabic grammar.',
      category: 'Grammar',
      lessonsCount: 8,
      completedCount: 0,
      status: 'locked',
    },
  ];

  return (
    <div className="min-h-screen bg-surface-light dark:bg-surface-dark flex flex-col selection:bg-emerald-500 selection:text-white">
      <Navbar />

      <main className="flex-grow pt-32 px-4 sm:px-8 pb-20">
        <div className="max-w-5xl mx-auto">
          {/* Header Banner */}
          <div className="glass-panel rounded-3xl p-8 sm:p-10 mb-12 shadow-card relative overflow-hidden border border-emerald-500/15">
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 text-xs font-semibold">
                  <Sparkles className="w-3.5 h-3.5 text-gold-500" />
                  <span>Curriculum Pathway</span>
                </div>
                <h1 className="text-3xl sm:text-4xl font-display font-bold text-emerald-950 dark:text-white">
                  Arabic Learning Hub
                </h1>
                <p className="text-emerald-900/70 dark:text-emerald-200/70 text-sm sm:text-base max-w-xl">
                  Step-by-step interactive lessons engineered for long-term retention and spiritual connection.
                </p>
              </div>

              {/* Quick Jump to Alphabet */}
              <Link
                href="/learn/alphabet"
                className="px-6 py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium shadow-card flex items-center justify-center gap-2 transition-all self-start md:self-auto"
              >
                <span>Interactive Alphabet Matrix</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Module List */}
          <div className="space-y-6">
            {modules.map((mod, index) => (
              <motion.div
                key={mod.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`glass-panel rounded-3xl p-6 sm:p-8 transition-all border ${
                  mod.status === 'locked'
                    ? 'opacity-60 border-emerald-500/5'
                    : 'hover:border-emerald-500/30 shadow-card'
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center font-bold text-lg ${
                      mod.status === 'completed'
                        ? 'bg-emerald-600 text-white'
                        : mod.status === 'in-progress'
                        ? 'bg-gold-500 text-emerald-950'
                        : 'bg-emerald-900/10 dark:bg-emerald-100/10 text-emerald-900 dark:text-emerald-100'
                    }`}>
                      {mod.status === 'completed' ? (
                        <CheckCircle2 className="w-6 h-6" />
                      ) : mod.status === 'locked' ? (
                        <Lock className="w-5 h-5" />
                      ) : (
                        <span>0{index + 1}</span>
                      )}
                    </div>
                    <div>
                      <span className="text-xs uppercase tracking-wider text-gold-600 font-semibold">
                        {mod.category}
                      </span>
                      <h3 className="text-xl font-display font-semibold text-emerald-950 dark:text-white">
                        {mod.title}
                      </h3>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="text-xs text-emerald-800 dark:text-emerald-300 font-medium">
                      {mod.completedCount}/{mod.lessonsCount} Lessons
                    </span>
                    {mod.status !== 'locked' ? (
                      <Link
                        href={`/learn/lesson/sample-id`}
                        className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold flex items-center gap-2 shadow-sm transition-all"
                      >
                        <Play className="w-3.5 h-3.5 fill-white" />
                        <span>{mod.status === 'completed' ? 'Review' : 'Continue'}</span>
                      </Link>
                    ) : (
                      <div className="px-4 py-2 rounded-xl bg-emerald-900/10 dark:bg-emerald-100/10 text-emerald-900/60 dark:text-emerald-100/60 text-xs font-semibold flex items-center gap-1.5">
                        <Lock className="w-3.5 h-3.5" />
                        <span>Locked</span>
                      </div>
                    )}
                  </div>
                </div>

                <p className="text-emerald-900/70 dark:text-emerald-200/70 text-sm mb-4">
                  {mod.description}
                </p>

                {/* Progress bar */}
                <div className="w-full bg-emerald-900/10 dark:bg-emerald-100/10 h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-emerald-600 h-full rounded-full transition-all duration-500"
                    style={{ width: `${(mod.completedCount / mod.lessonsCount) * 100}%` }}
                  />
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