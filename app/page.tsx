import { findPublicFile, listNumberedImages } from "@/lib/files";
import { site } from "@/lib/site";
import { toGalleryImage } from "@/lib/content";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Advantages } from "@/components/sections/Advantages";
import { Gallery } from "@/components/sections/Gallery";
import { Documents } from "@/components/sections/Documents";
import { Contacts } from "@/components/sections/Contacts";

export default function HomePage() {
  // Все фото image1…imageN из public/images — новые подхватываются автоматически
  const images = listNumberedImages().map(toGalleryImage);
  const logoSrc = findPublicFile(site.logoCandidates);

  return (
    <main>
      <Hero image={images[0] ?? null} logoSrc={logoSrc} />
      <About />
      <Advantages />
      <Gallery items={images} />
      <Documents />
      <Contacts />
    </main>
  );
}
