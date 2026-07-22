import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen w-full">
      {/* Navbar Component */}
      <Navbar />

      <main className="flex-grow w-full">
        {children}
      </main>

      {/* Footer Component */}
      <Footer />
    </div>
  );
}
