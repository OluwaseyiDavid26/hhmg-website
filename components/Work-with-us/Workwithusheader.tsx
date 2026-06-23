// "use client";
// const AUDIENCES = [
//   { label: "Brands & Organisations", href: "#brands" },
//   { label: "Filmmakers & Productions", href: "#filmmakers" },
//   { label: "Content Creators", href: "#creators" },
//   { label: "Investors & Partners", href: "#investors" },
// ];

// export default function WorkWithUsHeader() {
//   return (
//     <section className="relative bg-[#1A1A1A] overflow-hidden px-6 pt-32 pb-20 sm:pt-40 sm:pb-24">
//       {/* Framing border + four corner marks — one per audience segment */}
//       <div
//         className="pointer-events-none absolute inset-6 sm:inset-10 border border-white/[0.06] rounded-3xl"
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
//         <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-[1.1] tracking-tight max-w-2xl mb-6">
//           Let&rsquo;s Build Something{" "}
//           <span className="text-[#F5C400]">Together.</span>
//         </h1>

//         <p className="text-white/60 text-base sm:text-lg leading-relaxed max-w-xl mb-12">
//           Whether you&rsquo;re a brand, a creator, a broadcaster, or an investor
//           &mdash; there&rsquo;s a way to work with us.
//         </p>

//         {/* Audience quick-nav */}
//         <nav aria-label="Audience segments" className="flex flex-wrap gap-3">
//           {AUDIENCES.map((a) => (
//             <a
//               key={a.label}
//               href={a.href}
//               className="group inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/[0.1] text-white/55 text-xs sm:text-[13px] font-medium tracking-wide hover:border-[#F5C400]/40 hover:text-[#F5C400] transition-colors duration-200"
//             >
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

//       {/* Bottom divider */}
//       <div className="relative mt-20 max-w-4xl mx-auto h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
//     </section>
//   );
// }

// "use client";

// const AUDIENCES = [
//   { label: "Brands & Organisations", href: "#brands" },
//   { label: "Filmmakers & Productions", href: "#filmmakers" },
//   { label: "Content Creators", href: "#creators" },
//   { label: "Investors & Partners", href: "#investors" },
// ];

// const HEADING_LINE_1 = ["Let\u2019s", "Build", "Something"];

// export default function WorkWithUsHeader() {
//   return (
//     <section className="relative bg-[#1A1A1A] overflow-hidden px-6 pt-32 pb-20 sm:pt-40 sm:pb-24">
//       {/* Framing border — completes after corners lock in */}
//       <div
//         className="pointer-events-none absolute inset-6 sm:inset-10 border border-white/[0.06] rounded-3xl opacity-0 scale-[0.98] animate-[frameBorderIn_0.7s_ease-out_0.45s_forwards]"
//         aria-hidden="true"
//       />

//       {/* Corner marks — snap in one by one like a viewfinder finding focus */}
//       <span
//         className="pointer-events-none absolute top-6 left-6 sm:top-10 sm:left-10 w-5 h-5 border-t-2 border-l-2 border-[#F5C400]/50 opacity-0 scale-0 origin-top-left animate-[frameCornerIn_0.45s_cubic-bezier(0.34,1.56,0.64,1)_0s_forwards]"
//         aria-hidden="true"
//       />
//       <span
//         className="pointer-events-none absolute top-6 right-6 sm:top-10 sm:right-10 w-5 h-5 border-t-2 border-r-2 border-[#F5C400]/50 opacity-0 scale-0 origin-top-right animate-[frameCornerIn_0.45s_cubic-bezier(0.34,1.56,0.64,1)_0.1s_forwards]"
//         aria-hidden="true"
//       />
//       <span
//         className="pointer-events-none absolute bottom-6 left-6 sm:bottom-10 sm:left-10 w-5 h-5 border-b-2 border-l-2 border-[#F5C400]/50 opacity-0 scale-0 origin-bottom-left animate-[frameCornerIn_0.45s_cubic-bezier(0.34,1.56,0.64,1)_0.2s_forwards]"
//         aria-hidden="true"
//       />
//       <span
//         className="pointer-events-none absolute bottom-6 right-6 sm:bottom-10 sm:right-10 w-5 h-5 border-b-2 border-r-2 border-[#F5C400]/50 opacity-0 scale-0 origin-bottom-right animate-[frameCornerIn_0.45s_cubic-bezier(0.34,1.56,0.64,1)_0.3s_forwards]"
//         aria-hidden="true"
//       />

