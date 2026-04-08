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
      <section className="w-full bg-[#00723c] py-20 md:py-28 px-5 md:px-10 lg:px-20">
        <div className="max-w-[1440px] mx-auto flex flex-col items-center gap-14 md:gap-20">
          <Animate variants={fadeUp}>
            <h2 className="text-white font-semibold text-[26px] sm:text-[34px] md:text-[44px] lg:text-[54px] leading-tight tracking-[-0.03em] text-center max-w-[900px]">
              Discover the sweet benefits of{" "}
              <em className="font-normal italic">Sucress</em>{" "}
              with Andrew Lessman!
            </h2>
          </Animate>

          <Animate variants={fadeScale} className="w-full max-w-[1280px]">
            <button
              onClick={openOverlay}
              className="group relative w-full block rounded-2xl overflow-hidden cursor-pointer focus:outline-none focus-visible:ring-4 focus-visible:ring-[#97e674]/60"
              aria-label="Play Andrew Lessman video about Sucress"
            >
              <div className="relative w-full aspect-[1360/755]">
                <Image
                  src="/images/video-thumbnail.png"
                  alt="Andrew Lessman talks about Sucress — click to play"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1280px"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.015]"
                  priority
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/25 transition-colors duration-300" />
              </div>

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-[72px] h-[72px] md:w-[88px] md:h-[88px] group-hover:scale-110 transition-transform duration-300">
                  <svg viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-[0_4px_24px_rgba(0,0,0,0.4)]" aria-hidden="true">
                    <circle cx="48" cy="48" r="44" stroke="white" strokeWidth="5" fill="white" fillOpacity="0.12"/>
                    <path d="M38 30L70 48L38 66V30Z" fill="white"/>
                  </svg>
                </div>
              </div>

              <div className="absolute bottom-5 left-5 sm:bottom-7 sm:left-7 md:bottom-9 md:left-9 flex flex-col items-start gap-2 md:gap-2.5">
                <Image
                  src="/images/signature.svg"
                  alt="Andrew Lessman signature"
                  width={380}
                  height={71}
                  unoptimized
                  className="block w-[180px] sm:w-[220px] md:w-[280px] lg:w-[320px] h-auto"
                />
                <p className="text-white text-[12px] sm:text-[13px] md:text-[14px] tracking-[0.05em] drop-shadow-[0_1px_3px_rgba(0,0,0,0.5)]">
                  <strong className="font-semibold">— Andrew Lessman,</strong>{" "}
                  <span className="font-normal opacity-80">ProCaps Founder</span>
                </p>
                <div className="flex items-center gap-3 drop-shadow-[0_1px_3px_rgba(0,0,0,0.5)]">
                  <div className="relative h-[20px] w-[72px] opacity-70 shrink-0">
                    <Image
                      src="/images/procaps-logo.svg"
                      alt="ProCaps Laboratories"
                      fill
                      unoptimized
                      sizes="72px"
                      className="object-contain brightness-0 invert"
                    />
                  </div>
                  <div className="w-px h-3.5 bg-white/30 shrink-0" />
                  <p className="text-white/55 text-[11px] sm:text-[12px] leading-snug">
                    Trusted for over 40 years
                  </p>
                </div>
              </div>
            </button>
          </Animate>
        </div>
      </section>

      {overlayOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8"
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
            className="relative w-full max-w-[1280px]"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, ease }}
          >
            <button
              onClick={closeOverlay}
              className="absolute -top-12 right-0 flex items-center gap-2 text-white/70 hover:text-white transition-colors duration-150 text-sm font-medium tracking-wide"
              aria-label="Close video"
            >
              <span>Close</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M2 2L14 14M14 2L2 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>

            <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.6)]">
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
