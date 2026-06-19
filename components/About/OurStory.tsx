// export default function OurStory() {
//   return (
//     <section className="bg-[#1A1A1A] py-28 border-b border-white/10">
//       <div className="max-w-6xl mx-auto px-6">
//         {/* Section label */}
//         <p className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#F5C400] mb-14">
//           Our Story
//         </p>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-28 items-start">
//           {/* LEFT — large cinematic statement */}
//           <div className="lg:sticky lg:top-28">
//             <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-extrabold leading-[1.15] tracking-tighter text-white">
//               Africa is full of stories.{" "}
//               <span className="text-white/30">
//                 We build what it takes to tell them.
//               </span>
//             </h2>

//             {/* Yellow accent rule */}
//             <div className="mt-10 w-12 h-[3px] bg-[#F5C400]" />
//           </div>

//           {/* RIGHT — exact copy from brief */}
//           <div className="space-y-6 text-white/60 text-base sm:text-[1.05rem] leading-[1.85]">
//             <p>
//               Hand Held Media Group was founded on a simple observation: Africa
//               is full of stories — but the infrastructure to tell those stories
//               professionally, at scale, and on African terms has always been
//               fragmented.
//             </p>
//             <p>
//               We set out to change that. Not by doing one thing well, but by
//               building a group of companies that together make great African
//               content not just possible —{" "}
//               <span className="text-white font-semibold">but inevitable.</span>
//             </p>
//             <p>
//               From studios to equipment to creator platforms to original IP,
//               Hand Held Media Group is the infrastructure behind the stories.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

export default function OurStory() {
  return (
    <section className="bg-[#1A1A1A] py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left — label */}
          <div className="lg:col-span-4">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-8 h-[1px] bg-[#F5C400]" />
              <span className="text-[#F5C400] text-[10px] font-bold tracking-[0.35em] uppercase">
                Our Story
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight tracking-tight">
              Where It All
              <br />
              Began.
            </h2>

            <div className="hidden lg:block w-[1px] h-24 bg-gradient-to-b from-[#F5C400]/40 to-transparent mt-10" />
          </div>

          {/* Right — exact brief copy */}
          <div className="lg:col-span-8 flex flex-col gap-8">
            <p className="text-white/70 text-base sm:text-lg leading-relaxed">
              Hand Held Media Group was founded on a simple observation:
            </p>

            <p className="text-white text-xl sm:text-2xl font-semibold leading-relaxed">
              Africa is full of stories — but the infrastructure to tell those
              stories professionally, at scale, and on African terms has always
              been fragmented.
            </p>

            <p className="text-white/70 text-base sm:text-lg leading-relaxed">
              We set out to change that. Not by doing one thing well, but by
              building a group of companies that together make great African
              content not just possible —{" "}
              <span className="text-white font-semibold">but inevitable.</span>
            </p>

            <p className="text-white/70 text-base sm:text-lg leading-relaxed">
              From studios to equipment to creator platforms to original IP,
              Hand Held Media Group is the infrastructure behind the stories.
            </p>

            {/* Closing accent line */}
            <div className="flex items-center gap-4 pt-4">
              <div className="w-10 h-[2px] bg-[#F5C400]" />
              <span className="text-white/20 text-xs tracking-widest uppercase">
                Hand Held Media Group · 2026
              </span>
            </div>
          </div>
        </div>

        {/* Section divider */}
        <div className="mt-24 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>
    </section>
  );
}
