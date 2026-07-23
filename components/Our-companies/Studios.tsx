"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

function useInView(threshold = 0.1) {
  const ref = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

/* ── Icon canvas types ── */
type IconType = "video" | "audio" | "photo" | "edit" | "motion" | "live";
type CanvasContextWithRoundRect = CanvasRenderingContext2D & {
  roundRect(
    x: number,
    y: number,
    width: number,
    height: number,
    radius: number,
  ): void;
};

function drawVideo(ctx: CanvasRenderingContext2D, t: number, h: boolean) {
  const s = 48;
  ctx.clearRect(0, 0, s, s);
  const a = h ? 0.9 : 0.55;
  ctx.fillStyle = `rgba(245,196,0,${a * 0.3})`;
  ctx.beginPath();
  (ctx as CanvasContextWithRoundRect).roundRect(4, 14, 28, 20, 3);
  ctx.fill();
  ctx.strokeStyle = `rgba(245,196,0,${a})`;
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  (ctx as CanvasContextWithRoundRect).roundRect(4, 14, 28, 20, 3);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(18, 24, 6, 0, Math.PI * 2);
  ctx.strokeStyle = `rgba(245,196,0,${a})`;
  ctx.lineWidth = 1.2;
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(18, 24, 3, 0, Math.PI * 2);
  ctx.fillStyle = `rgba(245,196,0,${a * 0.5})`;
  ctx.fill();
  const pulse = 0.5 + 0.5 * Math.sin(t * 3);
  ctx.fillStyle = `rgba(245,196,0,${a * (0.5 + pulse * 0.5)})`;
  ctx.beginPath();
  ctx.moveTo(36, 19);
  ctx.lineTo(44, 24);
  ctx.lineTo(36, 29);
  ctx.closePath();
  ctx.fill();
  ctx.beginPath();
  ctx.arc(38, 11, 3, 0, Math.PI * 2);
  ctx.fillStyle = `rgba(245,196,0,${pulse * a})`;
  ctx.fill();
}

function drawAudio(ctx: CanvasRenderingContext2D, t: number, h: boolean) {
  const s = 48;
  ctx.clearRect(0, 0, s, s);
  const a = h ? 0.9 : 0.55;
  const bars = [6, 9, 14, 10, 6, 9, 13, 7, 5, 10];
  bars.forEach((bh, i) => {
    const wave = Math.sin(t * 4 + i * 0.7) * (h ? 4 : 1.5);
    const hh = bh + wave;
    const x = 4 + i * 4.2;
    ctx.fillStyle = `rgba(245,196,0,${a * (0.4 + Math.abs(wave) * 0.1)})`;
    ctx.beginPath();
    (ctx as CanvasContextWithRoundRect).roundRect(x, 24 - hh / 2, 3, hh, 1.5);
    ctx.fill();
  });
  ctx.strokeStyle = `rgba(245,196,0,${a})`;
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.arc(24, 10, 5, 0, Math.PI * 2);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(24, 15);
  ctx.lineTo(24, 20);
  ctx.stroke();
}

function drawPhoto(ctx: CanvasRenderingContext2D, t: number, h: boolean) {
  const s = 48;
  ctx.clearRect(0, 0, s, s);
  const a = h ? 0.9 : 0.55;
  ctx.strokeStyle = `rgba(245,196,0,${a})`;
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  (ctx as CanvasContextWithRoundRect).roundRect(4, 12, 40, 28, 4);
  ctx.stroke();
  ctx.fillStyle = `rgba(245,196,0,${a * 0.15})`;
  ctx.beginPath();
  (ctx as CanvasContextWithRoundRect).roundRect(4, 12, 40, 28, 4);
  ctx.fill();
  ctx.beginPath();
  (ctx as CanvasContextWithRoundRect).roundRect(16, 8, 16, 6, 2);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(24, 26, 9, 0, Math.PI * 2);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(24, 26, 5, 0, Math.PI * 2);
  ctx.fillStyle = `rgba(245,196,0,${a * 0.3})`;
  ctx.fill();
  const flash = Math.max(0, Math.sin(t * 1.2)) * 0.3;
  ctx.beginPath();
  ctx.arc(24, 26, 9, 0, Math.PI * 2);
  ctx.fillStyle = `rgba(245,196,0,${flash * a})`;
  ctx.fill();
}

function drawEdit(ctx: CanvasRenderingContext2D, t: number, h: boolean) {
  const s = 48;
  ctx.clearRect(0, 0, s, s);
  const a = h ? 0.9 : 0.55;
  [12, 20, 28, 36].forEach((y, i) => {
    ctx.fillStyle = `rgba(255,255,255,${a * 0.1})`;
    ctx.beginPath();
    (ctx as CanvasContextWithRoundRect).roundRect(4, y, 40, 5, 2);
    ctx.fill();
    const clipW = 8 + i * 4;
    const clipX = 4 + (Math.sin(t * 0.8 + i) * 0.5 + 0.5) * (32 - clipW);
    ctx.fillStyle = `rgba(245,196,0,${a * (0.5 + i * 0.1)})`;
    ctx.beginPath();
    (ctx as CanvasContextWithRoundRect).roundRect(clipX, y, clipW, 5, 2);
    ctx.fill();
  });
  const ph = 4 + ((t * 0.5) % 1) * 40;
  ctx.strokeStyle = `rgba(245,196,0,${a})`;
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(ph, 8);
  ctx.lineTo(ph, 42);
  ctx.stroke();
  ctx.fillStyle = `rgba(245,196,0,${a})`;
  ctx.beginPath();
  ctx.moveTo(ph - 3, 8);
  ctx.lineTo(ph + 3, 8);
  ctx.lineTo(ph, 12);
  ctx.closePath();
  ctx.fill();
}

function drawMotion(ctx: CanvasRenderingContext2D, t: number, h: boolean) {
  const s = 48;
  ctx.clearRect(0, 0, s, s);
  const a = h ? 0.9 : 0.55;
  const cx = 24,
    cy = 24;
  [14, 9, 5].forEach((r, i) => {
    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate(t * (1 + i * 0.5) + (i * Math.PI) / 3);
    ctx.strokeStyle = `rgba(245,196,0,${a * (0.4 + i * 0.15)})`;
    ctx.lineWidth = 1 + i * 0.3;
    ctx.setLineDash([3, 4]);
    ctx.beginPath();
    ctx.arc(0, 0, r, 0, Math.PI * 2);
    ctx.stroke();
    ctx.setLineDash([]);
    ctx.beginPath();
    ctx.arc(r, 0, 1.5, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(245,196,0,${a})`;
    ctx.fill();
    ctx.restore();
  });
  ctx.beginPath();
  ctx.arc(cx, cy, 3, 0, Math.PI * 2);
  ctx.fillStyle = `rgba(245,196,0,${a})`;
  ctx.fill();
}

function drawLive(ctx: CanvasRenderingContext2D, t: number, h: boolean) {
  const s = 48;
  ctx.clearRect(0, 0, s, s);
  const a = h ? 0.9 : 0.55;
  const cx = 12,
    cy = 36;
  [1, 2, 3, 4].forEach((i) => {
    const r = i * 6;
    const pulse = 0.5 + 0.5 * Math.sin(t * 2 - i * 0.4);
    ctx.strokeStyle = `rgba(245,196,0,${a * (h ? 0.15 : 0.07) * pulse + a * 0.05})`;
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.arc(cx, cy, r, -Math.PI * 0.7, -Math.PI * 0.1);
    ctx.stroke();
  });
  ctx.fillStyle = `rgba(245,196,0,${a * 0.2})`;
  ctx.beginPath();
  (ctx as CanvasContextWithRoundRect).roundRect(22, 8, 22, 14, 3);
  ctx.fill();
  ctx.strokeStyle = `rgba(245,196,0,${a})`;
  ctx.lineWidth = 1;
  ctx.beginPath();
  (ctx as CanvasContextWithRoundRect).roundRect(22, 8, 22, 14, 3);
  ctx.stroke();
  const livePulse = 0.5 + 0.5 * Math.sin(t * 3);
  ctx.beginPath();
  ctx.arc(27, 15, 2.5, 0, Math.PI * 2);
  ctx.fillStyle = `rgba(245,196,0,${livePulse * a})`;
  ctx.fill();
  ctx.fillStyle = `rgba(245,196,0,${a})`;
  ctx.font = "bold 7px monospace";
  ctx.fillText("LIVE", 31, 18);
  ctx.strokeStyle = `rgba(245,196,0,${a * 0.6})`;
  ctx.lineWidth = 1.2;
  ctx.beginPath();
  ctx.moveTo(24, 28);
  ctx.lineTo(24, 38);
  ctx.lineTo(18, 44);
  ctx.moveTo(24, 38);
  ctx.lineTo(30, 44);
  ctx.stroke();
  ctx.beginPath();
  (ctx as CanvasContextWithRoundRect).roundRect(18, 22, 12, 8, 2);
  ctx.stroke();
}

const DRAW_FNS: Record<
  IconType,
  (ctx: CanvasRenderingContext2D, t: number, h: boolean) => void
> = {
  video: drawVideo,
  audio: drawAudio,
  photo: drawPhoto,
  edit: drawEdit,
  motion: drawMotion,
  live: drawLive,
};

/* ── Animated icon component ── */
function ServiceIcon({ type }: { type: IconType }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const hoveredRef = useRef(false);
  const tRef = useRef(0);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const cv = canvasRef.current;
    if (!cv) return;
    const ctx = cv.getContext("2d");
    if (!ctx) return;

    const loop = () => {
      tRef.current += hoveredRef.current ? 0.022 : 0.01;
      DRAW_FNS[type](ctx, tRef.current, hoveredRef.current);
      rafRef.current = requestAnimationFrame(loop);
    };

    rafRef.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(rafRef.current);
  }, [type]);

  return (
    <canvas
      ref={canvasRef}
      width={48}
      height={48}
      aria-hidden="true"
      style={{ display: "block", width: 48, height: 48 }}
      /* expose hovered state via ref so no re-render needed */
      onMouseEnter={() => {
        hoveredRef.current = true;
      }}
      onMouseLeave={() => {
        hoveredRef.current = false;
      }}
    />
  );
}

/* ── Service card ── */
function ServiceCard({
  number,
  name,
  detail,
  type,
  inView,
  delay,
}: {
  number: string;
  name: string;
  detail: string;
  type: IconType;
  inView: boolean;
  delay: number;
}) {
  const [hovered, setHovered] = useState(false);
  const iconRef = useRef<{ setHovered: (v: boolean) => void }>(null);

  return (
    <div
      className="group relative bg-[#1A1A1A] p-8 flex flex-col gap-5 transition-colors duration-300 hover:bg-[#1f1f1f]"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(50px)",
        transition: `opacity 0.85s ease ${delay}s, transform 0.85s ease ${delay}s`,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Top row */}
      <div className="flex items-center justify-between">
        <span
          className="text-[10px] font-mono transition-colors duration-300"
          style={{
            color: hovered ? "rgba(245,196,0,0.5)" : "rgba(255,255,255,0.15)",
          }}
        >
          {number}
        </span>
        <svg
          className="w-4 h-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          style={{
            color: "rgba(245,196,0,0.5)",
            opacity: hovered ? 1 : 0,
            transform: hovered ? "translate(0,0)" : "translate(4px,-4px)",
            transition: "all 0.3s",
          }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
          />
        </svg>
      </div>

      {/* Animated icon — pass hovered via data attr trick */}
      <div
        onMouseEnter={() => {
          const cv = document.querySelector(
            `[data-icon="${type}${number}"]`,
          ) as HTMLCanvasElement;
          if (cv) cv.dispatchEvent(new MouseEvent("mouseenter"));
        }}
      >
        <canvas
          data-icon={`${type}${number}`}
          id={`icon-${type}-${number}`}
          width={48}
          height={48}
          aria-hidden="true"
          style={{ display: "block", width: 48, height: 48 }}
        />
      </div>

      {/* Gold bar */}
      <div
        className="h-[2px] bg-[#F5C400] transition-all duration-500"
        style={{
          width: hovered ? "44px" : "24px",
          opacity: hovered ? 1 : 0.3,
        }}
      />

      {/* Text */}
      <div>
        <h3 className="text-white text-base font-bold leading-snug tracking-tight mb-2">
          {name}
        </h3>
        <p
          className="text-xs leading-relaxed transition-colors duration-300"
          style={{
            color: hovered ? "rgba(255,255,255,0.5)" : "rgba(255,255,255,0.35)",
          }}
        >
          {detail}
        </p>
      </div>
    </div>
  );
}

const services = [
  {
    number: "01",
    name: "Video Production",
    detail: "Corporate · Documentary · Advertising",
    type: "video" as IconType,
  },
  {
    number: "02",
    name: "Audio Production & Podcast Recording",
    detail: "Studio-grade sound for every format",
    type: "audio" as IconType,
  },
  {
    number: "03",
    name: "Photography",
    detail: "Commercial · Editorial · Event",
    type: "photo" as IconType,
  },
  {
    number: "04",
    name: "Post-Production & Editing",
    detail: "Colour · Cut · Sound Design · Delivery",
    type: "edit" as IconType,
  },
  {
    number: "05",
    name: "Motion Graphics & Animation",
    detail: "2D · 3D · Title Sequences · Brand Motion",
    type: "motion" as IconType,
  },
  {
    number: "06",
    name: "Live Event Coverage",
    detail: "Multi-camera · Live Streaming · Highlights",
    type: "live" as IconType,
  },
];

export default function Studios() {
  const { ref, inView } = useInView(0.1);

  /* ── Run all icon animations ── */
  useEffect(() => {
    const rafs: number[] = [];
    const ts: number[] = services.map(() => 0);
    const hovered: boolean[] = services.map(() => false);

    const ctxs = services.map((s) => {
      const cv = document.getElementById(
        `icon-${s.type}-${s.number}`,
      ) as HTMLCanvasElement | null;
      if (!cv) return null;
      const ctx = cv.getContext("2d");

      cv.addEventListener("mouseenter", () => {
        hovered[services.indexOf(s)] = true;
      });
      cv.addEventListener("mouseleave", () => {
        hovered[services.indexOf(s)] = false;
      });

      // bubble from parent card
      const card = cv.closest(".group");
      if (card) {
        card.addEventListener("mouseenter", () => {
          hovered[services.indexOf(s)] = true;
        });
        card.addEventListener("mouseleave", () => {
          hovered[services.indexOf(s)] = false;
        });
      }

      return ctx;
    });

    function loop() {
      services.forEach((s, i) => {
        const ctx = ctxs[i];
        if (!ctx) return;
        ts[i] += hovered[i] ? 0.022 : 0.01;
        DRAW_FNS[s.type](ctx, ts[i], hovered[i]);
      });
      const raf = requestAnimationFrame(loop);
      rafs.push(raf);
    }

    const raf = requestAnimationFrame(loop);
    rafs.push(raf);

    return () => rafs.forEach(cancelAnimationFrame);
  }, []);

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      id="studios"
      className="relative bg-[#1A1A1A] py-28 px-6 scroll-mt-20 overflow-hidden"
    >
      {/* Watermark */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 font-black text-white/[0.018] leading-none select-none pointer-events-none tracking-tighter hidden lg:block"
        style={{
          fontSize: "18vw",
          opacity: inView ? 1 : 0,
          transform: inView
            ? "translateY(-50%) translateX(0)"
            : "translateY(-50%) translateX(60px)",
          transition: "opacity 1.6s ease 0.2s, transform 1.6s ease 0.2s",
        }}
        aria-hidden="true"
      >
        STUDIOS
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16 items-end">
          {/* Left */}
          <div
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? "translateX(0)" : "translateX(-70px)",
              transition: "opacity 1.1s ease, transform 1.1s ease",
            }}
          >
            <div className="inline-flex items-center gap-3 mb-7">
              <span className="text-white/20 text-[10px] font-mono tracking-widest">
                01 /
              </span>
              <span className="text-[#F5C400] text-[10px] font-bold tracking-[0.3em] uppercase">
                HH Media Studios
              </span>
            </div>

            <h2 className="font-display text-4xl sm:text-5xl lg:text-[52px] font-black text-white leading-[0.95] tracking-tight">
              We make things
              <br />
              look and sound
              <br />
              <span
                className="text-[#F5C400]"
                style={{ textShadow: "0 0 80px rgba(245,196,0,0.15)" }}
              >
                extraordinary.
              </span>
            </h2>
          </div>

          {/* Right */}
          <div
            className="flex flex-col gap-5 lg:pb-1"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? "translateX(0)" : "translateX(70px)",
              transition: "opacity 1.1s ease 0.15s, transform 1.1s ease 0.15s",
            }}
          >
            <p className="text-white/50 text-base leading-relaxed">
              HHMG's full-service production arm delivering end-to-end video,
              audio, and content creation for brands, nonprofits, government
              agencies, and media organisations.
            </p>
            <p className="text-white/50 text-base leading-relaxed">
              From concept to final cut, we are with you every step of the way.
            </p>

            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 w-fit mt-2"
            >
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-[#F5C400]/40 bg-[#F5C400]/10 group-hover:bg-[#F5C400] transition-all duration-300 flex-shrink-0">
                <svg
                  className="w-4 h-4 text-[#F5C400] group-hover:text-[#1A1A1A] transition-colors duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </span>
              <span className="text-white text-sm font-semibold group-hover:text-[#F5C400] transition-colors duration-300">
                Book a Production Consultation
              </span>
            </Link>
          </div>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.06] border border-white/[0.06] rounded-2xl overflow-hidden">
          {services.map((s, i) => (
            <ServiceCard
              key={s.number}
              number={s.number}
              name={s.name}
              detail={s.detail}
              type={s.type}
              inView={inView}
              delay={0.3 + i * 0.1}
            />
          ))}
        </div>

        {/* Bottom divider */}
        <div
          className="mt-24 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent origin-left"
          style={{
            transform: inView ? "scaleX(1)" : "scaleX(0)",
            opacity: inView ? 1 : 0,
            transition: "transform 1.2s ease 1.2s, opacity 1.2s ease 1.2s",
          }}
        />
      </div>
    </section>
  );
}
