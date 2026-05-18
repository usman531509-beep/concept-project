"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";

export default function Expertise() {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, amount: 0.05 });

  return (
    <section
      id="expertise"
      ref={ref}
      className="relative w-full bg-[var(--color-bg)] py-24 md:py-36"
    >
      <div className="mx-auto max-w-[1500px] px-6 md:px-10">
        {/* Tag row */}
        <div className="grid grid-cols-2 items-start gap-6 md:grid-cols-12">
          <div className="col-span-1 md:col-span-6 flex items-center gap-3">
            <span className="text-[var(--color-accent)] text-xl">✱</span>
            <div>
              <div className="text-[15px] font-medium">Expertise</div>
              <motion.div
                initial={{ scaleX: 0 }}
                animate={inView ? { scaleX: 1 } : undefined}
                transition={{ duration: 0.9 }}
                className="mt-2 h-px w-16 origin-left bg-[var(--color-fg)]"
              />
            </div>
          </div>
          <div className="col-span-1 md:col-span-6 md:text-right">
            <div className="flex items-center justify-start gap-3 md:justify-end">
              <span className="kanji text-xs text-[var(--color-mute)]">
                意図あるデザイン
              </span>
              <span className="inline-flex items-center">
                <span className="size-2 rounded-full bg-[var(--color-fg)]" />
                <span className="size-2 -ml-0.5 rounded-full bg-[var(--color-accent)]" />
              </span>
            </div>
            <div className="mt-1 text-[15px] font-medium">
              Design with intent.
            </div>
          </div>
        </div>

        <div className="mt-14 md:mt-20">
          <Stacked
            words={["EVERY", "BRIEF"]}
            tone="grey"
            indent={0}
            inView={inView}
            stagger={0}
          />
          <Rule inView={inView} delay={0.3} />
          <Stacked
            words={["EARNS"]}
            tone="grey"
            indent={1}
            inView={inView}
            stagger={0.35}
          />
          <Rule inView={inView} delay={0.6} />
          <Stacked
            words={["THOUGHT,", "CARE"]}
            tone="black"
            indent={2}
            inView={inView}
            stagger={0.65}
          />
          <Rule inView={inView} delay={1.0} />
          <Stacked
            words={["AND", "TIME."]}
            tone="black"
            indent={2}
            inView={inView}
            stagger={1.05}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.9, delay: 1.6 }}
          className="mx-auto mt-16 max-w-md text-center text-lg leading-relaxed text-[var(--color-fg)] md:text-xl"
        >
          <div>The studio is built around the work, not the workload.</div>
          <div className="mt-2">
            Every brief gets the same standard — no exceptions.
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Rule({ inView, delay = 0 }: { inView: boolean; delay?: number }) {
  return (
    <motion.div
      initial={{ scaleX: 0 }}
      animate={inView ? { scaleX: 1 } : undefined}
      transition={{
        duration: 1.1,
        ease: [0.16, 1, 0.3, 1],
        delay,
      }}
      className="h-px origin-left bg-[var(--color-line)]"
    />
  );
}

function Stacked({
  words,
  tone,
  indent = 0,
  inView,
  stagger = 0,
}: {
  words: string[];
  tone: "grey" | "black";
  indent?: number;
  inView: boolean;
  stagger?: number;
}) {
  const color = tone === "grey" ? "text-[#8a8a8a]" : "text-[var(--color-fg)]";
  return (
    <div
      className={`font-display font-semibold uppercase leading-[0.95] tracking-[-0.04em] text-[clamp(48px,10vw,200px)] ${color} py-3`}
      style={{ paddingLeft: `${indent * 5}vw` }}
    >
      {words.map((w, i) => (
        <span
          key={`${w}-${i}`}
          className="inline-block overflow-hidden align-bottom pr-[0.18em]"
        >
          <motion.span
            initial={{ y: "115%", opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : undefined}
            transition={{
              duration: 1.1,
              ease: [0.16, 1, 0.3, 1],
              delay: stagger + i * 0.08,
            }}
            className="inline-block"
          >
            {w}
          </motion.span>
        </span>
      ))}
    </div>
  );
}
