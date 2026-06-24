"use client";

import { useEffect, useRef, useState } from "react";
import { Award, Unlock, Users, Fingerprint, ShieldCheck } from "lucide-react";

const values = [
  {
    name: "Excellence",
    descriptor: "We hold every frame to the highest standard.",
    icon: Award,
  },
  {
    name: "Access",
    descriptor: "Great equipment and great opportunity should not be gatekept.",
    icon: Unlock,
  },
  {
    name: "Community",
    descriptor:
      "The creators we serve are not clients — they are collaborators.",
    icon: Users,
  },
  {
    name: "Authenticity",
    descriptor: "African stories told by Africans, on African terms.",
    icon: Fingerprint,
  },
  {
    name: "Integrity",
    descriptor: "We build businesses we are proud to stand behind.",
    icon: ShieldCheck,
  },
];

export default function CoreValues() {
  const rowRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [revealed, setRevealed] = useState<boolean[]>(() =>
    new Array(values.length).fill(false),
  );
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    // Reveal each row once, the first time it enters the viewport
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number((entry.target as HTMLElement).dataset.index);
            setRevealed((prev) => {
              if (prev[idx]) return prev;
              const next = [...prev];
              next[idx] = true;
              return next;
            });
          }
        });
      },
      { threshold: 0.15 },
    );

    // Track which row is currently centered, to drive the active highlight + progress dot
    const activeObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number((entry.target as HTMLElement).dataset.index);
            setActiveIndex(idx);
          }
        });
      },
      { threshold: 0, rootMargin: "-45% 0px -45% 0px" },
    );

    rowRefs.current.forEach((el) => {
      if (!el) return;
      revealObserver.observe(el);
      activeObserver.observe(el);
    });

    return () => {
      revealObserver.disconnect();
      activeObserver.disconnect();
    };
  }, []);

  return (
    <section className="bg-[#1A1A1A] py-28">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section label */}
        <p className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#F5C400] mb-14">
          Core Values
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-28 items-start">
          {/* LEFT — Cinematic statement, sticky, with live progress track */}
          <div className="lg:sticky lg:top-28">
            {/* <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-extrabold leading-[1.15] tracking-tight text-white"> */}
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.6rem] font-extrabold leading-[1.15] tracking-tight text-white">
              What we stand for.{" "}
              <span className="text-white/30">Every single day.</span>
            </h2>
            <p className="text-white/40 text-base leading-relaxed mt-8">
              These are not aspirational slogans. They are the operating
              principles behind every decision we make as a group.
            </p>

            {/* Progress track */}
          </div>

          {/* RIGHT — Values list */}
          <div className="flex flex-col divide-y divide-white/10">
            {values.map(({ name, descriptor, icon: Icon }, index) => {
              const isRevealed = revealed[index];
              const isActive = activeIndex === index;

              return (
                <div
                  key={name}
                  ref={(el) => {
                    rowRefs.current[index] = el;
                  }}
                  data-index={index}
                  className={`relative py-8 flex items-start gap-6 transition-all duration-700 ease-out ${
                    isRevealed
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 translate-x-6"
                  }`}
                  style={{ transitionDelay: isRevealed ? "0ms" : "0ms" }}
                >
                  {/* Highlight panel slides in behind active row */}
                  <div
                    className={`absolute inset-y-1 -left-6 -right-6 rounded-xl bg-gradient-to-r from-[#F5C400]/[0.06] to-transparent transition-all duration-500 ease-out ${
                      isActive
                        ? "opacity-100 scale-x-100"
                        : "opacity-0 scale-x-95"
                    }`}
                    style={{ transformOrigin: "left center" }}
                    aria-hidden="true"
                  />

                  {/* Giant faint number, only visible when active */}
                  <span
                    className={`pointer-events-none absolute -top-2 right-0 font-extrabold text-white select-none transition-all duration-500 ease-out ${
                      isActive
                        ? "text-7xl opacity-[0.04] translate-y-0"
                        : "text-7xl opacity-0 translate-y-2"
                    }`}
                    aria-hidden="true"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {/* Icon — outline draws/fills in when active */}
                  <div
                    className={`relative z-10 flex-shrink-0 mt-1 flex items-center justify-center w-9 h-9 rounded-full border transition-all duration-500 ease-out ${
                      isActive
                        ? "border-[#F5C400] bg-[#F5C400]/10 scale-100"
                        : "border-white/15 bg-transparent scale-90"
                    }`}
                  >
                    <Icon
                      className={`transition-colors duration-500 ${
                        isActive ? "text-[#F5C400]" : "text-white/40"
                      }`}
                      size={16}
                      strokeWidth={1.75}
                    />
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    <p
                      className={`font-bold text-lg mb-1 transition-colors duration-500 ${
                        isActive ? "text-white" : "text-white/70"
                      }`}
                    >
                      {name}
                    </p>
                    <p
                      className={`text-base leading-relaxed transition-colors duration-500 ${
                        isActive ? "text-white/65" : "text-white/40"
                      }`}
                    >
                      {descriptor}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
