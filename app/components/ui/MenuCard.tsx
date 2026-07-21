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
    <div className="flex flex-col w-full max-w-[400px] gap-[16px]">
      {/* Image Container */}
      <div className="relative w-full aspect-[400/467] max-h-[466.65px] rounded-[16px] overflow-hidden">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      {/* Content Container dengan gap 9px */}
      <div className="flex flex-col gap-[9px] text-left">
        {/* Title Card (Category) */}
        <span className="font-sans font-normal text-[12px] leading-[150%] tracking-[1.25px] uppercase text-accent">
          {category}
        </span>
        
        {/* Heading */}
        <h3 className="font-serif font-medium text-[20px] leading-[28px] tracking-[0px] text-heading">
          {title}
        </h3>
        
        {/* Deskripsi */}
        <p className="font-sans font-normal text-[14px] leading-[19.5px] tracking-[0px] text-body">
          {description}
        </p>
      </div>
    </div>
  );
}
