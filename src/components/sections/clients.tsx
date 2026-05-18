"use client";

import { motion } from "motion/react";

const logos = [
  { name: "Cocon Céleste", style: "font-serif italic" },
  { name: "Lindholm", style: "font-display font-semibold" },
  { name: "Halden", style: "font-display tracking-tight" },
  { name: "Aurelis", style: "font-serif" },
  { name: "Obliqon", style: "font-display font-bold" },
  { name: "Bloom & Co.", style: "font-display" },
  { name: "Sotto Voce", style: "font-serif italic" },
  { name: "Northwind", style: "font-display font-semibold tracking-tight" },
  { name: "Polaris", style: "font-display" },
  { name: "Quill", style: "font-serif" },
];

export default function Clients() {
  return (
    <section className="relative w-full bg-[var(--color-bg-2)] py-24 md:py-36">
      <div className="mx-auto max-w-[1500px] px-6 md:px-10">
        <div className="mb-14 flex flex-col items-center text-center">
          <Headline />
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15% 0px" }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="mt-4 font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--color-mute)]"
          >
            Brands that never settled for good enough.
          </motion.p>
        </div>

        <div className="marquee-pause relative overflow-hidden mask-fade-x">
          <div className="flex w-max items-center gap-16 animate-marquee whitespace-nowrap py-4">
            {[...logos, ...logos].map((l, i) => (
              <motion.span
                key={`a-${i}`}
                whileHover={{ filter: "blur(0px)", color: "#0a0a0a" }}
                className={`text-4xl md:text-5xl tracking-tight text-[var(--color-fg)]/60 ${l.style}`}
                style={{ filter: "blur(1.2px)" }}
              >
                {l.name}
              </motion.span>
            ))}
          </div>
        </div>

        <div className="marquee-pause mt-6 relative overflow-hidden mask-fade-x">
          <div className="flex w-max items-center gap-16 animate-marquee-rev whitespace-nowrap py-4">
            {[...logos.slice().reverse(), ...logos.slice().reverse()].map(
              (l, i) => (
                <span
                  key={`b-${i}`}
                  className={`text-3xl md:text-4xl tracking-tight text-[var(--color-fg)]/40 ${l.style}`}
                  style={{ filter: "blur(2px)" }}
                >
                  {l.name}
                </span>
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Headline() {
  return (
    <h2 className="font-display font-semibold uppercase leading-[0.95] tracking-[-0.04em] text-[clamp(56px,10vw,180px)]">
      {"Our Clients".split(" ").map((w, i) => (
        <span
          key={i}
          className="inline-block overflow-hidden align-bottom pr-[0.18em]"
        >
          <motion.span
            initial={{ y: "115%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true, margin: "-15% 0px" }}
            transition={{
              duration: 1.1,
              ease: [0.16, 1, 0.3, 1],
              delay: i * 0.1,
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
