// "use client";

// import Link from "next/link";
// import { useEffect, useRef, useState } from "react";

// const CTAS = [
//   {
//     label: "Stay Updated",
//     description: "Join the mailing list for production updates.",
//     href: "/restored/updates",
//   },
//   {
//     label: "Partner With Us",
//     description: "For broadcasters, distributors, and brand partners.",
//     href: "/restored/partner",
//   },
//   {
//     label: "Share Your Story",
//     description: "Think your story belongs on screen? Reach out.",
//     href: "/restored/share-your-story",
//   },
// ];

// export default function AboutTheShow() {
//   const sectionRef = useRef<HTMLDivElement>(null);
//   const canvasRef = useRef<HTMLCanvasElement>(null);
//   const rafRef = useRef<number | undefined>(undefined);
//   const [isVisible, setIsVisible] = useState(false);

//   // Scroll trigger
//   useEffect(() => {
//     const el = sectionRef.current;
//     if (!el) return;

//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//           observer.disconnect();
//         }
//       },
//       { threshold: 0.15 },
//     );

//     observer.observe(el);
//     return () => observer.disconnect();
//   }, []);

//   // Signature effect: the pull quote "restores" itself — grain and
//   // scratch marks burn off over ~1.8s, like a damaged film frame
//   // being cleaned up in real time. This is the one animated risk in
//   // the section; everything else stays quiet.
//   useEffect(() => {
//     if (!isVisible) return;
//     const canvas = canvasRef.current;
//     if (!canvas) return;
//     const ctx = canvas.getContext("2d");
//     if (!ctx) return;

//     const dpr = window.devicePixelRatio || 1;
//     const resize = () => {
//       const rect = canvas.getBoundingClientRect();
//       canvas.width = rect.width * dpr;
//       canvas.height = rect.height * dpr;
//       ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
//     };
//     resize();

//     const prefersReducedMotion = window.matchMedia(
//       "(prefers-reduced-motion: reduce)",
//     ).matches;

//     if (prefersReducedMotion) {
//       // No burn-off animation — leave the frame clean.
//       return;
//     }

//     const duration = 1800;
//     const start = performance.now();
//     const scratches = Array.from({ length: 4 }, () => ({
//       x: Math.random(),
//       width: Math.random() * 1.1 + 0.4,
//     }));

//     const draw = (now: number) => {
//       const elapsed = now - start;
//       const t = Math.min(elapsed / duration, 1);
//       const intensity = 1 - t;

//       const w = canvas.width / dpr;
//       const h = canvas.height / dpr;
//       ctx.clearRect(0, 0, w, h);

//       if (intensity > 0.01) {
//         const grainCount = Math.floor(160 * intensity);
//         for (let i = 0; i < grainCount; i++) {
//           const gx = Math.random() * w;
//           const gy = Math.random() * h;
//           ctx.fillStyle = `rgba(245, 196, 0, ${Math.random() * 0.16 * intensity})`;
//           ctx.fillRect(gx, gy, 1, 1);
//         }
//         scratches.forEach((s) => {
//           ctx.strokeStyle = `rgba(255, 255, 255, ${0.09 * intensity})`;
//           ctx.lineWidth = s.width;
//           ctx.beginPath();
//           ctx.moveTo(s.x * w, 0);
//           ctx.lineTo(s.x * w, h);
//           ctx.stroke();
//         });
//       }

//       if (t < 1) {
//         rafRef.current = requestAnimationFrame(draw);
//       }
//     };

//     rafRef.current = requestAnimationFrame(draw);
//     return () => {
//       if (rafRef.current) cancelAnimationFrame(rafRef.current);
//     };
//   }, [isVisible]);

//   return (
//     <section ref={sectionRef} className="bg-[#1A1A1A] py-24 px-6">
//       <div className="max-w-4xl mx-auto">
//         {/* Section label + reel marker */}
//         <div
//           className={`flex items-center justify-between mb-10 transition-all duration-500 ease-out ${
//             isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-3"
//           }`}
//         >
//           <div className="inline-flex items-center gap-3">
//             <div
//               className={`h-[2px] bg-[#F5C400] transition-all duration-500 ease-out ${
//                 isVisible ? "w-8" : "w-0"
//               }`}
//               style={{ transitionDelay: "150ms" }}
//             />
//             <span className="text-[#F5C400] text-xs font-semibold tracking-[0.25em] uppercase">
//               About the Show
//             </span>
//           </div>
//           <span className="font-mono text-[10px] tracking-[0.2em] text-white/30 hidden sm:inline">
//             REEL 002 &middot; TESTIMONY
//           </span>
//         </div>

