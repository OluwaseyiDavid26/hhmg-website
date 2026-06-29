// "use client";

// import { useEffect, useRef, useState } from "react";
// import { Award, Unlock, Users, Fingerprint, ShieldCheck } from "lucide-react";

// const values = [
//   {
//     name: "Excellence",
//     descriptor: "We hold every frame to the highest standard.",
//     icon: Award,
//   },
//   {
//     name: "Access",
//     descriptor: "Great equipment and great opportunity should not be gatekept.",
//     icon: Unlock,
//   },
//   {
//     name: "Community",
//     descriptor:
//       "The creators we serve are not clients — they are collaborators.",
//     icon: Users,
//   },
//   {
//     name: "Authenticity",
//     descriptor: "African stories told by Africans, on African terms.",
//     icon: Fingerprint,
//   },
//   {
//     name: "Integrity",
//     descriptor: "We build businesses we are proud to stand behind.",
//     icon: ShieldCheck,
//   },
// ];

// export default function CoreValues() {
//   const rowRefs = useRef<(HTMLDivElement | null)[]>([]);
//   const [revealed, setRevealed] = useState<boolean[]>(() =>
//     new Array(values.length).fill(false),
//   );
//   const [activeIndex, setActiveIndex] = useState(0);

//   useEffect(() => {
//     // Reveal each row once, the first time it enters the viewport
//     const revealObserver = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             const idx = Number((entry.target as HTMLElement).dataset.index);
//             setRevealed((prev) => {
//               if (prev[idx]) return prev;
//               const next = [...prev];
//               next[idx] = true;
//               return next;
//             });
//           }
//         });
//       },
//       { threshold: 0.15 },
//     );

//     // Track which row is currently centered, to drive the active highlight + progress dot
//     const activeObserver = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             const idx = Number((entry.target as HTMLElement).dataset.index);
//             setActiveIndex(idx);
//           }
//         });
//       },
//       { threshold: 0, rootMargin: "-45% 0px -45% 0px" },
//     );

//     rowRefs.current.forEach((el) => {
//       if (!el) return;
//       revealObserver.observe(el);
//       activeObserver.observe(el);
//     });

//     return () => {
//       revealObserver.disconnect();
//       activeObserver.disconnect();
//     };
//   }, []);

//   return (
//     <section className="bg-[#1A1A1A] py-28">
//       <div className="max-w-6xl mx-auto px-6">
//         {/* Section label */}
//         <p className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#F5C400] mb-14">
//           Core Values
//         </p>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-28 items-start">
//           {/* LEFT — Cinematic statement, sticky, with live progress track */}
//           <div className="lg:sticky lg:top-28">
//             {/* <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-extrabold leading-[1.15] tracking-tight text-white"> */}
//             <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.6rem] font-extrabold leading-[1.15] tracking-tight text-white">
//               What we stand for.{" "}
//               <span className="text-white/30">Every single day.</span>
//             </h2>
//             <p className="text-white/40 text-base leading-relaxed mt-8">
//               These are not aspirational slogans. They are the operating
//               principles behind every decision we make as a group.
//             </p>

//             {/* Progress track */}
//           </div>

//           {/* RIGHT — Values list */}
//           <div className="flex flex-col divide-y divide-white/10">
//             {values.map(({ name, descriptor, icon: Icon }, index) => {
//               const isRevealed = revealed[index];
//               const isActive = activeIndex === index;

//               return (
//                 <div
//                   key={name}
//                   ref={(el) => {
//                     rowRefs.current[index] = el;
//                   }}
//                   data-index={index}
//                   className={`relative py-8 flex items-start gap-6 transition-all duration-700 ease-out ${
//                     isRevealed
//                       ? "opacity-100 translate-x-0"
//                       : "opacity-0 translate-x-6"
//                   }`}
//                   style={{ transitionDelay: isRevealed ? "0ms" : "0ms" }}
//                 >
//                   {/* Highlight panel slides in behind active row */}
//                   <div
//                     className={`absolute inset-y-1 -left-6 -right-6 rounded-xl bg-gradient-to-r from-[#F5C400]/[0.06] to-transparent transition-all duration-500 ease-out ${
//                       isActive
//                         ? "opacity-100 scale-x-100"
//                         : "opacity-0 scale-x-95"
//                     }`}
//                     style={{ transformOrigin: "left center" }}
//                     aria-hidden="true"
//                   />

