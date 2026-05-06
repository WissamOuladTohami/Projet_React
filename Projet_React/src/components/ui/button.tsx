import * as React from "react";
import { cn } from "@/lib/utils";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "outline" | "ghost";
};

export function Button({
  className,
  variant = "default",
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(
        "inline-flex items-center justify-center rounded-full border px-5 py-2.5 text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background active:scale-[0.98]",
        variant === "default" &&
          "border-primary/30 bg-primary text-primary-foreground shadow-[0_0_30px_rgba(56,189,248,0.25)] hover:-translate-y-0.5 hover:bg-primary/90",
        variant === "outline" &&
          "border-white/10 bg-white/[0.03] text-foreground hover:border-primary/50 hover:bg-primary/10 hover:text-primary",
        variant === "ghost" &&
          "border-transparent text-foreground hover:bg-white/[0.04]",
        className,
      )}
      {...props}
    />
  );
}
