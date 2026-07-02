// "use client";

// const AUDIENCES = [
//   {
//     label: "Brands & Organisations",
//     href: "#brands",
//     icon: (
//       <>
//         <path d="M5 21V7l7-4 7 4v14" />
//         <path d="M9 21v-6h6v6" />
//         <path d="M9 10h.01M15 10h.01M9 14h.01M15 14h.01" />
//       </>
//     ),
//   },
//   {
//     label: "Filmmakers & Productions",
//     href: "#filmmakers",
//     icon: (
//       <>
//         <path d="M4 9v10a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V9" />
//         <path d="M3 9l1.5-4.5h15L21 9" />
//         <path d="M3 9h18" />
//         <path d="M7.5 4.5l1 4.5M12 4.5l1 4.5M16.5 4.5l1 4.5" />
//       </>
//     ),
//   },
//   {
//     label: "Content Creators",
//     href: "#creators",
//     icon: (
//       <>
//         <circle cx="12" cy="12" r="8.5" />
//         <path d="M10 8.5l6 3.5-6 3.5v-7z" />
//       </>
//     ),
//   },
//   {
//     label: "Investors & Partners",
//     href: "#investors",
//     icon: (
//       <>
//         <path d="M3 17l6-6 4 4 8-8" />
//         <path d="M15 7h6v6" />
//       </>
//     ),
//   },
// ];

// export default function WorkWithUsHeader() {
//   return (
//     <section className="relative bg-[#1A1A1A] overflow-hidden px-6 pt-32 pb-20 sm:pt-40 sm:pb-24">
//       <div
//         className="pointer-events-none absolute inset-6 sm:inset-10 border border-white/[0.06] rounded-3xl opacity-0 animate-[fadeIn_0.3s_ease-out_forwards]"
//         aria-hidden="true"
//       />
//       <span
//         className="pointer-events-none absolute top-6 left-6 sm:top-10 sm:left-10 w-5 h-5 border-t-2 border-l-2 border-[#F5C400]/50"
//         aria-hidden="true"
//       />
//       <span
//         className="pointer-events-none absolute top-6 right-6 sm:top-10 sm:right-10 w-5 h-5 border-t-2 border-r-2 border-[#F5C400]/50"
//         aria-hidden="true"
//       />
//       <span
//         className="pointer-events-none absolute bottom-6 left-6 sm:bottom-10 sm:left-10 w-5 h-5 border-b-2 border-l-2 border-[#F5C400]/50"
//         aria-hidden="true"
//       />
//       <span
//         className="pointer-events-none absolute bottom-6 right-6 sm:bottom-10 sm:right-10 w-5 h-5 border-b-2 border-r-2 border-[#F5C400]/50"
//         aria-hidden="true"
//       />

//       <div className="relative max-w-4xl mx-auto">
//         <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-[1.1] tracking-tight max-w-2xl mb-6 opacity-0 translate-y-2 animate-[fadeUp_0.35s_ease-out_forwards]">
//           Let&rsquo;s Build Something{" "}
//           <span className="text-[#F5C400]">Together.</span>
//         </h1>

//         <p className="text-white/60 text-base sm:text-lg leading-relaxed max-w-xl mb-12 opacity-0 translate-y-2 animate-[fadeUp_0.35s_ease-out_0.08s_forwards]">
//           Whether you&rsquo;re a brand, a creator, a broadcaster, or an investor
//           &mdash; there&rsquo;s a way to work with us.
//         </p>

//         <nav aria-label="Audience segments" className="flex flex-wrap gap-3">
//           {AUDIENCES.map((a, i) => (
//             <a
//               key={a.label}
//               href={a.href}
//               className="group relative inline-flex items-center gap-2.5 pl-2.5 pr-4 py-2 rounded-full border border-white/[0.1] bg-white/[0.02] text-white/55 text-xs sm:text-[13px] font-medium tracking-wide transition-all duration-300 hover:border-[#F5C400]/40 hover:text-[#F5C400] hover:bg-[#F5C400]/[0.06] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_-8px_rgba(245,196,0,0.35)]"
//               style={{
//                 opacity: 0,
//                 transform: "translateY(8px)",
//                 animation: `fadeUp 0.45s cubic-bezier(0.34,1.56,0.64,1) ${0.18 + i * 0.08}s forwards`,
//               }}
//             >
//               <span className="flex items-center justify-center w-7 h-7 rounded-full bg-white/[0.05] text-white/40 transition-colors duration-300 group-hover:bg-[#F5C400]/15 group-hover:text-[#F5C400]">
//                 <svg
//                   className="w-3.5 h-3.5"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth={2}
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   aria-hidden="true"
//                 >
//                   {a.icon}
//                 </svg>
//               </span>

