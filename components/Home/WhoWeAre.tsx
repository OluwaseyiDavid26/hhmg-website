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

            <h2 className="font-display text-5xl sm:text-6xl font-black text-white leading-[1.05] tracking-tight">
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
