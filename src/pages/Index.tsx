import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { CategorySection } from '@/components/CategorySection';
import { FloatingAnimalFact } from '@/components/FloatingAnimalFact';

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <Navbar />
      <HeroSection />
      <CategorySection />
      <FloatingAnimalFact />
    </div>
  );
};

export default Index;
