"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";

const cols = [
  { title: "Studio", links: ["About", "Process", "Manifesto", "Careers"] },
  { title: "Work", links: ["Index", "Brand", "Product", "Motion"] },
  { title: "Resources", links: ["Journal", "Newsletter", "Tools", "Press kit"] },
  { title: "Connect", links: ["Email", "Are.na", "Read.cv", "Dribbble"] },
];

export default function Footer() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const fmt = () => {
      const d = new Date();
      setTime(
        d.toLocaleTimeString("en-GB", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
          timeZone: "Europe/London",
        }),
      );
    };
    fmt();
    const id = setInterval(fmt, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <footer className="relative w-full overflow-hidden bg-[var(--color-bg-dark)] pt-20 text-[#f0e7d5]">
      <div className="mx-auto max-w-[1500px] px-6 md:px-10">
        {/* Giant wordmark */}
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-display font-semibold tracking-[-0.05em] leading-[0.85] text-[clamp(96px,22vw,360px)]"
        >
          NOCTURNE
          <span className="text-[var(--color-accent)]">✱</span>
        </motion.div>

        <div className="mt-12 grid grid-cols-2 gap-10 border-t border-white/10 pb-12 pt-12 md:grid-cols-12">
          <div className="col-span-2 md:col-span-4">
            <div className="flex items-baseline gap-1 font-display text-xl font-semibold tracking-[-0.04em]">
              <span>NOCTURNE</span>
              <span className="text-[var(--color-accent)] -translate-y-1 text-base">
                ✱
              </span>
            </div>
            <p className="mt-6 max-w-xs text-sm text-[#f0e7d5]/70">
              An independent design practice for brand, product, and motion.
              Built around the work, not the workload.
            </p>
            <div className="mt-6 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.18em] text-[#f0e7d5]/60">
              <span className="size-1.5 rounded-full bg-[var(--color-accent)]" />
              {time} · London
            </div>
          </div>

          {cols.map((c) => (
            <div key={c.title} className="md:col-span-2">
              <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#f0e7d5]/50">
                {c.title}
              </div>
              <ul className="mt-4 space-y-2 text-sm">
                {c.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      data-cursor="hover"
                      className="group inline-flex items-center gap-2 text-[#f0e7d5]/85 hover:text-white"
                    >
                      <span className="block h-px w-0 bg-current transition-all duration-500 group-hover:w-4" />
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-start justify-between gap-4 border-t border-white/10 py-6 font-mono text-[10px] uppercase tracking-[0.18em] text-[#f0e7d5]/60 md:flex-row md:items-center">
          <div>© Nocturne Studio · {new Date().getFullYear()}</div>
          <div className="flex items-center gap-4">
            <a href="#" data-cursor="hover" className="hover:text-white">
              Privacy
            </a>
            <span>·</span>
            <a href="#" data-cursor="hover" className="hover:text-white">
              Terms
            </a>
            <span>·</span>
            <a href="#" data-cursor="hover" className="hover:text-white">
              Colophon
            </a>
          </div>
          <div className="flex items-center gap-2">
            <span>Made with care.</span>
            <span className="size-1.5 rounded-full bg-[var(--color-accent)]" />
          </div>
        </div>
      </div>
    </footer>
  );
}
