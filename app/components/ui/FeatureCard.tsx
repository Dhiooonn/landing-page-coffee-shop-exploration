import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <div className="flex flex-col items-center text-center gap-5 w-full max-w-[280px]">
      {/* Mobile: 48px, Desktop: 64px */}
      <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-surface-icon flex items-center justify-center text-primary shrink-0">
        <Icon className="w-6 h-6 md:w-8 md:h-8" strokeWidth={1.5} />
      </div>
      <div className="flex flex-col items-center text-center gap-4">
        <h3 className="font-serif font-medium text-lg leading-[150%] tracking-normal text-heading text-center">
          {title}
        </h3>
        <p className="font-sans font-normal text-sm leading-[22.75px] tracking-[-0.15px] text-body text-center">
          {description}
        </p>
      </div>
    </div>
  );
}
