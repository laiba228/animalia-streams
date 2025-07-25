import { useState } from 'react';
import { motion } from 'framer-motion';

const SubscribeButton = () => {
  const [subscribed, setSubscribed] = useState(false);
  return (
    <motion.button
      whileTap={{ scale: 1.15, rotate: subscribed ? 8 : -8 }}
      animate={{ backgroundColor: subscribed ? '#22d3ee' : '#a21caf' }}
      className="px-4 py-2 rounded-full font-bold text-lg flex items-center gap-2 bg-gradient-to-r from-purple-700 to-blue-500 text-white shadow-md border-2 border-blue-400 hover:shadow-blue-400/50 transition-all duration-200"
      onClick={() => setSubscribed(s => !s)}
      aria-pressed={subscribed}
    >
      {subscribed ? '🦁 Subscribed' : '🔔 Subscribe'}
    </motion.button>
  );
};

export default SubscribeButton; 