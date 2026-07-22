import MainLayout from "./components/layouts/MainLayout";
import HeroSection from "./pages/homepage/heroSection";
import AboutSection from "./pages/homepage/aboutSection";
import ServeSection from "./pages/homepage/serveSection";
import SocialProofSection from "./pages/homepage/socialProofSection";
import MenuSection from "./pages/homepage/menuSection";
import AmbienceSection from "./pages/homepage/ambienceSection";
import VisitUsSection from "./pages/homepage/visitUsSection";

export default function Home() {
  return (
    <MainLayout>
      <HeroSection />
      <SocialProofSection />
      <MenuSection />
      <ServeSection />
      <AmbienceSection />
      <AboutSection />
      <VisitUsSection />
    </MainLayout>
  );
}
