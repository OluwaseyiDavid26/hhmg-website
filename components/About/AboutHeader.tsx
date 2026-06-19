// export default function AboutHeader() {
//   return (
//     <section className="relative bg-[#0D0D0D] pt-32 pb-20 px-6 overflow-hidden">
//       {/* Background layers */}
//       <div className="absolute inset-0 z-0 pointer-events-none">
//         {/* Film grain */}
//         <div
//           className="absolute inset-0 opacity-[0.15]"
//           style={{
//             backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='grain'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23grain)'/%3E%3C/svg%3E")`,
//             backgroundSize: "200px 200px",
//           }}
//         />
//         {/* Yellow glow */}
//         <div className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-[#F5C400] opacity-[0.05] blur-[100px]" />
//         {/* Vignette */}
//         <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#1A1A1A]" />
//       </div>

//       <div className="relative z-10 max-w-5xl mx-auto">
//         {/* Breadcrumb */}
//         <div className="inline-flex items-center gap-2 mb-10">
//           <span className="text-white/25 text-xs tracking-widest uppercase">
//             HHMG
//           </span>
//           <span className="text-white/15 text-xs">/</span>
//           <span className="text-[#F5C400] text-xs tracking-widest uppercase font-semibold">
//             About
//           </span>
//         </div>

//         {/* Page title */}
//         <div className="flex flex-col gap-6 max-w-3xl">
//           <div className="inline-flex items-center gap-3">
//             <div className="w-8 h-[1px] bg-[#F5C400]" />
//             <span className="text-[#F5C400] text-[10px] font-bold tracking-[0.35em] uppercase">
//               Our Story
//             </span>
//           </div>

//           <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-white leading-[1.0] tracking-tight">
//             Built for the <br className="hidden sm:block" />
//             Stories{" "}
//             <span
//               className="text-[#F5C400]"
//               style={{ textShadow: "0 0 60px rgba(245,196,0,0.2)" }}
//             >
//               Africa Tells.
//             </span>
//           </h1>

//           <p className="text-white/50 text-lg sm:text-xl leading-relaxed max-w-2xl">
//             Hand Held Media Group was founded on a simple conviction — that
//             African stories deserve world-class infrastructure, professional
//             tools, and sustainable business models to reach the audiences they
//             were made for.
//           </p>
//         </div>

//         {/* Bottom meta row */}
//         <div className="mt-16 flex flex-wrap items-center gap-x-10 gap-y-4 border-t border-white/10 pt-8">
//           {[
//             { label: "Founded", value: "2026" },
//             { label: "Headquarters", value: "Lagos, Nigeria" },
//             { label: "Secondary Office", value: "Abuja, Nigeria" },
//             { label: "Subsidiaries", value: "4 Companies" },
//           ].map((item) => (
//             <div key={item.label} className="flex flex-col gap-1">
//               <span className="text-white/25 text-[10px] tracking-[0.2em] uppercase">
//                 {item.label}
//               </span>
//               <span className="text-white text-sm font-semibold">
//                 {item.value}
//               </span>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

export default function AboutHeader() {
  return (
    <section className="relative bg-[#0D0D0D] pt-32 pb-20 px-6 overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Film grain */}
        <div
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='grain'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23grain)'/%3E%3C/svg%3E")`,
            backgroundSize: "200px 200px",
          }}
        />
        {/* Yellow glow */}
        <div className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-[#F5C400] opacity-[0.05] blur-[100px]" />
        {/* Bottom fade into page */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#1A1A1A]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Breadcrumb */}
        <div className="inline-flex items-center gap-2 mb-12">
          <span className="text-white/25 text-xs tracking-widest uppercase">
            HHMG
          </span>
          <span className="text-white/15 text-xs">/</span>
          <span className="text-[#F5C400] text-xs tracking-widest uppercase font-semibold">
            About
          </span>
        </div>

        {/* Eyebrow */}
        <div className="inline-flex items-center gap-3 mb-7">
          <div className="w-8 h-[1px] bg-[#F5C400]" />
          <span className="text-[#F5C400] text-[10px] font-bold tracking-[0.35em] uppercase">
            About Us
          </span>
        </div>

        {/* Headline — exact from brief */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-white leading-[1.0] tracking-tight mb-6 max-w-3xl">
          We Are Hand Held
          <br />
          <span
            className="text-[#F5C400]"
            style={{ textShadow: "0 0 60px rgba(245,196,0,0.2)" }}
          >
            Media Group.
          </span>
        </h1>

        {/* Sub-headline — exact from brief */}
        <p className="text-white/55 text-lg sm:text-xl leading-relaxed max-w-2xl mb-16">
          A holding company for African media — building from the ground up.
        </p>

        {/* Meta row */}
        <div className="flex flex-wrap items-center gap-x-10 gap-y-4 border-t border-white/10 pt-8">
          {[
            { label: "Founded", value: "2026" },
            { label: "Headquarters", value: "Lagos, Nigeria" },
            { label: "Secondary Office", value: "Abuja, Nigeria" },
            { label: "Subsidiaries", value: "4 Companies" },
          ].map((item) => (
            <div key={item.label} className="flex flex-col gap-1">
              <span className="text-white/25 text-[10px] tracking-[0.2em] uppercase">
                {item.label}
              </span>
              <span className="text-white text-sm font-semibold">
                {item.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
