// export default function RestoredHeader() {
//   return (
//     <section className="relative bg-[#1A1A1A] overflow-hidden px-6 pt-36 pb-20 sm:pt-44 sm:pb-28">
//       {/* Spotlight glow */}
//       <div
//         className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[60rem] h-[40rem] rounded-full bg-[#F5C400]/[0.08] blur-[120px]"
//         aria-hidden="true"
//       />

//       {/* Vertical spine label */}
//       <div
//         className="hidden lg:block absolute left-10 top-1/2 -translate-y-1/2 origin-center -rotate-90 text-white/25 text-[11px] font-medium tracking-[0.3em] uppercase whitespace-nowrap"
//         aria-hidden="true"
//       >
//         Hand Held Media &amp; Production Co.
//       </div>

//       <div className="relative max-w-3xl mx-auto text-center">
//         {/* In production badge */}
//         <div className="inline-flex items-center gap-2 mb-10 px-4 py-1.5 rounded-full border border-[#F5C400]/25 bg-[#F5C400]/[0.05]">
//           <span className="relative flex h-2 w-2">
//             <span className="absolute inline-flex h-full w-full rounded-full bg-[#F5C400] opacity-60 animate-ping" />
//             <span className="relative inline-flex rounded-full h-2 w-2 bg-[#F5C400]" />
//           </span>
//           <span className="text-[#F5C400] text-[11px] font-semibold tracking-[0.22em] uppercase">
//             Flagship Production
//           </span>
//         </div>

//         <h1 className="font-serif text-6xl sm:text-7xl md:text-[6.5rem] text-white tracking-tight leading-none">
//           Restored
//         </h1>

//         <div className="w-16 h-[2px] bg-[#F5C400] mx-auto mt-7 mb-7" />

//         <p className="text-white/55 text-base sm:text-lg tracking-[0.04em] uppercase mb-2">
//           A TV Testimony Series
//         </p>
//         <p className="text-white/85 text-xl sm:text-2xl font-light leading-relaxed">
//           Real Lives. Real Transformation. On Screen.
//         </p>
//       </div>

//       {/* Bottom divider */}
//       <div className="relative mt-20 h-px max-w-3xl mx-auto bg-gradient-to-r from-transparent via-white/10 to-transparent" />
//     </section>
//   );
// }

// "use client";
// export default function RestoredHeader() {
//   return (
//     <section className="relative bg-[#1A1A1A] overflow-hidden px-6 pt-36 pb-20 sm:pt-44 sm:pb-28">
//       {/* Spotlight glow — breathes in on load */}
//       <div
//         className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[60rem] h-[40rem] rounded-full bg-[#F5C400]/[0.08] blur-[120px] opacity-0 scale-90 animate-[glowIn_1s_ease-out_0.1s_forwards]"
//         aria-hidden="true"
//       />

//       {/* Vertical spine label */}
//       <div
//         className="hidden lg:block absolute left-10 top-1/2 -translate-y-1/2 origin-center -rotate-90 text-white/25 text-[11px] font-medium tracking-[0.3em] uppercase whitespace-nowrap opacity-0 animate-[fadeUp_0.5s_ease-out_0.5s_forwards]"
//         aria-hidden="true"
//       >
//         Hand Held Media &amp; Production Co.
//       </div>

//       <div className="relative max-w-3xl mx-auto text-center">
//         {/* In production badge */}
//         <div className="inline-flex items-center gap-2 mb-10 px-4 py-1.5 rounded-full border border-[#F5C400]/25 bg-[#F5C400]/[0.05] opacity-0 scale-95 animate-[badgeIn_0.4s_cubic-bezier(0.34,1.56,0.64,1)_0.05s_forwards]">
//           <span className="relative flex h-2 w-2">
//             <span className="absolute inline-flex h-full w-full rounded-full bg-[#F5C400] opacity-60 animate-ping" />
//             <span className="relative inline-flex rounded-full h-2 w-2 bg-[#F5C400]" />
//           </span>
//           <span className="text-[#F5C400] text-[11px] font-semibold tracking-[0.22em] uppercase">
//             Flagship Production
//           </span>
//         </div>

//         {/* Title — revealed by a sweeping spotlight */}
//         <div className="relative inline-block overflow-hidden">
//           <h1 className="font-serif text-6xl sm:text-7xl md:text-[6.5rem] text-white tracking-tight leading-none opacity-0 animate-[titleIn_0.3s_ease-out_0.25s_forwards]">
//             Restored
//           </h1>
//           {/* Light beam sweep */}
//           <span
//             className="pointer-events-none absolute inset-0 -translate-x-full animate-[spotlightSweep_0.9s_cubic-bezier(0.4,0,0.2,1)_0.3s_forwards]"
//             style={{
//               background:
//                 "linear-gradient(100deg, transparent 35%, rgba(255,255,255,0.85) 50%, rgba(245,196,0,0.4) 58%, transparent 75%)",
//               mixBlendMode: "overlay",
//             }}
//             aria-hidden="true"
//           />
//         </div>

