import { HeroSection } from "@/components/HeroSection";
import { WaitlistSection } from "@/components/WaitlistSection";


const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <HeroSection />
        <WaitlistSection />
      </main>
    </div>
  );
};

export default Index;