//                   {/* Giant faint number, only visible when active */}
//                   <span
//                     className={`pointer-events-none absolute -top-2 right-0 font-extrabold text-white select-none transition-all duration-500 ease-out ${
//                       isActive
//                         ? "text-7xl opacity-[0.04] translate-y-0"
//                         : "text-7xl opacity-0 translate-y-2"
//                     }`}
//                     aria-hidden="true"
//                   >
//                     {String(index + 1).padStart(2, "0")}
//                   </span>

//                   {/* Icon — outline draws/fills in when active */}
//                   <div
//                     className={`relative z-10 flex-shrink-0 mt-1 flex items-center justify-center w-9 h-9 rounded-full border transition-all duration-500 ease-out ${
//                       isActive
//                         ? "border-[#F5C400] bg-[#F5C400]/10 scale-100"
//                         : "border-white/15 bg-transparent scale-90"
//                     }`}
//                   >
//                     <Icon
//                       className={`transition-colors duration-500 ${
//                         isActive ? "text-[#F5C400]" : "text-white/40"
//                       }`}
//                       size={16}
//                       strokeWidth={1.75}
//                     />
//                   </div>

//                   {/* Content */}
//                   <div className="relative z-10">
//                     <p
//                       className={`font-bold text-lg mb-1 transition-colors duration-500 ${
//                         isActive ? "text-white" : "text-white/70"
//                       }`}
//                     >
//                       {name}
//                     </p>
//                     <p
//                       className={`text-base leading-relaxed transition-colors duration-500 ${
//                         isActive ? "text-white/65" : "text-white/40"
//                       }`}
//                     >
//                       {descriptor}
//                     </p>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

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

const PATHS = [
  // hand
  "M85,290 C80,285 75,275 76,265 C77,258 82,252 88,248 C92,245 96,244 100,244 C104,244 108,246 110,250 L115,260 C117,264 116,270 112,273 C110,275 107,275 105,273 L100,268",
  // fingers
  "M100,244 L98,232 M104,244 L104,230 M108,246 L110,232 M112,250 L116,238",
  // camera body
  "M72,210 L72,252 L148,252 L148,210 Z",
  // camera top
  "M95,210 L95,200 L130,200 L130,210",
  // film strip rails
  "M90,198 L82,60",
  "M130,198 L138,60",
];

const CIRCLES = [
  { cx: 110, cy: 231, r: 16, sw: 2 },
  { cx: 110, cy: 231, r: 9, sw: 1.2 },
  { cx: 138, cy: 205, r: 4, sw: 1.5 },
];

const FRAMES = [
  { x: 83, y: 170, w: 54, h: 28, label: "01", tx: 106, ty: 188 },
  { x: 85, y: 138, w: 50, h: 28, label: "02", tx: 106, ty: 156 },
  { x: 87, y: 106, w: 47, h: 28, label: "03", tx: 107, ty: 124 },
  { x: 89, y: 76, w: 44, h: 26, label: "04", tx: 107, ty: 93 },
  { x: 91, y: 50, w: 42, h: 24, label: "05", tx: 108, ty: 66 },
];

const SPROCKETS = [
  { cx: 83, cy: 172 },
  { cx: 83, cy: 196 },
  { cx: 83, cy: 140 },
  { cx: 83, cy: 108 },
  { cx: 84, cy: 78 },
];

