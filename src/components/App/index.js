import './style.scss';

import { useEffect, useState } from 'react';

import SingleCard from '../SingleCard/SingleCard';

const cardImages = [
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
    const [choiceOne, setChoiceOne] = useState(null);
    const [choiceTwo, setChoiceTwo] = useState(null);

    const shuffledCards = () => {
        const shuffledCards = [...cardImages, ...cardImages]
        .sort(() => Math.random() - 0.5)
        .map((card) => ({ ...card, id: Math.random() }))

        setCards(shuffledCards);
        setTurns(0);
    }

    const handleChoice = (card) => {
        choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
    }

    useEffect(() => {
        if (choiceOne && choiceTwo) {
            if (choiceOne.src === choiceTwo.src) {
                console.log("Those cards match");
                resetTurn();
            } else {
                console.log("Those cards do not match");
                resetTurn();
            }
        }
    }, [choiceOne, choiceTwo])

    const resetTurn = () => {
        setChoiceOne(null);
        setChoiceTwo(null);
        setTurns(prevTurns => prevTurns + 1);
    }

    return (
        <div className="app">
            <h1>Memory Game</h1>
            <button onClick={shuffledCards}>New Game</button>

            <div className="card-grid">
                {cards.map(card => (
                    <SingleCard
                        key={card.id}
                        card={card}
                        handleChoice={handleChoice}
                    />
                ))}
            </div>
        </div>
    );
}

export default App;