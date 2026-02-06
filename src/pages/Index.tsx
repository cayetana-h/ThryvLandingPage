import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { ScienceSection } from "@/components/ScienceSection";
import { AboutSection } from "@/components/AboutSection";
import { WaitlistSection } from "@/components/WaitlistSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <BenefitsSection />
        <ScienceSection />
        <AboutSection />
        <WaitlistSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
