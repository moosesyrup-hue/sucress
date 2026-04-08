"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;
const viewport = { once: true, margin: "0px 0px -60px 0px" };

const BENEFITS = [
  { label: "Zero Calories", filled: true },
  { label: "Zero Carbs", filled: true },
  { label: "No Added Sugars", filled: true },
  { label: "Non-GMO Stevia Leaf", filled: false },
  { label: "Gluten Free", filled: false },
];

function CheckIcon({ filled }: { filled: boolean }) {
  return (
    <div className="relative shrink-0 w-6 h-6 md:w-7 md:h-7">
      <Image
        src={filled ? "/images/check-icon.svg" : "/images/check-icon2.svg"}
        alt=""
        fill
        unoptimized
        sizes="28px"
        className="object-contain"
        aria-hidden="true"
      />
    </div>
  );
}

export default function Section5() {
  return (
    <section className="w-full px-5 md:px-10 lg:px-20 py-12 md:py-20 lg:py-28">
      <div className="max-w-[1280px] mx-auto flex flex-col items-center gap-12 md:gap-16">

        <motion.h2
          className="font-semibold text-[#00723c] text-[26px] sm:text-[34px] md:text-[44px] lg:text-[54px] leading-tight tracking-[-0.03em] text-center max-w-[700px]"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.7, ease }}
        >
          Enjoy the pure natural sweetness of{" "}
          <em className="font-normal italic">Sucress!</em>
        </motion.h2>

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start w-full">

          {/* Left: lifestyle image — animate the div itself so fill Image works */}
          <motion.div
            className="relative w-full lg:flex-1 aspect-[615/820] rounded-3xl overflow-hidden"
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={viewport}
            transition={{ duration: 0.75, ease }}
          >
            <Image
              src="/images/section5-lifestyle.png"
              alt="Enjoying Sucress in everyday life — coffee, tea, baking"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>

          {/* Right: content */}
          <div className="flex flex-col gap-7 md:gap-9 lg:flex-1 lg:self-center">
            <motion.h3
              className="font-semibold text-[#00723c] text-[22px] sm:text-[28px] md:text-[34px] lg:text-[42px] leading-tight tracking-[-0.02em] max-w-[500px]"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.7, ease }}
            >
              The{" "}
              <span className="text-[#7dc45e]">healthier</span>{" "}
              alternative to sugar and sugar substitutes.
            </motion.h3>

            <ul className="flex flex-col gap-3 md:gap-4">
              {BENEFITS.map((benefit, i) => (
                <motion.li
                  key={benefit.label}
                  className="flex items-center gap-3 md:gap-4"
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={viewport}
                  transition={{ duration: 0.5, ease, delay: i * 0.07 }}
                >
                  <CheckIcon filled={benefit.filled} />
                  <span className="font-medium text-[#00723c] text-[15px] md:text-[17px] lg:text-[18px] tracking-[0.04em] uppercase">
                    {benefit.label}
                  </span>
                </motion.li>
              ))}
            </ul>

            <motion.div
              className="relative h-[90px] w-[160px] md:h-[110px] md:w-[196px]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={viewport}
              transition={{ duration: 0.7, ease, delay: 0.1 }}
            >
              <Image
                src="/images/section5-badge.png"
                alt="Certified non-GMO"
                fill
                sizes="196px"
                className="object-contain"
              />
            </motion.div>

            <motion.a
              href="#free-offer"
              className="inline-flex items-center justify-center h-14 px-8 bg-[#91e06e] rounded-full text-[#064326] font-semibold text-[15px] md:text-[17px] hover:bg-[#7dc45e] transition-colors duration-200 self-start"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.6, ease, delay: 0.15 }}
            >
              Get a FREE 2-Week Supply of Sucress!
            </motion.a>

            <motion.p
              className="text-[#00723c] text-[15px] md:text-[17px] leading-relaxed font-semibold"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.6, ease, delay: 0.2 }}
            >
              Free shipping. No credit card required.
              <br />
              <span className="font-normal text-[13px] md:text-[14px] opacity-50">
                Limit one per household.
              </span>
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
