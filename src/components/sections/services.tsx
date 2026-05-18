"use client";

import { motion, useMotionValue, useSpring } from "motion/react";
import { useRef } from "react";
import SplitText from "@/components/motion/split-text";
import FadeUp from "@/components/motion/fade-up";

const services = [
  {
    n: "01",
    title: "Brand Systems",
    body: "Identity, typography, voice and the rules that make a brand recognisable across every surface.",
    tags: ["Identity", "Typography", "Voice", "Guidelines"],
    accent: "from-[#e1241a] to-[#7a1410]",
  },
  {
    n: "02",
    title: "Product Design",
    body: "Considered interfaces for web, native and embedded — from first wireframe to design system.",
    tags: ["UX", "Interface", "Design Systems", "Prototyping"],
    accent: "from-[#3a3a3a] to-[#0f0f0f]",
  },
  {
    n: "03",
    title: "Motion & Interaction",
    body: "Motion that feels intentional. Page transitions, micro-interactions and full WebGL pieces.",
    tags: ["Framer Motion", "WebGL", "Lottie", "Canvas"],
    accent: "from-[#e1241a] to-[#1a1a1a]",
  },
  {
    n: "04",
    title: "Engineering",
    body: "We build what we design. Next.js, React Native, edge-rendered experiences — production grade.",
    tags: ["Next.js", "React", "Edge", "Animation"],
    accent: "from-[#4a4a4a] to-[#0a0a0a]",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative mx-auto w-full max-w-[1400px] border-t border-white/10 px-5 py-24 md:px-8 md:py-40"
    >
      <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <div className="max-w-2xl">
          <FadeUp className="text-xs font-mono uppercase tracking-[0.2em] text-[var(--color-mute)] mb-4">
            <span className="inline-flex items-center gap-2">
              <span className="size-1.5 rounded-full bg-[var(--color-accent)]" />
              Capabilities — 03
            </span>
          </FadeUp>
          <SplitText
            as="h2"
            text="Four practices, one studio."
            className="font-display text-[clamp(36px,6vw,84px)] leading-[1] tracking-[-0.02em]"
          />
        </div>
        <FadeUp delay={0.2} className="max-w-sm text-[var(--color-mute)]">
          We treat brand, product, motion and engineering as one conversation —
          so the result feels coherent, not stitched together.
        </FadeUp>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {services.map((s, i) => (
          <ServiceCard key={s.n} {...s} index={i} />
        ))}
      </div>
    </section>
  );
}

function ServiceCard({
  n,
  title,
  body,
  tags,
  accent,
  index,
}: {
  n: string;
  title: string;
  body: string;
  tags: string[];
  accent: string;
  index: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const smx = useSpring(mx, { stiffness: 200, damping: 24 });
  const smy = useSpring(my, { stiffness: 200, damping: 24 });

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    mx.set(e.clientX - r.left);
    my.set(e.clientY - r.top);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      data-cursor="hover"
      data-cursor-label="View"
      initial={{ y: 60, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-15% 0px" }}
      transition={{
        duration: 1,
        ease: [0.16, 1, 0.3, 1],
        delay: index * 0.08,
      }}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[var(--color-bg-2)] p-6 md:p-10 transition-colors hover:border-white/20"
    >
      {/* glow cursor */}
      <motion.div
        style={{
          left: smx,
          top: smy,
          translateX: "-50%",
          translateY: "-50%",
        }}
        className={`pointer-events-none absolute size-[420px] rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
      >
        <div
          className={`size-full rounded-full bg-gradient-to-br ${accent} blur-3xl`}
          style={{ opacity: 0.45 }}
        />
      </motion.div>

      {/* grid overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative z-10">
        <div className="mb-12 flex items-start justify-between">
          <span className="font-mono text-xs uppercase tracking-widest text-[var(--color-mute)]">
            N°/{n}
          </span>
          <span
            className={`block h-8 w-8 rounded-full bg-gradient-to-br ${accent} opacity-90 transition-transform duration-700 group-hover:rotate-180`}
          />
        </div>

        <h3 className="font-display text-4xl md:text-6xl leading-none tracking-tight">
          {title}
        </h3>
        <p className="mt-4 max-w-md text-[var(--color-mute)]">{body}</p>

        <div className="mt-8 flex flex-wrap gap-2">
          {tags.map((t) => (
            <span
              key={t}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-mono uppercase tracking-widest text-[var(--color-fg)]/80"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-10 flex items-center gap-2 text-sm">
          <span className="opacity-70">Explore</span>
          <motion.svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            initial={{ x: 0 }}
            whileHover={{ x: 4 }}
          >
            <path
              d="M7 17 17 7M9 7h8v8"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </motion.svg>
        </div>
      </div>
    </motion.div>
  );
}
