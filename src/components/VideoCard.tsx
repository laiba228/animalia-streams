import { useState } from 'react';
import { Play, Clock, Eye, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

interface VideoCardProps {
  id: string;
  title: string;
  thumbnail: string;
  duration: string;
  views: string;
  likes: string;
  channel: string;
  channelAvatar?: string;
  category: string;
}

export const VideoCard = ({ 
  id,
  title, 
  thumbnail, 
  duration, 
  views, 
  likes, 
  channel,
  channelAvatar,
  category 
}: VideoCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link to={`/watch/${id}`}>
      <div 
        className="group relative overflow-hidden rounded-xl glass transition-all duration-500 hover:scale-105 hover:shadow-glow-primary cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
      {/* Thumbnail Container */}
      <div className="relative aspect-video overflow-hidden">
        <img 
          src={thumbnail} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Overlay with Play Button */}
        <div className={`absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="bg-primary/90 backdrop-blur-sm rounded-full p-4 transition-all duration-300 hover:bg-primary hover:scale-110 shadow-glow-primary">
            <Play className="w-8 h-8 text-primary-foreground fill-current" />
          </div>
        </div>

        {/* Duration Badge */}
        <div className="absolute bottom-2 right-2 bg-black/80 backdrop-blur-sm px-2 py-1 rounded-md text-xs text-foreground flex items-center gap-1">
          <Clock className="w-3 h-3" />
          {duration}
        </div>

        {/* Category Badge */}
        <div className="absolute top-2 left-2 bg-gradient-accent px-3 py-1 rounded-full text-xs font-medium text-accent-foreground">
          {category}
        </div>
      </div>

      {/* Content */}
      <div className="p-4 space-y-3">
        <h3 className="font-semibold text-foreground line-clamp-2 group-hover:text-primary-glow transition-colors duration-300">
          {title}
        </h3>
        
        {/* Channel Info */}
        <div className="flex items-center gap-3">
          {channelAvatar && (
            <div className="w-8 h-8 rounded-full overflow-hidden ring-2 ring-primary/20">
              <img src={channelAvatar} alt={channel} className="w-full h-full object-cover" />
            </div>
          )}
          <Link to={`/channel/${channel}`} className="text-sm text-muted-foreground hover:text-primary transition-colors">
            {channel}
          </Link>
        </div>

        {/* Stats */}
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <div className="flex items-center gap-1">
            <Eye className="w-3 h-3" />
            {views} views
          </div>
          <div className="flex items-center gap-1 text-accent">
            <Heart className="w-3 h-3" />
            {likes}
          </div>
        </div>
      </div>

      {/* Hover Glow Effect */}
      <div className={`absolute inset-0 pointer-events-none rounded-xl transition-opacity duration-500 ${
        isHovered ? 'opacity-100' : 'opacity-0'
      }`} style={{
        background: 'linear-gradient(45deg, transparent, hsl(var(--primary) / 0.1), transparent)',
        animation: isHovered ? 'shimmer 2s infinite' : 'none'
      }} />
      </div>
    </Link>
  );
};