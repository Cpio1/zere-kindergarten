import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: ReactNode;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
};

export function SectionHeading({ eyebrow, title, description, align = "left", tone = "light", className }: SectionHeadingProps) {
  const onDark = tone === "dark";

  return (
    <div className={cn(align === "center" && "mx-auto text-center", "max-w-2xl", className)}>
      {eyebrow && (
        <span
          className={cn(
            "inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-semibold",
            onDark ? "bg-white/10 text-mint" : "bg-mint text-forest",
          )}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-sun" aria-hidden />
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          "mt-5 text-4xl leading-[1.1] font-extrabold tracking-tight sm:text-5xl",
          onDark ? "text-white" : "text-forest",
        )}
      >
        {title}
      </h2>
      {description && (
        <p className={cn("mt-5 text-lg leading-relaxed sm:text-xl", onDark ? "text-white/80" : "text-muted")}>{description}</p>
      )}
    </div>
  );
}
