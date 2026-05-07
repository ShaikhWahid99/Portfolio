"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu as MenuIcon, X } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Work", href: "#projects" },
  { label: "Components", href: "#components" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export function Menu() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = links.map((l) => l.href.slice(1));
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive("#" + e.target.id)),
      { rootMargin: "-40% 0px -55% 0px" },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 flex justify-center px-4 transition-all duration-500",
        scrolled ? "pt-3" : "pt-5",
      )}
    >
      <motion.nav
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "flex w-full max-w-5xl items-center justify-between gap-4 rounded-full border border-border px-4 py-2.5 transition-all duration-500",
          scrolled
            ? "bg-background/70 backdrop-blur-xl shadow-elegant"
            : "bg-background/40 backdrop-blur-md",
        )}
      >
        <a
          href="#top"
          className="flex items-center gap-2 px-2 text-sm font-semibold tracking-tight"
        >
          <span className="hidden sm:inline">wahid.dev</span>
        </a>
        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={cn(
                  "relative inline-flex rounded-full px-3.5 py-1.5 text-sm transition-colors",
                  active === l.href
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {active === l.href && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 -z-10 rounded-full bg-secondary"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="hidden items-center gap-1.5 rounded-full bg-gradient-primary px-4 py-1.5 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-[1.03] md:inline-flex"
        >
          Contact me
        </a>
        <button
          aria-label="Toggle menu"
          className="grid h-9 w-9 place-items-center rounded-full border border-border md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-4 w-4" /> : <MenuIcon className="h-4 w-4" />}
        </button>
      </motion.nav>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="fixed left-4 right-4 top-20 z-40 rounded-3xl border border-border bg-background/95 p-4 shadow-elegant backdrop-blur-2xl md:hidden"
          >
            <ul className="flex flex-col">
              {links.map((l, i) => (
                <motion.li
                  key={l.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between rounded-2xl px-4 py-3 text-base text-foreground hover:bg-secondary"
                  >
                    {l.label}
                    <span className="text-xs text-muted-foreground">0{i + 1}</span>
                  </a>
                </motion.li>
              ))}
            </ul>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 flex items-center justify-center gap-2 rounded-2xl bg-gradient-primary px-4 py-3 text-sm font-semibold text-primary-foreground shadow-glow"
            >
              Contact me
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
