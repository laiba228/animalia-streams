import { useState, useEffect } from 'react';
import { Play, TrendingUp, Globe, Camera } from 'lucide-react';
import { Button } from './ui/button';
import heroImage from '../assets/hero-wildlife.jpg';

export const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const featuredStats = [
    { icon: TrendingUp, label: 'Trending', value: '2.3M views today' },
    { icon: Globe, label: 'Ecosystems', value: '150+ habitats' },
    { icon: Camera, label: 'Wildlife Experts', value: '500+ creators' }
  ];

  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden">
      {/* Background with Parallax Effect */}
      <div className="absolute inset-0">
        <img 
          src={heroImage}
          alt="Majestic Wildlife"
          className="w-full h-full object-cover scale-110 animate-float"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
      </div>

      {/* Floating Particles Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className={`space-y-8 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full border border-primary/20">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse-glow" />
              <span className="text-sm font-medium text-foreground">Now Streaming: Wildlife in 4K</span>
            </div>

            {/* Main Title */}
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-foreground via-primary-glow to-accent bg-clip-text text-transparent">
                  Welcome to
                </span>
                <br />
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Animalia Streams
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
                Explore the incredible world of Kingdom Animalia through stunning documentaries and wildlife encounters from every corner of our planet.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="group bg-gradient-primary hover:shadow-glow-primary transition-all duration-300 text-lg px-8 py-6 rounded-xl"
              >
                <Play className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform" />
                Watch Featured
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="glass border-primary/30 hover:bg-primary/10 hover:border-primary/50 text-lg px-8 py-6 rounded-xl transition-all duration-300"
              >
                Explore Categories
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-6 pt-8">
              {featuredStats.map((stat, index) => (
                <div 
                  key={stat.label}
                  className={`flex items-center gap-3 glass px-4 py-3 rounded-xl border border-glass-border/30 transition-all duration-500 hover:shadow-glow-primary ${
                    isVisible ? 'animate-fade-in' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="p-2 bg-gradient-primary rounded-lg">
                    <stat.icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                    <div className="font-semibold text-foreground">{stat.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};