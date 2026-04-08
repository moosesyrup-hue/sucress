"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

export default function ContactWidget() {
  const [visible, setVisible] = useState(false);
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 3000);

    const handleScroll = () => {
      const scrolled = window.scrollY / (document.body.scrollHeight - window.innerHeight);
      if (scrolled > 0.18) setVisible(true);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function dismiss() {
    setCollapsed(true);
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed bottom-6 right-5 sm:right-6 z-50 flex flex-col items-end gap-2"
          initial={{ opacity: 0, y: 24, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.95 }}
          transition={{ duration: 0.45, ease }}
        >
          {collapsed ? (
            /* Collapsed pill — always accessible */
            <motion.button
              onClick={() => setCollapsed(false)}
              className="flex items-center gap-2 bg-[#00723c] text-white text-[12px] font-semibold px-4 py-2.5 rounded-full shadow-[0_4px_20px_rgba(0,114,60,0.35)] hover:bg-[#005a30] transition-colors duration-150"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, ease }}
              aria-label="Open contact options"
            >
              <svg width="13" height="13" viewBox="0 0 15 15" fill="none" aria-hidden="true">
                <path d="M13.5 10.5C12.5 10.5 11.5 10.3 10.6 9.9C10.3 9.8 9.9 9.9 9.7 10.1L8.6 11.6C6.5 10.5 4.5 8.6 3.4 6.4L4.9 5.3C5.1 5.1 5.2 4.7 5.1 4.4C4.7 3.5 4.5 2.5 4.5 1.5C4.5 1.2 4.3 1 4 1H1.5C1.2 1 1 1.2 1 1.5C1 8.4 6.6 14 13.5 14C13.8 14 14 13.8 14 13.5V11C14 10.7 13.8 10.5 13.5 10.5Z" fill="white"/>
              </svg>
              Talk to us
            </motion.button>
          ) : (
            /* Expanded card */
            <motion.div
              className="bg-white rounded-2xl shadow-[0_8px_40px_rgba(0,0,0,0.14)] overflow-hidden w-[220px]"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25, ease }}
            >
              {/* Header bar */}
              <div className="bg-[#00723c] px-4 py-2.5 flex items-center justify-between">
                <p className="text-white text-[11px] font-semibold uppercase tracking-[0.1em]">
                  Talk to us
                </p>
                <button
                  onClick={dismiss}
                  aria-label="Collapse"
                  className="text-white/50 hover:text-white transition-colors duration-150 ml-2"
                >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M1 1L11 11M11 1L1 11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                  </svg>
                </button>
              </div>

              {/* Call option */}
              <a
                href="tel:18008001200"
                className="group flex items-center gap-3 px-4 py-3.5 border-b border-[#00723c]/8 hover:bg-[#f0faf5] transition-colors duration-150"
              >
                <span className="flex shrink-0 items-center justify-center w-8 h-8 rounded-full bg-[#effae9] group-hover:bg-[#97e674]/40 transition-colors duration-150">
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true">
                    <path d="M13.5 10.5C12.5 10.5 11.5 10.3 10.6 9.9C10.3 9.8 9.9 9.9 9.7 10.1L8.6 11.6C6.5 10.5 4.5 8.6 3.4 6.4L4.9 5.3C5.1 5.1 5.2 4.7 5.1 4.4C4.7 3.5 4.5 2.5 4.5 1.5C4.5 1.2 4.3 1 4 1H1.5C1.2 1 1 1.2 1 1.5C1 8.4 6.6 14 13.5 14C13.8 14 14 13.8 14 13.5V11C14 10.7 13.8 10.5 13.5 10.5Z" fill="#00723c"/>
                  </svg>
                </span>
                <div className="flex flex-col">
                  <span className="text-[#00723c] font-semibold text-[13px] leading-tight">Call to Order</span>
                  <span className="text-[#00723c]/60 text-[11px] tracking-tight">1-800-800-1200</span>
                </div>
              </a>

              {/* Chat option */}
              <button
                onClick={() => {
                  if (typeof window !== "undefined" && (window as any).Intercom) {
                    (window as any).Intercom("show");
                  }
                }}
                className="group flex items-center gap-3 px-4 py-3.5 w-full hover:bg-[#f0faf5] transition-colors duration-150"
              >
                <span className="flex shrink-0 items-center justify-center w-8 h-8 rounded-full bg-[#effae9] group-hover:bg-[#97e674]/40 transition-colors duration-150">
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true">
                    <path d="M7.5 1C3.9 1 1 3.6 1 6.8C1 8.4 1.7 9.9 2.9 10.9L2.5 13.5L5.3 12.1C6 12.3 6.7 12.5 7.5 12.5C11.1 12.5 14 9.9 14 6.8C14 3.6 11.1 1 7.5 1Z" fill="#00723c"/>
                  </svg>
                </span>
                <div className="flex flex-col items-start">
                  <span className="text-[#00723c] font-semibold text-[13px] leading-tight">Live Chat</span>
                  <span className="text-[#00723c]/60 text-[11px] tracking-tight">Typically replies instantly</span>
                </div>
              </button>
            </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
