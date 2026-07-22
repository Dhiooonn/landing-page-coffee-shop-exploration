import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-heading py-[36px] md:py-30 px-4 md:px-20 flex justify-center text-white">
      <div className="w-full max-w-[1184px] flex flex-col gap-[48px] lg:gap-12">
        {/* Main Footer Content: justify-between di desktop, flex-col di mobile & tablet */}
        <div className="flex flex-col lg:flex-row justify-between items-start w-full gap-[48px] lg:gap-8">
          {/* Brand Info Column: 1 container gap 12px dengan pb 25px */}
          <div className="flex flex-col items-start gap-[12px] pb-[25px] lg:pb-0 border-b border-white/10 lg:border-b-0 w-full lg:w-auto max-w-sm">
            {/* Judul: Playfair Display, 400, 36px, leading 120%, tracking 0px */}
            <h3 className="font-serif font-normal text-[36px] leading-[120%] tracking-[0px] text-white">
              Monkey Coffee
            </h3>

            {/* Deskripsi: Inter, 400, 12px, leading 16px, tracking 0px */}
            <p className="font-sans font-normal text-xs leading-4 tracking-[0px] text-white/70">
              Crafting moments, one cup at a time.
            </p>
          </div>

          {/* Menu Column */}
          <div className="flex flex-col items-start gap-[16px]">
            {/* Nav Item Judul: Inter, 500, 12px, leading 16px, tracking 0.6px, uppercase */}
            <span className="font-sans font-medium text-xs leading-4 tracking-[0.6px] uppercase text-white">
              MENU
            </span>

            {/* Nav Item List: Inter, 400, 12px, leading 16px, tracking 0px, list gap 8px */}
            <ul className="flex flex-col gap-[8px] font-sans font-normal text-xs leading-4 tracking-[0px] text-white">
              <li>
                <Link href="#signatures" className="hover:text-white/80 transition-colors">
                  Our Signatures
                </Link>
              </li>
              <li>
                <Link href="#non-coffee" className="hover:text-white/80 transition-colors">
                  Non Coffee
                </Link>
              </li>
              <li>
                <Link href="#food" className="hover:text-white/80 transition-colors">
                  Food
                </Link>
              </li>
              <li>
                <Link href="#pastry" className="hover:text-white/80 transition-colors">
                  Pastry
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect Column */}
          <div className="flex flex-col items-start gap-[16px]">
            {/* Nav Item Judul */}
            <span className="font-sans font-medium text-xs leading-4 tracking-[0.6px] uppercase text-white">
              CONNECT
            </span>

            {/* Nav Item List */}
            <ul className="flex flex-col gap-[8px] font-sans font-normal text-xs leading-4 tracking-[0px] text-white">
              <li>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white/80 transition-colors">
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-white/80 transition-colors">
                  Facebook
                </a>
              </li>
              <li>
                <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="hover:text-white/80 transition-colors">
                  Whatsapp
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider & Copyright */}
        <div className="w-full pt-[24px] border-t border-white/10 flex items-center justify-between">
          <p className="font-sans font-normal text-xs leading-4 tracking-[0px] text-white/60">
            © 2026 Monkey Coffee. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
