import React from "react";

function Card({card, onCardClick}) {
    function handleClick() {
        onCardClick(card);
    }

    return (
        <li className="card">
            <div className="card__image" style={{ backgroundImage: `url(${card.link})`}} onClick={handleClick}></div>
            <div className="card__text-container">
                <h2 className="card__title">{card.name}</h2>
                <div className="card__like-container">
                    <button className="card__like-button" type="button" aria-label="heart-shaped like button"></button>
                    <span className="card__like-counter">{card.likes.length}</span>
                </div>
            </div>
            <button className="card__delete-button" type="button" aria-label="card delete button" disabled></button>
        </li>
    );
}

export default Card;