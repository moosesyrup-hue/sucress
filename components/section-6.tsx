"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;
const viewport = { once: true, margin: "0px 0px -60px 0px" };

export default function Section6() {
  return (
    <section className="w-full bg-[#fdf9f5] px-5 md:px-10 lg:px-20 py-12 md:py-20 lg:py-28">
      <div className="max-w-[1440px] mx-auto flex flex-col items-center gap-12 md:gap-16">

        <motion.h2
          className="font-semibold text-[#00723c] text-[26px] sm:text-[34px] md:text-[44px] lg:text-[54px] leading-tight tracking-[-0.03em] text-center max-w-[900px]"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.7, ease }}
        >
          What&apos;s really hiding in{" "}
          <br />
          those colorful packets?
        </motion.h2>

        <motion.div
          className="relative w-full aspect-[1064/500] rounded-2xl overflow-hidden"
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={viewport}
          transition={{ duration: 0.75, ease }}
        >
          <Image
            src="/images/section6.jpg"
            alt="Popular sugar substitute packets revealing hidden sugars and fillers"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 80vw"
          />
        </motion.div>

        <div className="flex flex-col items-center gap-9 max-w-[725px] text-center">
          <motion.p
            className="font-normal text-[#00723c] text-[16px] md:text-[18px] lg:text-[20px] leading-relaxed opacity-85"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.7, ease }}
          >
            <strong className="font-bold opacity-100">
              Most sugar substitutes contain hidden sugars or carbs — but
              nowhere more deceptively than in those pretty colored sugar
              replacement packets.{" "}
            </strong>
            <em className="italic">Sucress</em>{" "}is different. Just glycine and
            non-GMO stevia leaf extract for clean, simple sweetness without the
            extras you don&apos;t need.
          </motion.p>

          <motion.a
            href="#free-offer"
            className="inline-flex items-center justify-center h-14 px-10 bg-[#97e674] rounded-full text-[#064326] font-semibold text-[15px] md:text-[17px] hover:bg-[#7dc45e] transition-colors duration-200"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.6, ease, delay: 0.1 }}
          >
            Click here to try Sucress for FREE!
          </motion.a>

          <motion.p
            className="text-[#00723c] text-[15px] md:text-[17px] leading-relaxed font-semibold"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.6, ease, delay: 0.15 }}
          >
            Free shipping. No credit card required.
            <br />
            <span className="font-normal text-[13px] md:text-[14px] opacity-50">
              Limit one per household.
            </span>
          </motion.p>
        </div>
      </div>
    </section>
  );
}
