const companies = [
  { id: "studios", name: "HH Media Studios", href: "#studios" },
  { id: "rentals", name: "HH Media Rentals", href: "#rentals" },
  { id: "creators", name: "HH Creators Platform", href: "#creators" },
  { id: "production", name: "HH Production Co.", href: "#production" },
];

export default function CompaniesHeader() {
  return (
    <section className="relative bg-[#0D0D0D] pt-32 pb-20 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='grain'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23grain)'/%3E%3C/svg%3E")`,
            backgroundSize: "200px 200px",
          }}
        />
        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-[#F5C400] opacity-[0.04] blur-[100px]" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#1A1A1A] to-transparent" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Breadcrumb */}
        <div className="inline-flex items-center gap-2 mb-10">
          <span className="text-white/25 text-xs tracking-widest uppercase">
            HHMG
          </span>
          <span className="text-white/15 text-xs">/</span>
          <span className="text-[#F5C400] text-xs tracking-widest uppercase font-semibold">
            Our Companies
          </span>
        </div>

        {/* Title */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-8 h-[1px] bg-[#F5C400]" />
            <span className="text-[#F5C400] text-[10px] font-bold tracking-[0.35em] uppercase">
              Four Companies
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-white leading-[1.0] tracking-tight mb-6">
            One Ecosystem.{" "}
            <span
              className="text-[#F5C400]"
              style={{ textShadow: "0 0 60px rgba(245,196,0,0.2)" }}
            >
              Built to Last.
            </span>
          </h1>

          <p className="text-white/50 text-lg leading-relaxed">
            Each company within Hand Held Media Group was built to solve a
            specific gap in the African media landscape — and together, they
            form a complete infrastructure for storytelling at scale.
          </p>
        </div>

        {/* Company anchor nav */}
        <div className="flex flex-wrap gap-3">
          {companies.map((company, index) => (
            <a
              key={company.id}
              href={company.href}
              className="group inline-flex items-center gap-3 border border-white/10 rounded-full px-5 py-2.5 hover:border-[#F5C400]/40 hover:bg-[#F5C400]/[0.04] transition-all duration-200"
            >
              <span className="text-white/20 text-[10px] font-mono group-hover:text-[#F5C400]/50 transition-colors">
                0{index + 1}
              </span>
              <span className="text-white/60 text-xs font-medium group-hover:text-white transition-colors">
                {company.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
