import { useState } from 'react';
import { Play, Clock, Eye, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

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
    <motion.div
      whileHover={{ scale: 1.06, boxShadow: '0 0 32px #a21caf, 0 0 16px #22d3ee' }}
      whileTap={{ scale: 0.97 }}
      className="group relative overflow-hidden rounded-2xl glass transition-all duration-500 cursor-pointer border-2 border-purple-700 hover:border-green-400 focus-within:ring-2 focus-within:ring-accent outline-none"
      tabIndex={0}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Thumbnail Container */}
      <Link to={`/watch/${id}`} tabIndex={-1} className="block focus:outline-none">
        <div className="relative aspect-video overflow-hidden rounded-t-2xl">
          <img 
            src={thumbnail} 
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          {/* Overlay with Play Button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-black/40 flex items-center justify-center"
          >
            <motion.div
              whileHover={{ scale: 1.15 }}
              className="bg-primary/90 backdrop-blur-sm rounded-full p-4 shadow-glow-primary"
            >
              <Play className="w-8 h-8 text-primary-foreground fill-current" />
            </motion.div>
          </motion.div>
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
      </Link>
      {/* Content */}
      <div className="p-4 space-y-3 flex flex-col justify-between h-full">
        <Link to={`/watch/${id}`} className="block focus:outline-none">
          <h3 className="font-semibold text-foreground line-clamp-2 group-hover:text-primary-glow transition-colors duration-300 text-lg flex items-center gap-2">
            🐾 {title}
          </h3>
        </Link>
        {/* Channel Info */}
        <div className="flex items-center gap-3 mt-2">
          {channelAvatar && (
            <Link to={`/channel/${channel}`} tabIndex={-1} className="w-8 h-8 rounded-full overflow-hidden ring-2 ring-primary/20 focus:outline-none">
              <img src={channelAvatar} alt={channel} className="w-full h-full object-cover" />
            </Link>
          )}
          <Link to={`/channel/${channel}`} className="text-sm text-cyan-300 hover:text-accent font-bold transition-colors flex items-center gap-1 focus:outline-none">
            🦁 {channel}
          </Link>
        </div>
        {/* Stats */}
        <div className="flex flex-wrap items-center justify-between text-xs text-muted-foreground mt-2 gap-2">
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
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        className="absolute inset-0 pointer-events-none rounded-2xl"
        style={{
          background: 'linear-gradient(45deg, transparent, #a21caf33, #22d3ee33, transparent)',
          filter: 'blur(2px)'
        }}
      />
    </motion.div>
  );
};
