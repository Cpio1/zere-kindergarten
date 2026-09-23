"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronDown, ChevronLeft, ChevronRight, Expand, X } from "lucide-react";
import type { GalleryImage } from "@/lib/content";
import { PhotoPlaceholder } from "@/components/ui/PhotoPlaceholder";
import { cn } from "@/lib/cn";

/** Сколько фото показывать до нажатия «Барлық фотосуреттер» */
const INITIAL_COUNT = 9;

/**
 * Сетка: mobile — 2 колонки, desktop — 3. Плитки вертикальные (4:5) — так фото с телефона почти не обрезаются,
 * а object-position (по умолчанию верхняя треть) бережёт головы детей.
 * Широкие групповые фото можно растянуть на 2 колонки: imageOverrides в lib/content.ts → { wide: true }.
 * В режиме просмотра фото всегда показывается целиком.
 */
const gridClass = "mt-14 grid grid-flow-dense grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:gap-5";
const tileClass = "relative overflow-hidden rounded-[22px] sm:rounded-[28px]";
const tileSize = (wide?: boolean) => (wide ? "col-span-2 aspect-[8/5]" : "aspect-[4/5]");

/** Высоты заглушек, пока фото не добавлены */
const PLACEHOLDER_COUNT = 6;

export function GalleryGrid({ items }: { items: GalleryImage[] }) {
  const [showAll, setShowAll] = useState(false);
  const [active, setActive] = useState<number | null>(null);
  const touchX = useRef<number | null>(null);

  const visible = showAll ? items : items.slice(0, INITIAL_COUNT);

  const close = useCallback(() => setActive(null), []);
  const step = useCallback(
    (dir: 1 | -1) => setActive((i) => (i === null ? i : (i + dir + items.length) % items.length)),
    [items.length],
  );

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [active, close, step]);

  // Пока фото нет — аккуратные заглушки той же сетки
  if (items.length === 0) {
    return (
      <div className={gridClass}>
        {Array.from({ length: PLACEHOLDER_COUNT }, (_, i) => (
          <div key={i} className={cn(tileClass, tileSize())}>
            <PhotoPlaceholder />
          </div>
        ))}
      </div>
    );
  }

  const current = active !== null ? items[active] : null;

  return (
    <>
      <div className={gridClass}>
        {visible.map((item, i) => (
          <button
            key={item.src}
            type="button"
            onClick={() => setActive(i)}
            aria-label={`Фотосуретті ашу: ${item.alt}`}
            className={cn(
              tileClass,
              tileSize(item.wide),
              "group cursor-zoom-in bg-sand focus-visible:ring-4 focus-visible:ring-leaf/50 focus-visible:outline-none",
            )}
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              sizes={item.wide ? "(min-width: 768px) 66vw, 100vw" : "(min-width: 768px) 33vw, 50vw"}
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
              style={{ objectPosition: item.position }}
            />
            <span className="absolute inset-0 bg-forest/0 transition-colors duration-500 group-hover:bg-forest/10" />
            <span className="absolute right-4 bottom-4 flex h-10 w-10 translate-y-2 items-center justify-center rounded-full bg-white/90 text-forest opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
              <Expand className="h-4 w-4" />
            </span>
          </button>
        ))}
      </div>

      {items.length > INITIAL_COUNT && (
        <div className="mt-12 flex justify-center">
          <button
            type="button"
            onClick={() => setShowAll((v) => !v)}
            className="group inline-flex h-14 items-center gap-2 rounded-full bg-white px-8 font-bold text-forest ring-1 ring-forest/15 transition-all duration-300 hover:-translate-y-0.5 hover:ring-forest/40"
          >
            {showAll ? "Жасыру" : `Барлық фотосуреттер (${items.length})`}
            <ChevronDown className={cn("h-5 w-5 transition-transform duration-300", showAll && "rotate-180")} />
          </button>
        </div>
      )}

      {/* Просмотр фото целиком (object-contain — без обрезки) */}
      {current && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Фотосуретті қарау"
          onClick={close}
          onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
          onTouchEnd={(e) => {
            if (touchX.current === null) return;
            const dx = e.changedTouches[0].clientX - touchX.current;
            if (Math.abs(dx) > 50) step(dx < 0 ? 1 : -1);
            touchX.current = null;
          }}
          className="fixed inset-0 z-[60] flex animate-[fade-in_0.25s_ease-out] items-center justify-center bg-[#10261a]/90 p-4 backdrop-blur-sm sm:p-12"
        >
          <div className="relative h-full w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <Image key={current.src} src={current.src} alt={current.alt} fill sizes="100vw" className="rounded-[20px] object-contain" />
          </div>

          <button
            type="button"
            onClick={close}
            aria-label="Жабу"
            className="absolute top-4 right-4 flex h-12 w-12 items-center justify-center rounded-full bg-white text-forest transition hover:bg-mint"
          >
            <X className="h-6 w-6" />
          </button>

          {items.length > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  step(-1);
                }}
                aria-label="Алдыңғы фото"
                className="absolute top-1/2 left-3 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-forest transition hover:bg-white sm:left-6"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  step(1);
                }}
                aria-label="Келесі фото"
                className="absolute top-1/2 right-3 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-forest transition hover:bg-white sm:right-6"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
              <span className="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-full bg-white/15 px-4 py-1.5 text-sm font-semibold text-white">
                {active! + 1} / {items.length}
              </span>
            </>
          )}
        </div>
      )}
    </>
  );
}
