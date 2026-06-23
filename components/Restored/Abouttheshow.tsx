// import Link from "next/link";

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
//   return (
//     <section className="bg-[#1A1A1A] py-24 px-6">
//       <div className="max-w-4xl mx-auto">
//         {/* Section label */}
//         <div className="inline-flex items-center gap-3 mb-10">
//           <div className="w-8 h-[2px] bg-[#F5C400]" />
//           <span className="text-[#F5C400] text-xs font-semibold tracking-[0.25em] uppercase">
//             About the Show
//           </span>
//         </div>

//         {/* Lead statement */}
//         <p className="font-serif text-2xl sm:text-3xl text-white leading-snug mb-8">
//           Restored is a television testimony series produced by Hand Held Media
//           &amp; Production Company.
//         </p>

//         <p className="text-white/60 text-base sm:text-lg leading-relaxed max-w-2xl mb-14">
//           Every episode follows a real individual whose life has been
//           transformed — told with the intimacy of a conversation and the craft
//           of cinema.
//         </p>

//         {/* Pull quote */}
//         <div className="relative pl-8 mb-14">
//           <span
//             className="absolute left-0 top-0 text-[#F5C400]/30 font-serif text-6xl leading-none select-none"
//             aria-hidden="true"
//           >
//             &ldquo;
//           </span>
//           <p className="text-white/85 text-xl sm:text-2xl font-light italic leading-relaxed">
//             We believe testimony is one of the most powerful forces in human
//             storytelling. Restored gives it the production quality it deserves.
//           </p>
//         </div>

//         {/* Status line */}
//         <div className="inline-flex items-center gap-2 mb-16 text-white/40 text-sm">
//           <span className="w-1.5 h-1.5 rounded-full bg-[#F5C400]" />
//           Currently in production &middot; Distribution details to follow
//         </div>

//         {/* CTAs */}
//         <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-white/[0.08] rounded-xl overflow-hidden border border-white/[0.08]">
//           {CTAS.map((cta) => (
//             <Link
//               key={cta.label}
//               href={cta.href}
//               className="group relative bg-[#1A1A1A] p-6 sm:p-7 transition-colors duration-200 hover:bg-white/[0.03]"
//             >
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
      { threshold: 0.15 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#1A1A1A] py-24 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Section label */}
        <div
          className={`inline-flex items-center gap-3 mb-10 transition-all duration-500 ease-out ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-3"
          }`}
        >
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

        {/* Lead statement */}
        <p
          className={`font-serif text-2xl sm:text-3xl text-white leading-snug mb-8 transition-all duration-700 ease-out ${
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

        {/* Pull quote — mark stamps in, then text follows */}
        <div className="relative pl-8 mb-14">
          <span
            className={`absolute left-0 top-0 text-[#F5C400]/30 font-serif text-6xl leading-none select-none transition-all duration-500 ${
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
            className={`text-white/85 text-xl sm:text-2xl font-light italic leading-relaxed transition-all duration-700 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-3"
            }`}
            style={{ transitionDelay: "420ms" }}
          >
            We believe testimony is one of the most powerful forces in human
            storytelling. Restored gives it the production quality it deserves.
          </p>
        </div>

        {/* Status line */}
        <div
          className={`inline-flex items-center gap-2 mb-16 text-white/40 text-sm transition-all duration-500 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
          }`}
          style={{ transitionDelay: "560ms" }}
        >
          <span className="relative flex w-1.5 h-1.5">
            <span
              className={`absolute inline-flex h-full w-full rounded-full bg-[#F5C400] opacity-60 ${
                isVisible ? "animate-ping" : ""
              }`}
            />
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#F5C400]" />
          </span>
          Currently in production &middot; Distribution details to follow
        </div>

        {/* CTAs — cards reveal in sequence, dividers draw between them */}
        <div className="relative grid grid-cols-1 sm:grid-cols-3 gap-px bg-white/[0.08] rounded-xl overflow-hidden border border-white/[0.08]">
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
      </div>
    </section>
  );
}
