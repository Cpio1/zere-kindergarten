import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import { site } from "@/lib/site";
import { findPublicFile } from "@/lib/files";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Logo } from "@/components/layout/Logo";
import "./globals.css";

// Современный гротеск с поддержкой казахских букв (cyrillic-ext: ә, ғ, қ, ң, ө, ұ, ү, һ, і)
const manrope = Manrope({
  subsets: ["latin", "cyrillic", "cyrillic-ext"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${site.name} — балабақша, мкр. Рахат`,
  description: site.description,
  openGraph: {
    title: site.name,
    description: site.description,
    type: "website",
    locale: "kk_KZ",
  },
};

export const viewport: Viewport = {
  themeColor: "#FAF8F1",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const logoSrc = findPublicFile(site.logoCandidates);

  return (
    <html lang="kk" className={manrope.variable}>
      <body className="font-sans">
        <Header logo={<Logo src={logoSrc} />} />
        {children}
        <Footer logo={<Logo src={logoSrc} />} />
      </body>
    </html>
  );
}
