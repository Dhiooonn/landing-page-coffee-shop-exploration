import { Coffee, Wifi, Heart, Clock } from "lucide-react";
import FeatureCard from "../../components/ui/FeatureCard";

const serveItems = [
  {
    icon: Coffee,
    title: "Crafted Beverages",
    description: "Every drink is meticulously crafted by our expert baristas using premium beans",
  },
  {
    icon: Wifi,
    title: "Cozy Workspace",
    description: "Fast WiFi, comfortable seating, and the perfect ambiance for productivity",
  },
  {
    icon: Heart,
    title: "All-Day Dining",
    description: "From breakfast pastries to evening treats, we've got you covered",
  },
  {
    icon: Clock,
    title: "Open Late",
    description: "Extended hours to accommodate your schedule and lifestyle",
  },
];

export default function ServeSection() {
  return (
    <section className="w-full bg-surface py-9 md:py-30 px-3 md:px-20 flex justify-center">
      <div className="w-full max-w-[1184px] flex flex-col items-center gap-12">
        <div className="flex flex-col items-center text-center gap-5">
          <span className="font-sans font-normal text-sm leading-5 tracking-[1.25px] uppercase text-accent">
            WHAT WE SERVE
          </span>
          <h2 className="font-serif font-medium text-2xl md:text-4xl leading-[150%] tracking-normal text-heading">
            More Than Coffee
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-9 md:gap-8 lg:gap-8 w-full justify-items-center">
          {serveItems.map((item, index) => (
            <FeatureCard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
