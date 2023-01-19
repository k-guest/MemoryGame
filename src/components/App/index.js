import './style.scss';

import { useState } from 'react';

const card = [
    {"src": "/img/earth.png"},
    {"src": "/img/jupiter.png"},
    {"src": "/img/mars.png"},
    {"src": "/img/mercury.png"},
    {"src": "/img/neptune.png"},
    {"src": "/img/venus.png"},
]

function App () {

    const [cards, setCards] = useState([]);
    const [turns, setTurns] = useState(0);

    const shuffledCards = () => {
        const shuffledCards = [...card, ...card]
        .sort(() => Math.random() - 0.5)
        .map((card) => ({ ...card, id: Math.random() }))

        setCards(shuffledCards);
        setTurns(0);
    }

    console.log(cards, turns);

    return (
        <div className="app">
            <h1>Memory Game</h1>
            <button onClick={shuffledCards}>New Game</button>
        </div>
    );
}

export default App;