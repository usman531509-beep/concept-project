"use client";

import { motion, useInView, useMotionValue, animate } from "motion/react";
import { useEffect, useRef, useState } from "react";

export default function Manifesto() {
  return (
    <section className="relative w-full bg-[var(--color-bg-2)] py-24 md:py-32">
      <div className="mx-auto max-w-[1500px] px-6 md:px-10">
        {/* Top tag row */}
        <div className="mb-12 flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--color-mute)]">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15% 0px" }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2"
          >
            <span className="size-1.5 rounded-full bg-[var(--color-accent)]" />
            Manifesto — 07
          </motion.span>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-15% 0px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="hidden h-px w-40 origin-right bg-[var(--color-line)] md:block"
          />
          <span>Built around the work, not the workload.</span>
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          {/* Left mark */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-15% 0px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-3"
          >
            <div className="relative">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
                className="text-[160px] leading-none md:text-[260px]"
                style={{ color: "rgba(10,10,10,0.08)" }}
              >
                ✱
              </motion.div>
              <div className="mt-6 font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-mute)]">
                Studio principle / 01
              </div>
            </div>
          </motion.div>

          {/* Right text rows */}
          <div className="md:col-span-9 md:pl-8">
            <Row text="We commit to fewer briefs." delay={0} />
            <Row text="Each one keeps our focus." delay={0.1} />

            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-15% 0px" }}
              transition={{
                duration: 1.1,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.2,
              }}
              className="h-px origin-left bg-[var(--color-line)]"
            />

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15% 0px" }}
              transition={{ duration: 0.9, delay: 0.4 }}
              className="mt-10 max-w-2xl text-lg leading-relaxed text-[var(--color-mute)] md:text-xl"
            >
              Fewer projects means more attention. Every brief is a commitment
              to the thinking behind it, not just the outcome. We keep a fixed
              number of partners at a time so the work stays as deep as the
              relationship. Recognition follows work that holds up.
            </motion.p>

            {/* 3-pill principles */}
            <div className="mt-10 flex flex-wrap gap-3">
              {[
                "Honest scope",
                "Honest timeline",
                "Honest invoice",
              ].map((p, i) => (
                <motion.span
                  key={p}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-15% 0px" }}
                  transition={{ duration: 0.7, delay: 0.5 + i * 0.06 }}
                  className="inline-flex items-center gap-2 rounded-full border border-[var(--color-line)] px-4 py-2 text-sm"
                >
                  <span className="size-1.5 rounded-full bg-[var(--color-accent)]" />
                  {p}
                </motion.span>
              ))}
            </div>

            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-15% 0px" }}
              transition={{
                duration: 1.1,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.6,
              }}
              className="mt-16 h-px origin-left bg-[var(--color-line)]"
            />

            {/* Big stat */}
            <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-12 md:items-end">
              <div className="md:col-span-5">
                <BigStat target={45} suffix="+" />
              </div>
              <div className="md:col-span-7 md:pb-4">
                <div className="text-2xl font-semibold md:text-3xl">
                  Brands Partnered
                </div>
                <p className="mt-3 max-w-md text-[var(--color-mute)]">
                  Not every inquiry becomes a project. The ones that do share a
                  belief in design as a long-term investment — not a one-time
                  transaction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Row({ text, delay = 0 }: { text: string; delay?: number }) {
  return (
    <div>
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: "-15% 0px" }}
        transition={{
          duration: 1.1,
          ease: [0.16, 1, 0.3, 1],
          delay,
        }}
        className="h-px origin-left bg-[var(--color-line)]"
      />
      <div className="py-7 overflow-hidden">
        <motion.div
          initial={{ y: "115%" }}
          whileInView={{ y: 0 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{
            duration: 1,
            ease: [0.16, 1, 0.3, 1],
            delay: delay + 0.15,
          }}
          className="text-3xl font-medium tracking-tight md:text-5xl"
        >
          {text}
        </motion.div>
      </div>
    </div>
  );
}

function BigStat({ target, suffix = "" }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-20% 0px" });
  const mv = useMotionValue(0);
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(mv, target, {
      duration: 1.8,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setN(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, mv, target]);

  return (
    <div ref={ref} className="flex items-end gap-4">
      <span className="block h-[1.2em] w-[3px] self-stretch bg-[var(--color-accent)]" />
      <span className="font-display text-[clamp(80px,12vw,180px)] font-semibold leading-[0.9] tracking-[-0.04em]">
        {n}
        <span className="text-[var(--color-mute-2)]">{suffix}</span>
      </span>
    </div>
  );
}
