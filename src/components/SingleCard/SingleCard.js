import './SingleCard.scss';

function SingleCard ({ card }) {
    return (
        <div className="card">
            <div>
                <img className="front" src={card.src} alt="card front" />
                <img className="back" src="/img/astronaut.png" alt="card back" />
            </div>
        </div>
    );
}

export default SingleCard;