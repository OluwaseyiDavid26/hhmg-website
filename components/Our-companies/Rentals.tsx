// import Link from "next/link";

// const equipment = [
//   {
//     name: "Cinema & DSLR Cameras",
//     icon: (
//       <svg
//         className="w-5 h-5"
//         fill="none"
//         viewBox="0 0 24 24"
//         stroke="currentColor"
//         strokeWidth={1.5}
//       >
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9A2.25 2.25 0 0013.5 5.25h-9A2.25 2.25 0 002.25 7.5v9A2.25 2.25 0 004.5 18.75z"
//         />
//       </svg>
//     ),
//   },
//   {
//     name: "Lenses",
//     icon: (
//       <svg
//         className="w-5 h-5"
//         fill="none"
//         viewBox="0 0 24 24"
//         stroke="currentColor"
//         strokeWidth={1.5}
//       >
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
//         />
//       </svg>
//     ),
//   },
//   {
//     name: "Lighting Kits",
//     icon: (
//       <svg
//         className="w-5 h-5"
//         fill="none"
//         viewBox="0 0 24 24"
//         stroke="currentColor"
//         strokeWidth={1.5}
//       >
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
//         />
//       </svg>
//     ),
//   },
//   {
//     name: "Audio & Sound Equipment",
//     icon: (
//       <svg
//         className="w-5 h-5"
//         fill="none"
//         viewBox="0 0 24 24"
//         stroke="currentColor"
//         strokeWidth={1.5}
//       >
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z"
//         />
//       </svg>
//     ),
//   },
//   {
//     name: "Grip & Support",
//     icon: (
//       <svg
//         className="w-5 h-5"
//         fill="none"
//         viewBox="0 0 24 24"
//         stroke="currentColor"
//         strokeWidth={1.5}
//       >
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"
//         />
//       </svg>
//     ),
//   },
//   {
//     name: "Accessories & Batteries",
//     icon: (
//       <svg
//         className="w-5 h-5"
//         fill="none"
//         viewBox="0 0 24 24"
//         stroke="currentColor"
//         strokeWidth={1.5}
//       >
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           d="M21 10.5h.375a.375.375 0 01.375.375v2.25a.375.375 0 01-.375.375H21m-3.75 0h-1.5m1.5 0a2.25 2.25 0 002.25-2.25V9a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9v6.75a2.25 2.25 0 002.25 2.25h11.25"
//         />
//       </svg>
//     ),
//   },
// ];

// export default function Rentals() {
//   return (
//     <section id="rentals" className="bg-[#0D0D0D] py-24 px-6 scroll-mt-20">
//       <div className="max-w-5xl mx-auto">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
//           {/* Left — company identity */}
//           <div className="lg:col-span-5 flex flex-col justify-between">
//             <div>
//               {/* Company number + label */}
//               <div className="inline-flex items-center gap-3 mb-6">
//                 <span className="text-white/15 text-xs font-mono">02</span>
//                 <div className="w-6 h-[1px] bg-white/15" />
//                 <span className="text-[#F5C400] text-[10px] font-bold tracking-[0.35em] uppercase">
//                   HH Media Rentals
//                 </span>
//               </div>

//               {/* Headline */}
//               <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight tracking-tight mb-6">
//                 The right gear{" "}
//                 <span
//                   className="text-[#F5C400]"
//                   style={{ textShadow: "0 0 40px rgba(245,196,0,0.2)" }}
//                 >
//                   changes everything.
//                 </span>
//               </h2>

//               {/* Body copy — exact from brief */}
//               <p className="text-white/55 text-base leading-relaxed mb-4">
//                 Hand Held Media Rentals gives independent filmmakers, production
//                 companies, and content creators access to professional-grade
//                 camera, lighting, and audio equipment — without the overhead of
//                 ownership.
//               </p>

//               <p className="text-white/55 text-base leading-relaxed mb-10">
//                 Flexible rental periods. Maintained gear. Real support.
//               </p>

//               {/* CTAs */}
//               <div className="flex flex-col sm:flex-row gap-3">
//                 <Link
//                   href="/contact"
//                   className="inline-flex items-center justify-center gap-2 bg-[#F5C400] text-[#1A1A1A] font-black text-sm px-6 py-3.5 rounded-sm hover:bg-[#e6b800] transition-all duration-200 hover:scale-[1.02] uppercase tracking-wide"
//                 >
//                   Browse Equipment Catalogue
//                   <svg
//                     className="w-4 h-4"
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
//                 </Link>

