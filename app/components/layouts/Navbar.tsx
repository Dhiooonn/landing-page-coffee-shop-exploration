import Image from "next/image";
import { Button } from "../ui/Button";

export default function Navbar() {
  return (
    <header className="w-full bg-background sticky top-0 z-50 shadow-sm">
      {/* Container untuk content nav menu */}
      <div className="mx-[128px] my-[10px] flex items-center justify-between">
        
        {/* Logo Section */}
        <div className="flex items-center cursor-pointer">
          <Image 
            src="/logo.svg" 
            alt="Coffee Shop Logo" 
            width={180} 
            height={60} 
            priority
            className="h-[60px] w-auto"
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
