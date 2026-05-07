import { useMemo } from "react";

const seededRandom = (seed: number) => {
  const value = Math.sin(seed) * 10000;
  return value - Math.floor(value);
};

const fixed = (value: number) => value.toFixed(4);

export function Starfield({ count = 60 }: { count?: number }) {
  const stars = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        x: `${fixed(seededRandom(i + 1) * 100)}%`,
        y: `${fixed(seededRandom(i + 101) * 100)}%`,
        size: `${fixed(seededRandom(i + 201) * 1.6 + 0.4)}px`,
        delay: `${fixed(seededRandom(i + 301) * 4)}s`,
        dur: `${fixed(2 + seededRandom(i + 401) * 3)}s`,
      })),
    [count],
  );

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 grid-bg" />
      <div className="absolute inset-0" style={{ background: "var(--gradient-radial)" }} />
      {stars.map((s) => (
        <span
          key={s.id}
          className="absolute rounded-full bg-foreground"
          style={{
            left: s.x,
            top: s.y,
            width: s.size,
            height: s.size,
            animationName: "twinkle",
            animationDuration: s.dur,
            animationTimingFunction: "ease-in-out",
            animationDelay: s.delay,
            animationIterationCount: "infinite",
          }}
        />
      ))}
      <div className="absolute -left-32 top-1/4 h-72 w-72 rounded-full bg-primary/20 blur-[120px]" />
      <div className="absolute -right-32 top-2/3 h-72 w-72 rounded-full bg-accent/20 blur-[120px]" />
    </div>
  );
}
