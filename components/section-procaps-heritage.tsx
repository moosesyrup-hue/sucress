"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;
const viewport = { once: true, margin: "0px 0px -60px 0px" };

export default function SectionProCapsHeritage() {
  return (
    <section className="w-full bg-[#00723c] px-5 md:px-10 lg:px-20 py-16 md:py-24 lg:py-32 relative overflow-hidden">

      {/* Ghost "1979" — decorative typographic depth */}
      <div
        className="absolute left-[2%] md:left-[4%] top-1/2 -translate-y-1/2 select-none pointer-events-none leading-none tracking-tighter text-white/[0.055]"
        style={{
          fontFamily: "var(--font-stix)",
          fontSize: "clamp(160px, 28vw, 420px)",
          lineHeight: 1,
        }}
        aria-hidden="true"
      >
        1979
      </div>

      <div className="relative max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 lg:gap-24 items-start">

          {/* ── Left: headline ── */}
          <motion.h2
            className="text-white leading-[0.92] tracking-[-0.03em]"
            style={{
              fontFamily: "var(--font-stix)",
              fontSize: "clamp(42px, 6vw, 80px)",
            }}
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewport}
            transition={{ duration: 0.8, ease }}
          >
            Uncompromising.
            <br />
            <em className="font-normal italic">Since 1979.</em>
          </motion.h2>

          {/* ── Right: body + badge ── */}
          <motion.div
            className="flex flex-col gap-8 md:pt-2"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewport}
            transition={{ duration: 0.8, ease, delay: 0.1 }}
          >
            <p className="text-white/65 text-[16px] md:text-[17px] lg:text-[18px] leading-relaxed">
              ProCaps Laboratories was founded by Andrew Lessman with a simple idea:
              follow the science, respect Mother Nature, and eliminate shortcuts.
            </p>

            {/* ProCaps badge */}
            <div className="flex items-center gap-4">
              <div className="w-px h-10 bg-white/20 shrink-0" />
              <div className="relative h-[22px] w-[80px] opacity-65 shrink-0">
                <Image
                  src="/images/procaps-logo.svg"
                  alt="ProCaps Laboratories"
                  fill
                  unoptimized
                  sizes="80px"
                  className="object-contain brightness-0 invert"
                />
              </div>
              <p className="text-white/40 text-[12px] leading-snug">
                Henderson, NV &bull; 100% Solar-Powered
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
