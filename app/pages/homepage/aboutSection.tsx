import React from "react";

export default function AboutSection() {
  return (
    <section className="w-full bg-surface py-[80px] md:py-[120px] px-4 md:px-[80px] flex flex-col items-center justify-center text-center gap-7">
      {/* Header Section */}
      <div className="flex flex-col items-center gap-5">
        {/* Section Title */}
        <span className="font-sans font-normal text-sm leading-5 tracking-[1.25px] uppercase text-accent">
          ABOUT US
        </span>
        
        {/* Heading */}
        <h2 className="font-serif font-medium text-[36px] leading-[130%] tracking-[0px] text-heading max-w-3xl">
          A place to connect, relax, <br /> and create moments.
        </h2>
      </div>

      {/* Description */}
      <p className="font-sans font-normal text-sm leading-[28px] tracking-[0px] text-body max-w-[1000px]">
        At Monkey Coffee Coffee, we believe every cup is an invitation to slow down and savor life's simple pleasures. Whether you're meeting a friend, working on your next big idea, or simply enjoying a quiet moment alone, our doors are open to those who appreciate the art of a well-crafted brew and the warmth of genuine community.
      </p>
    </section>
  );
}
