"use client";

import { useEffect, useState, type ReactNode } from "react";
import { Menu, X } from "lucide-react";
import { navItems } from "@/lib/content";
import { site } from "@/lib/site";
import { cn } from "@/lib/cn";

export function Header({ logo }: { logo: ReactNode }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");

  // Тень у шапки после начала прокрутки
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Подсветка пункта меню текущей секции
  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector<HTMLElement>(item.href))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Мобильное меню: блокируем прокрутку и закрываем по Escape
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 transition-all duration-300",
          scrolled || open ? "bg-cream/90 shadow-[0_8px_30px_-20px_rgb(36_92_58/0.35)] backdrop-blur-md" : "bg-cream",
        )}
      >
        <div className="container-x flex h-20 items-center justify-between gap-6">
          <a href="#home" className="flex shrink-0 items-center gap-3" onClick={() => setOpen(false)}>
            {logo}
            <span className="text-lg leading-tight font-extrabold tracking-tight text-forest">
              ZERE
              <span className="block text-sm font-semibold text-leaf">balabakshasy</span>
            </span>
          </a>
  
          <nav className="hidden lg:block" aria-label="Негізгі мәзір">
            <ul className="flex items-center gap-1">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className={cn(
                      "rounded-full px-4 py-2 text-[15px] font-semibold transition-colors duration-200",
                      active === item.href ? "bg-mint text-forest" : "text-ink/75 hover:bg-mint/60 hover:text-forest",
                    )}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
  
          <div className="flex items-center gap-2">
            <a
              href="#contacts"
              className="hidden h-12 items-center rounded-full bg-forest px-6 text-[15px] font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-forest-deep sm:inline-flex"
            >
              Байланысу
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Мәзірді жабу" : "Мәзірді ашу"}
              aria-expanded={open}
              aria-controls="mobile-menu"
              className="flex h-12 w-12 items-center justify-center rounded-full bg-mint text-forest transition-colors hover:bg-mint/70 lg:hidden"
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Мобильное меню — вне <header>: backdrop-blur шапки иначе ограничил бы fixed-панель её высотой */}
      <div
        id="mobile-menu"
        className={cn(
          "fixed inset-x-0 top-20 bottom-0 z-40 bg-cream transition-all duration-300 lg:hidden",
          open ? "visible opacity-100" : "invisible opacity-0",
        )}
      >
        <nav className="container-x flex h-full flex-col pt-4 pb-8" aria-label="Мобильді мәзір">
          <ul className="flex flex-col gap-1">
            {navItems.map((item, i) => (
              <li
                key={item.href}
                className={cn("transition-all duration-300", open ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0")}
                style={{ transitionDelay: open ? `${60 + i * 40}ms` : "0ms" }}
              >
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "block rounded-2xl px-5 py-4 text-xl font-bold transition-colors",
                    active === item.href ? "bg-mint text-forest" : "text-ink hover:bg-mint/60",
                  )}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contacts"
            onClick={() => setOpen(false)}
            className="mt-auto flex h-14 items-center justify-center rounded-full bg-forest text-lg font-bold text-white"
          >
            Байланысу
          </a>
          <p className="mt-4 text-center text-sm text-muted">
            {site.address} · {site.hours}
          </p>
        </nav>
      </div>
    </>
  );
}
