"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;
const viewport = { once: true, margin: "0px 0px -40px 0px" };

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease, delay: i * 0.1 },
  }),
};

export default function HeroCards() {
  return (
    <section className="w-full px-5 md:px-10 lg:px-20 pb-10 lg:pb-20">
      <div className="max-w-[1440px] mx-auto">

        {/*
          Mobile  : 2-col grid
                    Row 1 — image spans both columns (full width, portrait-friendly)
                    Row 2 — Card 1 (Free Supply) | Card 3 (No CC/Sub/Ship) side-by-side

          sm+     : 3 equal columns, original order restored
        */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-5 sm:[aspect-ratio:1293/440]">

          {/* ── Card 1: Free 2-Week Supply ── */}
          <motion.div
            className="
              col-span-1 order-2
              sm:col-span-1 sm:order-1
              relative rounded-3xl overflow-hidden
              bg-gradient-to-b from-[#91e06e] to-[#b2ff90]
              flex flex-col items-center justify-center
              gap-3 sm:gap-4 md:gap-6
              p-4 sm:p-4 md:p-8 lg:p-10
              text-center text-[#064326]
              min-h-[200px] sm:min-h-0
            "
            custom={0}
            variants={cardVariants}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
          >
            <div
              className="leading-[0.88] tracking-[-0.02em] text-[#064326]"
              style={{ fontFamily: "var(--font-stix)" }}
            >
              <p className="text-[clamp(28px,7.5vw,84px)] sm:text-[clamp(38px,5vw,84px)]">Free</p>
              <p className="text-[clamp(28px,7.5vw,84px)] sm:text-[clamp(38px,5vw,84px)]">2-Week</p>
              <p className="text-[clamp(28px,7.5vw,84px)] sm:text-[clamp(38px,5vw,84px)]">Supply!</p>
              <p
                className="italic leading-snug mt-1 text-[clamp(12px,3.2vw,42px)] sm:text-[clamp(16px,2.2vw,42px)]"
              >
                (14 packets)
              </p>
            </div>
            <p className="font-medium text-[#064326]/70 tracking-tight text-[10px] sm:text-[clamp(12px,1vw,16px)]">
              Limit one per household
            </p>
          </motion.div>

          {/* ── Card 2: Product photo — full width on mobile ── */}
          <motion.div
            className="
              col-span-2 order-1
              sm:col-span-1 sm:order-2
              relative rounded-3xl overflow-hidden
              bg-[#f5f0eb]
              aspect-[1/1.05] sm:aspect-auto
            "
            custom={1}
            variants={cardVariants}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
          >
            <Image
              src="/images/hero-center-coffee.png"
              alt="Hand pouring Sucress packet into a green coffee cup"
              fill
              className="object-contain"
              sizes="(max-width: 640px) 100vw, 33vw"
              priority
            />
          </motion.div>

          {/* ── Card 3: No CC / Subscription / Shipping ── */}
          <motion.div
            className="
              col-span-1 order-3
              sm:col-span-1 sm:order-3
              rounded-3xl overflow-hidden
              bg-[#effae9]
              flex flex-col items-center justify-center
              gap-3 sm:gap-3 md:gap-5
              p-4 sm:p-4 md:p-8 lg:p-10
              text-center text-[#00723c]
              min-h-[200px] sm:min-h-0
            "
            custom={2}
            variants={cardVariants}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
          >
            <p className="font-medium leading-tight tracking-tight text-[clamp(12px,3vw,34px)] sm:text-[clamp(16px,2vw,34px)]">
              No Credit Card
              <br />
              Required
            </p>
            <div className="w-3/4 h-px bg-[#00723c]/15" />
            <p className="font-medium leading-tight tracking-tight text-[clamp(12px,3vw,34px)] sm:text-[clamp(16px,2vw,34px)]">
              No Subscription
              <br />
              or Commitment
            </p>
            <div className="w-3/4 h-px bg-[#00723c]/15" />
            <p className="font-medium leading-tight tracking-tight text-[clamp(12px,3vw,34px)] sm:text-[clamp(16px,2vw,34px)]">
              No Shipping
              <br />
              or Handling Fees
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
