"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Moon } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { GeometricStar } from "@/components/ui/GeometricStar";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Learn Arabic", href: "/learn" },
  { label: "Qur'an", href: "/quran" },
  { label: "Duas", href: "/duas" },
  { label: "Roadmap", href: "/roadmap" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/80 backdrop-blur-xl dark:border-line-dark dark:bg-bg-dark/80">
      <Container className="flex h-18 items-center justify-between py-3">
        <Link href="/" className="flex items-center gap-2.5" aria-label="Noor home">
          <GeometricStar size={28} className="text-emerald-700 dark:text-emerald-400" />
          <span className="font-display text-xl font-medium tracking-tight">Noor</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[15px] font-medium text-ink-muted transition-colors duration-200 hover:text-emerald-800 dark:text-ink-inverted/70 dark:hover:text-emerald-300"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <button
            type="button"
            aria-label="Toggle dark mode"
            className="flex h-10 w-10 items-center justify-center rounded-full text-ink-muted transition-colors hover:bg-ink/5 dark:text-ink-inverted/70 dark:hover:bg-white/10"
          >
            <Moon className="h-[18px] w-[18px]" />
          </button>
          <Button variant="ghost" size="sm">
            Sign in
          </Button>
          <Button variant="primary" size="sm">
            Start learning
          </Button>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </Container>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-line md:hidden dark:border-line-dark"
            aria-label="Mobile"
          >
            <Container className="flex flex-col gap-1 py-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "rounded-lg px-3 py-3 text-[15px] font-medium text-ink-muted transition-colors",
                    "hover:bg-ink/5 dark:text-ink-inverted/70 dark:hover:bg-white/5",
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-2 flex flex-col gap-2 px-3">
                <Button variant="secondary" className="w-full">
                  Sign in
                </Button>
                <Button variant="primary" className="w-full">
                  Start learning
                </Button>
              </div>
            </Container>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}