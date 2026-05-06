import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Avatar({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "flex h-14 w-14 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-lg font-bold text-primary shadow-[0_0_30px_rgba(56,189,248,0.12)]",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
