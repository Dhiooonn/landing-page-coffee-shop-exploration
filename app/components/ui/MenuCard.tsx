import React from "react";
import Image from "next/image";

interface MenuCardProps {
  imageSrc: string;
  category: string;
  title: string;
  description: string;
}

export default function MenuCard({ imageSrc, category, title, description }: MenuCardProps) {
  return (
    <div className="flex flex-col w-full max-w-[400px] gap-4">
      {/* Image Container */}
      <div className="relative w-full aspect-[400/467] max-h-[467px] rounded-2xl overflow-hidden">
        <Image
          src={imageSrc}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 400px"
          className="object-cover"
        />
      </div>

      {/* Content Container dengan gap 9px */}
      <div className="flex flex-col gap-[9px] text-left">
        {/* Title Card (Category) */}
        <span className="font-sans font-normal text-xs leading-[150%] tracking-[1.25px] uppercase text-accent">
          {category}
        </span>
        
        {/* Heading (20px) */}
        <h3 className="font-serif font-medium text-xl leading-7 tracking-[0px] text-heading">
          {title}
        </h3>
        
        {/* Deskripsi (14px) */}
        <p className="font-sans font-normal text-sm leading-[19.5px] tracking-[0px] text-body">
          {description}
        </p>
      </div>
    </div>
  );
}
