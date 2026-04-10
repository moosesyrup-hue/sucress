"use client";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const ease = [0.22, 1, 0.36, 1] as const;
const viewport = { once: true, margin: "0px 0px -60px 0px" };

const TESTIMONIALS = [
  {
    quote: "I use Sucress in just about everything — my morning coffee, afternoon iced tea, and even homemade salad dressings.",
    name: "Margaret T.",
    label: "Verified Customer",
  },
  {
    quote: "Finally a sweetener that doesn't leave that weird aftertaste. I've tried them all and nothing comes close to Sucress.",
    name: "David R.",
    label: "Verified Customer",
  },
  {
    quote: "My doctor told me to cut out sugar and I thought that meant giving up the things I love. Sucress changed everything for me.",
    name: "Sandra K.",
    label: "Verified Customer",
  },
  {
    quote: "I've been a ProCaps customer for over a decade and Sucress is one of Andrew's best yet. Clean, simple, and it works.",
    name: "Robert M.",
    label: "ProCaps Customer since 2011",
  },
  {
    quote: "Two packets in my morning coffee and I honestly forget I'm not using sugar. My whole family has made the switch.",
    name: "Patricia L.",
    label: "Verified Customer",
  },
];

const INTERVAL = 4500;

export default function Testimonial() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % TESTIMONIALS.length);
    }, INTERVAL);
    return () => clearInterval(timer);
  }, []);

  const current = TESTIMONIALS[index];

  return (
    <section className="w-full px-5 md:px-10 lg:px-20 pt-0 pb-10 lg:pb-20 flex flex-col items-center gap-8 md:gap-10 text-center">
      <motion.div
        className="relative h-9 w-[200px] md:h-11 md:w-[250px]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={viewport}
        transition={{ duration: 0.8, ease }}
      >
        <Image
          src="/images/stars.svg"
          alt="5 star rating"
          fill
          unoptimized
          sizes="250px"
          className="object-contain"
        />
      </motion.div>

      <div className="max-w-[820px] w-full" style={{ minHeight: "clamp(90px, 14vw, 140px)" }}>
        <AnimatePresence mode="wait">
          <motion.blockquote
            key={index}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.55, ease }}
          >
            <p className="font-medium text-[#00723c] text-[20px] sm:text-[24px] md:text-[28px] lg:text-[34px] leading-snug tracking-tight">
              &ldquo;{current.quote}&rdquo;
            </p>
          </motion.blockquote>
        </AnimatePresence>
      </div>

      <div style={{ minHeight: "24px" }}>
        <AnimatePresence mode="wait">
          <motion.p
            key={`name-${index}`}
            className="text-[#00723c] font-medium text-[13px] md:text-[14px] tracking-[0.12em] uppercase"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease }}
          >
            — {current.name},{" "}
            <span className="font-normal opacity-70">{current.label}</span>
          </motion.p>
        </AnimatePresence>
      </div>

      {/* Dot indicators */}
      <motion.div
        className="flex items-center gap-2"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={viewport}
        transition={{ duration: 0.6, ease, delay: 0.3 }}
      >
        {TESTIMONIALS.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`View testimonial ${i + 1}`}
            className={`rounded-full transition-all duration-300 ${
              i === index
                ? "w-5 h-2 bg-[#00723c]"
                : "w-2 h-2 bg-[#00723c]/20 hover:bg-[#00723c]/40"
            }`}
          />
        ))}
      </motion.div>
    </section>
  );
}
