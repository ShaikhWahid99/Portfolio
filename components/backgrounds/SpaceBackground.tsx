"use client";

import { useMemo } from "react";
import { motion, useReducedMotion } from "framer-motion";

type Star = {
  id: number;
  x: string;
  y: string;
  size: string;
  opacity: number;
  delay: string;
  duration: string;
};

const seededRandom = (seed: number) => {
  const value = Math.sin(seed) * 10000;
  return value - Math.floor(value);
};

const fixed = (value: number, digits = 4) => value.toFixed(digits);

export function SpaceBackground({ starCount = 56 }: { starCount?: number }) {
  const reduceMotion = useReducedMotion();

  const stars = useMemo<Star[]>(
    () =>
      Array.from({ length: starCount }).map((_, i) => ({
        id: i,
        x: `${fixed(seededRandom(i + 11) * 100)}%`,
        y: `${fixed(seededRandom(i + 97) * 100)}%`,
        size: `${fixed(seededRandom(i + 211) * 1.4 + 0.5)}px`,
        opacity: seededRandom(i + 401) * 0.65 + 0.15,
        delay: `${fixed(seededRandom(i + 503) * 5)}s`,
        duration: `${fixed(3 + seededRandom(i + 701) * 4)}s`,
      })),
    [starCount],
  );

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-background" />

      <motion.div
        className="absolute inset-0 opacity-35"
        style={{
          backgroundImage:
            "linear-gradient(to right, oklch(0.97 0.005 250 / 0.06) 1px, transparent 1px), linear-gradient(to bottom, oklch(0.97 0.005 250 / 0.06) 1px, transparent 1px)",
          backgroundSize: "62px 62px",
          maskImage: "radial-gradient(ellipse at 50% 35%, black 32%, transparent 85%)",
          willChange: "background-position",
          transform: "translateZ(0)",
        }}
        animate={
          reduceMotion
            ? undefined
            : {
                backgroundPositionX: ["0px", "62px"],
                backgroundPositionY: ["0px", "62px"],
              }
        }
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />

      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, oklch(0.78 0.16 220 / 0.2), transparent 45%), radial-gradient(circle at 80% 70%, oklch(0.7 0.2 310 / 0.18), transparent 46%), radial-gradient(circle at 50% 85%, oklch(0.82 0.08 255 / 0.12), transparent 40%)",
          filter: "blur(4px)",
        }}
      />

      {stars.map((star) => (
        <span
          key={star.id}
          className="absolute rounded-full bg-white"
          style={{
            left: star.x,
            top: star.y,
            width: star.size,
            height: star.size,
            opacity: star.opacity,
            animationName: reduceMotion ? undefined : "twinkle",
            animationDuration: star.duration,
            animationTimingFunction: "ease-in-out",
            animationDelay: star.delay,
            animationIterationCount: "infinite",
            transform: "translateZ(0)",
            willChange: "opacity",
          }}
        />
      ))}

      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "repeating-radial-gradient(circle at 0 0, rgba(255,255,255,0.3) 0px, rgba(255,255,255,0.3) 1px, transparent 1px, transparent 3px)",
          backgroundSize: "4px 4px",
          mixBlendMode: "soft-light",
        }}
      />
    </div>
  );
}
