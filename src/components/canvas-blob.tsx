"use client";

import { useEffect, useRef } from "react";

type Props = {
  className?: string;
  colors?: [string, string, string];
};

export default function CanvasBlob({
  className,
  colors = ["#e1241a", "#2a2a2a", "#3a3a3a"],
}: Props) {
  const ref = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let t = 0;
    const blobs = colors.map((c, i) => ({
      color: c,
      r: 220 + i * 30,
      ox: Math.random() * 1000,
      oy: Math.random() * 1000,
      sp: 0.0008 + i * 0.0004,
    }));

    const resize = () => {
      canvas.width = canvas.offsetWidth * devicePixelRatio;
      canvas.height = canvas.offsetHeight * devicePixelRatio;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(devicePixelRatio, devicePixelRatio);
    };
    resize();
    window.addEventListener("resize", resize);

    const noise = (x: number, y: number) => Math.sin(x) * Math.cos(y);

    const render = (now: number) => {
      t = now;
      const W = canvas.offsetWidth;
      const H = canvas.offsetHeight;
      ctx.clearRect(0, 0, W, H);
      ctx.globalCompositeOperation = "lighter";

      blobs.forEach((b) => {
        const x = W / 2 + noise(t * b.sp + b.ox, t * b.sp + b.oy) * (W * 0.25);
        const y =
          H / 2 + noise(t * b.sp + b.oy + 4, t * b.sp + b.ox + 7) * (H * 0.25);
        const grad = ctx.createRadialGradient(x, y, 0, x, y, b.r);
        grad.addColorStop(0, b.color + "cc");
        grad.addColorStop(0.4, b.color + "55");
        grad.addColorStop(1, "transparent");
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(x, y, b.r, 0, Math.PI * 2);
        ctx.fill();
      });

      ctx.globalCompositeOperation = "source-over";
      raf = requestAnimationFrame(render);
    };
    raf = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, [colors]);

  return (
    <canvas
      ref={ref}
      className={className}
      style={{ width: "100%", height: "100%", filter: "blur(60px)" }}
    />
  );
}
