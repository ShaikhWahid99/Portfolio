"use client";
import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function BoxyBounce({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 320, damping: 18 }}
      className={cn(
        "group flex flex-col items-center justify-center gap-2 rounded-2xl border border-border bg-card/60 p-5 backdrop-blur-xl transition-colors hover:border-primary/40 hover:bg-card",
        className,
      )}
    >
      {children}
    </motion.div>
  );
}

export function BoxyShift({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      whileHover={{ x: 4, y: -4 }}
      transition={{ type: "spring", stiffness: 280, damping: 20 }}
      className={cn(
        "relative flex flex-col items-center justify-center gap-2 rounded-2xl border border-border bg-card/60 p-5 backdrop-blur-xl",
        "before:absolute before:inset-0 before:-z-10 before:translate-x-2 before:translate-y-2 before:rounded-2xl before:bg-gradient-primary before:opacity-0 before:transition-opacity hover:before:opacity-60",
        className,
      )}
    >
      {children}
    </motion.div>
  );
}

export function BoxyRotate({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      whileHover={{ rotate: -3, scale: 1.03 }}
      transition={{ type: "spring", stiffness: 260, damping: 16 }}
      className={cn(
        "flex flex-col items-center justify-center gap-2 rounded-2xl border border-border bg-card/60 p-5 backdrop-blur-xl",
        className,
      )}
    >
      {children}
    </motion.div>
  );
}