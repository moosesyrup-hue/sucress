"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;
const viewport = { once: true, margin: "0px 0px -60px 0px" };

export default function Section3() {
  return (
    <section className="w-full bg-white px-5 md:px-10 lg:px-20 py-12 md:py-20 lg:py-28">
      <div className="max-w-[1440px] mx-auto flex flex-col items-center gap-12 md:gap-16">

        <motion.div
          className="flex flex-col items-center gap-5 md:gap-7 text-center max-w-[780px]"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.7, ease }}
        >
          <h2 className="text-[#00723c] font-semibold text-[26px] sm:text-[34px] md:text-[44px] lg:text-[54px] leading-tight tracking-[-0.03em] sm:whitespace-nowrap">
            Taste the difference with <em className="font-normal italic">Sucress.</em>
          </h2>
          <p className="text-[#00723c] font-medium text-[17px] sm:text-[19px] md:text-[22px] lg:text-[26px] leading-snug tracking-tight">
            Did you know that virtually ALL sugar substitutes contain sugar
            and/or carbs?{" "}
            <strong className="font-bold">
              Not <em className="italic">Sucress.</em>
            </strong>
          </p>
        </motion.div>

        <motion.div
          className="relative w-full aspect-[1064/500] rounded-2xl overflow-hidden"
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={viewport}
          transition={{ duration: 0.75, ease }}
        >
          <Image
            src="/images/section3.png"
            alt="Comparison of Sucress versus other sugar substitutes"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 80vw"
          />
        </motion.div>

        <div className="flex flex-col items-center gap-9 max-w-[680px] text-center">
          <motion.p
            className="font-normal text-[#00723c] text-[16px] md:text-[18px] lg:text-[20px] leading-relaxed opacity-85"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.7, ease }}
          >
            Our amino acid based non-GMO stevia leaf extract formula is a true
            low glycemic sugar substitute that contains NO HIDDEN SUGAR. Each
            packet provides the sweetness equivalence of approximately 2
            teaspoons of sugar, delivering the benefits of a pure stevia
            extract without the bitterness or compromise, along with the
            healthy blood sugar support of the amino acid glycine, making it
            an ideal zero calorie sweetener for those seeking balanced
            nutrition.
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
        </div>
      </div>
    </section>
  );
}
