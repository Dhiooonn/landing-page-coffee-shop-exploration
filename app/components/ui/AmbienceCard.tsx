import React from "react";
import Image from "next/image";

export interface AmbienceCardProps {
  src: string;
  alt: string;
  variant?: "primary" | "secondary";
  priority?: boolean;
  className?: string;
}

export default function AmbienceCard({
  src,
  alt,
  variant = "secondary",
  priority = false,
  className = "",
}: AmbienceCardProps) {
  const isPrimary = variant === "primary";

  // Specs: Mobile (288x288), Primary Desktop (784x784), Secondary Desktop (384x384)
  const sizeClasses = isPrimary
    ? "w-full max-w-[288px] md:max-w-[784px] aspect-square rounded-2xl"
    : "w-full max-w-[288px] md:max-w-[384px] aspect-square rounded-2xl";

  const sizesProp = isPrimary
    ? "(max-width: 768px) 288px, (max-width: 1280px) 66vw, 784px"
    : "(max-width: 768px) 288px, (max-width: 1280px) 33vw, 384px";

  return (
    <div className={`relative overflow-hidden group ${sizeClasses} ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizesProp}
        className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
      />
    </div>
  );
}
