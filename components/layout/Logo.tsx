import Image from "next/image";
import { cn } from "@/lib/cn";

type LogoProps = {
  /** Путь к логотипу в public, либо null — тогда показывается текстовый знак */
  src: string | null;
  className?: string;
  priority?: boolean;
};

/**
 * Логотип ZERE. Высота задаётся через className (например "h-12"),
 * ширина — автоматически, поэтому пропорции не искажаются и логотип не обрезается.
 */
export function Logo({ src, className = "h-12", priority }: LogoProps) {
  if (!src) {
    return (
      <span
        className={cn(
          "inline-flex aspect-square items-center justify-center rounded-2xl bg-forest text-lg font-extrabold tracking-tight text-white",
          className,
        )}
        aria-label="ZERE"
      >
        Z
      </span>
    );
  }

  return (
    <Image
      src={src}
      alt="ZERE логотипі"
      width={0}
      height={0}
      sizes="240px"
      priority={priority}
      className={cn("w-auto object-contain", className)}
    />
  );
}
