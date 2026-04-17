"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;
const viewport = { once: true, margin: "0px 0px -60px 0px" };

export default function Section1() {
  return (
    <section className="w-full px-5 md:px-10 lg:px-20 pb-12 md:pb-20 lg:pb-28">
      <div className="max-w-[1440px] mx-auto">
        <div className="bg-[#effae9] rounded-3xl px-6 sm:px-10 md:px-16 lg:px-20 xl:px-28 py-16 md:py-24 flex flex-col items-center gap-12 md:gap-16">

          <motion.div
            className="relative w-full aspect-[1064/500] rounded-2xl overflow-hidden"
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={viewport}
            transition={{ duration: 0.75, ease }}
          >
            <Image
              src="/images/section1.png"
              alt="Sucress packets alongside natural sweetener ingredients"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 80vw"
            />
          </motion.div>

          <div className="flex flex-col items-center gap-9 md:gap-11 max-w-[900px] text-center">
            <motion.div
              className="flex flex-col gap-5 md:gap-6"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.7, ease }}
            >
              <h2 className="text-[#00723c] text-[26px] sm:text-[32px] md:text-[40px] lg:text-[46px] font-semibold leading-tight tracking-[-0.02em]">
                <em className="font-normal italic">Sucress</em>{" "}
                is the only sugar replacement{" "}
                <br className="hidden lg:block" />
                that actually replaces all the sugar.
              </h2>
              <p className="font-normal text-[#00723c] text-[16px] md:text-[18px] lg:text-[20px] leading-relaxed opacity-85">
                Made with glycine—an important amino acid and building block of
                protein—combined with stevia. Sucress delivers clean, balanced
                sweetness without calories, sugar, carbs or compromise.
              </p>
            </motion.div>

            <motion.a
              href="#free-offer"
              className="inline-flex items-center justify-center h-14 px-10 bg-[#97e674] rounded-full text-[#064326] font-semibold text-[15px] md:text-[17px] hover:bg-[#7dc45e] transition-colors duration-200 whitespace-nowrap"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.6, ease, delay: 0.1 }}
            >
              Click here to try Sucress for FREE!
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}
