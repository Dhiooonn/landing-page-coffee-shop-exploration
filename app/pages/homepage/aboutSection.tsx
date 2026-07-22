import React from "react";

export default function AboutSection() {
  return (
    <section className="w-full bg-surface py-[36px] md:py-30 px-3 md:px-20 flex justify-center">
      <div className="w-full max-w-[1184px] flex flex-col items-center justify-center text-center gap-6 md:gap-8">
        {/* Header Section dengan gap 12px antara Title dan Heading */}
        <div className="flex flex-col items-center gap-[12px]">
          {/* Section Title */}
          <span className="font-sans font-normal text-sm leading-5 tracking-[1.25px] uppercase text-accent">
            ABOUT US
          </span>

          {/* Heading */}
          <h2 className="font-serif font-medium text-2xl md:text-3xl lg:text-4xl leading-[130%] tracking-[0px] text-heading max-w-3xl">
            A place to connect, relax, <br className="hidden sm:inline" /> and create moments.
          </h2>
        </div>

        {/* Description */}
        <p className="font-sans font-normal text-sm md:text-base leading-6 md:leading-7 tracking-[0px] text-description max-w-[1000px]">
          At Monkey Coffee Coffee, we believe every cup is an invitation to slow down and savor life's simple pleasures. Whether you're meeting a friend, working on your next big idea, or simply enjoying a quiet moment alone, our doors are open to those who appreciate the art of a well-crafted brew and the warmth of genuine community.
        </p>
      </div>
    </section>
  );
}
