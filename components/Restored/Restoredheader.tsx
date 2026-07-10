// "use client";

// export default function RestoredHeader() {
//   return (
//     <section className="relative bg-[#1A1A1A] overflow-hidden px-6 pt-36 pb-20 sm:pt-44 sm:pb-28">
//       <div
//         className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[60rem] h-[40rem] rounded-full bg-[#F5C400]/[0.08] blur-[120px]"
//         aria-hidden="true"
//       />

//       <div
//         className="hidden lg:block absolute left-10 top-1/2 -translate-y-1/2 origin-center -rotate-90 text-white/25 text-[11px] font-medium tracking-[0.3em] uppercase whitespace-nowrap"
//         aria-hidden="true"
//       >
//         Hand Held Media &amp; Production Co.
//       </div>

//       <div className="relative max-w-3xl mx-auto text-center">
//         <h1 className="font-display text-6xl sm:text-7xl md:text-[6.5rem] text-white tracking-tight leading-none opacity-0 animate-[fadeIn_0.35s_ease-out_0.06s_forwards]">
//           Restored
//         </h1>

//         <div className="w-16 h-[2px] bg-[#F5C400] mx-auto mt-7 mb-7 scale-x-0 animate-[lineGrow_0.3s_ease-out_0.18s_forwards]" />

//         <p className="text-white/55 text-base sm:text-lg tracking-[0.04em] uppercase mb-2 opacity-0 translate-y-1 animate-[fadeUp_0.3s_ease-out_0.24s_forwards]">
//           A TV Testimony Series
//         </p>
//         <p className="text-white/85 text-xl sm:text-2xl font-light leading-relaxed opacity-0 translate-y-1 animate-[fadeUp_0.3s_ease-out_0.3s_forwards]">
//           Real Lives. Real Transformation. On Screen.
//         </p>
//       </div>

//       <div className="relative mt-20 h-px max-w-3xl mx-auto bg-gradient-to-r from-transparent via-white/10 to-transparent" />

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
//             transform: translateY(0.25rem);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
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
//       `}</style>
//     </section>
//   );
// }

"use client";

import Image from "next/image";

export default function RestoredHeader() {
  return (
    <section className="relative bg-[#1A1A1A] overflow-hidden px-6 pt-36 pb-20 sm:pt-44 sm:pb-28">
      {/* ── Blended background image — subtle, not dominant ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ zIndex: 0 }}
      >
        <Image
          src="/IMG-20260709-WA0026.jpg"
          alt=""
          aria-hidden="true"
          fill
          priority
          className="object-cover object-center"
          style={{
            opacity: 0.12,
            filter: "grayscale(60%) brightness(0.6)",
            mixBlendMode: "luminosity",
          }}
        />
      </div>

      {/* Dark gradient overlay — keeps text readable */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          zIndex: 1,
          background:
            "linear-gradient(to bottom, rgba(26,26,26,0.55) 0%, rgba(26,26,26,0.75) 60%, #1A1A1A 100%)",
        }}
      />

      {/* Gold glow orb */}
      <div
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[60rem] h-[40rem] rounded-full bg-[#F5C400]/[0.08] blur-[120px]"
        style={{ zIndex: 2 }}
        aria-hidden="true"
      />

      {/* Vertical side label */}
      <div
        className="hidden lg:block absolute left-10 top-1/2 -translate-y-1/2 origin-center -rotate-90 text-white/25 text-[11px] font-medium tracking-[0.3em] uppercase whitespace-nowrap"
        style={{ zIndex: 3 }}
        aria-hidden="true"
      >
        Hand Held Media &amp; Production Co.
      </div>

      {/* Content */}
      <div
        className="relative max-w-3xl mx-auto text-center"
        style={{ zIndex: 3 }}
      >
        <h1 className="font-display text-6xl sm:text-7xl md:text-[6.5rem] text-white tracking-tight leading-none opacity-0 animate-[fadeIn_0.35s_ease-out_0.06s_forwards]">
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

      <div
        className="relative mt-20 h-px max-w-3xl mx-auto bg-gradient-to-r from-transparent via-white/10 to-transparent"
        style={{ zIndex: 3 }}
      />

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
