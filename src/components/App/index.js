import './style.scss';

import { useEffect, useState } from 'react';

import SingleCard from '../SingleCard/SingleCard';

const cardImages = [
    {"src": "/img/earth.png", matched: false},
    {"src": "/img/jupiter.png", matched: false},
    {"src": "/img/mars.png", matched: false},
    {"src": "/img/mercury.png", matched: false},
    {"src": "/img/neptune.png", matched: false},
    {"src": "/img/venus.png", matched: false}
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
                setCards(prevCards => {
                    return prevCards.map(card => {
                        if (card.src === choiceOne.src) {
                            return {...card, matched: true}
                        } else {
                            return card;
                        }
                    })
                })
                resetTurn();
            } else {
                setTimeout(() => resetTurn(), 500);
            }
        }
    }, [choiceOne, choiceTwo])

    console.log(cards);

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
                        flipped={card === choiceOne || card === choiceTwo || card.matched}
                    />
                ))}
            </div>
        </div>
    );
}

export default App;