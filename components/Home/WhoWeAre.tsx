import Link from "next/link";

export default function WhoWeAre() {
  return (
    <section className="bg-[#1A1A1A] py-24 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Section label */}
        <div className="inline-flex items-center gap-3 mb-10">
          <div className="w-8 h-[2px] bg-[#F5C400]" />
          <span className="text-[#F5C400] text-xs font-semibold tracking-[0.25em] uppercase">
            Who We Are
          </span>
        </div>

        {/* Two column layout — text left, accent right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — main copy */}
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-[1.15] tracking-tight mb-8">
              One Group. <span className="text-[#F5C400]">Four Companies.</span>{" "}
              One Mission.
            </h2>

            <p className="text-white/60 text-base sm:text-lg leading-relaxed mb-6">
              Hand Held Media Group brings together four focused subsidiaries
              under one roof: production, equipment, creator development, and
              original IP.
            </p>

            <p className="text-white/60 text-base sm:text-lg leading-relaxed mb-10">
              We exist to close the gap between the stories Africa wants to tell
              and the resources needed to tell them well.
            </p>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-[#F5C400] text-sm font-semibold hover:gap-4 transition-all duration-200"
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

          {/* Right — conviction statement */}
          <div className="relative">
            {/* Vertical accent line */}
            <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#F5C400] via-[#F5C400]/40 to-transparent" />

            <div className="pl-8">
              <p className="text-white/90 text-xl sm:text-2xl font-light leading-relaxed italic">
                "The stories Africa tells the world must be told on Africa's own
                terms — with professional-grade tools, sustainable business
                models, and platforms that elevate creators."
              </p>

              <div className="mt-8 flex items-center gap-3">
                <div className="w-8 h-8 bg-[#F5C400] rounded-sm flex items-center justify-center flex-shrink-0">
                  <span className="text-[#1A1A1A] font-bold text-xs">HH</span>
                </div>
                <div>
                  <p className="text-white text-sm font-semibold">
                    Hand Held Media Group
                  </p>
                  <p className="text-white/40 text-xs">Founding Conviction</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom divider */}
        <div className="mt-24 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>
    </section>
  );
}
