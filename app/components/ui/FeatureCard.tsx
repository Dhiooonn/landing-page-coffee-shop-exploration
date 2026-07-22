import React from "react";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <div className="flex flex-col items-center text-center gap-[20px] w-full max-w-[280px]">
      {/* Icon Wrapper */}
      <div className="w-[48px] h-[48px] md:w-[64px] md:h-[64px] rounded-full bg-surface-icon flex items-center justify-center text-primary shrink-0">
        <Icon className="w-6 h-6 md:w-8 md:h-8" strokeWidth={1.5} />
      </div>

      {/* Content Container dengan gap 16px */}
      <div className="flex flex-col items-center text-center gap-[16px]">
        {/* Heading */}
        <h3 className="font-serif font-medium text-[18px] leading-[150%] tracking-[0px] text-heading text-center">
          {title}
        </h3>

        {/* Description */}
        <p className="font-sans font-normal text-sm leading-[22.75px] tracking-[-0.15px] text-body text-center">
          {description}
        </p>
      </div>
    </div>
  );
}
