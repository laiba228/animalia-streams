import { useState, useEffect } from 'react';
import { X, Sparkles } from 'lucide-react';
import { Button } from './ui/button';

const animalFacts = [
  "Dolphins have names for each other - they use unique whistle signatures to identify themselves!",
  "Snow leopards can't roar! Instead, they chuff, grunt, and mew like domestic cats.",
  "A group of flamingos is called a 'flamboyance' - and they can only eat with their heads upside down!",
  "Octopuses have three hearts and blue blood - two hearts pump blood to the gills!",
  "Tigers have striped skin, not just striped fur - each pattern is unique like fingerprints!",
  "Hummingbirds are the only birds that can fly backwards and hover in place like helicopters!",
  "Elephants can 'hear' with their feet - they detect vibrations from miles away through the ground!"
];

export const FloatingAnimalFact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentFact, setCurrentFact] = useState('');
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const showFact = () => {
      const randomFact = animalFacts[Math.floor(Math.random() * animalFacts.length)];
      setCurrentFact(randomFact);
      setIsVisible(true);
      setIsAnimating(true);
      
      // Auto hide after 8 seconds
      setTimeout(() => {
        handleClose();
      }, 8000);
    };

    // Show first fact after 3 seconds
    const initialTimer = setTimeout(showFact, 3000);
    
    // Show new facts every 30 seconds
    const interval = setInterval(() => {
      if (!isVisible) {
        showFact();
      }
    }, 30000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, [isVisible]);

  const handleClose = () => {
    setIsAnimating(false);
    setTimeout(() => {
      setIsVisible(false);
    }, 300);
  };

  if (!isVisible) return null;

  return (
    <div className={`fixed bottom-6 right-6 z-50 max-w-sm transition-all duration-500 ${
      isAnimating ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-full opacity-0 scale-95'
    }`}>
      <div className="glass rounded-xl p-4 border border-accent/30 shadow-glow-accent animate-bounce-in">
        {/* Header */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-gradient-accent rounded-lg">
              <Sparkles className="w-4 h-4 text-accent-foreground" />
            </div>
            <span className="font-semibold text-sm text-foreground">
              Wild Fact! 🦁
            </span>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={handleClose}
            className="h-6 w-6 hover:bg-destructive/20 hover:text-destructive"
          >
            <X className="w-3 h-3" />
          </Button>
        </div>

        {/* Fact Content */}
        <p className="text-sm text-foreground leading-relaxed">
          {currentFact}
        </p>

        {/* Animated Border */}
        <div className="absolute inset-0 rounded-xl pointer-events-none">
          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-accent/20 via-primary/20 to-secondary/20 animate-pulse-glow" />
        </div>
      </div>
    </div>
  );
};