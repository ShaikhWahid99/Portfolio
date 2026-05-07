"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface Props {
  image: string;
  title: string;
  description: string;
  tech: string[];
  github?: string;
  live?: string;
  className?: string;
}

export function ExpandingCard({ image, title, description, tech, github, live, className }: Props) {
  const [open, setOpen] = useState(false);
  return (
    <motion.article
      onHoverStart={() => setOpen(true)}
      onHoverEnd={() => setOpen(false)}
      onFocus={() => setOpen(true)}
      onBlur={() => setOpen(false)}
      tabIndex={0}
      className={cn(
        "group relative overflow-hidden rounded-3xl border border-border bg-card/60 backdrop-blur-xl shadow-elegant transition-colors hover:border-primary/40 focus:outline-none focus:border-primary/60",
        className,
      )}
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <motion.img
          src={image}
          alt={title}
          loading="lazy"
          width={1024}
          height={640}
          className="h-full w-full object-cover"
          animate={{ scale: open ? 1.08 : 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
      </div>
      <div className="relative p-6">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-xl font-semibold text-foreground">{title}</h3>
          <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-all group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </div>
        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              key="d"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{description}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {tech.map((t) => (
                  <span key={t} className="rounded-full border border-border bg-secondary/60 px-2.5 py-0.5 text-[11px] font-medium text-muted-foreground">{t}</span>
                ))}
              </div>
              <div className="mt-5 flex items-center gap-3">
                {live && <a href={live} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline">Live <ExternalLink className="h-3.5 w-3.5" /></a>}
                {github && <a href={github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground">Code <ExternalLink className="h-3.5 w-3.5" /></a>}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.article>
  );
}
