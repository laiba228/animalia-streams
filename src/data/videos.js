import birdsImage from '../assets/birds-tropical.jpg';
import oceanImage from '../assets/ocean-dolphins.jpg';
import leopardImage from '../assets/snow-leopard.jpg';
import wildlifeImage from '../assets/hero-wildlife.jpg';

// Mock data for Animalia Streams videos
export const videos = [
  // Jungle Life Channel Videos
  {
    id: 'jungle-parrots',
    title: 'Tropical Parrots of the Amazon Rainforest',
    thumbnail: birdsImage,
    duration: '28:45',
    views: '2.3M',
    likes: '98K',
    channelId: 'jungle-life',
    channelName: 'Jungle Life',
    channelAvatar: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=40&h=40&fit=crop&crop=face',
    category: 'Birds',
    description: 'Explore the vibrant world of tropical parrots in the Amazon rainforest. From colorful macaws to melodic songbirds, discover the incredible diversity of avian life in one of Earth\'s most biodiverse ecosystems.',
    uploadDate: '2 days ago'
  },
  {
    id: 'jungle-monkeys',
    title: 'Howler Monkeys: Lords of the Canopy',
    thumbnail: 'https://images.unsplash.com/photo-1544441893-675973e31985?w=640&h=360&fit=crop',
    duration: '35:12',
    views: '1.8M',
    likes: '76K',
    channelId: 'jungle-life',
    channelName: 'Jungle Life',
    channelAvatar: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=40&h=40&fit=crop&crop=face',
    category: 'Primates',
    description: 'Journey into the treetops to witness the daily lives of howler monkeys, the loudest land animals on Earth. Watch as they navigate their arboreal kingdom with remarkable agility.',
    uploadDate: '1 week ago'
  },

  // Deep Ocean Channel Videos
  {
    id: 'ocean-dolphins',
    title: 'Ocean Giants: The Secret Life of Dolphins',
    thumbnail: oceanImage,
    duration: '42:18',
    views: '3.1M',
    likes: '145K',
    channelId: 'deep-ocean',
    channelName: 'Deep Ocean',
    channelAvatar: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=40&h=40&fit=crop&crop=face',
    category: 'Marine Mammals',
    description: 'Dive into the fascinating world of dolphins and discover their complex social behaviors, hunting strategies, and remarkable intelligence beneath the waves.',
    uploadDate: '3 days ago'
  },
  {
    id: 'deep-sea-creatures',
    title: 'Mysterious Deep Sea Creatures of the Abyss',
    thumbnail: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=640&h=360&fit=crop',
    duration: '31:55',
    views: '2.7M',
    likes: '112K',
    channelId: 'deep-ocean',
    channelName: 'Deep Ocean',
    channelAvatar: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=40&h=40&fit=crop&crop=face',
    category: 'Deep Sea',
    description: 'Explore the alien world of the deep ocean where bizarre creatures have evolved extraordinary adaptations to survive in Earth\'s most extreme environment.',
    uploadDate: '5 days ago'
  },

  // Sky Hunters Channel Videos
  {
    id: 'golden-eagles',
    title: 'Golden Eagles: Masters of the Sky',
    thumbnail: 'https://images.unsplash.com/photo-1552728089-57bdde30beb3?w=640&h=360&fit=crop',
    duration: '26:33',
    views: '1.5M',
    likes: '89K',
    channelId: 'sky-hunters',
    channelName: 'Sky Hunters',
    channelAvatar: 'https://images.unsplash.com/photo-1552728089-57bdde30beb3?w=40&h=40&fit=crop&crop=face',
    category: 'Birds of Prey',
    description: 'Witness the incredible hunting prowess of golden eagles as they soar through mountain ranges, showcasing their unmatched aerial skills and keen eyesight.',
    uploadDate: '4 days ago'
  },
  {
    id: 'falcon-hunt',
    title: 'Peregrine Falcons: The Fastest Birds Alive',
    thumbnail: 'https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=640&h=360&fit=crop',
    duration: '19:47',
    views: '2.2M',
    likes: '103K',
    channelId: 'sky-hunters',
    channelName: 'Sky Hunters',
    channelAvatar: 'https://images.unsplash.com/photo-1552728089-57bdde30beb3?w=40&h=40&fit=crop&crop=face',
    category: 'Birds of Prey',
    description: 'Experience the breathtaking speed of peregrine falcons during their hunting dives, reaching speeds over 200 mph as they pursue their prey.',
    uploadDate: '1 week ago'
  },

  // Wildlife Diaries Channel Videos
  {
    id: 'snow-leopards',
    title: 'Snow Leopards: Ghosts of the Mountains',
    thumbnail: leopardImage,
    duration: '39:21',
    views: '4.2M',
    likes: '198K',
    channelId: 'wildlife-diaries',
    channelName: 'Wildlife Diaries',
    channelAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face',
    category: 'Big Cats',
    description: 'Follow the elusive snow leopards through the harsh mountain terrain of Central Asia. Discover how these magnificent cats have adapted to life in one of the world\'s most challenging environments.',
    uploadDate: '1 day ago'
  },
  {
    id: 'african-safari',
    title: 'African Safari: Life on the Savanna',
    thumbnail: wildlifeImage,
    duration: '45:12',
    views: '3.8M',
    likes: '167K',
    channelId: 'wildlife-diaries',
    channelName: 'Wildlife Diaries',
    channelAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face',
    category: 'Safari',
    description: 'Experience the drama of the African savanna where predators and prey live in a delicate balance. From lions to zebras, witness the circle of life unfold.',
    uploadDate: '6 days ago'
  }
];

// Helper functions
export const getVideoById = (id) => {
  return videos.find(video => video.id === id);
};

export const getVideosByChannel = (channelId) => {
  return videos.filter(video => video.channelId === channelId);
};

export const searchVideos = (query) => {
  if (!query) return videos;
  
  const lowercaseQuery = query.toLowerCase();
  return videos.filter(video => 
    video.title.toLowerCase().includes(lowercaseQuery) ||
    video.category.toLowerCase().includes(lowercaseQuery) ||
    video.channelName.toLowerCase().includes(lowercaseQuery) ||
    video.description.toLowerCase().includes(lowercaseQuery)
  );
};

export const getRelatedVideos = (currentVideoId, channelId) => {
  return videos
    .filter(video => video.id !== currentVideoId)
    .sort((a, b) => {
      // Prioritize videos from same channel
      if (a.channelId === channelId && b.channelId !== channelId) return -1;
      if (b.channelId === channelId && a.channelId !== channelId) return 1;
      return 0;
    })
    .slice(0, 6);
};