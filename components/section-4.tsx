"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;
const viewport = { once: true, margin: "0px 0px -60px 0px" };

export default function Section4() {
  return (
    <section className="w-full bg-[#fdf9f5] px-5 md:px-10 lg:px-20 py-12 md:py-20 lg:py-28">
      <div className="max-w-[1440px] mx-auto flex flex-col items-center gap-12 md:gap-16">

        <motion.h2
          className="font-semibold text-center tracking-[-0.03em] leading-tight max-w-[900px] text-[26px] sm:text-[34px] md:text-[44px] lg:text-[54px]"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.7, ease }}
        >
          <span className="text-[#7dc45e]">Sweet Success.</span>
          <br />
          <span className="text-[#00723c]">
            How Glycine transformed{" "}
            <em className="font-normal italic">Sucress</em> into a perfect
            sweetener!
          </span>
        </motion.h2>

        <motion.div
          className="relative w-full aspect-[1064/475] rounded-2xl overflow-hidden"
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={viewport}
          transition={{ duration: 0.75, ease }}
        >
          <Image
            src="/images/section4.jpg"
            alt="Glycine and stevia — the two ingredients behind Sucress"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 80vw"
          />
        </motion.div>

        <div className="flex flex-col items-center gap-8 md:gap-10 max-w-[680px] text-center w-full">

          <motion.div
            className="flex flex-wrap items-center justify-center gap-2 md:gap-3"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.7, ease }}
          >
            <p className="font-bold text-[#00723c] text-[22px] sm:text-[28px] md:text-[34px] lg:text-[40px] tracking-tight whitespace-nowrap">
              Sucre + Success =
            </p>
            <div className="relative h-[72px] sm:h-[85px] md:h-[98px] w-[188px] sm:w-[231px] md:w-[275px]">
              <Image
                src="/images/sucress-wordmark.png"
                alt="Sucress"
                fill
                sizes="176px"
                className="object-contain object-left"
              />
            </div>
          </motion.div>

          <motion.p
            className="font-normal text-[#00723c] text-[16px] md:text-[18px] lg:text-[20px] leading-relaxed opacity-85"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.7, ease }}
          >
            Sucre is the French word for sugar and if you combine it with the
            word success, you end up with{" "}
            <strong className="font-bold">Sucress</strong>!
          </motion.p>

          {/* Divider — no animation wrapper so fill Image works correctly */}
          <div className="relative w-full h-px opacity-30">
            <Image
              src="/images/divider.svg"
              alt=""
              fill
              unoptimized
              sizes="100vw"
              className="object-fill"
              aria-hidden="true"
            />
          </div>

          <motion.p
            className="font-normal text-[#00723c] text-[16px] md:text-[18px] lg:text-[20px] leading-relaxed opacity-85"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.7, ease }}
          >
            The perfectly balanced sweetness of{" "}
            <strong className="font-semibold">Sucress</strong> starts with
            Glycine – Mother Nature&apos;s sweetest amino acid. Glycine is a
            building block of protein given its name almost 200 years ago
            precisely because of its remarkably sweet taste. Today, we know that
            Glycine also supports healthy blood sugar balance making it ideal
            in a next-generation sugar substitute.
            <br /><br />
            We then add just a trace of our most concentrated stevia leaf
            extract to create a clean, great-tasting stevia sweetener a truly
            unique and effective stevia sugar substitute and one of the most
            innovative sugar alternatives available.
          </motion.p>

          <motion.a
            href="#free-offer"
            className="inline-flex items-center justify-center h-14 px-10 bg-[#97e674] rounded-full text-[#064326] font-semibold text-[15px] md:text-[17px] hover:bg-[#7dc45e] transition-colors duration-200"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.6, ease, delay: 0.1 }}
          >
            Get a FREE 2-Week Supply of Sucress!
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
