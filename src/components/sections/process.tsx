"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import SplitText from "@/components/motion/split-text";
import FadeUp from "@/components/motion/fade-up";

const steps = [
  {
    n: "01",
    title: "Listen",
    body: "We start by understanding the people you serve, the work you've already done, and the shape of where you're going. Often we ask questions that surprise.",
    duration: "1 — 2 weeks",
  },
  {
    n: "02",
    title: "Sketch",
    body: "We move fast in low fidelity. Words, sketches, references and short prototypes. We aim to be wrong quickly, then less wrong, then right.",
    duration: "2 — 3 weeks",
  },
  {
    n: "03",
    title: "Craft",
    body: "Visual design, motion, copy and engineering happen on a shared timeline. Each surface is treated like the first thing someone will see.",
    duration: "4 — 8 weeks",
  },
  {
    n: "04",
    title: "Ship",
    body: "We launch carefully and measure honestly. Then we stay close — making small, sharp improvements until the work feels permanent.",
    duration: "ongoing",
  },
];

export default function Process() {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const progress = useTransform(scrollYProgress, [0.1, 0.85], ["0%", "100%"]);

  return (
    <section
      id="process"
      className="relative mx-auto w-full max-w-[1400px] border-t border-white/10 px-5 py-24 md:px-8 md:py-40"
    >
      <div className="mb-16 grid grid-cols-1 gap-10 md:grid-cols-12">
        <div className="md:col-span-7">
          <FadeUp className="text-xs font-mono uppercase tracking-[0.2em] text-[var(--color-mute)] mb-4">
            <span className="inline-flex items-center gap-2">
              <span className="size-1.5 rounded-full bg-[var(--color-accent)]" />
              How we work — 05
            </span>
          </FadeUp>
          <SplitText
            as="h2"
            text="A four-act process. Always built around the people we work with."
            className="font-display text-[clamp(36px,6vw,84px)] leading-[1] tracking-[-0.02em] text-balance"
          />
        </div>
        <FadeUp delay={0.2} className="md:col-span-5 md:pl-10 md:pt-10">
          <p className="text-[var(--color-mute)] leading-relaxed">
            Every engagement is different, but the shape stays the same. We move
            in short, considered passes — each one ending with something you can
            see, test and react to.
          </p>
        </FadeUp>
      </div>

      <div ref={ref} className="relative">
        <div className="absolute left-3 top-0 hidden h-full w-px bg-white/10 md:block">
          <motion.div
            style={{ height: progress }}
            className="absolute left-0 top-0 w-px bg-[var(--color-accent)]"
          />
        </div>

        <div className="space-y-12 md:space-y-20 md:pl-16">
          {steps.map((s, i) => (
            <Step key={s.n} {...s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Step({
  n,
  title,
  body,
  duration,
  index,
}: {
  n: string;
  title: string;
  body: string;
  duration: string;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20% 0px" }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: index * 0.05 }}
      className="relative grid grid-cols-1 items-start gap-6 md:grid-cols-12"
    >
      <span className="absolute -left-[64px] top-3 hidden size-6 -translate-x-1/2 rounded-full border border-white/20 bg-[var(--color-bg)] md:block">
        <span className="absolute inset-1 rounded-full bg-[var(--color-accent)]" />
      </span>
      <div className="md:col-span-2">
        <div className="font-mono text-xs uppercase tracking-widest text-[var(--color-mute)]">
          Step {n}
        </div>
        <div className="mt-1 font-display text-3xl leading-none md:text-4xl">
          {title}
        </div>
      </div>
      <p className="md:col-span-7 text-lg leading-relaxed text-[var(--color-fg)]/85 md:text-xl">
        {body}
      </p>
      <div className="md:col-span-3 md:text-right">
        <div className="font-mono text-xs uppercase tracking-widest text-[var(--color-mute)]">
          Duration
        </div>
        <div className="mt-1 text-sm">{duration}</div>
      </div>
    </motion.div>
  );
}
