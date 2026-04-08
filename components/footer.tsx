"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;
const viewport = { once: true, margin: "0px 0px -40px 0px" };

const NAV_LINKS = [
  { label: "About", href: "#" },
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "Accessibility", href: "#" },
];

export default function Footer() {
  return (
    <footer className="w-full relative overflow-hidden" style={{ background: "linear-gradient(180deg, #00723c 0%, #005a30 100%)" }}>

      {/* Radial spotlight from top center */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 90% 55% at 50% -5%, rgba(151,230,116,0.14) 0%, transparent 65%)" }}
        aria-hidden="true"
      />

      {/* Noise texture overlay for depth */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")", backgroundSize: "200px 200px" }}
        aria-hidden="true"
      />

      <div className="relative max-w-[1440px] mx-auto px-5 md:px-10 lg:px-20 pt-24 md:pt-32 pb-0 flex flex-col items-center">

        {/* ── Headline ── */}
        <motion.h2
          className="text-white text-[clamp(38px,6.5vw,78px)] leading-[0.92] tracking-[-0.03em] text-center max-w-[700px]"
          style={{ fontFamily: "var(--font-stix)" }}
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.8, ease }}
        >
          Pure sweetness.
          <br />
          <em className="italic font-normal">Nothing to hide.</em>
        </motion.h2>

        {/* ── Subtext ── */}
        <motion.p
          className="text-white/50 text-[15px] md:text-[17px] leading-relaxed text-center max-w-[440px] mt-6"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.65, ease, delay: 0.1 }}
        >
          Two ingredients. No hidden sugars, no fillers, no compromises.
          That&apos;s always been the point.
        </motion.p>

        {/* ── ProCaps full logo (contains signature + badge) ── */}
        <motion.div
          className="mt-14 flex flex-col items-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.65, ease, delay: 0.13 }}
        >
          <div className="relative h-[110px] w-[220px] md:h-[130px] md:w-[260px]">
            <Image
              src="/images/procaps-logo-full.svg"
              alt="Andrew Lessman — ProCaps Laboratories"
              fill
              unoptimized
              sizes="260px"
              className="object-contain"
            />
          </div>
        </motion.div>

        {/* ── Solar + address ── */}
        <motion.div
          className="flex flex-col items-center gap-1.5 mt-10 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewport}
          transition={{ duration: 0.6, ease, delay: 0.16 }}
        >
          <p className="text-white font-semibold text-[13px] md:text-[14px] tracking-[0.02em]">
            100% Solar-Powered &bull; Zero Carbon Footprint
          </p>
          <p className="text-white/45 text-[13px] md:text-[14px]">
            430 Parkson Road Henderson, NV 89011 &nbsp;&bull;&nbsp; 800-800-1200
          </p>
        </motion.div>

        {/* ── Social icons ── */}
        <motion.div
          className="flex items-center gap-6 mt-10"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.55, ease, delay: 0.18 }}
        >
          <a
            href="#"
            aria-label="Facebook"
            className="flex items-center justify-center w-11 h-11 rounded-full border border-white/20 text-white/60 hover:text-white hover:border-white/45 transition-all duration-150"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M22 12C22 6.477 17.523 2 12 2S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
            </svg>
          </a>
          <a
            href="#"
            aria-label="Instagram"
            className="flex items-center justify-center w-11 h-11 rounded-full border border-white/20 text-white/60 hover:text-white hover:border-white/45 transition-all duration-150"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <circle cx="12" cy="12" r="4"/>
              <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none"/>
            </svg>
          </a>
          <a
            href="#"
            aria-label="YouTube"
            className="flex items-center justify-center w-11 h-11 rounded-full border border-white/20 text-white/60 hover:text-white hover:border-white/45 transition-all duration-150"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M21.543 6.498C22 8.28 22 12 22 12s0 3.72-.457 5.502c-.254.985-.997 1.76-1.938 2.022C17.896 20 12 20 12 20s-5.893 0-7.605-.476c-.945-.266-1.687-1.04-1.938-2.022C2 15.72 2 12 2 12s0-3.72.457-5.502c.254-.985.997-1.76 1.938-2.022C6.107 4 12 4 12 4s5.896 0 7.605.476c.945.266 1.687 1.04 1.938 2.022zM10 15.5l6-3.5-6-3.5v7z"/>
            </svg>
          </a>
        </motion.div>

        {/* ── Thin rule ── */}
        <div className="w-full h-px bg-white/10 mt-12" />

        {/* ── Nav + copyright ── */}
        <motion.div
          className="flex flex-col items-center gap-3 py-7"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewport}
          transition={{ duration: 0.55, ease, delay: 0.2 }}
        >
          <nav className="flex flex-wrap items-center justify-center gap-x-1 gap-y-2" aria-label="Footer navigation">
            {NAV_LINKS.map((link, i) => (
              <span key={link.label} className="flex items-center">
                <Link
                  href={link.href}
                  className="text-white/35 text-[13px] hover:text-white/65 transition-colors duration-150 px-2.5"
                >
                  {link.label}
                </Link>
                {i < NAV_LINKS.length - 1 && (
                  <span className="text-white/18 text-sm select-none">&bull;</span>
                )}
              </span>
            ))}
          </nav>
          <p className="text-white/25 text-[12px]">
            &copy; {new Date().getFullYear()} ProCaps Laboratories, Inc. All rights reserved.
          </p>
        </motion.div>

        {/* ── FDA disclaimer box — flush to bottom ── */}
        <motion.div
          className="w-full border-t border-white/10 px-5 py-6 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewport}
          transition={{ duration: 0.55, ease, delay: 0.22 }}
        >
          <p className="text-white/28 text-[11px] md:text-[12px] leading-relaxed max-w-[680px] mx-auto">
            These statements have not been evaluated by the Food and Drug Administration.
            These products are not intended to diagnose, treat, cure or prevent any disease.
          </p>
        </motion.div>

      </div>
    </footer>
  );
}
