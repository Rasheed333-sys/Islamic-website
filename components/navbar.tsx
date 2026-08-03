'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Compass, Sparkles, User, Menu, X, Flame } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Learn', href: '/learn', icon: BookOpen },
    { name: 'Qur\'an', href: '/quran', icon: Sparkles },
    { name: 'Duas', href: '/duas', icon: Compass },
    { name: 'Roadmap', href: '/roadmap', icon: Sparkles },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 pt-4">
      <nav className="max-w-7xl mx-auto h-16 glass-panel rounded-2xl px-6 flex items-center justify-between shadow-soft">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-emerald-600 flex items-center justify-center text-white font-arabic text-xl shadow-card group-hover:scale-105 transition-transform">
            ق
          </div>
          <div className="flex flex-col">
            <span className="font-display font-semibold text-lg tracking-tight text-emerald-950 dark:text-emerald-50">
              Bayyinah
            </span>
            <span className="text-[10px] tracking-widest uppercase text-gold-600 font-medium -mt-1">
              Arabic & Qur'an
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-1 bg-emerald-50/50 dark:bg-emerald-950/30 p-1.5 rounded-xl border border-emerald-500/10">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <Link
                key={link.name}
                href={link.href}
                className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-emerald-900/80 dark:text-emerald-200/80 hover:text-emerald-950 hover:bg-white dark:hover:bg-emerald-900/50 transition-all"
              >
                <Icon className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Right Actions & Streak */}
        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-500/20 text-amber-700 dark:text-amber-400 text-xs font-semibold">
            <Flame className="w-4 h-4 fill-amber-500 text-amber-500 animate-pulse" />
            <span>14 Days</span>
          </div>

          <Link
            href="/dashboard"
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium shadow-card transition-all"
          >
            <User className="w-4 h-4" />
            <span>Dashboard</span>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-xl text-emerald-900 dark:text-emerald-100 hover:bg-emerald-50 dark:hover:bg-emerald-900/40"
          aria-label="Toggle Navigation"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden absolute top-20 left-4 right-4 glass-panel rounded-2xl p-6 shadow-card flex flex-col gap-4"
          >
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-3 p-3 rounded-xl text-emerald-950 dark:text-emerald-100 hover:bg-emerald-50 dark:hover:bg-emerald-900/30 font-medium"
                >
                  <Icon className="w-5 h-5 text-emerald-600" />
                  {link.name}
                </Link>
              );
            })}
            <div className="pt-4 border-t border-emerald-500/10 flex items-center justify-between">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-amber-50 dark:bg-amber-950/30 text-amber-700 dark:text-amber-400 text-xs font-semibold">
                <Flame className="w-4 h-4 fill-amber-500 text-amber-500" />
                <span>14 Day Streak</span>
              </div>
              <Link
                href="/dashboard"
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 rounded-xl bg-emerald-600 text-white text-sm font-medium"
              >
                Dashboard
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};