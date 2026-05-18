"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const items = [
  "Halo Labs",
  "Field Notes",
  "Polaris OS",
  "Northwind",
  "Atlas & Co",
  "Vector",
  "Mirror Studio",
  "Beacon",
  "Cinder",
  "Resound",
  "Helio",
  "Quill",
];

export default function Marquee() {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const x1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const x2 = useTransform(scrollYProgress, [0, 1], [-200, 0]);

  return (
    <section
      ref={ref}
      className="relative border-y border-white/10 bg-[var(--color-bg)] py-10"
    >
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
      <div className="mb-6 flex items-center justify-between px-5 md:px-8 mx-auto max-w-[1400px]">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[var(--color-mute)]">
          <span className="size-1.5 rounded-full bg-[var(--color-accent)]" />
          Trusted by independent founders & in-house teams
        </div>
        <div className="text-xs font-mono uppercase tracking-widest text-[var(--color-mute)]">
          / 012
        </div>
      </div>

      <motion.div style={{ x: x1 }} className="mask-fade-x overflow-hidden">
        <div className="flex w-max items-center gap-12 animate-marquee whitespace-nowrap py-2">
          {[...items, ...items].map((name, i) => (
            <div
              key={`a-${i}`}
              className="flex items-center gap-12 text-3xl md:text-5xl font-display tracking-tight text-[var(--color-fg)]/70 hover:text-[var(--color-fg)] transition"
            >
              <span>{name}</span>
              <span className="inline-block size-2 rounded-full bg-[var(--color-accent)]" />
            </div>
          ))}
        </div>
      </motion.div>
      <motion.div
        style={{ x: x2 }}
        className="mask-fade-x mt-4 overflow-hidden"
      >
        <div className="flex w-max items-center gap-12 animate-marquee-rev whitespace-nowrap py-2">
          {[...items, ...items].reverse().map((name, i) => (
            <div
              key={`b-${i}`}
              className="flex items-center gap-12 text-2xl md:text-3xl font-mono uppercase tracking-tight text-[var(--color-mute)]"
            >
              <span>{name}</span>
              <span>—</span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
