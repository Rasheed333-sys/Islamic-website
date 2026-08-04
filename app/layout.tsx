import type { Metadata, Viewport } from "next";
import { fontDisplay, fontBody, fontArabicUi, fontArabicQuran } from "@/lib/fonts";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Noor — Learn Arabic. Understand the Qur'an.",
    template: "%s · Noor",
  },
  description:
    "A calm, structured platform for learning Arabic from zero to advanced, understanding the Qur'an, memorizing Surahs and Duas, and building daily Islamic habits.",
  metadataBase: new URL("https://noor.app"),
  openGraph: {
    title: "Noor — Learn Arabic. Understand the Qur'an.",
    description:
      "Learn Arabic, read the Qur'an with trusted translations, and build lasting daily habits — all in one calm, focused platform.",
    type: "website",
    siteName: "Noor",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FAF8F3" },
    { media: "(prefers-color-scheme: dark)", color: "#0D1917" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${fontDisplay.variable} ${fontBody.variable} ${fontArabicUi.variable} ${fontArabicQuran.variable}`}
      suppressHydrationWarning
    >
      <body className="font-body antialiased">
        
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-emerald-800 focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}