import type { ReactNode } from "react";
import { Building, Clock, ExternalLink, MapPin, Phone } from "lucide-react";
import { mapEmbedUrl, mapLinkUrl, phone, phoneHref, site } from "@/lib/site";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { InstagramIcon } from "@/components/ui/InstagramIcon";

type ContactItem = { icon: ReactNode; label: string; value: ReactNode };

export function Contacts() {
  const items: ContactItem[] = [
    {
      icon: <Building className="h-6 w-6" />,
      label: site.organization,
      value: site.branch,
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      label: "Мекенжай",
      value: site.fullAddress,
    },
    {
      icon: <Clock className="h-6 w-6" />,
      label: "Жұмыс уақыты",
      value: site.hours,
    },
    // Телефон показывается, только если он указан в lib/site.ts
    ...(phone
      ? [
          {
            icon: <Phone className="h-6 w-6" />,
            label: "Телефон",
            value: (
              <a href={phoneHref(phone)} className="transition-colors hover:text-leaf">
                {phone}
              </a>
            ),
          },
        ]
      : []),
    {
      icon: <InstagramIcon className="h-6 w-6" />,
      label: "Instagram",
      value: (
        <a href={site.instagram.url} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-leaf">
          {site.instagram.handle}
        </a>
      ),
    },
  ];

  return (
    <section id="contacts" className="pb-24 sm:pb-32">
      <div className="container-x">
        <Reveal>
          <SectionHeading eyebrow="Бізге келіңіз" title="Байланыс" />
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <ul className="grid h-full content-start gap-4">
              {items.map((item) => (
                <li
                  key={item.label}
                  className="flex items-center gap-5 rounded-[28px] bg-white p-5 shadow-card ring-1 ring-forest/5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-card-hover sm:p-6"
                >
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-mint text-forest">
                    {item.icon}
                  </span>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-muted">{item.label}</p>
                    <p className="mt-0.5 text-lg font-bold break-words text-forest sm:text-xl">{item.value}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={120}>
            <div className="flex h-full flex-col overflow-hidden rounded-[32px] bg-white p-2 shadow-card ring-1 ring-forest/5">
              <iframe
                src={mapEmbedUrl}
                title={`Карта: ${site.fullAddress}`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                className="h-[340px] w-full flex-1 rounded-[26px] border-0 sm:h-[450px]"
              />
              <a
                href={mapLinkUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-4 text-base font-bold text-forest transition-colors hover:text-leaf"
              >
                Картадан ашу
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
