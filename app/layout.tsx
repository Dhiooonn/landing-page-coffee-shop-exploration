import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

// display: "swap" supaya teks tetap muncul saat font belum selesai load
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://monkeycoffee.vercel.app";

export const viewport: Viewport = {
  themeColor: "#843919",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Monkey Coffee | Crafting Moments, One Cup at a Time",
  description: "Discover premium single-origin coffee, artisan lattes, cozy workspaces, and all-day dining at Monkey Coffee in Pontianak.",
  keywords: ["Monkey Coffee", "Coffee Shop", "Espresso", "Cold Brew", "Pontianak Cafe", "Artisan Coffee"],
  authors: [{ name: "Monkey Coffee Team" }],
  icons: {
    icon: "/logo.svg",
    shortcut: "/logo.svg",
    apple: "/logo.svg",
  },
  // Preview saat link dibagikan ke sosmed
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: siteUrl,
    title: "Monkey Coffee | Crafting Moments, One Cup at a Time",
    description: "Discover premium single-origin coffee, artisan lattes, cozy workspaces, and all-day dining at Monkey Coffee.",
    siteName: "Monkey Coffee",
    images: [
      {
        url: "/images/heroSection.webp",
        width: 1200,
        height: 630,
        alt: "Monkey Coffee Shop Interior",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Monkey Coffee | Crafting Moments, One Cup at a Time",
    description: "Discover premium single-origin coffee, artisan lattes, cozy workspaces, and all-day dining at Monkey Coffee.",
    images: ["/images/heroSection.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${inter.variable} ${playfairDisplay.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans text-body bg-background">{children}</body>
    </html>
  );
}
