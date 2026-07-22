"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface MenuCardProps {
  imageSrc: string;
  category: string;
  title: string;
  description: string;
}

export default function MenuCard({ imageSrc, category, title, description }: MenuCardProps) {
  return (
    <motion.div
      className="flex flex-col w-full max-w-[400px] gap-4 cursor-pointer"
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Gambar dengan efek zoom saat hover */}
      <div className="relative w-full aspect-[400/467] max-h-[467px] rounded-2xl overflow-hidden">
        <motion.div
          className="absolute inset-0"
          whileHover={{ scale: 1.06 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src={imageSrc}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 400px"
            className="object-cover"
          />
        </motion.div>
      </div>

      <div className="flex flex-col gap-2 text-left">
        <span className="font-sans font-normal text-xs leading-[150%] tracking-[1.25px] uppercase text-accent">
          {category}
        </span>
        <h3 className="font-serif font-medium text-xl leading-7 tracking-normal text-heading">
          {title}
        </h3>
        <p className="font-sans font-normal text-sm leading-[19.5px] tracking-normal text-body">
          {description}
        </p>
      </div>
    </motion.div>
  );
}
