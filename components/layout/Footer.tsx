import type { ReactNode } from "react";
import { Clock, MapPin, Phone } from "lucide-react";
import { navItems } from "@/lib/content";
import { phone, phoneHref, site } from "@/lib/site";
import { InstagramIcon } from "@/components/ui/InstagramIcon";

export function Footer({ logo }: { logo: ReactNode }) {
  return (
    <footer className="bg-forest text-white">
      <div className="container-x grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr] lg:py-20">
        <div>
          <div className="flex items-center gap-4">
            {/* Белая подложка, чтобы логотип читался на тёмно-зелёном фоне */}
            <span className="inline-flex rounded-2xl bg-white p-2">{logo}</span>
            <span className="text-2xl font-extrabold tracking-tight">ZERE balabakshasy</span>
          </div>
          <p className="mt-6 text-base leading-relaxed text-white/75">
            {site.branch}
            <br />
            {site.organization}
          </p>
        </div>

        <nav aria-label="Төменгі мәзір">
          <h3 className="text-sm font-bold tracking-wider text-mint/80 uppercase">Бөлімдер</h3>
          <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3 md:grid-cols-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="text-base text-white/80 transition-colors hover:text-white">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="text-sm font-bold tracking-wider text-mint/80 uppercase">Байланыс</h3>
          <ul className="mt-5 space-y-4 text-base text-white/85">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-sun" />
              {site.address}
            </li>
            <li className="flex gap-3">
              <Clock className="mt-0.5 h-5 w-5 shrink-0 text-sun" />
              {site.hours}
            </li>
            {phone && (
              <li className="flex gap-3">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-sun" />
                <a href={phoneHref(phone)} className="transition-colors hover:text-white">
                  {phone}
                </a>
              </li>
            )}
            <li className="flex gap-3">
              <InstagramIcon className="mt-0.5 h-5 w-5 shrink-0 text-sun" />
              <a
                href={site.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-white"
              >
                {site.instagram.handle}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <p className="container-x py-6 text-sm text-white/60">
          © 2026 ZERE balabakshasy. Барлық құқықтар қорғалған.
        </p>
      </div>
    </footer>
  );
}
