"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}

export default function RestoredSpotlight() {
  const { ref, inView } = useInView(0.15);

  return (
    <section className="bg-[#1A1A1A] py-24 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Outer card — fades + scales up */}
        <div
          className="relative rounded-2xl overflow-hidden border border-white/10"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView
              ? "translateY(0) scale(1)"
              : "translateY(32px) scale(0.98)",
            transition: "opacity 0.9s ease 0.1s, transform 0.9s ease 0.1s",
          }}
        >
          {/* Background layers */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-[#0D0D0D]" />

            {/* Film grain */}
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                backgroundSize: "200px 200px",
              }}
            />

            {/* Yellow glow */}
            <div
              className="absolute -left-20 top-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-[#F5C400] rounded-full blur-[80px]"
              style={{
                opacity: inView ? 0.06 : 0,
                transition: "opacity 1.5s ease 0.4s",
              }}
            />

            {/* Vignette */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0D0D0D]/90 via-[#0D0D0D]/60 to-[#0D0D0D]/30" />
          </div>

          {/* Content */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Left — main content */}
            <div className="p-10 sm:p-14 flex flex-col justify-center">
              {/* Status badge */}
              <div
                className="inline-flex items-center gap-2 mb-8 w-fit"
                style={{
                  opacity: inView ? 1 : 0,
                  transform: inView ? "translateY(0)" : "translateY(12px)",
                  transition:
                    "opacity 0.7s ease 0.3s, transform 0.7s ease 0.3s",
                }}
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F5C400] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#F5C400]" />
                </span>
                <span className="text-[#F5C400] text-xs font-bold tracking-[0.2em] uppercase">
                  Now in Production
                </span>
              </div>

              {/* Title */}
              <h2
                className="font-display text-5xl sm:text-6xl md:text-7xl font-bold text-white tracking-tight mb-3"
                style={{
                  opacity: inView ? 1 : 0,
                  transform: inView ? "translateY(0)" : "translateY(20px)",
                  transition:
                    "opacity 0.9s ease 0.45s, transform 0.9s ease 0.45s",
                }}
              >
                Restored
              </h2>

              {/* Series label */}
              <p
                className="text-white/40 text-sm font-medium tracking-widest uppercase mb-8"
                style={{
                  opacity: inView ? 1 : 0,
                  transform: inView ? "translateY(0)" : "translateY(12px)",
                  transition:
                    "opacity 0.7s ease 0.55s, transform 0.7s ease 0.55s",
                }}
              >
                A TV Testimony Series
              </p>

              {/* Divider — grows in */}
              <div
                className="h-[2px] bg-[#F5C400] mb-8"
                style={{
                  width: inView ? "48px" : "0px",
                  transition: "width 0.7s ease 0.65s",
                }}
              />

              {/* Description */}
              <p
                className="text-white/65 text-base sm:text-lg leading-relaxed max-w-md mb-10"
                style={{
                  opacity: inView ? 1 : 0,
                  transform: inView ? "translateY(0)" : "translateY(16px)",
                  transition:
                    "opacity 0.8s ease 0.75s, transform 0.8s ease 0.75s",
                }}
              >
                Real stories. Real transformation.{" "}
                <span className="text-white/90 font-medium">Restored</span>{" "}
                follows individuals whose lives have been radically changed —
                and brings their testimony to the screen with cinematic care.
              </p>

              {/* CTAs */}
              <div
                className="flex flex-col sm:flex-row gap-4"
                style={{
                  opacity: inView ? 1 : 0,
                  transform: inView ? "translateY(0)" : "translateY(12px)",
                  transition:
                    "opacity 0.8s ease 0.9s, transform 0.8s ease 0.9s",
                }}
              >
                <Link
                  href="/restored"
                  className="inline-flex items-center justify-center gap-2 bg-[#F5C400] text-[#1A1A1A] font-bold text-sm px-7 py-3.5 rounded-md hover:bg-[#e6b800] transition-all duration-200 hover:scale-[1.02]"
                >
                  Learn More About Restored
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
                  className="inline-flex items-center justify-center gap-2 border border-white/20 text-white/70 text-sm font-medium px-7 py-3.5 rounded-md hover:border-white/40 hover:text-white transition-all duration-200"
                >
                  Partner With Us
                </Link>
              </div>
            </div>

            {/* Right — decorative panel */}
            <div className="hidden lg:flex items-center justify-center p-14 relative">
              {/* Large decorative R — fades in late */}
              <div
                className="absolute inset-0 flex items-center justify-center"
                style={{
                  opacity: inView ? 1 : 0,
                  transition: "opacity 1.5s ease 0.6s",
                }}
              >
                <span className="text-[20rem] font-black text-white/[0.02] leading-none select-none pointer-events-none">
                  R
                </span>
              </div>

              {/* Floating info card — slides in from right */}
              <div
                className="relative z-10 bg-white/[0.04] border border-white/10 rounded-xl p-7 w-full max-w-xs backdrop-blur-sm"
                style={{
                  opacity: inView ? 1 : 0,
                  transform: inView ? "translateX(0)" : "translateX(40px)",
                  transition:
                    "opacity 0.9s ease 0.7s, transform 0.9s ease 0.7s",
                }}
              >
                {/* Play icon */}
                <div className="w-12 h-12 rounded-full border-2 border-[#F5C400]/60 flex items-center justify-center mb-6">
                  <svg
                    className="w-5 h-5 text-[#F5C400] ml-0.5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>

                <h4 className="text-white font-semibold text-sm mb-1">
                  Restored
                </h4>
                <p className="text-white/40 text-xs mb-5">
                  Season 1 · In Production
                </p>

                {/* Progress bar — animates width */}
                <div className="mb-2">
                  <div className="flex justify-between text-xs text-white/30 mb-1.5">
                    <span>Production progress</span>
                    <span>In progress</span>
                  </div>
                  <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#F5C400] rounded-full"
                      style={{
                        width: inView ? "40%" : "0%",
                        transition: "width 1.2s ease 1.1s",
                      }}
                    />
                  </div>
                </div>

                <div className="mt-6 pt-5 border-t border-white/10">
                  <p className="text-white/30 text-xs leading-relaxed">
                    Distribution details to follow. Join the mailing list for
                    updates.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom border accent — grows in */}
          <div
            className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-[#F5C400]/60 via-[#F5C400]/20 to-transparent"
            style={{
              width: inView ? "100%" : "0%",
              transition: "width 1.2s ease 0.8s",
            }}
          />
        </div>
      </div>
    </section>
  );
}
