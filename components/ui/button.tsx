import { type ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost" | "gold";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-emerald-800 text-white hover:bg-emerald-700 active:bg-emerald-900 shadow-soft",
  secondary:
    "bg-white text-ink border border-line hover:border-emerald-300 hover:text-emerald-800 dark:bg-white/5 dark:text-ink-inverted dark:border-line-dark",
  ghost: "bg-transparent text-ink hover:bg-ink/5 dark:text-ink-inverted dark:hover:bg-white/10",
  gold: "bg-gold-500 text-emerald-950 hover:bg-gold-400 shadow-soft",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "h-9 px-4 text-sm gap-1.5",
  md: "h-11 px-6 text-[15px] gap-2",
  lg: "h-14 px-8 text-base gap-2.5",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-xl font-semibold transition-all duration-300 ease-calm disabled:pointer-events-none disabled:opacity-40",
          variantStyles[variant],
          sizeStyles[size],
          className,
        )}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";