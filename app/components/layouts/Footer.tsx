import Link from "next/link";

interface NavLink {
  label: string;
  href: string;
}

interface NavColumn {
  title: string;
  links: NavLink[];
}

// Pisah data dari tampilan supaya gampang diupdate tanpa nyentuh JSX
const navColumns: NavColumn[] = [
  {
    title: "MENU",
    links: [
      { label: "Our Signatures", href: "#menu" },
      { label: "Non Coffee", href: "#menu" },
      { label: "Food", href: "#menu" },
      { label: "Pastry", href: "#menu" },
    ],
  },
  {
    title: "CONNECT",
    links: [
      { label: "Instagram", href: "https://instagram.com" },
      { label: "Facebook", href: "https://facebook.com" },
      { label: "Whatsapp", href: "https://wa.me/" },
    ],
  },
];

// Link eksternal pakai <a> dengan target="_blank", internal pakai <Link>
const isExternalLink = (href: string) => href.startsWith("http");

export default function Footer() {
  return (
    <footer className="w-full bg-heading py-9 md:py-30 px-4 md:px-20 flex justify-center text-white">
      <div className="w-full max-w-[1184px] flex flex-col gap-12">
        <div className="flex flex-col lg:flex-row justify-between items-start w-full gap-12 lg:gap-8">
          {/* Brand */}
          <div className="flex flex-col items-start gap-3 pb-6 lg:pb-0 border-b border-white/10 lg:border-b-0 w-full lg:w-auto max-w-sm">
            <h3 className="font-serif font-normal text-4xl leading-[120%] tracking-normal text-white">
              Monkey Coffee
            </h3>
            <p className="font-sans font-normal text-xs leading-4 tracking-normal text-white/70">
              Crafting moments, one cup at a time.
            </p>
          </div>

          {navColumns.map((col) => (
            <div key={col.title} className="flex flex-col items-start gap-4">
              <span className="font-sans font-medium text-xs leading-4 tracking-[0.6px] uppercase text-white">
                {col.title}
              </span>
              <ul className="flex flex-col gap-2 font-sans font-normal text-xs leading-4 tracking-normal text-white">
                {col.links.map((link) => (
                  <li key={link.href}>
                    {isExternalLink(link.href) ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white/80 transition-colors"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link href={link.href} className="hover:text-white/80 transition-colors">
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="w-full pt-6 border-t border-white/10 flex items-center justify-between">
          <p className="font-sans font-normal text-xs leading-4 tracking-normal text-white/60">
            © {new Date().getFullYear()} Monkey Coffee. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
