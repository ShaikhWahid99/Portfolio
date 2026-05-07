import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from "react";
import { cn } from "@/lib/utils";

/* primary: signature CTA button with sliding gradient + glow */

interface PrimaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "ghost";
  icon?: ReactNode;
}

export const PrimaryButton = forwardRef<HTMLButtonElement, PrimaryButtonProps>(
  ({ children, className, variant = "primary", icon, ...props }, ref) => {
    if (variant === "ghost") {
      return (
        <button
          ref={ref}
          className={cn(
            "group relative inline-flex items-center gap-2 rounded-full border border-border glass px-5 py-2.5 text-sm font-medium text-foreground transition-all hover:border-primary/40 hover:text-primary",
            className,
          )}
          {...props}
        >
          {children}
          {icon && <span className="transition-transform group-hover:translate-x-0.5">{icon}</span>}
        </button>
      );
    }
    return (
      <button
        ref={ref}
        className={cn(
          "group relative inline-flex items-center gap-2 overflow-hidden rounded-full px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-all hover:shadow-glow-violet active:scale-[0.98]",
          className,
        )}
        {...props}
      >
        <span className="absolute inset-0 bg-gradient-primary" />
        <span className="absolute inset-0 translate-x-[-100%] bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-[100%]" />
        <span className="relative z-10 flex items-center gap-2">
          {children}
          {icon && <span className="transition-transform group-hover:translate-x-1">{icon}</span>}
        </span>
      </button>
    );
  },
);
PrimaryButton.displayName = "PrimaryButton";