"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { Animate, fadeUp, fadeScale } from "@/components/animate";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Section2() {
  const [overlayOpen, setOverlayOpen] = useState(false);

  const closeOverlay = useCallback(() => {
    setOverlayOpen(false);
    document.body.style.overflow = "";
  }, []);

  const openOverlay = useCallback(() => {
    setOverlayOpen(true);
    document.body.style.overflow = "hidden";
  }, []);

  useEffect(() => {
    if (!overlayOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeOverlay();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [overlayOpen, closeOverlay]);

  useEffect(() => {
    return () => { document.body.style.overflow = ""; };
  }, []);

  return (
    <>
      <section className="w-full bg-[#00723c] py-12 md:py-20 lg:py-28 px-5 md:px-10 lg:px-20">
        <div className="max-w-[1440px] mx-auto flex flex-col items-center gap-8 md:gap-14">
          <Animate variants={fadeUp}>
            <h2 className="text-white font-semibold text-[26px] sm:text-[34px] md:text-[44px] lg:text-[54px] leading-tight tracking-[-0.03em] text-center max-w-[900px]">
              Discover the sweet benefits of{" "}
              <em className="font-normal italic">Sucress</em>{" "}
              with Andrew Lessman
            </h2>
          </Animate>

          <Animate variants={fadeScale} className="w-full max-w-[1280px]">
            <button
              onClick={openOverlay}
              className="group relative w-full block rounded-2xl overflow-hidden cursor-pointer focus:outline-none focus-visible:ring-4 focus-visible:ring-[#97e674]/60 shadow-[0_24px_64px_rgba(0,0,0,0.28)] hover:shadow-[0_28px_72px_rgba(0,0,0,0.36)] transition-shadow duration-500"
              aria-label="Play Andrew Lessman video about Sucress"
            >
              {/* Thumbnail */}
              <div className="relative w-full aspect-[4/3] sm:aspect-[16/9] md:aspect-[1360/755]">
                <Image
                  src="/images/video-thumbnail.png"
                  alt="Andrew Lessman talks about Sucress — click to play"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1280px"
                  className="object-cover transition-all duration-700 group-hover:scale-[1.015] group-hover:brightness-105"
                  priority
                />
                {/* Gradient vignette — dark green bottom bleeds into section */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{ background: "linear-gradient(to top, rgba(0,50,20,0.78) 0%, rgba(0,30,12,0.28) 40%, rgba(0,0,0,0.06) 65%, transparent 100%)" }}
                  aria-hidden="true"
                />
              </div>

              {/* Play button — centered */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-[88px] h-[88px] md:w-[100px] md:h-[100px] group-hover:scale-110 transition-transform duration-300">
                  {/* Hover ring */}
                  <div className="absolute inset-0 rounded-full ring-0 group-hover:ring-4 ring-white/25 transition-all duration-300 scale-[1.18]" />
                  <svg viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-[0_6px_32px_rgba(0,0,0,0.5)]" aria-hidden="true">
                    <circle cx="48" cy="48" r="44" stroke="white" strokeWidth="4.5" fill="white" fillOpacity="0.18"/>
                    <path d="M38 30L70 48L38 66V30Z" fill="white"/>
                  </svg>
                </div>
              </div>

              {/* Bottom-left: title + attribution */}
              <div className="absolute bottom-4 left-4 sm:bottom-7 sm:left-7 md:bottom-9 md:left-9 flex items-stretch gap-3 sm:max-w-[58%]">
                {/* Left accent bar */}
                <div className="w-[2px] rounded-full bg-white/35 shrink-0 self-stretch" />
                <div className="flex flex-col gap-2">
                  <p className="text-white text-[15px] sm:text-[17px] md:text-[20px] font-semibold leading-tight tracking-[-0.015em] drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]">
                    Why Sucress is Different
                  </p>
                  <p className="text-white/65 text-[11px] sm:text-[12px] md:text-[13px] font-medium tracking-[0.03em] drop-shadow-[0_1px_4px_rgba(0,0,0,0.6)]">
                    Andrew Lessman &nbsp;·&nbsp; Founder, ProCaps Laboratories
                  </p>
                </div>
              </div>

              {/* Bottom-right: micro-stats — hidden on mobile to prevent overlap */}
              <div className="absolute bottom-4 right-4 sm:bottom-7 sm:right-7 md:bottom-9 md:right-9 hidden sm:block">
                <div className="flex flex-col gap-2 bg-[#00723c]/60 backdrop-blur-sm rounded-2xl px-4 py-3">
                  {["2 Ingredients", "Zero Sugar", "Non-GMO"].map((stat) => (
                    <div key={stat} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#97e674] shrink-0" />
                      <span className="text-white text-[11px] sm:text-[12px] font-medium tracking-wide leading-none">{stat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </button>

            {/* ── Divider ── */}
            <div className="w-full h-px bg-white/10 mt-14 md:mt-20" />

            {/* ── ProCaps brand statement ── */}
            <motion.div
              className="w-full mt-10 md:mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -40px 0px" }}
              transition={{ duration: 0.75, ease }}
            >
              {/* Left — display headline */}
              <h3
                className="text-white text-[clamp(30px,4.5vw,56px)] leading-[0.95] tracking-[-0.025em]"
                style={{ fontFamily: "var(--font-stix)" }}
              >
                Education first.
                <br />
                <em className="font-normal italic">The rest follows.</em>
              </h3>

              {/* Right — body + ProCaps logo */}
              <div className="flex flex-col gap-7">
                <p className="text-white/60 text-[15px] md:text-[16px] lg:text-[17px] leading-relaxed">
                  Andrew Lessman has always believed the strongest bridge between
                  science and the consumer is education. Explain the ingredients
                  clearly, answer questions honestly, and let people decide for
                  themselves.
                </p>
                <div className="relative h-[82px] w-[150px]">
                  <Image
                    src="/images/procaps-logo-full.svg"
                    alt="Andrew Lessman — ProCaps Laboratories"
                    fill
                    unoptimized
                    sizes="150px"
                    className="object-contain object-left"
                  />
                </div>
              </div>
            </motion.div>
          </Animate>
        </div>
      </section>

      {overlayOpen && (
        <div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center"
          style={{ padding: "env(safe-area-inset-top, 16px) 16px env(safe-area-inset-bottom, 16px)" }}
          role="dialog"
          aria-modal="true"
          aria-label="Video player"
        >
          <motion.div
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.25 }}
            onClick={closeOverlay}
            aria-hidden="true"
          />

          <motion.div
            className="relative w-full max-w-[1280px] flex flex-col gap-3 sm:gap-4"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, ease }}
          >
            {/* Close button — inside the flex column so it never gets clipped */}
            <div className="flex justify-end">
              <button
                onClick={closeOverlay}
                className="flex items-center gap-2 text-white/70 hover:text-white transition-colors duration-150 text-sm font-medium tracking-wide py-1 px-2 -mr-2 rounded-lg active:bg-white/10"
                aria-label="Close video"
              >
                <span>Close</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M2 2L14 14M14 2L2 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </button>
            </div>

            <div className="relative w-full aspect-video rounded-xl sm:rounded-2xl overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.6)]">
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&rel=0&modestbranding=1"
                title="Andrew Lessman talks about Sucress"
                allow="autoplay; encrypted-media; fullscreen"
                allowFullScreen
                className="absolute inset-0 w-full h-full border-0"
              />
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
}
