"use client";
import { useRef, type ReactNode, type MouseEvent } from "react";
import { cn } from "@/lib/utils";

/* glowy: card wrapper with mouse-tracking radial glow + soft border highlight */

export function Glowy({
  children,
  className,
  inner = "p-6",
}: {
  children: ReactNode;
  className?: string;
  inner?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    el.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      className={cn(
        "group relative overflow-hidden rounded-3xl border border-border bg-card/60 backdrop-blur-xl transition-all duration-500 hover:border-primary/30",
        className,
      )}
    >
      {/* Spotlight */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(420px circle at var(--mx,50%) var(--my,50%), oklch(0.78 0.16 220 / 0.18), transparent 60%)",
        }}
      />
      {/* Border shimmer */}
      <div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(280px circle at var(--mx,50%) var(--my,50%), oklch(0.78 0.16 220 / 0.5), transparent 70%)",
          WebkitMask:
            "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
          padding: 1,
        }}
      />
      <div className={cn("relative", inner)}>{children}</div>
    </div>
  );
}