"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "../../components/ui/Button";
import { fadeInUp, staggerContainer } from "../../components/ui/motionVariants";

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);

  // Parallax: background bergerak lebih lambat dari scroll
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-[800px] min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background parallax — bergerak lebih lambat dari konten */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat will-change-transform"
        style={{
          backgroundImage: "url('/images/heroSection.webp')",
          y: backgroundY,
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </motion.div>

      {/* Konten fade-out saat scroll ke bawah */}
      <motion.div
        className="relative z-10 flex flex-col items-center text-center px-4 max-w-3xl gap-6"
        style={{ opacity }}
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="font-serif font-medium text-3xl sm:text-4xl md:text-5xl md:leading-tight lg:text-[52px] leading-snug tracking-normal text-white"
          variants={fadeInUp}
        >
          Find Your Coffee, Bar &<br className="hidden sm:inline" />
          {" "}Dining Escape
        </motion.h1>

        <motion.p
          className="font-sans font-normal text-base leading-7 md:text-xl md:leading-7 tracking-[-0.45px] text-white/90 max-w-2xl"
          variants={fadeInUp}
        >
          A cozy space to sip, work, and connect.
        </motion.p>

        <motion.div variants={fadeInUp}>
          <Button variant="secondary" size="md" href="#menu">
            CHECK OUR MENUS
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
