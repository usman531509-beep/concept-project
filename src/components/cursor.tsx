"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export default function Cursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { damping: 30, stiffness: 400, mass: 0.4 });
  const sy = useSpring(y, { damping: 30, stiffness: 400, mass: 0.4 });
  const [variant, setVariant] = useState<"default" | "hover" | "drag" | "text">(
    "default",
  );
  const [label, setLabel] = useState<string>("");
  const hasFine = useRef(true);

  useEffect(() => {
    if (typeof window === "undefined") return;
    hasFine.current = window.matchMedia("(hover: hover)").matches;
    if (!hasFine.current) return;

    const handleMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);

      const t = e.target as HTMLElement | null;
      if (!t) return;
      const interactive = t.closest(
        "a, button, [data-cursor], input, textarea, [role='button']",
      ) as HTMLElement | null;
      if (interactive) {
        const c = interactive.getAttribute("data-cursor");
        const lbl = interactive.getAttribute("data-cursor-label") || "";
        setLabel(lbl);
        if (c === "drag") setVariant("drag");
        else if (interactive.tagName === "INPUT" || interactive.tagName === "TEXTAREA")
          setVariant("text");
        else setVariant("hover");
      } else {
        setVariant("default");
        setLabel("");
      }
    };

    window.addEventListener("mousemove", handleMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMove);
  }, [x, y]);

  const size =
    variant === "hover" ? 56 : variant === "drag" ? 88 : variant === "text" ? 4 : 14;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[100] hidden md:block mix-blend-difference"
      style={{ x: sx, y: sy }}
    >
      <motion.div
        animate={{ width: size, height: size }}
        transition={{ type: "spring", damping: 24, stiffness: 320 }}
        className="-translate-x-1/2 -translate-y-1/2 rounded-full bg-white flex items-center justify-center"
      >
        {label && variant !== "default" ? (
          <span className="text-[10px] font-medium uppercase tracking-wider text-black">
            {label}
          </span>
        ) : null}
      </motion.div>
    </motion.div>
  );
}
