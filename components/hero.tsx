"use client";
import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  return (
    <section className="w-full px-5 md:px-10 lg:px-20 pt-16 sm:pt-20 md:pt-24 pb-10 lg:pb-20 text-center">
      <div className="max-w-[1280px] mx-auto flex flex-col items-center gap-7 md:gap-9">
        <div className="flex flex-col gap-4 md:gap-5">
          <motion.h1
            className="font-bold text-[#00723c] tracking-[-0.03em] leading-[1.05] text-[36px] sm:text-[48px] md:text-[62px] lg:text-[74px]"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.1 }}
          >
            The only sugar replacement{" "}
            <br className="hidden lg:block" />
            that&apos;s{" "}
            <em className="text-[#7dc45e]">truly</em>{" "}
            sugar-free.
          </motion.h1>
          <motion.p
            className="font-medium text-[#00723c] text-[15px] sm:text-[17px] md:text-[20px] lg:text-[22px] tracking-tight opacity-75"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.3 }}
          >
            100% Sugar-Free &nbsp;•&nbsp; 100% Guilt-Free &nbsp;•&nbsp; 100% Free-Free
          </motion.p>
        </div>

        <motion.a
          href="#free-offer"
          className="inline-flex items-center justify-center h-14 px-10 bg-[#97e674] rounded-full text-[#064326] font-semibold text-[15px] md:text-[17px] hover:bg-[#7dc45e] transition-colors duration-200 active:scale-[0.98]"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease, delay: 0.5 }}
        >
          Click here to try Sucress for FREE!
        </motion.a>
      </div>
    </section>
  );
}
