import React from "react";
import { Star } from "lucide-react";

export default function SocialProofSection() {
  return (
    <section className="w-full py-[80px] md:py-[139px] px-4 md:px-[128px] flex flex-col items-center justify-center text-center gap-4">
      {/* Star icons */}
      <div className="flex items-center gap-1 text-accent">
        {[...Array(5)].map((_, index) => (
          <Star key={index} className="w-6 h-6 fill-current" />
        ))}
      </div>

      {/* Heading */}
      <h2 className="font-serif font-medium text-[36px] leading-[150%] tracking-normal text-heading">
        Loved by Coffee Lovers & Creatives
      </h2>

      {/* Deskripsi */}
      <p className="font-sans font-normal text-[16px] leading-[24px] tracking-[-0.31px] text-body">
        Top-rated hangout spot in the city
      </p>
    </section>
  );
}
