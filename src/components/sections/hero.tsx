"use client";

import ScrollExpandMedia from "@/components/ui/scroll-expansion-hero";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export default function Hero() {
  return (
    <ScrollExpandMedia
      mediaType="image"
      mediaSrc="https://images.unsplash.com/photo-1604881991720-f91add269bed?w=1600&q=85&auto=format&fit=crop"
      bgImageSrc="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1920&q=85&auto=format&fit=crop"
      title="Design Agency"
      date="Nocturne ✱ · Studio / 26"
      scrollToExpand="Scroll to expand"
      textBlend
      leftText={<HeroLeftRail />}
      rightText={<HeroRightRail />}
    >
      <HeroContent />
    </ScrollExpandMedia>
  );
}

function HeroLeftRail() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
      className="flex flex-col items-start gap-8 pt-32 text-blue-200"
    >
      <div className="flex items-baseline gap-2 font-display text-2xl font-semibold tracking-[-0.04em]">
        Nocturne<span className="text-[var(--color-accent)] text-base">✱</span>
      </div>
      <div className="kanji font-mono text-[11px] uppercase tracking-[0.22em] opacity-80">
        Design Studio
      </div>
      <span className="block h-px w-10 bg-current opacity-50" />

      <div className="space-y-1 font-mono text-[10px] uppercase tracking-[0.22em]">
        <div>12 Old Street</div>
        <div>London EC1V 9HU</div>
        <div>United Kingdom</div>
      </div>

      <span className="block h-px w-10 bg-current opacity-50" />

      <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.22em]">
        <span className="relative flex size-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-accent)] opacity-75" />
          <span className="relative inline-flex size-2 rounded-full bg-[var(--color-accent)]" />
        </span>
        Open for new work
      </div>
      <div className="font-mono text-[10px] uppercase tracking-[0.22em] opacity-70">
        Q3 — Q4 / 2026
      </div>
    </motion.div>
  );
}

function HeroRightRail() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
      className="flex flex-col items-end gap-8 pt-32 text-blue-200"
    >
      <div className="text-right">
        <div className="font-mono text-[10px] uppercase tracking-[0.22em] opacity-70">
          Vol.
        </div>
        <div className="font-display text-3xl font-semibold leading-none tracking-[-0.04em]">
          26 / 26
        </div>
      </div>

      <span className="block h-px w-10 bg-current opacity-50" />

      <ul className="space-y-1.5 text-right font-display text-lg font-medium tracking-[-0.02em]">
        <li>Brand</li>
        <li>Product</li>
        <li>Web</li>
        <li>Motion</li>
      </ul>

      <span className="block h-px w-10 bg-current opacity-50" />

      <div className="text-right font-mono text-[10px] uppercase tracking-[0.22em] opacity-80">
        <div>Est. MMXVIII</div>
        <div>Independent · Self-funded</div>
      </div>

      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
        className="text-2xl text-[var(--color-accent)]"
      >
        ✱
      </motion.div>
    </motion.div>
  );
}

