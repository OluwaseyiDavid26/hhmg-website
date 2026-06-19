// import Link from "next/link";

// const services = [
//   {
//     name: "Video Production",
//     detail: "Corporate, documentary, advertising",
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
//     name: "Audio Production & Podcast Recording",
//     detail: "Studio-grade sound for every format",
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
//     name: "Photography",
//     detail: "Commercial, editorial, event",
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
//           d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"
//         />
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z"
//         />
//       </svg>
//     ),
//   },
//   {
//     name: "Post-Production & Editing",
//     detail: "Colour, cut, sound design, delivery",
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
//           d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
//         />
//       </svg>
//     ),
//   },
//   {
//     name: "Motion Graphics & Animation",
//     detail: "2D, 3D, title sequences, brand motion",
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
//           d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42"
//         />
//       </svg>
//     ),
//   },
//   {
//     name: "Live Event Coverage",
//     detail: "Multi-camera, live streaming, highlights",
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
//           d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h1.5C5.496 19.5 6 18.996 6 18.375m-3.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-1.5A1.125 1.125 0 0118 18.375M20.625 4.5H3.375m17.25 0c.621 0 1.125.504 1.125 1.125M20.625 4.5h-1.5C18.504 4.5 18 5.004 18 5.625m3.75 0v1.5c0 .621-.504 1.125-1.125 1.125M3.375 4.5c-.621 0-1.125.504-1.125 1.125M3.375 4.5h1.5C5.496 4.5 6 5.004 6 5.625m-3.75 0v1.5c0 .621.504 1.125 1.125 1.125m0 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m1.5-3.75C5.496 8.25 6 8.754 6 9.375v1.5m0-5.25v5.25m0-5.25C6 5.004 6.504 4.5 7.125 4.5h9.75c.621 0 1.125.504 1.125 1.125m1.125 2.625h1.5m-1.5 0A1.125 1.125 0 0118 7.125v1.5m1.5-2.625C19.496 5.004 20 5.508 20 6.129v1.5"
//         />
//       </svg>
//     ),
//   },
// ];

// export default function Studios() {
//   return (
//     <section id="studios" className="bg-[#1A1A1A] py-24 px-6 scroll-mt-20">
//       <div className="max-w-5xl mx-auto">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
//           {/* Left — company identity */}
//           <div className="lg:col-span-5 flex flex-col justify-between">
//             <div>
//               {/* Company number + label */}
//               <div className="inline-flex items-center gap-3 mb-6">
//                 <span className="text-white/15 text-xs font-mono">01</span>
//                 <div className="w-6 h-[1px] bg-white/15" />
//                 <span className="text-[#F5C400] text-[10px] font-bold tracking-[0.35em] uppercase">
//                   HH Media Studios
//                 </span>
//               </div>

//               {/* Headline */}
//               <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight tracking-tight mb-6">
//                 We make things look and sound{" "}
//                 <span
//                   className="text-[#F5C400]"
//                   style={{ textShadow: "0 0 40px rgba(245,196,0,0.2)" }}
//                 >
//                   extraordinary.
//                 </span>
//               </h2>

//               {/* Body copy */}
//               <p className="text-white/55 text-base leading-relaxed mb-4">
//                 Hand Held Media Studios is HHMG's full-service production arm.
//                 We deliver end-to-end video, audio, and content creation
//                 services for brands, nonprofits, government agencies, and media
//                 organisations.
//               </p>

//               <p className="text-white/55 text-base leading-relaxed mb-10">
//                 From concept to final cut — we are with you every step of the
//                 way.
//               </p>

//               {/* CTA */}
//               <Link
//                 href="/contact"
//                 className="inline-flex items-center gap-2 bg-[#F5C400] text-[#1A1A1A] font-black text-sm px-7 py-3.5 rounded-sm hover:bg-[#e6b800] transition-all duration-200 hover:scale-[1.02] uppercase tracking-wide"
//               >
//                 Book a Production Consultation
//                 <svg
//                   className="w-4 h-4"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                   strokeWidth={2.5}
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M17 8l4 4m0 0l-4 4m4-4H3"
//                   />
//                 </svg>
//               </Link>
//             </div>
//           </div>

//           {/* Right — services grid */}
//           <div className="lg:col-span-7">
//             <p className="text-white/25 text-[10px] font-bold tracking-[0.3em] uppercase mb-6">
//               What We Offer
//             </p>