//         {/* Lead statement */}
//         <p
//           className={`font-display text-2xl sm:text-3xl text-white leading-snug mb-8 transition-all duration-700 ease-out ${
//             isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
//           }`}
//           style={{ transitionDelay: "120ms" }}
//         >
//           Restored is a television testimony series produced by Hand Held Media
//           &amp; Production Company.
//         </p>

//         <p
//           className={`text-white/60 text-base sm:text-lg leading-relaxed max-w-2xl mb-14 transition-all duration-700 ease-out ${
//             isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
//           }`}
//           style={{ transitionDelay: "220ms" }}
//         >
//           Every episode follows a real individual whose life has been
//           transformed — told with the intimacy of a conversation and the craft
//           of cinema.
//         </p>

//         {/* Pull quote — a damaged frame restoring itself in real time */}
//         <div className="relative mb-14 rounded-lg border border-white/[0.08] bg-[#0D0D0D]/40 overflow-hidden pl-8 pr-6 py-10 sm:pl-10 sm:pr-10">
//           <canvas
//             ref={canvasRef}
//             className="absolute inset-0 w-full h-full pointer-events-none"
//             aria-hidden="true"
//           />

//           {/* Restoration sweep — passes once, left to right */}
//           <div
//             className={`pointer-events-none absolute inset-y-0 w-24 bg-gradient-to-r from-transparent via-[#F5C400]/20 to-transparent transition-transform ease-out motion-reduce:hidden ${
//               isVisible ? "translate-x-[calc(100vw)]" : "-translate-x-24"
//             }`}
//             style={{
//               transitionDuration: "1400ms",
//               transitionDelay: "300ms",
//             }}
//           />

//           <span
//             className={`absolute left-3 top-6 text-[#F5C400]/30 font-display text-6xl leading-none select-none transition-all duration-500 ${
//               isVisible ? "opacity-100 scale-100" : "opacity-0 scale-150"
//             }`}
//             style={{
//               transitionDelay: "340ms",
//               transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)",
//             }}
//             aria-hidden="true"
//           >
//             &ldquo;
//           </span>

//           <p
//             className={`relative text-white/90 text-xl sm:text-2xl font-light italic leading-relaxed transition-all ease-out motion-reduce:blur-none motion-reduce:grayscale-0 ${
//               isVisible
//                 ? "opacity-100 translate-y-0 blur-none grayscale-0"
//                 : "opacity-0 translate-y-3 blur-md grayscale"
//             }`}
//             style={{ transitionDuration: "1200ms", transitionDelay: "420ms" }}
//           >
//             We believe testimony is one of the most powerful forces in human
//             storytelling. Restored gives it the production quality it deserves.
//           </p>
//         </div>

//         {/* Status line */}
//         <div
//           className={`inline-flex items-center gap-2 mb-16 text-white/40 text-sm font-mono transition-all duration-500 ease-out ${
//             isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
//           }`}
//           style={{ transitionDelay: "560ms" }}
//         >
//           <span className="text-white/25">[</span>
//           <span className="relative flex w-1.5 h-1.5">
//             <span
//               className={`absolute inline-flex h-full w-full rounded-full bg-[#F5C400] opacity-60 ${
//                 isVisible ? "animate-ping" : ""
//               }`}
//             />
//             <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#F5C400]" />
//           </span>
//           <span className="text-[#F5C400]/80">REC</span>
//           <span className="text-white/25">]</span>
//           <span className="not-italic">
//             Currently in production &middot; Distribution details to follow
//           </span>
//         </div>

//         {/* CTAs — framed like a filmstrip, sprocket holes top and bottom */}
//         <div
//           className="hidden sm:block h-2 rounded-t-md"
//           style={{
//             backgroundImage:
//               "radial-gradient(circle, rgba(255,255,255,0.14) 1px, transparent 1.5px)",
//             backgroundSize: "18px 100%",
//           }}
//           aria-hidden="true"
//         />
//         <div className="relative grid grid-cols-1 sm:grid-cols-3 gap-px bg-white/[0.08] overflow-hidden border-x border-white/[0.08]">
//           {CTAS.map((cta, i) => (
//             <Link
//               key={cta.label}
//               href={cta.href}
//               className={`group relative bg-[#1A1A1A] p-6 sm:p-7 transition-all duration-200 hover:bg-white/[0.03] ${
//                 isVisible
//                   ? "opacity-100 translate-y-0"
//                   : "opacity-0 translate-y-4"
//               }`}
//               style={{
//                 transitionProperty: "opacity, transform, background-color",
//                 transitionDuration: isVisible ? "500ms, 500ms, 200ms" : "0ms",
//                 transitionDelay: isVisible ? `${680 + i * 110}ms` : "0ms",
//               }}
//             >
//               {/* Viewfinder corner brackets, appear on hover */}
//               <span className="pointer-events-none absolute top-2 left-2 w-3 h-3 border-t border-l border-[#F5C400]/0 group-hover:border-[#F5C400]/60 transition-colors duration-200" />
//               <span className="pointer-events-none absolute bottom-2 right-2 w-3 h-3 border-b border-r border-[#F5C400]/0 group-hover:border-[#F5C400]/60 transition-colors duration-200" />

