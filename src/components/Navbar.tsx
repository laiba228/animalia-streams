import { useState } from 'react';
import { Search, Menu, User, Bell, Video, Compass, Zap } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from './ui/button';
import { Input } from './ui/input';

export const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <nav className="sticky top-0 z-50 glass backdrop-blur-xl border-b border-glass-border/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo & Menu */}
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="lg:hidden">
              <Menu className="w-5 h-5" />
            </Button>
            
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center shadow-glow-primary">
                <Zap className="w-6 h-6 text-primary-foreground" />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Animalia
                </h1>
                <p className="text-xs text-muted-foreground -mt-1">Streams</p>
              </div>
            </Link>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-2xl mx-8">
            <div className={`relative transition-all duration-300 ${
              isSearchFocused ? 'scale-105' : ''
            }`}>
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  placeholder="Search for wildlife documentaries, animals, habitats..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setIsSearchFocused(true)}
                  onBlur={() => setIsSearchFocused(false)}
                  onKeyPress={handleKeyPress}
                  className="pl-12 pr-12 h-12 glass border-glass-border/50 focus:border-primary/50 focus:shadow-glow-primary transition-all duration-300"
                />
                <Button 
                  size="icon"
                  onClick={handleSearch}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 h-8 w-8 bg-gradient-primary hover:shadow-glow-primary"
                >
                  <Search className="w-4 h-4" />
                </Button>
              </div>
              
              {/* Search Suggestions */}
              {isSearchFocused && searchQuery && (
                <div className="absolute top-full left-0 right-0 mt-2 glass rounded-xl border border-glass-border/30 p-4 animate-slide-in-up">
                  <div className="space-y-2">
                    <div className="text-xs text-muted-foreground mb-2">Popular searches</div>
                    {['Lions documentary', 'Ocean life', 'Rainforest birds', 'Arctic animals'].map((suggestion) => (
                      <div key={suggestion} className="flex items-center gap-3 p-2 rounded-lg hover:bg-primary/10 cursor-pointer transition-colors">
                        <Search className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm">{suggestion}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Navigation Actions */}
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="relative hover:bg-primary/10">
              <Video className="w-5 h-5" />
            </Button>
            
            <Button variant="ghost" size="icon" className="relative hover:bg-primary/10">
              <Compass className="w-5 h-5" />
            </Button>
            
            <Button variant="ghost" size="icon" className="relative hover:bg-primary/10">
              <Bell className="w-5 h-5" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full animate-pulse-glow" />
            </Button>
            
            <Button variant="ghost" size="icon" className="ml-2 hover:bg-primary/10">
              <User className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};