function HeroContent() {
  const ref = useRef<HTMLDivElement | null>(null);

  // Scroll progress through the hero's children block
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Drift transforms — different directions/magnitudes per element
  const marqueeX = useTransform(scrollYProgress, [0, 1], ["20%", "-40%"]);
  const railY = useTransform(scrollYProgress, [0, 1], ["10%", "-30%"]);
  const taglineX = useTransform(scrollYProgress, [0, 1], ["-2%", "4%"]);
  const manifestoY = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const manifestoScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.96, 1, 1.02]);
  const opacityIn = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0.4, 1, 1, 0.5]);

  return (
    <div ref={ref} className="relative mx-auto w-full max-w-7xl">
      {/* Vertical rotated side rail */}
      <motion.div
        style={{ y: railY, opacity: opacityIn }}
        className="pointer-events-none absolute left-2 top-0 hidden h-full md:block"
      >
        <span className="origin-top-left -rotate-90 whitespace-nowrap font-mono text-[10px] uppercase tracking-[0.32em] text-[var(--color-mute)]">
          ✱ Nocturne Studio · MMXXVI · Brand · Product · Web · Motion · MMXXVI · ✱
        </span>
      </motion.div>

      {/* Eyebrow row */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="mb-10 flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--color-mute)]"
      >
        <span className="inline-flex items-center gap-2">
          <span className="size-1.5 rounded-full bg-[var(--color-accent)]" />
          <span className="kanji">Design Studio</span>
        </span>
        <span className="hidden md:inline">
          12 Old Street · London EC1V 9HU
        </span>
        <span>Index / 001</span>
      </motion.div>

      {/* Big serif tagline — gently drifts with scroll */}
      <motion.h1
        style={{ x: taglineX }}
        className="font-serif italic text-[clamp(40px,8vw,120px)] leading-[0.95] tracking-[-0.025em] text-[var(--color-fg)]"
      >
        <span className="block overflow-hidden">
          <motion.span
            initial={{ y: "110%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 1.1,
              ease: [0.16, 1, 0.3, 1],
              delay: 0.1,
            }}
            className="inline-block"
          >
            An independent practice
          </motion.span>
        </span>
        <span className="block overflow-hidden">
          <motion.span
            initial={{ y: "110%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 1.1,
              ease: [0.16, 1, 0.3, 1],
              delay: 0.25,
            }}
            className="inline-block"
          >
            for ambitious brands.
          </motion.span>
        </span>
      </motion.h1>

      {/* Scroll-tied marquee strip */}
      <motion.div
        style={{ x: marqueeX }}
        className="mt-14 flex w-max items-center gap-8 whitespace-nowrap font-display text-[clamp(36px,7vw,110px)] font-semibold uppercase tracking-[-0.02em] text-[var(--color-fg)]/15"
      >
        <span>Brand</span>
        <span className="text-[var(--color-accent)]">✱</span>
        <span>Product</span>
        <span className="text-[var(--color-accent)]">✱</span>
        <span>Web</span>
        <span className="text-[var(--color-accent)]">✱</span>
        <span>Motion</span>
        <span className="text-[var(--color-accent)]">✱</span>
        <span>Engineering</span>
        <span className="text-[var(--color-accent)]">✱</span>
        <span>Editorial</span>
        <span className="text-[var(--color-accent)]">✱</span>
        <span>Identity</span>
      </motion.div>

      {/* Two-column meta */}
      <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-12">
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="md:col-span-7 text-lg leading-relaxed text-[var(--color-mute)] md:text-xl"
        >
          Nocturne is a small studio working at the seam of brand, product, and
          motion. We take on fewer projects so the work earns the same standard,
          every time — from the first sketch to the line of code that ships it.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1, delay: 0.55 }}
          className="md:col-span-5 md:pl-8"
        >
          <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-mute)]">
            What we do
          </div>
          <ul className="mt-3 space-y-1.5">
            {["Brand", "Product", "Web", "Motion"].map((s, i) => (
              <li key={s} className="overflow-hidden">
                <motion.span
                  initial={{ y: "110%" }}
                  whileInView={{ y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.9,
                    ease: [0.16, 1, 0.3, 1],
                    delay: 0.7 + i * 0.06,
                  }}
                  className="block font-display text-2xl font-semibold tracking-tight md:text-3xl"
                >
                  {s}
                </motion.span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* Parallaxing manifesto block */}
      <motion.blockquote
        style={{ y: manifestoY, scale: manifestoScale }}
        className="mx-auto mt-24 max-w-3xl text-center font-display text-[clamp(22px,3vw,42px)] font-medium leading-[1.15] tracking-[-0.02em] text-balance text-[var(--color-fg)]"
      >
        <span className="text-[var(--color-accent)]">&ldquo;</span>
        Make work that <span className="italic font-normal font-serif">earns</span> a
        second look — and a third, and a fourth — long after the launch post is
        archived.
        <span className="text-[var(--color-accent)]">&rdquo;</span>
        <div className="mt-6 font-mono text-[11px] font-normal uppercase tracking-[0.22em] text-[var(--color-mute)]">
          — Studio Manifesto, §01
        </div>
      </motion.blockquote>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1, delay: 0.9 }}
        className="mt-20 flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--color-mute)]"
      >
        <span className="inline-flex items-center gap-3">
          <span className="block h-px w-12 bg-current opacity-40" />
          Continue
          <motion.svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            animate={{ y: [0, 4, 0] }}
            transition={{ repeat: Infinity, duration: 1.8 }}
          >
            <path
              d="M12 5v14m-6-6 6 6 6-6"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </motion.svg>
        </span>
        <motion.span
          style={{ opacity: opacityIn }}
          className="hidden md:inline"
        >
          Vol. 26 — Selected Works ↓
        </motion.span>
      </motion.div>
    </div>
  );
}
