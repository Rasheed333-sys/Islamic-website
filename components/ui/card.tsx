import { type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  glass?: boolean;
}

export function Card({ className, glass = false, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-lg border border-line bg-bg-elevated p-6 shadow-card dark:border-line-dark dark:bg-bg-dark-elevated",
        glass && "surface-glass shadow-glow",
        className,
      )}
      {...props}
    />
  );
}