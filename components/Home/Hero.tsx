"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 150);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;
    const ctx = context;
    let W = 0,
      H = 0,
      t = 0;

    const resize = () => {
      W = canvas.width = canvas.offsetWidth;
      H = canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    type Dot = { lat: number; lng: number; africa: boolean };
    const LAND: Dot[] = [];
    const rand = (min: number, max: number) =>
      Math.random() * (max - min) + min;
    const deg = (d: number) => (d * Math.PI) / 180;

    for (let i = 0; i < 280; i++)
      LAND.push({
        lat: deg(rand(-35, 37)),
        lng: deg(rand(-18, 52)),
        africa: true,
      });
    for (let i = 0; i < 110; i++)
      LAND.push({
        lat: deg(rand(36, 71)),
        lng: deg(rand(-10, 40)),
        africa: false,
      });
    for (let i = 0; i < 160; i++)
      LAND.push({
        lat: deg(rand(15, 72)),
        lng: deg(rand(-168, -52)),
        africa: false,
      });
    for (let i = 0; i < 110; i++)
      LAND.push({
        lat: deg(rand(-55, 12)),
        lng: deg(rand(-82, -34)),
        africa: false,
      });
    for (let i = 0; i < 240; i++)
      LAND.push({
        lat: deg(rand(1, 75)),
        lng: deg(rand(26, 145)),
        africa: false,
      });
    for (let i = 0; i < 70; i++)
      LAND.push({
        lat: deg(rand(-45, -10)),
        lng: deg(rand(114, 180)),
        africa: false,
      });

    type Particle = {
      x: number;
      y: number;
      vx: number;
      vy: number;
      r: number;
      a: number;
      gold: boolean;
    };
    const PTS: Particle[] = Array.from({ length: 60 }, () => ({
      x: Math.random(),
      y: Math.random(),
      vx: (Math.random() - 0.5) * 0.00025,
      vy: (Math.random() - 0.5) * 0.00025,
      r: Math.random() * 1.3 + 0.3,
      a: Math.random() * 0.35 + 0.06,
      gold: Math.random() < 0.28,
    }));

    function project(
      lat: number,
      lng: number,
      rotY: number,
      cx: number,
      cy: number,
      R: number,
    ) {
      const x2 = Math.cos(lat) * Math.sin(lng - rotY);
      const y2 = Math.sin(lat);
      const z2 = Math.cos(lat) * Math.cos(lng - rotY);
      if (z2 < 0) return null;
      return { px: cx + R * x2, py: cy - R * y2, z: z2 };
    }

    function draw() {
      t += 0.0016;
      ctx.clearRect(0, 0, W, H);

      const g1 = ctx.createRadialGradient(
        W * 0.15,
        H * 0.48,
        0,
        W * 0.15,
        H * 0.48,
        W * 0.42,
      );
      g1.addColorStop(0, "rgba(245,196,0,0.075)");
      g1.addColorStop(1, "transparent");
      ctx.fillStyle = g1;
      ctx.fillRect(0, 0, W, H);

      const R = Math.min(W, H) * 0.4;
      const cx = W * 0.72;
      const cy = H * 0.5;

      const g2 = ctx.createRadialGradient(cx, cy, R * 0.3, cx, cy, R * 1.1);
      g2.addColorStop(0, "rgba(245,196,0,0.03)");
      g2.addColorStop(1, "transparent");
      ctx.fillStyle = g2;
      ctx.fillRect(0, 0, W, H);

      ctx.beginPath();
      ctx.arc(cx, cy, R, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(245,196,0,0.055)";
      ctx.lineWidth = 1;
      ctx.stroke();

      ctx.strokeStyle = "rgba(255,255,255,0.022)";
      ctx.lineWidth = 0.5;
      for (let la = -60; la <= 60; la += 30) {
        ctx.beginPath();
        let first = true;
        for (let lo = -180; lo <= 180; lo += 3) {
          const p = project(deg(la), deg(lo), t, cx, cy, R);
          if (!p) {
            first = true;
            continue;
          }
          first ? ctx.moveTo(p.px, p.py) : ctx.lineTo(p.px, p.py);
          first = false;
        }
        ctx.stroke();
      }

      for (let lo = -180; lo <= 180; lo += 30) {
        ctx.beginPath();
        let first = true;
        for (let la = -90; la <= 90; la += 3) {
          const p = project(deg(la), deg(lo), t, cx, cy, R);
          if (!p) {
            first = true;
            continue;
          }
          first ? ctx.moveTo(p.px, p.py) : ctx.lineTo(p.px, p.py);
          first = false;
        }
        ctx.stroke();
      }

      LAND.forEach((d) => {
        const p = project(d.lat, d.lng, t, cx, cy, R);
        if (!p) return;
        const fade = 0.35 + p.z * 0.65;
        ctx.beginPath();
        ctx.arc(p.px, p.py, d.africa ? 2.4 : 1.5, 0, Math.PI * 2);
        ctx.fillStyle = d.africa
          ? `rgba(245,196,0,${(fade * 0.8).toFixed(3)})`
          : `rgba(255,255,255,${(fade * 0.22).toFixed(3)})`;
        ctx.fill();
      });

      const pulse = 0.5 + 0.5 * Math.sin(t * 2.5);
      const afCx = cx + R * Math.cos(deg(2)) * Math.sin(deg(20) - t);
      const afCy = cy - R * Math.sin(deg(2));
      const ag = ctx.createRadialGradient(afCx, afCy, 0, afCx, afCy, R * 0.38);
      ag.addColorStop(0, `rgba(245,196,0,${(0.04 + pulse * 0.04).toFixed(3)})`);
      ag.addColorStop(1, "transparent");
      ctx.fillStyle = ag;
      ctx.fillRect(0, 0, W, H);

      const scanY = ((t * 55) % (H + 40)) - 20;
      const sg = ctx.createLinearGradient(0, scanY, 0, scanY + 40);
      sg.addColorStop(0, "transparent");
      sg.addColorStop(0.5, "rgba(245,196,0,0.016)");
      sg.addColorStop(1, "transparent");
      ctx.fillStyle = sg;
      ctx.fillRect(0, scanY, W, 40);

      PTS.forEach((p) => {
        p.x = (p.x + p.vx + 1) % 1;
        p.y = (p.y + p.vy + 1) % 1;
        const px = p.x * W * 0.52;
        const py = p.y * H;
        ctx.beginPath();
        ctx.arc(px, py, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.gold
          ? `rgba(245,196,0,${p.a})`
          : `rgba(255,255,255,${p.a * 0.5})`;
        ctx.fill();
      });

      rafRef.current = requestAnimationFrame(draw);
    }

    rafRef.current = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0D0D0D]">
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: 1 }}
      />

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          zIndex: 2,
          opacity: 0.16,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='grain'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23grain)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "200px 200px",
        }}
      />

      <div
        className="absolute pointer-events-none"
        style={{
          zIndex: 3,
          top: "-10%",
          left: "-5%",
          width: "55%",
          height: "70%",
          background:
            "radial-gradient(ellipse at top left, rgba(245,196,0,0.08) 0%, rgba(245,196,0,0.02) 40%, transparent 70%)",
          filter: "blur(40px)",
          opacity: mounted ? 1 : 0,
          transition: "opacity 3s ease",
        }}
      />

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          zIndex: 4,
          background:
            "radial-gradient(ellipse at 40% 50%, transparent 20%, rgba(0,0,0,0.5) 65%, rgba(0,0,0,0.88) 100%)",
        }}
      />

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          zIndex: 5,
          opacity: 0.022,
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.8) 2px, rgba(255,255,255,0.8) 3px)",
          backgroundSize: "100% 4px",
        }}
      />

      <div
        className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none"
        style={{
          zIndex: 6,
          background: "linear-gradient(to top, #1A1A1A, transparent)",
        }}
      />

      {/* CONTENT */}
      <div
        className="relative max-w-5xl mx-auto px-6 text-center"
        style={{ zIndex: 10 }}
      >
        <h1
          className="font-display font-black text-white leading-[1.05] tracking-[-0.02em] mb-8"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted
              ? "translateY(0) scale(1)"
              : "translateY(28px) scale(1.04)",
            filter: mounted ? "blur(0px)" : "blur(10px)",
            transition:
              "opacity 1.4s cubic-bezier(0.16,1,0.3,1) 0.55s, transform 1.4s cubic-bezier(0.16,1,0.3,1) 0.55s, filter 1.4s cubic-bezier(0.16,1,0.3,1) 0.55s",
          }}
        >
          {/* LINE 1 */}
          <span className="flex items-end justify-center flex-wrap leading-none">
            {/* ── Africa A + "frica" locked together — never splits ── */}
            <span className="inline-flex items-end whitespace-nowrap">
              <span
                className="inline-flex items-end flex-shrink-0"
                aria-label="A"
                style={{ marginRight: "-0.01em", marginBottom: "0.01em" }}
              >
                <Image
                  src="/IMG-20260627-WA0036 copy copy.png"
                  alt=""
                  aria-hidden="true"
                  width={96}
                  height={117}
                  priority
                  className="object-contain object-bottom"
                  style={{
                    /* smaller on mobile so A+frica fits on one line */
                    width: "clamp(36px, 7.2vw, 92px)",
                    height: "auto",
                    mixBlendMode: "screen",
                    display: "block",
                  }}
                />
              </span>
              <span className="text-5xl sm:text-6xl md:text-7xl lg:text-[90px]">
                frica
              </span>
            </span>

            {/* "Has Stories" can wrap on its own line on very small screens */}
            <span className="text-5xl sm:text-6xl md:text-7xl lg:text-[90px]">
              &nbsp;Has Stories
            </span>
          </span>

          {/* LINE 2 — gold */}
          <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-[90px] mt-1">
            the World{" "}
            <em
              className="not-italic"
              style={{
                color: "#F5C400",
                textShadow: "0 0 80px rgba(245,196,0,0.28)",
              }}
            >
              Needs to Hear.
            </em>
          </span>
        </h1>

        {/* Secondary tagline */}
        <p
          className="text-white/30 text-lg sm:text-xl md:text-2xl font-light tracking-wide mb-6 uppercase"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(16px)",
            transition: "opacity 1.1s ease 1.3s, transform 1.1s ease 1.3s",
          }}
        >
          We Build What It Takes to Tell Them.
        </p>

        {/* Divider */}
        <div
          className="flex items-center justify-center gap-4 mb-8"
          style={{
            opacity: mounted ? 1 : 0,
            transition: "opacity 1s ease 1.65s",
          }}
        >
          <div
            className="h-[1px] bg-white/10"
            style={{
              width: mounted ? "64px" : "0px",
              transition: "width 1s ease 1.65s",
            }}
          />
          <div className="w-1 h-1 rounded-full bg-[#F5C400]/60" />
          <div
            className="h-[1px] bg-white/10"
            style={{
              width: mounted ? "64px" : "0px",
              transition: "width 1s ease 1.65s",
            }}
          />
        </div>

        {/* Sub-copy */}
        <p
          className="text-white/50 text-base sm:text-lg max-w-xl mx-auto leading-relaxed mb-12"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(12px)",
            transition: "opacity 1.1s ease 1.9s, transform 1.1s ease 1.9s",
          }}
        >
          Hand Held Media Group is a Lagos and Abuja-based media holding company
          — equipping creators, producing original content, and building the
          infrastructure for African storytelling at its finest.
        </p>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(12px)",
            transition: "opacity 1.1s ease 2.15s, transform 1.1s ease 2.15s",
          }}
        >
          <Link
            href="/companies"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#F5C400] text-[#1A1A1A] font-black text-sm px-9 py-4 rounded-sm hover:bg-[#e6b800] transition-all duration-200 tracking-wide uppercase"
          >
            Explore Our Work
            <svg
              className="w-4 h-4"
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

          <Link
            href="/work-with-us"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-white/15 text-white/70 text-sm font-medium px-9 py-4 rounded-sm hover:border-white/30 hover:text-white transition-all duration-200 tracking-wide uppercase"
          >
            Work With Us
          </Link>
        </div>
      </div>

      {/* Corner frame marks */}
      <div
        className="absolute top-8 left-8 pointer-events-none"
        style={{
          zIndex: 10,
          opacity: mounted ? 1 : 0,
          transition: "opacity 1.2s ease 2.6s",
        }}
      >
        <div className="w-6 h-[1px] bg-white/20" />
        <div className="w-[1px] h-6 bg-white/20" />
      </div>
      <div
        className="absolute top-8 right-8 pointer-events-none flex flex-col items-end"
        style={{
          zIndex: 10,
          opacity: mounted ? 1 : 0,
          transition: "opacity 1.2s ease 2.6s",
        }}
      >
        <div className="w-6 h-[1px] bg-white/20" />
        <div className="w-[1px] h-6 bg-white/20 ml-auto" />
      </div>
      <div
        className="absolute bottom-8 left-8 pointer-events-none flex flex-col justify-end"
        style={{
          zIndex: 10,
          opacity: mounted ? 1 : 0,
          transition: "opacity 1.2s ease 2.6s",
        }}
      >
        <div className="w-[1px] h-6 bg-white/20" />
        <div className="w-6 h-[1px] bg-white/20" />
      </div>
      <div
        className="absolute bottom-8 right-8 pointer-events-none flex flex-col items-end justify-end"
        style={{
          zIndex: 10,
          opacity: mounted ? 1 : 0,
          transition: "opacity 1.2s ease 2.6s",
        }}
      >
        <div className="w-[1px] h-6 bg-white/20 ml-auto" />
        <div className="w-6 h-[1px] bg-white/20" />
      </div>
    </section>
  );
}
