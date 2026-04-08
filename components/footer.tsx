"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;
const viewport = { once: true, margin: "0px 0px -40px 0px" };

const NAV_LINKS = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "Contact Us", href: "#" },
  { label: "FAQ", href: "#" },
];

export default function Footer() {
  return (
    <footer className="w-full bg-[#00723c]">
      <div className="max-w-[1440px] mx-auto px-5 md:px-10 lg:px-20 py-8 md:py-10 flex flex-col items-center gap-5">

        <motion.div
          className="relative h-10 w-[110px] md:h-12 md:w-[130px]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewport}
          transition={{ duration: 0.7, ease }}
        >
          <Image
            src="/images/logo.png"
            alt="Sucress"
            fill
            sizes="130px"
            className="object-contain brightness-0 invert opacity-70"
          />
        </motion.div>

        <motion.nav
          className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2"
          aria-label="Footer navigation"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.6, ease, delay: 0.05 }}
        >
          {NAV_LINKS.map((link, i) => (
            <span key={link.label} className="flex items-center gap-6">
              <Link
                href={link.href}
                className="text-white/45 text-sm hover:text-white/80 transition-colors duration-150"
              >
                {link.label}
              </Link>
              {i < NAV_LINKS.length - 1 && (
                <span className="text-white/20 text-sm select-none">·</span>
              )}
            </span>
          ))}
        </motion.nav>

        <div className="w-full max-w-[480px] h-px bg-white/10" />

        <motion.p
          className="text-white/30 text-[11px] leading-relaxed text-center max-w-[560px]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewport}
          transition={{ duration: 0.7, ease, delay: 0.1 }}
        >
          These statements have not been evaluated by the Food and Drug Administration.
          This product is not intended to diagnose, treat, cure, or prevent any disease.
        </motion.p>

        <motion.div
          className="flex items-center gap-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewport}
          transition={{ duration: 0.6, ease, delay: 0.15 }}
        >
          <div className="relative h-[18px] w-[64px] opacity-45 shrink-0">
            <Image
              src="/images/procaps-logo.svg"
              alt="ProCaps Laboratories"
              fill
              unoptimized
              sizes="64px"
              className="object-contain brightness-0 invert"
            />
          </div>
          <div className="w-px h-3.5 bg-white/20 shrink-0" />
          <p className="text-white/35 text-[11px] leading-snug">
            The supplement brand trusted for over 45 years.
          </p>
        </motion.div>

        <motion.p
          className="text-[#00723c]/35 text-xs"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewport}
          transition={{ duration: 0.6, ease, delay: 0.18 }}
        >
          © {new Date().getFullYear()} Sucress. All rights reserved.
        </motion.p>

      </div>
    </footer>
  );
}
