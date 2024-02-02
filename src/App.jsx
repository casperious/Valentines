import React, { useState } from 'react';
import './App.css';
import { InstagramEmbed } from 'react-social-media-embed';
const App = () => {
    const [noButtonPosition, setNoButtonPosition] = useState({
        position: 'absolute',
        left: '37.5%',
        bottom: '20%',
        width: '100px',
        height: '40px',
        borderRadius: '5px',
        backgroundColor: 'pink',
        color: 'red',
        borderColor: 'pink'
    });
    let [useUrl1] = "";
    let [useUrl2] = "";
    const [showYay, setShowYay] = useState(false)
    const [urls1] = useState(["https://www.instagram.com/p/Cs0zxANri4Q/", "https://www.instagram.com/p/C1RgBW4LRTl/", "https://www.instagram.com/p/C06sKGHoHuv/?img_index=1", "https://www.instagram.com/p/C0Tw5oToWyl/", "https://www.instagram.com/p/Cs_On79LygD/"])
    const [urls2] = useState(["https://www.instagram.com/p/CsJVBssIHc8/?img_index=1", "https://www.instagram.com/p/Cr-1C9Lrb0M/", "https://www.instagram.com/p/Cq-aWsrImIU/", "https://www.instagram.com/p/CbiECmcM3wf/", "https://www.instagram.com/p/CZ9YsPLLxDI/"])
    const handleNoButtonHover = () => {
        const randomLeft = Math.random() * (window.innerWidth - 200);
        const randomTop = Math.random() * (window.innerHeight - 200);
        setNoButtonPosition({
            ...noButtonPosition,
            left: `${randomLeft}px`,
            top: `${randomTop}px`
        });

    };

    useUrl1 = urls1[Math.floor(Math.random() * urls1.length)]
    useUrl2 = urls2[Math.floor(Math.random() * urls2.length)]
    return (
        <div className="app">
            <div>

                <img style={{ position: 'absolute', left: '36%', top: '27%' }} alt="" width='400px' src="https://gifdb.com/images/high/peach-cat-will-you-be-my-valentine-pwv0x5b3amw0t6u9.gif"></img>
                {showYay && (<img alt="" src="yay.png" style={{ position: 'absolute', left: '42.5%', top: '15%' }}></img>)}
                <div >
                    <button className="noButton" onMouseMove={handleNoButtonHover} style={noButtonPosition}> No </button>

                    <button className="yesButton"
                        onClick={() => { setShowYay(true) }} >
                        Yes!
                    </button>

                </div>
            </div>
            <iframe style={{ position: 'absolute', left: '36%', top: '90%' }} title="vienna embed" src="https://open.spotify.com/embed/track/4U45aEWtQhrm8A5mxPaFZ7?utm_source=generator&theme=0" width="25%" height="150" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            <div style={{ position: 'absolute', left: '65%', top: '15%' }}>
                <InstagramEmbed url={useUrl1} width={550} />
            </div>
            <div style={{ position: 'absolute', left: '2%', top: '15%' }}>
                <InstagramEmbed url={useUrl2} width={550} />
            </div>
        </div >
    );
};

export default App;