"use client";

import { motion, Variants } from "framer-motion";

// Shared easing
const ease = [0.22, 1, 0.36, 1] as const;

// Preset variants
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.8, ease } },
};

export const fadeScale: Variants = {
  hidden: { opacity: 0, scale: 0.97 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.75, ease } },
};

export const stagger = (delayChildren = 0.1): Variants => ({
  hidden: {},
  show: { transition: { staggerChildren: delayChildren } },
});

// Viewport settings — trigger once when 12% visible
const viewport = { once: true, margin: "0px 0px -60px 0px" };

interface AnimateProps {
  children: React.ReactNode;
  variants?: Variants;
  delay?: number;
  className?: string;
  /** If true, triggers immediately (for above-the-fold elements) */
  immediate?: boolean;
}

export function Animate({
  children,
  variants = fadeUp,
  delay = 0,
  className,
  immediate = false,
}: AnimateProps) {
  const finalVariants: Variants = delay
    ? {
        hidden: variants.hidden,
        show: {
          ...(typeof variants.show === "object" ? variants.show : {}),
          transition: {
            ...(typeof variants.show === "object" &&
            "transition" in variants.show
              ? (variants.show as { transition?: object }).transition
              : {}),
            delay,
          },
        },
      }
    : variants;

  if (immediate) {
    return (
      <motion.div
        className={className}
        initial="hidden"
        animate="show"
        variants={finalVariants}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
      variants={finalVariants}
    >
      {children}
    </motion.div>
  );
}

export function AnimateGroup({
  children,
  delayChildren = 0.1,
  className,
  immediate = false,
}: {
  children: React.ReactNode;
  delayChildren?: number;
  className?: string;
  immediate?: boolean;
}) {
  const v = stagger(delayChildren);
  if (immediate) {
    return (
      <motion.div className={className} initial="hidden" animate="show" variants={v}>
        {children}
      </motion.div>
    );
  }
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
      variants={v}
    >
      {children}
    </motion.div>
  );
}
