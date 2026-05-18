"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import SplitText from "@/components/motion/split-text";
import FadeUp from "@/components/motion/fade-up";

type Project = {
  title: string;
  client: string;
  year: string;
  tags: string[];
  palette: [string, string];
  category: string;
};

const projects: Project[] = [
  {
    title: "A new face for an old craft",
    client: "Halo Labs",
    year: "26",
    tags: ["Brand", "Web"],
    palette: ["#e1241a", "#1a0a09"],
    category: "Identity / Site",
  },
  {
    title: "Software that breathes",
    client: "Polaris OS",
    year: "25",
    tags: ["Product", "Motion"],
    palette: ["#3a3a3a", "#0a0a0a"],
    category: "Product / Motion",
  },
  {
    title: "Field guide to a quiet city",
    client: "Field Notes",
    year: "25",
    tags: ["Editorial", "Web"],
    palette: ["#5a5a5a", "#101010"],
    category: "Editorial",
  },
  {
    title: "Engineering, made visible",
    client: "Northwind",
    year: "24",
    tags: ["Brand", "Product"],
    palette: ["#e1241a", "#161616"],
    category: "Brand / Product",
  },
];

export default function Work() {
  return (
    <section
      id="work"
      className="relative mx-auto w-full max-w-[1400px] border-t border-white/10 px-5 py-24 md:px-8 md:py-40"
    >
      <div className="mb-14 flex items-end justify-between gap-6">
        <div>
          <FadeUp className="text-xs font-mono uppercase tracking-[0.2em] text-[var(--color-mute)] mb-4">
            <span className="inline-flex items-center gap-2">
              <span className="size-1.5 rounded-full bg-[var(--color-accent)]" />
              Selected work — 04
            </span>
          </FadeUp>
          <SplitText
            as="h2"
            text="Recent things, made carefully."
            className="font-display text-[clamp(36px,6vw,84px)] leading-[1] tracking-[-0.02em]"
          />
        </div>
        <FadeUp delay={0.2}>
          <a
            href="#"
            data-cursor="hover"
            data-cursor-label="Index"
            className="btn-pill"
          >
            See archive
          </a>
        </FadeUp>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-12">
        {projects.map((p, i) => (
          <Card key={p.client} project={p} index={i} />
        ))}
      </div>
    </section>
  );
}

function Card({ project, index }: { project: Project; index: number }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const rot = useTransform(
    scrollYProgress,
    [0, 1],
    [index % 2 === 0 ? -2 : 2, index % 2 === 0 ? 2 : -2],
  );

  const colSpan = index % 3 === 0 ? "md:col-span-7" : "md:col-span-5";
  const aspect = index % 3 === 0 ? "aspect-[4/3]" : "aspect-[3/4]";

  return (
    <motion.div
      ref={ref}
      className={`group relative ${colSpan} ${index % 4 === 2 ? "md:mt-24" : ""}`}
      data-cursor="hover"
      data-cursor-label="Open"
    >
      <motion.div
        style={{ y, rotate: rot }}
        className={`relative overflow-hidden rounded-3xl border border-white/10 ${aspect}`}
      >
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(120% 80% at 30% 20%, ${project.palette[0]}, ${project.palette[1]} 70%)`,
          }}
        />
        <div
          className="absolute inset-0 mix-blend-overlay opacity-40"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-10">
          <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-widest text-white/80">
            <span>{project.category}</span>
            <span>20{project.year}</span>
          </div>

          <div>
            <div className="font-mono text-[10px] uppercase tracking-widest text-white/70">
              {project.client}
            </div>
            <div className="mt-2 font-display text-3xl leading-none md:text-5xl">
              {project.title}
            </div>
          </div>
        </div>

        {/* hover sheen */}
        <motion.div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background:
              "linear-gradient(120deg, transparent 30%, rgba(255,255,255,0.18) 50%, transparent 70%)",
          }}
        />
      </motion.div>

      <div className="mt-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs uppercase tracking-widest text-[var(--color-mute)]">
            N°/0{index + 1}
          </span>
          <span className="text-sm">{project.client}</span>
        </div>
        <div className="flex gap-1.5">
          {project.tags.map((t) => (
            <span
              key={t}
              className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-[10px] font-mono uppercase tracking-widest"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
