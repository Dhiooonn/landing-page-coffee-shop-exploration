import React from "react";
import MenuCard from "../../components/ui/MenuCard";
import { Button } from "../../components/ui/Button";

export default function MenuSection() {
  const menuItems = [
    {
      imageSrc: "/images/menus/imageMenu-1.webp",
      category: "COFFEE",
      title: "Classic Espresso",
      description: "Rich, bold, and perfectly balanced single-origin espresso",
    },
    {
      imageSrc: "/images/menus/imageMenu-2.webp",
      category: "COFFEE",
      title: "Signature Latte",
      description: "Smooth espresso with velvety steamed milk and latte art",
    },
    {
      imageSrc: "/images/menus/imageMenu-3.webp",
      category: "COFFEE",
      title: "Artisan Cappuccino",
      description: "Perfect harmony of espresso, steamed milk, and foam",
    },
    {
      imageSrc: "/images/menus/imageMenu-4.webp",
      category: "SIGNATURE",
      title: "Cold Brew Delight",
      description: "Smooth, naturally sweet cold-brewed for 24 hours",
    },
    {
      imageSrc: "/images/menus/imageMenu-5.webp",
      category: "SIGNATURE",
      title: "Vanilla Bean Latte",
      description: "House-made vanilla bean syrup with premium espresso",
    },
    {
      imageSrc: "/images/menus/imageMenu-6.webp",
      category: "NON-COFFEE",
      title: "Mocha Indulgence",
      description: "Rich chocolate with steamed milk and whipped cream",
    },
  ];

  return (
    <section className="w-full py-[36px] md:py-30 px-3 md:px-20 flex justify-center">
      <div className="w-full max-w-[1184px] flex flex-col gap-12 items-center">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center gap-5">
          {/* Section Title */}
          <span className="font-sans font-normal text-sm leading-5 tracking-[1.25px] uppercase text-accent">
            OUR CRAFT
          </span>

          {/* Heading */}
          <h2 className="font-serif font-medium text-2xl md:text-4xl leading-[150%] tracking-[0px] text-heading">
            Highlighted Signature
          </h2>

          {/* Deskripsi */}
          <p className="font-sans font-normal text-sm md:text-base leading-[28px] tracking-[-0.15px] text-body max-w-lg text-center">
            From classic espresso to signature blends, each cup tells a story
          </p>
        </div>

        {/* Grid Card Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 w-full justify-items-center">
          {menuItems.map((item, index) => (
            <MenuCard key={index} {...item} />
          ))}
        </div>

        {/* Action Button */}
        <Button variant="primary" size="lg">
          Explore Full Menu
        </Button>
      </div>
    </section>
  );
}
