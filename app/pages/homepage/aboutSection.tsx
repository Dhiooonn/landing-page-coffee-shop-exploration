"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, viewportConfig } from "../../components/ui/motionVariants";

export default function AboutSection() {
  return (
    <section className="w-full bg-surface py-9 md:py-30 px-4 md:px-20 flex justify-center">
      <motion.div
        className="w-full max-w-[1184px] flex flex-col items-center justify-center text-center gap-6 md:gap-8"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
      >
        <div className="flex flex-col items-center gap-3">
          <motion.span
            className="font-sans font-normal text-sm leading-5 tracking-[1.25px] uppercase text-accent"
            variants={fadeInUp}
          >
            ABOUT US
          </motion.span>
          <motion.h2
            className="font-serif font-medium text-2xl md:text-3xl lg:text-4xl leading-[130%] tracking-normal text-heading max-w-3xl"
            variants={fadeInUp}
          >
            A place to connect, relax, <br className="hidden sm:inline" /> and create moments.
          </motion.h2>
        </div>
        <motion.p
          className="font-sans font-normal text-sm md:text-base leading-6 md:leading-7 tracking-normal text-description max-w-5xl"
          variants={fadeInUp}
        >
          At Monkey Coffee, we believe every cup is an invitation to slow down and savor life's simple pleasures. Whether you're meeting a friend, working on your next big idea, or simply enjoying a quiet moment alone, our doors are open to those who appreciate the art of a well-crafted brew and the warmth of genuine community.
        </motion.p>
      </motion.div>
    </section>
  );
}
