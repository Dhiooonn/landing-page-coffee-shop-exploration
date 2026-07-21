import React from "react";
import { Button } from "../../components/ui/Button";

export default function HeroSection() {
  return (
    <section className="relative w-full h-[800px] min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image & Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/heroSection.webp')",
        }}
      >
        {/* Overlay gelap agar teks putih lebih terbaca */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Konten Hero */}
      <div className="relative z-10 flex flex-col items-center text-center px-4">
        {/* Heading */}
        <h1 className="font-serif font-medium text-[52px] leading-[60px] text-white">
          Find Your Coffee, Bar &<br />
          Dining Escape
        </h1>

        {/* Text Deskripsi */}
        <p className="font-sans font-normal text-xl leading-7 text-white/90 mt-6 max-w-2xl">
          A cozy space to sip, work, and connect.
        </p>

        {/* Button */}
        <Button className="mt-10" variant="secondary" size="md">
          CHECK OUR MENUS
        </Button>
      </div>
    </section>
  );
}