//                 <Link
//                   href="/contact"
//                   className="inline-flex items-center justify-center gap-2 border border-white/15 text-white/60 text-sm font-medium px-6 py-3.5 rounded-sm hover:border-[#F5C400]/40 hover:text-[#F5C400] transition-all duration-200 uppercase tracking-wide"
//                 >
//                   Request a Quote
//                 </Link>
//               </div>
//             </div>
//           </div>

//           {/* Right — equipment grid */}
//           <div className="lg:col-span-7">
//             <p className="text-white/25 text-[10px] font-bold tracking-[0.3em] uppercase mb-6">
//               Equipment Categories
//             </p>

//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
//               {equipment.map((item) => (
//                 <div
//                   key={item.name}
//                   className="group flex items-center gap-4 bg-white/[0.03] border border-white/[0.07] rounded-xl p-5 hover:border-[#F5C400]/30 hover:bg-white/[0.05] transition-all duration-300"
//                 >
//                   <div className="w-10 h-10 rounded-lg bg-[#F5C400]/10 text-[#F5C400]/70 flex items-center justify-center flex-shrink-0 group-hover:bg-[#F5C400]/20 group-hover:text-[#F5C400] transition-all duration-300">
//                     {item.icon}
//                   </div>
//                   <p className="text-white/70 text-sm font-medium group-hover:text-white transition-colors duration-300">
//                     {item.name}
//                   </p>
//                 </div>
//               ))}
//             </div>

//             {/* Reassurance strip */}
//             <div className="mt-6 grid grid-cols-3 gap-3">
//               {[
//                 { value: "Flexible", label: "Rental Periods" },
//                 { value: "Maintained", label: "Gear Always Ready" },
//                 { value: "Real", label: "Support On Hand" },
//               ].map((item) => (
//                 <div
//                   key={item.label}
//                   className="bg-white/[0.02] border border-white/[0.06] rounded-lg p-4 text-center"
//                 >
//                   <p className="text-[#F5C400] text-sm font-black mb-1">
//                     {item.value}
//                   </p>
//                   <p className="text-white/30 text-xs leading-snug">
//                     {item.label}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Section divider */}
//         <div className="mt-24 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
//       </div>
//     </section>
//   );
// }

import Link from "next/link";

const equipment = [
  {
    number: "01",
    name: "Cinema & DSLR Cameras",
    detail: "From indie shoots to full commercial productions",
    tag: "Primary Capture",
    icon: (
      <svg
        className="w-7 h-7"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9A2.25 2.25 0 0013.5 5.25h-9A2.25 2.25 0 002.25 7.5v9A2.25 2.25 0 004.5 18.75z"
        />
      </svg>
    ),
  },
  {
    number: "02",
    name: "Lenses",
    detail: "Prime, zoom, anamorphic — every focal length covered",
    tag: "Optics",
    icon: (
      <svg
        className="w-7 h-7"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1}
      >
        <circle cx="12" cy="12" r="9" strokeLinecap="round" />
        <circle cx="12" cy="12" r="4" strokeLinecap="round" />
        <line x1="12" y1="3" x2="12" y2="6" strokeLinecap="round" />
        <line x1="12" y1="18" x2="12" y2="21" strokeLinecap="round" />
        <line x1="3" y1="12" x2="6" y2="12" strokeLinecap="round" />
        <line x1="18" y1="12" x2="21" y2="12" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    number: "03",
    name: "Lighting Kits",
    detail: "LED panels, HMIs, tungsten, modifiers and stands",
    tag: "Illumination",
    icon: (
      <svg
        className="w-7 h-7"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
        />
      </svg>
    ),
  },
  {
    number: "04",
    name: "Audio & Sound Equipment",
    detail: "Shotgun mics, recorders, wireless, boom poles",
    tag: "Sound",
    icon: (
      <svg
        className="w-7 h-7"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z"
        />
      </svg>
    ),
  },
  {
    number: "05",
    name: "Grip & Support",
    detail: "Tripods, sliders, gimbals, rigging, dollies",
    tag: "Rigging",
    icon: (
      <svg
        className="w-7 h-7"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"
        />
      </svg>
    ),
  },
  {
    number: "06",
    name: "Accessories & Batteries",
    detail: "V-mount, media cards, monitors, cables and more",
    tag: "Essentials",
    icon: (
      <svg
        className="w-7 h-7"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 10.5h.375a.375.375 0 01.375.375v2.25a.375.375 0 01-.375.375H21m-3.75 0h-1.5m1.5 0a2.25 2.25 0 002.25-2.25V9a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9v6.75a2.25 2.25 0 002.25 2.25h11.25"
        />
      </svg>
    ),
  },
];

