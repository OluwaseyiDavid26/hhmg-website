"use client";

import {
  Camera,
  Mic2,
  Clapperboard,
  Users,
  ParkingSquare,
  Wifi,
  ArrowRight,
} from "lucide-react";

/**
 * HH Studio Space — standalone section for /companies
 *
 * Rebuilt to match the existing 01 (Studios) section layout exactly:
 * two-column header (headline left / description + circle-arrow CTA right),
 * then a hairline-bordered 3-col grid, icon-first cards with a short
 * yellow underline rule before the title.
 *
 * PLACEHOLDER CONTENT: room names, capacities, and specs below are
 * placeholders -- swap in the real studio details before this ships.
 */

const studioSpaces = [
  {
    id: "01",
    title: "Cyclorama Studio",
    desc: "Seamless white cyc wall for product, fashion, and green-screen work.",
    Icon: Camera,
  },
  {
    id: "02",
    title: "Podcast & VO Booth",
    desc: "Acoustically treated room for podcasts, voiceover, and interviews.",
    Icon: Mic2,
  },
  {
    id: "03",
    title: "Green Screen Room",
    desc: "Full chroma-key setup for compositing and virtual backgrounds.",
    Icon: Clapperboard,
  },
  {
    id: "04",
    title: "Up to 12 Crew",
    desc: "Room to bring your full crew -- talent, camera, lighting, and sound.",
    Icon: Users,
  },
  {
    id: "05",
    title: "On-Site Parking",
    desc: "Loading access and parking for vans and equipment trucks.",
    Icon: ParkingSquare,
  },
  {
    id: "06",
    title: "Fibre & Backup Power",
    desc: "Reliable internet and power so shoots don't stop for outages.",
    Icon: Wifi,
  },
];

const COLS = 3;

export default function StudioSpace() {
  return (
    <section className="bg-[#1A1A1A] px-6 sm:px-10 lg:px-16 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl">
        {/* Header: two-column, matches 01 Studios layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 mb-20">
          <div>
            <p className="text-xs font-bold tracking-[0.2em] text-white/40 mb-6">
              05 / <span className="text-[#F5C400]">HH STUDIO SPACE</span>
            </p>
            <h2 className="font-display text-4xl sm:text-5xl font-black text-white leading-[1.1] tracking-tight">
              Need a space
              <br />
              to shoot?{" "}
              <span
                className="text-[#F5C400]"
                style={{ textShadow: "0 0 80px rgba(245,196,0,0.15)" }}
              >
                Come use ours.
              </span>
            </h2>
          </div>

          <div className="flex flex-col justify-end">
            <p className="text-white/60 text-lg leading-relaxed mb-8">
              Beyond gear, Hand Held Media Studios opens its own production
              space to independent filmmakers, brands, and creators -- book by
              the hour or the day, fully equipped and ready to shoot.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-4 group w-fit"
            >
              <span className="w-12 h-12 rounded-full border border-[#F5C400] flex items-center justify-center text-[#F5C400] group-hover:bg-[#F5C400] group-hover:text-black transition-colors">
                <ArrowRight className="w-5 h-5" strokeWidth={2} />
              </span>
              <span className="font-bold text-white text-sm">
                Book the Studio
              </span>
            </a>
          </div>
        </div>

        {/* Card grid: hairline dividers, no rounded corners -- matches 01 Studios grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-white/10">
          {studioSpaces.map(({ id, title, desc, Icon }, i) => {
            const isRightEdge = (i + 1) % COLS === 0;
            const isBottomRow = i >= studioSpaces.length - COLS;
            return (
              <div
                key={id}
                className={[
                  "p-10 border-white/10",
                  isRightEdge ? "" : "border-r",
                  isBottomRow ? "" : "border-b",
                ].join(" ")}
              >
                <p className="text-xs font-medium text-white/30 mb-6">{id}</p>
                <Icon
                  className="w-8 h-8 text-[#F5C400] mb-6"
                  strokeWidth={1.5}
                />
                <span className="block w-8 h-px bg-[#F5C400] mb-4" />
                <h3 className="font-display text-xl font-bold text-white mb-2">
                  {title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">{desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
