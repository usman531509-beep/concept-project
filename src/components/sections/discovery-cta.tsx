"use client";

import { motion } from "motion/react";
import Magnetic from "@/components/motion/magnetic";

export default function DiscoveryCta() {
  return (
    <section
      id="contact"
      className="relative w-full bg-[var(--color-bg-2)] py-24 md:py-32"
    >
      <div className="mx-auto max-w-[1500px] px-6 md:px-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15% 0px" }}
              transition={{ duration: 0.9 }}
              className="font-mono text-[12px] uppercase tracking-[0.18em] text-[var(--color-fg)]"
            >
              No pitch. A conversation.
            </motion.div>

            <h3 className="mt-6 font-display text-[clamp(34px,5vw,64px)] font-semibold leading-[1.05] tracking-[-0.02em] text-balance">
              {[
                "Every project starts with a",
                "free discovery call. No commitment,",
                "no pressure.",
              ].map((line, li) => (
                <span key={li} className="block overflow-hidden">
                  <motion.span
                    initial={{ y: "115%" }}
                    whileInView={{ y: 0 }}
                    viewport={{ once: true, margin: "-15% 0px" }}
                    transition={{
                      duration: 1.1,
                      ease: [0.16, 1, 0.3, 1],
                      delay: 0.15 + li * 0.1,
                    }}
                    className="inline-block"
                  >
                    {line}
                  </motion.span>
                </span>
              ))}
            </h3>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15% 0px" }}
              transition={{ duration: 0.9, delay: 0.6 }}
              className="mt-10"
            >
              <Magnetic>
                <a
                  href="#"
                  data-cursor="hover"
                  data-cursor-label="Book"
                  className="btn-pill"
                >
                  Book a Call
                  <motion.svg
                    initial={{ x: 0 }}
                    whileHover={{ x: 4 }}
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M4 12h16m-6-6 6 6-6 6"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                  </motion.svg>
                </a>
              </Magnetic>
            </motion.div>
          </div>

          <div className="md:col-span-5 md:pl-8">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15% 0px" }}
              transition={{ duration: 0.9, delay: 0.3 }}
              className="flex flex-col items-start gap-6 md:items-end"
            >
              <div className="flex w-full items-center justify-between gap-4 md:max-w-xs">
                <div className="flex items-baseline gap-1 font-display text-base font-semibold tracking-[-0.04em] text-[var(--color-accent)]">
                  <span>NOCTURNE</span>
                  <span className="-translate-y-0.5 text-sm">✱</span>
                </div>
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true, margin: "-15% 0px" }}
                  transition={{ duration: 0.9, delay: 0.4 }}
                  className="h-px flex-1 origin-left bg-[var(--color-line)]"
                />
              </div>

              <motion.div
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-15% 0px" }}
                transition={{ duration: 0.9, delay: 0.55 }}
                className="flex items-center gap-3"
              >
                {/* Avatar */}
                <span
                  className="size-12 rounded-md"
                  style={{
                    background:
                      "radial-gradient(80% 80% at 30% 30%, #f0c8a0, #c87b4a 60%, #4a2a18 100%)",
                  }}
                />
                <div>
                  <div className="font-medium">Mira Aoki</div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-mute)]">
                    Senior Project Manager
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
