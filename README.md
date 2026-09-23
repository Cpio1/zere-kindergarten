# ZERE balabakshasy — лендинг

Next.js 15 · TypeScript · Tailwind CSS v4 · lucide-react

```bash
npm install
npm run dev     # http://localhost:3000
npm run build && npm start
```

## Что и где менять

| Что | Где |
| --- | --- |
| Логотип | `public/logo.png` (подойдёт также `logo.svg` / `.webp` / `.jpg`) |
| Фотографии | `public/images/image1.jpg`, `image2.jpg`, … (jpg/jpeg/png/webp). Подхватываются автоматически по номеру. `image1` — главное фото на первом экране |
| Подпись / точка фокуса / широкая плитка для фото | `imageOverrides` в `lib/content.ts` |
| Телефон | `phone` в `lib/site.ts` (пока пусто — блок не показывается) |
| Ссылка на документы (Google Drive) | `documentsUrl` в `lib/site.ts` |
| Карта | `mapQuery` в `lib/site.ts` — **добавьте город**, например `"Алматы, мкр. Рахат, 308"`, либо вставьте готовый `src` из Google Maps → «Поделиться» → «Встраивание карт» в `mapEmbedUrl` |
| Тексты, меню, карточки, преимущества | `lib/content.ts`, секции в `components/sections/` |

> Страница собирается статически: после добавления фото/логотипа на хостинге нужен новый билд (на Vercel — просто push).
