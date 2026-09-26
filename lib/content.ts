import {
  Apple,
  Baby,
  BookOpen,
  HeartHandshake,
  Languages,
  ShieldCheck,
  Sparkles,
  UsersRound,
  UtensilsCrossed,
  type LucideIcon,
} from "lucide-react";

export const navItems = [
  { href: "#home", label: "Басты бет" },
  { href: "#about", label: "Біз туралы" },
  { href: "#gallery", label: "Фотосуреттер" },
  { href: "#documents", label: "Құжаттар" },
  { href: "#contacts", label: "Байланыс" },
];

export type InfoCard = { icon: LucideIcon; title: string; text: string };

export const aboutCards: InfoCard[] = [
  { icon: UsersRound, title: "3 топ", text: "Балаларға көңіл бөлуге мүмкіндік беретін жайлы топтар." },
  { icon: Baby, title: "2–6 жас", text: "Мектепке дейінгі жастағы балаларды қабылдаймыз." },
  { icon: Languages, title: "Қазақ тілі", text: "Оқыту және тәрбие беру қазақ тілінде жүргізіледі." },
  { icon: UtensilsCrossed, title: "4 мезгіл тамақтану", text: "Балалар үшін күнделікті толыққанды тамақтану ұйымдастырылған." },
];

export const advantages: { icon: LucideIcon; title: string }[] = [
  { icon: ShieldCheck, title: "Қауіпсіз орта" },
  { icon: HeartHandshake, title: "Балаларға жеке көңіл бөлу" },
  { icon: Sparkles, title: "Тәжірибелі тәрбиешілер" },
  { icon: BookOpen, title: "Дамытушы сабақтар" },
  { icon: Languages, title: "Қазақ тіліндегі тәрбие" },
  { icon: Apple, title: "Дұрыс тамақтану" },
];

export type GalleryImage = {
  src: string;
  alt: string;
  /** CSS object-position — куда «смотрит» кадр при обрезке. По умолчанию верхняя треть, чтобы не резать головы. */
  position?: string;
  /** true — широкая плитка на 2 колонки (для горизонтальных групповых фото) */
  wide?: boolean;
};

/**
 * Необязательные настройки для конкретных фото: подпись и точка фокуса.
 * Пример: "/images/image3.jpg": { alt: "Таңғы жаттығу", position: "50% 15%", wide: true }
 */
export const imageOverrides: Record<string, Partial<GalleryImage>> = {
  "/images/image1.jpeg": { alt: "Балабақша ауласында серуен", position: "50% 45%" },
  "/images/image2.jpeg": { alt: "Тәрбиешімен дамытушы сабақ", position: "50% 25%" },
  "/images/image3.jpeg": { alt: "Таңғы жаттығу", position: "50% 60%", wide: true },
  "/images/image4.jpeg": { alt: "Білім күні", position: "50% 62%" },
  "/images/image5.jpeg": { alt: "Ағылшын тілі сабағы", position: "50% 45%" },
};

export function toGalleryImage(src: string, index: number): GalleryImage {
  return { src, alt: `ZERE balabakshasy — фото ${index + 1}`, position: "50% 30%", ...imageOverrides[src] };
}
