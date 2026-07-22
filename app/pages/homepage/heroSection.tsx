import { Button } from "../../components/ui/Button";

export default function HeroSection() {
  return (
    <section className="relative w-full h-[800px] min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/heroSection.webp')" }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-3xl gap-6">
        <h1 className="font-serif font-medium text-4xl leading-[150%] md:text-5xl md:leading-tight lg:text-[52px] tracking-normal text-white">
          Find Your Coffee, Bar &<br className="hidden sm:inline" />
          {" "}Dining Escape
        </h1>
        <p className="font-sans font-normal text-base leading-7 md:text-xl md:leading-7 tracking-[-0.45px] text-white/90 max-w-2xl">
          A cozy space to sip, work, and connect.
        </p>
        <Button variant="secondary" size="md">
          CHECK OUR MENUS
        </Button>
      </div>
    </section>
  );
}
