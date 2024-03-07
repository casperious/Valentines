import React, { useState } from 'react';
import './App.css';
import { InstagramEmbed } from 'react-social-media-embed';
import { useMediaQuery } from 'react-responsive';

const App = () => {
  const isDesktopOrLaptop = useMediaQuery({ minWidth: 1224 });
  const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 });

  const [showYay, setShowYay] = useState(false);

  const [urls1] = useState([
    "https://www.instagram.com/p/Cs0zxANri4Q/",
    // ... (other URLs)
  ]);

  const [urls2] = useState([
    "https://www.instagram.com/p/CsJVBssIHc8/?img_index=1",
    // ... (other URLs)
  ]);

  const useUrl1 = urls1[Math.floor(Math.random() * urls1.length)];
  const useUrl2 = urls2[Math.floor(Math.random() * urls2.length)];

  return (
    <div className="app">
      <div>
        <img
          style={{
            position: 'relative',
            left: '15%',
            top: isTabletOrMobile ? '10%' : '27%',
            width: isTabletOrMobile ? '80%' : '400px',
          }}
          alt=""
          src="giphy.gif"
        />
      </div>
      <iframe
        style={{
          position: 'relative',
          left: '0%',
          top: '20%',
          width: isTabletOrMobile ? '75%' : '100%',
        }}
        title="vienna embed"
        src="https://open.spotify.com/embed/track/4U45aEWtQhrm8A5mxPaFZ7?utm_source=generator&theme=0"
        height="150"
        frameBorder="0"
        allowFullScreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      />
      <div style={{ position: 'absolute', left: '65%', top: '15%' }}>
        <InstagramEmbed url={useUrl1} width={isTabletOrMobile ? '50%' : 550} height={isTabletOrMobile ? '50%':550} />
      </div>
      <div style={{ position: 'absolute', left: '2%', top: '15%' }}>
        <InstagramEmbed url={useUrl2} width={isTabletOrMobile ? '50%' : 550} height={isTabletOrMobile ? '50%':550}/>
      </div>
    </div>
  );
};

export default App;