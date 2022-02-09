import React from "react";
import { UserContext } from '../contexts/CurrentUserContext';

function Card({card, onCardClick, onCardLike, onCardDelete}) {

  // Current User Context //
  const currentUser = React.useContext(UserContext);
  const currentUserCard = card.owner._id === currentUser._id;
  const currentUserLike = card.likes.some(card => card._id === currentUser._id);

  // Card Event handlers //
  function handleClick() {
    onCardClick(card);
  }

  function handleCardLike() {
    onCardLike(card, card._id);
  }

  function handleCardDelete() {
    onCardDelete(card._id);
  }
  
  return (
    <li className="card">
      <div className="card__image" style={{ backgroundImage: `url(${card.link})`}} onClick={handleClick}/>
      <div className="card__text-container">
        <h2 className="card__title">{card.name}</h2>
        <div className="card__like-container">
          <button
            className={`${"card__like-button"} ${currentUserLike ? 'card__like-button_active' : ''}`} 
            type="button" onClick={handleCardLike}
            aria-label="heart-shaped like button"
          />
          <span className="card__like-counter">{card.likes.length}</span>
        </div>
      </div>
      <button 
        className={`${"card__delete-button"} ${currentUserCard ? 'card__delete-button_active' : ''}`}
        type="button" 
        onClick={handleCardDelete}
        aria-label="card delete button"
      />
    </li>
  );
}

export default Card;