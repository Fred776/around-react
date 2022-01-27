import React from "react";

function Card({card}) {
    return (
        <li class="card">
            <div class="card__image" style={{ backgroundImage: `url(${card.link})`}}></div>
            <div class="card__text-container">
                <h2 class="card__title">{card.name}</h2>
                <div class="card__like-container">
                    <button class="card__like-button" type="button" aria-label="heart-shaped like button"></button>
                    <span class="card__like-counter">{card.likes.length}</span>
                </div>
            </div>
            <button class="card__delete-button" type="button" aria-label="card delete button" disabled></button>
        </li>
    );
}

export default Card;