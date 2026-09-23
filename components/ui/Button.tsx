import type { AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: "primary" | "secondary" | "light";
  children: ReactNode;
};

const variants = {
  primary: "bg-forest text-white shadow-[0_14px_30px_-14px_rgb(36_92_58/0.7)] hover:bg-forest-deep",
  secondary: "bg-white text-forest ring-1 ring-forest/15 hover:ring-forest/40",
  light: "bg-white text-forest hover:bg-mint",
};

/** Кнопка-ссылка: для якорей на странице и внешних ссылок. */
export function Button({ variant = "primary", className, children, ...props }: ButtonProps) {
  return (
    <a
      className={cn(
        "group inline-flex h-14 items-center justify-center gap-2 rounded-full px-7 text-base font-bold transition-all duration-300 hover:-translate-y-0.5 focus-visible:ring-4 focus-visible:ring-leaf/40 focus-visible:outline-none",
        variants[variant],
        className,
      )}
      {...props}
    >
      {children}
    </a>
  );
}
