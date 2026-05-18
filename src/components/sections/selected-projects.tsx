"use client";

import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import { useRef } from "react";

type Card = {
  title: string;
  subtitle: string;
  src: string;
  alt: string;
  accent?: string;
  /** focus point (object-position) — defaults to center */
  position?: string;
};

const row1: Card[] = [
  {
    title: "Bloom",
    subtitle: "Identity / Editorial",
    src: "https://images.unsplash.com/photo-1604881991720-f91add269bed?w=1200&q=80&auto=format&fit=crop",
    alt: "Yellow editorial portrait — Bloom",
    position: "50% 30%",
    accent: "#0a0a0a",
  },
  {
    title: "Halden",
    subtitle: "Automotive / Brand",
    src: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=1200&q=80&auto=format&fit=crop",
    alt: "Matte black automotive detail — Halden",
    position: "50% 55%",
    accent: "#f0e7d5",
  },
  {
    title: "Alpine",
    subtitle: "Outdoor / Campaign",
    src: "https://images.unsplash.com/photo-1551524559-8af4e6624178?w=1200&q=80&auto=format&fit=crop",
    alt: "Hooded skier in goggles — Alpine",
    position: "50% 40%",
    accent: "#ff8a4c",
  },
];

const row2: Card[] = [
  {
    title: "Rituel Noir",
    subtitle: "Beauty / Packaging",
    src: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=1400&q=80&auto=format&fit=crop",
    alt: "Red still life beauty products — Rituel Noir",
    position: "50% 50%",
    accent: "#f0e7d5",
  },
  {
    title: "Lindholm",
    subtitle: "Robotics / Product",
    src: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1200&q=80&auto=format&fit=crop",
    alt: "White delivery robot — Lindholm",
    position: "50% 45%",
    accent: "#0a0a0a",
  },
  {
    title: "Sotto Voce",
    subtitle: "Editorial / Print",
    src: "https://images.unsplash.com/photo-1488161628813-04466f872be2?w=1200&q=80&auto=format&fit=crop",
    alt: "Black and white editorial portrait — Sotto Voce",
    position: "50% 30%",
    accent: "#f0e7d5",
  },
];

export default function SelectedProjects() {
  return (
    <section
      id="projects"
      className="relative w-full bg-[var(--color-bg-dark)] pb-10 pt-24 text-[#f0e7d5] md:pt-32"
    >
      <div className="mx-auto max-w-[1500px] px-6 md:px-10">
        <div className="mb-12 flex flex-col items-center text-center">
          <Headline text="Selected Projects" />
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="mt-4 max-w-md font-mono text-[11px] uppercase tracking-[0.18em] text-[#f0e7d5]/60"
          >
            A small selection of narrative-led client work.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
          {row1.map((c, i) => (
            <ProjectCard key={c.title} card={c} index={i} />
          ))}
        </div>
        <div className="mt-3 grid grid-cols-1 gap-3 md:grid-cols-[1.4fr_1fr_1fr]">
          {row2.map((c, i) => (
            <ProjectCard key={c.title} card={c} index={i + 3} />
          ))}
        </div>

        <div className="mt-24 flex flex-col items-center text-center">
          <Headline text="More Projects" />
        </div>
      </div>
    </section>
  );
}

function Headline({ text }: { text: string }) {
  const words = text.split(" ");
  return (
    <h2 className="font-display font-medium uppercase leading-[0.95] tracking-[-0.03em] text-[clamp(50px,9.5vw,170px)] text-[#f0e7d5]">
      {words.map((w, i) => (
        <span
          key={i}
          className="inline-block overflow-hidden align-bottom pr-[0.18em]"
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
    </h2>
  );
}

function ProjectCard({ card, index }: { card: Card; index: number }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], [-30, 30]);

  return (
    <motion.div
      ref={ref}
      data-cursor="hover"
      data-cursor-label="View"
      initial={{
        opacity: 0,
        x: index % 2 === 0 ? -120 : 120,
        y: 30,
      }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1],
        delay: 0.1 + index * 0.08,
      }}
      className="group relative aspect-[4/5] overflow-hidden rounded-2xl bg-neutral-900"
    >
      {/* Image with subtle scroll parallax + hover zoom */}
      <motion.div
        style={{ y: imgY }}
        className="absolute inset-0 transition-transform duration-[1400ms] group-hover:scale-105"
      >
        <Image
          src={card.src}
          alt={card.alt}
          fill
          sizes="(min-width: 1024px) 33vw, 100vw"
          className="object-cover"
          style={{ objectPosition: card.position ?? "center" }}
          priority={index < 3}
        />
      </motion.div>

      {/* Subtle grid overlay */}
      <div
        className="pointer-events-none absolute inset-0 mix-blend-overlay opacity-25"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.4) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Bottom gradient for legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent" />

      <div
        className="absolute bottom-5 left-5 right-5 flex items-end justify-between"
        style={{ color: card.accent ?? "#fff" }}
      >
        <div>
          <div className="font-mono text-[10px] uppercase tracking-[0.18em] opacity-90 drop-shadow-sm">
            {card.subtitle}
          </div>
          <div className="mt-1 font-display text-3xl font-semibold tracking-tight drop-shadow-md md:text-4xl">
            {card.title}
          </div>
        </div>
        <div className="opacity-0 transition group-hover:opacity-100">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path
              d="M7 17 17 7M9 7h8v8"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>

      {/* Hover sheen */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "linear-gradient(120deg, transparent 30%, rgba(255,255,255,0.12) 50%, transparent 70%)",
        }}
      />
    </motion.div>
  );
}
