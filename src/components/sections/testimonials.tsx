"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import SplitText from "@/components/motion/split-text";
import FadeUp from "@/components/motion/fade-up";

const quotes = [
  {
    quote:
      "Working with the studio changed how our team talks about design. They left us with a brand we can actually keep building.",
    name: "Mira Aoki",
    role: "Founder, Halo Labs",
    accent: "#e1241a",
  },
  {
    quote:
      "Their motion work didn't just decorate the product — it made it more legible. Customers noticed and asked us how we did it.",
    name: "Jonas Pereira",
    role: "Head of Product, Polaris OS",
    accent: "#9a9a9a",
  },
  {
    quote:
      "Few studios can write the brand, the system and the engineering at the same time. They did, and the result feels effortless.",
    name: "Anika Verma",
    role: "Creative Director, Northwind",
    accent: "#e1241a",
  },
];

export default function Testimonials() {
  const [i, setI] = useState(0);
  const item = quotes[i];

  return (
    <section className="relative mx-auto w-full max-w-[1400px] border-t border-white/10 px-5 py-24 md:px-8 md:py-40">
      <FadeUp className="text-xs font-mono uppercase tracking-[0.2em] text-[var(--color-mute)] mb-6">
        <span className="inline-flex items-center gap-2">
          <span className="size-1.5 rounded-full bg-[var(--color-accent)]" />
          What they say — 06
        </span>
      </FadeUp>

      <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-16">
        <div className="md:col-span-9">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-[clamp(28px,4.5vw,60px)] leading-[1.1] tracking-[-0.02em] text-balance"
            >
              <span
                className="text-[var(--color-accent)]"
                style={{ color: item.accent }}
              >
                &ldquo;
              </span>
              {item.quote}
              <span
                className="text-[var(--color-accent)]"
                style={{ color: item.accent }}
              >
                &rdquo;
              </span>
            </motion.blockquote>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.div
              key={`m-${i}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-10 flex items-center gap-4"
            >
              <span
                className="size-12 rounded-full border border-white/10"
                style={{
                  background: `radial-gradient(circle at 30% 30%, ${item.accent}, transparent 70%)`,
                }}
              />
              <div>
                <div className="font-medium">{item.name}</div>
                <div className="text-sm text-[var(--color-mute)]">
                  {item.role}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="md:col-span-3 flex flex-col justify-between gap-8">
          <div className="space-y-3">
            {quotes.map((q, idx) => (
              <button
                key={q.name}
                onClick={() => setI(idx)}
                data-cursor="hover"
                className={`group flex w-full items-center justify-between rounded-2xl border px-4 py-3 text-left text-sm transition ${
                  idx === i
                    ? "border-white/20 bg-white/[0.04]"
                    : "border-white/5 hover:border-white/10"
                }`}
              >
                <span>{q.name}</span>
                <span
                  className={`size-2 rounded-full transition ${idx === i ? "" : "opacity-30"}`}
                  style={{ background: q.accent }}
                />
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setI((p) => (p - 1 + quotes.length) % quotes.length)}
              data-cursor="hover"
              className="grid size-12 place-items-center rounded-full border border-white/10 hover:border-white/30"
              aria-label="Previous"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path
                  d="M15 18 9 12l6-6"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </button>
            <button
              onClick={() => setI((p) => (p + 1) % quotes.length)}
              data-cursor="hover"
              className="grid size-12 place-items-center rounded-full border border-white/10 hover:border-white/30"
              aria-label="Next"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path
                  d="m9 6 6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
