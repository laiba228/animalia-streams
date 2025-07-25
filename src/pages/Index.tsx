import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { CategorySection } from '@/components/CategorySection';
import { FloatingAnimalFact } from '@/components/FloatingAnimalFact';
import { videos } from '../data/videos';
import { VideoCard } from '../components/VideoCard';

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <Navbar />
      <HeroSection />
      <CategorySection />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-white flex items-center gap-3">
          🔥 Trending Animal Videos
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {videos.map(video => (
            <VideoCard key={video.id} {...video} />
          ))}
        </div>
      </div>
      <FloatingAnimalFact />
    </div>
  );
};

export default Index;
