import React from "react";
import AmbienceCard from "../../components/ui/AmbienceCard";

export default function AmbienceSection() {
  return (
    <section className="w-full py-[36px] md:py-30 px-3 md:px-20 flex justify-center bg-surface">
      <div className="w-full max-w-[1184px] flex flex-col gap-8 md:gap-12">
        {/* Header Section dengan gap 24px antara title group dan deskripsi */}
        <div className="flex flex-col items-start text-left gap-6 max-w-2xl">
          {/* Title & Heading Group dengan gap 12px */}
          <div className="flex flex-col items-start text-left gap-[12px]">
            {/* Section Tag */}
            <span className="font-sans font-normal text-sm leading-5 tracking-[1.25px] uppercase text-accent">
              AMBIENCE
            </span>

            {/* Heading */}
            <h2 className="font-serif font-medium text-2xl md:text-[44px] leading-[120%] tracking-[0px] text-heading">
              Where Moments Happen
            </h2>
          </div>

          {/* Description */}
          <p className="font-sans font-normal text-sm md:text-base leading-6 md:leading-[26px] text-description">
            A space designed for those who appreciate the finer details. From the natural light that fills our space to the carefully curated seating arrangements, every element is crafted to create an atmosphere of comfort and inspiration.
          </p>
        </div>

        {/* Gallery Grid dengan gap antar card 16px (gap-4) */}
        <div className="flex flex-col gap-4 w-full">
          {/* Top Row: Primary Card (col-span-2) + 2 Stacked Secondary Cards (col-span-1) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full justify-items-center md:justify-items-stretch items-start">
            {/* Primary Card (784x784 max) */}
            <div className="md:col-span-2 w-full flex justify-center">
              <AmbienceCard
                src="/images/ambience/ambience-1.webp"
                alt="Cozy coffee shop interior with warm natural lighting"
                variant="primary"
                priority
              />
            </div>

            {/* Stacked Secondary Cards (384x384 max each) */}
            <div className="md:col-span-1 flex flex-col gap-4 w-full items-center">
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
            </div>
          </div>

          {/* Bottom Row: 3 Secondary Cards (384x384 max each) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full justify-items-center">
            <AmbienceCard
              src="/images/ambience/ambience-6.webp"
              alt="Cozy coffee shop storefront at night"
              variant="secondary"
            />
            <AmbienceCard
              src="/images/ambience/ambience-5.webp"
              alt="Vintage coffee roasters storefront window"
              variant="secondary"
            />
            <AmbienceCard
              src="/images/ambience/ambience-4.webp"
              alt="Modern coffee shop bar counter with stools"
              variant="secondary"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
