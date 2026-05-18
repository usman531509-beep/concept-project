"use client";

import {
  animate,
  motion,
  useInView,
  useMotionValue,
} from "motion/react";
import { useEffect, useRef, useState } from "react";

const rows = [
  {
    value: 94,
    suffix: "%",
    title: "Retention Rate",
    body: "Most clients return — not because we ask, but because the work earns it. Repeat collaboration is the clearest signal that the process worked.",
  },
  {
    value: 24,
    suffix: "",
    title: "Sectors Served",
    body: "The thinking transfers across industries. What changes is the context. What stays is the standard we hold the work to.",
  },
  {
    value: 78,
    suffix: "%",
    title: "Long-term collaborations",
    body: "Most partnerships extend beyond the first project. Clients return when the foundation is right.",
  },
];

export default function Stats() {
  return (
    <section className="relative w-full bg-[var(--color-bg-2)] pb-24 pt-4 md:pb-36">
      <div className="mx-auto max-w-[1500px] px-6 md:px-10">
        {/* Section header */}
        <div className="mb-12 flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--color-mute)]">
          <span className="inline-flex items-center gap-2">
            <span className="size-1.5 rounded-full bg-[var(--color-accent)]" />
            By the numbers — 08
          </span>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-15% 0px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="hidden h-px w-40 origin-right bg-[var(--color-line)] md:block"
          />
          <span>Numbers we&apos;d quote, not promise.</span>
        </div>

        <div className="space-y-0">
          {rows.map((r, i) => (
            <StatRow key={r.title} {...r} index={i} />
          ))}
          {/* Bottom rule */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-15% 0px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="h-px origin-left bg-[var(--color-line)]"
          />
        </div>
      </div>
    </section>
  );
}

function StatRow({
  value,
  suffix,
  title,
  body,
  index,
}: {
  value: number;
  suffix: string;
  title: string;
  body: string;
  index: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-20% 0px" });
  const mv = useMotionValue(0);
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const c = animate(mv, value, {
      duration: 1.6,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setN(Math.round(v)),
    });
    return () => c.stop();
  }, [inView, mv, value]);

  return (
    <div>
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: "-15% 0px" }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="h-px origin-left bg-[var(--color-line)]"
      />
      <div
        ref={ref}
        className="grid grid-cols-1 items-center gap-8 py-10 md:grid-cols-12 md:py-16"
      >
        <div className="md:col-span-2 font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-mute)]">
          0{index + 1}
          <div className="mt-1 h-px w-10 bg-[var(--color-fg)]/30" />
        </div>
        <div className="md:col-span-5">
          <div className="flex items-stretch gap-4">
            <span className="block w-[3px] bg-[var(--color-accent)]" />
            <span className="font-display text-[clamp(70px,11vw,170px)] font-semibold leading-[0.9] tracking-[-0.04em]">
              {n}
              <span className="text-[var(--color-mute-2)]">{suffix}</span>
            </span>
          </div>
        </div>
        <div className="md:col-span-5">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15% 0px" }}
            transition={{
              duration: 0.9,
              delay: 0.15 + index * 0.05,
            }}
          >
            <h3 className="text-2xl font-semibold md:text-3xl">{title}</h3>
            <p className="mt-3 max-w-xl text-[var(--color-mute)] md:text-lg">
              {body}
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
