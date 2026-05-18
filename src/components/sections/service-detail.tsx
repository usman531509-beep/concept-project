"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";
import { ReactNode, useRef } from "react";

const nav = [
  "Brand Identity",
  "Product Design",
  "Web Systems",
  "Development",
  "Content & Messaging",
  "Motion & Interaction",
];

type Props = {
  activeIndex: number;
  title: string;
  attributes: string[];
  caption: string;
  visual: ReactNode;
  counter: string;
};

export default function ServiceDetail({
  activeIndex,
  title,
  attributes,
  caption,
  visual,
  counter,
}: Props) {
  return (
    <section className="relative w-full bg-[var(--color-bg-2)] py-20 md:py-28">
      <div className="mx-auto max-w-[1500px] px-6 md:px-10">
        {/* Eyebrow / numbered tag */}
        <div className="mb-8 flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--color-mute)]">
          <span className="inline-flex items-center gap-2">
            <span className="size-1.5 rounded-full bg-[var(--color-accent)]" />
            Service / {counter}
          </span>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="hidden h-px w-40 origin-right bg-[var(--color-line)] md:block"
          />
          <span>{nav[activeIndex]}</span>
        </div>

        {/* Giant section title */}
        <h3 className="font-display font-semibold tracking-[-0.04em] text-[clamp(60px,12vw,200px)] leading-[0.95] text-[var(--color-fg)] mb-12">
          {title.split(" ").map((w, i) => (
            <span
              key={i}
              className="inline-block overflow-hidden align-bottom pr-[0.1em]"
            >
              <motion.span
                initial={{ y: "115%", opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 1.1,
                  ease: [0.16, 1, 0.3, 1],
                  delay: i * 0.08,
                }}
                className="inline-block"
              >
                {w}
              </motion.span>
            </span>
          ))}
        </h3>

        {/* 3-column grid */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-8">
          {/* Left list */}
          <ul className="md:col-span-3 space-y-3.5 md:pt-4">
            {nav.map((n, i) => (
              <NavItem
                key={n}
                label={n}
                index={i}
                active={i === activeIndex}
              />
            ))}
          </ul>

          {/* Center 3D-feel visual */}
          <div className="md:col-span-6">
            <TiltVisual>{visual}</TiltVisual>
          </div>

          {/* Right list */}
          <ul className="md:col-span-3 space-y-3 md:pt-4 md:pl-6">
            {attributes.map((a, i) => (
              <motion.li
                key={a}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.7,
                  delay: 0.2 + i * 0.05,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group flex items-center gap-3 text-lg font-medium tracking-tight text-[var(--color-fg)] md:text-xl"
              >
                <span className="block size-1.5 rounded-full bg-[var(--color-fg)]/30 transition group-hover:bg-[var(--color-accent)] group-hover:scale-150" />
                <span className="transition-transform group-hover:translate-x-1">
                  {a}
                </span>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Caption + counter */}
        <div className="mt-16 flex items-end justify-between gap-8 md:mt-20">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="max-w-md"
          >
            <div className="flex items-center gap-2">
              <span className="size-2 rounded-sm bg-[var(--color-accent)]" />
              <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--color-mute)]">
                {caption}
              </span>
            </div>
          </motion.div>
          <div className="font-display text-3xl font-medium text-[var(--color-mute-2)] md:text-5xl">
            .{counter}
          </div>
        </div>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 h-[2px] origin-left bg-[var(--color-accent)]"
        />
      </div>
    </section>
  );
}

/* ─── Left nav item with animated underline + indicator ─── */

function NavItem({
  label,
  index,
  active,
}: {
  label: string;
  index: number;
  active: boolean;
}) {
  return (
    <motion.li
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
      className="group flex items-center gap-3"
    >
      <motion.span
        initial={false}
        animate={{
          width: active ? 14 : 0,
          opacity: active ? 1 : 0,
        }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="block h-px bg-[var(--color-accent)]"
      />
      <span
        className={`text-lg font-medium tracking-tight transition md:text-xl ${
          active
            ? "text-[var(--color-accent)]"
            : "text-[var(--color-fg)] group-hover:translate-x-1"
        }`}
      >
        {label}
      </span>
    </motion.li>
  );
}

/* ─── Cursor-tilt wrapper for the central visual panel ─── */

function TiltVisual({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useTransform(my, [-0.5, 0.5], [6, -6]);
  const ry = useTransform(mx, [-0.5, 0.5], [-8, 8]);
  const srx = useSpring(rx, { damping: 22, stiffness: 180 });
  const sry = useSpring(ry, { damping: 22, stiffness: 180 });
  const glowX = useTransform(mx, [-0.5, 0.5], ["20%", "80%"]);
  const glowY = useTransform(my, [-0.5, 0.5], ["20%", "80%"]);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      style={{ rotateX: srx, rotateY: sry, transformPerspective: 1200 }}
      className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl bg-gradient-to-br from-[#f4f0e6] to-[#eae5d6] ring-1 ring-black/[0.06] shadow-[0_30px_60px_-30px_rgba(0,0,0,0.12)]"
    >
      {/* Subtle grid backing */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(rgba(10,10,10,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(10,10,10,0.04) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          maskImage: "radial-gradient(70% 70% at 50% 50%, black, transparent)",
        }}
      />

      {/* Cursor-following glow */}
      <motion.div
        style={{
          left: glowX,
          top: glowY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        className="pointer-events-none absolute size-[60%] rounded-full opacity-60"
      >
        <div
          className="size-full rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(240,66,34,0.18) 0%, rgba(240,66,34,0) 70%)",
            filter: "blur(20px)",
          }}
        />
      </motion.div>

      {children}

      {/* Top-right meta */}
      <div className="absolute right-4 top-4 z-10 flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-[10px] font-mono uppercase tracking-[0.18em] text-[var(--color-mute)] ring-1 ring-black/[0.06] backdrop-blur">
        <span className="size-1.5 rounded-full bg-[var(--color-accent)]" />
        Live
      </div>
    </motion.div>
  );
}

/* ─── Modern 3D-feel dot grid ─── */

export function WebSystemsVisual() {
  // 5×7 dot matrix forming an abstract glyph
  const pattern = [
    [0, 0, 1, 0, 0],
    [0, 1, 1, 1, 0],
    [1, 1, 1, 1, 1],
    [0, 0, 1, 1, 0],
    [0, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [0, 0, 1, 0, 0],
  ];

  return (
    <div className="relative grid h-full w-full place-items-center p-8 md:p-12">
      <div
        className="grid grid-cols-5 gap-3 md:gap-4"
        style={{ transformStyle: "preserve-3d" }}
      >
        {pattern.flatMap((row, ri) =>
          row.map((cell, ci) => (
            <Dot key={`${ri}-${ci}`} active={cell === 1} row={ri} col={ci} />
          )),
        )}
      </div>

      {/* Scan-line sweep */}
      <motion.div
        aria-hidden
        initial={{ y: "-130%" }}
        animate={{ y: "130%" }}
        transition={{
          duration: 4.5,
          ease: "easeInOut",
          repeat: Infinity,
          repeatDelay: 1.5,
        }}
        className="pointer-events-none absolute inset-x-8 h-[40%] rounded-full opacity-60"
        style={{
          background:
            "linear-gradient(180deg, transparent, rgba(45,168,255,0.22), transparent)",
          filter: "blur(20px)",
          mixBlendMode: "multiply",
        }}
      />
    </div>
  );
}

function Dot({
  active,
  row,
  col,
}: {
  active: boolean;
  row: number;
  col: number;
}) {
  const delay = (row + col) * 0.04;
  return (
    <motion.span
      initial={{ scale: 0, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
        delay,
      }}
      whileHover={{ scale: 1.25 }}
      className="relative block aspect-square"
      style={{ width: "clamp(24px, 5vw, 56px)" }}
    >
      <motion.span
        animate={{ y: active ? [0, -3, 0] : 0 }}
        transition={{
          duration: 2 + (row * 0.1 + col * 0.05),
          ease: "easeInOut",
          repeat: Infinity,
          delay: (row + col) * 0.08,
        }}
        className="absolute inset-0"
      >
        {active ? (
          <span
            className="block size-full rounded-full"
            style={{
              background:
                "radial-gradient(circle at 35% 30%, #6ec0ff 0%, #2da8ff 45%, #0d6cb8 100%)",
              boxShadow:
                "0 10px 22px -8px rgba(45,168,255,0.55), inset 0 -3px 8px rgba(0,0,0,0.18), inset 0 3px 6px rgba(255,255,255,0.45)",
            }}
          />
        ) : (
          <span
            className="block size-full rounded-full"
            style={{
              background:
                "radial-gradient(circle at 35% 30%, #ffffff 0%, #f4f0e4 60%, #d8d3c5 100%)",
              boxShadow:
                "0 6px 14px -8px rgba(0,0,0,0.15), inset 0 -2px 6px rgba(0,0,0,0.05), inset 0 2px 4px rgba(255,255,255,0.7)",
            }}
          />
        )}
      </motion.span>
    </motion.span>
  );
}

/* ─── Modern abstract message-stack visual ─── */

export function ContentMessagingVisual() {
  return (
    <div className="relative grid h-full w-full place-items-center p-8">
      {/* Outer pulsing rings */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.18, 0.05, 0.18] }}
        transition={{ duration: 4, ease: "easeInOut", repeat: Infinity }}
        className="absolute size-[70%] rounded-full border border-[var(--color-accent)]"
      />
      <motion.div
        animate={{ scale: [1, 1.25, 1], opacity: [0.12, 0.02, 0.12] }}
        transition={{
          duration: 5,
          ease: "easeInOut",
          repeat: Infinity,
          delay: 0.5,
        }}
        className="absolute size-[90%] rounded-full border border-[var(--color-fg)]/20"
      />

      {/* Stack of message cards */}
      <div className="relative size-[68%]">
        {/* Card 3 (back) */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          animate={{ y: [0, -4, 0] }}
          style={{
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            "--floatDur": "4.5s",
          } as any}
          className="absolute right-0 top-2 h-24 w-3/5 rounded-3xl bg-white shadow-[0_20px_30px_-20px_rgba(0,0,0,0.18)] ring-1 ring-black/[0.04]"
        >
          <div className="space-y-2 p-5">
            <span className="block h-1.5 w-1/2 rounded-full bg-[var(--color-fg)]/15" />
            <span className="block h-1.5 w-2/3 rounded-full bg-[var(--color-fg)]/12" />
          </div>
        </motion.div>

        {/* Card 2 (middle) */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="absolute left-0 top-1/2 h-28 w-[58%] -translate-y-1/2 rounded-3xl bg-white shadow-[0_25px_45px_-25px_rgba(0,0,0,0.22)] ring-1 ring-black/[0.05]"
        >
          <motion.div
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 5, ease: "easeInOut", repeat: Infinity }}
            className="space-y-2.5 p-5"
          >
            <span className="block h-2 w-2/3 rounded-full bg-[var(--color-fg)]/80" />
            <span className="block h-2 w-1/2 rounded-full bg-[var(--color-fg)]/40" />
            <span className="block h-2 w-1/3 rounded-full bg-[var(--color-fg)]/25" />
          </motion.div>
        </motion.div>

        {/* Card 1 (front, red accent) */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          className="absolute bottom-2 right-2 h-28 w-1/2 rounded-3xl bg-[var(--color-accent)] text-white shadow-[0_25px_45px_-15px_rgba(240,66,34,0.45)] ring-1 ring-black/[0.06]"
        >
          <motion.div
            animate={{ y: [0, -4, 0] }}
            transition={{
              duration: 4.5,
              ease: "easeInOut",
              repeat: Infinity,
              delay: 0.5,
            }}
            className="flex h-full flex-col justify-between p-5"
          >
            <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.18em] opacity-90">
              <span className="size-1.5 rounded-full bg-white" />
              Live
            </div>
            <div className="space-y-1.5">
              <span className="block h-2 w-3/4 rounded-full bg-white" />
              <span className="block h-2 w-1/2 rounded-full bg-white/70" />
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating small dots */}
      <motion.span
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 3, ease: "easeInOut", repeat: Infinity }}
        className="absolute left-[18%] top-[28%] size-3 rounded-full bg-[var(--color-accent)]"
      />
      <motion.span
        animate={{ y: [0, 8, 0] }}
        transition={{
          duration: 3.5,
          ease: "easeInOut",
          repeat: Infinity,
          delay: 0.3,
        }}
        className="absolute right-[14%] top-[18%] size-2 rounded-full bg-[var(--color-fg)]"
      />
      <motion.span
        animate={{ y: [0, -6, 0] }}
        transition={{
          duration: 4,
          ease: "easeInOut",
          repeat: Infinity,
          delay: 0.8,
        }}
        className="absolute bottom-[16%] left-[22%] size-2 rounded-full bg-[var(--color-fg)]/30"
      />
    </div>
  );
}
