/**
 * Все основные данные сайта в одном месте.
 * Чтобы добавить телефон, ссылку на документы или поправить карту — меняйте значения здесь.
 */

/** Номер телефона, например "+7 777 123 45 67". Пока пусто — блок телефона на сайте не показывается. */
export const phone = "+7 700 818 0293";

/** Ссылка на аттестационные документы (например, папка Google Drive). */
export const documentsUrl = "https://drive.google.com/drive/folders/10ZlYuE7zzzQieeTANHjZsRxKKnnVfnoy";

/**
 * Карта Google Maps по адресу.
 * Если метка стоит неточно — добавьте город в mapQuery, например "Алматы мкр. Рахат 308",
 * либо вставьте готовую ссылку в mapEmbedUrl
 * (Google Maps → «Поделиться» → «Встраивание карт» → скопировать src из iframe).
 */
const mapQuery = "мкр.+Рахат+308";
export const mapEmbedUrl = `https://www.google.com/maps?q=${mapQuery}&output=embed`;
export const mapLinkUrl = `https://www.google.com/maps/search/?api=1&query=${mapQuery}`;

export const site = {
  name: "ZERE balabakshasy",
  branch: "Филиал детский сад «Зере»",
  organization: "ТОО «Маткасым»",
  address: "мкр. Рахат, 308",
  hours: "07:30–18:00",
  instagram: {
    handle: "@zere_balabaksha",
    url: "https://instagram.com/zere_balabaksha",
  },
  description:
    "ZERE balabakshasy — 2 жастан 6 жасқа дейінгі балаларға арналған қауіпсіз, жайлы және мейірімді орта. Мкр. Рахат, 308.",
  /** Возможные имена файла логотипа в папке public — используется первый найденный. */
  logoCandidates: ["/logo.png", "/logo.svg", "/logo.webp", "/logo.jpg", "/logo.jpeg"],
};

/** Ссылка для кнопки телефона: оставляет только цифры и «+». */
export function phoneHref(value: string) {
  return `tel:${value.replace(/[^\d+]/g, "")}`;
}
