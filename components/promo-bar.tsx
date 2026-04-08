"use client";
import { motion } from "framer-motion";

export default function PromoBar() {
  return (
    <motion.div
      className="w-full bg-[#00723c] py-3 px-4 text-center"
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <p className="text-white text-sm md:text-base font-normal leading-snug">
        Get your{" "}
        <strong className="font-bold">FREE 14-packet supply</strong>{" "}
        of Sucress today!
      </p>
    </motion.div>
  );
}
