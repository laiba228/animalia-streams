import { useTheme } from 'next-themes';
import { motion } from 'framer-motion';

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <motion.button
      whileTap={{ scale: 0.9, rotate: -10 }}
      whileHover={{ scale: 1.08, boxShadow: '0 0 16px #a21caf' }}
      className="ml-2 px-3 py-2 rounded-xl font-bold text-base flex items-center gap-2 bg-gradient-to-r from-purple-600 via-blue-500 to-green-400 text-white shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      aria-label={isDark ? 'Switch to Sunlight Mode' : 'Switch to Dark Mode'}
    >
      {isDark ? '🌞 Sunlight Mode' : '🌙 Dark Mode'}
    </motion.button>
  );
};

export default ThemeToggle; 