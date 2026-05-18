"use client";

import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { ReactNode, useRef } from "react";

export default function Bento() {
  return (
    <section className="relative w-full bg-[var(--color-bg)] pb-24 md:pb-32">
      <div className="mx-auto max-w-[1500px] px-6 md:px-10">
        <div className="grid grid-cols-1 gap-3 md:grid-cols-12 md:grid-rows-[auto_auto]">
          {/* Row 1 */}
          <FounderCard className="md:col-span-5" />
          <VerticalDivider className="hidden md:col-span-1 md:block" />
          <PracticeCard className="md:col-span-3" />
          <ControlCard className="md:col-span-3" />

          {/* Row 2 */}
          <PlansCard className="md:col-span-5" />
          <SpacerRibbon className="md:col-span-3" />
          <RepeatCard className="md:col-span-4" />
        </div>
      </div>
    </section>
  );
}

/* — Tilt wrapper for hover — */

function Tilt({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useTransform(my, [-1, 1], [4, -4]);
  const ry = useTransform(mx, [-1, 1], [-4, 4]);
  const srx = useSpring(rx, { damping: 18, stiffness: 180 });
  const sry = useSpring(ry, { damping: 18, stiffness: 180 });

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    mx.set(((e.clientX - r.left) / r.width) * 2 - 1);
    my.set(((e.clientY - r.top) / r.height) * 2 - 1);
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
      style={{ rotateX: srx, rotateY: sry, transformPerspective: 1000 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function reveal(delay = 0, from: "left" | "right" | "up" = "up") {
  const offset = 140;
  const initial =
    from === "left"
      ? { opacity: 0, x: -offset, y: 0 }
      : from === "right"
        ? { opacity: 0, x: offset, y: 0 }
        : { opacity: 0, x: 0, y: 40 };
  return {
    initial,
    whileInView: { opacity: 1, x: 0, y: 0 },
    viewport: { once: true, amount: 0.15 },
    transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1] as const, delay },
  } as const;
}

/* — Cards — */

function FounderCard({ className }: { className?: string }) {
  return (
    <motion.div {...reveal(0, "left")} className={className}>
      <Tilt className="relative h-full overflow-hidden rounded-3xl bg-[var(--color-bg-2)] p-8 md:p-10">
        {/* Top icon: two stick figures */}
        <div className="flex items-end gap-1">
          <span
            className="block h-6 w-1.5 rounded-sm bg-[var(--color-fg)]"
            style={{
              maskImage:
                "radial-gradient(circle at top, transparent 30%, black 30%)",
            }}
          />
          <span className="-translate-y-2 text-2xl">🙂</span>
          <span className="-translate-y-2 text-2xl text-[var(--color-accent)]">
            🙂
          </span>
        </div>
        <h3 className="mt-6 font-display text-3xl font-semibold tracking-tight md:text-4xl">
          From the Founder
        </h3>
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: 0.9 }}
          className="mt-3 h-px w-16 origin-left bg-[var(--color-line)]"
        />
        <p className="mt-6 max-w-md text-[var(--color-mute)] leading-relaxed">
          Each project is shaped with direct creative oversight from the start.
          The thinking stays close to the work through every stage.
        </p>

        <div className="mt-10 flex items-center gap-4">
          <span
            className="size-16 rounded-md ring-1 ring-black/5"
            style={{
              background:
                "radial-gradient(80% 80% at 30% 30%, #f5d0a8, #b07248 60%, #3a1f12 100%)",
            }}
          />
          <div>
            <div className="font-serif italic text-xl">Eitan Mori</div>
            <div className="font-medium">Eitan Mori</div>
            <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-mute)]">
              Founder & CEO
            </div>
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
}

function VerticalDivider({ className }: { className?: string }) {
  return (
    <motion.div {...reveal(0.05)} className={className}>
      <div className="relative h-full overflow-hidden rounded-3xl bg-[var(--color-bg-soft)]">
        <div className="absolute inset-0 flex flex-col items-center justify-between py-12">
          <span className="rotate-90 origin-center whitespace-nowrap font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--color-mute)]">
            Digital Agency
          </span>
          <span className="rotate-90 origin-center whitespace-nowrap font-display text-lg font-semibold tracking-[-0.04em]">
            NOCTURNE✱
          </span>
        </div>
      </div>
    </motion.div>
  );
}