//               {a.label}

//               <svg
//                 className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//                 strokeWidth={2.5}
//                 aria-hidden="true"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M17 8l4 4m0 0l-4 4m4-4H3"
//                 />
//               </svg>
//             </a>
//           ))}
//         </nav>
//       </div>

//       <div className="relative mt-20 max-w-4xl mx-auto h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

//       <style jsx global>{`
//         @keyframes fadeIn {
//           from {
//             opacity: 0;
//           }
//           to {
//             opacity: 1;
//           }
//         }
//         @keyframes fadeUp {
//           from {
//             opacity: 0;
//             transform: translateY(0.5rem);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
//       `}</style>
//     </section>
//   );
// }

"use client";

import { useEffect, useState } from "react";

const AUDIENCES = [
  {
    label: "Brands & Organisations",
    href: "#brands",
    icon: (
      <>
        <path d="M5 21V7l7-4 7 4v14" />
        <path d="M9 21v-6h6v6" />
        <path d="M9 10h.01M15 10h.01M9 14h.01M15 14h.01" />
      </>
    ),
  },
  {
    label: "Filmmakers & Productions",
    href: "#filmmakers",
    icon: (
      <>
        <path d="M4 9v10a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V9" />
        <path d="M3 9l1.5-4.5h15L21 9" />
        <path d="M3 9h18" />
        <path d="M7.5 4.5l1 4.5M12 4.5l1 4.5M16.5 4.5l1 4.5" />
      </>
    ),
  },
  {
    label: "Content Creators",
    href: "#creators",
    icon: (
      <>
        <circle cx="12" cy="12" r="8.5" />
        <path d="M10 8.5l6 3.5-6 3.5v-7z" />
      </>
    ),
  },
  {
    label: "Investors & Partners",
    href: "#investors",
    icon: (
      <>
        <path d="M3 17l6-6 4 4 8-8" />
        <path d="M15 7h6v6" />
      </>
    ),
  },
];

const SUBHEADLINE =
  "Whether you\u2019re a brand, a creator, a broadcaster, or an investor \u2014 there\u2019s a way to work with us.";

