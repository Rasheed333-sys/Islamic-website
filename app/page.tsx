'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BookOpen, Compass, Sparkles, User, Menu, X, Flame, 
  ArrowRight, Volume2, Trophy, Clock, CheckCircle2, Search, Lock, Play, AlertCircle, Bookmark, Moon, Sun, Globe
} from 'lucide-react';

export default function BayyinahApp() {
  const [currentView, setCurrentView] = useState<'home' | 'learn' | 'quran' | 'duas' | 'dashboard' | 'settings'>('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [streak] = useState(14);
  const [xp] = useState(2450);

  // Scroll to top on view change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentView]);

  return (
    <div className="min-h-screen bg-surface-dark text-slate-100 flex flex-col selection:bg-emerald-500 selection:text-white font-sans">
      {/* Navigation Header */}
      <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 pt-4">
        <nav className="max-w-7xl mx-auto h-16 glass-panel rounded-2xl px-6 flex items-center justify-between shadow-soft bg-emerald-950/80 backdrop-blur-md border border-emerald-500/20">
          <button onClick={() => setCurrentView('home')} className="flex items-center gap-3 group text-left">
            <div className="w-10 h-10 rounded-xl bg-emerald-600 flex items-center justify-center text-white font-arabic text-xl shadow-lg group-hover:scale-105 transition-transform">
              ق
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg tracking-tight text-white">Bayyinah</span>
              <span className="text-[10px] tracking-widest uppercase text-gold-400 font-medium -mt-1">Arabic & Qur'an</span>
            </div>
          </button>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-1 bg-emerald-950/50 p-1.5 rounded-xl border border-emerald-500/10">
            {[
              { id: 'home', name: 'Home', icon: Sparkles },
              { id: 'learn', name: 'Learn Hub', icon: BookOpen },
              { id: 'quran', name: "Qur'an", icon: Sparkles },
              { id: 'duas', name: 'Duas', icon: Compass },
              { id: 'dashboard', name: 'Dashboard', icon: User },
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = currentView === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setCurrentView(tab.id as any)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    isActive ? 'bg-emerald-600 text-white shadow-sm' : 'text-emerald-200/80 hover:text-white hover:bg-emerald-900/40'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {tab.name}
                </button>
              );
            })}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-950/40 border border-amber-500/20 text-amber-400 text-xs font-semibold">
              <Flame className="w-4 h-4 fill-amber-500 text-amber-500" />
              <span>{streak} Days</span>
            </div>
            <button
              onClick={() => setCurrentView('settings')}
              className="px-4 py-2 rounded-xl bg-emerald-900/40 hover:bg-emerald-800 text-emerald-200 text-sm font-medium border border-emerald-500/20 transition-all"
            >
              Settings
            </button>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl text-emerald-100 hover:bg-emerald-900/40"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-20 left-4 right-4 bg-emerald-950/95 backdrop-blur-xl rounded-2xl p-6 shadow-2xl border border-emerald-500/20 flex flex-col gap-3 z-50">
            {['home', 'learn', 'quran', 'duas', 'dashboard', 'settings'].map((view) => (
              <button
                key={view}
                onClick={() => { setCurrentView(view as any); setMobileMenuOpen(false); }}
                className="text-left py-2.5 px-4 rounded-xl text-emerald-100 hover:bg-emerald-900/50 capitalize font-medium"
              >
                {view}
              </button>
            ))}
          </div>
        )}
      </header>

      {/* Dynamic View Router Content */}
      <main className="flex-grow pt-32 px-4 sm:px-8 pb-20 max-w-7xl mx-auto w-full">
        {currentView === 'home' && <HomeView onViewChange={setCurrentView} />}
        {currentView === 'learn' && <LearnHubView />}
        {currentView === 'quran' && <QuranExplorerView />}
        {currentView === 'duas' && <DuasView />}
        {currentView === 'dashboard' && <DashboardView />}
        {currentView === 'settings' && <SettingsView />}
      </main>

      {/* Footer */}
      <footer className="bg-emerald-950 text-emerald-200 py-12 px-6 border-t border-emerald-900 text-center text-xs">
        <p>© {new Date().getFullYear()} Bayyinah Platform. Built with Ihsan for the Global Ummah.</p>
      </footer>
    </div>
  );
}

