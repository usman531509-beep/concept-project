"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const awards = [
  {
    name: "D&AD Awards",
    items: [{ tag: "Shortlist — Brand Identity", value: "Halden" }],
  },
  {
    name: "Communication Arts",
    items: [{ tag: "Award of Excellence — Interactive", value: "Aurelis" }],
  },
  {
    name: "AIGA Design Awards",
    items: [{ tag: "Winner — Digital Systems", value: "Lindholm" }],
  },
];

export default function Awards() {
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [0.94, 1.04]);

  return (
    <section
      ref={ref}
      className="relative w-full bg-[var(--color-bg-2)] py-24 md:py-36"
    >
      <div className="mx-auto max-w-[1500px] px-6 md:px-10">
        <div className="mb-16 max-w-5xl">
          <Headline />
        </div>

        <motion.div
          style={{ scale }}
          className="grid grid-cols-1 gap-3 md:grid-cols-2"
        >
          {/* Red feature card */}
          <motion.div
            initial={{ opacity: 0, x: -150 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative overflow-hidden rounded-3xl bg-[var(--color-accent)] p-8 text-white md:p-12"
          >
            <div className="font-display text-4xl font-semibold tracking-tight md:text-5xl">
              The One<span className="align-super text-base">®</span> Award
            </div>
            <div className="mt-4 max-w-sm text-2xl font-medium leading-tight md:text-3xl">
              Best in Brand Identity — 2026
            </div>

            <div className="mt-12 flex items-start gap-4">
              <span className="mt-1 block size-7 rounded bg-[#1a1a1a]" />
              <p className="max-w-xs text-sm leading-relaxed text-white/85">
                One of sixteen studios recognised this year. Selected work,
                never volume submissions.
              </p>
            </div>

            <motion.a
              href="#"
              data-cursor="hover"
              whileHover={{ scale: 1.04 }}
              className="mt-10 inline-flex items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-medium text-[var(--color-fg)]"
            >
              View Project
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path
                  d="M4 12h16m-6-6 6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            </motion.a>

            {/* Lanyard/badge */}
            <motion.div
              initial={{ y: -100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-15% 0px" }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
              className="absolute -right-2 -top-2 flex flex-col items-center md:right-8 md:top-0"
            >
              <span className="h-16 w-px bg-black/30" />
              <span className="size-3 -translate-y-1 rotate-45 bg-black/40" />
              <div className="mt-1 flex h-56 w-36 flex-col justify-between rounded-2xl bg-[#101010] p-4 text-[#f0e7d5]">
                <div className="text-[11px] leading-tight">
                  The One
                  <br />
                  Design
                  <br />
                  Awards
                  <div className="mt-2 text-[var(--color-mute)]">Europe</div>
                </div>
                <div className="grid place-items-center">
                  <span className="text-3xl text-[var(--color-accent)]">✱</span>
                </div>
                <div className="text-[10px] leading-tight">
                  Best in Brand Identity
                  <br />
                  2026
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Awards list card */}
          <motion.div
            initial={{ opacity: 0, x: 150 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 1.2,
              ease: [0.16, 1, 0.3, 1],
              delay: 0.15,
            }}
            className="overflow-hidden rounded-3xl bg-[var(--color-bg-soft)] p-8 md:p-12"
          >
            <div className="space-y-10">
              {awards.map((a, i) => (
                <motion.div
                  key={a.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-15% 0px" }}
                  transition={{ duration: 0.8, delay: 0.2 + i * 0.1 }}
                >
                  <div className="text-xl font-semibold md:text-2xl">
                    {a.name}
                  </div>
                  {a.items.map((it) => (
                    <div
                      key={it.value}
                      className="mt-2 flex items-baseline justify-between text-sm text-[var(--color-mute)]"
                    >
                      <span>{it.tag}</span>
                      <span className="text-[var(--color-fg)]">{it.value}</span>
                    </div>
                  ))}
                  {i < awards.length - 1 ? (
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true, margin: "-15% 0px" }}
                      transition={{ duration: 0.9 }}
                      className="mt-6 h-px origin-left bg-[var(--color-line)]"
                    />
                  ) : null}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function Headline() {
  return (
    <h2 className="font-display font-semibold uppercase leading-[0.95] tracking-[-0.04em] text-[clamp(54px,10vw,180px)] text-[var(--color-fg)]">
      {["The work", "speaks", "before we do."].map((line, li) => (
        <span key={li} className="block">
          {line.split(" ").map((w, i) => (
            <span
              key={i}
              className="inline-block overflow-hidden align-bottom pr-[0.18em]"
            >
              <motion.span
                initial={{ y: "115%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true, margin: "-15% 0px" }}
                transition={{
                  duration: 1.1,
                  ease: [0.16, 1, 0.3, 1],
                  delay: li * 0.18 + i * 0.06,
                }}
                className="inline-block"
              >
                {w}
              </motion.span>
            </span>
          ))}
        </span>
      ))}
    </h2>
  );
}
