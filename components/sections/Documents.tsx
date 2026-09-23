import { ArrowUpRight, FileCheck } from "lucide-react";
import { documentsUrl } from "@/lib/site";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

export function Documents() {
  const isExternal = documentsUrl.startsWith("http");

  return (
    <section id="documents" className="py-24 sm:py-32">
      <div className="container-x">
        <Reveal>
          <SectionHeading eyebrow="Ашықтық" title="Құжаттар" />
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-12 flex flex-col gap-8 rounded-[36px] bg-white p-7 shadow-card ring-1 ring-forest/5 sm:p-10 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
              <span className="relative flex h-20 w-20 shrink-0 items-center justify-center rounded-3xl bg-mint text-forest">
                <FileCheck className="h-10 w-10" strokeWidth={1.6} />
                <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full border-4 border-white bg-sun" aria-hidden />
              </span>
              <div>
                <h3 className="text-2xl font-extrabold tracking-tight text-forest sm:text-3xl">Аттестаттау құжаттары</h3>
                <p className="mt-2 text-base text-muted sm:text-lg">Балабақшаның аттестаттау құжаттарымен танысыңыз.</p>
              </div>
            </div>

            <Button
              href={documentsUrl}
              {...(isExternal && { target: "_blank", rel: "noopener noreferrer" })}
              className="shrink-0"
            >
              Құжаттарды көру
              <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
