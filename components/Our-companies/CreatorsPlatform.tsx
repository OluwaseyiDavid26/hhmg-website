
"use client";

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

/* ── Branch growth tree class ── */
class Branch {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  angle: number;
  len: number;
  depth: number;
  maxDepth: number;
  progress = 0;
  delay: number;
  children: Branch[] = [];
  isLeaf: boolean;
  swayPhase: number;

  constructor(
    x: number,
    y: number,
    angle: number,
    len: number,
    depth: number,
    maxDepth: number,
  ) {
    this.x1 = x;
    this.y1 = y;
    this.angle = angle;
    this.len = len;
    this.depth = depth;
    this.maxDepth = maxDepth;
    this.x2 = x + Math.cos(angle) * len;
    this.y2 = y + Math.sin(angle) * len;
    this.delay = depth * 0.15 + Math.random() * 0.1;
    this.isLeaf = depth >= maxDepth;
    this.swayPhase = Math.random() * Math.PI * 2;
    if (depth < maxDepth) {
      const numChildren = depth === 0 ? 3 : Math.random() < 0.7 ? 2 : 1;
      for (let i = 0; i < numChildren; i++) {
        const spread = (Math.random() - 0.5) * 1.1;
        const childAngle = angle + spread;
        const childLen = len * (0.62 + Math.random() * 0.18);
        this.children.push(
          new Branch(
            this.x2,
            this.y2,
            childAngle,
            childLen,
            depth + 1,
            maxDepth,
          ),
        );
      }
    }
  }

  allBranches(): Branch[] {
    let list: Branch[] = [this];
    this.children.forEach((c) => {
      list = list.concat(c.allBranches());
    });
    return list;
  }
}

