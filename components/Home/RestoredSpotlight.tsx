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

/* ── Card inner canvas: spotlight beams + gold dust ── */
function CardCanvas({ active }: { active: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const cv = canvasRef.current;
    if (!cv) return;
    const parent = cv.parentElement!;
    const ctx = cv.getContext("2d")!;
    let t = 0;

    const resize = () => {
      cv.width = parent.offsetWidth;
      cv.height = parent.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    type P = {
      x: number;
      y: number;
      vy: number;
      life: number;
      maxLife: number;
      r: number;
      gold: boolean;
    };
    const particles: P[] = [];

    const spawn = () => {
      particles.push({
        x: cv.width * (0.1 + Math.random() * 0.8),
        y: cv.height + 6,
        vy: -(Math.random() * 0.7 + 0.3),
        life: 0,
        maxLife: 140 + Math.random() * 160,
        r: Math.random() * 1.6 + 0.3,
        gold: Math.random() < 0.35,
      });
    };

    let frame = 0;
    const draw = () => {
      t += 0.012;
      frame++;
      if (frame % 3 === 0) spawn();

      const W = cv.width,
        H = cv.height;
      ctx.clearRect(0, 0, W, H);

      /* spotlight beams from bottom center */
      const beams = [
        { angle: -0.38, alpha: 0.06 },
        { angle: -0.18, alpha: 0.09 },
        { angle: 0, alpha: 0.11 },
        { angle: 0.18, alpha: 0.09 },
        { angle: 0.38, alpha: 0.06 },
      ];
      const pulse = 0.5 + 0.5 * Math.sin(t * 0.8);
      beams.forEach(({ angle, alpha }) => {
        const spread = 280;
        const cx = W * 0.5;
        const cy = H * 1.05;
        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(angle);
        const g = ctx.createLinearGradient(0, 0, 0, -H * 1.1);
        g.addColorStop(
          0,
          `rgba(245,196,0,${(alpha + pulse * 0.03).toFixed(3)})`,
        );
        g.addColorStop(0.6, `rgba(245,196,0,${(alpha * 0.3).toFixed(3)})`);
        g.addColorStop(1, "transparent");
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.moveTo(-spread * 0.5, 0);
        ctx.lineTo(spread * 0.5, 0);
        ctx.lineTo(spread * 0.15, -H * 1.1);
        ctx.lineTo(-spread * 0.15, -H * 1.1);
        ctx.closePath();
        ctx.fill();
        ctx.restore();
      });

      /* gold dust particles */
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.y += p.vy;
        p.x += Math.sin(t + i) * 0.3;
        p.life++;
        const progress = p.life / p.maxLife;
        const alpha =
          progress < 0.15
            ? progress / 0.15
            : progress > 0.7
              ? 1 - (progress - 0.7) / 0.3
              : 1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.gold
          ? `rgba(245,196,0,${(alpha * 0.6).toFixed(3)})`
          : `rgba(255,255,255,${(alpha * 0.2).toFixed(3)})`;
        ctx.fill();
        if (p.life >= p.maxLife) particles.splice(i, 1);
      }

      rafRef.current = requestAnimationFrame(draw);
    };

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
      style={{
        zIndex: 1,
        opacity: active ? 1 : 0,
        transition: "opacity 1.5s ease",
      }}
    />
  );
}

const TITLE = "Restored";