// 1. HOME VIEW
function HomeView({ onViewChange }: { onViewChange: (v: any) => void }) {
  return (
    <div className="space-y-16">
      <section className="text-center py-12 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-emerald-500/10 blur-[100px] rounded-full pointer-events-none" />
        
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-950 border border-emerald-500/20 text-emerald-300 text-xs font-semibold mb-6">
          <Sparkles className="w-3.5 h-3.5 text-gold-400" />
          <span>The Modern Standard for Learning Arabic & Qur'an</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white max-w-4xl mx-auto leading-tight mb-6">
          Understand the Qur’an in Arabic. <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-gold-400">Naturally.</span>
        </h1>

        <p className="text-base sm:text-lg text-emerald-200/70 max-w-2xl mx-auto mb-10 leading-relaxed">
          A calm, distraction-free environment combining advanced spaced repetition, verified translations, and beautiful typography.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => onViewChange('learn')}
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-base shadow-lg flex items-center justify-center gap-3 transition-all"
          >
            <span>Begin Your Journey</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <button
            onClick={() => onViewChange('quran')}
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-emerald-900/40 hover:bg-emerald-900/70 text-emerald-100 font-medium text-base border border-emerald-500/20 flex items-center justify-center gap-2 transition-all"
          >
            <BookOpen className="w-4 h-4 text-emerald-400" />
            <span>Explore Qur'an</span>
          </button>
        </div>
      </section>

      {/* Daily Reflection Card */}
      <div className="max-w-3xl mx-auto bg-emerald-950/60 border border-emerald-500/20 rounded-3xl p-8 shadow-xl relative overflow-hidden">
        <span className="text-xs uppercase tracking-widest text-gold-400 font-semibold mb-4 block">Daily Reflection</span>
        <p className="arabic-text text-3xl text-white text-right mb-6 leading-loose">
          فَإِنَّ مَعَ الْعُسْرِ يُسْرًا • إِنَّ مَعَ الْعُسْرِ يُسْرًا
        </p>
        <p className="text-emerald-200/90 text-base italic mb-4 font-light">
          "For indeed, with hardship [will be] ease. Indeed, with hardship [will be] ease."
        </p>
        <div className="flex items-center justify-between pt-4 border-t border-emerald-900 text-xs text-emerald-400">
          <span>Surah Ash-Sharh (94:5-6)</span>
          <span className="text-gold-400 font-medium">Verified Uthmani Text</span>
        </div>
      </div>
    </div>
  );
}

