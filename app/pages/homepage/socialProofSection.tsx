"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { fadeInUp, staggerContainer, viewportConfig } from "../../components/ui/motionVariants";

export default function SocialProofSection() {
  return (
    <section className="w-full py-9 md:py-30 px-4 md:px-20 flex flex-col items-center justify-center text-center gap-3 overflow-hidden">
      <motion.div
        className="flex flex-col items-center gap-3"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
      >
        <motion.div className="flex items-center gap-2 text-accent" variants={fadeInUp}>
          {[...Array(5)].map((_, index) => (
            <Star key={index} className="w-5 h-5 fill-current" />
          ))}
        </motion.div>

        <motion.h2
          className="font-serif font-medium text-2xl leading-[150%] md:text-4xl md:leading-[150%] tracking-normal text-heading"
          variants={fadeInUp}
        >
          Loved by Coffee Lovers & Creatives
        </motion.h2>

        <motion.p
          className="font-sans font-normal text-sm leading-7 md:text-base md:leading-7 tracking-[-0.15px] text-body"
          variants={fadeInUp}
        >
          Top-rated hangout spot in the city
        </motion.p>
      </motion.div>
    </section>
  );
}
