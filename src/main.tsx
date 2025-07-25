import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ThemeProvider } from 'next-themes';

createRoot(document.getElementById("root")!).render(
  <ThemeProvider attribute="class" defaultTheme="dark">
    <App />
  </ThemeProvider>
);
import { useState } from 'react';

const Search = ({ videos, channels }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredVideos = videos.filter((video) =>
    video.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredChannels = channels.filter((channel) =>
    channel.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="p-2 border rounded"
      />
      <div>
        <h2>Videos</h2>
        {filteredVideos.map((video) => (
          <div key={video.id}>
            <h3>{video.title}</h3>
            {/* Other video details */}
          </div>
        ))}
      </div>
      <div>
        <h2>Channels</h2>
        {filteredChannels.map((channel) => (
          <div key={channel.id}>
            <h3>{channel.name}</h3>
            {/* Other channel details */}
          </div>
        ))}
      </div>
    </div>
  );
};
