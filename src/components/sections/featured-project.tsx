"use client";

import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import { useRef } from "react";

export default function FeaturedProject() {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], [-80, 80]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1.1, 1]);

  return (
    <section
      ref={ref}
      className="relative w-full bg-[var(--color-bg-dark)] pb-24 pt-12 text-[#f0e7d5] md:pb-32"
    >
      <div className="mx-auto max-w-[1500px] px-6 md:px-10">
        {/* Top meta row */}
        <div className="mb-8 flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.18em] text-[#f0e7d5]/55">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-15% 0px" }}
            transition={{ duration: 0.9 }}
            className="inline-flex items-center gap-2"
          >
            <span className="size-1.5 rounded-full bg-[var(--color-accent)]" />
            Case Study — Vol. 01
          </motion.span>
          <motion.span
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-15% 0px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="hidden h-px w-40 origin-right bg-[#f0e7d5]/20 md:block"
          />
          <span>Halden® / 2026</span>
        </div>

        {/* Big image area */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative aspect-[16/9] w-full overflow-hidden rounded-3xl bg-black"
        >
          <motion.div
            style={{ y: imgY, scale: imgScale }}
            className="absolute inset-0"
          >
            <Image
              src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=2000&q=85&auto=format&fit=crop"
              alt="Halden — automotive case study"
              fill
              sizes="100vw"
              className="object-cover"
              style={{ objectPosition: "50% 55%" }}
              priority
            />
            {/* Subtle grid */}
            <div
              className="pointer-events-none absolute inset-0 mix-blend-overlay opacity-15"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
                backgroundSize: "80px 80px",
              }}
            />
            {/* Cinematic gradient for legibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/30" />
          </motion.div>

          {/* Top-left badge */}
          <div className="absolute left-6 top-6 z-10 flex items-center gap-2 rounded-full border border-white/15 bg-black/40 px-3 py-1.5 text-[10px] font-mono uppercase tracking-[0.18em] backdrop-blur">
            <span className="size-1.5 rounded-full bg-[var(--color-accent)]" />
            Featured
          </div>

          {/* Bottom block */}
          <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-6">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-15% 0px" }}
                transition={{ duration: 0.9, delay: 0.4 }}
                className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#f0e7d5]/70"
              >
                Halden® · Brand & Digital · 2026
              </motion.div>
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-15% 0px" }}
                transition={{ duration: 1, delay: 0.5 }}
                className="mt-2 font-display text-3xl font-semibold tracking-tight md:text-5xl"
              >
                A grand tourer, redrawn from the headlight up.
              </motion.h3>
            </div>

            <motion.a
              href="#"
              data-cursor="hover"
              data-cursor-label="Open"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-15% 0px" }}
              transition={{ duration: 0.7, delay: 0.6 }}
              whileHover={{ scale: 1.06 }}
              className="hidden size-20 shrink-0 items-center justify-center rounded-full bg-white text-[var(--color-fg)] md:inline-flex"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path
                  d="M7 17 17 7M9 7h8v8"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </motion.a>
          </div>
        </motion.div>

        {/* Below: 3-col detail row */}
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-12 md:gap-10">
          <Detail
            fromLeft
            label="Brief"
            body="Reposition a 40-year-old workshop into a forward-looking automotive house — without losing what made it loved."
            delay={0.1}
            className="md:col-span-5"
          />
          <Detail
            label="Output"
            body="Identity, motion language, ten-page editorial site, signage system, and a dealer-facing app."
            delay={0.2}
            className="md:col-span-4"
          />
          <Detail
            label="Result"
            body="42% lift in pre-order volume over the first 90 days. New dealer inquiries doubled."
            delay={0.3}
            className="md:col-span-3"
          />
        </div>
      </div>
    </section>
  );
}

function Detail({
  label,
  body,
  delay = 0,
  className,
  fromLeft = false,
}: {
  label: string;
  body: string;
  delay?: number;
  className?: string;
  fromLeft?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: fromLeft ? -120 : 120 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay }}
      className={className}
    >
      <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#f0e7d5]/55">
        {label}
      </div>
      <p className="mt-3 text-base leading-relaxed text-[#f0e7d5]/90 md:text-lg">
        {body}
      </p>
    </motion.div>
  );
}