//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
//               {services.map((service) => (
//                 <div
//                   key={service.name}
//                   className="group flex items-start gap-4 bg-white/[0.03] border border-white/[0.07] rounded-xl p-5 hover:border-[#F5C400]/30 hover:bg-white/[0.05] transition-all duration-300"
//                 >
//                   <div className="w-9 h-9 rounded-lg bg-[#F5C400]/10 text-[#F5C400]/70 flex items-center justify-center flex-shrink-0 group-hover:bg-[#F5C400]/20 group-hover:text-[#F5C400] transition-all duration-300">
//                     {service.icon}
//                   </div>
//                   <div>
//                     <p className="text-white text-sm font-semibold leading-snug mb-1">
//                       {service.name}
//                     </p>
//                     <p className="text-white/35 text-xs leading-relaxed">
//                       {service.detail}
//                     </p>
//                   </div>
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

const services = [
  {
    number: "01",
    name: "Video Production",
    detail: "Corporate · Documentary · Advertising",
  },
  {
    number: "02",
    name: "Audio Production & Podcast Recording",
    detail: "Studio-grade sound for every format",
  },
  {
    number: "03",
    name: "Photography",
    detail: "Commercial · Editorial · Event",
  },
  {
    number: "04",
    name: "Post-Production & Editing",
    detail: "Colour · Cut · Sound Design · Delivery",
  },
  {
    number: "05",
    name: "Motion Graphics & Animation",
    detail: "2D · 3D · Title Sequences · Brand Motion",
  },
  {
    number: "06",
    name: "Live Event Coverage",
    detail: "Multi-camera · Live Streaming · Highlights",
  },
];

export default function Studios() {
  return (
    <section
      id="studios"
      className="relative bg-[#1A1A1A] py-28 px-6 scroll-mt-20 overflow-hidden"
    >
      {/* Background watermark */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 font-black text-white/[0.018] leading-none select-none pointer-events-none tracking-tighter hidden lg:block"
        style={{ fontSize: "18vw" }}
        aria-hidden="true"
      >
        STUDIOS
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* ── HEADER ROW ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16 items-end">
          {/* Left — label + headline */}
          <div>
            <div className="inline-flex items-center gap-3 mb-7">
              <span className="text-white/20 text-[10px] font-mono tracking-widest">
                01 /
              </span>
              <span className="text-[#F5C400] text-[10px] font-bold tracking-[0.3em] uppercase">
                HH Media Studios
              </span>
            </div>

            <h2 className="text-5xl sm:text-6xl lg:text-[64px] font-black text-white leading-[0.95] tracking-tight">
              We make things
              <br />
              look and sound
              <br />
              <span
                className="text-[#F5C400]"
                style={{ textShadow: "0 0 80px rgba(245,196,0,0.15)" }}
              >
                extraordinary.
              </span>
            </h2>
          </div>

          {/* Right — copy + CTA */}
          <div className="flex flex-col gap-5 lg:pb-1">
            <p className="text-white/50 text-base leading-relaxed">
              HHMG's full-service production arm — delivering end-to-end video,
              audio, and content creation for brands, nonprofits, government
              agencies, and media organisations.
            </p>
            <p className="text-white/50 text-base leading-relaxed">
              From concept to final cut, we are with you every step of the way.
            </p>

            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 w-fit mt-2"
            >
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-[#F5C400]/40 bg-[#F5C400]/10 group-hover:bg-[#F5C400] transition-all duration-300 flex-shrink-0">
                <svg
                  className="w-4 h-4 text-[#F5C400] group-hover:text-[#1A1A1A] transition-colors duration-300"
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
              </span>
              <span className="text-white text-sm font-semibold group-hover:text-[#F5C400] transition-colors duration-300">
                Book a Production Consultation
              </span>
            </Link>
          </div>
        </div>

        {/* ── SERVICES GRID ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-white/[0.06] border border-white/[0.06] rounded-2xl overflow-hidden">
          {services.map((service, index) => (
            <div
              key={service.name}
              className="group relative bg-[#1A1A1A] p-8 flex flex-col gap-6 hover:bg-[#1f1f1f] transition-colors duration-300"
            >
              {/* Top row — number + hover arrow */}
              <div className="flex items-center justify-between">
                <span className="text-white/15 text-xs font-mono group-hover:text-[#F5C400]/50 transition-colors duration-300">
                  {service.number}
                </span>
                <svg
                  className="w-4 h-4 text-white/0 group-hover:text-[#F5C400]/50 transition-all duration-300 -translate-y-1 translate-x-1 group-hover:translate-y-0 group-hover:translate-x-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </div>

              {/* Yellow accent line — grows on hover */}
              <div className="w-6 h-[2px] bg-[#F5C400]/30 group-hover:w-12 group-hover:bg-[#F5C400] transition-all duration-500" />

              {/* Service name */}
              <div className="flex-1">
                <h3 className="text-white text-lg font-bold leading-snug tracking-tight group-hover:text-white transition-colors duration-300 mb-2">
                  {service.name}
                </h3>
                <p className="text-white/35 text-xs leading-relaxed group-hover:text-white/50 transition-colors duration-300">
                  {service.detail}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Section divider */}
        <div className="mt-24 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>
    </section>
  );
}
