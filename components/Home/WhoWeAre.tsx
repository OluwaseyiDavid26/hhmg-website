// import Link from "next/link";

// export default function WhoWeAre() {
//   return (
//     <section className="bg-[#1A1A1A] py-24 px-6">
//       <div className="max-w-6xl mx-auto">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-end">
//           {/* Left — headline */}
//           <div className="lg:col-span-5">
//             <div className="inline-flex items-center gap-3 mb-7">
//               <div className="w-8 h-[1px] bg-[#F5C400]" />
//               <span className="text-[#F5C400] text-[10px] font-bold tracking-[0.35em] uppercase">
//                 Who We Are
//               </span>
//             </div>

//             <h2 className="font-display text-5xl sm:text-6xl font-black text-white leading-[1.05] tracking-tight">
//               One Group. <span className="text-[#F5C400]">Four Companies.</span>{" "}
//               One Mission.
//             </h2>
//           </div>

//           {/* Right — copy + CTA */}
//           <div className="lg:col-span-7 flex flex-col gap-6 lg:pb-1">
//             <p className="text-white/60 text-base sm:text-lg leading-relaxed">
//               Hand Held Media Group brings together four focused subsidiaries
//               under one roof: production, equipment, creator development, and
//               original IP.
//             </p>

//             <p className="text-white/60 text-base sm:text-lg leading-relaxed">
//               We exist to close the gap between the stories Africa wants to tell
//               and the resources needed to tell them well.
//             </p>

//             <Link
//               href="/about"
//               className="inline-flex items-center gap-2 text-[#F5C400] text-sm font-semibold w-fit hover:gap-4 transition-all duration-200 mt-2"
//             >
//               Our Full Story
//               <svg
//                 className="w-4 h-4"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//                 strokeWidth={2.5}
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M17 8l4 4m0 0l-4 4m4-4H3"
//                 />
//               </svg>
//             </Link>
//           </div>
//         </div>

//         {/* Bottom divider */}
//         <div className="mt-20 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
//       </div>
//     </section>
//   );
// }

"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

const AFRICA_PATH = `M108,6 C118,4 132,7 144,14 C156,21 166,30 174,42
C182,54 186,66 186,80 C186,94 182,104 184,116 C186,128 194,136 196,150
C198,164 194,178 188,192 C182,206 174,216 170,232 C166,248 168,262 162,274
C156,286 146,294 136,300 C126,306 114,308 104,304 C94,300 88,290 80,280
C72,270 64,260 58,248 C52,236 48,222 44,208 C40,194 38,180 36,166
C34,152 30,140 30,126 C30,112 34,100 38,88 C42,76 48,66 56,58
C64,50 74,44 84,38 C94,32 100,24 108,6Z
M184,116 C192,120 200,118 204,126 C208,134 204,142 196,150`;

