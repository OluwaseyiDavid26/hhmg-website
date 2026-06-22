import Link from "next/link";

export default function WhoWeAre() {
  return (
    <section className="bg-[#1A1A1A] py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-end">
          {/* Left — headline */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-3 mb-7">
              <div className="w-8 h-[1px] bg-[#F5C400]" />
              <span className="text-[#F5C400] text-[10px] font-bold tracking-[0.35em] uppercase">
                Who We Are
              </span>
            </div>

            <h2 className="text-5xl sm:text-6xl font-black text-white leading-[1.05] tracking-tight">
              One Group. <span className="text-[#F5C400]">Four Companies.</span>{" "}
              One Mission.
            </h2>
          </div>

          {/* Right — copy + CTA */}
          <div className="lg:col-span-7 flex flex-col gap-6 lg:pb-1">
            <p className="text-white/60 text-base sm:text-lg leading-relaxed">
              Hand Held Media Group brings together four focused subsidiaries
              under one roof: production, equipment, creator development, and
              original IP.
            </p>

            <p className="text-white/60 text-base sm:text-lg leading-relaxed">
              We exist to close the gap between the stories Africa wants to tell
              and the resources needed to tell them well.
            </p>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-[#F5C400] text-sm font-semibold w-fit hover:gap-4 transition-all duration-200 mt-2"
            >
              Our Full Story
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
          </div>
        </div>

        {/* Bottom divider */}
        <div className="mt-20 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>
    </section>
  );
}

// "use client";

// import Link from "next/link";
// import { useEffect, useRef, useState } from "react";

// function useInView(threshold = 0.2) {
//   const ref = useRef<HTMLDivElement>(null);
//   const [inView, setInView] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setInView(true);
//           observer.disconnect();
//         }
//       },
//       { threshold },
//     );
//     if (ref.current) observer.observe(ref.current);
//     return () => observer.disconnect();
//   }, [threshold]);

//   return { ref, inView };
// }

// export default function WhoWeAre() {
//   const { ref, inView } = useInView(0.2);

//   return (
//     <section className="bg-[#1A1A1A] py-32 px-6" ref={ref}>
//       <div className="max-w-6xl mx-auto">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-end">
//           {/* Left — eyebrow + headline */}
//           <div className="lg:col-span-5">
//             {/* Eyebrow */}
//             <div
//               className="inline-flex items-center gap-3 mb-7"
//               style={{
//                 opacity: inView ? 1 : 0,
//                 transform: inView ? "translateY(0)" : "translateY(16px)",
//                 transition: "opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s",
//               }}
//             >
//               <div
//                 className="h-[1px] bg-[#F5C400]"
//                 style={{
//                   width: inView ? "32px" : "0px",
//                   transition: "width 0.6s ease 0.1s",
//                 }}
//               />
//               <span className="text-[#F5C400] text-[10px] font-bold tracking-[0.35em] uppercase">
//                 Who We Are
//               </span>
//             </div>

//             {/* Headline */}
//             <h2
//               className="text-[clamp(3rem,8vw,7rem)] font-black text-white leading-[1.0] tracking-tight"
//               style={{
//                 opacity: inView ? 1 : 0,
//                 transform: inView ? "translateY(0)" : "translateY(24px)",
//                 transition:
//                   "opacity 0.9s ease 0.25s, transform 0.9s ease 0.25s",
//               }}
//             >
//               One Group. <span className="text-[#F5C400]">Four Companies.</span>
//               <br />
//               One Mission.
//             </h2>
//           </div>

//           {/* Right — copy + CTA */}
//           <div className="lg:col-span-7 flex flex-col gap-0 border-t border-white/10">
//             {/* Para 1 */}
//             <p
//               className="text-white/65 text-xl leading-relaxed py-8 border-b border-white/[0.06]"
//               style={{
//                 opacity: inView ? 1 : 0,
//                 transform: inView ? "translateY(0)" : "translateY(20px)",
//                 transition: "opacity 0.8s ease 0.4s, transform 0.8s ease 0.4s",
//               }}
//             >
//               Hand Held Media Group brings together four focused subsidiaries
//               under one roof: production, equipment, creator development, and
//               original IP.
//             </p>

//             {/* Para 2 */}
//             <p
//               className="text-white/65 text-xl leading-relaxed py-8 border-b border-white/[0.06]"
//               style={{
//                 opacity: inView ? 1 : 0,
//                 transform: inView ? "translateY(0)" : "translateY(20px)",
//                 transition:
//                   "opacity 0.8s ease 0.55s, transform 0.8s ease 0.55s",
//               }}
//             >
//               We exist to close the gap between the stories Africa wants to tell
//               and the resources needed to tell them well.
//             </p>

//             {/* CTA */}
//             <div
//               className="pt-8"
//               style={{
//                 opacity: inView ? 1 : 0,
//                 transform: inView ? "translateY(0)" : "translateY(16px)",
//                 transition: "opacity 0.8s ease 0.7s, transform 0.8s ease 0.7s",
//               }}
//             >
//               <Link
//                 href="/about"
//                 className="group inline-flex items-center gap-3 w-fit"
//               >
//                 <span className="w-10 h-10 rounded-full border border-[#F5C400]/30 flex items-center justify-center group-hover:bg-[#F5C400] group-hover:border-[#F5C400] transition-all duration-300">
//                   <svg
//                     className="w-4 h-4 text-[#F5C400] group-hover:text-[#1A1A1A] transition-colors duration-300"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                     strokeWidth={2.5}
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M17 8l4 4m0 0l-4 4m4-4H3"
//                     />
//                   </svg>
//                 </span>
//                 <span className="text-white text-sm font-semibold group-hover:text-[#F5C400] transition-colors duration-300">
//                   Our Full Story
//                 </span>
//               </Link>
//             </div>
//           </div>
//         </div>

//         {/* Bottom divider — grows in */}
//         <div
//           className="mt-20 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"
//           style={{
//             opacity: inView ? 1 : 0,
//             transition: "opacity 1s ease 0.9s",
//           }}
//         />
//       </div>
//     </section>
//   );
// }
