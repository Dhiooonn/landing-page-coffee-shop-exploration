import Image from "next/image";
import { Button } from "../ui/Button";

export default function Navbar() {
  return (
    <header className="w-full bg-background sticky top-0 z-50 shadow-sm px-4 md:px-20 flex justify-center">
      {/* Container untuk content nav menu */}
      <div className="w-full max-w-[1184px] my-2.5 flex items-center justify-between">
        
        {/* Logo Section */}
        <div className="flex items-center cursor-pointer">
          <Image 
            src="/logo.svg" 
            alt="Coffee Shop Logo" 
            width={180} 
            height={60} 
            priority
            className="h-15 w-auto"
          />
        </div>

        {/* Action Button */}
        <Button variant="primary" size="sm">
          Visit Us
        </Button>

      </div>
    </header>
  );
}