/* ── Self-drawing SVG illustration ── */
function FilmIllustration({
  activeIndex,
  drawn,
}: {
  activeIndex: number;
  drawn: boolean;
}) {
  return (
    <svg
      viewBox="0 0 220 340"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto overflow-visible"
      aria-hidden="true"
    >
      <style>{`
        .dp {
          fill: none;
          stroke: rgba(245,196,0,0.28);
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-dasharray: var(--len);
          stroke-dashoffset: var(--len);
          transition: stroke-dashoffset 1.4s cubic-bezier(0.4,0,0.2,1);
        }
        .dp.on { stroke-dashoffset: 0; }
      `}</style>

      {/* Hand */}
      <path
        className={`dp${drawn ? " on" : ""}`}
        style={
          { "--len": "320px", transitionDelay: "0s" } as React.CSSProperties
        }
        d="M85,290 C80,285 75,275 76,265 C77,258 82,252 88,248 C92,245 96,244 100,244 C104,244 108,246 110,250 L115,260 C117,264 116,270 112,273 C110,275 107,275 105,273 L100,268"
        strokeWidth="1.8"
      />

      {/* Fingers */}
      <path
        className={`dp${drawn ? " on" : ""}`}
        style={
          { "--len": "200px", transitionDelay: "0.3s" } as React.CSSProperties
        }
        d="M100,244 L98,232 M104,244 L104,230 M108,246 L110,232 M112,250 L116,238"
        strokeWidth="1.8"
      />

      {/* Camera body */}
      <path
        className={`dp${drawn ? " on" : ""}`}
        style={
          { "--len": "280px", transitionDelay: "0.6s" } as React.CSSProperties
        }
        d="M72,210 L72,252 L148,252 L148,210 Z"
        strokeWidth="1.8"
      />

      {/* Camera top */}
      <path
        className={`dp${drawn ? " on" : ""}`}
        style={
          { "--len": "120px", transitionDelay: "0.85s" } as React.CSSProperties
        }
        d="M95,210 L95,200 L130,200 L130,210"
        strokeWidth="1.8"
      />

      {/* Lens outer */}
      <circle
        className={`dp${drawn ? " on" : ""}`}
        style={
          { "--len": "220px", transitionDelay: "1.05s" } as React.CSSProperties
        }
        cx="110"
        cy="231"
        r="16"
        strokeWidth="2"
      />

      {/* Lens inner */}
      <circle
        className={`dp${drawn ? " on" : ""}`}
        style={
          { "--len": "100px", transitionDelay: "1.2s" } as React.CSSProperties
        }
        cx="110"
        cy="231"
        r="9"
        strokeWidth="1.2"
      />

      {/* Shutter */}
      <circle
        className={`dp${drawn ? " on" : ""}`}
        style={
          { "--len": "60px", transitionDelay: "1.35s" } as React.CSSProperties
        }
        cx="138"
        cy="205"
        r="4"
        strokeWidth="1.5"
      />

      {/* Film strip left rail */}
      <path
        className={`dp${drawn ? " on" : ""}`}
        style={
          { "--len": "200px", transitionDelay: "1.5s" } as React.CSSProperties
        }
        d="M90,198 L82,60"
        strokeWidth="1.5"
      />

      {/* Film strip right rail */}
      <path
        className={`dp${drawn ? " on" : ""}`}
        style={
          { "--len": "200px", transitionDelay: "1.6s" } as React.CSSProperties
        }
        d="M130,198 L138,60"
        strokeWidth="1.5"
      />

      {/* Sprocket holes */}
      {SPROCKETS.map((s, i) => (
        <circle
          key={i}
          className={`dp${drawn ? " on" : ""}`}
          style={
            {
              "--len": "40px",
              transitionDelay: `${1.65 + i * 0.05}s`,
            } as React.CSSProperties
          }
          cx={s.cx}
          cy={s.cy}
          r="3"
          strokeWidth="1"
        />
      ))}

      {/* Film frames */}
      {FRAMES.map((f, i) => {
        const isActive = activeIndex === i;
        return (
          <g key={i}>
            <rect
              x={f.x}
              y={f.y}
              width={f.w}
              height={f.h}
              rx="2"
              fill={isActive ? "rgba(245,196,0,0.08)" : "none"}
              stroke={isActive ? "#F5C400" : "rgba(245,196,0,0.2)"}
              strokeWidth="1.5"
              style={{ transition: "stroke 0.4s, fill 0.4s" }}
            />
            <text
              x={f.tx}
              y={f.ty}
              fill={isActive ? "#F5C400" : "rgba(245,196,0,0.25)"}
              fontSize="8"
              fontFamily="monospace"
              textAnchor="middle"
              style={{ transition: "fill 0.4s" }}
            >
              {f.label}
            </text>
          </g>
        );
      })}

      {/* Glow dot at top */}
      <circle
        cx="110"
        cy="44"
        r="5"
        fill={
          activeIndex === 4 ? "rgba(245,196,0,0.9)" : "rgba(245,196,0,0.25)"
        }
        style={{
          transition: "fill 0.5s",
          filter:
            activeIndex === 4
              ? "drop-shadow(0 0 6px rgba(245,196,0,0.8))"
              : "none",
        }}
      />
    </svg>
  );
}

