import { useState } from 'react';
import { motion } from 'framer-motion';

const LikeButton = () => {
  const [liked, setLiked] = useState(false);
  return (
    <motion.button
      whileTap={{ scale: 1.2, rotate: liked ? 15 : -15 }}
      animate={{ color: liked ? '#f472b6' : '#fff' }}
      className="px-4 py-2 rounded-full font-bold text-lg flex items-center gap-2 bg-gradient-to-r from-pink-600 to-purple-600 shadow-md border-2 border-pink-400 hover:shadow-pink-400/50 transition-all duration-200"
      onClick={() => setLiked(l => !l)}
      aria-pressed={liked}
    >
      {liked ? '🐾 Liked' : '🤍 Like'}
    </motion.button>
  );
};

export default LikeButton; 