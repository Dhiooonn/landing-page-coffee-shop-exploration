import { Star } from "lucide-react";

export default function SocialProofSection() {
  return (
    <section className="w-full py-9 md:py-30 px-4 md:px-20 flex flex-col items-center justify-center text-center gap-3">
      <div className="flex items-center gap-2 text-accent">
        {[...Array(5)].map((_, index) => (
          <Star key={index} className="w-5 h-5 fill-current" />
        ))}
      </div>
      <h2 className="font-serif font-medium text-2xl leading-[150%] md:text-4xl md:leading-[150%] tracking-normal text-heading">
        Loved by Coffee Lovers & Creatives
      </h2>
      <p className="font-sans font-normal text-sm leading-7 md:text-base md:leading-7 tracking-[-0.15px] text-body">
        Top-rated hangout spot in the city
      </p>
    </section>
  );
}
