"use client";

import { motion } from "framer-motion";
import MenuCard from "../../components/ui/MenuCard";
import { Button } from "../../components/ui/Button";
import {
  fadeInUp,
  staggerContainer,
  staggerItem,
  viewportConfig,
} from "../../components/ui/motionVariants";

const menuItems = [
  {
    imageSrc: "/images/menus/imageMenu-1.webp",
    category: "COFFEE",
    title: "Classic Espresso",
    description: "Rich, bold, and perfectly balanced single-origin espresso",
  },
  {
    imageSrc: "/images/menus/imageMenu-2.webp",
    category: "COFFEE",
    title: "Signature Latte",
    description: "Smooth espresso with velvety steamed milk and latte art",
  },
  {
    imageSrc: "/images/menus/imageMenu-3.webp",
    category: "COFFEE",
    title: "Artisan Cappuccino",
    description: "Perfect harmony of espresso, steamed milk, and foam",
  },
  {
    imageSrc: "/images/menus/imageMenu-4.webp",
    category: "SIGNATURE",
    title: "Cold Brew Delight",
    description: "Smooth, naturally sweet cold-brewed for 24 hours",
  },
  {
    imageSrc: "/images/menus/imageMenu-5.webp",
    category: "SIGNATURE",
    title: "Vanilla Bean Latte",
    description: "House-made vanilla bean syrup with premium espresso",
  },
  {
    imageSrc: "/images/menus/imageMenu-6.webp",
    category: "NON-COFFEE",
    title: "Mocha Indulgence",
    description: "Rich chocolate with steamed milk and whipped cream",
  },
];

export default function MenuSection() {
  return (
    <section id="menu" className="w-full py-9 md:py-30 px-4 md:px-20 flex justify-center">
      <div className="w-full max-w-[1184px] flex flex-col gap-12 items-center">
        {/* Header section fade-in */}
        <motion.div
          className="flex flex-col items-center text-center gap-5"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <motion.span
            className="font-sans font-normal text-sm leading-5 tracking-[1.25px] uppercase text-accent"
            variants={fadeInUp}
          >
            OUR CRAFT
          </motion.span>
          <motion.h2
            className="font-serif font-medium text-2xl md:text-4xl leading-[150%] tracking-normal text-heading"
            variants={fadeInUp}
          >
            Highlighted Signature
          </motion.h2>
          <motion.p
            className="font-sans font-normal text-sm md:text-base leading-7 tracking-[-0.15px] text-body max-w-lg text-center"
            variants={fadeInUp}
          >
            From classic espresso to signature blends, each cup tells a story
          </motion.p>
        </motion.div>

        {/* Card grid muncul bergantian */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 w-full justify-items-center"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {menuItems.map((item, index) => (
            <motion.div key={index} variants={staggerItem} className="w-full flex justify-center">
              <MenuCard {...item} />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportConfig}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <Button variant="primary" size="lg" href="#menu">
            Explore Full Menu
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
