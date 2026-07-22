import Image from "next/image";

interface MenuCardProps {
  imageSrc: string;
  category: string;
  title: string;
  description: string;
}

export default function MenuCard({ imageSrc, category, title, description }: MenuCardProps) {
  return (
    <div className="flex flex-col w-full max-w-[400px] gap-4">
      <div className="relative w-full aspect-[400/467] max-h-[467px] rounded-2xl overflow-hidden">
        <Image
          src={imageSrc}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 400px"
          className="object-cover"
        />
      </div>
      <div className="flex flex-col gap-2 text-left">
        <span className="font-sans font-normal text-xs leading-[150%] tracking-[1.25px] uppercase text-accent">
          {category}
        </span>
        <h3 className="font-serif font-medium text-xl leading-7 tracking-normal text-heading">
          {title}
        </h3>
        <p className="font-sans font-normal text-sm leading-[19.5px] tracking-normal text-body">
          {description}
        </p>
      </div>
    </div>
  );
}
