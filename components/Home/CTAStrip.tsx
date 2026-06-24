"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function CTAStrip() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#1A1A1A] py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div
          className={`relative rounded-2xl overflow-hidden border border-white/10 bg-[#111111] transition-all duration-700 ease-out ${
            isVisible
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-8 scale-[0.98]"
          }`}
        >
          {/* Background accents */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            {/* Yellow glow left — slow ambient breathing */}
            <div className="absolute -left-20 -top-20 w-72 h-72 rounded-full bg-[#F5C400] opacity-[0.07] blur-[80px] animate-[glowPulse_5s_ease-in-out_infinite]" />
            {/* Yellow glow right — offset breathing */}
            <div className="absolute -right-20 -bottom-20 w-72 h-72 rounded-full bg-[#F5C400] opacity-[0.05] blur-[80px] animate-[glowPulse_5s_ease-in-out_1.5s_infinite]" />
            {/* Top accent line — draws in once visible */}
            <div
              className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#F5C400]/50 to-transparent origin-center transition-transform duration-700 ease-out ${
                isVisible ? "scale-x-100" : "scale-x-0"
              }`}
              style={{ transitionDelay: "150ms" }}
            />
          </div>

          {/* Content */}
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10 px-10 sm:px-16 py-16">
            {/* Left — text */}
            <div className="text-center lg:text-left max-w-xl">
              {/* Eyebrow */}
              <div
                className={`inline-flex items-center gap-3 mb-5 transition-all duration-500 ease-out ${
                  isVisible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-3"
                }`}
                style={{ transitionDelay: "100ms" }}
              >
                <div className="w-6 h-[2px] bg-[#F5C400]" />
                <span className="text-[#F5C400] text-xs font-semibold tracking-[0.25em] uppercase">
                  Let's Work Together
                </span>
              </div>

              {/* Headline */}
              <h2
                className={`font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-[1.15] tracking-tight mb-5 transition-all duration-500 ease-out ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-3"
                }`}
                style={{ transitionDelay: "180ms" }}
              >
                Ready to Create{" "}
                <span className="text-[#F5C400]">Something?</span>
              </h2>

              {/* Sub-copy */}
              <p
                className={`text-white/50 text-base sm:text-lg leading-relaxed transition-all duration-500 ease-out ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-3"
                }`}
                style={{ transitionDelay: "260ms" }}
              >
                Whether you need a production partner, a camera kit, or a
                platform to grow — we have what you need.
              </p>
            </div>

            {/* Right — CTAs */}
            <div
              className={`flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-4 flex-shrink-0 transition-all duration-500 ease-out ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-3"
              }`}
              style={{ transitionDelay: "340ms" }}
            >
              <Link
                href="/contact"
                className="group relative inline-flex items-center justify-center gap-2 bg-[#F5C400] text-[#1A1A1A] font-bold text-sm px-8 py-4 rounded-md hover:bg-[#e6b800] transition-all duration-200 hover:scale-[1.02] whitespace-nowrap overflow-hidden"
              >
                {/* One-time light sweep once card is visible */}
                {isVisible && (
                  <span
                    className="absolute inset-0 -translate-x-full animate-[sweep_1.1s_ease-out_0.7s_forwards]"
                    style={{
                      background:
                        "linear-gradient(110deg, transparent 30%, rgba(255,255,255,0.45) 50%, transparent 70%)",
                    }}
                    aria-hidden="true"
                  />
                )}
                <span className="relative z-10">Get in Touch</span>
                <svg
                  className="relative z-10 w-4 h-4"
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
                className="inline-flex items-center justify-center gap-2 border border-white/20 text-white text-sm font-medium px-8 py-4 rounded-md hover:border-[#F5C400]/50 hover:text-[#F5C400] transition-all duration-200 whitespace-nowrap"
              >
                See How We Work
              </Link>
            </div>
          </div>

          {/* Bottom accent line */}
          <div
            className={`absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#F5C400]/30 to-transparent origin-center transition-transform duration-700 ease-out ${
              isVisible ? "scale-x-100" : "scale-x-0"
            }`}
            style={{ transitionDelay: "150ms" }}
          />
        </div>

        {/* Below card — quick links */}
        <div
          className={`mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 transition-all duration-500 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
          }`}
          style={{ transitionDelay: "420ms" }}
        >
          {[
            { label: "HH Media Studios", href: "/companies#studios" },
            { label: "HH Media Rentals", href: "/companies#rentals" },
            { label: "HH Creators Platform", href: "/companies#creators" },
            { label: "HH Production Co.", href: "/companies#production" },
          ].map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-white/30 text-xs hover:text-white/60 transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes glowPulse {
          0%,
          100% {
            opacity: 0.05;
            transform: scale(1);
          }
          50% {
            opacity: 0.1;
            transform: scale(1.1);
          }
        }
        @keyframes sweep {
          to {
            transform: translateX(250%);
          }
        }
      `}</style>
    </section>
  );
}
