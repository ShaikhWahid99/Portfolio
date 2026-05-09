"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Briefcase } from "lucide-react";
import { Display, Eyebrow, Lead } from "@/components/ui-fx/text-system";
import { experience } from "@/data/portfolio";

export function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".tl-line",
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%",
            end: "bottom 70%",
            scrub: 0.5,
          },
        },
      );
      gsap.utils.toArray<HTMLElement>(".tl-item").forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 85%", once: true },
          },
        );
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="experience" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-5xl px-6">
        <Eyebrow className="mb-6">Journey</Eyebrow>
        <Display className="max-w-3xl">
          Projects, leadership, and{" "}
          <span className="text-gradient">learning</span>.
        </Display>
        <Lead className="mt-6">
          A timeline of applied backend, AI, cloud, and academic work from my
          resume.
        </Lead>
        <div ref={containerRef} className="relative mt-16 pl-8 sm:pl-16">
          <div className="absolute left-3 top-2 bottom-2 w-px bg-border sm:left-7" />
          <div className="tl-line absolute left-3 top-2 bottom-2 w-px origin-top bg-gradient-to-b from-primary via-accent to-transparent sm:left-7" />
          <div className="space-y-12">
            {experience.map((e) => (
              <div key={e.company + e.period} className="tl-item relative">
                <div className="absolute -left-[26px] top-1.5 grid h-7 w-7 place-items-center rounded-full border border-border bg-card shadow-glow sm:-left-[50px]">
                  <Briefcase className="h-3.5 w-3.5 text-primary" />
                </div>
                <div className="rounded-3xl border border-border bg-card/60 p-6 backdrop-blur-xl">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-lg font-semibold text-foreground">
                      {e.role}{" "}
                      {/* <span className="text-muted-foreground">at</span>{" "}*/}
                      <span className="text-gradient">{e.company}</span>
                    </h3>
                    <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                      {e.period}
                    </span>
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    {e.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