//       <div className="relative max-w-4xl mx-auto">
//         <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-[1.1] tracking-tight max-w-2xl mb-6">
//           <span className="block overflow-hidden">
//             <span className="inline-flex flex-wrap gap-x-3">
//               {HEADING_LINE_1.map((word, i) => (
//                 <span key={word} className="overflow-hidden inline-block">
//                   <span
//                     className="inline-block translate-y-full animate-[wordReveal_0.6s_cubic-bezier(0.22,1,0.36,1)_forwards]"
//                     style={{ animationDelay: `${0.55 + i * 0.09}s` }}
//                   >
//                     {word}
//                   </span>
//                 </span>
//               ))}
//             </span>
//           </span>
//           <span className="block overflow-hidden mt-1 sm:mt-2">
//             <span
//               className="inline-block translate-y-full text-[#F5C400] animate-[wordReveal_0.6s_cubic-bezier(0.22,1,0.36,1)_forwards]"
//               style={{ animationDelay: "0.82s" }}
//             >
//               Together.
//             </span>
//           </span>
//         </h1>

//         <p className="text-white/60 text-base sm:text-lg leading-relaxed max-w-xl mb-12 opacity-0 translate-y-2 animate-[fadeUp_0.6s_ease-out_1.05s_forwards]">
//           Whether you&rsquo;re a brand, a creator, a broadcaster, or an investor
//           &mdash; there&rsquo;s a way to work with us.
//         </p>

//         {/* Audience quick-nav */}
//         <nav aria-label="Audience segments" className="flex flex-wrap gap-3">
//           {AUDIENCES.map((a, i) => (
//             <a
//               key={a.label}
//               href={a.href}
//               className="group inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/[0.1] text-white/55 text-xs sm:text-[13px] font-medium tracking-wide hover:border-[#F5C400]/40 hover:text-[#F5C400] transition-colors duration-200 opacity-0 translate-y-2 animate-[fadeUp_0.5s_ease-out_forwards]"
//               style={{ animationDelay: `${1.25 + i * 0.08}s` }}
//             >
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

//       {/* Bottom divider — draws in, then a faint gold scan drifts across it on loop */}
//       <div className="relative mt-20 max-w-4xl mx-auto h-px overflow-visible">
//         <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent scale-x-0 animate-[dividerDraw_0.8s_ease-out_1.5s_forwards]" />
//         <div
//           className="absolute top-1/2 -translate-y-1/2 w-16 h-px opacity-0 animate-[scanTravel_6s_ease-in-out_2.3s_infinite]"
//           style={{
//             background:
//               "linear-gradient(90deg, transparent, rgba(245,196,0,0.7), transparent)",
//           }}
//           aria-hidden="true"
//         />
//       </div>

//       <style jsx global>{`
//         @keyframes frameCornerIn {
//           from {
//             opacity: 0;
//             transform: scale(0);
//           }
//           to {
//             opacity: 1;
//             transform: scale(1);
//           }
//         }
//         @keyframes frameBorderIn {
//           from {
//             opacity: 0;
//             transform: scale(0.98);
//           }
//           to {
//             opacity: 1;
//             transform: scale(1);
//           }
//         }
//         @keyframes wordReveal {
//           from {
//             transform: translateY(110%);
//           }
//           to {
//             transform: translateY(0);
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
//         @keyframes dividerDraw {
//           from {
//             transform: scaleX(0);
//           }
//           to {
//             transform: scaleX(1);
//           }
//         }
//         @keyframes scanTravel {
//           0% {
//             opacity: 0;
//             left: 0%;
//           }
//           10% {
//             opacity: 1;
//           }
//           90% {
//             opacity: 1;
//           }
//           100% {
//             opacity: 0;
//             left: 100%;
//           }
//         }
//       `}</style>
//     </section>
//   );
// }

"use client";

const AUDIENCES = [
  { label: "Brands & Organisations", href: "#brands" },
  { label: "Filmmakers & Productions", href: "#filmmakers" },
  { label: "Content Creators", href: "#creators" },
  { label: "Investors & Partners", href: "#investors" },
];

export default function WorkWithUsHeader() {
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
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-[1.1] tracking-tight max-w-2xl mb-6 opacity-0 translate-y-2 animate-[fadeUp_0.35s_ease-out_forwards]">
          Let&rsquo;s Build Something{" "}
          <span className="text-[#F5C400]">Together.</span>
        </h1>

        <p className="text-white/60 text-base sm:text-lg leading-relaxed max-w-xl mb-12 opacity-0 translate-y-2 animate-[fadeUp_0.35s_ease-out_0.08s_forwards]">
          Whether you&rsquo;re a brand, a creator, a broadcaster, or an investor
          &mdash; there&rsquo;s a way to work with us.
        </p>

        <nav
          aria-label="Audience segments"
          className="flex flex-wrap gap-3 opacity-0 translate-y-2 animate-[fadeUp_0.35s_ease-out_0.16s_forwards]"
        >
          {AUDIENCES.map((a) => (
            <a
              key={a.label}
              href={a.href}
              className="group inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/[0.1] text-white/55 text-xs sm:text-[13px] font-medium tracking-wide hover:border-[#F5C400]/40 hover:text-[#F5C400] transition-colors duration-200"
            >
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
      `}</style>
    </section>
  );
}
