"use client";
import { motion } from "framer-motion";
import { Display, Eyebrow, Lead } from "@/components/ui-fx/text-system";
import { BasicCard } from "@/components/ui-fx/basic-card";
import { profile } from "@/data/portfolio";

const stats = [
  { v: "7.94", l: "Current CGPI" },
  { v: "5+", l: "Major projects" },
  { v: "2", l: "Cloud tracks" },
  { v: "AWS", l: "Certified" },
];

export function About() {
  return (
    <section id="about" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <Eyebrow className="mb-6">About</Eyebrow>
        <Display className="max-w-3xl">
          Backend systems with <span className="text-gradient">real product impact</span>.
        </Display>
        <Lead className="mt-6">{profile.bio}</Lead>
        <div className="mt-14 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <BasicCard className="overflow-hidden p-0">
            <div className="relative aspect-[4/5]">
              <motion.img
                src={profile.portrait}
                alt={profile.name}
                width={768}
                height={896}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
                initial={{ scale: 1.1 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <div className="text-sm text-muted-foreground">{profile.role}</div>
                <div className="text-2xl font-semibold text-foreground">{profile.name}</div>
              </div>
            </div>
          </BasicCard>
          <BasicCard delay={0.1} className="flex flex-col justify-between gap-8">
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I focus on the backend spine of full-stack products: clean REST APIs,
                authentication, data modeling, retrieval pipelines, and deployment paths that hold
                up outside a demo.
              </p>
              <p>
                My recent work sits at the intersection of MERN systems and AI applications,
                including adaptive learning, multimodal RAG, WebRTC collaboration, and secure
                cloud-ready services.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {stats.map((s, i) => (
                <motion.div
                  key={s.l}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 + i * 0.08 }}
                  className="rounded-2xl border border-border bg-secondary/40 p-4"
                >
                  <div className="text-2xl font-semibold text-gradient">{s.v}</div>
                  <div className="mt-1 text-xs text-muted-foreground">{s.l}</div>
                </motion.div>
              ))}
            </div>
          </BasicCard>
        </div>
      </div>
    </section>
  );
}
