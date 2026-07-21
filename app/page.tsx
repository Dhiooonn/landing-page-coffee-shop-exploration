import MainLayout from "./components/layouts/MainLayout";
import HeroSection from "./pages/homepage/heroSection";
import AboutSection from "./pages/homepage/aboutSection";
import ServeSection from "./pages/homepage/serveSection";
import SocialProofSection from "./pages/homepage/socialProof";
import MenuSection from "./pages/homepage/menuSection";

export default function Home() {
  return (
    <MainLayout>
      <HeroSection />
      <SocialProofSection />
      <MenuSection />
      <ServeSection />
      <AboutSection />
    </MainLayout>
  );
}
