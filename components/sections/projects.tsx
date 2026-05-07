import { Display, Eyebrow, Lead } from "@/components/ui-fx/text-system";
import { ExpandingCard } from "@/components/ui-fx/expanding-card";
import { projects } from "@/data/portfolio";

export function Projects() {
  return (
    <section id="projects" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <Eyebrow className="mb-6">Selected Work</Eyebrow>
        <Display className="max-w-3xl">
          Projects I&apos;m <span className="text-gradient">proud of</span>.
        </Display>
        <Lead className="mt-6">
          AI, backend, MERN, and real-time collaboration work pulled from my resume.
        </Lead>
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {projects.map((p) => (
            <ExpandingCard key={p.title} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}
