"use client";

import { motion } from "framer-motion";
import AmbienceCard from "../../components/ui/AmbienceCard";
import {
  fadeInUp,
  staggerContainer,
  staggerItem,
  viewportConfig,
} from "../../components/ui/motionVariants";

export default function AmbienceSection() {
  return (
    <section className="w-full py-9 md:py-30 px-4 md:px-20 flex justify-center bg-surface">
      <div className="w-full max-w-[1184px] flex flex-col gap-8 md:gap-12">
        {/* Header fade-in */}
        <motion.div
          className="flex flex-col items-start text-left gap-6 max-w-2xl"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <div className="flex flex-col items-start text-left gap-3">
            <motion.span
              className="font-sans font-normal text-sm leading-5 tracking-[1.25px] uppercase text-accent"
              variants={fadeInUp}
            >
              AMBIENCE
            </motion.span>
            <motion.h2
              className="font-serif font-medium text-2xl md:text-[44px] leading-[120%] tracking-normal text-heading"
              variants={fadeInUp}
            >
              Where Moments Happen
            </motion.h2>
          </div>
          <motion.p
            className="font-sans font-normal text-sm md:text-base leading-6 md:leading-[26px] text-description"
            variants={fadeInUp}
          >
            A space designed for those who appreciate the finer details. From the natural light that fills our space to the carefully curated seating arrangements, every element is crafted to create an atmosphere of comfort and inspiration.
          </motion.p>
        </motion.div>

        <div className="flex flex-col gap-4 w-full">
          {/* Baris atas: 1 foto besar + 2 foto kecil bertumpuk */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full justify-items-center md:justify-items-stretch items-start"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <motion.div className="md:col-span-2 w-full flex justify-center" variants={staggerItem}>
              <AmbienceCard
                src="/images/ambience/ambience-1.webp"
                alt="Cozy coffee shop interior with warm natural lighting"
                variant="primary"
                priority
              />
            </motion.div>
            <motion.div className="md:col-span-1 flex flex-col gap-4 w-full items-center" variants={staggerItem}>
              <AmbienceCard
                src="/images/ambience/ambience-2.webp"
                alt="Overhead view of coffee cups with latte art"
                variant="secondary"
              />
              <AmbienceCard
                src="/images/ambience/ambience-3.webp"
                alt="Sunlit greenhouse cafe filled with plants"
                variant="secondary"
              />
            </motion.div>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full justify-items-center"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            {[
              { src: "/images/ambience/ambience-6.webp", alt: "Cozy coffee shop storefront at night" },
              { src: "/images/ambience/ambience-5.webp", alt: "Vintage coffee roasters storefront window" },
              { src: "/images/ambience/ambience-4.webp", alt: "Modern coffee shop bar counter with stools" },
            ].map((img) => (
              <motion.div key={img.src} className="w-full flex justify-center" variants={staggerItem}>
                <AmbienceCard src={img.src} alt={img.alt} variant="secondary" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
