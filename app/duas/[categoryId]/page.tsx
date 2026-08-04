import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { DuaCard } from "@/components/duas/DuaCard";
import { CategoryIcon } from "@/components/duas/CategoryIcon";
import { DUA_CATEGORIES, getCategoryById, getDuasByCategory } from "@/lib/data/duas";

interface CategoryPageProps {
  params: { categoryId: string };
}

export function generateStaticParams() {
  return DUA_CATEGORIES.map((category) => ({ categoryId: category.id }));
}

export function generateMetadata({ params }: CategoryPageProps): Metadata {
  const category = getCategoryById(params.categoryId);
  if (!category) return { title: "Duas" };
  return {
    title: `${category.label} duas`,
    description: category.description,
  };
}

export default function DuaCategoryPage({ params }: CategoryPageProps) {
  const category = getCategoryById(params.categoryId);
  if (!category) notFound();

  const duas = getDuasByCategory(category.id);

  return (
    <Container className="py-14 sm:py-20">
      <Link
        href="/duas"
        className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-muted hover:text-emerald-800 dark:text-ink-inverted/60 dark:hover:text-emerald-300"
      >
        <ArrowLeft className="h-4 w-4" />
        All categories
      </Link>

      <div className="mt-6 flex items-center gap-4">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300">
          <CategoryIcon icon={category.icon} className="h-6 w-6" />
        </span>
        <div>
          <h1 className="font-display text-display-md font-medium text-ink dark:text-ink-inverted">
            {category.label}
          </h1>
          <p className="text-ink-muted dark:text-ink-inverted/70">{category.description}</p>
        </div>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-2">
        {duas.map((dua) => (
          <DuaCard key={dua.id} dua={dua} />
        ))}
      </div>
    </Container>
  );
}