export default function Rentals() {
  return (
    <section
      id="rentals"
      className="relative bg-[#0D0D0D] py-28 px-6 scroll-mt-20 overflow-hidden"
    >
      {/* Background watermark */}
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 font-black text-white/[0.015] leading-none select-none pointer-events-none tracking-tighter hidden lg:block"
        style={{ fontSize: "16vw" }}
        aria-hidden="true"
      >
        RENTALS
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* ── HEADER ── */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-16">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-3 mb-7">
              <span className="text-white/20 text-[10px] font-mono tracking-widest">
                02 /
              </span>
              <span className="text-[#F5C400] text-[10px] font-bold tracking-[0.3em] uppercase">
                HH Media Rentals
              </span>
            </div>

            <h2 className="text-5xl sm:text-6xl lg:text-[64px] font-black text-white leading-[0.95] tracking-tight mb-6">
              The right gear
              <br />
              <span
                className="text-[#F5C400]"
                style={{ textShadow: "0 0 80px rgba(245,196,0,0.15)" }}
              >
                changes
                <br />
                everything.
              </span>
            </h2>

            <p className="text-white/50 text-base leading-relaxed">
              Professional-grade camera, lighting, and audio equipment for
              independent filmmakers, production companies, and content creators
              — without the overhead of ownership.
            </p>
          </div>

          {/* Right — 3 spec pills stacked */}
          <div className="flex flex-col gap-3 lg:items-end flex-shrink-0">
            {[
              { value: "Flexible", sub: "Rental Periods" },
              { value: "Maintained", sub: "Gear Always Ready" },
              { value: "Real", sub: "Support On Hand" },
            ].map((item) => (
              <div
                key={item.sub}
                className="flex items-center gap-4 border-l-2 border-[#F5C400]/30 pl-4"
              >
                <span className="text-white font-black text-sm">
                  {item.value}
                </span>
                <span className="text-white/30 text-xs">{item.sub}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── EQUIPMENT CATALOGUE GRID ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {equipment.map((item) => (
            <div
              key={item.name}
              className="group relative flex flex-col bg-white/[0.03] rounded-2xl overflow-hidden border border-white/[0.07] hover:border-[#F5C400]/25 transition-all duration-500"
            >
              {/* Top — icon area */}
              <div className="relative flex items-center justify-center h-36 bg-white/[0.02] border-b border-white/[0.06] group-hover:bg-[#F5C400]/[0.04] transition-colors duration-500">
                {/* Number — top left */}
                <span className="absolute top-4 left-5 text-white/10 text-xs font-mono group-hover:text-[#F5C400]/30 transition-colors duration-300">
                  {item.number}
                </span>

                {/* Tag — top right */}
                <span className="absolute top-4 right-5 text-white/15 text-[10px] font-bold tracking-[0.2em] uppercase group-hover:text-[#F5C400]/40 transition-colors duration-300">
                  {item.tag}
                </span>

                {/* Icon — centred, large */}
                <div className="text-white/20 group-hover:text-[#F5C400]/70 transition-all duration-500 group-hover:scale-110 transform">
                  {item.icon}
                </div>
              </div>

              {/* Bottom — text content */}
              <div className="flex flex-col gap-2 p-6">
                <h3 className="text-white text-base font-bold leading-snug tracking-tight group-hover:text-white transition-colors duration-300">
                  {item.name}
                </h3>
                <p className="text-white/35 text-xs leading-relaxed group-hover:text-white/55 transition-colors duration-300">
                  {item.detail}
                </p>
              </div>

              {/* Bottom accent line — grows on hover */}
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#F5C400] group-hover:w-full transition-all duration-500" />
            </div>
          ))}
        </div>

        {/* ── CTAs ── */}
        <div className="flex flex-col sm:flex-row gap-4 mt-12">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-[#F5C400] text-[#1A1A1A] font-black text-sm px-8 py-4 rounded-sm hover:bg-[#e6b800] transition-all duration-200 hover:scale-[1.02] uppercase tracking-wide"
          >
            Browse Equipment Catalogue
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
            href="/contact"
            className="inline-flex items-center justify-center gap-2 border border-white/15 text-white/60 text-sm font-semibold px-8 py-4 rounded-sm hover:border-[#F5C400]/40 hover:text-[#F5C400] transition-all duration-200 uppercase tracking-wide"
          >
            Request a Quote
          </Link>
        </div>

        {/* Section divider */}
        <div className="mt-24 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>
    </section>
  );
}
