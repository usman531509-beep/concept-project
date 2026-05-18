"use client";

import {
  motion,
  useInView,
  useScroll,
  useTransform,
  type MotionValue,
} from "motion/react";
import { useRef } from "react";

export default function ServicesIntro() {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, amount: 0.05 });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Each line gets a different horizontal drift on scroll
  const drift1 = useTransform(scrollYProgress, [0, 1], ["0%", "-6%"]);
  const drift2 = useTransform(scrollYProgress, [0, 1], ["0%", "4%"]);
  const drift3 = useTransform(scrollYProgress, [0, 1], ["0%", "-3%"]);
  const drift4 = useTransform(scrollYProgress, [0, 1], ["0%", "5%"]);

  // Spinning mark
  const markRotate = useTransform(scrollYProgress, [0, 1], [0, 180]);

  return (
    <section
      id="services"
      ref={ref}
      className="relative w-full overflow-hidden bg-[var(--color-bg)] py-24 md:py-40"
    >
      <div className="mx-auto max-w-[1500px] px-6 md:px-10">
        {/* Top centered eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.9 }}
          className="mx-auto max-w-md text-center font-mono text-[12px] uppercase leading-relaxed tracking-[0.18em] text-[var(--color-mute)]"
        >
          <div>From fintech to fashion.</div>
          <div>Eight sectors, one standard.</div>
        </motion.div>

        {/* Tag row */}
        <div className="mt-24 grid grid-cols-2 items-start gap-6 md:mt-32 md:grid-cols-12">
          <div className="col-span-1 md:col-span-6 flex items-center gap-3">
            <motion.span
              style={{ rotate: markRotate }}
              className="text-[var(--color-accent)] text-xl"
            >
              ✱
            </motion.span>
            <div>
              <div className="text-[15px] font-medium">Services</div>
              <motion.div
                initial={{ scaleX: 0 }}
                animate={inView ? { scaleX: 1 } : undefined}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className="mt-2 h-px w-16 origin-left bg-[var(--color-fg)]"
              />
            </div>
          </div>
          <div className="col-span-1 md:col-span-6 md:text-right">
            <div className="flex items-center justify-start gap-3 md:justify-end">
              <span className="kanji text-xs text-[var(--color-mute)]">
                Shaping ideas
              </span>
              <span className="inline-flex items-center">
                <span className="size-2 rounded-full bg-[var(--color-fg)]" />
                <span className="size-2 -ml-0.5 rounded-full bg-[var(--color-accent)]" />
              </span>
            </div>
            <div className="mt-1 text-[15px] font-medium">
              Turning ideas into form.
            </div>
          </div>
        </div>

        {/* Stacked headline */}
        <div className="mt-16 md:mt-24">
          <Line
            words={["WE"]}
            tone="grey"
            indent={0}
            inView={inView}
            stagger={0}
            drift={drift1}
          />
          <Rule inView={inView} delay={0.35} />
          <Line
            words={["SHAPE", "BRANDS."]}
            tone="grey"
            indent={1}
            inView={inView}
            stagger={0.4}
            drift={drift2}
          />
          <Rule inView={inView} delay={0.85} />
          <Line
            words={["THEN", "WE", "GIVE", "THEM"]}
            tone="black"
            indent={2}
            inView={inView}
            stagger={0.9}
            drift={drift3}
          />
          <Rule inView={inView} delay={1.5} />
          <Line
            words={["A", "PLACE", "TO", "LIVE."]}
            tone="black"
            indent={2}
            inView={inView}
            stagger={1.55}
            drift={drift4}
          />
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

function Line({
  words,
  tone,
  indent = 0,
  inView,
  stagger = 0,
  drift,
}: {
  words: string[];
  tone: "grey" | "black";
  indent?: number;
  inView: boolean;
  stagger?: number;
  drift?: MotionValue<string>;
}) {
  const color = tone === "grey" ? "text-[#8a8a8a]" : "text-[var(--color-fg)]";

  // Flatten into letters with stable indices for staggering
  let charIndex = 0;

  return (
    <motion.div
      style={drift ? { x: drift } : undefined}
      className={`font-display font-semibold uppercase leading-[0.95] tracking-[-0.04em] text-[clamp(48px,10.5vw,200px)] ${color} py-3`}
    >
      <div style={{ paddingLeft: `${indent * 6}vw` }}>
        {words.map((w, wi) => {
          const letters = Array.from(w);
          return (
            <span
              key={`${w}-${wi}`}
              className="inline-block overflow-hidden align-bottom pr-[0.18em]"
            >
              {letters.map((ch, li) => {
                const myIndex = charIndex++;
                return (
                  <span
                    key={`${ch}-${li}`}
                    className="inline-block overflow-hidden align-bottom"
                  >
                    <motion.span
                      initial={{
                        y: "115%",
                        opacity: 0,
                        filter: "blur(10px)",
                      }}
                      animate={
                        inView
                          ? {
                              y: 0,
                              opacity: 1,
                              filter: "blur(0px)",
                            }
                          : undefined
                      }
                      transition={{
                        duration: 0.95,
                        ease: [0.16, 1, 0.3, 1],
                        delay: stagger + myIndex * 0.025,
                      }}
                      className="inline-block"
                    >
                      {ch}
                    </motion.span>
                  </span>
                );
              })}
            </span>
          );
        })}
      </div>
    </motion.div>
  );
}
