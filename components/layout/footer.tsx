import Link from "next/link";
import { GeometricStar } from "@/components/ui/GeometricStar";
import { Container } from "@/components/ui/Container";

const FOOTER_GROUPS = [
  {
    title: "Learn",
    links: [
      { label: "Arabic alphabet", href: "/learn/alphabet" },
      { label: "Grammar", href: "/learn/grammar" },
      { label: "Vocabulary", href: "/learn/vocabulary" },
      { label: "Daily challenge", href: "/learn/daily-challenge" },
    ],
  },
  {
    title: "Qur'an",
    links: [
      { label: "Read", href: "/quran" },
      { label: "Word by word", href: "/quran/word-by-word" },
      { label: "Bookmarks", href: "/quran/bookmarks" },
      { label: "Translations", href: "/quran/translations" },
    ],
  },
  {
    title: "Platform",
    links: [
      { label: "About", href: "/about" },
      { label: "Sources & licensing", href: "/sources" },
      { label: "Privacy", href: "/privacy" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-line bg-bg-elevated dark:border-line-dark dark:bg-bg-dark-elevated">
      <Container className="py-16">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-5">
          <div className="col-span-2">
            <div className="flex items-center gap-2.5">
              <GeometricStar size={26} className="text-emerald-700 dark:text-emerald-400" />
              <span className="font-display text-lg font-medium">Noor</span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-muted dark:text-ink-inverted/60">
              A calm, structured path to learning Arabic and understanding the
              Qur&apos;an — built for daily, lasting habits.
            </p>
          </div>

          {FOOTER_GROUPS.map((group) => (
            <div key={group.title}>
              <h3 className="text-sm font-semibold text-ink dark:text-ink-inverted">
                {group.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-ink-muted transition-colors hover:text-emerald-800 dark:text-ink-inverted/60 dark:hover:text-emerald-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-line pt-8 text-sm text-ink-soft dark:border-line-dark dark:text-ink-inverted/50 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Noor. All rights reserved.</p>
          <p>
            Qur&apos;an text and translations sourced from{" "}
            
              href="https://alquran.cloud"
              className="underline underline-offset-2 hover:text-emerald-700 dark:hover:text-emerald-300"
              target="_blank"
              rel="noreferrer"
            >
              AlQuran.cloud
            </a>
            .
          </p>
        </div>
      </Container>
    </footer>
  );
}