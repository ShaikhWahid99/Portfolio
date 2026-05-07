"use client";
import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/* text-system: typographic primitives with built-in reveal animations */

const reveal: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(8px)" },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { delay: i * 0.06, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  }),
};

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.span
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      variants={reveal}
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-border glass px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground",
        className,
      )}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-glow" />
      {children}
    </motion.span>
  );
}

export function Display({
  children,
  className,
  as: Tag = "h2",
}: {
  children: ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3";
}) {
  const MotionTag = motion[Tag] as typeof motion.h2;
  return (
    <MotionTag
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      variants={reveal}
      className={cn(
        "text-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-foreground",
        className,
      )}
    >
      {children}
    </MotionTag>
  );
}

export function Lead({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.p
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      variants={reveal}
      className={cn("max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed", className)}
    >
      {children}
    </motion.p>
  );
}

/* Splits text into words and staggers them in */
export function StaggerText({
  text,
  className,
  wordClassName,
  delay = 0,
}: {
  text: string;
  className?: string;
  wordClassName?: string;
  delay?: number;
}) {
  const words = text.split(" ");
  return (
    <span className={cn("inline-flex flex-wrap gap-x-[0.25em]", className)}>
      {words.map((w, i) => (
        <motion.span
          key={i}
          custom={i}
          initial="hidden"
          animate="show"
          variants={{
            hidden: { opacity: 0, y: "60%", filter: "blur(8px)" },
            show: (idx: number) => ({
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
              transition: { delay: delay + idx * 0.07, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
            }),
          }}
          className={cn("inline-block", wordClassName)}
        >
          {w}
        </motion.span>
      ))}
    </span>
  );
}