// 2. LEARN HUB VIEW
function LearnHubView() {
  const [lessonActive, setLessonActive] = useState(false);
  const [selectedOpt, setSelectedOpt] = useState<number | null>(null);

  if (lessonActive) {
    return (
      <div className="max-w-xl mx-auto bg-emerald-950/80 border border-emerald-500/20 p-8 rounded-3xl shadow-2xl space-y-6">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold text-emerald-400">Exercise 1 of 1</span>
          <button onClick={() => setLessonActive(false)} className="p-2 text-emerald-300 hover:text-white"><X className="w-5 h-5"/></button>
        </div>
        <p className="text-lg text-emerald-100">Select the correct English meaning for:</p>
        <div className="bg-emerald-900/30 p-8 rounded-2xl text-center border border-emerald-500/10">
          <span className="arabic-text text-5xl font-bold text-white block mb-2">كِتَاب</span>
          <span className="text-xs text-gold-400 uppercase font-semibold">Kitab</span>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {['Mosque', 'Book', 'Pen', 'House'].map((opt, idx) => (
            <button
              key={opt}
              onClick={() => setSelectedOpt(idx)}
              className={`py-4 rounded-xl font-medium border transition-all ${
                selectedOpt === idx ? (idx === 1 ? 'bg-emerald-600 border-emerald-500 text-white' : 'bg-red-600 border-red-500 text-white') : 'bg-emerald-900/20 border-emerald-500/20 text-emerald-100 hover:bg-emerald-900/40'
              }`}
            >
              {opt}
            </button>
          ))}
        </div>
        {selectedOpt !== null && (
          <button onClick={() => setLessonActive(false)} className="w-full py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-semibold">
            Finish Lesson
          </button>
        )}
      </div>
    );
  }

  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      <div className="bg-emerald-950/60 border border-emerald-500/20 p-8 rounded-3xl">
        <h1 className="text-3xl font-bold text-white mb-2">Arabic Learning Hub</h1>
        <p className="text-emerald-200/70 text-sm">Interactive step-by-step modules designed for long-term retention.</p>
      </div>

      <div className="space-y-4">
        {[
          { title: 'Module 1: Arabic Alphabet Foundations', desc: 'Master the 28 letters, isolated forms, and short vowels.', status: 'completed' },
          { title: 'Module 2: Connected Letter Forms', desc: 'Learn how letters change shape in initial, medial, and final positions.', status: 'active' },
          { title: 'Module 3: High-Frequency Qur\'anic Vocabulary', desc: 'Learn the top 100 words in the Holy Qur\'an.', status: 'locked' }
        ].map((m, i) => (
          <div key={i} className="bg-emerald-950/40 border border-emerald-500/15 p-6 rounded-3xl flex items-center justify-between gap-4">
            <div>
              <h3 className="font-semibold text-lg text-white">{m.title}</h3>
              <p className="text-xs text-emerald-200/60 mt-1">{m.desc}</p>
            </div>
            <button
              onClick={() => setLessonActive(true)}
              className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold rounded-xl flex items-center gap-2 shrink-0"
            >
              <Play className="w-3.5 h-3.5 fill-white" />
              <span>Start</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

// 3. QUR'AN EXPLORER VIEW
function QuranExplorerView() {
  const [surahs, setSurahs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.alquran.cloud/v1/surah')
      .then(res => res.json())
      .then(data => {
        if (data.code === 200) setSurahs(data.data.slice(0, 12));
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <div className="space-y-8 max-w-5xl mx-auto">
      <div className="bg-emerald-950/60 border border-emerald-500/20 p-8 rounded-3xl">
        <h1 className="text-3xl font-bold text-white mb-2">The Noble Qur'an Explorer</h1>
        <p className="text-emerald-200/70 text-sm">Read and explore Surahs with Uthmani text and verified translations.</p>
      </div>

      {loading ? (
        <div className="text-center py-12 text-emerald-400">Loading Surahs from certified source...</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {surahs.map((s) => (
            <div key={s.number} className="bg-emerald-950/40 border border-emerald-500/15 p-6 rounded-3xl flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-300 font-bold flex items-center justify-center text-sm">
                  {s.number}
                </div>
                <div>
                  <h3 className="font-semibold text-white text-base">{s.englishName}</h3>
                  <p className="text-[11px] text-emerald-200/60">{s.numberOfAyahs} Ayahs</p>
                </div>
              </div>
              <span className="arabic-text text-2xl font-bold text-white">{s.name}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// 4. DUAS VIEW
function DuasView() {
  const duas = [
    { title: 'Morning Remembrance', arabic: 'اللَّهُمَّ بِكَ أَصْبَحْنَا، وَبِكَ أَمْسَيْنَا...', trans: 'O Allah, by You we enter the morning...' },
    { title: 'Protection from Harm', arabic: 'بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ...', trans: 'In the name of Allah, with whose name nothing can cause harm...' }
  ];

  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      <div className="bg-emerald-950/60 border border-emerald-500/20 p-8 rounded-3xl">
        <h1 className="text-3xl font-bold text-white mb-2">Fortress of the Believer (Duas)</h1>
        <p className="text-emerald-200/70 text-sm">Authentic daily Adhkar and supplications.</p>
      </div>

      <div className="space-y-6">
        {duas.map((d, i) => (
          <div key={i} className="bg-emerald-950/40 border border-emerald-500/15 p-8 rounded-3xl space-y-4">
            <h3 className="font-semibold text-white text-lg">{d.title}</h3>
            <p className="arabic-text text-3xl text-white text-right leading-loose">{d.arabic}</p>
            <p className="text-emerald-200/80 text-sm italic">"{d.trans}"</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// 5. DASHBOARD VIEW
function DashboardView() {
  return (
    <div className="space-y-8 max-w-5xl mx-auto">
      <div className="bg-emerald-950/60 border border-emerald-500/20 p-8 rounded-3xl">
        <h1 className="text-3xl font-bold text-white mb-2">Student Dashboard</h1>
        <p className="text-emerald-200/70 text-sm">Track your progress, streaks, and learning statistics.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="bg-emerald-950/40 border border-emerald-500/15 p-6 rounded-3xl space-y-2">
          <span className="text-xs text-emerald-400 uppercase font-semibold">Active Streak</span>
          <div className="text-3xl font-bold text-white">14 Days 🔥</div>
        </div>
        <div className="bg-emerald-950/40 border border-emerald-500/15 p-6 rounded-3xl space-y-2">
          <span className="text-xs text-gold-400 uppercase font-semibold">Total XP</span>
          <div className="text-3xl font-bold text-white">2,450 XP 🏆</div>
        </div>
        <div className="bg-emerald-950/40 border border-emerald-500/15 p-6 rounded-3xl space-y-2">
          <span className="text-xs text-emerald-400 uppercase font-semibold">Completed Lessons</span>
          <div className="text-3xl font-bold text-white">18 Lessons ✅</div>
        </div>
      </div>
    </div>
  );
}

// 6. SETTINGS VIEW
function SettingsView() {
  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      <div className="bg-emerald-950/60 border border-emerald-500/20 p-8 rounded-3xl">
        <h1 className="text-3xl font-bold text-white mb-2">Preferences</h1>
        <p className="text-emerald-200/70 text-sm">Manage app configurations and audio settings.</p>
      </div>

      <div className="bg-emerald-950/40 border border-emerald-500/15 p-6 rounded-3xl flex items-center justify-between">
        <div>
          <h3 className="font-semibold text-white">Primary Qur'an Translation</h3>
          <p className="text-xs text-emerald-200/60">Sahih International (Authorized)</p>
        </div>
        <span className="px-3 py-1 bg-emerald-600 text-white text-xs rounded-lg font-semibold">Active</span>
      </div>
    </div>
  );
}