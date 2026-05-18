"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";

type Props = {
  text: string;
  className?: string;
  wordClassName?: string;
  delay?: number;
  stagger?: number;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  once?: boolean;
};

export default function SplitText({
  text,
  className,
  wordClassName,
  delay = 0,
  stagger = 0.03,
  as = "h2",
  once = true,
}: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once, margin: "-10% 0px -10% 0px" });
  const Comp = motion[as] as typeof motion.h2;

  const words = text.split(" ");

  return (
    <Comp ref={ref as never} className={className} aria-label={text}>
      {words.map((word, wi) => (
        <span
          key={wi}
          className={`inline-block overflow-hidden align-bottom ${wordClassName ?? ""}`}
        >
          <motion.span
            className="inline-block"
            initial={{ y: "110%", opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : undefined}
            transition={{
              duration: 0.9,
              ease: [0.16, 1, 0.3, 1],
              delay: delay + wi * stagger,
            }}
          >
            {word}
            {wi < words.length - 1 ? " " : ""}
          </motion.span>
        </span>
      ))}
    </Comp>
  );
}
