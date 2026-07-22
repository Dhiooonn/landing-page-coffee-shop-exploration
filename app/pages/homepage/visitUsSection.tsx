import React from "react";
import Image from "next/image";

export default function VisitUsSection() {
  return (
    <section className="w-full py-[36px] md:py-24 lg:py-30 px-3 md:px-8 lg:px-20 flex justify-center bg-background">
      {/* Container Content: Stack kebawah di mobile dan tablet, side-by-side di desktop */}
      <div className="w-full max-w-[1184px] px-0 lg:px-[108px] flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12 lg:gap-16">
        {/* Information Column */}
        <div className="flex flex-col items-start gap-8 md:gap-10 lg:gap-12 text-left w-full max-w-[480px]">
          {/* Section Title & Heading */}
          <div className="flex flex-col items-start gap-[12px] md:gap-4 lg:gap-5">
            {/* Section Title */}
            <span className="font-sans font-normal text-sm leading-5 tracking-[1.25px] uppercase text-accent">
              VISIT US
            </span>

            {/* Heading */}
            <h2 className="font-serif font-medium text-2xl md:text-3xl lg:text-4xl leading-[130%] tracking-[0px] text-heading">
              Come say hello!
            </h2>
          </div>

          {/* Details List dengan gap 32px */}
          <div className="flex flex-col gap-8 w-full">
            {/* Address */}
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

            {/* Hours */}
            <div className="flex flex-col gap-2">
              <h4 className="font-sans font-normal text-xs leading-4 tracking-[0.6px] uppercase text-heading">
                HOURS
              </h4>
              <p className="font-sans font-normal text-sm leading-5 tracking-[-0.15px] text-description">
                Everyday: 06:00 AM - 02:00 AM
              </p>
            </div>

            {/* Contact */}
            <div className="flex flex-col gap-2">
              <h4 className="font-sans font-normal text-xs leading-4 tracking-[0.6px] uppercase text-heading">
                CONTACT
              </h4>
              <p className="font-sans font-normal text-sm leading-5 tracking-[-0.15px] text-description">
                +628 1234 5678 90
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Image (Mobile: 288x341px, Tablet: 400x520px/480x560px, Desktop: 480x714px) */}
        <div className="relative w-full max-w-[288px] h-[341.33px] sm:max-w-[400px] sm:h-[480px] md:max-w-[480px] md:h-[560px] lg:max-w-[480px] lg:h-[714.66px] rounded-2xl overflow-hidden shrink-0">
          <Image
            src="/images/ambience/ambience-5.webp"
            alt="Monkey Grounds Coffee Sign"
            fill
            sizes="(max-width: 640px) 288px, (max-width: 1024px) 480px, 480px"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
