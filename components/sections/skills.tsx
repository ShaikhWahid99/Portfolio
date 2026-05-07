import { Display, Eyebrow, Lead } from "@/components/ui-fx/text-system";
import { BoxyBounce, BoxyShift, BoxyRotate } from "@/components/ui-fx/boxy";
import { skills } from "@/data/portfolio";

export function Skills() {
  return (
    <section id="skills" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <Eyebrow className="mb-6">Toolbox</Eyebrow>
        <Display className="max-w-3xl">
          Tools I reach for, <span className="text-gradient">daily</span>.
        </Display>
        <Lead className="mt-6">
          Languages, frameworks, databases, cloud tools, and security primitives from my resume.
        </Lead>
        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {skills.map((s, i) => {
            const Comp = i % 3 === 0 ? BoxyShift : i % 3 === 1 ? BoxyBounce : BoxyRotate;
            return (
              <Comp key={s.name} className="aspect-square">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-primary text-base font-bold text-primary-foreground shadow-glow">
                  {s.icon}
                </div>
                <div className="mt-3 text-sm font-medium text-foreground">{s.name}</div>
              </Comp>
            );
          })}
        </div>
      </div>
    </section>
  );
}
