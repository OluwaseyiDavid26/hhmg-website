import Link from "next/link";

const SEGMENTS = [
  {
    id: "brands",
    index: "01",
    tag: "HH Media Studios",
    title: "For Brands & Organisations",
    copy: "Need video, photography, or branded content? HH Media Studios is your production partner.",
    cta: "Start a Project",
    href: "/contact?type=production",
  },
  {
    id: "filmmakers",
    index: "02",
    tag: "HH Media Rentals",
    title: "For Filmmakers & Productions",
    copy: "Looking for professional equipment without the cost of ownership? HH Media Rentals has your kit.",
    cta: "Browse Equipment",
    href: "/companies/rentals",
  },
  {
    id: "creators",
    index: "03",
    tag: "HH Creators Platform",
    title: "For Content Creators",
    copy: "Ready to level up? Join the HH Creators Platform for training, community, and opportunities.",
    cta: "Join the Platform",
    href: "/companies/creators-platform",
  },
  {
    id: "investors",
    index: "04",
    tag: "Hand Held Media Group",
    title: "For Investors & Partners",
    copy: "Interested in the HHMG opportunity? We are open to strategic partnerships and investor conversations.",
    cta: "Request a Pitch Deck",
    href: "/contact?type=investment",
  },
];

export default function AudienceSegments() {
  return (
    <section className="bg-[#1A1A1A] py-20 sm:py-24 px-6">
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
        {SEGMENTS.map((segment) => (
          <div
            key={segment.id}
            id={segment.id}
            className="group relative rounded-2xl border border-white/[0.08] bg-white/[0.02] p-8 sm:p-9 transition-colors duration-200 hover:border-[#F5C400]/30 hover:bg-white/[0.03] scroll-mt-28"
          >
            <div className="flex items-start justify-between mb-6">
              <span className="text-[#F5C400] text-[11px] font-semibold tracking-[0.2em] uppercase">
                {segment.tag}
              </span>
              <span className="text-white/20 text-sm font-semibold tabular-nums">
                {segment.index}
              </span>
            </div>

            <h3 className="text-white text-xl sm:text-2xl font-bold tracking-tight mb-3">
              {segment.title}
            </h3>

            <p className="text-white/60 text-sm sm:text-base leading-relaxed mb-8">
              {segment.copy}
            </p>

            <Link
              href={segment.href}
              className="inline-flex items-center gap-2 text-[#F5C400] text-sm font-semibold transition-colors duration-200 hover:text-white"
            >
              {segment.cta}
              <svg
                className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
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
        ))}
      </div>
    </section>
  );
}
