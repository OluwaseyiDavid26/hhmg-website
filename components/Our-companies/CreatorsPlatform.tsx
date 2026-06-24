"use client";

import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";
import {
  GraduationCap,
  Network,
  Camera,
  Banknote,
  MessageCircle,
} from "lucide-react";

const benefits = [
  {
    name: "Training Resources & Workshops",
    detail: "Structured learning for every stage of the creative journey.",
    icon: GraduationCap,
  },
  {
    name: "Industry Networking & Collaboration",
    detail: "Connect with fellow creators, industry professionals, and brands.",
    icon: Network,
  },
  {
    name: "Discounted Equipment Rentals",
    detail: "Members get exclusive rates via HH Media Rentals.",
    icon: Camera,
  },
  {
    name: "Monetisation & Brand Partnerships",
    detail: "Pathways to earn — through brand deals, licensing, and more.",
    icon: Banknote,
  },
  {
    name: "Community Forums & Peer Support",
    detail: "A space to share, learn, and grow alongside other creators.",
    icon: MessageCircle,
  },
];

export default function CreatorsPlatform() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const leftVariants: Variants = {
    hidden: { opacity: 0, x: -60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1.1, ease: "easeInOut" },
    },
  };

  const rightVariants: Variants = {
    hidden: { opacity: 0, x: 60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1.1, ease: "easeInOut", delay: 0.2 },
    },
  };

  const lineVariants: Variants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: { duration: 1, delay: 1.4, ease: "easeInOut" },
    },
  };

  // Stagger timing for the reveal sequence
  const baseDelay = 0.5;
  const stepDelay = 0.15;

  return (
    <motion.section
      ref={ref}
      id="creators"
      className="bg-[#1A1A1A] py-24 px-6 scroll-mt-20"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* ── LEFT ── */}
          <motion.div variants={leftVariants} className="lg:col-span-5">
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="text-white/15 text-xs font-mono">03</span>
              <div className="w-6 h-[1px] bg-white/15" />
              <span className="text-[#F5C400] text-[10px] font-bold tracking-[0.35em] uppercase">
                HH Creators Platform
              </span>
            </div>

            <h2 className="font-display text-4xl sm:text-5xl font-black text-white leading-tight tracking-tight mb-6">
              Built for the creator who is{" "}
              <span
                className="text-[#F5C400]"
                style={{ textShadow: "0 0 40px rgba(245,196,0,0.2)" }}
              >
                serious about their craft.
              </span>
            </h2>

            <p className="text-white/55 text-base leading-relaxed mb-4">
              The Hand Held Creators Platform is a membership community for
              African content creators at every stage of their journey. We
              provide tools, training, access to industry networks, and pathways
              to monetise your work.
            </p>

            <p className="text-white/55 text-base leading-relaxed mb-10">
              Whether you are just starting or already building your audience —
              there is a place for you here.
            </p>

            <div className="flex flex-col gap-4">
              <motion.div
                className="inline-flex items-center gap-3 bg-white/[0.04] border border-white/10 rounded-sm px-6 py-4 w-fit"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.7, ease: "easeInOut" }}
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F5C400] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#F5C400]" />
                </span>
                <span className="text-white font-black text-sm tracking-[0.15em] uppercase">
                  Coming Soon
                </span>
              </motion.div>

              <motion.p
                className="text-white/30 text-xs leading-relaxed max-w-xs"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.9 }}
              >
                The platform is currently in development. Stay tuned for the
                official launch.
              </motion.p>
            </div>
          </motion.div>

          {/* ── RIGHT — Benefits list ── */}
          <motion.div variants={rightVariants} className="lg:col-span-7">
            <motion.p
              className="text-white/25 text-[10px] font-bold tracking-[0.3em] uppercase mb-6 pb-4 border-b border-white/10"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Platform Benefits
            </motion.p>

            <div className="flex flex-col">
              {benefits.map((benefit, i) => {
                const delay = baseDelay + i * stepDelay;
                const Icon = benefit.icon;
                return (
                  <motion.div
                    key={benefit.name}
                    className="group flex items-start gap-5 py-5 border-b border-white/[0.06] last:border-b-0 hover:bg-white/[0.02] transition-colors duration-300 rounded-lg px-3 -mx-3"
                    initial={{ opacity: 0, x: 24 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay, ease: "easeOut" }}
                  >
                    {/* Icon */}
                    <motion.div
                      className="w-10 h-10 rounded-lg bg-[#F5C400]/10 text-[#F5C400]/60 flex items-center justify-center flex-shrink-0 group-hover:bg-[#F5C400]/20 group-hover:text-[#F5C400] transition-all duration-300"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={isInView ? { scale: 1, opacity: 1 } : {}}
                      transition={{
                        type: "spring",
                        stiffness: 200,
                        damping: 18,
                        delay: delay + 0.05,
                      }}
                    >
                      <Icon size={20} strokeWidth={1.5} />
                    </motion.div>

                    {/* Text */}
                    <div className="flex-1">
                      <p className="text-white text-sm font-semibold group-hover:text-[#F5C400] transition-colors duration-300">
                        {benefit.name}
                      </p>
                      <p className="text-white/40 text-xs leading-relaxed mt-1">
                        {benefit.detail}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          variants={lineVariants}
          className="mt-24 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent origin-left"
        />
      </div>
    </motion.section>
  );
}
