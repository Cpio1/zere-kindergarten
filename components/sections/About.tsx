import { aboutCards } from "@/lib/content";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function About() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="container-x">
        <Reveal>
          <SectionHeading
            eyebrow="ZERE туралы"
            title="Біз туралы"
            description="ZERE balabakshasy – балалардың қауіпсіздігіне, дамуына және жайлы ортада тәрбиеленуіне ерекше көңіл бөлетін балабақша."
          />
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {aboutCards.map(({ icon: Icon, title, text }, i) => (
            <Reveal key={title} delay={i * 90}>
              <article className="group h-full rounded-[28px] bg-white p-7 shadow-card ring-1 ring-forest/5 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card-hover">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-mint text-forest transition-colors duration-300 group-hover:bg-forest group-hover:text-white">
                  <Icon className="h-7 w-7" strokeWidth={1.8} />
                </span>
                <h3 className="mt-6 text-2xl font-extrabold tracking-tight text-forest">{title}</h3>
                <p className="mt-3 text-base leading-relaxed text-muted">{text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
