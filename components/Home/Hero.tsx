// "use client";

// import { useEffect, useRef } from "react";
// import Link from "next/link";

// export default function Hero() {
//   const videoRef = useRef<HTMLVideoElement>(null);

//   useEffect(() => {
//     if (videoRef.current) {
//       videoRef.current.play().catch(() => {});
//     }
//   }, []);

//   return (
//     <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#1A1A1A]">
//       {/* Background — cinematic overlay pattern */}
//       <div className="absolute inset-0 z-0">
//         {/* Dark base */}
//         <div className="absolute inset-0 bg-[#1A1A1A]" />

//         {/* Subtle grid texture */}
//         <div
//           className="absolute inset-0 opacity-[0.04]"
//           style={{
//             backgroundImage: `linear-gradient(rgba(245,196,0,0.8) 1px, transparent 1px),
//                               linear-gradient(90deg, rgba(245,196,0,0.8) 1px, transparent 1px)`,
//             backgroundSize: "80px 80px",
//           }}
//         />

//         {/* Yellow glow — top left */}
//         <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-[#F5C400] opacity-[0.07] blur-[120px]" />

//         {/* Yellow glow — bottom right */}
//         <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full bg-[#F5C400] opacity-[0.05] blur-[100px]" />

//         {/* Vignette */}
//         <div className="absolute inset-0 bg-gradient-to-b from-[#1A1A1A]/60 via-transparent to-[#1A1A1A]/80" />
//       </div>

//       {/* Content */}
//       <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
//         {/* Eyebrow label */}
//         <div className="inline-flex items-center gap-2 mb-6">
//           <div className="w-8 h-[2px] bg-[#F5C400]" />
//           <span className="text-[#F5C400] text-xs font-semibold tracking-[0.2em] uppercase">
//             Lagos & Abuja · Est. 2026
//           </span>
//           <div className="w-8 h-[2px] bg-[#F5C400]" />
//         </div>

//         {/* H1 */}
//         <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-6">
//           Africa Has Stories <br className="hidden sm:block" />
//           the World <span className="text-[#F5C400]">Needs to Hear.</span>
//           <br className="hidden sm:block" />
//           We Build What It <br className="hidden sm:block" />
//           Takes to Tell Them.
//         </h1>

//         {/* Sub-headline */}
//         <p className="text-white/60 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
//           Hand Held Media Group is a Lagos and Abuja-based media company —
//           equipping creators, producing original content, and building the
//           infrastructure for African storytelling at its finest.
//         </p>

//         {/* CTAs */}
//         <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
//           <Link
//             href="/companies"
//             className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#F5C400] text-[#1A1A1A] font-semibold text-sm px-8 py-4 rounded-md hover:bg-[#e6b800] transition-all duration-200 hover:scale-[1.02]"
//           >
//             Explore Our Work
//             <svg
//               className="w-4 h-4"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//               strokeWidth={2.5}
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M17 8l4 4m0 0l-4 4m4-4H3"
//               />
//             </svg>
//           </Link>

//           <Link
//             href="/work-with-us"
//             className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-white/20 text-white text-sm font-medium px-8 py-4 rounded-md hover:border-white/40 hover:bg-white/5 transition-all duration-200"
//           >
//             Work With Us
//           </Link>
//         </div>

//         {/* Scroll indicator */}
//         <div className="mt-16 flex flex-col items-center gap-2 text-white/30">
//           <span className="text-xs tracking-widest uppercase">Scroll</span>
//           <div className="w-[1px] h-10 bg-gradient-to-b from-white/30 to-transparent animate-pulse" />
//         </div>
//       </div>

//       {/* Bottom decorative bar */}
//       <div className="absolute bottom-0 left-0 right-0 h-[2px] z-10">
//         <div className="h-full bg-gradient-to-r from-transparent via-[#F5C400]/40 to-transparent" />
//       </div>
//     </section>
//   );
// }

"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#1A1A1A]">
      {/* ── BACKGROUND LAYER ── */}
      <div className="absolute inset-0 z-0">
        {/*
          OPTION A — Looping video reel (primary)
          Drop your video file into /public/images/hero-reel.mp4
          When the file exists, this plays automatically, muted, looping.
        */}
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          src="/images/hero-reel.mp4"
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
        />

        {/*
          OPTION B — Cinematic still image (fallback)
          Drop your image into /public/images/hero-still.jpg
          Shows when video hasn't loaded or isn't provided.
          Remove this block once your video is confirmed working.
        */}
        <Image
          src="/images/hero-still.jpg"
          alt=""
          fill
          priority
          className="object-cover"
          aria-hidden="true"
        />

        {/* Dark overlay — keeps text readable over any background */}
        <div className="absolute inset-0 bg-[#1A1A1A]/70" />

        {/* Cinematic vignette — darkens edges for depth */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_40%,_rgba(26,26,26,0.85)_100%)]" />

        {/* Bottom fade — blends hero into next section */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#1A1A1A] to-transparent" />
      </div>

      {/* ── CONTENT LAYER ── */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-3 mb-8">
          {/* <div className="w-8 h-[2px] bg-[#F5C400]" />
          <span className="text-[#F5C400] text-xs font-semibold tracking-[0.25em] uppercase">
            Lagos & Abuja · Est. 2026
          </span>
          <div className="w-8 h-[2px] bg-[#F5C400]" /> */}
        </div>

        {/* H1 */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-6">
          Africa Has Stories <br className="hidden sm:block" />
          the World <span className="text-[#F5C400]">Needs to Hear.</span>
          <br className="hidden sm:block" />
          We Build What It <br className="hidden sm:block" />
          Takes to Tell Them.
        </h1>

        {/* Sub-headline */}
        <p className="text-white/60 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
          Hand Held Media Group is a Lagos and Abuja-based media company —
          equipping creators, producing original content, and building the
          infrastructure for African storytelling at its finest.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/companies"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#F5C400] text-[#1A1A1A] font-bold text-sm px-8 py-4 rounded-md hover:bg-[#e6b800] transition-all duration-200 hover:scale-[1.02]"
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
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-white/25 text-white text-sm font-medium px-8 py-4 rounded-md hover:border-[#F5C400]/60 hover:text-[#F5C400] transition-all duration-200"
          >
            Work With Us
          </Link>
        </div>

        {/* Scroll indicator */}
        {/* <div className="mt-20 flex flex-col items-center gap-2 text-white/30">
          <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
          <div className="w-[1px] h-10 bg-gradient-to-b from-white/30 to-transparent animate-pulse" />
        </div> */}
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] z-10 bg-gradient-to-r from-transparent via-[#F5C400]/50 to-transparent" />
    </section>
  );
}
