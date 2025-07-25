import { motion } from 'framer-motion';

const ChannelCard = ({ channel }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05, boxShadow: '0 0 24px #0fffc3' }}
      className="rounded-2xl bg-gradient-to-br from-purple-800 via-blue-900 to-green-900 p-4 flex items-center gap-4 cursor-pointer transition-all border-2 border-purple-700 hover:border-green-400"
    >
      <img src={channel.avatar} alt={channel.name} className="w-16 h-16 rounded-full border-4 border-green-400 shadow-lg" />
      <div>
        <div className="text-xl font-bold flex items-center gap-2 text-white">
          🦁 {channel.name}
        </div>
        <div className="text-sm text-blue-200 mb-1">{channel.bio}</div>
        <div className="text-xs text-green-300 font-semibold">{channel.subscribers} subscribers</div>
      </div>
    </motion.div>
  );
};

export default ChannelCard; 