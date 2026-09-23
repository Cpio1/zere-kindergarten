import { advantages } from "@/lib/content";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Advantages() {
  return (
    <section id="advantages" className="pb-24 sm:pb-32">
      <div className="container-x">
        <Reveal>
          <div className="relative overflow-hidden rounded-[40px] bg-forest px-6 py-14 sm:px-12 sm:py-16 lg:px-16 lg:py-20">
            {/* Едва заметные круги для глубины */}
            <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full border-[40px] border-white/[0.04]" aria-hidden />
            <div className="pointer-events-none absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-leaf/25 blur-3xl" aria-hidden />

            <div className="relative grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-16">
              <SectionHeading
                tone="dark"
                eyebrow="Артықшылықтарымыз"
                title="Неліктен ZERE?"
                description="Балаңыз күн сайын қуанып баратын орта."
              />

              <ul className="grid gap-4 sm:grid-cols-2">
                {advantages.map(({ icon: Icon, title }) => (
                  <li
                    key={title}
                    className="group flex items-center gap-4 rounded-3xl bg-white/[0.07] p-5 ring-1 ring-white/10 transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.12]"
                  >
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-mint text-forest transition-transform duration-300 group-hover:scale-105">
                      <Icon className="h-6 w-6" strokeWidth={1.9} />
                    </span>
                    <span className="text-lg leading-snug font-bold text-white">{title}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
