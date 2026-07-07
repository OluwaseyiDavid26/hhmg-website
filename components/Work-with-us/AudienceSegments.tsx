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

/* ── Background: four converging signal paths from corners to center ──
   Corner order (0..3) is top-left, top-right, bottom-left, bottom-right,
   which lines up with the 2x2 card grid below. Hovering a card boosts
   that exact corner's beam, so the background reacts to which audience
   you're looking at instead of just running ambient in the back. */
function BgCanvas({
  active,
  hoverIndexRef,
}: {
  active: boolean;
  hoverIndexRef: React.RefObject<number | null>;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    if (!active) return;
    const cv = canvasRef.current;
    if (!cv) return;
    const parent = cv.parentElement;
    if (!parent) return;
    const ctx = cv.getContext("2d");
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let t = 0;
    const resize = () => {
      cv.width = parent.offsetWidth * dpr;
      cv.height = parent.offsetHeight * dpr;
      cv.style.width = `${parent.offsetWidth}px`;
      cv.style.height = `${parent.offsetHeight}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    type Particle = {
      x: number;
      y: number;
      vx: number;
      vy: number;
      r: number;
      a: number;
      gold: boolean;
    };
    const W0 = () => cv.width / dpr;
    const H0 = () => cv.height / dpr;
    const particles: Particle[] = Array.from({ length: 32 }, () => ({
      x: Math.random() * W0(),
      y: Math.random() * H0(),
      vx: (Math.random() - 0.5) * 0.14,
      vy: (Math.random() - 0.5) * 0.14,
      r: Math.random() * 1.1 + 0.3,
      a: Math.random() * 0.2 + 0.04,
      gold: Math.random() < 0.28,
    }));

    function frame() {
      if (!cv || !ctx) return;

      t += 0.009;
      const W = W0(),
        H = H0();
      const cx = W / 2,
        cy = H / 2;
      ctx.clearRect(0, 0, W, H);

      /* Center gold glow — where the 4 paths converge */
      const pulse = 0.5 + 0.5 * Math.sin(t * 0.8);
      const gC = ctx.createRadialGradient(
        cx,
        cy,
        0,
        cx,
        cy,
        Math.min(W, H) * 0.5,
      );
      gC.addColorStop(
        0,
        `rgba(245,196,0,${(0.04 + pulse * 0.025).toFixed(3)})`,
      );
      gC.addColorStop(1, "transparent");
      ctx.fillStyle = gC;
      ctx.fillRect(0, 0, W, H);

      const corners = [
        { x: 0, y: 0 },
        { x: W, y: 0 },
        { x: 0, y: H },
        { x: W, y: H },
      ];
      const boostIdx = hoverIndexRef.current;

      corners.forEach((corner, i) => {
        const boosted = i === boostIdx;
        const speed = boosted ? 0.34 : 0.12;
        const travel = (t * speed + i * 0.25) % 1;
        const px = corner.x + (cx - corner.x) * travel;
        const py = corner.y + (cy - corner.y) * travel;

        /* guide line — brightens for the boosted corner */
        ctx.strokeStyle = boosted
          ? "rgba(245,196,0,0.14)"
          : "rgba(245,196,0,0.035)";
        ctx.lineWidth = boosted ? 0.9 : 0.6;
        ctx.beginPath();
        ctx.moveTo(corner.x, corner.y);
        ctx.lineTo(cx, cy);
        ctx.stroke();

        /* traveling pulse dot along the line */
        const fade =
          travel < 0.1 ? travel / 0.1 : travel > 0.85 ? (1 - travel) / 0.15 : 1;
        const dotR = boosted ? 3.2 : 2.2;
        ctx.beginPath();
        ctx.arc(px, py, dotR, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(245,196,0,${(fade * (boosted ? 0.9 : 0.55)).toFixed(3)})`;
        ctx.fill();

        /* trailing glow */
        const glowR = boosted ? 30 : 18;
        const gT = ctx.createRadialGradient(px, py, 0, px, py, glowR);
        gT.addColorStop(
          0,
          `rgba(245,196,0,${(fade * (boosted ? 0.22 : 0.12)).toFixed(3)})`,
        );
        gT.addColorStop(1, "transparent");
        ctx.fillStyle = gT;
        ctx.beginPath();
        ctx.arc(px, py, glowR, 0, Math.PI * 2);
        ctx.fill();
      });

      /* Particles */
      particles.forEach((p) => {
        p.x = (p.x + p.vx + W) % W;
        p.y = (p.y + p.vy + H) % H;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.gold
          ? `rgba(245,196,0,${p.a})`
          : `rgba(255,255,255,${p.a * 0.4})`;
        ctx.fill();
      });

      /* Scanline */
      const scanY = (t * 26) % H;
      const sg = ctx.createLinearGradient(0, scanY - 10, 0, scanY + 10);
      sg.addColorStop(0, "transparent");
      sg.addColorStop(0.5, "rgba(245,196,0,0.012)");
      sg.addColorStop(1, "transparent");
      ctx.fillStyle = sg;
      ctx.fillRect(0, scanY - 10, W, 20);

      rafRef.current = requestAnimationFrame(frame);
    }

    if (prefersReducedMotion) {
      // Draw one clean static frame instead of looping.
      frame();
    } else {
      rafRef.current = requestAnimationFrame(frame);
    }

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
    };
  }, [active, hoverIndexRef]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
}