export default function WhoWeAre() {
  const sectionRef = useRef<HTMLElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const animatables = section.querySelectorAll<HTMLElement>("[data-animate]");
    const counters = section.querySelectorAll<HTMLElement>("[data-counter]");

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting || hasAnimated.current) return;
        hasAnimated.current = true;

        // Stagger fade-up
        animatables.forEach((el, i) => {
          const delay = Number(el.dataset.animate || 0) + i * 60;
          setTimeout(() => {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
          }, delay);
        });

        // Counter roll-up
        counters.forEach((el) => {
          const target = Number(el.dataset.counter);
          const duration = 900;
          const start = performance.now();
          const tick = (now: number) => {
            const p = Math.min((now - start) / duration, 1);
            const ease = 1 - Math.pow(1 - p, 3);
            el.textContent = String(Math.round(ease * target)).padStart(2, "0");
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        });
      },
      { threshold: 0.15 },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#1A1A1A] py-28 px-6 overflow-hidden"
    >
      {/* ── BG: slowly rotating Africa outline ── */}
      <div
        className="absolute pointer-events-none select-none"
        style={{
          right: "-8%",
          top: "50%",
          transform: "translateY(-50%)",
          width: "55%",
          maxWidth: "680px",
          opacity: 0.045,
          animation: "slowSpin 80s linear infinite",
        }}
      >
        <svg
          viewBox="0 0 220 320"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: "100%", height: "auto" }}
        >
          <path
            d={AFRICA_PATH}
            stroke="#F5C400"
            strokeWidth="2.5"
            strokeLinejoin="round"
            fill="none"
          />
          <ellipse
            cx="198"
            cy="215"
            rx="8"
            ry="18"
            stroke="#F5C400"
            strokeWidth="2"
            fill="none"
            transform="rotate(-10 198 215)"
          />
        </svg>
      </div>

      {/* ── Gold left accent rule ── */}
      <div
        className="absolute left-0 top-0 bottom-0 w-px pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, transparent 5%, #F5C400 30%, #F5C400 70%, transparent 95%)",
          opacity: 0.25,
        }}
      />

      {/* ── Scan line (CSS animation, one-shot via section entry) ── */}
      <div
        className="absolute inset-x-0 pointer-events-none"
        style={{
          height: "1px",
          background:
            "linear-gradient(90deg, transparent 0%, rgba(245,196,0,0.35) 40%, rgba(245,196,0,0.55) 50%, rgba(245,196,0,0.35) 60%, transparent 100%)",
          animation: "scanDown 1.8s cubic-bezier(0.4,0,0.6,1) 0.3s both",
          zIndex: 5,
        }}
      />

      <style>{`
        @keyframes slowSpin {
          from { transform: translateY(-50%) rotate(0deg); }
          to   { transform: translateY(-50%) rotate(360deg); }
        }
        @keyframes scanDown {
          from { top: 0%; opacity: 0; }
          10%  { opacity: 1; }
          90%  { opacity: 1; }
          to   { top: 100%; opacity: 0; }
        }
        [data-animate] {
          opacity: 0;
          transform: translateY(22px);
          transition: opacity 0.75s cubic-bezier(0.16,1,0.3,1), transform 0.75s cubic-bezier(0.16,1,0.3,1);
        }
      `}</style>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* ── TOP: eyebrow + headline + copy ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-end mb-20">
          {/* Left */}
          <div className="lg:col-span-5">
            <div
              className="inline-flex items-center gap-3 mb-7"
              data-animate="0"
            >
              <div className="w-8 h-px bg-[#F5C400]" />
              <span className="text-[#F5C400] text-[10px] font-bold tracking-[0.35em] uppercase">
                Who We Are
              </span>
            </div>

            <h2
              className="font-display text-5xl sm:text-6xl font-black text-white leading-[1.05] tracking-tight"
              data-animate="80"
            >
              One Group.{" "}
              <span
                className="relative inline-block"
                style={{
                  color: "transparent",
                  WebkitTextStroke: "1.5px #F5C400",
                }}
              >
                Four Companies.
              </span>{" "}
              <br />
              One Mission.
            </h2>
          </div>

          {/* Right */}
          <div className="lg:col-span-7 flex flex-col gap-6 lg:pb-1">
            <p
              className="text-white/60 text-base sm:text-lg leading-relaxed"
              data-animate="160"
            >
              Hand Held Media Group brings together four focused subsidiaries
              under one roof: production, equipment, creator development, and
              original IP.
            </p>
            <p
              className="text-white/60 text-base sm:text-lg leading-relaxed"
              data-animate="220"
            >
              We exist to close the gap between the stories Africa wants to tell
              and the resources needed to tell them well.
            </p>
            <Link
              href="/about"
              className="group inline-flex items-center gap-2 text-[#F5C400] text-sm font-semibold w-fit mt-2"
              data-animate="280"
              style={{ transition: "gap 0.2s" }}
            >
              Our Full Story
              <svg
                className="w-4 h-4 group-hover:translate-x-1"
                style={{ transition: "transform 0.2s" }}
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
        </div>

        {/* ── Divider ── */}
        <div className="mt-20 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>
    </section>
  );
}
