import React from "react";
import Navbar from "./Navbar";

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

      {/* Tempat untuk Footer nantinya */}
      {/* <Footer /> */}
    </div>
  );
}
