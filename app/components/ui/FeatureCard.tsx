import React from "react";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <div className="flex flex-col items-center text-center gap-[16px] max-w-[280px]">
      {/* Icon Wrapper */}
      <div className="w-[64px] h-[64px] rounded-full bg-surface-icon flex items-center justify-center text-primary mb-[8px]">
        <Icon className="w-6 h-6" strokeWidth={1.5} />
      </div>

      {/* Heading */}
      <h3 className="font-serif font-medium text-[20px] leading-[28px] text-heading">
        {title}
      </h3>

      {/* Description */}
      <p className="font-sans font-normal text-[14px] leading-[20px] text-body">
        {description}
      </p>
    </div>
  );
}