/* ── Background canvas: growth tree + particles ── */
function BgCanvas({ active }: { active: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    if (!active) return;
    const currentCanvas = canvasRef.current;
    if (!currentCanvas) return;
    const cv = currentCanvas;
    const parent = cv.parentElement;
    if (!parent) return;
    const ctx = cv.getContext("2d") as CanvasRenderingContext2D;
    if (!ctx) return;

    let globalT = 0;
    const resize = () => {
      cv.width = parent.offsetWidth;
      cv.height = parent.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const rootX = cv.width * 0.78;
    const rootY = cv.height * 0.95;
    const tree = new Branch(rootX, rootY, -Math.PI / 2, 50, 0, 4);
    const allBranches = tree.allBranches();

    type Particle = {
      x: number;
      y: number;
      vx: number;
      vy: number;
      r: number;
      a: number;
      gold: boolean;
    };
    const particles: Particle[] = Array.from({ length: 36 }, () => ({
      x: Math.random() * cv.width,
      y: Math.random() * cv.height,
      vx: (Math.random() - 0.5) * 0.15,
      vy: (Math.random() - 0.5) * 0.15,
      r: Math.random() * 1.2 + 0.3,
      a: Math.random() * 0.22 + 0.04,
      gold: Math.random() < 0.3,
    }));

    function draw() {
      globalT += 0.012;
      const W = cv.width,
        H = cv.height;
      ctx.clearRect(0, 0, W, H);

      /* Glow behind tree */
      const pulse = 0.5 + 0.5 * Math.sin(globalT * 0.4);
      const g = ctx.createRadialGradient(
        rootX,
        rootY - 150,
        0,
        rootX,
        rootY - 150,
        320,
      );
      g.addColorStop(0, `rgba(245,196,0,${(0.045 + pulse * 0.02).toFixed(3)})`);
      g.addColorStop(1, "transparent");
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, W, H);

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

      /* Growth tree */
      allBranches.forEach((b) => {
        if (globalT > b.delay && b.progress < 1) {
          b.progress = Math.min(1, b.progress + 0.025);
        }
        if (b.progress <= 0) return;

        const sway =
          b.progress >= 1
            ? Math.sin(globalT * 0.6 + b.swayPhase) * 0.025 * b.depth
            : 0;
        const animAngle = b.angle + sway;
        const ex = b.x1 + Math.cos(animAngle) * b.len * b.progress;
        const ey = b.y1 + Math.sin(animAngle) * b.len * b.progress;

        const alpha = 0.5 - b.depth * 0.07;
        ctx.strokeStyle = `rgba(245,196,0,${Math.max(0.08, alpha)})`;
        ctx.lineWidth = Math.max(0.5, 2.5 - b.depth * 0.5);
        ctx.lineCap = "round";
        ctx.beginPath();
        ctx.moveTo(b.x1, b.y1);
        ctx.lineTo(ex, ey);
        ctx.stroke();

        if (b.isLeaf && b.progress >= 0.95) {
          const bloomPulse = 0.5 + 0.5 * Math.sin(globalT * 1.5 + b.swayPhase);
          ctx.beginPath();
          ctx.arc(ex, ey, 2 + bloomPulse * 1.2, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(245,196,0,${(0.3 + bloomPulse * 0.3).toFixed(3)})`;
          ctx.fill();
        }
      });

      /* Scanline */
      const scanY = (globalT * 22) % H;
      const sg = ctx.createLinearGradient(0, scanY - 10, 0, scanY + 10);
      sg.addColorStop(0, "transparent");
      sg.addColorStop(0.5, "rgba(245,196,0,0.014)");
      sg.addColorStop(1, "transparent");
      ctx.fillStyle = sg;
      ctx.fillRect(0, scanY - 10, W, 20);

      rafRef.current = requestAnimationFrame(draw);
    }

    rafRef.current = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
    };
  }, [active]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
}

/* ── Benefit icon draw functions ── */
type IconType = "training" | "network" | "rentals" | "money" | "forum";

function drawTraining(ctx: CanvasRenderingContext2D, t: number, h: boolean) {
  const a = h ? 0.95 : 0.55;
  ctx.clearRect(0, 0, 38, 38);
  ctx.strokeStyle = `rgba(245,196,0,${a})`;
  ctx.lineWidth = 1.3;
  ctx.beginPath();
  ctx.moveTo(19, 10);
  ctx.lineTo(32, 16);
  ctx.lineTo(19, 22);
  ctx.lineTo(6, 16);
  ctx.closePath();
  ctx.stroke();
  ctx.fillStyle = `rgba(245,196,0,${a * 0.2})`;
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(11, 18);
  ctx.lineTo(11, 25);
  ctx.stroke();
  const bob = Math.sin(t * 2) * 1.5;
  ctx.beginPath();
  ctx.arc(11, 25 + bob, 1.5, 0, Math.PI * 2);
  ctx.fillStyle = `rgba(245,196,0,${a})`;
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(27, 18);
  ctx.lineTo(27, 25);
  ctx.stroke();
}

function drawNetwork(ctx: CanvasRenderingContext2D, t: number, h: boolean) {
  const a = h ? 0.95 : 0.55;
  ctx.clearRect(0, 0, 38, 38);
  const cx = 19,
    cy = 19;
  const nodePos: [number, number][] = [
    [cx, cy - 11],
    [cx - 10, cy + 6],
    [cx + 10, cy + 6],
  ];
  ctx.strokeStyle = `rgba(245,196,0,${a * 0.5})`;
  ctx.lineWidth = 1;
  nodePos.forEach((p, i) => {
    nodePos.forEach((p2, j) => {
      if (i < j) {
        ctx.beginPath();
        ctx.moveTo(p[0], p[1]);
        ctx.lineTo(p2[0], p2[1]);
        ctx.stroke();
      }
    });
  });
  nodePos.forEach((p, i) => {
    const pulse = 0.5 + 0.5 * Math.sin(t * 2 + i * 1.5);
    ctx.beginPath();
    ctx.arc(p[0], p[1], 3 + pulse * (h ? 1.2 : 0.4), 0, Math.PI * 2);
    ctx.fillStyle = `rgba(245,196,0,${a})`;
    ctx.fill();
  });
}

type CanvasRenderingContext2DRoundRect = CanvasRenderingContext2D & {
  roundRect(
    x: number,
    y: number,
    width: number,
    height: number,
    radius: number,
  ): void;
};

function drawRentals(ctx: CanvasRenderingContext2D, t: number, h: boolean) {
  const a = h ? 0.95 : 0.55;
  ctx.clearRect(0, 0, 38, 38);
  ctx.strokeStyle = `rgba(245,196,0,${a})`;
  ctx.lineWidth = 1.3;
  ctx.beginPath();
  (ctx as CanvasRenderingContext2DRoundRect).roundRect(8, 12, 22, 15, 2);
  ctx.stroke();
  ctx.fillStyle = `rgba(245,196,0,${a * 0.15})`;
  ctx.fill();
  ctx.beginPath();
  ctx.arc(19, 19.5, 5, 0, Math.PI * 2);
  ctx.stroke();
  const blink = 0.5 + 0.5 * Math.sin(t * 3);
  ctx.fillStyle = `rgba(245,196,0,${a * (0.4 + blink * 0.4)})`;
  ctx.beginPath();
  ctx.moveTo(26, 8);
  ctx.lineTo(32, 8);
  ctx.lineTo(32, 14);
  ctx.lineTo(29, 17);
  ctx.lineTo(23, 11);
  ctx.closePath();
  ctx.fill();
}

function drawMoney(ctx: CanvasRenderingContext2D, t: number, h: boolean) {
  const a = h ? 0.95 : 0.55;
  ctx.clearRect(0, 0, 38, 38);
  ctx.strokeStyle = `rgba(245,196,0,${a})`;
  ctx.lineWidth = 1.3;
  ctx.beginPath();
  (ctx as CanvasRenderingContext2DRoundRect).roundRect(7, 13, 24, 13, 2);
  ctx.stroke();
  ctx.fillStyle = `rgba(245,196,0,${a * 0.15})`;
  ctx.fill();
  ctx.beginPath();
  ctx.arc(19, 19.5, 4, 0, Math.PI * 2);
  ctx.stroke();
  const pulse = 0.5 + 0.5 * Math.sin(t * 2.5);
  ctx.fillStyle = `rgba(245,196,0,${a * (0.3 + pulse * 0.3)})`;
  ctx.beginPath();
  ctx.arc(19, 19.5, 4, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = `rgba(245,196,0,${a * 0.6})`;
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(28, 28);
  ctx.lineTo(32, 22);
  ctx.lineTo(30, 22);
  ctx.moveTo(32, 22);
  ctx.lineTo(32, 24);
  ctx.stroke();
}

function drawForum(ctx: CanvasRenderingContext2D, t: number, h: boolean) {
  const a = h ? 0.95 : 0.55;
  ctx.clearRect(0, 0, 38, 38);
  ctx.strokeStyle = `rgba(245,196,0,${a})`;
  ctx.lineWidth = 1.3;
  ctx.beginPath();
  (ctx as CanvasRenderingContext2DRoundRect).roundRect(6, 8, 18, 13, 4);
  ctx.stroke();
  ctx.fillStyle = `rgba(245,196,0,${a * 0.15})`;
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(11, 21);
  ctx.lineTo(9, 25);
  ctx.lineTo(14, 21);
  ctx.stroke();
  ctx.beginPath();
  (ctx as CanvasRenderingContext2DRoundRect).roundRect(16, 16, 16, 12, 4);
  ctx.stroke();
  ctx.fillStyle = `rgba(245,196,0,${a * 0.1})`;
  ctx.fill();
  const blink = 0.5 + 0.5 * Math.sin(t * 4);
  ctx.fillStyle = `rgba(245,196,0,${a * (0.4 + blink * 0.4)})`;
  [21, 26, 31].forEach((x) => {
    ctx.beginPath();
    ctx.arc(x, 22, 1, 0, Math.PI * 2);
    ctx.fill();
  });
}

const DRAW_FNS: Record<
  IconType,
  (ctx: CanvasRenderingContext2D, t: number, h: boolean) => void
> = {
  training: drawTraining,
  network: drawNetwork,
  rentals: drawRentals,
  money: drawMoney,
  forum: drawForum,
};

function BenefitIcon({ type }: { type: IconType }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [hovered, setHovered] = useState(false);
  const tRef = useRef(0);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const cv = canvasRef.current;
    if (!cv) return;
    const ctx = cv.getContext("2d");
    if (!ctx) return;
    const loop = () => {
      tRef.current += hovered ? 0.022 : 0.01;
      DRAW_FNS[type](ctx, tRef.current, hovered);
      rafRef.current = requestAnimationFrame(loop);
    };
    rafRef.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(rafRef.current);
  }, [type, hovered]);

  return (
    <div
      className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300"
      style={{
        background: hovered ? "rgba(245,196,0,0.18)" : "rgba(245,196,0,0.08)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <canvas
        ref={canvasRef}
        width={38}
        height={38}
        aria-hidden="true"
        style={{ display: "block", width: 38, height: 38 }}
      />
    </div>
  );
}

const benefits = [
  {
    name: "Training Resources & Workshops",
    detail: "Structured learning for every stage of the creative journey.",
    type: "training" as IconType,
  },
  {
    name: "Industry Networking & Collaboration",
    detail: "Connect with fellow creators, industry professionals, and brands.",
    type: "network" as IconType,
  },
  {
    name: "Discounted Equipment Rentals",
    detail: "Members get exclusive rates via HH Media Rentals.",
    type: "rentals" as IconType,
  },
  {
    name: "Monetisation & Brand Partnerships",
    detail: "Pathways to earn — through brand deals, licensing, and more.",
    type: "money" as IconType,
  },
  {
    name: "Community Forums & Peer Support",
    detail: "A space to share, learn, and grow alongside other creators.",
    type: "forum" as IconType,
  },
];

export default function CreatorsPlatform() {
  const { ref, inView } = useInView(0.1);

  return (
    <>
      <style>{`
        @keyframes zoomInLeft {
          from { opacity: 0; transform: translateX(-90px) scale(0.92); }
          to   { opacity: 1; transform: translateX(0) scale(1); }
        }
        @keyframes zoomInLeftDelay {
          from { opacity: 0; transform: translateX(-60px) scale(0.95); }
          to   { opacity: 1; transform: translateX(0) scale(1); }
        }
        @keyframes badgeGlow {
          0%,100% { box-shadow: 0 0 0 0 rgba(245,196,0,0.0), inset 0 0 20px rgba(245,196,0,0.04); }
          50%     { box-shadow: 0 0 24px 2px rgba(245,196,0,0.12), inset 0 0 30px rgba(245,196,0,0.08); }
        }
        @keyframes dotPing {
          0%,100% { transform: scale(1); opacity: .8; }
          50%     { transform: scale(2.4); opacity: 0; }
        }
        @keyframes scaleX {
          from { transform: scaleX(0); opacity: 0; }
          to   { transform: scaleX(1); opacity: 1; }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <section
        ref={ref as React.RefObject<HTMLElement>}
        id="creators"
        className="relative bg-[#1A1A1A] py-24 px-6 scroll-mt-20 overflow-hidden"
      >
        {/* Background: growth tree + particles + scanline */}
        <BgCanvas active={inView} />

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

        <div className="relative max-w-5xl mx-auto" style={{ zIndex: 10 }}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* ── LEFT — zooms in from the left ── */}
            <div
              className="lg:col-span-5"
              style={{
                opacity: inView ? 1 : 0,
                animation: inView
                  ? "zoomInLeft 1s cubic-bezier(0.16,1,0.3,1) both"
                  : "none",
              }}
            >
              <div className="inline-flex items-center gap-3 mb-6">
                <span className="text-white/15 text-xs font-mono">03</span>
                <div className="w-6 h-px bg-white/15" />
                <span className="text-[#F5C400] text-[10px] font-bold tracking-[0.35em] uppercase">
                  HH Creators Platform
                </span>
              </div>

              <h2 className="font-display text-4xl sm:text-5xl font-black text-white leading-tight tracking-tight mb-6">
                Built for the creator who is{" "}
                <span
                  className="text-[#F5C400]"
                  style={{ textShadow: "0 0 40px rgba(245,196,0,0.2)" }}
                >
                  serious about their craft.
                </span>
              </h2>

              <p className="text-white/55 text-base leading-relaxed mb-4">
                The Hand Held Creators Platform is a membership community for
                African content creators at every stage of their journey. We
                provide tools, training, access to industry networks, and
                pathways to monetise your work.
              </p>

              <p className="text-white/55 text-base leading-relaxed mb-10">
                Whether you are just starting or already building your audience
                — there is a place for you here.
              </p>

              {/* Premium "Coming Soon" treatment */}
              <div
                className="relative inline-flex flex-col gap-3 w-fit"
                style={{
                  opacity: inView ? 1 : 0,
                  animation: inView
                    ? "zoomInLeftDelay 1s cubic-bezier(0.16,1,0.3,1) 0.25s both"
                    : "none",
                }}
              >
                <div
                  className="relative inline-flex items-center gap-4 rounded-md px-7 py-5 overflow-hidden"
                  style={{
                    border: "1px solid rgba(245,196,0,0.18)",
                    background:
                      "linear-gradient(135deg, rgba(245,196,0,0.05), rgba(255,255,255,0.02))",
                    animation: "badgeGlow 3s ease-in-out infinite",
                  }}
                >
                  {/* corner accents */}
                  <span
                    className="absolute top-0 left-0 w-3 h-3 border-t border-l"
                    style={{ borderColor: "rgba(245,196,0,0.5)" }}
                  />
                  <span
                    className="absolute bottom-0 right-0 w-3 h-3 border-b border-r"
                    style={{ borderColor: "rgba(245,196,0,0.5)" }}
                  />

                  <span className="relative flex h-2.5 w-2.5">
                    <span
                      className="absolute inline-flex h-full w-full rounded-full bg-[#F5C400]"
                      style={{
                        animation:
                          "dotPing 1.8s cubic-bezier(0,0,0.2,1) infinite",
                      }}
                    />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#F5C400]" />
                  </span>

                  <div className="flex flex-col">
                    <span className="text-white font-black text-sm tracking-[0.18em] uppercase">
                      Coming Soon
                    </span>
                    <span className="text-[#F5C400]/50 text-[10px] tracking-[0.1em] uppercase font-mono mt-0.5">
                      Platform Launch · 2026
                    </span>
                  </div>
                </div>

                <p className="text-white/30 text-xs leading-relaxed max-w-xs px-1">
                  The platform is currently in development. Stay tuned for the
                  official launch.
                </p>
              </div>
            </div>

            {/* ── RIGHT — Benefits list ── */}
            <div
              className="lg:col-span-7"
              style={{
                opacity: inView ? 1 : 0,
                animation: inView
                  ? "zoomInLeftDelay 1s cubic-bezier(0.16,1,0.3,1) 0.15s both"
                  : "none",
              }}
            >
              <p
                className="text-white/25 text-[10px] font-bold tracking-[0.3em] uppercase mb-6 pb-4 border-b border-white/10"
                style={{
                  opacity: inView ? 1 : 0,
                  animation: inView ? "fadeUp 0.8s ease 0.4s both" : "none",
                }}
              >
                Platform Benefits
              </p>

              <div className="flex flex-col">
                {benefits.map((benefit, i) => {
                  const delay = 0.5 + i * 0.12;
                  return (
                    <div
                      key={benefit.name}
                      className="group flex items-start gap-5 py-5 border-b border-white/[0.06] last:border-b-0 hover:bg-white/[0.02] transition-colors duration-300 rounded-lg px-3 -mx-3"
                      style={{
                        opacity: inView ? 1 : 0,
                        transform: inView
                          ? "translateX(0)"
                          : "translateX(24px)",
                        transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`,
                      }}
                    >
                      <BenefitIcon type={benefit.type} />

                      <div className="flex-1">
                        <p className="text-white text-sm font-semibold group-hover:text-[#F5C400] transition-colors duration-300">
                          {benefit.name}
                        </p>
                        <p className="text-white/40 text-xs leading-relaxed mt-1">
                          {benefit.detail}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Divider */}
          <div
            className="mt-24 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent origin-left"
            style={{
              transform: inView ? "scaleX(1)" : "scaleX(0)",
              opacity: inView ? 1 : 0,
              transition: "transform 1s ease 1.4s, opacity 1s ease 1.4s",
            }}
          />
        </div>
      </section>
    </>
  );
}