function PracticeCard({ className }: { className?: string }) {
  return (
    <motion.div {...reveal(0.1, "left")} className={className}>
      <Tilt className="relative h-full overflow-hidden rounded-3xl bg-[var(--color-bg-dark)] p-8 text-[#f0e7d5]">
        <div
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage:
              "radial-gradient(60% 60% at 50% 40%, rgba(255,255,255,0.06), transparent 70%)",
          }}
        />
        <div
          className="absolute inset-0 mix-blend-overlay opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.08) 1px, transparent 1.5px)",
            backgroundSize: "8px 8px",
          }}
        />
        <div className="relative flex h-full flex-col">
          <div className="flex items-baseline gap-1 font-display text-xl font-semibold tracking-[-0.04em]">
            <span>NOCTURNE</span>
            <span className="text-[var(--color-accent)] -translate-y-1 text-base">
              ✱
            </span>
          </div>

          <div className="mt-8 flex-1 text-center">
            <div className="font-display text-6xl font-semibold leading-none tracking-tight md:text-7xl">
              7 yrs
            </div>
            <div className="mx-auto mt-6 h-px w-12 bg-[#f0e7d5]/40" />
            <div className="mt-6 font-display text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
              Creative
              <br />
              Practice
            </div>
            <p className="mx-auto mt-6 max-w-[20ch] text-sm text-[#f0e7d5]/70">
              Seven years of work across identity, digital, and brand systems.
            </p>
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
}

function ControlCard({ className }: { className?: string }) {
  return (
    <motion.div {...reveal(0.15, "right")} className={className}>
      <Tilt className="relative h-full overflow-hidden rounded-3xl bg-[var(--color-bg-2)] p-8">
        <h3 className="font-display text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
          Clear Control.
          <br />
          <span className="text-[var(--color-accent)]">Full Visibility.</span>
        </h3>
        <p className="mt-6 max-w-xs text-sm text-[var(--color-mute)]">
          Scope, timeline, and approvals stay visible from the first step to the
          last.
        </p>

        {/* Faux button render */}
        <div className="relative mx-auto mt-10 h-32 w-44">
          <div className="absolute inset-x-2 bottom-0 h-20 rounded-2xl bg-white shadow-[0_20px_40px_-20px_rgba(0,0,0,0.25)] ring-1 ring-black/5" />
          <div className="absolute inset-x-6 bottom-6 h-16 rounded-xl bg-white shadow-[0_8px_20px_-10px_rgba(0,0,0,0.2)] ring-1 ring-black/5" />
          <motion.div
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-1/2 top-0 size-16 -translate-x-1/2 rounded-full bg-[var(--color-accent)] shadow-[0_12px_30px_-8px_rgba(240,66,34,0.6)]"
          />
        </div>
      </Tilt>
    </motion.div>
  );
}

function PlansCard({ className }: { className?: string }) {
  return (
    <motion.div {...reveal(0.05, "left")} className={className}>
      <Tilt className="relative h-full overflow-hidden rounded-3xl bg-[var(--color-bg-2)] p-8 md:p-10">
        <div className="flex items-start gap-4">
          <span
            className="size-10 shrink-0 rounded-full"
            style={{
              background:
                "radial-gradient(circle at 30% 30%, #333, #0a0a0a 70%)",
            }}
          />
          <h3 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
            Flexible Plans
          </h3>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-4">
          {[
            { tag: "For focused, one-off work", title: "Sprint" },
            { tag: "For ongoing partnerships", title: "Retainer" },
          ].map((p) => (
            <div
              key={p.title}
              className="rounded-2xl bg-[var(--color-accent)] p-5 text-white"
            >
              <div className="text-[10px] font-mono uppercase tracking-[0.18em] opacity-80">
                {p.tag}
              </div>
              <div className="mt-6 font-display text-2xl font-semibold tracking-tight">
                {p.title}
              </div>
            </div>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
}

function SpacerRibbon({ className }: { className?: string }) {
  return (
    <motion.div {...reveal(0.1)} className={className}>
      <div className="relative h-full overflow-hidden rounded-3xl bg-[var(--color-bg-soft)] p-8">
        <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-mute)]">
          <span className="size-2 rounded-full bg-[var(--color-accent)]" />
          Studio ethics
        </div>
        <div className="mt-6 space-y-3 text-lg font-medium leading-tight">
          <div>Honest scope.</div>
          <div>Honest timeline.</div>
          <div className="text-[var(--color-accent)]">Honest invoice.</div>
        </div>
      </div>
    </motion.div>
  );
}

function RepeatCard({ className }: { className?: string }) {
  return (
    <motion.div {...reveal(0.15, "right")} className={className}>
      <Tilt className="relative h-full overflow-hidden rounded-3xl bg-[var(--color-accent)] p-8 md:p-10 text-white">
        <h3 className="font-display text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
          Repeat Clients
        </h3>
        <p className="mt-4 max-w-xs text-white/90">
          Most partnerships extend beyond the first project. We work to make the
          second one obvious.
        </p>

        <div className="mt-8 flex items-end justify-between">
          <div className="font-display text-[80px] font-semibold leading-none tracking-tight md:text-[110px]">
            64
            <span className="align-super text-3xl text-white/70">%</span>
          </div>
          <motion.span
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="text-4xl"
          >
            ✱
          </motion.span>
        </div>
      </Tilt>
    </motion.div>
  );
}
