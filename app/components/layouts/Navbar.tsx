"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Button } from "../ui/Button";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 20);
  });

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 w-full z-50 px-4 md:px-20 flex justify-center transition-all duration-300 ease-out ${
        isScrolled
          ? "bg-background/85 backdrop-blur-md border-b border-neutral-200/60 shadow-xs py-2 md:py-2.5"
          : "bg-background border-b border-neutral-100 py-3 md:py-4"
      }`}
    >
      <div className="w-full max-w-[1184px] flex items-center justify-between">
        <Link
          href="/"
          aria-label="Monkey Coffee — Kembali ke halaman utama"
          className="flex items-center group"
        >
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <Image
              src="/logo.svg"
              alt="Monkey Coffee Logo"
              width={180}
              height={60}
              priority
              className="h-10 md:h-15 w-auto transition-all duration-300"
            />
          </motion.div>
        </Link>
        <motion.div
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          <Button variant="primary" size="sm" href="#visit">
            Visit Us
          </Button>
        </motion.div>
      </div>
    </motion.header>
  );
}
