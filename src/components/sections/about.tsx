"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import SplitText from "@/components/motion/split-text";
import FadeUp from "@/components/motion/fade-up";

export default function About() {
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], [-60, 60]);
  const rot = useTransform(scrollYProgress, [0, 1], [-6, 6]);

  return (
    <section
      id="about"
      ref={ref}
      className="relative mx-auto w-full max-w-[1400px] px-5 py-24 md:px-8 md:py-40"
    >
      <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
        <div className="md:col-span-5">
          <FadeUp className="text-xs font-mono uppercase tracking-[0.2em] text-[var(--color-mute)] mb-6">
            <span className="inline-flex items-center gap-2">
              <span className="size-1.5 rounded-full bg-[var(--color-accent)]" />
              About — 02
            </span>
          </FadeUp>

          <motion.div
            style={{ y: imgY, rotate: rot }}
            className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl bg-gradient-to-br from-[#181818] to-[#0a0a0a] border border-white/5"
          >
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(120% 90% at 30% 0%, rgba(225,36,26,0.45), transparent 60%), radial-gradient(80% 60% at 80% 100%, rgba(60,60,60,0.5), transparent 60%)",
              }}
            />
            <div className="absolute inset-0 mix-blend-overlay opacity-40">
              <div
                className="size-full"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
                  backgroundSize: "32px 32px",
                }}
              />
            </div>

            <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-8">
              <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-widest text-white/70">
                <span>○ studio</span>
                <span>32.0851° N</span>
              </div>
              <div>
                <div className="font-display text-5xl leading-none md:text-7xl">
                  N°<span className="italic">/07</span>
                </div>
                <div className="mt-2 text-xs font-mono uppercase tracking-widest text-white/60">
                  A practice, not a factory.
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="md:col-span-7 md:pl-10">
          <SplitText
            as="h2"
            text="A small team of designers, engineers and motion crafters — collaborating with founders who care about how things feel."
            className="font-display text-[clamp(34px,5vw,68px)] leading-[1.02] tracking-[-0.02em] text-balance"
          />

          <FadeUp delay={0.2} className="mt-10 grid gap-8 md:grid-cols-2">
            <p className="text-[var(--color-mute)] leading-relaxed">
              We treat every project as a long, deliberate conversation. We ask
              uncomfortable questions, we sketch before we commit, and we ship
              work that feels considered from the first pixel to the last
              line of code.
            </p>
            <p className="text-[var(--color-mute)] leading-relaxed">
              Working across product, brand and motion lets us write the
              system end to end — so the way it moves matches the way it
              looks, sounds and is built.
            </p>
          </FadeUp>

          <FadeUp delay={0.3} className="mt-12 grid grid-cols-3 gap-6">
            <Stat n="98%" label="Client retention" />
            <Stat n="07" label="People in the studio" />
            <Stat n="42" label="Live products in the wild" />
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

function Stat({ n, label }: { n: string; label: string }) {
  return (
    <div className="border-t border-white/10 pt-4">
      <div className="font-display text-4xl md:text-5xl leading-none tracking-tight">
        {n}
      </div>
      <div className="mt-2 text-xs font-mono uppercase tracking-widest text-[var(--color-mute)]">
        {label}
      </div>
    </div>
  );
}
