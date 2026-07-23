"use client";

import { useEffect, useRef, useState } from "react";

function BgCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const cv = canvasRef.current;
    if (!cv) return;
    const parent = cv.parentElement;
    if (!parent) return;
    const ctx = cv.getContext("2d") as CanvasRenderingContext2D;
    if (!ctx) return;

    let t = 0;

    const resize = () => {
      cv.width = parent.offsetWidth;
      cv.height = parent.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    type Stroke = {
      x: number;
      y: number;
      len: number;
      alpha: number;
      speed: number;
      phase: number;
      thickness: number;
    };
    type Particle = {
      x: number;
      y: number;
      vx: number;
      vy: number;
      r: number;
      a: number;
      gold: boolean;
    };
    type Ring = {
      cx: number;
      cy: number;
      r: number;
      speed: number;
      alpha: number;
    };

    const strokes: Stroke[] = Array.from({ length: 28 }, () => ({
      x: 30 + Math.random() * (cv.width * 0.55),
      y: 40 + Math.random() * (cv.height - 80),
      len: 12 + Math.random() * 40,
      alpha: Math.random() * 0.06 + 0.01,
      speed: 0.002 + Math.random() * 0.003,
      phase: Math.random() * Math.PI * 2,
      thickness: 0.5 + Math.random() * 0.5,
    }));

    const pts: Particle[] = Array.from({ length: 40 }, () => ({
      x: Math.random() * cv.width,
      y: Math.random() * cv.height,
      vx: (Math.random() - 0.5) * 0.18,
      vy: (Math.random() - 0.5) * 0.18,
      r: Math.random() * 1.2 + 0.3,
      a: Math.random() * 0.25 + 0.05,
      gold: Math.random() < 0.3,
    }));

    const rings: Ring[] = [
      { cx: 0.82, cy: 0.25, r: 60, speed: 0.004, alpha: 0.04 },
      { cx: 0.88, cy: 0.72, r: 40, speed: 0.007, alpha: 0.03 },
    ];

    function draw() {
      t += 0.01;
      const W = cv!.width,
        H = cv!.height;
      ctx.clearRect(0, 0, W, H);

      /* Gold orbs */
      const pulse = 0.5 + 0.5 * Math.sin(t * 0.5);

      const g1 = ctx.createRadialGradient(
        W * 0.15,
        H * 0.3,
        0,
        W * 0.15,
        H * 0.3,
        W * 0.4,
      );
      g1.addColorStop(
        0,
        `rgba(245,196,0,${(0.04 + pulse * 0.025).toFixed(3)})`,
      );
      g1.addColorStop(1, "transparent");
      ctx.fillStyle = g1;
      ctx.fillRect(0, 0, W, H);

      const g2 = ctx.createRadialGradient(
        W * 0.85,
        H * 0.75,
        0,
        W * 0.85,
        H * 0.75,
        W * 0.3,
      );
      g2.addColorStop(
        0,
        `rgba(245,196,0,${(0.025 + pulse * 0.015).toFixed(3)})`,
      );
      g2.addColorStop(1, "transparent");
      ctx.fillStyle = g2;
      ctx.fillRect(0, 0, W, H);

      /* Typewriter ghost strokes */
      strokes.forEach((s) => {
        const flicker = 0.5 + 0.5 * Math.sin(t * s.speed * 100 + s.phase);
        ctx.strokeStyle = `rgba(245,196,0,${(s.alpha * flicker).toFixed(3)})`;
        ctx.lineWidth = s.thickness;
        ctx.beginPath();
        ctx.moveTo(s.x, s.y);
        ctx.lineTo(s.x + s.len, s.y);
        ctx.stroke();
      });

      /* Orbit rings */
      rings.forEach((ring) => {
        ctx.save();
        ctx.translate(W * ring.cx, H * ring.cy);
        ctx.rotate(t * ring.speed);
        ctx.strokeStyle = `rgba(245,196,0,${ring.alpha})`;
        ctx.lineWidth = 0.6;
        ctx.setLineDash([4, 8]);
        ctx.beginPath();
        ctx.arc(0, 0, ring.r, 0, Math.PI * 2);
        ctx.stroke();
        ctx.setLineDash([]);
        ctx.restore();
      });

      /* Particles */
      pts.forEach((p) => {
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
      const scanY = (t * 22) % H;
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

export default function OurStory() {
  const sectionRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @keyframes lineBreath {
          0%,100%{width:28px} 50%{width:44px}
        }
        @keyframes lineBreath2 {
          0%,100%{width:36px} 50%{width:56px}
        }
        @keyframes opacityPulse {
          0%,100%{opacity:.2} 50%{opacity:.5}
        }
        @keyframes textGlow {
          0%,100%{text-shadow:0 0 10px rgba(245,196,0,0.1)}
          50%{text-shadow:0 0 30px rgba(245,196,0,0.35)}
        }
        @keyframes fadeUp {
          from{opacity:0;transform:translateY(32px)}
          to{opacity:1;transform:translateY(0)}
        }
        @keyframes wordIn {
          from{opacity:0;transform:translateY(24px)}
          to{opacity:1;transform:translateY(0)}
        }
        @keyframes scaleX {
          from{transform:scaleX(0);opacity:0}
          to{transform:scaleX(1);opacity:1}
        }
        @keyframes vertGrow {
          from{height:0;opacity:0}
          to{height:80px;opacity:1}
        }
        @keyframes shimmer {
          from{transform:translateX(-100%)}
          to{transform:translateX(100%)}
        }
        .word-reveal {
          display:inline-block;
          opacity:0;
          transform:translateY(24px);
        }
        .word-reveal.go {
          animation:wordIn 0.6s ease forwards;
        }
      `}</style>

      <section
        ref={sectionRef}
        className="bg-[#1A1A1A] py-24 px-6 relative overflow-hidden"
      >
        {/* Animated BG */}
        <BgCanvas />

        {/* Noise */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            zIndex: 1,
            opacity: 0.1,
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            backgroundSize: "160px 160px",
          }}
        />

        <div className="max-w-5xl mx-auto relative" style={{ zIndex: 10 }}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            {/* ── LEFT ── */}
            <div
              className="lg:col-span-4"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(32px)",
                transition: "opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s",
              }}
            >
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-3 mb-6">
                <div
                  style={{
                    height: "1px",
                    background: "#F5C400",
                    animation: "lineBreath 2.5s ease-in-out infinite",
                  }}
                />
                <span className="text-[#F5C400] text-[10px] font-bold tracking-[0.35em] uppercase">
                  Our Story
                </span>
              </div>

              {/* Headline — word by word */}
              <h2 className="font-display text-3xl sm:text-4xl font-black text-white leading-tight tracking-tight">
                {"Where It All Began.".split(" ").map((word, i) => (
                  <span
                    key={i}
                    className="inline-block mr-2"
                    style={{
                      opacity: inView ? 1 : 0,
                      transform: inView ? "translateY(0)" : "translateY(24px)",
                      transition: `opacity 0.6s ease ${0.3 + i * 0.08}s, transform 0.6s ease ${0.3 + i * 0.08}s`,
                    }}
                  >
                    {word}
                  </span>
                ))}
              </h2>

              {/* Vertical rule */}
              <div
                className="hidden lg:block w-px bg-gradient-to-b from-[#F5C400]/40 to-transparent mt-10"
                style={{
                  height: inView ? "80px" : "0px",
                  opacity: inView ? 1 : 0,
                  transition: "height 1s ease 0.8s, opacity 1s ease 0.8s",
                }}
              />
            </div>

            {/* ── RIGHT ── */}
            <div className="lg:col-span-8 flex flex-col gap-8">
              {/* Decorative quote mark */}
              <span
                className="font-display text-[80px] leading-none text-[#F5C400] pointer-events-none"
                style={{
                  opacity: inView ? 0.08 : 0,
                  transform: inView ? "scale(1)" : "scale(0.5)",
                  transition:
                    "opacity 0.6s ease 0.6s, transform 0.6s ease 0.6s",
                  marginBottom: "-28px",
                  display: "block",
                }}
                aria-hidden="true"
              >
                &ldquo;
              </span>

              {/* Para 1 */}
              <p
                className="text-white/70 text-base sm:text-lg leading-relaxed relative"
                style={{
                  opacity: inView ? 1 : 0,
                  transform: inView ? "translateY(0)" : "translateY(28px)",
                  transition:
                    "opacity 0.8s ease 0.4s, transform 0.8s ease 0.4s",
                }}
              >
                Hand Held Media Group was founded on a simple observation:
              </p>

              {/* Pull quote */}
              <div
                className="relative group"
                style={{
                  opacity: inView ? 1 : 0,
                  transform: inView
                    ? "translateY(0) scale(1)"
                    : "translateY(28px) scale(0.97)",
                  transition:
                    "opacity 0.9s ease 0.55s, transform 0.9s ease 0.55s",
                }}
              >
                <div
                  className="absolute inset-0 rounded-lg -z-10"
                  style={{
                    background:
                      "linear-gradient(90deg, rgba(245,196,0,0.05), transparent)",
                    opacity: inView ? 1 : 0,
                    transition: "opacity 0.8s ease 0.8s",
                  }}
                />
                <p className="text-white text-xl sm:text-2xl font-semibold leading-relaxed pl-4 border-l-2 border-[#F5C400]/30">
                  Africa is full of stories but the infrastructure to tell those
                  stories professionally, at scale, and on African terms has
                  always been{" "}
                  <span
                    className="text-[#F5C400]"
                    style={{
                      animation: inView
                        ? "textGlow 2.5s ease-in-out infinite"
                        : "none",
                    }}
                  >
                    fragmented.
                  </span>
                </p>
              </div>

              {/* Para 2 */}
              <p
                className="text-white/70 text-base sm:text-lg leading-relaxed"
                style={{
                  opacity: inView ? 1 : 0,
                  transform: inView ? "translateY(0)" : "translateY(28px)",
                  transition:
                    "opacity 0.8s ease 0.7s, transform 0.8s ease 0.7s",
                }}
              >
                We set out to change that. Not by doing one thing well, but by
                building a group of companies that together make great African
                content not just possible{" "}
                <span
                  className="text-white font-semibold"
                  style={{
                    animation: inView
                      ? "textGlow 3s ease-in-out infinite 0.5s"
                      : "none",
                  }}
                >
                  but inevitable.
                </span>
              </p>

              {/* Para 3 */}
              <p
                className="text-white/70 text-base sm:text-lg leading-relaxed"
                style={{
                  opacity: inView ? 1 : 0,
                  transform: inView ? "translateY(0)" : "translateY(28px)",
                  transition:
                    "opacity 0.8s ease 0.85s, transform 0.8s ease 0.85s",
                }}
              >
                From studios to equipment to creator platforms to original IP,
                Hand Held Media Group is the infrastructure behind the stories.
              </p>

              {/* Closing accent */}
              <div
                className="flex items-center gap-4 pt-4"
                style={{
                  opacity: inView ? 1 : 0,
                  transition: "opacity 0.8s ease 1s",
                }}
              >
                <div
                  style={{
                    height: "2px",
                    background: "#F5C400",
                    animation: "lineBreath2 3s ease-in-out infinite",
                  }}
                />
                <span
                  className="text-white/20 text-xs tracking-widest uppercase"
                  style={{ animation: "opacityPulse 3s ease-in-out infinite" }}
                >
                  Hand Held Media Group · 2026
                </span>
              </div>
            </div>
          </div>

          {/* Bottom divider with shimmer */}
          <div
            className="mt-24 h-px relative overflow-hidden origin-left"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)",
              transform: inView ? "scaleX(1)" : "scaleX(0)",
              opacity: inView ? 1 : 0,
              transition: "transform 1.2s ease 1.2s, opacity 1.2s ease 1.2s",
            }}
          >
            {/* Shimmer sweep */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(245,196,0,0.2), transparent)",
                animation: inView
                  ? "shimmer 4s ease-in-out 1.5s infinite"
                  : "none",
              }}
            />
          </div>
        </div>
      </section>
    </>
  );
}
