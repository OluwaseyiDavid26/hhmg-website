const stats = [
  {
    value: "4",
    label: "Subsidiaries",
    description: "Covering the full media ecosystem",
  },
  {
    value: "2",
    label: "Locations",
    description: "Lagos & Abuja",
  },
  {
    value: "2026",
    label: "Year Founded",
    description: "Built from the ground up",
  },
  {
    value: "1+",
    label: "Productions",
    description: "And growing",
  },
];

export default function StatsBar() {
  return (
    <section className="bg-[#111111] border-y border-white/10 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex items-center gap-3">
            <div className="w-8 h-[2px] bg-[#F5C400]" />
            <span className="text-[#F5C400] text-xs font-semibold tracking-[0.25em] uppercase">
              By the Numbers
            </span>
            <div className="w-8 h-[2px] bg-[#F5C400]" />
          </div>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 divide-x divide-white/10">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center px-8 py-6 group"
            >
              {/* Value */}
              <span className="text-5xl sm:text-6xl md:text-7xl font-black text-white tracking-tight leading-none mb-3 group-hover:text-[#F5C400] transition-colors duration-300">
                {stat.value}
              </span>

              {/* Label */}
              <span className="text-white text-sm font-semibold uppercase tracking-widest mb-2">
                {stat.label}
              </span>

              {/* Divider */}
              <div className="w-6 h-[1px] bg-[#F5C400]/40 mb-3" />

              {/* Description */}
              <span className="text-white/40 text-xs leading-relaxed">
                {stat.description}
              </span>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p className="text-center text-white/20 text-xs mt-16 tracking-wide">
          Numbers updated as the Group grows — last updated June 2026
        </p>
      </div>
    </section>
  );
}