//         <div className="w-16 h-[2px] bg-[#F5C400] mx-auto mt-7 mb-7 scale-x-0 animate-[lineGrow_0.4s_ease-out_0.95s_forwards]" />

//         <p className="text-white/55 text-base sm:text-lg tracking-[0.04em] uppercase mb-2 opacity-0 translate-y-2 animate-[fadeUp_0.4s_ease-out_1.1s_forwards]">
//           A TV Testimony Series
//         </p>
//         <p className="text-white/85 text-xl sm:text-2xl font-light leading-relaxed opacity-0 translate-y-2 animate-[fadeUp_0.4s_ease-out_1.22s_forwards]">
//           Real Lives. Real Transformation. On Screen.
//         </p>
//       </div>

//       {/* Bottom divider */}
//       <div className="relative mt-20 h-px max-w-3xl mx-auto overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent scale-x-0 animate-[lineGrow_0.5s_ease-out_1.35s_forwards]" />
//       </div>

//       <style jsx global>{`
//         @keyframes glowIn {
//           from {
//             opacity: 0;
//             transform: translateX(-50%) scale(0.9);
//           }
//           to {
//             opacity: 1;
//             transform: translateX(-50%) scale(1);
//           }
//         }
//         @keyframes badgeIn {
//           from {
//             opacity: 0;
//             transform: scale(0.95);
//           }
//           to {
//             opacity: 1;
//             transform: scale(1);
//           }
//         }
//         @keyframes titleIn {
//           from {
//             opacity: 0;
//           }
//           to {
//             opacity: 1;
//           }
//         }
//         @keyframes spotlightSweep {
//           to {
//             transform: translateX(100%);
//           }
//         }
//         @keyframes lineGrow {
//           from {
//             transform: scaleX(0);
//           }
//           to {
//             transform: scaleX(1);
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

export default function RestoredHeader() {
  return (
    <section className="relative bg-[#1A1A1A] overflow-hidden px-6 pt-36 pb-20 sm:pt-44 sm:pb-28">
      <div
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[60rem] h-[40rem] rounded-full bg-[#F5C400]/[0.08] blur-[120px]"
        aria-hidden="true"
      />

      <div
        className="hidden lg:block absolute left-10 top-1/2 -translate-y-1/2 origin-center -rotate-90 text-white/25 text-[11px] font-medium tracking-[0.3em] uppercase whitespace-nowrap"
        aria-hidden="true"
      >
        Hand Held Media &amp; Production Co.
      </div>

      <div className="relative max-w-3xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 mb-10 px-4 py-1.5 rounded-full border border-[#F5C400]/25 bg-[#F5C400]/[0.05] opacity-0 animate-[fadeIn_0.3s_ease-out_forwards]">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-[#F5C400] opacity-60 animate-ping" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#F5C400]" />
          </span>
          <span className="text-[#F5C400] text-[11px] font-semibold tracking-[0.22em] uppercase">
            Flagship Production
          </span>
        </div>

        <h1 className="font-serif text-6xl sm:text-7xl md:text-[6.5rem] text-white tracking-tight leading-none opacity-0 animate-[fadeIn_0.35s_ease-out_0.06s_forwards]">
          Restored
        </h1>

        <div className="w-16 h-[2px] bg-[#F5C400] mx-auto mt-7 mb-7 scale-x-0 animate-[lineGrow_0.3s_ease-out_0.18s_forwards]" />

        <p className="text-white/55 text-base sm:text-lg tracking-[0.04em] uppercase mb-2 opacity-0 translate-y-1 animate-[fadeUp_0.3s_ease-out_0.24s_forwards]">
          A TV Testimony Series
        </p>
        <p className="text-white/85 text-xl sm:text-2xl font-light leading-relaxed opacity-0 translate-y-1 animate-[fadeUp_0.3s_ease-out_0.3s_forwards]">
          Real Lives. Real Transformation. On Screen.
        </p>
      </div>

      <div className="relative mt-20 h-px max-w-3xl mx-auto bg-gradient-to-r from-transparent via-white/10 to-transparent" />

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
            transform: translateY(0.25rem);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes lineGrow {
          from {
            transform: scaleX(0);
          }
          to {
            transform: scaleX(1);
          }
        }
      `}</style>
    </section>
  );
}
