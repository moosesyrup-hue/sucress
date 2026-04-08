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
    <footer className="w-full bg-[#00723c] relative overflow-hidden">
      {/* Radial glow for depth */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(151,230,116,0.10) 0%, transparent 60%)" }}
        aria-hidden="true"
      />

      <div className="relative max-w-[1440px] mx-auto px-5 md:px-10 lg:px-20 pt-20 md:pt-28 pb-10 flex flex-col items-center gap-0">

        {/* ── Headline ── */}
        <motion.h2
          className="text-white text-[clamp(36px,6vw,72px)] leading-[0.95] tracking-[-0.03em] text-center max-w-[720px]"
          style={{ fontFamily: "var(--font-stix)" }}
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.75, ease }}
        >
          Pure sweetness.
          <br />
          Nothing to hide.
        </motion.h2>

        {/* ── Subtext ── */}
        <motion.p
          className="text-white/55 text-[15px] md:text-[17px] leading-relaxed text-center max-w-[480px] mt-5"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.65, ease, delay: 0.08 }}
        >
          Two ingredients. No hidden sugars, no fillers, no compromises.
          That&apos;s always been the point.
        </motion.p>

        {/* ── Signature + ProCaps logo ── */}
        <motion.div
          className="flex flex-col items-center gap-4 mt-12"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.65, ease, delay: 0.12 }}
        >
          <Image
            src="/images/signature.svg"
            alt="Andrew Lessman signature"
            width={260}
            height={49}
            unoptimized
            className="w-[180px] md:w-[220px] h-auto brightness-0 invert opacity-80"
          />
          <div className="relative h-[52px] w-[140px] md:h-[60px] md:w-[160px]">
            <Image
              src="/images/procaps-logo-full.svg"
              alt="ProCaps Laboratories"
              fill
              unoptimized
              sizes="160px"
              className="object-contain brightness-0 invert"
            />
          </div>
        </motion.div>

        {/* ── Address + solar ── */}
        <motion.div
          className="flex flex-col items-center gap-1.5 mt-10 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewport}
          transition={{ duration: 0.6, ease, delay: 0.15 }}
        >
          <p className="text-white font-semibold text-[13px] md:text-[14px] tracking-wide">
            100% Solar-Powered &bull; Zero Carbon Footprint
          </p>
          <p className="text-white/50 text-[13px] md:text-[14px]">
            430 Parkson Road Henderson, NV 89011 &nbsp;&bull;&nbsp; 800-800-1200
          </p>
        </motion.div>

        {/* ── Social icons ── */}
        <motion.div
          className="flex items-center gap-5 mt-9"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.55, ease, delay: 0.17 }}
        >
          {/* Facebook */}
          <a href="#" aria-label="Facebook" className="text-white/60 hover:text-white transition-colors duration-150">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M22 12C22 6.477 17.523 2 12 2S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
            </svg>
          </a>
          {/* Instagram */}
          <a href="#" aria-label="Instagram" className="text-white/60 hover:text-white transition-colors duration-150">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <circle cx="12" cy="12" r="4"/>
              <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none"/>
            </svg>
          </a>
          {/* YouTube */}
          <a href="#" aria-label="YouTube" className="text-white/60 hover:text-white transition-colors duration-150">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M21.543 6.498C22 8.28 22 12 22 12s0 3.72-.457 5.502c-.254.985-.997 1.76-1.938 2.022C17.896 20 12 20 12 20s-5.893 0-7.605-.476c-.945-.266-1.687-1.04-1.938-2.022C2 15.72 2 12 2 12s0-3.72.457-5.502c.254-.985.997-1.76 1.938-2.022C6.107 4 12 4 12 4s5.896 0 7.605.476c.945.266 1.687 1.04 1.938 2.022zM10 15.5l6-3.5-6-3.5v7z"/>
            </svg>
          </a>
        </motion.div>

        {/* ── Divider ── */}
        <div className="w-full max-w-[560px] h-px bg-white/12 mt-10" />

        {/* ── Nav links + copyright ── */}
        <motion.div
          className="flex flex-col items-center gap-3 mt-6"
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
                  className="text-white/40 text-[13px] hover:text-white/70 transition-colors duration-150 px-2"
                >
                  {link.label}
                </Link>
                {i < NAV_LINKS.length - 1 && (
                  <span className="text-white/20 text-sm select-none">&bull;</span>
                )}
              </span>
            ))}
          </nav>
          <p className="text-white/30 text-[12px]">
            &copy; {new Date().getFullYear()} ProCaps Laboratories, Inc. All rights reserved.
          </p>
        </motion.div>

        {/* ── FDA disclaimer box ── */}
        <motion.div
          className="w-full mt-10 rounded-2xl border border-white/15 px-6 py-5 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewport}
          transition={{ duration: 0.55, ease, delay: 0.22 }}
        >
          <p className="text-white/35 text-[12px] md:text-[13px] leading-relaxed">
            These statements have not been evaluated by the Food and Drug Administration.
            <br className="hidden sm:block" />
            These products are not intended to diagnose, treat, cure or prevent any disease.
          </p>
        </motion.div>

        <div className="pb-8" />
      </div>
    </footer>
  );
}
