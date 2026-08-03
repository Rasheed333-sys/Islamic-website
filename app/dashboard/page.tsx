'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Flame, Trophy, Clock, BookOpen, Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-surface-light dark:bg-surface-dark flex flex-col selection:bg-emerald-500 selection:text-white">
      <Navbar />

      <main className="flex-grow pt-32 px-4 sm:px-8 pb-20">
        <div className="max-w-6xl mx-auto">
          {/* Welcome Header */}
          <div className="glass-panel rounded-3xl p-8 sm:p-10 mb-10 shadow-card relative overflow-hidden border border-emerald-500/15">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
              <div>
                <span className="text-xs uppercase tracking-widest text-gold-600 font-semibold mb-1 block">
                  Welcome Back, Student
                </span>
                <h1 className="text-3xl sm:text-4xl font-display font-bold text-emerald-950 dark:text-white">
                  Your Learning Dashboard
                </h1>
              </div>

              <Link
                href="/learn/lesson/sample"
                className="px-6 py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium shadow-card flex items-center justify-center gap-2 transition-all self-start md:self-auto"
              >
                <span>Resume Today's Lesson</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="glass-panel p-6 rounded-3xl space-y-2 border border-emerald-500/10">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-emerald-900/60 dark:text-emerald-200/60 uppercase">Active Streak</span>
                <Flame className="w-5 h-5 text-amber-500 fill-amber-500" />
              </div>
              <div className="text-3xl font-display font-bold text-emerald-950 dark:text-white">14 Days</div>
              <p className="text-[10px] text-gold-600 font-medium">Keep the flame burning!</p>
            </div>

            <div className="glass-panel p-6 rounded-3xl space-y-2 border border-emerald-500/10">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-emerald-900/60 dark:text-emerald-200/60 uppercase">Total XP</span>
                <Trophy className="w-5 h-5 text-gold-500" />
              </div>
              <div className="text-3xl font-display font-bold text-emerald-950 dark:text-white">2,450 XP</div>
              <p className="text-[10px] text-gold-600 font-medium">Level 4 Scholar</p>
            </div>

            <div className="glass-panel p-6 rounded-3xl space-y-2 border border-emerald-500/10">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-emerald-900/60 dark:text-emerald-200/60 uppercase">Today's Time</span>
                <Clock className="w-5 h-5 text-emerald-600" />
              </div>
              <div className="text-3xl font-display font-bold text-emerald-950 dark:text-white">24 Mins</div>
              <p className="text-[10px] text-emerald-700 dark:text-emerald-400 font-medium">Goal: 20 mins / day</p>
            </div>

            <div className="glass-panel p-6 rounded-3xl space-y-2 border border-emerald-500/10">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-emerald-900/60 dark:text-emerald-200/60 uppercase">Completed</span>
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              </div>
              <div className="text-3xl font-display font-bold text-emerald-950 dark:text-white">18 Lessons</div>
              <p className="text-[10px] text-emerald-700 dark:text-emerald-400 font-medium">Module 2 in progress</p>
            </div>
          </div>

          {/* Recent Activity Section */}
          <div className="glass-panel rounded-3xl p-8 shadow-card border border-emerald-500/15">
            <h3 className="text-xl font-display font-semibold text-emerald-950 dark:text-white mb-6">
              Recent Learning History
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 rounded-2xl bg-emerald-50/50 dark:bg-emerald-950/30 border border-emerald-500/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold">
                    ✓
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-emerald-950 dark:text-white">Module 2: Connected Letter Forms</h4>
                    <p className="text-xs text-emerald-900/60 dark:text-emerald-200/60">Completed 3 lessons • Yesterday</p>
                  </div>
                </div>
                <span className="text-xs font-semibold text-gold-600">+50 XP</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}