"use client";
import { motion } from "framer-motion";
import { profile } from "@/data/portfolio";

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="relative border-t border-border py-10"
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <div className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} {profile.name}. Backend-focused full stack developer.
        </div>
        <div className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-muted-foreground">
          <span className="h-1.5 w-1.5 animate-pulse-glow rounded-full bg-primary" />
          Open for opportunities
        </div>
      </div>
    </motion.footer>
  );
}
