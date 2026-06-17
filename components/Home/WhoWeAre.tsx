// import Link from "next/link";

// export default function WhoWeAre() {
//   return (
//     <section className="bg-[#1A1A1A] py-24 px-6">
//       <div className="max-w-5xl mx-auto">
//         {/* Section label */}
//         <div className="inline-flex items-center gap-3 mb-10">
//           <div className="w-8 h-[2px] bg-[#F5C400]" />
//           <span className="text-[#F5C400] text-xs font-semibold tracking-[0.25em] uppercase">
//             Who We Are
//           </span>
//         </div>

//         {/* Two column layout — text left, accent right */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
//           {/* Left — main copy */}
//           <div>
//             <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-[1.15] tracking-tight mb-8">
//               One Group. <span className="text-[#F5C400]">Four Companies.</span>{" "}
//               One Mission.
//             </h2>

//             <p className="text-white/60 text-base sm:text-lg leading-relaxed mb-6">
//               Hand Held Media Group brings together four focused subsidiaries
//               under one roof: production, equipment, creator development, and
//               original IP.
//             </p>

//             <p className="text-white/60 text-base sm:text-lg leading-relaxed mb-10">
//               We exist to close the gap between the stories Africa wants to tell
//               and the resources needed to tell them well.
//             </p>

//             <Link
//               href="/about"
//               className="inline-flex items-center gap-2 text-[#F5C400] text-sm font-semibold hover:gap-4 transition-all duration-200"
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

//           {/* Right — conviction statement */}
//           <div className="relative">
//             {/* Vertical accent line */}
//             <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#F5C400] via-[#F5C400]/40 to-transparent" />

//             <div className="pl-8">
//               <p className="text-white/90 text-xl sm:text-2xl font-light leading-relaxed italic">
//                 "The stories Africa tells the world must be told on Africa's own
//                 terms — with professional-grade tools, sustainable business
//                 models, and platforms that elevate creators."
//               </p>

//               <div className="mt-8 flex items-center gap-3">
//                 <div className="w-8 h-8 bg-[#F5C400] rounded-sm flex items-center justify-center flex-shrink-0">
//                   <span className="text-[#1A1A1A] font-bold text-xs">HH</span>
//                 </div>
//                 <div>
//                   <p className="text-white text-sm font-semibold">
//                     Hand Held Media Group
//                   </p>
//                   <p className="text-white/40 text-xs">Founding Conviction</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Bottom divider */}
//         <div className="mt-24 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
//       </div>
//     </section>
//   );
// }

import Link from "next/link";
import { Fraunces, Manrope } from "next/font/google";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["500", "600"],
  style: ["normal", "italic"],
  variable: "--font-display",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
});

const pillars = [
  {
    index: "01",
    label: "Production",
    description:
      "Premium content and service production for brands and broadcasters.",
  },
  {
    index: "02",
    label: "Equipment",
    description:
      "Studio-grade gear and rental infrastructure for African creators.",
  },
  {
    index: "03",
    label: "Creator Development",
    description:
      "Training, mentorship, and career support for emerging talent.",
  },
  {
    index: "04",
    label: "Original IP",
    description:
      "Owned formats, shows, and franchises built for global audiences.",
  },
];

export default function WhoWeAre() {
  return (
    <section
      className={`relative overflow-hidden bg-[#1A1A1A] px-6 py-24 sm:py-32 ${fraunces.variable} ${manrope.variable}`}
      style={{ fontFamily: "var(--font-body)" }}
    >
      {/* Subtle dot-grid texture for depth */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Section label */}
        <div className="inline-flex items-center gap-3 mb-10">
          <div className="w-8 h-[2px] bg-[#F5C400]" />
          <span className="text-[#F5C400] text-xs font-semibold tracking-[0.25em] uppercase">
            Who We Are
          </span>
        </div>

        {/* Two column layout — text left, quote right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — main copy */}
          <div>
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white leading-[1.15] tracking-tight mb-8"
              style={{ fontFamily: "var(--font-display)" }}
            >
              One Group.{" "}
              <span className="text-[#F5C400] italic">Four Companies.</span> One
              Mission.
            </h2>

            <p className="text-white/60 text-base sm:text-lg leading-relaxed mb-6 max-w-md">
              Hand Held Media Group brings together four focused subsidiaries
              under one roof: production, equipment, creator development, and
              original IP.
            </p>

            <p className="text-white/60 text-base sm:text-lg leading-relaxed mb-10 max-w-md">
              We exist to close the gap between the stories Africa wants to tell
              and the resources needed to tell them well.
            </p>

            <Link
              href="/about"
              className="group inline-flex items-center gap-2 text-[#F5C400] text-sm font-semibold"
            >
              <span className="relative">
                Our Full Story
                <span className="absolute left-0 -bottom-1 h-px w-full origin-left scale-x-0 bg-[#F5C400] transition-transform duration-300 group-hover:scale-x-100" />
              </span>
              <svg
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
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
            </Link>
          </div>

          {/* Right — conviction statement, now a proper pull-quote card */}
          <div className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-8 sm:p-10">
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="absolute -top-4 left-8 h-10 w-10 text-[#F5C400]/20"
            >
              <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-4v-10h10z" />
            </svg>

            <blockquote
              className="text-white/90 text-xl sm:text-2xl italic leading-relaxed"
              style={{ fontFamily: "var(--font-display)" }}
            >
              The stories Africa tells the world must be told on Africa&apos;s
              own terms — with professional-grade tools, sustainable business
              models, and platforms that elevate creators.
            </blockquote>

            <footer className="mt-8 flex items-center gap-3">
              <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-md bg-[#F5C400]">
                <span className="text-xs font-bold text-[#1A1A1A]">HH</span>
              </div>
              <div>
                <cite className="block text-sm font-semibold text-white not-italic">
                  Hand Held Media Group
                </cite>
                <p className="text-xs text-white/40">Founding Conviction</p>
              </div>
            </footer>
          </div>
        </div>

        {/* Four subsidiaries — gives the headline's claim something to point at */}
        <div className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-4">
          {pillars.map((pillar) => (
            <div key={pillar.index} className="bg-[#1A1A1A] p-6 sm:p-7">
              <span className="text-xs font-semibold tracking-[0.2em] text-[#F5C400]">
                {pillar.index}
              </span>
              <h3 className="mt-3 text-sm font-semibold text-white">
                {pillar.label}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-white/45">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
