// Mock data for Animalia Streams channels
export const channels = [
  {
    id: 'jungle-life',
    name: 'Jungle Life',
    avatar: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=100&h=100&fit=crop&crop=face',
    banner: 'https://images.unsplash.com/photo-1558618666-fbd6c327cd4a?w=1200&h=300&fit=crop',
    subscribers: '2.8M',
    description: 'Exploring the dense jungles and rainforests of our planet. Join us as we discover the incredible wildlife that calls these green worlds home.',
    totalViews: '45M',
    joinDate: 'March 2019'
  },
  {
    id: 'deep-ocean',
    name: 'Deep Ocean',
    avatar: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=100&h=100&fit=crop&crop=face',
    banner: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&h=300&fit=crop',
    subscribers: '3.2M',
    description: 'Diving into the mysterious depths of our oceans to reveal the fascinating creatures that inhabit the underwater world.',
    totalViews: '52M',
    joinDate: 'January 2018'
  },
  {
    id: 'sky-hunters',
    name: 'Sky Hunters',
    avatar: 'https://images.unsplash.com/photo-1552728089-57bdde30beb3?w=100&h=100&fit=crop&crop=face',
    banner: 'https://images.unsplash.com/photo-1552728089-57bdde30beb3?w=1200&h=300&fit=crop',
    subscribers: '1.9M',
    description: 'Documenting the majestic birds of prey and aerial wildlife. Watch as we capture the grace and power of nature\'s greatest hunters.',
    totalViews: '28M',
    joinDate: 'August 2020'
  },
  {
    id: 'wildlife-diaries',
    name: 'Wildlife Diaries',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
    banner: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=1200&h=300&fit=crop',
    subscribers: '4.1M',
    description: 'Your daily dose of wildlife adventures from around the globe. From African savannas to Arctic tundra, we bring you closer to nature.',
    totalViews: '78M',
    joinDate: 'November 2017'
  }
];

export const getChannelById = (id) => {
  return channels.find(channel => channel.id === id);
};