function prefersReducedMotion() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export default function WorkWithUsHeader() {
  // Lazy initializer runs once on the client — if reduced motion is on,
  // we start with the full sentence already "typed" and skip the effect
  // ever needing to call setState synchronously in its body.
  const [typed, setTyped] = useState(() =>
    prefersReducedMotion() ? SUBHEADLINE : "",
  );

  // Auto-type the sub-headline once the headline has had a moment to land.
  useEffect(() => {
    if (prefersReducedMotion()) return;

    let i = 0;
    let intervalId: ReturnType<typeof setInterval>;

    const startTimeout = setTimeout(() => {
      intervalId = setInterval(() => {
        i++;
        setTyped(SUBHEADLINE.slice(0, i));
        if (i >= SUBHEADLINE.length) clearInterval(intervalId);
      }, 22);
    }, 950);

    return () => {
      clearTimeout(startTimeout);
      clearInterval(intervalId);
    };
  }, []);

  return (
    <section className="relative bg-[#1A1A1A] overflow-hidden px-6 pt-32 pb-20 sm:pt-40 sm:pb-24">
      <div
        className="pointer-events-none absolute inset-6 sm:inset-10 border border-white/[0.06] rounded-3xl opacity-0 animate-[fadeIn_0.3s_ease-out_forwards]"
        aria-hidden="true"
      />
      <span
        className="pointer-events-none absolute top-6 left-6 sm:top-10 sm:left-10 w-5 h-5 border-t-2 border-l-2 border-[#F5C400]/50"
        aria-hidden="true"
      />
      <span
        className="pointer-events-none absolute top-6 right-6 sm:top-10 sm:right-10 w-5 h-5 border-t-2 border-r-2 border-[#F5C400]/50"
        aria-hidden="true"
      />
      <span
        className="pointer-events-none absolute bottom-6 left-6 sm:bottom-10 sm:left-10 w-5 h-5 border-b-2 border-l-2 border-[#F5C400]/50"
        aria-hidden="true"
      />
      <span
        className="pointer-events-none absolute bottom-6 right-6 sm:bottom-10 sm:right-10 w-5 h-5 border-b-2 border-r-2 border-[#F5C400]/50"
        aria-hidden="true"
      />

      <div className="relative max-w-4xl mx-auto">
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-[1.1] tracking-tight max-w-2xl mb-6">
          <span className="zoom-in-right inline-block">
            Let&rsquo;s Build Something
          </span>{" "}
          <span className="zoom-out-left inline-block text-[#F5C400]">
            Together.
          </span>
        </h1>

        <p
          className="text-white/60 text-base sm:text-lg leading-relaxed max-w-xl mb-12 opacity-0 animate-[fadeIn_0.3s_ease-out_0.7s_forwards]"
          aria-hidden="true"
        >
          {typed}
          <span className="typing-cursor">|</span>
        </p>
        <p className="sr-only">{SUBHEADLINE}</p>

        <nav aria-label="Audience segments" className="flex flex-wrap gap-3">
          {AUDIENCES.map((a, i) => (
            <a
              key={a.label}
              href={a.href}
              className="group relative inline-flex items-center gap-2.5 pl-2.5 pr-4 py-2 rounded-full border border-white/[0.1] bg-white/[0.02] text-white/55 text-xs sm:text-[13px] font-medium tracking-wide transition-all duration-300 hover:border-[#F5C400]/40 hover:text-[#F5C400] hover:bg-[#F5C400]/[0.06] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_-8px_rgba(245,196,0,0.35)]"
              style={{
                opacity: 0,
                transform: "translateY(8px)",
                animation: `fadeUp 0.45s cubic-bezier(0.34,1.56,0.64,1) ${1.6 + i * 0.08}s forwards`,
              }}
            >
              <span className="flex items-center justify-center w-7 h-7 rounded-full bg-white/[0.05] text-white/40 transition-colors duration-300 group-hover:bg-[#F5C400]/15 group-hover:text-[#F5C400]">
                <svg
                  className="w-3.5 h-3.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  {a.icon}
                </svg>
              </span>

              {a.label}

              <svg
                className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          ))}
        </nav>
      </div>

      <div className="relative mt-20 max-w-4xl mx-auto h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(0.5rem);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* "Let's Build Something" — zooms IN (shrinks into place) sliding from the right */
        .zoom-in-right {
          opacity: 0;
          transform: translateX(70px) scale(1.55);
          animation: zoomInRight 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.1s
            forwards;
        }
        @keyframes zoomInRight {
          0% {
            opacity: 0;
            transform: translateX(70px) scale(1.55);
          }
          55% {
            opacity: 1;
          }
          100% {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }

        /* "Together." — zooms OUT (grows into place) sliding from the left */
        .zoom-out-left {
          opacity: 0;
          transform: translateX(-70px) scale(0.4);
          animation: zoomOutLeft 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.45s
            forwards;
        }
        @keyframes zoomOutLeft {
          0% {
            opacity: 0;
            transform: translateX(-70px) scale(0.4);
          }
          55% {
            opacity: 1;
          }
          100% {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }

        .typing-cursor {
          display: inline-block;
          margin-left: 2px;
          color: #f5c400;
          animation: blink 1s step-end infinite;
        }
        @keyframes blink {
          0%,
          49% {
            opacity: 1;
          }
          50%,
          100% {
            opacity: 0;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .zoom-in-right,
          .zoom-out-left {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
          .typing-cursor {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
