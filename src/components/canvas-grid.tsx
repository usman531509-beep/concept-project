"use client";

import { useEffect, useRef } from "react";

type Props = {
  className?: string;
  density?: number;
  dotColor?: string;
  glowColor?: string;
  lineColor?: string;
};

export default function CanvasGrid({
  className,
  density = 38,
  dotColor = "rgba(255,255,255,0.16)",
  glowColor = "rgba(225, 36, 26, 0.95)",
  lineColor = "rgba(255,255,255,0.05)",
}: Props) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number>(0);
  const mouse = useRef({ x: -9999, y: -9999, vx: 0, vy: 0 });
  const t = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = (canvas.width = canvas.offsetWidth * devicePixelRatio);
    let h = (canvas.height = canvas.offsetHeight * devicePixelRatio);
    ctx.scale(devicePixelRatio, devicePixelRatio);

    const handleResize = () => {
      w = canvas.width = canvas.offsetWidth * devicePixelRatio;
      h = canvas.height = canvas.offsetHeight * devicePixelRatio;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(devicePixelRatio, devicePixelRatio);
    };
    window.addEventListener("resize", handleResize);

    const handleMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const nx = e.clientX - rect.left;
      const ny = e.clientY - rect.top;
      mouse.current.vx = nx - mouse.current.x;
      mouse.current.vy = ny - mouse.current.y;
      mouse.current.x = nx;
      mouse.current.y = ny;
    };
    window.addEventListener("mousemove", handleMove, { passive: true });

    const render = () => {
      t.current += 0.008;
      const W = canvas.offsetWidth;
      const H = canvas.offsetHeight;
      ctx.clearRect(0, 0, W, H);

      const spacing = density;
      const cols = Math.ceil(W / spacing) + 1;
      const rows = Math.ceil(H / spacing) + 1;
      const mx = mouse.current.x;
      const my = mouse.current.y;
      const radius = 180;

      // Subtle grid lines
      ctx.strokeStyle = lineColor;
      ctx.lineWidth = 1;
      for (let i = 0; i < cols; i++) {
        ctx.beginPath();
        ctx.moveTo(i * spacing, 0);
        ctx.lineTo(i * spacing, H);
        ctx.stroke();
      }
      for (let j = 0; j < rows; j++) {
        ctx.beginPath();
        ctx.moveTo(0, j * spacing);
        ctx.lineTo(W, j * spacing);
        ctx.stroke();
      }

      // Dots that react to mouse
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x = i * spacing;
          const y = j * spacing;
          const wave =
            Math.sin((i + j) * 0.4 + t.current * 2) * 0.5 +
            Math.cos(i * 0.3 - t.current * 1.5) * 0.3;
          const dx = x - mx;
          const dy = y - my;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const influence = Math.max(0, 1 - dist / radius);
          const size = 0.8 + wave * 0.6 + influence * 3;

          if (influence > 0.05) {
            ctx.fillStyle = glowColor;
            ctx.globalAlpha = influence;
          } else {
            ctx.fillStyle = dotColor;
            ctx.globalAlpha = 0.4 + wave * 0.3;
          }
          ctx.beginPath();
          ctx.arc(x, y, size, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      ctx.globalAlpha = 1;

      rafRef.current = requestAnimationFrame(render);
    };
    rafRef.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, [density, dotColor, glowColor, lineColor]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{ width: "100%", height: "100%" }}
    />
  );
}
