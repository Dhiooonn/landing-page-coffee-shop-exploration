import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/Button";

export default function Navbar() {
  return (
    <header className="w-full bg-background sticky top-0 z-50 border-b border-neutral-100 px-4 md:px-20 flex justify-center">
      <div className="w-full max-w-[1184px] py-3 md:py-4 flex items-center justify-between">
        <Link href="/" aria-label="Monkey Coffee — Kembali ke halaman utama" className="flex items-center">
          <Image
            src="/logo.svg"
            alt="Monkey Coffee Logo"
            width={180}
            height={60}
            priority
            className="h-10 md:h-15 w-auto"
          />
        </Link>
        <Button variant="primary" size="sm" href="#visit">
          Visit Us
        </Button>
      </div>
    </header>
  );
}
