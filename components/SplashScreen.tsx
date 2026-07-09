"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function SplashScreen() {
  const [phase, setPhase] = useState<"enter" | "hold" | "exit" | "done">(
    "enter",
  );

  useEffect(() => {
    /* Timeline:
       0ms    → logo fades + scales in (CSS handles this via "enter" class)
       1200ms → hold
       2200ms → start exit (fade out + slide up)
       2900ms → unmount completely
    */
    const t1 = setTimeout(() => setPhase("hold"), 1200);
    const t2 = setTimeout(() => setPhase("exit"), 2200);
    const t3 = setTimeout(() => setPhase("done"), 2900);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  if (phase === "done") return null;

  return (
    <>
      <style>{`
        @keyframes logoIn {
          from { opacity: 0; transform: scale(0.88) translateY(12px); filter: blur(8px); }
          to   { opacity: 1; transform: scale(1)    translateY(0);    filter: blur(0); }
        }
        @keyframes lineGrow {
          from { width: 0; }
          to   { width: 100%; }
        }
        @keyframes dotPulse {
          0%,100% { opacity: 0.5; transform: scale(1); }
          50%     { opacity: 1;   transform: scale(1.4); }
        }
        @keyframes splashExit {
          from { opacity: 1; transform: translateY(0); }
          to   { opacity: 0; transform: translateY(-18px); }
        }
        .splash-logo  { animation: logoIn 0.9s cubic-bezier(0.22,1,0.36,1) 0.15s both; }
        .splash-line  { animation: lineGrow 1.2s cubic-bezier(0.4,0,0.2,1) 0.6s both; }
        .splash-dot   { animation: dotPulse 1.1s ease-in-out 0.6s infinite; }
        .splash-exit  { animation: splashExit 0.65s cubic-bezier(0.4,0,0.2,1) both; }
      `}</style>

      <div
        className={`fixed inset-0 flex flex-col items-center justify-center ${phase === "exit" ? "splash-exit" : ""}`}
        style={{
          background: "#0D0D0D",
          zIndex: 9999,
          pointerEvents: phase === "exit" ? "none" : "all",
        }}
      >
        {/* Film grain */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            opacity: 0.12,
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='grain'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23grain)'/%3E%3C/svg%3E")`,
            backgroundSize: "200px 200px",
          }}
        />

        {/* Gold glow orb behind logo */}
        <div
          className="absolute pointer-events-none"
          style={{
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(245,196,0,0.07) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />

        {/* Logo */}
        <div className="splash-logo relative flex flex-col items-center gap-6">
          <Image
            src="/icon-name-white.png"
            alt="Hand Held Media Group"
            width={220}
            height={56}
            priority
            className="object-contain"
            style={{ height: "auto", maxWidth: "220px" }}
          />

          {/* Pulsing dot below logo */}
          <span
            className="splash-dot inline-block w-1.5 h-1.5 rounded-full"
            style={{ background: "#F5C400" }}
          />
        </div>

        {/* Gold progress line — bottom of screen */}
        <div
          className="absolute bottom-0 left-0 h-[2px] splash-line"
          style={{
            background:
              "linear-gradient(90deg, #F5C400 0%, #fff8dc 40%, #F5C400 75%, rgba(245,196,0,0.2) 100%)",
          }}
        />

        {/* Corner marks */}
        <div className="absolute top-8 left-8 pointer-events-none opacity-30">
          <div className="w-5 h-px bg-[#F5C400]" />
          <div className="w-px h-5 bg-[#F5C400]" />
        </div>
        <div className="absolute top-8 right-8 pointer-events-none flex flex-col items-end opacity-30">
          <div className="w-5 h-px bg-[#F5C400]" />
          <div className="w-px h-5 bg-[#F5C400] ml-auto" />
        </div>
        <div className="absolute bottom-8 left-8 pointer-events-none flex flex-col justify-end opacity-30">
          <div className="w-px h-5 bg-[#F5C400]" />
          <div className="w-5 h-px bg-[#F5C400]" />
        </div>
        <div className="absolute bottom-8 right-8 pointer-events-none flex flex-col items-end justify-end opacity-30">
          <div className="w-px h-5 bg-[#F5C400] ml-auto" />
          <div className="w-5 h-px bg-[#F5C400]" />
        </div>
      </div>
    </>
  );
}