//               <p className="text-white text-sm font-semibold mb-2 flex items-center gap-2">
//                 {cta.label}
//                 <svg
//                   className="w-3.5 h-3.5 text-[#F5C400] transition-transform duration-200 group-hover:translate-x-1"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                   strokeWidth={2.5}
//                   aria-hidden="true"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M17 8l4 4m0 0l-4 4m4-4H3"
//                   />
//                 </svg>
//               </p>
//               <p className="text-white/45 text-xs leading-relaxed">
//                 {cta.description}
//               </p>
//             </Link>
//           ))}
//         </div>
//         <div
//           className="hidden sm:block h-2 rounded-b-md"
//           style={{
//             backgroundImage:
//               "radial-gradient(circle, rgba(255,255,255,0.14) 1px, transparent 1.5px)",
//             backgroundSize: "18px 100%",
//           }}
//           aria-hidden="true"
//         />
//       </div>
//     </section>
//   );
// }

"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const CTAS = [
  {
    label: "Stay Updated",
    description: "Join the mailing list for production updates.",
    href: "/restored/updates",
  },
  {
    label: "Partner With Us",
    description: "For broadcasters, distributors, and brand partners.",
    href: "/restored/partner",
  },
  {
    label: "Share Your Story",
    description: "Think your story belongs on screen? Reach out.",
    href: "/restored/share-your-story",
  },
];

