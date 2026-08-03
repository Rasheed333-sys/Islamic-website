'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Volume2, CheckCircle2, AlertCircle, ArrowRight, Trophy } from 'lucide-react';

export default function LessonRunnerPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [isCompleted, setIsCompleted] = useState(false);

  const steps = [
    {
      type: 'multiple-choice',
      prompt: 'Select the correct English meaning for:',
      targetArabic: 'كِتَاب',
      targetTranslit: 'Kitab',
      options: ['Mosque', 'Book', 'Pen', 'House'],
      correctIndex: 1,
    },
    {
      type: 'multiple-choice',
      prompt: 'What is the standalone form of the letter "Ba"?',
      targetArabic: 'ب',
      targetTranslit: 'Ba',
      options: ['أ', 'ب', 'ت', 'ث'],
      correctIndex: 1,
    },
  ];

  const handleSelect = (index: number) => {
    if (isCorrect !== null) return;
    setSelectedOption(index);
    const correct = index === steps[currentStep].correctIndex;
    setIsCorrect(correct);
  };

  const handleNext = () => {
    setSelectedOption(null);
    setIsCorrect(null);
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsCompleted(true);
    }
  };

  if (isCompleted) {
    return (
      <div className="min-h-screen bg-surface-light dark:bg-surface-dark flex flex-col items-center justify-center p-6 text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="glass-panel rounded-3xl p-10 max-w-md w-full shadow-card space-y-6 border border-emerald-500/20"
        >
          <div className="w-20 h-20 rounded-full bg-emerald-500/10 text-emerald-600 flex items-center justify-center mx-auto">
            <Trophy className="w-10 h-10 text-gold-500" />
          </div>
          <h2 className="text-2xl font-display font-bold text-emerald-950 dark:text-white">Lesson Completed!</h2>
          <p className="text-emerald-900/70 dark:text-emerald-200/70 text-sm">
            Masha'Allah! You earned +50 XP and kept your active learning streak alive.
          </p>
          <Link
            href="/learn"
            className="w-full py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm shadow-card block transition-all"
          >
            Return to Hub
          </Link>
        </motion.div>
      </div>
    );
  }

  const step = steps[currentStep];

  return (
    <div className="min-h-screen bg-surface-light dark:bg-surface-dark flex flex-col selection:bg-emerald-500 selection:text-white">
      {/* Top Progress Bar */}
      <header className="p-6 max-w-3xl mx-auto w-full flex items-center gap-4">
        <Link href="/learn" className="text-emerald-900 dark:text-emerald-100 hover:opacity-80">
          <X className="w-6 h-6" />
        </Link>
        <div className="flex-grow bg-emerald-900/10 dark:bg-emerald-100/10 h-3 rounded-full overflow-hidden">
          <motion.div
            className="bg-emerald-600 h-full rounded-full"
            animate={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
        <span className="text-xs font-semibold text-emerald-800 dark:text-emerald-300">
          {currentStep + 1}/{steps.length}
        </span>
      </header>

      {/* Exercise Container */}
      <main className="flex-grow flex items-center justify-center p-4">
        <div className="max-w-xl w-full glass-panel rounded-3xl p-8 sm:p-10 shadow-card border border-emerald-500/15">
          <h2 className="text-lg font-medium text-emerald-900 dark:text-emerald-200 mb-6">
            {step.prompt}
          </h2>

          <div className="bg-emerald-50/50 dark:bg-emerald-950/40 rounded-2xl p-8 text-center mb-8 border border-emerald-500/10">
            <div className="arabic-text text-5xl font-bold text-emerald-950 dark:text-white mb-2">
              {step.targetArabic}
            </div>
            <div className="text-xs text-gold-600 font-semibold uppercase tracking-wider">
              {step.targetTranslit}
            </div>
          </div>

          {/* Options Grid */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            {step.options.map((option, index) => {
              let btnStyle = "glass-panel hover:bg-emerald-50 dark:hover:bg-emerald-900/40 text-emerald-950 dark:text-emerald-100 border-emerald-500/20";
              if (selectedOption !== null) {
                if (index === step.correctIndex) {
                  btnStyle = "bg-emerald-600 text-white border-emerald-600 shadow-sm";
                } else if (index === selectedOption) {
                  btnStyle = "bg-red-500 text-white border-red-500";
                } else {
                  btnStyle = "opacity-50 glass-panel border-emerald-500/10";
                }
              }

              return (
                <button
                  key={option}
                  onClick={() => handleSelect(index)}
                  disabled={selectedOption !== null}
                  className={`py-4 px-6 rounded-2xl font-medium text-base transition-all border ${btnStyle}`}
                >
                  {option}
                </button>
              );
            })}
          </div>

          {/* Feedback & Continue Action */}
          {selectedOption !== null && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`p-4 rounded-2xl flex items-center justify-between ${
                isCorrect ? 'bg-emerald-100/80 dark:bg-emerald-950/80 text-emerald-900 dark:text-emerald-200' : 'bg-red-100 dark:bg-red-950/80 text-red-900 dark:text-red-200'
              }`}
            >
              <div className="flex items-center gap-3">
                {isCorrect ? <CheckCircle2 className="w-5 h-5 text-emerald-600" /> : <AlertCircle className="w-5 h-5 text-red-500" />}
                <span className="font-semibold text-sm">
                  {isCorrect ? 'Correct! Excellent work.' : 'Not quite right. Keep going!'}
                </span>
              </div>
              <button
                onClick={handleNext}
                className="px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold shadow-sm flex items-center gap-1.5 transition-all"
              >
                <span>Continue</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          )}
        </div>
      </main>
    </div>
  );
}