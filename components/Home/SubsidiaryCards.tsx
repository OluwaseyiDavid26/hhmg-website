"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

function TickNumber({ target, delay }: { target: number; delay: number }) {
  const [display, setDisplay] = useState(0);
  useEffect(() => {
    const t = setTimeout(() => {
      let c = 0;
      const iv = setInterval(() => {
        c += 1;
        setDisplay(c);
        if (c >= target) clearInterval(iv);
      }, 70);
    }, delay * 1000);
    return () => clearTimeout(t);
  }, [target, delay]);
  return (
    <span
      className="absolute bottom-5 right-5 text-[42px] font-black tabular-nums leading-none select-none pointer-events-none"
      style={{
        color: "rgba(255,255,255,0.04)",
        fontVariantNumeric: "tabular-nums",
      }}
    >
      {String(display).padStart(2, "0")}
    </span>
  );
}

/* ── Unique card canvas animations ── */
function useCardCanvas(
  type: "scanline" | "aperture" | "network" | "broadcast",
  hovered: boolean,
) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const cv = canvasRef.current;
    if (!cv) return;
    const parent = cv.parentElement;
    if (!parent) return;
    const ctx = cv.getContext("2d")!;

    const resize = () => {
      cv.width = parent.offsetWidth;
      cv.height = parent.offsetHeight;
    };
    resize();

    const W = () => cv.width;
    const H = () => cv.height;
    let t = 0;

    // Network nodes for card 3
    const nodes = [
      { x: 0.15, y: 0.3 },
      { x: 0.6, y: 0.2 },
      { x: 0.85, y: 0.5 },
      { x: 0.7, y: 0.8 },
      { x: 0.3, y: 0.75 },
      { x: 0.5, y: 0.55 },
    ];
    const edges = [
      [0, 1],
      [1, 2],
      [2, 3],
      [3, 4],
      [4, 0],
      [1, 5],
      [5, 3],
    ];

    function draw() {
      t += hovered ? 0.018 : 0.005;
      ctx.clearRect(0, 0, W(), H());

      if (type === "scanline") {
        // Film strip scan lines
        for (let i = 0; i < 6; i++) {
          const y = (t * 30 + (i * H()) / 6) % H();
          const alpha = hovered ? 0.08 : 0.025;
          const lg = ctx.createLinearGradient(0, y - 14, 0, y + 14);
          lg.addColorStop(0, "transparent");
          lg.addColorStop(0.5, `rgba(245,196,0,${alpha})`);
          lg.addColorStop(1, "transparent");
          ctx.fillStyle = lg;
          ctx.fillRect(0, y - 14, W(), 28);
        }
      }

      if (type === "aperture") {
        // Rotating aperture rings
        const cx = W() * 0.78,
          cy = H() * 0.62;
        [55, 85, 115].forEach((r, i) => {
          ctx.beginPath();
          ctx.arc(
            cx,
            cy,
            r,
            t + i * 0.45,
            t + i * 0.45 + Math.PI * (hovered ? 1.6 : 1.1),
          );
          ctx.strokeStyle = `rgba(245,196,0,${hovered ? 0.14 : 0.04})`;
          ctx.lineWidth = hovered ? 1.5 : 0.6;
          ctx.stroke();
        });
      }

      if (type === "network") {
        // Network node graph
        const alpha = hovered ? 0.18 : 0.06;
        edges.forEach(([a, b]) => {
          const n1 = nodes[a],
            n2 = nodes[b];
          ctx.beginPath();
          ctx.moveTo(n1.x * W(), n1.y * H());
          ctx.lineTo(n2.x * W(), n2.y * H());
          ctx.strokeStyle = `rgba(245,196,0,${alpha * 0.5})`;
          ctx.lineWidth = 0.6;
          ctx.stroke();
        });
        nodes.forEach((n, i) => {
          const pulse = 0.5 + 0.5 * Math.sin(t * 1.5 + i * 1.1);
          ctx.beginPath();
          ctx.arc(n.x * W(), n.y * H(), hovered ? 3 : 1.5, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(245,196,0,${(alpha * (0.5 + pulse * 0.5)).toFixed(3)})`;
          ctx.fill();
        });
      }

      if (type === "broadcast") {
        // Broadcast signal waves
        const cx = W() * 0.12,
          cy = H() * 0.88;
        [1, 2, 3, 4, 5].forEach((i) => {
          const r = i * 26;
          const alpha = hovered
            ? Math.max(0, 0.16 - i * 0.028)
            : Math.max(0, 0.05 - i * 0.009);
          if (alpha <= 0) return;
          ctx.beginPath();
          ctx.arc(cx, cy, r, -Math.PI * 0.65, -Math.PI * 0.05);
          ctx.strokeStyle = `rgba(245,196,0,${alpha})`;
          ctx.lineWidth = hovered ? 1.5 : 0.6;
          ctx.stroke();
        });
      }

      rafRef.current = requestAnimationFrame(draw);
    }

    rafRef.current = requestAnimationFrame(draw);
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
    };
  }, [type, hovered]);

  return canvasRef;
}

/* ── Section background canvas ── */
function SectionBgCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    let t = 0;

    const resize = () => {
      const cv = canvasRef.current;
      if (!cv) return;
      const parent = cv.parentElement;
      if (!parent) return;
      cv.width = parent.offsetWidth;
      cv.height = parent.offsetHeight;
    };

    function draw() {
      const cv = canvasRef.current;
      if (!cv) return;
      const ctx = cv.getContext("2d");
      if (!ctx) return;

      t += 0.007;
      const W = cv.width,
        H = cv.height;
      ctx.clearRect(0, 0, W, H);

      // Breathing gold orb — bottom right
      const pulse = 0.5 + 0.5 * Math.sin(t * 0.7);
      const g = ctx.createRadialGradient(
        W * 0.85,
        H * 0.88,
        0,
        W * 0.85,
        H * 0.88,
        W * 0.55,
      );
      g.addColorStop(0, `rgba(245,196,0,${(0.04 + pulse * 0.03).toFixed(3)})`);
      g.addColorStop(1, "transparent");
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, W, H);

      // Second orb — top left
      const g2 = ctx.createRadialGradient(
        W * 0.08,
        H * 0.1,
        0,
        W * 0.08,
        H * 0.1,
        W * 0.3,
      );
      g2.addColorStop(
        0,
        `rgba(245,196,0,${(0.025 + pulse * 0.015).toFixed(3)})`,
      );
      g2.addColorStop(1, "transparent");
      ctx.fillStyle = g2;
      ctx.fillRect(0, 0, W, H);

      // Drifting diagonal gold lines
      const spacing = 44;
      const offset = (t * 7) % spacing;
      ctx.strokeStyle = "rgba(245,196,0,0.035)";
      ctx.lineWidth = 0.5;
      for (let x = -H + offset; x < W + H; x += spacing) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x + H, H);
        ctx.stroke();
      }

      rafRef.current = requestAnimationFrame(draw);
    }

    resize();
    window.addEventListener("resize", resize);
    rafRef.current = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
}

/* ── Individual card component ── */
type CardType = "scanline" | "aperture" | "network" | "broadcast";

function SubCard({
  label,
  tagline,
  description,
  href,
  cta,
  icon,
  index,
  inView,
  delay,
  animType,
}: {
  label: string;
  tagline: string;
  description: string;
  href: string;
  cta: string;
  icon: React.ReactNode;
  index: number;
  inView: boolean;
  delay: number;
  animType: CardType;
}) {
  const [hovered, setHovered] = useState(false);
  const cardCanvasRef = useCardCanvas(animType, hovered);

  return (
    <div
      className="group relative bg-[#1A1A1A] p-7 flex flex-col overflow-hidden"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView
          ? "translateY(0) rotateX(0deg)"
          : "translateY(40px) rotateX(10deg)",
        transformOrigin: "bottom center",
        transition: `opacity 0.65s cubic-bezier(0.22,1,0.36,1) ${delay}s, transform 0.65s cubic-bezier(0.22,1,0.36,1) ${delay}s`,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Unique card animation canvas */}
      <canvas
        ref={cardCanvasRef}
        aria-hidden="true"
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{
          zIndex: 0,
          opacity: hovered ? 1 : 0.4,
          transition: "opacity 0.5s ease",
        }}
      />

      {/* Gold left rule */}
      <div
        className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#F5C400] pointer-events-none"
        style={{
          transform: hovered ? "scaleY(1)" : "scaleY(0)",
          transformOrigin: "top",
          transition: "transform 0.4s cubic-bezier(0.16,1,0.3,1)",
          zIndex: 2,
        }}
      />

      {/* Bottom glow */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px pointer-events-none"
        style={{
          background: hovered
            ? "linear-gradient(90deg, transparent, rgba(245,196,0,0.55), transparent)"
            : "linear-gradient(90deg, transparent, rgba(245,196,0,0), transparent)",
          transition: "background 0.3s",
          zIndex: 2,
        }}
      />

      {/* Corner accent top-right */}
      <div
        className="absolute top-0 right-0 w-5 h-5 pointer-events-none"
        style={{
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.3s",
          zIndex: 2,
        }}
      >
        <div className="absolute top-0 right-0 w-4 h-px bg-[#F5C400]/60" />
        <div className="absolute top-0 right-0 w-px h-4 bg-[#F5C400]/60" />
      </div>

      {/* Card content */}
      <div className="relative" style={{ zIndex: 1 }}>
        {/* Icon */}
        <div
          className="w-11 h-11 border border-[#F5C400]/30 text-[#F5C400] flex items-center justify-center mb-6"
          style={
            {
              opacity: inView ? 1 : 0,
              transform: inView
                ? "scale(1) translateY(0)"
                : "scale(0.5) translateY(6px)",
              transition: `opacity 0.4s cubic-bezier(0.34,1.56,0.64,1) ${delay + 0.2}s, transform 0.4s cubic-bezier(0.34,1.56,0.64,1) ${delay + 0.2}s`,
              borderColor: hovered
                ? "rgba(245,196,0,0.8)"
                : "rgba(245,196,0,0.3)",
              background: hovered ? "rgba(245,196,0,0.06)" : "transparent",
              transition2: "border-color 0.25s, background 0.25s",
            } as React.CSSProperties
          }
        >
          <div
            style={{
              transform: hovered ? "scale(1.12)" : "scale(1)",
              transition: "transform 0.25s cubic-bezier(0.34,1.56,0.64,1)",
            }}
          >
            {icon}
          </div>
        </div>

        <h3 className="text-white font-semibold text-sm mb-1.5 leading-snug">
          {label}
        </h3>
        <p className="text-[#F5C400]/70 text-xs font-medium mb-4 tracking-wide">
          {tagline}
        </p>
        <p className="text-white/45 text-sm leading-relaxed mb-7">
          {description}
        </p>

        <Link
          href={href}
          className="inline-flex items-center gap-2 text-xs font-semibold"
          style={{
            color: hovered ? "#F5C400" : "rgba(255,255,255,0.35)",
            transition: "color 0.2s",
          }}
        >
          {cta}
          <svg
            className="w-3 h-3"
            style={{
              transform: hovered ? "translateX(3px)" : "translateX(0)",
              transition: "transform 0.2s",
            }}
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
        </Link>
      </div>

      {/* Watermark number */}
      {inView && <TickNumber target={index + 1} delay={delay + 0.3} />}
    </div>
  );
}

const subsidiaries = [
  {
    id: "studios",
    label: "HH Media Studios",
    tagline: "Production that performs.",
    description:
      "Full-service video, audio, and content creation for brands, NGOs, and media organisations. From concept to final cut.",
    href: "/companies#studios",
    cta: "View Studios",
    animType: "scanline" as CardType,
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9A2.25 2.25 0 0013.5 5.25h-9A2.25 2.25 0 002.25 7.5v9A2.25 2.25 0 004.5 18.75z"
        />
      </svg>
    ),
  },
  {
    id: "rentals",
    label: "HH Media Rentals",
    tagline: "Equipment that performs.",
    description:
      "Professional-grade cameras, lighting, and audio gear for productions of every scale — without the cost of ownership.",
    href: "/companies#rentals",
    cta: "Browse Equipment",
    animType: "aperture" as CardType,
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z"
        />
      </svg>
    ),
  },
  {
    id: "creators",
    label: "HH Creators Platform",
    tagline: "Community for the next generation.",
    description:
      "A membership platform connecting African content creators with tools, training, industry networks, and monetisation pathways.",
    href: "/companies#creators",
    cta: "Join the Platform",
    animType: "network" as CardType,
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
        />
      </svg>
    ),
  },
  {
    id: "production",
    label: "HH Media & Production Co.",
    tagline: "Original content. African perspectives.",
    description:
      "The Group's original content and IP subsidiary — developing, producing, and distributing television, digital, and branded content.",
    href: "/companies#production",
    cta: "Explore Productions",
    animType: "broadcast" as CardType,
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h1.5C5.496 19.5 6 18.996 6 18.375m-3.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-1.5A1.125 1.125 0 0118 18.375M20.625 4.5H3.375m17.25 0c.621 0 1.125.504 1.125 1.125M20.625 4.5h-1.5C18.504 4.5 18 5.004 18 5.625m3.75 0v1.5c0 .621-.504 1.125-1.125 1.125M3.375 4.5c-.621 0-1.125.504-1.125 1.125M3.375 4.5h1.5C5.496 4.5 6 5.004 6 5.625m-3.75 0v1.5c0 .621.504 1.125 1.125 1.125m0 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m1.5-3.75C5.496 8.25 6 8.754 6 9.375v1.5m0-5.25v5.25m0-5.25C6 5.004 6.504 4.5 7.125 4.5h9.75c.621 0 1.125.504 1.125 1.125m1.125 2.625h1.5m-1.5 0A1.125 1.125 0 0118 7.125v1.5"
        />
      </svg>
    ),
  },
];

export default function SubsidiaryCards() {
  const { ref, inView } = useInView(0.15);

  return (
    <section
      className="bg-[#1A1A1A] py-24 px-6 relative overflow-hidden"
      ref={ref}
    >
      {/* Animated section background */}
      <SectionBgCanvas />

      {/* Noise texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          zIndex: 1,
          opacity: 0.16,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "160px 160px",
        }}
      />

      {/* Gold left edge rule */}
      <div
        className="absolute left-0 top-0 bottom-0 w-px pointer-events-none"
        style={{
          zIndex: 1,
          background:
            "linear-gradient(to bottom, transparent 5%, rgba(245,196,0,0.2) 30%, rgba(245,196,0,0.2) 70%, transparent 95%)",
        }}
      />

      <div className="max-w-6xl mx-auto relative" style={{ zIndex: 2 }}>
        {/* Section header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
          <div>
            <div
              className="inline-flex items-center gap-3 mb-4"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(12px)",
                transition: "opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s",
              }}
            >
              <div
                className="h-[2px] bg-[#F5C400]"
                style={{
                  width: inView ? "32px" : "0px",
                  transition: "width 0.7s ease 0.1s",
                }}
              />
              <span className="text-[#F5C400] text-xs font-semibold tracking-[0.25em] uppercase">
                Our Companies
              </span>
            </div>

            <h2
              className="font-display text-3xl sm:text-4xl font-bold text-white leading-tight"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(16px)",
                transition:
                  "opacity 0.8s ease 0.25s, transform 0.8s ease 0.25s",
              }}
            >
              Four Companies.{" "}
              <span
                style={{
                  color: "transparent",
                  WebkitTextStroke: "1px rgba(255,255,255,0.25)",
                }}
              >
                One Ecosystem.
              </span>
            </h2>
          </div>

          <Link
            href="/companies"
            className="inline-flex items-center gap-2 text-white/40 text-sm hover:text-[#F5C400] flex-shrink-0 group"
            style={{
              opacity: inView ? 1 : 0,
              transition: "opacity 0.8s ease 0.35s, color 0.2s",
            }}
          >
            View All Companies
            <svg
              className="w-4 h-4 group-hover:translate-x-1"
              style={{ transition: "transform 0.2s" }}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>

        {/* Cards grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.07]"
          style={{ perspective: "1200px" }}
        >
          {subsidiaries.map((sub, i) => (
            <SubCard
              key={sub.id}
              label={sub.label}
              tagline={sub.tagline}
              description={sub.description}
              href={sub.href}
              cta={sub.cta}
              icon={sub.icon}
              index={i}
              inView={inView}
              delay={0.4 + i * 0.12}
              animType={sub.animType}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
