import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ThumbsUp, ThumbsDown, Share, Download, MoreHorizontal, Heart, MessageCircle, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Avatar } from '@/components/ui/avatar';
import { VideoCard } from '@/components/VideoCard';
import { Navbar } from '@/components/Navbar';
import birdsImage from '../assets/birds-tropical.jpg';
import oceanImage from '../assets/ocean-dolphins.jpg';
import leopardImage from '../assets/snow-leopard.jpg';

const mockComments = [
  {
    id: '1',
    author: 'WildlifeExpert92',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face',
    content: 'Amazing footage! The way these birds communicate is absolutely fascinating.',
    likes: 24,
    time: '2 hours ago'
  },
  {
    id: '2',
    author: 'NatureLover',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b2e59d1b?w=40&h=40&fit=crop&crop=face',
    content: 'I had no idea tropical birds were this intelligent. Thanks for sharing!',
    likes: 18,
    time: '4 hours ago'
  }
];

const relatedVideos = [
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
];

const VideoPlayer = () => {
  const { id } = useParams();
  const [isLiked, setIsLiked] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [newComment, setNewComment] = useState('');
  const [comments, setComments] = useState(mockComments);

  // Mock video data based on ID
  const videoData = {
    id: id || '1',
    title: 'Tropical Birds of the Amazon Rainforest',
    description: 'Explore the vibrant world of tropical birds in the Amazon rainforest. From colorful macaws to melodic songbirds, discover the incredible diversity of avian life in one of Earth\'s most biodiverse ecosystems.',
    views: '2.3M',
    likes: '98K',
    uploadDate: '2 days ago',
    channel: 'Wildlife Explorer',
    channelAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face',
    subscribers: '2.1M'
  };

  const handleAddComment = () => {
    if (newComment.trim()) {
      const comment = {
        id: Date.now().toString(),
        author: 'You',
        avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=40&h=40&fit=crop&crop=face',
        content: newComment,
        likes: 0,
        time: 'just now'
      };
      setComments([comment, ...comments]);
      setNewComment('');
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Video Section */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Back Button */}
            <Link to="/">
              <Button variant="ghost" className="mb-4 hover:bg-primary/10">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>

            {/* Video Player */}
            <div className="relative aspect-video bg-black rounded-xl overflow-hidden glass border border-glass-border/30">
              <img 
                src={birdsImage} 
                alt={videoData.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <Button size="lg" className="bg-primary/90 hover:bg-primary backdrop-blur-sm rounded-full p-6">
                  <div className="w-0 h-0 border-l-[20px] border-l-primary-foreground border-y-[15px] border-y-transparent ml-1" />
                </Button>
              </div>
            </div>

            {/* Video Info */}
            <div className="space-y-4">
              <h1 className="text-2xl lg:text-3xl font-bold text-foreground">
                {videoData.title}
              </h1>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center text-sm text-muted-foreground gap-4">
                  <span>{videoData.views} views</span>
                  <span>{videoData.uploadDate}</span>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-2">
                  <Button 
                    variant={isLiked ? "default" : "outline"}
                    onClick={() => setIsLiked(!isLiked)}
                    className="flex items-center gap-2"
                  >
                    <ThumbsUp className="w-4 h-4" />
                    {videoData.likes}
                  </Button>
                  
                  <Button variant="outline">
                    <ThumbsDown className="w-4 h-4" />
                  </Button>
                  
                  <Button variant="outline">
                    <Share className="w-4 h-4 mr-2" />
                    Share
                  </Button>
                  
                  <Button variant="outline">
                    <Download className="w-4 h-4" />
                  </Button>
                  
                  <Button variant="outline" size="icon">
                    <MoreHorizontal className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* Channel Info */}
              <div className="flex items-center justify-between p-4 glass rounded-xl border border-glass-border/30">
                <div className="flex items-center gap-4">
                  <Avatar className="w-12 h-12">
                    <img src={videoData.channelAvatar} alt={videoData.channel} />
                  </Avatar>
                  <div>
                    <Link to={`/channel/${videoData.channel}`}>
                      <h3 className="font-semibold text-foreground hover:text-primary transition-colors">
                        {videoData.channel}
                      </h3>
                    </Link>
                    <p className="text-sm text-muted-foreground">{videoData.subscribers} subscribers</p>
                  </div>
                </div>
                
                <Button 
                  variant={isSubscribed ? "outline" : "default"}
                  onClick={() => setIsSubscribed(!isSubscribed)}
                  className={isSubscribed ? "bg-muted" : "bg-gradient-primary"}
                >
                  {isSubscribed ? "Subscribed" : "Subscribe"}
                </Button>
              </div>

              {/* Description */}
              <div className="glass p-4 rounded-xl border border-glass-border/30">
                <p className="text-muted-foreground leading-relaxed">
                  {videoData.description}
                </p>
              </div>
            </div>

            {/* Comments Section */}
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-foreground">
                Comments ({comments.length})
              </h2>

              {/* Add Comment */}
              <div className="flex gap-4">
                <Avatar className="w-10 h-10">
                  <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=40&h=40&fit=crop&crop=face" alt="You" />
                </Avatar>
                <div className="flex-1 space-y-3">
                  <Textarea
                    placeholder="Add a comment..."
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    className="glass border-glass-border/50 focus:border-primary/50"
                  />
                  <div className="flex justify-end gap-2">
                    <Button variant="ghost" onClick={() => setNewComment('')}>
                      Cancel
                    </Button>
                    <Button onClick={handleAddComment} disabled={!newComment.trim()}>
                      <Send className="w-4 h-4 mr-2" />
                      Comment
                    </Button>
                  </div>
                </div>
              </div>

              {/* Comments List */}
              <div className="space-y-4">
                {comments.map((comment) => (
                  <div key={comment.id} className="flex gap-4">
                    <Avatar className="w-10 h-10">
                      <img src={comment.avatar} alt={comment.author} />
                    </Avatar>
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-foreground">{comment.author}</span>
                        <span className="text-sm text-muted-foreground">{comment.time}</span>
                      </div>
                      <p className="text-muted-foreground">{comment.content}</p>
                      <div className="flex items-center gap-4">
                        <Button variant="ghost" size="sm">
                          <Heart className="w-4 h-4 mr-1" />
                          {comment.likes}
                        </Button>
                        <Button variant="ghost" size="sm">
                          <MessageCircle className="w-4 h-4 mr-1" />
                          Reply
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Related Videos Sidebar */}
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-foreground">Related Videos</h2>
            <div className="space-y-4">
              {relatedVideos.map((video) => (
                <Link key={video.id} to={`/watch/${video.id}`}>
                  <VideoCard {...video} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;