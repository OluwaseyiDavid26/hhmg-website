"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const MOBILE_FRAMES = [
  { src: "/IMG-20260708-WA0027.jpg", label: "HHMG · PROD" },
  { src: "/images/film-set-action-stockcake.jpg", label: "STUDIOS" },
  { src: "/images/cinema-camera-mechanics-stockcake.jpg", label: "RENTALS" },
];

/* ── Globe canvas ── */
function GlobeCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const safeCanvas = canvas;
    const parent = safeCanvas.parentElement;
    if (!parent) return;
    const ctx = safeCanvas.getContext("2d")!;
    let t = 0;

    const resize = () => {
      safeCanvas.width = parent.offsetWidth;
      safeCanvas.height = parent.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const deg = (d: number) => (d * Math.PI) / 180;
    const rand = (a: number, b: number) => Math.random() * (b - a) + a;

    type Dot = { lat: number; lng: number; africa: boolean };
    const LAND: Dot[] = [];
    for (let i = 0; i < 300; i++)
      LAND.push({
        lat: deg(rand(-35, 37)),
        lng: deg(rand(-18, 52)),
        africa: true,
      });
    for (let i = 0; i < 90; i++)
      LAND.push({
        lat: deg(rand(36, 71)),
        lng: deg(rand(-10, 40)),
        africa: false,
      });
    for (let i = 0; i < 140; i++)
      LAND.push({
        lat: deg(rand(-55, 72)),
        lng: deg(rand(-168, -34)),
        africa: false,
      });
    for (let i = 0; i < 200; i++)
      LAND.push({
        lat: deg(rand(1, 75)),
        lng: deg(rand(26, 145)),
        africa: false,
      });
    for (let i = 0; i < 60; i++)
      LAND.push({
        lat: deg(rand(-45, -10)),
        lng: deg(rand(114, 180)),
        africa: false,
      });

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
      t += 0.005;
      const W = safeCanvas.width,
        H = safeCanvas.height;
      const isMobile = W < 1024;
      const cx = isMobile ? W * 0.5 : W * 0.4;
      const cy = H * 0.5;
      const R = Math.min(W, H) * (isMobile ? 0.42 : 0.34);

      ctx.clearRect(0, 0, W, H);

      const pulse = 0.5 + 0.5 * Math.sin(t * 1.2);
      const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, R * 1.5);
      g.addColorStop(0, `rgba(245,196,0,${(0.07 + pulse * 0.04).toFixed(3)})`);
      g.addColorStop(1, "transparent");
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, W, H);

      const afCenter = project(deg(1), deg(20), t, cx, cy, R);
      if (afCenter) {
        const afG = ctx.createRadialGradient(
          afCenter.px,
          afCenter.py,
          0,
          afCenter.px,
          afCenter.py,
          R * 0.5,
        );
        afG.addColorStop(
          0,
          `rgba(245,196,0,${(0.055 + pulse * 0.03).toFixed(3)})`,
        );
        afG.addColorStop(1, "transparent");
        ctx.fillStyle = afG;
        ctx.fillRect(0, 0, W, H);
      }

      ctx.beginPath();
      ctx.arc(cx, cy, R, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(245,196,0,0.07)";
      ctx.lineWidth = 1;
      ctx.stroke();

      ctx.strokeStyle = "rgba(255,255,255,0.035)";
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
        ctx.arc(p.px, p.py, d.africa ? 2.8 : 1.4, 0, Math.PI * 2);
        ctx.fillStyle = d.africa
          ? `rgba(245,196,0,${(fade * 0.9).toFixed(3)})`
          : `rgba(255,255,255,${(fade * 0.18).toFixed(3)})`;
        ctx.fill();
      });

      const afPulse = 0.5 + 0.5 * Math.sin(t * 2.5);
      const afDot = project(deg(1), deg(20), t, cx, cy, R);
      if (afDot) {
        ctx.beginPath();
        ctx.arc(afDot.px, afDot.py, 4 + afPulse * 3, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(245,196,0,${(0.15 + afPulse * 0.2).toFixed(3)})`;
        ctx.fill();
        ctx.beginPath();
        ctx.arc(afDot.px, afDot.py, 2, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(245,196,0,0.9)";
        ctx.fill();
      }

      const scanY = (t * 40) % H;
      const sg = ctx.createLinearGradient(0, scanY - 12, 0, scanY + 12);
      sg.addColorStop(0, "transparent");
      sg.addColorStop(0.5, "rgba(245,196,0,0.018)");
      sg.addColorStop(1, "transparent");
      ctx.fillStyle = sg;
      ctx.fillRect(0, scanY - 12, W, 24);

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
    />
  );
}

/* ── Single mosaic tile ── */
function MosaicTile({
  src,
  alt,
  rotate,
  delay,
  shadow,
}: {
  src: string;
  alt: string;
  rotate: string;
  delay: number;
  shadow: string;
}) {
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(t);
  }, [delay]);

  return (
    <div
      className="relative overflow-hidden rounded-xl w-full h-full"
      style={{
        transform: `rotate(${hovered ? "0deg" : rotate}) scale(${hovered ? 1.03 : 1})`,
        opacity: visible ? 1 : 0,
        boxShadow: hovered
          ? "0 28px 70px rgba(0,0,0,0.88), 0 0 0 1px rgba(245,196,0,0.32)"
          : shadow,
        transition:
          "transform 0.4s cubic-bezier(0.34,1.56,0.64,1), opacity 0.9s ease, box-shadow 0.4s ease",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        style={{ filter: "brightness(0.75) saturate(0.85)" }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(175deg,rgba(0,0,0,0.05) 0%,rgba(0,0,0,0.55) 100%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg,rgba(245,196,0,0.1),transparent 55%)",
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.35s",
        }}
      />
      <div
        className="absolute top-0 inset-x-0 h-px"
        style={{
          background:
            "linear-gradient(90deg,transparent,rgba(255,255,255,0.15),transparent)",
        }}
      />
      <div
        className="absolute top-0 inset-x-0 h-px"
        style={{
          background:
            "linear-gradient(90deg,transparent,rgba(245,196,0,0.6),transparent)",
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.35s",
        }}
      />
    </div>
  );
}

/* ── Desktop mosaic — full hero height ── */
function DesktopMosaic({ mounted }: { mounted: boolean }) {
  return (
    <div
      className="absolute top-0 right-0 bottom-0 hidden lg:flex flex-col gap-3 pr-5 pl-2"
      style={{
        width: "32%",
        zIndex: 2,
        opacity: mounted ? 1 : 0,
        transition: "opacity 0.8s ease 0.4s",
        /* match hero content top/bottom padding so images
           start at headline and end at CTA buttons */
        paddingTop: "11vh",
        paddingBottom: "11vh",
      }}
    >
      {/* ROW 1 — two side by side */}
      <div className="flex gap-3 flex-1">
        <MosaicTile
          src="/IMG-20260708-WA0027.jpg"
          alt="HHMG production"
          rotate="-3.5deg"
          delay={500}
          shadow="0 20px 55px rgba(0,0,0,0.80), 0 0 0 1px rgba(255,255,255,0.08)"
        />
        <MosaicTile
          src="/images/video-production-agency-london.jpg"
          alt="Video production"
          rotate="4deg"
          delay={650}
          shadow="0 18px 50px rgba(0,0,0,0.74), 0 0 0 1px rgba(255,255,255,0.07)"
        />
      </div>

      {/* ROW 2 — single wide, slightly taller */}
      <div className="flex-[1.2]">
        <MosaicTile
          src="/images/film-set-action-stockcake.jpg"
          alt="Film set action"
          rotate="2.5deg"
          delay={800}
          shadow="0 22px 60px rgba(0,0,0,0.82), 0 0 0 1px rgba(255,255,255,0.07)"
        />
      </div>

      {/* ROW 3 — two side by side */}
      <div className="flex gap-3 flex-1">
        <MosaicTile
          src="/images/cinema-camera-mechanics-stockcake.jpg"
          alt="Cinema camera"
          rotate="-2deg"
          delay={950}
          shadow="0 18px 50px rgba(0,0,0,0.72), 0 0 0 1px rgba(255,255,255,0.06)"
        />
        <MosaicTile
          src="/images/cinematic-crew-silhouettes-stockcake.jpg"
          alt="Crew silhouettes"
          rotate="3.5deg"
          delay={1100}
          shadow="0 16px 45px rgba(0,0,0,0.70), 0 0 0 1px rgba(255,255,255,0.06)"
        />
      </div>

      {/* Left fade into content */}
      <div
        className="absolute inset-y-0 left-0 w-14 pointer-events-none"
        style={{
          background: "linear-gradient(to left,transparent,#0D0D0D)",
          zIndex: 10,
        }}
      />
    </div>
  );
}

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 150);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <style>{`
        @keyframes fadeBlur {
          from { opacity:0; filter:blur(10px); transform:translateY(28px) scale(1.04); }
          to   { opacity:1; filter:blur(0);    transform:translateY(0) scale(1); }
        }
        @keyframes fadeUp {
          from { opacity:0; transform:translateY(16px); }
          to   { opacity:1; transform:translateY(0); }
        }
      `}</style>

      <section className="relative min-h-screen bg-[#0D0D0D] overflow-hidden flex flex-col lg:block">
        {/* Globe */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ zIndex: 1 }}
        >
          <GlobeCanvas />
        </div>

        {/* Desktop mosaic */}
        <DesktopMosaic mounted={mounted} />

        {/* Film grain */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            zIndex: 3,
            opacity: 0.14,
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='grain'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23grain)'/%3E%3C/svg%3E")`,
            backgroundSize: "200px 200px",
          }}
        />

        {/* Vignette */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            zIndex: 4,
            background:
              "radial-gradient(ellipse at center,transparent 25%,rgba(0,0,0,0.45) 60%,rgba(0,0,0,0.85) 100%)",
          }}
        />

        {/* Light leak */}
        <div
          className="absolute pointer-events-none"
          style={{
            zIndex: 3,
            top: "-10%",
            left: "-5%",
            width: "55%",
            height: "70%",
            background:
              "radial-gradient(ellipse at top left,rgba(245,196,0,0.07) 0%,rgba(245,196,0,0.02) 40%,transparent 70%)",
            filter: "blur(40px)",
            opacity: mounted ? 1 : 0,
            transition: "opacity 3s ease",
          }}
        />

        {/* Bottom fade */}
        <div
          className="absolute bottom-0 inset-x-0 h-48 pointer-events-none"
          style={{
            zIndex: 5,
            background: "linear-gradient(to top,#1A1A1A,transparent)",
          }}
        />

        {/* Corner marks */}
        <div
          className="absolute top-8 left-8 pointer-events-none"
          style={{
            zIndex: 10,
            opacity: mounted ? 1 : 0,
            transition: "opacity 1.2s ease 2.6s",
          }}
        >
          <div className="w-6 h-px bg-white/20" />
          <div className="w-px h-6 bg-white/20" />
        </div>
        <div
          className="absolute top-8 right-8 pointer-events-none flex flex-col items-end"
          style={{
            zIndex: 10,
            opacity: mounted ? 1 : 0,
            transition: "opacity 1.2s ease 2.6s",
          }}
        >
          <div className="w-6 h-px bg-white/20" />
          <div className="w-px h-6 bg-white/20 ml-auto" />
        </div>
        <div
          className="absolute bottom-8 left-8 pointer-events-none flex flex-col justify-end"
          style={{
            zIndex: 10,
            opacity: mounted ? 1 : 0,
            transition: "opacity 1.2s ease 2.6s",
          }}
        >
          <div className="w-px h-6 bg-white/20" />
          <div className="w-6 h-px bg-white/20" />
        </div>
        <div
          className="absolute bottom-8 right-8 pointer-events-none flex flex-col items-end justify-end"
          style={{
            zIndex: 10,
            opacity: mounted ? 1 : 0,
            transition: "opacity 1.2s ease 2.6s",
          }}
        >
          <div className="w-px h-6 bg-white/20 ml-auto" />
          <div className="w-6 h-px bg-white/20" />
        </div>

        {/* CONTENT — left aligned on desktop */}
        <div
          className="relative flex-1 flex items-center lg:min-h-screen"
          style={{ zIndex: 10 }}
        >
          <div
            className="w-full px-6
                          text-center mx-auto max-w-5xl
                          lg:text-left lg:ml-[5%] lg:mr-auto lg:max-w-[58%]
                          pt-24 pb-8 lg:py-0"
          >
            {/* H1 */}
            <h1
              className="font-display font-black text-white leading-[1.05] tracking-[-0.02em] mb-8"
              style={{
                fontSize: "clamp(40px,8vw,90px)",
                animation: mounted
                  ? "fadeBlur 1.4s cubic-bezier(0.16,1,0.3,1) 0.55s both"
                  : "none",
                opacity: mounted ? undefined : 0,
              }}
            >
              <span className="flex items-end justify-center lg:justify-start flex-wrap leading-none">
                <span className="inline-flex items-end whitespace-nowrap">
                  <span
                    className="inline-flex items-end flex-shrink-0"
                    aria-label="A"
                    style={{ marginRight: "-0.01em", marginBottom: "0.01em" }}
                  >
                    <img
                      src="/IMG-20260627-WA0036 copy copy.png"
                      alt=""
                      aria-hidden="true"
                      style={{
                        width: "clamp(34px,7.2vw,92px)",
                        height: "auto",
                        mixBlendMode: "screen",
                        display: "block",
                      }}
                    />
                  </span>
                  <span>frica Has Stories</span>
                </span>
                <span>&nbsp;the World</span>
              </span>
              <em
                className="not-italic block"
                style={{
                  color: "#F5C400",
                  textShadow: "0 0 80px rgba(245,196,0,0.28)",
                }}
              >
                Needs to Hear.
              </em>
            </h1>

            {/* Tagline */}
            <p
              className="text-white/30 text-lg sm:text-xl md:text-2xl font-light tracking-wide mb-6 uppercase"
              style={{
                animation: mounted ? "fadeUp 1.1s ease 1.3s both" : "none",
                opacity: mounted ? undefined : 0,
              }}
            >
              We Build What It Takes to Tell Them.
            </p>

            {/* Divider */}
            <div
              className="flex items-center justify-center lg:justify-start gap-4 mb-8"
              style={{
                opacity: mounted ? 1 : 0,
                transition: "opacity 1s ease 1.65s",
              }}
            >
              <div
                className="h-px bg-white/10"
                style={{
                  width: mounted ? "64px" : "0px",
                  transition: "width 1s ease 1.65s",
                }}
              />
              <div className="w-1 h-1 rounded-full bg-[#F5C400]/60" />
              <div
                className="h-px bg-white/10"
                style={{
                  width: mounted ? "64px" : "0px",
                  transition: "width 1s ease 1.65s",
                }}
              />
            </div>

            {/* Sub-copy */}
            <p
              className="text-white/50 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed mb-12"
              style={{
                animation: mounted ? "fadeUp 1.1s ease 1.9s both" : "none",
                opacity: mounted ? undefined : 0,
              }}
            >
              Hand Held Media Group is a Lagos and Abuja-based media holding
              company — equipping creators, producing original content, and
              building the infrastructure for African storytelling at its
              finest.
            </p>

            {/* CTAs */}
            <div
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
              style={{
                animation: mounted ? "fadeUp 1.1s ease 2.15s both" : "none",
                opacity: mounted ? undefined : 0,
              }}
            >
              <Link
                href="/companies"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#F5C400] text-[#1A1A1A] font-black text-sm px-9 py-4 rounded-sm hover:bg-[#e6b800] hover:scale-[1.03] active:scale-[0.97] transition-all duration-200 tracking-wide uppercase"
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
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-white/15 text-white/70 text-sm font-medium px-9 py-4 rounded-sm hover:border-white/30 hover:text-white hover:scale-[1.03] active:scale-[0.97] transition-all duration-200 tracking-wide uppercase"
              >
                Work With Us
              </Link>
            </div>
          </div>
        </div>

        {/* MOBILE ONLY: Cinema letterbox frames */}
        <div className="relative lg:hidden px-5 pb-12" style={{ zIndex: 10 }}>
          <p
            className="text-center font-mono text-[8px] tracking-[0.25em] uppercase mb-3"
            style={{
              color: "rgba(245,196,0,0.4)",
              opacity: mounted ? 1 : 0,
              transition: "opacity 0.8s ease 0.6s",
            }}
          >
            Our Productions
          </p>
          {/* Wide frame */}
          <div
            className="relative h-[90px] mb-2 rounded-lg overflow-hidden border border-white/10"
            style={{
              boxShadow: "0 16px 40px rgba(0,0,0,0.8)",
              opacity: mounted ? 1 : 0,
              transform: mounted ? "translateY(0)" : "translateY(16px)",
              transition: "opacity 0.7s ease 0.7s,transform 0.7s ease 0.7s",
            }}
          >
            <div className="absolute top-0 inset-x-0 h-[5px] bg-[#0d0d0d] z-10" />
            <div className="absolute bottom-0 inset-x-0 h-[5px] bg-[#0d0d0d] z-10" />
            <Image
              src="/IMG-20260708-WA0027.jpg"
              alt="HHMG production"
              fill
              className="object-cover"
              style={{ filter: "brightness(0.65) saturate(0.75)" }}
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(160deg,rgba(0,0,0,0.05),rgba(0,0,0,0.6))",
              }}
            />
            <div
              className="absolute top-[5px] inset-x-0 h-px z-20"
              style={{
                background:
                  "linear-gradient(90deg,transparent,rgba(245,196,0,0.3),transparent)",
              }}
            />
            <span
              className="absolute bottom-2 left-3 z-20 font-mono text-[8px] tracking-widest uppercase"
              style={{ color: "rgba(245,196,0,0.65)" }}
            >
              HHMG · PROD
            </span>
          </div>
          {/* Two smaller frames */}
          <div className="flex gap-2">
            {MOBILE_FRAMES.slice(1).map((frame, i) => (
              <div
                key={frame.label}
                className="relative flex-1 h-[70px] rounded-lg overflow-hidden border border-white/10"
                style={{
                  boxShadow: "0 12px 32px rgba(0,0,0,0.8)",
                  opacity: mounted ? 1 : 0,
                  transform: mounted ? "translateY(0)" : "translateY(16px)",
                  transition: `opacity 0.7s ease ${0.85 + i * 0.1}s,transform 0.7s ease ${0.85 + i * 0.1}s`,
                }}
              >
                <div className="absolute top-0 inset-x-0 h-[5px] bg-[#0d0d0d] z-10" />
                <div className="absolute bottom-0 inset-x-0 h-[5px] bg-[#0d0d0d] z-10" />
                <Image
                  src={frame.src}
                  alt={frame.label}
                  fill
                  className="object-cover"
                  style={{ filter: "brightness(0.65) saturate(0.75)" }}
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(160deg,rgba(0,0,0,0.05),rgba(0,0,0,0.6))",
                  }}
                />
                <div
                  className="absolute top-[5px] inset-x-0 h-px z-20"
                  style={{
                    background:
                      "linear-gradient(90deg,transparent,rgba(245,196,0,0.3),transparent)",
                  }}
                />
                <span
                  className="absolute bottom-2 left-3 z-20 font-mono text-[8px] tracking-widest uppercase"
                  style={{ color: "rgba(245,196,0,0.65)" }}
                >
                  {frame.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
