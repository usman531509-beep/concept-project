"use client";

import { motion, useScroll, useTransform, useMotionValueEvent } from "motion/react";
import Link from "next/link";
import { useState } from "react";

const links = [
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#expertise" },
  { label: "Lab", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const { scrollY } = useScroll();
  const [overLight, setOverLight] = useState(false);
  const [open, setOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (v) => {
    // Hero is roughly 100vh dark; after that, content is light.
    if (typeof window === "undefined") return;
    setOverLight(v > window.innerHeight * 0.85);
  });

  const top = useTransform(scrollY, [0, 80], [0, 0]);
  const fg = overLight ? "#0a0a0a" : "#ffffff";

  return (
    <motion.header
      style={{ top, color: fg }}
      className="fixed inset-x-0 z-50 flex items-center justify-between px-6 py-5 md:px-10"
    >
      {/* Wordmark */}
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
        className="flex items-center"
      >
        <Link
          href="/"
          data-cursor="hover"
          className="group flex items-baseline gap-0.5 font-display text-2xl font-semibold tracking-[-0.04em]"
        >
          <span>NOCTURNE</span>
          <span className="text-[var(--color-accent)] -translate-y-1.5 text-xl">✱</span>
        </Link>
      </motion.div>

      {/* Center links */}
      <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-14 md:flex">
        {links.map((l, i) => (
          <motion.a
            key={l.href}
            href={l.href}
            data-cursor="hover"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
              delay: 0.5 + i * 0.07,
            }}
            className="relative text-[15px] font-medium tracking-tight transition-opacity hover:opacity-100"
          >
            {l.label}
            <span
              className="absolute -bottom-1 left-0 h-px w-0 bg-current transition-all duration-500 group-hover:w-full"
              aria-hidden
            />
          </motion.a>
        ))}
      </nav>

      {/* Contact */}
      <motion.a
        href="#contact"
        data-cursor="hover"
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.8 }}
        className="hidden text-[15px] font-medium md:inline-flex"
      >
        Contact
      </motion.a>

      <button
        aria-label="Menu"
        onClick={() => setOpen((v) => !v)}
        className="grid size-10 place-items-center rounded-full border border-current/20 md:hidden"
        style={{ borderColor: `${fg}33` }}
      >
        <span className="relative block h-3 w-4">
          <span
            className={`absolute left-0 top-0 h-px w-full bg-current transition ${open ? "translate-y-1.5 rotate-45" : ""}`}
          />
          <span
            className={`absolute bottom-0 left-0 h-px w-full bg-current transition ${open ? "-translate-y-1.5 -rotate-45" : ""}`}
          />
        </span>
      </button>

      {open ? (
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute left-4 right-4 top-16 rounded-3xl border bg-[var(--color-bg)] p-4 shadow-2xl md:hidden"
          style={{ borderColor: "rgba(10,10,10,0.1)" }}
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block rounded-2xl px-4 py-3 text-lg text-[var(--color-fg)] hover:bg-black/5"
            >
              {l.label}
            </a>
          ))}
        </motion.nav>
      ) : null}
    </motion.header>
  );
}
