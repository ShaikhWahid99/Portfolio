"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { PrimaryButton } from "./primary-button";

export function ErrorPage({ code = "404", title = "Lost in space", description = "The page you're looking for drifted off the map." }: { code?: string; title?: string; description?: string }) {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background px-4">
      <div className="absolute inset-0 grid-bg" />
      <div className="absolute inset-0" style={{ background: "var(--gradient-radial)" }} />
      <div className="relative z-10 max-w-lg text-center">
        <motion.h1 initial={{ opacity: 0, scale: 0.8, filter: "blur(20px)" }} animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }} transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }} className="text-display text-[8rem] sm:text-[10rem] leading-none text-gradient">{code}</motion.h1>
        <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.7 }} className="mt-2 text-2xl font-semibold text-foreground">{title}</motion.h2>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.7 }} className="mt-3 text-muted-foreground">{description}</motion.p>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45, duration: 0.7 }} className="mt-8">
          <Link href="/"><PrimaryButton icon={<ArrowLeft className="h-4 w-4 rotate-180" />}>Back home</PrimaryButton></Link>
        </motion.div>
      </div>
    </div>
  );
}
