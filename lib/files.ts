import fs from "node:fs";
import path from "node:path";

const PUBLIC_DIR = path.join(process.cwd(), "public");
const IMAGE_EXTENSIONS = [".jpg", ".jpeg", ".png", ".webp", ".avif"];

/** Проверяет, существует ли файл в папке public (только на сервере). */
export function publicFileExists(src: string) {
  try {
    return fs.existsSync(path.join(PUBLIC_DIR, src.replace(/^\/+/, "")));
  } catch {
    return false;
  }
}

/** Возвращает первый существующий файл из списка кандидатов, либо null. */
export function findPublicFile(candidates: string[]) {
  return candidates.find(publicFileExists) ?? null;
}

/**
 * Находит в public/images все фото вида image1.jpg, image2.png, image10.webp …
 * и возвращает их пути, отсортированные по номеру.
 * Новые фото подхватываются автоматически — достаточно положить файл в папку.
 */
export function listNumberedImages(dir = "images") {
  try {
    return fs
      .readdirSync(path.join(PUBLIC_DIR, dir))
      .map((file) => {
        const match = /^image(\d+)(\.[a-z]+)$/i.exec(file);
        if (!match || !IMAGE_EXTENSIONS.includes(match[2].toLowerCase())) return null;
        return { n: Number(match[1]), src: `/${dir}/${file}` };
      })
      .filter((item): item is { n: number; src: string } => item !== null)
      .sort((a, b) => a.n - b.n)
      .map((item) => item.src);
  } catch {
    return [];
  }
}
