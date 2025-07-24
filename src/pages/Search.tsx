import { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Filter, SlidersHorizontal, Clock, TrendingUp, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { VideoCard } from '@/components/VideoCard';
import { Navbar } from '@/components/Navbar';
import birdsImage from '../assets/birds-tropical.jpg';
import oceanImage from '../assets/ocean-dolphins.jpg';
import leopardImage from '../assets/snow-leopard.jpg';

const mockSearchResults = [
  {
    id: '1',
    title: 'Tropical Birds of the Amazon Rainforest',
    thumbnail: birdsImage,
    duration: '42:15',
    views: '2.3M',
    likes: '98K',
    channel: 'Wildlife Explorer',
    channelAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face',
    category: 'Birds',
    description: 'Explore the vibrant world of tropical birds in the Amazon rainforest...',
    uploadDate: '2 days ago'
  },
  {
    id: '2',
    title: 'Ocean Giants: The Secret Life of Dolphins',
    thumbnail: oceanImage,
    duration: '38:22',
    views: '1.8M',
    likes: '76K',
    channel: 'Deep Blue Films',
    channelAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face',
    category: 'Marine',
    description: 'Dive deep into the fascinating world of dolphins and discover their intelligence...',
    uploadDate: '1 week ago'
  },
  {
    id: '3',
    title: 'Snow Leopards: Ghosts of the Mountains',
    thumbnail: leopardImage,
    duration: '35:48',
    views: '1.2M',
    likes: '65K',
    channel: 'Mountain Wildlife',
    channelAvatar: 'https://images.unsplash.com/photo-1494790108755-2616b2e59d1b?w=40&h=40&fit=crop&crop=face',
    category: 'Big Cats',
    description: 'Follow the elusive snow leopards through the harsh mountain terrain...',
    uploadDate: '3 days ago'
  }
];

const categories = [
  'All', 'Birds', 'Marine', 'Big Cats', 'Primates', 'Reptiles', 'Insects', 
  'Arctic Animals', 'Desert Life', 'Rainforest', 'Savanna', 'Documentaries'
];

const sortOptions = [
  { value: 'relevance', label: 'Relevance' },
  { value: 'date', label: 'Upload Date' },
  { value: 'views', label: 'View Count' },
  { value: 'rating', label: 'Rating' },
  { value: 'duration', label: 'Duration' }
];

const durationFilters = [
  { value: 'any', label: 'Any Duration' },
  { value: 'short', label: 'Under 4 minutes' },
  { value: 'medium', label: '4-20 minutes' },
  { value: 'long', label: 'Over 20 minutes' }
];

const Search = () => {
  const [searchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('relevance');
  const [duration, setDuration] = useState('any');
  const [showFilters, setShowFilters] = useState(false);
  const [results, setResults] = useState(mockSearchResults);

  const searchQuery = searchParams.get('q') || '';

  useEffect(() => {
    // Simulate search filtering based on query and filters
    let filteredResults = mockSearchResults;

    if (searchQuery) {
      filteredResults = mockSearchResults.filter(video => 
        video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        video.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        video.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (selectedCategory !== 'All') {
      filteredResults = filteredResults.filter(video => 
        video.category === selectedCategory
      );
    }

    // Apply sorting
    switch (sortBy) {
      case 'views':
        filteredResults.sort((a, b) => parseFloat(b.views) - parseFloat(a.views));
        break;
      case 'date':
        // Mock sorting by date
        break;
      case 'rating':
        filteredResults.sort((a, b) => parseFloat(b.likes) - parseFloat(a.likes));
        break;
      default:
        // Relevance - keep original order
        break;
    }

    setResults(filteredResults);
  }, [searchQuery, selectedCategory, sortBy, duration]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Search Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-foreground mb-2">
            {searchQuery ? `Search results for "${searchQuery}"` : 'Search Results'}
          </h1>
          <p className="text-muted-foreground">
            About {results.length} results
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8 space-y-4">
          
          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={selectedCategory === category ? "bg-gradient-primary" : ""}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Advanced Filters */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <Button 
              variant="outline" 
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 w-fit"
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filters
            </Button>

            {(showFilters || window.innerWidth >= 640) && (
              <div className="flex flex-wrap gap-4">
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-48 glass">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    {sortOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select value={duration} onValueChange={setDuration}>
                  <SelectTrigger className="w-48 glass">
                    <SelectValue placeholder="Duration" />
                  </SelectTrigger>
                  <SelectContent>
                    {durationFilters.map((filter) => (
                      <SelectItem key={filter.value} value={filter.value}>
                        {filter.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            )}
          </div>

          {/* Active Filters */}
          {(selectedCategory !== 'All' || duration !== 'any' || sortBy !== 'relevance') && (
            <div className="flex flex-wrap gap-2 items-center">
              <span className="text-sm text-muted-foreground">Active filters:</span>
              {selectedCategory !== 'All' && (
                <Badge variant="secondary" className="flex items-center gap-1">
                  Category: {selectedCategory}
                  <button 
                    onClick={() => setSelectedCategory('All')}
                    className="ml-1 hover:bg-muted rounded-full p-1"
                  >
                    ×
                  </button>
                </Badge>
              )}
              {duration !== 'any' && (
                <Badge variant="secondary" className="flex items-center gap-1">
                  Duration: {durationFilters.find(f => f.value === duration)?.label}
                  <button 
                    onClick={() => setDuration('any')}
                    className="ml-1 hover:bg-muted rounded-full p-1"
                  >
                    ×
                  </button>
                </Badge>
              )}
              {sortBy !== 'relevance' && (
                <Badge variant="secondary" className="flex items-center gap-1">
                  Sort: {sortOptions.find(s => s.value === sortBy)?.label}
                  <button 
                    onClick={() => setSortBy('relevance')}
                    className="ml-1 hover:bg-muted rounded-full p-1"
                  >
                    ×
                  </button>
                </Badge>
              )}
            </div>
          )}
        </div>

        {/* Search Results */}
        <div className="space-y-6">
          {results.length === 0 ? (
            <div className="text-center py-16">
              <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-muted flex items-center justify-center">
                🔍
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">No results found</h3>
              <p className="text-muted-foreground mb-6">
                Try adjusting your search terms or filters
              </p>
              <Button 
                variant="outline" 
                onClick={() => {
                  setSelectedCategory('All');
                  setDuration('any');
                  setSortBy('relevance');
                }}
              >
                Clear all filters
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {results.map((video, index) => (
                <div
                  key={video.id}
                  className="animate-fade-in"
                  style={{ 
                    animationDelay: `${index * 0.1}s`,
                    animationFillMode: 'both'
                  }}
                >
                  <Link to={`/watch/${video.id}`}>
                    <VideoCard {...video} />
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Load More */}
        {results.length > 0 && (
          <div className="text-center mt-12">
            <Button variant="outline" className="px-8">
              Load More Results
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
