import { VideoCard } from './VideoCard';
import { Button } from './ui/button';
import { ChevronRight, TrendingUp } from 'lucide-react';
import birdsImage from '../assets/birds-tropical.jpg';
import oceanImage from '../assets/ocean-dolphins.jpg';
import leopardImage from '../assets/snow-leopard.jpg';

const categories = [
  {
    title: 'Trending Wildlife',
    description: 'Most watched animal documentaries this week',
    icon: TrendingUp,
    videos: [
      {
        id: '1',
        title: 'Tropical Birds of the Amazon Rainforest',
        thumbnail: birdsImage,
        duration: '42:15',
        views: '2.3M',
        likes: '98K',
        channel: 'Wildlife Explorer',
        category: 'Birds'
      },
      {
        id: '2', 
        title: 'Ocean Giants: The Secret Life of Dolphins',
        thumbnail: oceanImage,
        duration: '38:22',
        views: '1.8M',
        likes: '76K',
        channel: 'Deep Blue Films',
        category: 'Marine'
      },
      {
        id: '3',
        title: 'Snow Leopards: Ghosts of the Mountains',
        thumbnail: leopardImage,
        duration: '35:48',
        views: '1.2M',
        likes: '65K',
        channel: 'Mountain Wildlife',
        category: 'Big Cats'
      }
    ]
  }
];

export const CategorySection = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {categories.map((category, categoryIndex) => (
        <div key={category.title} className="mb-16">
          {/* Category Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-gradient-primary rounded-xl shadow-glow-primary">
                <category.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-1">
                  {category.title}
                </h2>
                <p className="text-muted-foreground">
                  {category.description}
                </p>
              </div>
            </div>
            
            <Button 
              variant="ghost" 
              className="group hover:bg-primary/10 transition-all duration-300"
            >
              View All
              <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Video Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {category.videos.map((video, index) => (
              <div
                key={video.id}
                className="animate-fade-in"
                style={{ 
                  animationDelay: `${categoryIndex * 0.2 + index * 0.1}s`,
                  animationFillMode: 'both'
                }}
              >
                <VideoCard {...video} />
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};