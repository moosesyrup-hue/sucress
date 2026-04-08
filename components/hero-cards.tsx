"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;
const viewport = { once: true, margin: "0px 0px -60px 0px" };

const cardVariants = {
  hidden: { opacity: 0, y: 36 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease, delay: i * 0.12 },
  }),
};

export default function HeroCards() {
  return (
    <section className="w-full px-5 md:px-10 lg:px-20 pb-10 lg:pb-20">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-5 sm:[aspect-ratio:1293/440]">

          {/* Card 1: Free Month Supply */}
          <motion.div
            className="relative rounded-3xl overflow-hidden bg-gradient-to-b from-[#91e06e] to-[#b2ff90] flex flex-col items-center justify-center gap-5 sm:gap-4 md:gap-6 p-6 sm:p-4 md:p-8 lg:p-10 text-center text-[#064326] min-h-[280px] sm:min-h-0"
            custom={0}
            variants={cardVariants}
            initial="hidden"
            animate="show"
          >
            <div
              className="leading-[0.88] tracking-[-0.02em] text-[#064326]"
              style={{ fontFamily: "var(--font-stix)" }}
            >
              <p style={{ fontSize: "clamp(38px, 5vw, 84px)" }}>Free</p>
              <p style={{ fontSize: "clamp(38px, 5vw, 84px)" }}>2-Week</p>
              <p style={{ fontSize: "clamp(38px, 5vw, 84px)" }}>Supply!</p>
              <p
                className="italic leading-snug mt-1"
                style={{ fontSize: "clamp(16px, 2.2vw, 42px)" }}
              >
                (14 packets)
              </p>
            </div>
            <p
              className="font-medium text-[#064326]/70 tracking-tight"
              style={{ fontSize: "clamp(12px, 1vw, 16px)" }}
            >
              Limit one per household
            </p>
          </motion.div>

          {/* Card 2: Product photo */}
          <motion.div
            className="relative rounded-3xl overflow-hidden min-h-[260px] sm:min-h-0"
            custom={1}
            variants={cardVariants}
            initial="hidden"
            animate="show"
          >
            <Image
              src="/images/hero-center-coffee.png"
              alt="Hand pouring Sucress packet into a green coffee cup"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, 33vw"
            />
          </motion.div>

          {/* Card 3: No Credit Card / Subscription / Shipping */}
          <motion.div
            className="rounded-3xl overflow-hidden bg-[#effae9] flex flex-col items-center justify-center gap-4 sm:gap-3 md:gap-5 p-6 sm:p-4 md:p-8 lg:p-10 text-center text-[#00723c] min-h-[280px] sm:min-h-0"
            custom={2}
            variants={cardVariants}
            initial="hidden"
            animate="show"
          >
            <p
              className="font-medium leading-tight tracking-tight"
              style={{ fontSize: "clamp(16px, 2vw, 34px)" }}
            >
              No Credit Card
              <br />
              Required
            </p>
            <div className="w-3/4 h-px bg-[#00723c]/15" />
            <p
              className="font-medium leading-tight tracking-tight"
              style={{ fontSize: "clamp(16px, 2vw, 34px)" }}
            >
              No Subscription
              <br />
              or Commitment
            </p>
            <div className="w-3/4 h-px bg-[#00723c]/15" />
            <p
              className="font-medium leading-tight tracking-tight"
              style={{ fontSize: "clamp(16px, 2vw, 34px)" }}
            >
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
