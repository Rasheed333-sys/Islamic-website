import React from 'react';
import Link from 'next/link';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-emerald-950 text-emerald-100 py-16 px-6 mt-24 border-t border-emerald-800/50">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gold-500 flex items-center justify-center text-emerald-950 font-arabic text-xl font-bold">
              ق
            </div>
            <span className="font-display font-bold text-xl text-white">Bayyinah</span>
          </div>
          <p className="text-emerald-300/80 text-sm leading-relaxed">
            An immersive, distraction-free environment designed to help you master Arabic and connect deeply with the Holy Qur'an.
          </p>
        </div>

        <div>
          <h4 className="font-display font-semibold text-white mb-4 text-sm tracking-wider uppercase">Learning</h4>
          <ul className="space-y-2.5 text-sm text-emerald-300/80">
            <li><Link href="/learn/alphabet" className="hover:text-white transition-colors">Arabic Alphabet</Link></li>
            <li><Link href="/learn/vocabulary" className="hover:text-white transition-colors">Core Vocabulary</Link></li>
            <li><Link href="/quran" className="hover:text-white transition-colors">Qur'an Explorer</Link></li>
            <li><Link href="/duas" className="hover:text-white transition-colors">Daily Adhkar & Duas</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-semibold text-white mb-4 text-sm tracking-wider uppercase">Platform</h4>
          <ul className="space-y-2.5 text-sm text-emerald-300/80">
            <li><Link href="/roadmap" className="hover:text-white transition-colors">Learning Roadmap</Link></li>
            <li><Link href="/dashboard" className="hover:text-white transition-colors">Student Dashboard</Link></li>
            <li><Link href="/settings" className="hover:text-white transition-colors">Preferences</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-semibold text-white mb-4 text-sm tracking-wider uppercase">Commitment</h4>
          <p className="text-xs text-emerald-300/70 leading-relaxed mb-4">
            Committed to absolute authenticity. Qur'anic text sourced from certified digital mushafs with verified academic translations.
          </p>
          <div className="text-xs text-gold-400 font-medium">
            Built with Ihsan (Excellence) for the Global Ummah.
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-emerald-900 flex flex-col sm:flex-row items-center justify-between text-xs text-emerald-400/60">
        <p>© {new Date().getFullYear()} Bayyinah Platform. All rights reserved.</p>
        <div className="flex gap-6 mt-4 sm:mt-0">
          <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
};