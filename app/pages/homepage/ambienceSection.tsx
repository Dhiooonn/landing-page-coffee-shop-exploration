import AmbienceCard from "../../components/ui/AmbienceCard";

export default function AmbienceSection() {
  return (
    <section className="w-full py-9 md:py-30 px-3 md:px-20 flex justify-center bg-surface">
      <div className="w-full max-w-[1184px] flex flex-col gap-8 md:gap-12">
        <div className="flex flex-col items-start text-left gap-6 max-w-2xl">
          <div className="flex flex-col items-start text-left gap-3">
            <span className="font-sans font-normal text-sm leading-5 tracking-[1.25px] uppercase text-accent">
              AMBIENCE
            </span>
            <h2 className="font-serif font-medium text-2xl md:text-[44px] leading-[120%] tracking-normal text-heading">
              Where Moments Happen
            </h2>
          </div>
          <p className="font-sans font-normal text-sm md:text-base leading-6 md:leading-[26px] text-description">
            A space designed for those who appreciate the finer details. From the natural light that fills our space to the carefully curated seating arrangements, every element is crafted to create an atmosphere of comfort and inspiration.
          </p>
        </div>

        <div className="flex flex-col gap-4 w-full">
          {/* Baris atas: 1 foto besar + 2 foto kecil bertumpuk */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full justify-items-center md:justify-items-stretch items-start">
            <div className="md:col-span-2 w-full flex justify-center">
              <AmbienceCard
                src="/images/ambience/ambience-1.webp"
                alt="Cozy coffee shop interior with warm natural lighting"
                variant="primary"
                priority
              />
            </div>
            <div className="md:col-span-1 flex flex-col gap-4 w-full items-center">
              <AmbienceCard
                src="/images/ambience/ambience-2.webp"
                alt="Overhead view of coffee cups with latte art"
                variant="secondary"
              />
              <AmbienceCard
                src="/images/ambience/ambience-3.webp"
                alt="Sunlit greenhouse cafe filled with plants"
                variant="secondary"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full justify-items-center">
            <AmbienceCard
              src="/images/ambience/ambience-6.webp"
              alt="Cozy coffee shop storefront at night"
              variant="secondary"
            />
            <AmbienceCard
              src="/images/ambience/ambience-5.webp"
              alt="Vintage coffee roasters storefront window"
              variant="secondary"
            />
            <AmbienceCard
              src="/images/ambience/ambience-4.webp"
              alt="Modern coffee shop bar counter with stools"
              variant="secondary"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
