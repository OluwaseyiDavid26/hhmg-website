import Link from "next/link";

export default function ProductionCo() {
  return (
    <section id="production" className="bg-[#0D0D0D] py-24 px-6 scroll-mt-20">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left — company identity */}
          <div className="lg:col-span-5">
            {/* Company number + label */}
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="text-white/15 text-xs font-mono">04</span>
              <div className="w-6 h-[1px] bg-white/15" />
              <span className="text-[#F5C400] text-[10px] font-bold tracking-[0.35em] uppercase">
                HH Media & Production Co.
              </span>
            </div>

            {/* Headline */}
            <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight tracking-tight mb-6">
              Original stories.{" "}
              <span
                className="text-[#F5C400]"
                style={{ textShadow: "0 0 40px rgba(245,196,0,0.2)" }}
              >
                Told right.
              </span>
            </h2>

            {/* Body copy — exact from brief */}
            <p className="text-white/55 text-base leading-relaxed mb-4">
              Hand Held Media & Production Company is the Group's content and IP
              arm. We develop, produce, and distribute original television,
              digital, and branded content that reflects the richness and
              complexity of African life and experience.
            </p>

            <p className="text-white/55 text-base leading-relaxed mb-10">
              Our flagship production,{" "}
              <span className="text-white font-semibold italic">Restored</span>,
              is currently in production — and it is just the beginning.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/restored"
                className="inline-flex items-center justify-center gap-2 bg-[#F5C400] text-[#1A1A1A] font-black text-sm px-6 py-3.5 rounded-sm hover:bg-[#e6b800] transition-all duration-200 hover:scale-[1.02] uppercase tracking-wide"
              >
                Learn More About Restored
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
                className="inline-flex items-center justify-center gap-2 border border-white/15 text-white/60 text-sm font-medium px-6 py-3.5 rounded-sm hover:border-[#F5C400]/40 hover:text-[#F5C400] transition-all duration-200 uppercase tracking-wide"
              >
                Partner With Us
              </Link>
            </div>
          </div>

          {/* Right — Restored feature card */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <p className="text-white/25 text-[10px] font-bold tracking-[0.3em] uppercase mb-6">
              Current Production
            </p>

            {/* Restored card */}
            <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-white/[0.03]">
              {/* Card background glow */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -top-10 -left-10 w-60 h-60 rounded-full bg-[#F5C400] opacity-[0.05] blur-[60px]" />
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#F5C400]/30 to-transparent" />
              </div>

              <div className="relative z-10 p-8">
                {/* Status badge */}
                <div className="inline-flex items-center gap-2 mb-6">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F5C400] opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#F5C400]" />
                  </span>
                  <span className="text-[#F5C400] text-[10px] font-bold tracking-[0.25em] uppercase">
                    Now in Production
                  </span>
                </div>

                {/* Show title */}
                <h3 className="text-5xl sm:text-6xl font-black text-white tracking-tight leading-none mb-2">
                  Restored
                </h3>
                <p className="text-white/35 text-xs font-medium tracking-widest uppercase mb-6">
                  A TV Testimony Series
                </p>

                {/* Divider */}
                <div className="w-10 h-[1px] bg-[#F5C400]/50 mb-6" />

                {/* Show description */}
                <p className="text-white/55 text-sm leading-relaxed mb-8">
                  A television testimony series capturing stories of radical
                  life transformation. Real people. Real change. Cinematic
                  storytelling.
                </p>

                {/* Meta row */}
                <div className="flex flex-wrap gap-x-8 gap-y-3 pt-6 border-t border-white/[0.08]">
                  {[
                    { label: "Format", value: "Television Series" },
                    { label: "Status", value: "In Production" },
                    { label: "Distribution", value: "Coming Soon" },
                  ].map((item) => (
                    <div key={item.label}>
                      <p className="text-white/25 text-[10px] tracking-widest uppercase mb-1">
                        {item.label}
                      </p>
                      <p className="text-white text-sm font-semibold">
                        {item.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom accent */}
              <div className="h-[2px] bg-gradient-to-r from-[#F5C400]/50 via-[#F5C400]/20 to-transparent" />
            </div>

            {/* Below card note */}
            <p className="text-white/25 text-xs mt-4 leading-relaxed">
              Distribution details to follow. Visit the{" "}
              <Link
                href="/restored"
                className="text-[#F5C400]/60 hover:text-[#F5C400] transition-colors underline underline-offset-2"
              >
                Restored page
              </Link>{" "}
              for full production details and how to get involved.
            </p>
          </div>
        </div>

        {/* Bottom divider */}
        <div className="mt-24 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>
    </section>
  );
}
