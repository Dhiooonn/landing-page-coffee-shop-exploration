"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  staggerContainer,
  viewportConfig,
} from "../../components/ui/motionVariants";

export default function VisitUsSection() {
  return (
    <section id="visit" className="w-full py-9 md:py-24 lg:py-30 px-4 md:px-8 lg:px-20 flex justify-center bg-background overflow-hidden">
      <div className="w-full max-w-[1184px] px-0 lg:px-[108px] flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12 lg:gap-16">
        {/* Kolom kiri slide dari kiri */}
        <motion.div
          className="flex flex-col items-start gap-8 md:gap-10 lg:gap-12 text-left w-full max-w-[480px]"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <div className="flex flex-col items-start gap-3 md:gap-4 lg:gap-5">
            <motion.span
              className="font-sans font-normal text-sm leading-5 tracking-[1.25px] uppercase text-accent"
              variants={fadeInLeft}
            >
              VISIT US
            </motion.span>
            <motion.h2
              className="font-serif font-medium text-2xl md:text-3xl lg:text-4xl leading-[130%] tracking-normal text-heading"
              variants={fadeInLeft}
            >
              Come say hello!
            </motion.h2>
          </div>

          <motion.div className="flex flex-col gap-8 w-full" variants={fadeInLeft}>
            <div className="flex flex-col gap-2">
              <h4 className="font-sans font-normal text-xs leading-4 tracking-[0.6px] uppercase text-heading">
                ADDRESS
              </h4>
              <p className="font-sans font-normal text-sm leading-5 tracking-[-0.15px] text-description">
                Jl. Kh. A. Dahlan No.3, RW.5, Darat Sekip,
                <br />
                Kec. Pontianak Kota, Kota Pontianak, Kalimantan Barat
                <br />
                78117
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <h4 className="font-sans font-normal text-xs leading-4 tracking-[0.6px] uppercase text-heading">
                HOURS
              </h4>
              <p className="font-sans font-normal text-sm leading-5 tracking-[-0.15px] text-description">
                Everyday: 06:00 AM - 02:00 AM
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <h4 className="font-sans font-normal text-xs leading-4 tracking-[0.6px] uppercase text-heading">
                CONTACT
              </h4>
              <p className="font-sans font-normal text-sm leading-5 tracking-[-0.15px] text-description">
                +628 1234 5678 90
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Foto slide dari kanan */}
        <motion.div
          className="relative w-full max-w-[400px] h-[380px] sm:max-w-[400px] sm:h-[480px] md:max-w-[480px] md:h-[560px] lg:max-w-[480px] lg:h-[714.66px] rounded-2xl overflow-hidden shrink-0"
          variants={fadeInRight}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <Image
            src="/images/visit/image-visit.webp"
            alt="Monkey Grounds Coffee Storefront"
            fill
            sizes="(max-width: 640px) 288px, (max-width: 1024px) 480px, 480px"
            className="object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
