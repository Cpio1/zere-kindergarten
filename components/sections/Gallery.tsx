import type { GalleryImage } from "@/lib/content";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GalleryGrid } from "./GalleryGrid";

/** items — фото из public/images (собираются на сервере в app/page.tsx) */
export function Gallery({ items }: { items: GalleryImage[] }) {
  return (
    <section id="gallery" className="bg-white py-24 sm:py-32">
      <div className="container-x">
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="Балабақша өмірі"
            title="Фотосуреттер"
            description="ZERE балабақшасындағы күнделікті сәттер."
          />
        </Reveal>

        <Reveal delay={100}>
          <GalleryGrid items={items} />
        </Reveal>
      </div>
    </section>
  );
}
