"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CategoryIcon } from "@/components/duas/CategoryIcon";
import type { DuaCategory } from "@/lib/types/dua";

interface DuaCategoryGridProps {
  categories: DuaCategory[];
}

export function DuaCategoryGrid({ categories }: DuaCategoryGridProps) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
      {categories.map((category, index) => (
        <motion.div
          key={category.id}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.04 }}
        >
          <Link
            href={`/duas/${category.id}`}
            className="group flex h-full flex-col gap-3 rounded-xl border border-line bg-bg-elevated p-5 transition-colors duration-200 hover:border-emerald-300 hover:bg-emerald-50/50 dark:border-line-dark dark:bg-bg-dark-elevated dark:hover:border-emerald-700 dark:hover:bg-emerald-900/10"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-emerald-50 text-emerald-700 transition-colors group-hover:bg-emerald-100 dark:bg-emerald-900/40 dark:text-emerald-300">
              <CategoryIcon icon={category.icon} className="h-5 w-5" />
            </span>
            <div>
              <div className="flex items-baseline justify-between gap-2">
                <p className="font-medium text-ink dark:text-ink-inverted">{category.label}</p>
                <span className="arabic text-sm text-ink-soft dark:text-ink-inverted/40">
                  {category.labelArabic}
                </span>
              </div>
              <p className="mt-1 text-sm text-ink-muted dark:text-ink-inverted/60">
                {category.description}
              </p>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}