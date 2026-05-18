"use client";

import { motion, useInView, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export default function ShowreelProcess() {
  const ref = useRef<HTMLDivElement | null>(null);
  const headlineRef = useRef<HTMLDivElement | null>(null);
  const inView = useInView(headlineRef, { once: true, amount: 0.05 });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const imgY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const playScale = useTransform(scrollYProgress, [0, 0.5], [0.95, 1.1]);

  return (
    <section id="process" ref={ref} className="relative w-full">
      {/* Showreel banner */}
      <div className="relative h-[60vh] w-full overflow-hidden bg-[var(--color-bg-dark)] md:h-[80vh]">
        <motion.div
          style={{ scale: imgScale, y: imgY }}
          className="absolute inset-0"
        >
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(50% 60% at 50% 40%, rgba(180,210,230,0.45), transparent 70%), linear-gradient(180deg, #1c2a36 0%, #0d1820 40%, #0a0a0a 100%)",
            }}
          />
          <div
            className="absolute inset-0 opacity-70 mix-blend-screen"
            style={{
              backgroundImage:
                "radial-gradient(circle at 30% 50%, rgba(255,255,255,0.7) 1px, transparent 1.5px), radial-gradient(circle at 60% 70%, rgba(255,255,255,0.5) 1px, transparent 1.5px), radial-gradient(circle at 80% 30%, rgba(255,255,255,0.4) 1px, transparent 1.5px)",
              backgroundSize: "40px 40px, 70px 70px, 90px 90px",
            }}
          />
          <div
            className="absolute inset-x-0 bottom-0 top-1/4 mx-auto max-w-3xl opacity-90"
            style={{
              background:
                "radial-gradient(45% 70% at 50% 80%, rgba(40,55,70,0.95), transparent 65%)",
            }}
          />
        </motion.div>

        <div className="absolute left-6 top-8 z-10 text-white md:left-10 md:top-10">
          <div className="flex items-baseline gap-1 font-display text-xl font-semibold tracking-[-0.04em]">
            <span>NOCTURNE</span>
            <span className="text-[var(--color-accent)] -translate-y-1 text-base">
              ✱
            </span>
          </div>
          <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-white/70">
            / Showreel
          </div>
        </div>

        <motion.button
          aria-label="Play reel"
          data-cursor="hover"
          data-cursor-label="Play"
          style={{ scale: playScale }}
          whileHover={{ scale: 1.18 }}
          className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2"
        >
          <svg
            width="120"
            height="120"
            viewBox="0 0 120 120"
            fill="none"
            className="md:h-40 md:w-40"
          >
            <path
              d="M30 18 L102 60 L30 102 Z"
              stroke="white"
              strokeWidth="1.2"
              fill="none"
            />
          </svg>
        </motion.button>
      </div>

      {/* Process headline below */}
      <div
        ref={headlineRef}
        className="bg-[var(--color-bg-2)] py-24 md:py-36"
      >
        <div className="mx-auto max-w-[1500px] px-6 md:px-10">
          {/* Tag row */}
          <div className="grid grid-cols-2 items-start gap-6 md:grid-cols-12">
            <div className="col-span-1 md:col-span-6 flex items-center gap-3">
              <span className="text-[var(--color-accent)] text-xl">✱</span>
              <div>
                <div className="text-[15px] font-medium">Process</div>
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
                  Trust endures
                </span>
                <span className="inline-flex items-center">
                  <span className="size-2 rounded-full bg-[var(--color-fg)]" />
                  <span className="size-2 -ml-0.5 rounded-full bg-[var(--color-accent)]" />
                </span>
              </div>
              <div className="mt-1 text-[15px] font-medium">
                From thinking to form.
              </div>
            </div>
          </div>

          <div className="mt-14 md:mt-20">
            <Stacked
              words={["WE"]}
              tone="grey"
              indent={1}
              inView={inView}
              stagger={0}
            />
            <Rule inView={inView} delay={0.3} />
            <Stacked
              words={["DON'T", "BEGIN"]}
              tone="grey"
              indent={2}
              inView={inView}
              stagger={0.35}
            />
            <Rule inView={inView} delay={0.7} />
            <Stacked
              words={["WITH", "ANSWERS."]}
              tone="grey"
              indent={2}
              inView={inView}
              stagger={0.75}
            />
            <Rule inView={inView} delay={1.1} />
            <Stacked
              words={["WE", "BEGIN", "WITH"]}
              tone="black"
              indent={1}
              inView={inView}
              stagger={1.15}
            />
            <Rule inView={inView} delay={1.6} />
            <Stacked
              words={["THE", "QUESTIONS."]}
              tone="black"
              indent={2}
              inView={inView}
              stagger={1.65}
            />
          </div>
        </div>
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
      className={`font-display font-semibold uppercase leading-[0.95] tracking-[-0.04em] text-[clamp(44px,9vw,180px)] ${color} py-3`}
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
