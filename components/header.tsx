"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm w-full">
      {/* Outer padding matches all content sections exactly */}
      <div className="px-5 md:px-10 lg:px-20">
        <div className="max-w-[1440px] mx-auto">
          {/* Desktop nav */}
          <div className="hidden md:grid grid-cols-3 items-center py-2.5">
            <div className="flex flex-col gap-0.5">
              <p className="font-medium italic text-[#00723c] text-sm lg:text-[15px] tracking-tight capitalize">
                Non-Caloric Sweetener
              </p>
              <a
                href="tel:18008001200"
                className="flex items-center gap-1.5 text-[#00723c]/55 hover:text-[#00723c] transition-colors duration-150 text-[11px] font-medium tracking-tight w-fit"
              >
                <svg width="11" height="11" viewBox="0 0 15 15" fill="none" aria-hidden="true">
                  <path d="M13.5 10.5C12.5 10.5 11.5 10.3 10.6 9.9C10.3 9.8 9.9 9.9 9.7 10.1L8.6 11.6C6.5 10.5 4.5 8.6 3.4 6.4L4.9 5.3C5.1 5.1 5.2 4.7 5.1 4.4C4.7 3.5 4.5 2.5 4.5 1.5C4.5 1.2 4.3 1 4 1H1.5C1.2 1 1 1.2 1 1.5C1 8.4 6.6 14 13.5 14C13.8 14 14 13.8 14 13.5V11C14 10.7 13.8 10.5 13.5 10.5Z" fill="currentColor"/>
                </svg>
                1-800-800-1200
              </a>
            </div>
            <div className="flex justify-center">
              <Link href="/">
                <div className="relative h-[72px] w-[180px] lg:h-[80px] lg:w-[200px]">
                  <Image
                    src="/images/logo.png"
                    alt="Sucress logo"
                    fill
                    sizes="200px"
                    className="object-contain"
                    priority
                  />
                </div>
              </Link>
            </div>
            <div className="flex justify-end">
              <a
                href="#free-offer"
                className="inline-flex items-center justify-center h-[46px] px-8 border border-[#00723c] rounded-full text-[#00723c] font-medium text-sm lg:text-[15px] whitespace-nowrap hover:bg-[#00723c] hover:text-white transition-colors duration-200"
              >
                Free 2-Week Supply
              </a>
            </div>
          </div>

          {/* Divider line — matches Figma */}
          <div className="hidden md:block h-px bg-[#00723c]/10" />

          {/* Mobile nav */}
          <div className="flex md:hidden items-center justify-between py-3">
            <Link href="/">
              <div className="relative h-[54px] w-[136px]">
                <Image
                  src="/images/logo.png"
                  alt="Sucress logo"
                  fill
                  sizes="136px"
                  className="object-contain"
                  priority
                />
              </div>
            </Link>
            <button
              className="flex flex-col gap-[5px] p-2"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              <span className={`block w-6 h-0.5 bg-[#00723c] transition-transform duration-200 origin-center ${menuOpen ? "translate-y-[7px] rotate-45" : ""}`} />
              <span className={`block w-6 h-0.5 bg-[#00723c] transition-opacity duration-200 ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`block w-6 h-0.5 bg-[#00723c] transition-transform duration-200 origin-center ${menuOpen ? "-translate-y-[7px] -rotate-45" : ""}`} />
            </button>
          </div>

          {menuOpen && (
            <div className="md:hidden pb-5 flex flex-col gap-3 border-t border-[#00723c]/10 pt-4">
              <p className="font-medium italic text-[#00723c] text-sm text-center">
                Non-Caloric Sweetener
              </p>
              <a
                href="#free-offer"
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-center h-11 px-6 border border-[#00723c] rounded-full text-[#00723c] font-medium text-sm hover:bg-[#00723c] hover:text-white transition-colors duration-200"
              >
                Get Your Free Supply
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