export default function AboutTheShow() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number | undefined>(undefined);
  const [isVisible, setIsVisible] = useState(false);

  // Scroll trigger
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
      { threshold: 0.15 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Signature effect: the pull quote "restores" itself — grain and
  // scratch marks burn off over ~1.8s, like a damaged film frame
  // being cleaned up in real time. This is the one animated risk in
  // the section; everything else stays quiet.
  useEffect(() => {
    if (!isVisible) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      // No burn-off animation — leave the frame clean.
      return;
    }

    const duration = 1800;
    const start = performance.now();
    const scratches = Array.from({ length: 4 }, () => ({
      x: Math.random(),
      width: Math.random() * 1.1 + 0.4,
    }));

    const draw = (now: number) => {
      const elapsed = now - start;
      const t = Math.min(elapsed / duration, 1);
      const intensity = 1 - t;

      const w = canvas.width / dpr;
      const h = canvas.height / dpr;
      ctx.clearRect(0, 0, w, h);

      if (intensity > 0.01) {
        const grainCount = Math.floor(160 * intensity);
        for (let i = 0; i < grainCount; i++) {
          const gx = Math.random() * w;
          const gy = Math.random() * h;
          ctx.fillStyle = `rgba(245, 196, 0, ${Math.random() * 0.16 * intensity})`;
          ctx.fillRect(gx, gy, 1, 1);
        }
        scratches.forEach((s) => {
          ctx.strokeStyle = `rgba(255, 255, 255, ${0.09 * intensity})`;
          ctx.lineWidth = s.width;
          ctx.beginPath();
          ctx.moveTo(s.x * w, 0);
          ctx.lineTo(s.x * w, h);
          ctx.stroke();
        });
      }

      if (t < 1) {
        rafRef.current = requestAnimationFrame(draw);
      }
    };

    rafRef.current = requestAnimationFrame(draw);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [isVisible]);

  return (
    <section ref={sectionRef} className="bg-[#1A1A1A] py-24 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Section label + reel marker */}
        <div
          className={`flex items-center justify-between mb-10 transition-all duration-500 ease-out ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-3"
          }`}
        >
          <div className="inline-flex items-center gap-3">
            <div
              className={`h-[2px] bg-[#F5C400] transition-all duration-500 ease-out ${
                isVisible ? "w-8" : "w-0"
              }`}
              style={{ transitionDelay: "150ms" }}
            />
            <span className="text-[#F5C400] text-xs font-semibold tracking-[0.25em] uppercase">
              About the Show
            </span>
          </div>
          <span className="font-mono text-[10px] tracking-[0.2em] text-white/30 hidden sm:inline">
            REEL 002 &middot; TESTIMONY
          </span>
        </div>

        {/* Lead statement */}
        <p
          className={`font-display text-2xl sm:text-3xl text-white leading-snug mb-8 transition-all duration-700 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: "120ms" }}
        >
          Restored is a television testimony series produced by Hand Held Media
          &amp; Production Company.
        </p>

        <p
          className={`text-white/60 text-base sm:text-lg leading-relaxed max-w-2xl mb-14 transition-all duration-700 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: "220ms" }}
        >
          Every episode follows a real individual whose life has been
          transformed — told with the intimacy of a conversation and the craft
          of cinema.
        </p>

        {/* Pull quote — a damaged frame restoring itself in real time */}
        <div className="relative mb-14 rounded-lg border border-white/[0.08] bg-[#0D0D0D]/40 overflow-hidden pl-8 pr-6 py-10 sm:pl-10 sm:pr-10">
          <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full pointer-events-none"
            aria-hidden="true"
          />

          {/* Restoration sweep — passes once, left to right */}
          <div
            className={`pointer-events-none absolute inset-y-0 w-24 bg-gradient-to-r from-transparent via-[#F5C400]/20 to-transparent transition-transform ease-out motion-reduce:hidden ${
              isVisible ? "translate-x-[calc(100vw)]" : "-translate-x-24"
            }`}
            style={{
              transitionDuration: "1400ms",
              transitionDelay: "300ms",
            }}
          />

          <span
            className={`absolute left-3 top-6 text-[#F5C400]/30 font-display text-6xl leading-none select-none transition-all duration-500 ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-150"
            }`}
            style={{
              transitionDelay: "340ms",
              transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)",
            }}
            aria-hidden="true"
          >
            &ldquo;
          </span>

          <p
            className={`relative text-white/90 text-xl sm:text-2xl font-light italic leading-relaxed transition-all ease-out motion-reduce:blur-none motion-reduce:grayscale-0 ${
              isVisible
                ? "opacity-100 translate-y-0 blur-none grayscale-0"
                : "opacity-0 translate-y-3 blur-md grayscale"
            }`}
            style={{ transitionDuration: "1200ms", transitionDelay: "420ms" }}
          >
            We believe testimony is one of the most powerful forces in human
            storytelling. Restored gives it the production quality it deserves.
          </p>
        </div>

        {/* Status line */}
        <div
          className={`inline-flex items-center gap-2 mb-16 text-white/40 text-sm font-mono transition-all duration-500 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
          }`}
          style={{ transitionDelay: "560ms" }}
        >
          <span className="text-white/25">[</span>
          <span className="relative flex w-1.5 h-1.5">
            <span
              className={`absolute inline-flex h-full w-full rounded-full bg-[#F5C400] opacity-60 ${
                isVisible ? "animate-ping" : ""
              }`}
            />
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#F5C400]" />
          </span>
          <span className="text-[#F5C400]/80">REC</span>
          <span className="text-white/25">]</span>
          <span className="not-italic">
            Currently in production &middot; Distribution details to follow
          </span>
        </div>

        {/* CTAs — framed like a filmstrip, sprocket holes top and bottom */}
        <div
          className="hidden sm:block h-2 rounded-t-md"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.14) 1px, transparent 1.5px)",
            backgroundSize: "18px 100%",
          }}
          aria-hidden="true"
        />
        <div className="relative grid grid-cols-1 sm:grid-cols-3 gap-px bg-white/[0.08] overflow-hidden border-x border-white/[0.08]">
          {CTAS.map((cta, i) => (
            <Link
              key={cta.label}
              href={cta.href}
              className={`group relative bg-[#1A1A1A] p-6 sm:p-7 transition-all duration-200 hover:bg-white/[0.03] ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
              style={{
                transitionProperty: "opacity, transform, background-color",
                transitionDuration: isVisible ? "500ms, 500ms, 200ms" : "0ms",
                transitionDelay: isVisible ? `${680 + i * 110}ms` : "0ms",
              }}
            >
              {/* Viewfinder corner brackets, appear on hover */}
              <span className="pointer-events-none absolute top-2 left-2 w-3 h-3 border-t border-l border-[#F5C400]/0 group-hover:border-[#F5C400]/60 transition-colors duration-200" />
              <span className="pointer-events-none absolute bottom-2 right-2 w-3 h-3 border-b border-r border-[#F5C400]/0 group-hover:border-[#F5C400]/60 transition-colors duration-200" />

              <p className="text-white text-sm font-semibold mb-2 flex items-center gap-2">
                {cta.label}
                <svg
                  className="w-3.5 h-3.5 text-[#F5C400] transition-transform duration-200 group-hover:translate-x-1"
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
              </p>
              <p className="text-white/45 text-xs leading-relaxed">
                {cta.description}
              </p>
            </Link>
          ))}
        </div>
        <div
          className="hidden sm:block h-2 rounded-b-md"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.14) 1px, transparent 1.5px)",
            backgroundSize: "18px 100%",
          }}
          aria-hidden="true"
        />
      </div>
    </section>
  );
}
