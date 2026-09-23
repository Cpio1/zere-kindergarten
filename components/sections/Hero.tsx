import Image from "next/image";
import { ArrowRight, Clock, MapPin } from "lucide-react";
import type { GalleryImage } from "@/lib/content";
import { site } from "@/lib/site";
import { Button } from "@/components/ui/Button";
import { PhotoPlaceholder } from "@/components/ui/PhotoPlaceholder";
import { Logo } from "@/components/layout/Logo";

type HeroProps = {
  /** Главное фото (первое из public/images) или null — тогда показывается заглушка */
  image: GalleryImage | null;
  logoSrc: string | null;
};

export function Hero({ image, logoSrc }: HeroProps) {
  return (
    <section id="home" className="relative overflow-hidden">
      {/* Мягкие декоративные пятна */}
      <div className="pointer-events-none absolute -top-40 -right-40 h-[520px] w-[520px] rounded-full bg-mint/60 blur-3xl" aria-hidden />
      <div className="pointer-events-none absolute bottom-0 -left-32 h-72 w-72 rounded-full bg-mint-soft blur-3xl" aria-hidden />

      <div className="container-x relative grid min-h-[calc(100svh-5rem)] items-center gap-10 py-10 lg:grid-cols-[1.05fr_1fr] lg:gap-14 lg:py-14">
        <div className="animate-[fade-in_0.8s_ease-out]">
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-forest shadow-card">
            <span className="h-2 w-2 rounded-full bg-sun" aria-hidden />
            ZERE balabakshasy
          </span>

          <h1 className="mt-6 text-[2.5rem] leading-[1.08] font-extrabold tracking-tight text-forest sm:text-6xl lg:text-[4.25rem]">
            Баланың бақытты балалық шағы осы жерден басталады
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted sm:text-xl">
            2 жастан 6 жасқа дейінгі балаларға арналған қауіпсіз, жайлы және мейірімді орта.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button href="#about">
              Біз туралы
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
            <Button href="#contacts" variant="secondary">
              Байланысу
            </Button>
          </div>

          <ul className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-base font-semibold text-ink/80">
            <li className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-leaf" />
              {site.address}
            </li>
            <li className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-leaf" />
              {site.hours}
            </li>
          </ul>
        </div>

        <div className="relative animate-[fade-in_1s_ease-out]">
          <div className="absolute -inset-3 -z-10 rotate-2 rounded-[44px] bg-mint sm:-inset-4" aria-hidden />
          <div className="relative aspect-[4/5] overflow-hidden rounded-[36px] bg-sand shadow-soft sm:aspect-[5/4] lg:aspect-[4/5]">
            {image ? (
              <Image
                src={image.src}
                alt={image.alt}
                fill
                priority
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
                style={{ objectPosition: image.position }}
              />
            ) : (
              <PhotoPlaceholder />
            )}
          </div>

          {/* Логотип в углу фото — не перекрывает центр кадра, где обычно лица */}
          <div className="absolute -bottom-5 left-5 flex items-center gap-3 rounded-3xl bg-white/95 py-3 pr-5 pl-3 shadow-card backdrop-blur sm:left-8">
            <Logo src={logoSrc} className="h-12 sm:h-14" priority />
            <div className="leading-tight">
              <p className="text-base font-extrabold text-forest">ZERE</p>
              <p className="text-sm font-semibold text-leaf">balabakshasy</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
