'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Moon, Sun, Volume2, Globe, Shield } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export default function SettingsPage() {
  const [darkMode, setDarkMode] = useState(true);
  const [soundEffects, setSoundEffects] = useState(true);
  const [translationSource, setTranslationSource] = useState('Sahih International');

  return (
    <div className="min-h-screen bg-surface-light dark:bg-surface-dark flex flex-col selection:bg-emerald-500 selection:text-white">
      <Navbar />

      <main className="flex-grow pt-32 px-4 sm:px-8 pb-20">
        <div className="max-w-4xl mx-auto">
          {/* Header Banner */}
          <div className="glass-panel rounded-3xl p-8 sm:p-10 mb-10 shadow-card relative overflow-hidden border border-emerald-500/15">
            <h1 className="text-3xl sm:text-4xl font-display font-bold text-emerald-950 dark:text-white mb-2">
              Platform Preferences
            </h1>
            <p className="text-emerald-900/70 dark:text-emerald-200/70 text-sm">
              Customize your learning environment, theme, audio cues, and translations.
            </p>
          </div>

          <div className="space-y-6">
            {/* Appearance */}
            <div className="glass-panel rounded-3xl p-8 shadow-soft border border-emerald-500/10 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center">
                  <Moon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-emerald-950 dark:text-white text-base">Dark Theme</h3>
                  <p className="text-xs text-emerald-900/60 dark:text-emerald-200/60">Optimized for nighttime studying and focus</p>
                </div>
              </div>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`w-14 h-8 rounded-full transition-colors p-1 ${darkMode ? 'bg-emerald-600' : 'bg-emerald-900/20'}`}
              >
                <div className={`w-6 h-6 rounded-full bg-white transition-transform ${darkMode ? 'translate-x-6' : 'translate-x-0'}`} />
              </button>
            </div>

            {/* Audio Effects */}
            <div className="glass-panel rounded-3xl p-8 shadow-soft border border-emerald-500/10 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gold-500/10 text-gold-600 flex items-center justify-center">
                  <Volume2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-emerald-950 dark:text-white text-base">Lesson Sound Effects</h3>
                  <p className="text-xs text-emerald-900/60 dark:text-emerald-200/60">Play audio cues on correct or incorrect answers</p>
                </div>
              </div>
              <button
                onClick={() => setSoundEffects(!soundEffects)}
                className={`w-14 h-8 rounded-full transition-colors p-1 ${soundEffects ? 'bg-emerald-600' : 'bg-emerald-900/20'}`}
              >
                <div className={`w-6 h-6 rounded-full bg-white transition-transform ${soundEffects ? 'translate-x-6' : 'translate-x-0'}`} />
              </button>
            </div>

            {/* Translation Source */}
            <div className="glass-panel rounded-3xl p-8 shadow-soft border border-emerald-500/10 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-emerald-950 dark:text-white text-base">Primary Qur'an Translation</h3>
                  <p className="text-xs text-emerald-900/60 dark:text-emerald-200/60">Currently active: {translationSource}</p>
                </div>
              </div>
              <select
                value={translationSource}
                onChange={(e) => setTranslationSource(e.target.value)}
                className="px-4 py-2.5 rounded-xl glass-panel text-xs font-semibold text-emerald-950 dark:text-white border border-emerald-500/20 focus:outline-none"
              >
                <option value="Sahih International">Sahih International</option>
                <option value="Clear Quran (Dr. Mustafa Khattab)">Clear Quran</option>
                <option value="Pickthall">Pickthall</option>
              </select>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}