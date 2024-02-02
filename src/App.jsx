import React, { useState } from 'react';
import './App.css';

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

    //const [audio] = useState(new Audio('audio.mp3'));
    const [showYay, setShowYay] = useState(false)

    const handleNoButtonHover = () => {
        const randomLeft = Math.random() * (window.innerWidth - 200);
        const randomTop = Math.random() * (window.innerHeight - 200);
        setNoButtonPosition({
            ...noButtonPosition,
            left: `${randomLeft}px`,
            top: `${randomTop}px`
        });

    };

    return (
        <div className="app">
            <div>

                <img style={{ position: 'absolute', left: '36%', top: '27%' }} alt="" width='400px' src="https://gifdb.com/images/high/peach-cat-will-you-be-my-valentine-pwv0x5b3amw0t6u9.gif"></img>
                {showYay && (<img alt="" src="yay.png" style={{ position: 'absolute', left: '42.6%', bottom: '41%' }}></img>)}
                <div >
                    <button className="noButton" onMouseMove={handleNoButtonHover} style={noButtonPosition}> No </button>

                    <button className="yesButton"
                        onClick={() => { setShowYay(true) }} >
                        Yes!
                    </button>

                </div>
            </div>
            <iframe style={{ position: 'absolute', left: '36%', top: '90%' }} title="vienna embed" src="https://open.spotify.com/embed/track/4U45aEWtQhrm8A5mxPaFZ7?utm_source=generator&theme=0" width="25%" height="150" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </div >
    );
};

export default App;