export default function CoreValues() {
  const sectionRef = useRef<HTMLElement>(null);
  const rowRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [revealed, setRevealed] = useState<boolean[]>(() =>
    new Array(values.length).fill(false),
  );
  const [activeIndex, setActiveIndex] = useState(0);
  const [drawn, setDrawn] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    /* Draw illustration when section enters view */
    const drawObs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setDrawn(true);
          drawObs.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    drawObs.observe(section);

    /* Reveal rows */
    const revealObs = new IntersectionObserver(
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

    /* Track active value on scroll */
    const activeObs = new IntersectionObserver(
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
      revealObs.observe(el);
      activeObs.observe(el);
    });

    return () => {
      drawObs.disconnect();
      revealObs.disconnect();
      activeObs.disconnect();
    };
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#1A1A1A] py-28">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#F5C400] mb-14">
          Core Values
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-28 items-start">
          {/* ── LEFT — sticky with self-drawing illustration ── */}
          <div className="lg:sticky lg:top-28">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.6rem] font-extrabold leading-[1.15] tracking-tight text-white mb-6">
              What we stand for.{" "}
              <span className="text-white/30">Every single day.</span>
            </h2>
            <p className="text-white/40 text-base leading-relaxed mb-10">
              These are not aspirational slogans. They are the operating
              principles behind every decision we make as a group.
            </p>

            {/* Self-drawing filmmaker illustration */}
            <div className="w-full max-w-[260px]">
              <FilmIllustration activeIndex={activeIndex} drawn={drawn} />
            </div>
          </div>

          {/* ── RIGHT — values list ── */}
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
                  className="relative py-8 flex items-start gap-6"
                  style={{
                    opacity: isRevealed ? 1 : 0,
                    transform: isRevealed
                      ? "translateX(0)"
                      : "translateX(24px)",
                    transition:
                      "opacity 0.7s cubic-bezier(0.22,1,0.36,1), transform 0.7s cubic-bezier(0.22,1,0.36,1)",
                  }}
                >
                  {/* Highlight panel */}
                  <div
                    className="absolute inset-y-1 -left-6 -right-6 rounded-xl pointer-events-none"
                    style={{
                      background:
                        "linear-gradient(90deg, rgba(245,196,0,0.06), transparent)",
                      opacity: isActive ? 1 : 0,
                      transform: isActive ? "scaleX(1)" : "scaleX(0.95)",
                      transformOrigin: "left center",
                      transition: "opacity 0.5s ease, transform 0.5s ease",
                    }}
                    aria-hidden="true"
                  />

                  {/* Watermark number */}
                  <span
                    className="pointer-events-none absolute -top-2 right-0 font-extrabold text-7xl text-white select-none"
                    style={{
                      opacity: isActive ? 0.04 : 0,
                      transform: isActive ? "translateY(0)" : "translateY(8px)",
                      transition: "opacity 0.5s ease, transform 0.5s ease",
                    }}
                    aria-hidden="true"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {/* Icon */}
                  <div
                    className="relative z-10 flex-shrink-0 mt-1 flex items-center justify-center w-9 h-9 rounded-full border"
                    style={{
                      borderColor: isActive
                        ? "#F5C400"
                        : "rgba(255,255,255,0.15)",
                      background: isActive
                        ? "rgba(245,196,0,0.1)"
                        : "transparent",
                      transform: isActive ? "scale(1)" : "scale(0.9)",
                      transition: "all 0.4s ease",
                    }}
                  >
                    <Icon
                      size={16}
                      strokeWidth={1.75}
                      style={{
                        color: isActive ? "#F5C400" : "rgba(255,255,255,0.4)",
                        transition: "color 0.4s",
                      }}
                    />
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    <p
                      className="font-bold text-lg mb-1"
                      style={{
                        color: isActive ? "#ffffff" : "rgba(255,255,255,0.7)",
                        transition: "color 0.4s",
                      }}
                    >
                      {name}
                    </p>
                    <p
                      className="text-base leading-relaxed"
                      style={{
                        color: isActive
                          ? "rgba(255,255,255,0.65)"
                          : "rgba(255,255,255,0.4)",
                        transition: "color 0.4s",
                      }}
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
