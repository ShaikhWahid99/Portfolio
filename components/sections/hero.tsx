"use client";
import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import { Starfield } from "@/components/ui-fx/starfield";
import { PrimaryButton } from "@/components/ui-fx/primary-button";
import { StaggerText } from "@/components/ui-fx/text-system";
import { GithubIcon, LinkedinIcon, SocialButton } from "@/components/ui-fx/social-icons";
import { profile } from "@/data/portfolio";

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-[100svh] items-center overflow-hidden pt-28"
    >
      <Starfield />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-border glass px-3 py-1 text-xs uppercase tracking-[0.18em] text-muted-foreground"
        >
          Backend-focused full stack developer
        </motion.div>

        <h1 className="text-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
          <span className="block text-foreground/90">
            <StaggerText text="Building scalable" />
          </span>
          <span className="block">
            <StaggerText
              text="APIs, AI apps, and"
              delay={0.15}
              wordClassName="text-foreground/90"
            />
          </span>
          <span className="block">
            <StaggerText text="secure systems." delay={0.35} wordClassName="text-gradient" />
          </span>
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.7 }}
          className="mt-8 flex max-w-2xl flex-col gap-3 text-base sm:text-lg text-muted-foreground"
        >
          <p>
            Hi, I&apos;m <span className="text-foreground font-medium">{profile.name}</span>, an IT
            undergraduate from Mumbai building scalable REST APIs, secure microservices, and
            AI-driven full-stack applications.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.7 }}
          className="mt-9 flex flex-wrap items-center gap-3"
        >
          <a href="#projects">
            <PrimaryButton icon={<ArrowRight className="h-4 w-4" />}>View my work</PrimaryButton>
          </a>
          <a href="#contact">
            <PrimaryButton variant="ghost">Let&apos;s talk</PrimaryButton>
          </a>
          <span className="ml-1 inline-flex items-center gap-1.5 text-xs text-muted-foreground">
            <MapPin className="h-3.5 w-3.5" /> {profile.location}
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.7 }}
          className="mt-12 flex items-center gap-3"
        >
          <SocialButton href={profile.social.github} label="GitHub">
            <GithubIcon className="h-4 w-4" />
          </SocialButton>
          <SocialButton href={profile.social.linkedin} label="LinkedIn">
            <LinkedinIcon className="h-4 w-4" />
          </SocialButton>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-[11px] uppercase tracking-[0.3em] text-muted-foreground"
      >
        <div className="flex flex-col items-center gap-2">
          <span>Scroll</span>
          <span className="h-8 w-px bg-gradient-to-b from-primary to-transparent" />
        </div>
      </motion.div>
    </section>
  );
}
