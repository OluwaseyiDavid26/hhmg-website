"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0D0D0D]">
      {/* ── LAYER 1 — Base background ── */}
      <div className="absolute inset-0 bg-[#0D0D0D]" />

      {/* ── LAYER 2 — Film grain ── */}
      <div
        className="absolute inset-0 z-[1] opacity-[0.18] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='grain'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23grain)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "200px 200px",
        }}
      />

      {/* ── LAYER 3 — Cinematic light leak top left ── */}
      <div
        className="absolute z-[2] pointer-events-none"
        style={{
          top: "-10%",
          left: "-5%",
          width: "55%",
          height: "70%",
          background:
            "radial-gradient(ellipse at top left, rgba(245,196,0,0.09) 0%, rgba(245,196,0,0.03) 40%, transparent 70%)",
          filter: "blur(40px)",
          opacity: mounted ? 1 : 0,
          transition: "opacity 2s ease",
        }}
      />

      {/* ── LAYER 4 — Deep vignette ── */}
      <div
        className="absolute inset-0 z-[3] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.55) 70%, rgba(0,0,0,0.85) 100%)",
        }}
      />

      {/* ── LAYER 5 — Scan lines ── */}
      <div
        className="absolute inset-0 z-[4] opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.8) 2px, rgba(255,255,255,0.8) 3px)",
          backgroundSize: "100% 4px",
        }}
      />

      {/* ── LAYER 6 — Bottom fade ── */}
      <div className="absolute bottom-0 left-0 right-0 h-48 z-[5] bg-gradient-to-t from-[#1A1A1A] to-transparent pointer-events-none" />

      {/* ── CONTENT ── */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Eyebrow — fades in first */}
        <div
          className="inline-flex items-center gap-3 mb-8"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(12px)",
            transition: "opacity 0.8s ease 0.1s, transform 0.8s ease 0.1s",
          }}
        >
          {/* <div className="w-10 h-[1px] bg-[#F5C400]" />
          <span className="text-[#F5C400] text-[10px] font-bold tracking-[0.35em] uppercase">
            Lagos & Abuja · Est. 2026
          </span>
          <div className="w-10 h-[1px] bg-[#F5C400]" /> */}
        </div>

        {/* H1 — fades in second */}
        <h1
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[90px] font-black text-white leading-[1.0] tracking-[-0.02em] mb-8"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.9s ease 0.3s, transform 0.9s ease 0.3s",
          }}
        >
          Africa Has Stories
          <br />
          the World{" "}
          <em
            className="not-italic"
            style={{
              color: "#F5C400",
              textShadow: "0 0 80px rgba(245,196,0,0.25)",
            }}
          >
            Needs to Hear.
          </em>
        </h1>

        {/* Secondary line — fades in third */}
        <p
          className="text-white/30 text-lg sm:text-xl md:text-2xl font-light tracking-wide mb-6 uppercase"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(16px)",
            transition: "opacity 0.9s ease 0.5s, transform 0.9s ease 0.5s",
          }}
        >
          We Build What It Takes to Tell Them.
        </p>

        {/* Divider — fades in fourth */}
        <div
          className="flex items-center justify-center gap-4 mb-8"
          style={{
            opacity: mounted ? 1 : 0,
            transition: "opacity 0.8s ease 0.65s",
          }}
        >
          <div
            className="h-[1px] bg-white/10"
            style={{
              width: mounted ? "64px" : "0px",
              transition: "width 0.8s ease 0.65s",
            }}
          />
          <div className="w-1 h-1 rounded-full bg-[#F5C400]/60" />
          <div
            className="h-[1px] bg-white/10"
            style={{
              width: mounted ? "64px" : "0px",
              transition: "width 0.8s ease 0.65s",
            }}
          />
        </div>

        {/* Sub-copy — fades in fifth */}
        <p
          className="text-white/50 text-base sm:text-lg max-w-xl mx-auto leading-relaxed mb-12"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(12px)",
            transition: "opacity 0.9s ease 0.75s, transform 0.9s ease 0.75s",
          }}
        >
          Hand Held Media Group is a Lagos and Abuja-based media holding company
          — equipping creators, producing original content, and building the
          infrastructure for African storytelling at its finest.
        </p>

        {/* CTAs — fades in last */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(12px)",
            transition: "opacity 0.9s ease 0.9s, transform 0.9s ease 0.9s",
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

        {/* Scroll indicator — fades in last */}
      </div>

      {/* ── Corner frame marks ── */}
      {/* Top left */}
      <div
        className="absolute top-8 left-8 z-10 pointer-events-none"
        style={{
          opacity: mounted ? 1 : 0,
          transition: "opacity 1s ease 1.4s",
        }}
      >
        <div className="w-6 h-[1px] bg-white/20" />
        <div className="w-[1px] h-6 bg-white/20" />
      </div>

      {/* Top right */}
      <div
        className="absolute top-8 right-8 z-10 pointer-events-none flex flex-col items-end"
        style={{
          opacity: mounted ? 1 : 0,
          transition: "opacity 1s ease 1.4s",
        }}
      >
        <div className="w-6 h-[1px] bg-white/20" />
        <div className="w-[1px] h-6 bg-white/20 ml-auto" />
      </div>

      {/* Bottom left */}
      <div
        className="absolute bottom-8 left-8 z-10 pointer-events-none flex flex-col justify-end"
        style={{
          opacity: mounted ? 1 : 0,
          transition: "opacity 1s ease 1.4s",
        }}
      >
        <div className="w-[1px] h-6 bg-white/20" />
        <div className="w-6 h-[1px] bg-white/20" />
      </div>

      {/* Bottom right */}
      <div
        className="absolute bottom-8 right-8 z-10 pointer-events-none flex flex-col items-end justify-end"
        style={{
          opacity: mounted ? 1 : 0,
          transition: "opacity 1s ease 1.4s",
        }}
      >
        <div className="w-[1px] h-6 bg-white/20 ml-auto" />
        <div className="w-6 h-[1px] bg-white/20" />
      </div>
    </section>
  );
}