export default function RestoredSpotlight() {
  const { ref, inView } = useInView(0.15);
  const [lettersVisible, setLettersVisible] = useState(false);

  useEffect(() => {
    if (inView) setTimeout(() => setLettersVisible(true), 400);
  }, [inView]);

  return (
    <>
      <style>{`
        @keyframes letterFlip {
          0%   { opacity: 0; transform: rotateY(-90deg) translateZ(40px); }
          60%  { opacity: 1; transform: rotateY(8deg) translateZ(4px); }
          100% { opacity: 1; transform: rotateY(0deg) translateZ(0); }
        }
        @keyframes shimmerBar {
          0%{background-position:-200% center}
          100%{background-position:200% center}
        }
        @keyframes cardFlip {
          0%  { opacity:0; transform:perspective(600px) rotateX(25deg) translateY(30px); }
          100%{ opacity:1; transform:perspective(600px) rotateX(0deg) translateY(0); }
        }
        @keyframes rSpin {
          from{transform:rotate(0deg)}
          to{transform:rotate(360deg)}
        }
        @keyframes fadeUp {
          from{opacity:0;transform:translateY(18px)}
          to{opacity:1;transform:translateY(0)}
        }
        @keyframes borderDraw {
          from{stroke-dashoffset:2000}
          to{stroke-dashoffset:0}
        }
        @keyframes scanMove {
          0%{top:0;opacity:0}5%{opacity:.6}90%{opacity:.4}100%{top:100%;opacity:0}
        }
        .letter-flip {
          display: inline-block;
          opacity: 0;
          transform: rotateY(-90deg) translateZ(40px);
          transform-style: preserve-3d;
        }
        .letter-flip.go {
          animation: letterFlip 0.55s cubic-bezier(0.22,1,0.36,1) forwards;
        }
      `}</style>

      <section className="bg-[#111] py-24 px-6" ref={ref}>
        <div className="max-w-6xl mx-auto">
          {/* ── Outer card ── */}
          <div
            className="relative rounded-2xl overflow-hidden"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView
                ? "translateY(0) scale(1)"
                : "translateY(40px) scale(0.97)",
              transition:
                "opacity 0.9s ease 0.1s, transform 0.9s cubic-bezier(0.22,1,0.36,1) 0.1s",
            }}
          >
            {/* SVG border draw */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              style={{ zIndex: 20 }}
              aria-hidden="true"
            >
              <rect
                x="1"
                y="1"
                width="calc(100% - 2px)"
                height="calc(100% - 2px)"
                rx="16"
                ry="16"
                fill="none"
                stroke="rgba(245,196,0,0.28)"
                strokeWidth="1"
                strokeDasharray="2000"
                style={{
                  strokeDashoffset: inView ? 0 : 2000,
                  transition:
                    "stroke-dashoffset 2.4s cubic-bezier(0.4,0,0.2,1) 0.6s",
                }}
              />
            </svg>

            {/* Scan line */}
            {inView && (
              <div
                className="absolute inset-x-0 pointer-events-none"
                aria-hidden="true"
                style={{
                  zIndex: 19,
                  height: "1.5px",
                  background:
                    "linear-gradient(90deg,transparent,rgba(245,196,0,0.45) 30%,rgba(245,196,0,0.7) 50%,rgba(245,196,0,0.45) 70%,transparent)",
                  animation: "scanMove 2s cubic-bezier(0.4,0,0.6,1) 0.3s both",
                  top: 0,
                }}
              />
            )}

            {/* BG stack */}
            <div className="absolute inset-0 z-0">
              <div className="absolute inset-0 bg-[#090909]" />

              {/* Spotlight + particles canvas */}
              <CardCanvas active={inView} />

              {/* Film grain */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  zIndex: 2,
                  opacity: 0.045,
                  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.88' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
                  backgroundSize: "160px 160px",
                }}
              />

              {/* Gold orb left */}
              <div
                className="absolute pointer-events-none"
                style={{
                  zIndex: 2,
                  left: "-6%",
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: "400px",
                  height: "400px",
                  borderRadius: "50%",
                  background:
                    "radial-gradient(circle, rgba(245,196,0,0.10) 0%, transparent 68%)",
                  filter: "blur(28px)",
                  opacity: inView ? 1 : 0,
                  transition: "opacity 2s ease 1s",
                }}
              />

              {/* Directional fades */}
              <div
                className="absolute inset-0 bg-gradient-to-r from-[#090909]/92 via-[#090909]/60 to-[#090909]/15"
                style={{ zIndex: 3 }}
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-[#090909]/50 via-transparent to-transparent"
                style={{ zIndex: 3 }}
              />
            </div>

            {/* Content grid */}
            <div
              className="relative grid grid-cols-1 lg:grid-cols-2 gap-0 min-h-[480px]"
              style={{ zIndex: 10 }}
            >
              {/* ── LEFT ── */}
              <div className="p-10 sm:p-14 flex flex-col justify-center">
                {/* 3D letter-flip title */}
                <h2
                  className="font-display font-black tracking-tight mb-2 leading-none"
                  style={{
                    // fontSize: "clamp(48px,7.5vw,92px)",
                    fontSize: "clamp(36px, 5.5vw, 80px)",
                    perspective: "700px",
                    transformStyle: "preserve-3d",
                  }}
                  aria-label="Restored"
                >
                  {TITLE.split("").map((char, i) => (
                    <span
                      key={i}
                      className={`letter-flip${lettersVisible ? " go" : ""}`}
                      style={{
                        animationDelay: `${i * 0.07}s`,
                        color: "#ffffff",
                      }}
                    >
                      {char}
                    </span>
                  ))}
                </h2>

                {/* Series label + divider */}
                <div
                  className="flex items-center gap-3 mb-8"
                  style={{
                    opacity: inView ? 1 : 0,
                    animation: inView ? "fadeUp 0.7s ease 1.1s both" : "none",
                  }}
                >
                  <div
                    className="h-[2px] bg-[#F5C400]"
                    style={{
                      width: inView ? "36px" : "0px",
                      transition: "width 0.8s ease 1.2s",
                    }}
                  />
                  <p className="text-white/35 text-[10px] font-medium tracking-[0.32em] uppercase">
                    A TV Testimony Series
                  </p>
                </div>

                {/* Description */}
                <p
                  className="text-white/55 text-base sm:text-lg leading-relaxed max-w-md mb-10"
                  style={{
                    opacity: inView ? 1 : 0,
                    animation: inView ? "fadeUp 0.8s ease 1.25s both" : "none",
                  }}
                >
                  Real stories. Real transformation.{" "}
                  <span className="text-white font-semibold">Restored</span>{" "}
                  follows individuals whose lives have been radically changed —
                  and brings their testimony to the screen with{" "}
                  <span className="text-[#F5C400]/75">cinematic care.</span>
                </p>

                {/* CTAs */}
                <div
                  className="flex flex-col sm:flex-row gap-4"
                  style={{
                    opacity: inView ? 1 : 0,
                    animation: inView ? "fadeUp 0.8s ease 1.45s both" : "none",
                  }}
                >
                  <Link
                    href="/restored"
                    className="group relative inline-flex items-center justify-center gap-2 bg-[#F5C400] text-[#0a0a0a] font-black text-xs px-8 py-4 uppercase tracking-widest overflow-hidden rounded-sm"
                  >
                    <span
                      className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent"
                      style={{ transition: "transform 0.55s ease" }}
                    />
                    <span className="relative">Learn More About Restored</span>
                    <svg
                      className="relative w-3.5 h-3.5 group-hover:translate-x-1"
                      style={{ transition: "transform 0.2s" }}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </Link>

                  <Link
                    href="/work-with-us"
                    className="inline-flex items-center justify-center gap-2 border border-white/15 text-white/55 text-xs font-medium px-8 py-4 uppercase tracking-widest hover:border-[#F5C400]/45 hover:text-[#F5C400]/80 rounded-sm"
                    style={{ transition: "all 0.25s" }}
                  >
                    Partner With Us
                  </Link>
                </div>
              </div>

              {/* ── RIGHT ── */}
              <div className="hidden lg:flex items-center justify-center p-14 relative">
                {/* Slow spinning ghosted R */}
                <div
                  className="absolute inset-0 flex items-center justify-center select-none pointer-events-none overflow-hidden"
                  style={{
                    opacity: inView ? 1 : 0,
                    transition: "opacity 2.5s ease 1s",
                  }}
                >
                  <span
                    className="font-black leading-none"
                    style={{
                      fontSize: "340px",
                      color: "transparent",
                      WebkitTextStroke: "1px rgba(245,196,0,0.055)",
                      animation: "rSpin 40s linear infinite",
                      display: "block",
                    }}
                  >
                    R
                  </span>
                </div>

                {/* 3D card flip info card */}
                <div
                  className="relative z-10 w-full max-w-xs"
                  style={{
                    opacity: inView ? 1 : 0,
                    animation: inView
                      ? "cardFlip 1s cubic-bezier(0.22,1,0.36,1) 0.9s both"
                      : "none",
                  }}
                >
                  {/* Gold gradient border */}
                  <div
                    className="absolute -inset-px rounded-xl pointer-events-none"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(245,196,0,0.4), transparent 50%, rgba(245,196,0,0.12))",
                      zIndex: 0,
                    }}
                  />
                  <div
                    className="relative rounded-xl p-7 backdrop-blur-md"
                    style={{ background: "rgba(10,10,10,0.92)", zIndex: 1 }}
                  >
                    <h4 className="text-white font-bold text-base mb-0.5 tracking-tight">
                      Restored
                    </h4>
                    <p className="text-white/30 text-xs mb-5 tracking-wide">
                      Season 1 · In Production
                    </p>

                    {/* Shimmer progress bar */}
                    <div className="mb-5">
                      <div className="flex justify-between text-[10px] mb-2 uppercase tracking-wider">
                        <span className="text-white/25">Production</span>
                        <span style={{ color: "#F5C400", opacity: 0.75 }}>
                          40%
                        </span>
                      </div>
                      <div
                        className="h-[3px] rounded-full overflow-hidden"
                        style={{ background: "rgba(255,255,255,0.06)" }}
                      >
                        <div
                          className="h-full rounded-full relative overflow-hidden"
                          style={{
                            width: inView ? "40%" : "0%",
                            transition:
                              "width 1.8s cubic-bezier(0.4,0,0.2,1) 1.6s",
                            background:
                              "linear-gradient(90deg, #a07000, #F5C400, #fff5c0)",
                          }}
                        >
                          {/* shimmer sweep */}
                          <div
                            className="absolute inset-0"
                            style={{
                              background:
                                "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.5) 50%, transparent 100%)",
                              backgroundSize: "200% 100%",
                              animation: "shimmerBar 2s linear 2s infinite",
                            }}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Stat chips */}
                    <div className="grid grid-cols-2 gap-2.5 mb-5">
                      {[
                        { label: "Format", value: "TV Series" },
                        { label: "Genre", value: "Testimony" },
                      ].map((s, i) => (
                        <div
                          key={s.label}
                          className="rounded-lg p-3"
                          style={{
                            background: "rgba(255,255,255,0.025)",
                            border: "1px solid rgba(255,255,255,0.06)",
                            opacity: inView ? 1 : 0,
                            animation: inView
                              ? `fadeUp 0.6s ease ${1.7 + i * 0.1}s both`
                              : "none",
                          }}
                        >
                          <p
                            className="text-[9px] uppercase tracking-wider mb-1"
                            style={{ color: "rgba(255,255,255,0.22)" }}
                          >
                            {s.label}
                          </p>
                          <p
                            className="text-xs font-semibold"
                            style={{ color: "rgba(255,255,255,0.75)" }}
                          >
                            {s.value}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div
                      className="pt-4"
                      style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
                    >
                      <p
                        className="text-[11px] leading-relaxed"
                        style={{ color: "rgba(255,255,255,0.22)" }}
                      >
                        Distribution details to follow. Join the mailing list
                        for updates.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Corner accent marks */}
                {[
                  { top: "24px", left: "24px", borderWidth: "2px 0 0 2px" },
                  { top: "24px", right: "24px", borderWidth: "2px 2px 0 0" },
                  { bottom: "24px", left: "24px", borderWidth: "0 0 2px 2px" },
                  { bottom: "24px", right: "24px", borderWidth: "0 2px 2px 0" },
                ].map((pos, i) => (
                  <span
                    key={i}
                    className="absolute w-4 h-4 pointer-events-none"
                    style={{
                      ...(pos as React.CSSProperties),
                      borderColor: "rgba(245,196,0,0.25)",
                      borderStyle: "solid",
                      opacity: inView ? 1 : 0,
                      transition: `opacity 0.5s ease ${1.9 + i * 0.08}s`,
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Bottom gold bar */}
            <div
              className="absolute bottom-0 left-0 h-[2px]"
              style={{
                background:
                  "linear-gradient(90deg, #F5C400 0%, #fff8dc 40%, #F5C400 75%, rgba(245,196,0,0.15) 100%)",
                width: inView ? "100%" : "0%",
                transition: "width 1.8s cubic-bezier(0.4,0,0.2,1) 1.1s",
                zIndex: 10,
              }}
            />

            {/* Top-right stamp */}
            <div
              className="absolute top-5 right-6 text-[9px] tracking-[0.3em] uppercase font-mono pointer-events-none select-none"
              style={{
                color: "rgba(255,255,255,0.08)",
                zIndex: 10,
                opacity: inView ? 1 : 0,
                transition: "opacity 1s ease 2.2s",
              }}
            >
              HHMG · 2026 · S01
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
