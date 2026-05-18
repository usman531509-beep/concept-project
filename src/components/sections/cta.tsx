"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import CanvasBlob from "@/components/canvas-blob";
import Magnetic from "@/components/motion/magnetic";

export default function Cta() {
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [0.96, 1.04]);
  const rot = useTransform(scrollYProgress, [0, 1], [-3, 3]);

  return (
    <section
      id="contact"
      ref={ref}
      className="relative mx-auto w-full max-w-[1400px] px-5 py-24 md:px-8 md:py-40"
    >
      <motion.div
        style={{ scale }}
        className="relative isolate overflow-hidden rounded-[40px] border border-white/10 bg-[#0a0a0a]"
      >
        <div className="absolute inset-0 -z-10 opacity-90">
          <CanvasBlob colors={["#e1241a", "#2a2a2a", "#3a3a3a"]} />
        </div>

        <div
          className="absolute inset-0 -z-10 opacity-40 mix-blend-overlay"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="relative grid grid-cols-1 gap-10 px-6 py-20 md:grid-cols-12 md:gap-8 md:px-16 md:py-32">
          <div className="md:col-span-8">
            <motion.div
              style={{ rotate: rot }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-mono uppercase tracking-widest text-white/80"
            >
              <span className="size-1.5 rounded-full bg-[var(--color-accent-2)]" />
              Now booking — Q3 / Q4
            </motion.div>

            <h2 className="font-display text-[clamp(40px,8vw,140px)] leading-[0.95] tracking-[-0.025em]">
              <span className="block overflow-hidden">
                <motion.span
                  initial={{ y: "110%" }}
                  whileInView={{ y: 0 }}
                  viewport={{ once: true, margin: "-15% 0px" }}
                  transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
                  className="inline-block"
                >
                  Have a project
                </motion.span>
              </span>
              <span className="block overflow-hidden italic font-light">
                <motion.span
                  initial={{ y: "110%" }}
                  whileInView={{ y: 0 }}
                  viewport={{ once: true, margin: "-15% 0px" }}
                  transition={{
                    duration: 1.1,
                    ease: [0.16, 1, 0.3, 1],
                    delay: 0.1,
                  }}
                  className="inline-block"
                >
                  worth making?
                </motion.span>
              </span>
            </h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15% 0px" }}
              transition={{
                duration: 1,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.3,
              }}
              className="mt-8 max-w-md text-[var(--color-fg)]/85"
            >
              Send us a short note. The kind of thing you&apos;d say if we were
              already in the same room. We&apos;ll reply within two working days.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15% 0px" }}
              transition={{
                duration: 1,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.45,
              }}
              className="mt-10 flex flex-wrap items-center gap-3"
            >
              <Magnetic>
                <a
                  href="mailto:hello@nocturne.studio"
                  data-cursor="hover"
                  data-cursor-label="Email"
                  className="btn-solid"
                >
                  hello@nocturne.studio
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M7 17 17 7M9 7h8v8"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </a>
              </Magnetic>
              <Magnetic>
                <a
                  href="#"
                  data-cursor="hover"
                  data-cursor-label="Call"
                  className="btn-pill"
                >
                  Book a 20-min call
                </a>
              </Magnetic>
            </motion.div>
          </div>

          <div className="md:col-span-4 md:pl-10">
            <div className="space-y-6 border-t border-white/10 pt-6 md:border-l md:border-t-0 md:pl-10 md:pt-0">
              <Info label="Studio" lines={["London ↔ Lisbon", "GMT / WET"]} />
              <Info label="Press" lines={["press@nocturne.studio"]} />
              <Info
                label="Socials"
                lines={["Are.na", "Read.cv", "Dribbble"]}
              />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function Info({ label, lines }: { label: string; lines: string[] }) {
  return (
    <div>
      <div className="font-mono text-[10px] uppercase tracking-widest text-white/60">
        {label}
      </div>
      <div className="mt-1 space-y-0.5">
        {lines.map((l) => (
          <div key={l} className="text-sm text-white/90">
            {l}
          </div>
        ))}
      </div>
    </div>
  );
}