const SEGMENTS = [
  {
    id: "brands",
    channel: "CH \u00B7 01",
    tag: "HH Media Studios",
    title: "For Brands & Organisations",
    copy: "Need video, photography, or branded content? HH Media Studios is your production partner.",
    cta: "Start a Project",
    href: "/contact?type=production",
  },
  {
    id: "filmmakers",
    channel: "CH \u00B7 02",
    tag: "HH Media Rentals",
    title: "For Filmmakers & Productions",
    copy: "Looking for professional equipment without the cost of ownership? HH Media Rentals has your kit.",
    cta: "Browse Equipment",
    href: "/companies/rentals",
  },
  {
    id: "creators",
    channel: "CH \u00B7 03",
    tag: "HH Creators Platform",
    title: "For Content Creators",
    copy: "Ready to level up? Join the HH Creators Platform for training, community, and opportunities.",
    cta: "Join the Platform",
    href: "/companies/creators-platform",
  },
  {
    id: "investors",
    channel: "CH \u00B7 04",
    tag: "Hand Held Media Group",
    title: "For Investors & Partners",
    copy: "Interested in the HHMG opportunity? We are open to strategic partnerships and investor conversations.",
    cta: "Request a Pitch Deck",
    href: "/contact?type=investment",
  },
];

function SegmentCard({
  segment,
  index,
  inView,
  onHoverChange,
}: {
  segment: (typeof SEGMENTS)[number];
  index: number;
  inView: boolean;
  onHoverChange: (hovered: boolean) => void;
}) {
  const [hovered, setHovered] = useState(false);
  const delay = 0.15 + index * 0.13;

  const setHover = (v: boolean) => {
    setHovered(v);
    onHoverChange(v);
  };

  return (
    <div
      id={segment.id}
      className="group relative rounded-2xl p-8 sm:p-9 scroll-mt-28 overflow-hidden"
      style={{
        border: `1px solid ${hovered ? "rgba(245,196,0,0.3)" : "rgba(255,255,255,0.08)"}`,
        background: hovered
          ? "rgba(255,255,255,0.03)"
          : "rgba(255,255,255,0.02)",
        opacity: inView ? 1 : 0,
        transform: inView
          ? hovered
            ? "translateY(-6px) scale(1.01)"
            : "translateY(0) scale(1)"
          : "translateY(40px) scale(0.97)",
        transition: inView
          ? "transform 0.35s cubic-bezier(0.34,1.56,0.64,1), border-color 0.3s, background 0.3s"
          : `opacity 0.5s cubic-bezier(0.34,1.56,0.64,1) ${delay}s, transform 0.5s cubic-bezier(0.34,1.56,0.64,1) ${delay}s`,
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {/* Corner accent that draws in on hover */}
      <span
        className="absolute top-0 left-0 w-6 h-6 pointer-events-none"
        style={{ opacity: hovered ? 1 : 0, transition: "opacity 0.3s" }}
      >
        <span className="absolute top-0 left-0 w-4 h-px bg-[#F5C400]/50" />
        <span className="absolute top-0 left-0 w-px h-4 bg-[#F5C400]/50" />
      </span>
      <span
        className="absolute bottom-0 right-0 w-6 h-6 pointer-events-none"
        style={{ opacity: hovered ? 1 : 0, transition: "opacity 0.3s" }}
      >
        <span className="absolute bottom-0 right-0 w-4 h-px bg-[#F5C400]/50" />
        <span className="absolute bottom-0 right-0 w-px h-4 bg-[#F5C400]/50" />
      </span>

      <div className="flex items-start justify-between mb-6">
        <span
          className="text-[#F5C400] text-[11px] font-semibold tracking-[0.2em] uppercase"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateX(0)" : "translateX(-10px)",
            transition: `opacity 0.5s ease ${delay + 0.15}s, transform 0.5s ease ${delay + 0.15}s`,
          }}
        >
          {segment.tag}
        </span>
        <span
          className="text-white/25 text-[11px] font-mono tracking-wider tabular-nums"
          style={{
            transform: hovered ? "scale(1.08)" : "scale(1)",
            opacity: hovered ? 0.7 : 0.25,
            transition: "transform 0.25s, opacity 0.25s",
          }}
        >
          {segment.channel}
        </span>
      </div>

      <h3
        className="font-display text-white text-xl sm:text-2xl font-bold tracking-tight mb-3"
        style={{
          opacity: inView ? 1 : 0,
          transition: `opacity 0.6s ease ${delay + 0.1}s`,
        }}
      >
        {segment.title}
      </h3>

      <p
        className="text-white/60 text-sm sm:text-base leading-relaxed mb-8"
        style={{
          opacity: inView ? 1 : 0,
          transition: `opacity 0.6s ease ${delay + 0.18}s`,
        }}
      >
        {segment.copy}
      </p>

      <div
        style={{
          transform: hovered ? "translateX(6px)" : "translateX(0)",
          transition: "transform 0.25s cubic-bezier(0.34,1.56,0.64,1)",
        }}
      >
        <Link
          href={segment.href}
          className="inline-flex items-center gap-2 text-[#F5C400] text-sm font-semibold transition-colors duration-200 hover:text-white"
        >
          {segment.cta}
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
            aria-hidden="true"
            style={{
              transform: hovered ? "translateX(4px)" : "translateX(0)",
              transition: "transform 0.25s cubic-bezier(0.34,1.56,0.64,1)",
            }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}

export default function AudienceSegments() {
  const { ref, inView } = useInView(0.1);
  const hoverIndexRef = useRef<number | null>(null);

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="relative bg-[#1A1A1A] py-20 sm:py-24 px-6 overflow-hidden"
    >
      {/* Converging signal background */}
      <BgCanvas active={inView} hoverIndexRef={hoverIndexRef} />

      {/* Noise */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          zIndex: 1,
          opacity: 0.08,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "160px 160px",
        }}
      />

      {/* Section eyebrow + lead — gives the four cards a frame to sit in */}
      <div
        className="relative max-w-5xl mx-auto mb-12 sm:mb-14"
        style={{ zIndex: 10 }}
      >
        <div
          className="inline-flex items-center gap-2 mb-5"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(8px)",
            transition: "opacity 0.5s ease, transform 0.5s ease",
          }}
        ></div>
      </div>

      <div
        className="relative max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6"
        style={{ zIndex: 10 }}
      >
        {SEGMENTS.map((segment, i) => (
          <SegmentCard
            key={segment.id}
            segment={segment}
            index={i}
            inView={inView}
            onHoverChange={(hovered) => {
              hoverIndexRef.current = hovered ? i : null;
            }}
          />
        ))}
      </div>
    </section>
  );
}
