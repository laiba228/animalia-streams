import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Bell, Share, MoreHorizontal, Play, Grid, List, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { VideoCard } from '@/components/VideoCard';
import { Navbar } from '@/components/Navbar';
import birdsImage from '../assets/birds-tropical.jpg';
import oceanImage from '../assets/ocean-dolphins.jpg';
import leopardImage from '../assets/snow-leopard.jpg';

const channelVideos = [
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
    channel: 'Wildlife Explorer',
    category: 'Marine'
  },
  {
    id: '3',
    title: 'Snow Leopards: Ghosts of the Mountains',
    thumbnail: leopardImage,
    duration: '35:48',
    views: '1.2M',
    likes: '65K',
    channel: 'Wildlife Explorer',
    category: 'Big Cats'
  }
];

const playlists = [
  {
    id: '1',
    title: 'Big Cats Collection',
    videoCount: 12,
    thumbnail: leopardImage,
    views: '5.2M total views'
  },
  {
    id: '2',
    title: 'Ocean Wildlife',
    videoCount: 8,
    thumbnail: oceanImage,
    views: '3.1M total views'
  }
];

const Channel = () => {
  const { id } = useParams();
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // Mock channel data based on ID
  const channelData = {
    id: id || 'wildlife-explorer',
    name: 'Wildlife Explorer',
    handle: '@wildlifeexplorer',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&h=120&fit=crop&crop=face',
    banner: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&h=300&fit=crop',
    subscribers: '2.1M',
    videos: '156',
    description: 'Bringing you the most incredible wildlife documentaries from around the globe. Join us as we explore the natural world and discover the fascinating behaviors of animals in their natural habitats.',
    location: 'Global',
    joined: 'Joined Sep 2018',
    totalViews: '342M'
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="max-w-7xl mx-auto">
        
        {/* Back Button */}
        <div className="px-4 sm:px-6 lg:px-8 pt-8">
          <Link to="/">
            <Button variant="ghost" className="mb-4 hover:bg-primary/10">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>

        {/* Channel Banner */}
        <div className="relative h-48 lg:h-64 overflow-hidden">
          <img 
            src={channelData.banner} 
            alt={`${channelData.name} banner`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
        </div>

        {/* Channel Info */}
        <div className="px-4 sm:px-6 lg:px-8 -mt-16 relative z-10">
          <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-end">
            
            {/* Avatar */}
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-background glass">
              <img 
                src={channelData.avatar} 
                alt={channelData.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Channel Details */}
            <div className="flex-1 space-y-4">
              <div>
                <h1 className="text-3xl lg:text-4xl font-bold text-foreground">
                  {channelData.name}
                </h1>
                <p className="text-muted-foreground">
                  {channelData.handle} • {channelData.subscribers} subscribers • {channelData.videos} videos
                </p>
              </div>

              <p className="text-muted-foreground max-w-3xl leading-relaxed">
                {channelData.description}
              </p>

              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span>{channelData.location}</span>
                <span>{channelData.joined}</span>
                <span>{channelData.totalViews} views</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <Button 
                variant={isSubscribed ? "outline" : "default"}
                onClick={() => setIsSubscribed(!isSubscribed)}
                className={`${isSubscribed ? "bg-muted" : "bg-gradient-primary"} px-6`}
              >
                {isSubscribed ? (
                  <>
                    <Bell className="w-4 h-4 mr-2" />
                    Subscribed
                  </>
                ) : (
                  "Subscribe"
                )}
              </Button>
              
              <Button variant="outline">
                <Share className="w-4 h-4 mr-2" />
                Share
              </Button>
              
              <Button variant="outline" size="icon">
                <MoreHorizontal className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Content Tabs */}
        <div className="px-4 sm:px-6 lg:px-8 mt-8">
          <Tabs defaultValue="videos" className="space-y-6">
            <TabsList className="glass">
              <TabsTrigger value="videos">Videos</TabsTrigger>
              <TabsTrigger value="playlists">Playlists</TabsTrigger>
              <TabsTrigger value="about">About</TabsTrigger>
            </TabsList>

            {/* Videos Tab */}
            <TabsContent value="videos" className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold text-foreground">Latest Videos</h2>
                <div className="flex items-center gap-2">
                  <Button
                    variant={viewMode === 'grid' ? 'default' : 'ghost'}
                    size="icon"
                    onClick={() => setViewMode('grid')}
                  >
                    <Grid className="w-4 h-4" />
                  </Button>
                  <Button
                    variant={viewMode === 'list' ? 'default' : 'ghost'}
                    size="icon"
                    onClick={() => setViewMode('list')}
                  >
                    <List className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <div className={`grid gap-6 ${
                viewMode === 'grid' 
                  ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
                  : 'grid-cols-1'
              }`}>
                {channelVideos.map((video, index) => (
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
            </TabsContent>

            {/* Playlists Tab */}
            <TabsContent value="playlists" className="space-y-6">
              <h2 className="text-xl font-semibold text-foreground">Created Playlists</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {playlists.map((playlist, index) => (
                  <div
                    key={playlist.id}
                    className="group glass rounded-xl overflow-hidden border border-glass-border/30 hover:shadow-glow-primary transition-all duration-300 animate-fade-in"
                    style={{ 
                      animationDelay: `${index * 0.1}s`,
                      animationFillMode: 'both'
                    }}
                  >
                    <div className="relative aspect-video">
                      <img 
                        src={playlist.thumbnail} 
                        alt={playlist.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Button className="bg-primary/90 hover:bg-primary backdrop-blur-sm">
                          <Play className="w-5 h-5 mr-2" />
                          Play All
                        </Button>
                      </div>
                      <div className="absolute bottom-2 right-2 bg-black/80 backdrop-blur-sm px-2 py-1 rounded text-xs text-white">
                        {playlist.videoCount} videos
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-foreground mb-1">{playlist.title}</h3>
                      <p className="text-sm text-muted-foreground">{playlist.views}</p>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            {/* About Tab */}
            <TabsContent value="about" className="space-y-6">
              <div className="glass p-6 rounded-xl border border-glass-border/30 space-y-6">
                <h2 className="text-xl font-semibold text-foreground">About</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-medium text-foreground mb-2">Description</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {channelData.description}
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="font-medium text-foreground mb-2">Channel Details</h3>
                      <div className="space-y-2 text-sm text-muted-foreground">
                        <div>📍 {channelData.location}</div>
                        <div>📅 {channelData.joined}</div>
                        <div>👥 {channelData.subscribers} subscribers</div>
                        <div>🎥 {channelData.videos} videos</div>
                        <div>👀 {channelData.totalViews} total views</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-medium text-foreground mb-2">Contact & Social</h3>
                      <div className="space-y-2">
                        <Button variant="outline" className="w-full justify-start">
                          🌐 Website
                        </Button>
                        <Button variant="outline" className="w-full justify-start">
                          📧 Business Inquiries
                        </Button>
                        <Button variant="outline" className="w-full justify-start">
                          🐦 Twitter
                        </Button>
                        <Button variant="outline" className="w-full justify-start">
                          📷 Instagram
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Channel;