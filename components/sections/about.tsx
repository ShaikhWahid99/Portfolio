"use client";
import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, Copy, Mail } from "lucide-react";
import { PrimaryButton } from "@/components/ui-fx/primary-button";
import {
  GithubIcon,
  LinkedinIcon,
  SocialButton,
} from "@/components/ui-fx/social-icons";
import { profile } from "@/data/portfolio";

export function About() {
  const [copied, setCopied] = useState(false);
  const copiedTimeoutRef = useRef<number | null>(null);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      if (copiedTimeoutRef.current)
        window.clearTimeout(copiedTimeoutRef.current);
      copiedTimeoutRef.current = window.setTimeout(
        () => setCopied(false),
        1800,
      );
    } catch {
      setCopied(false);
    }
  };

  return (
    <section
      id="about"
      className="relative flex min-h-svh items-center pt-28"
      aria-label="About"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[20%] h-64 w-64 -translate-x-1/2 rounded-full bg-primary/10 blur-[110px]" />
        <div className="absolute right-[16%] top-[46%] h-52 w-52 rounded-full bg-accent/10 blur-[105px]" />
      </div>

      <div
        id="top"
        className="relative mx-auto w-full max-w-5xl px-6 text-center"
      >
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.9 }}
          className="mx-auto max-w-4xl text-balance text-display text-4xl leading-[0.97] text-foreground/95 sm:text-5xl md:text-[60px]"
        >
          MERN Stack Developer.
          <br />
          <span className="text-foreground/85">Engineering modern</span>
          <br />
          <span className="text-gradient">backend systems.</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.38, duration: 0.7 }}
          className="mt-9 flex flex-wrap items-center justify-center gap-3 text-[22px] sm:mt-10 md:text-[24px]"
        >
          <span className="font-semibold text-foreground">
            Hi, I&apos;m {profile.name}
          </span>
          <motion.div
            className="relative transform-gpu"
            animate={{ y: [0, -1, 0] }}
            transition={{ duration: 5.8, repeat: Infinity, ease: "easeInOut" }}
            whileHover={{ y: -2 }}
            style={{ transform: "translateZ(0)", willChange: "transform" }}
          >
            <motion.span
              aria-hidden
              className="absolute -inset-1 rounded-full border border-primary/35"
              animate={{ scale: [1, 1.06, 1], opacity: [0.35, 0.18, 0.35] }}
              transition={{
                duration: 2.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.img
              src={profile.portrait}
              alt={profile.name}
              width={50}
              height={50}
              className="relative h-12 w-12 transform-gpu rounded-full border border-border object-cover shadow-[0_0_12px_-10px_rgba(120,190,255,0.55)]"
              loading="eager"
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              style={{ transform: "translateZ(0)", willChange: "transform" }}
            />
          </motion.div>
          <span className="text-[20px] text-muted-foreground/90 sm:text-[22px] md:text-[24px]">
            {profile.role}
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="mx-auto mt-6 flex max-w-2xl flex-wrap items-center justify-center gap-3 sm:mt-7"
        >
          <a href="#contact">
            <PrimaryButton>Let&apos;s connect</PrimaryButton>
          </a>
          <motion.button
            type="button"
            onClick={handleCopyEmail}
            whileTap={{ scale: 0.98 }}
            whileHover={{ y: -1 }}
            className="inline-flex h-11 items-center gap-2 rounded-full border border-border bg-card/40 px-4 text-sm text-muted-foreground transition-all hover:border-primary/40 hover:text-foreground"
          >
            <AnimatePresence mode="wait" initial={false}>
              {copied ? (
                <motion.span
                  key="check"
                  initial={{ scale: 0.7, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="inline-flex items-center"
                >
                  <Check className="h-4 w-4 text-primary" />
                </motion.span>
              ) : (
                <motion.span
                  key="mail"
                  initial={{ scale: 0.85, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.85, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="inline-flex items-center"
                >
                  <Mail className="h-4 w-4" />
                </motion.span>
              )}
            </AnimatePresence>
            {profile.email}
            <AnimatePresence mode="wait" initial={false}>
              {copied ? (
                <motion.span
                  key="copied"
                  initial={{ x: 6, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: 6, opacity: 0 }}
                  transition={{ duration: 0.22 }}
                  className="ml-1 rounded-full bg-primary/18 px-2 py-0.5 text-[11px] font-medium text-primary shadow-[0_0_14px_-8px_rgba(120,190,255,0.95)]"
                >
                  Copied!
                </motion.span>
              ) : (
                <motion.span
                  key="copy"
                  initial={{ x: 4, opacity: 0 }}
                  animate={{ x: 0, opacity: 0.85 }}
                  exit={{ x: 4, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="inline-flex items-center"
                >
                  <Copy className="h-3.5 w-3.5" />
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.68, duration: 0.7 }}
          className="mt-7 flex items-center justify-center gap-3 sm:mt-8"
        >
          <motion.div
            whileHover={{ y: -3, scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 280, damping: 22 }}
            className="relative"
          >
            <motion.span
              aria-hidden
              className="pointer-events-none absolute inset-0 rounded-full"
              whileHover={{ boxShadow: "0 0 0 6px rgba(120, 190, 255, 0.09)" }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            />
            <SocialButton
              href={profile.social.linkedin}
              label="LinkedIn"
              className="transition-all duration-300 hover:bg-card/85"
            >
              <LinkedinIcon className="h-4 w-4" />
            </SocialButton>
          </motion.div>
          <motion.div
            whileHover={{ y: -3, scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            transition={{
              type: "spring",
              stiffness: 280,
              damping: 22,
              delay: 0.02,
            }}
            className="relative"
          >
            <motion.span
              aria-hidden
              className="pointer-events-none absolute inset-0 rounded-full"
              whileHover={{ boxShadow: "0 0 0 6px rgba(120, 190, 255, 0.09)" }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            />
            <SocialButton
              href={profile.social.github}
              label="GitHub"
              className="transition-all duration-300 hover:bg-card/85"
            >
              <GithubIcon className="h-4 w-4" />
            </SocialButton>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
