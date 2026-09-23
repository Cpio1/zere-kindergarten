import { Camera } from "lucide-react";
import { cn } from "@/lib/cn";

/** Заглушка на месте фото, пока файлы не добавлены в public/images. */
export function PhotoPlaceholder({ className, label = "Фото жақында қосылады" }: { className?: string; label?: string }) {
  return (
    <div
      className={cn(
        "flex h-full w-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-mint-soft via-sand to-mint/70 text-leaf",
        className,
      )}
    >
      <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/70">
        <Camera className="h-6 w-6" />
      </span>
      <span className="px-4 text-center text-sm font-semibold text-muted">{label}</span>
    </div>
  );
}
