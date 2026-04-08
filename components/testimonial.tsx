"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;
const viewport = { once: true, margin: "0px 0px -60px 0px" };

export default function Testimonial() {
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

      <motion.blockquote
        className="max-w-[820px]"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewport}
        transition={{ duration: 0.7, ease, delay: 0.1 }}
      >
        <p className="font-medium text-[#00723c] text-[20px] sm:text-[24px] md:text-[28px] lg:text-[34px] leading-snug tracking-tight">
          &ldquo;I use Sucress in just about everything — my morning coffee,
          afternoon iced tea, and even homemade salad dressings.&rdquo;
        </p>
      </motion.blockquote>

      <motion.p
        className="text-[#00723c] font-medium text-[13px] md:text-[14px] tracking-[0.12em] uppercase"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewport}
        transition={{ duration: 0.6, ease, delay: 0.2 }}
      >
        — Jane Doe,{" "}
        <span className="font-normal opacity-70">Verified Customer</span>
      </motion.p>
    </section>
  );
}
