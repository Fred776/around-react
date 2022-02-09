import React from "react";
import { UserContext } from '../contexts/CurrentUserContext';
import api from '../utils/api.js';
import Card from './Card.js';
import editButtonSign from '../images/profile__edit-button-sign.svg';

function Main({onEditProfileClick, onAddPlaceClick, onEditAvatarClick, onCardClick}) {

  // Current User State and Card Effect //
  const currentUser = React.useContext(UserContext);

  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getCards().then(cardsData => {
      setCards(cardsData);
    })
    .catch(err => console.log(`Error: ${err}`));
  }, []);
  

  // Card Event Handlers //
  function handleCardLike(card, cardId) {
    if(card.likes.some(card => card._id === currentUser._id)) {
      api.deleteLike(cardId).then(newCard => {
        setCards((state) => state.map((c) => c._id === card._id ? newCard : c))
      })
      .catch(err => console.log(`Error: ${err}`));
    } else {
      api.addLike(cardId).then(newCard => {
        setCards((state) => state.map((c) => c._id === card._id ? newCard : c))
      })
      .catch(err => console.log(`Error: ${err}`));
    }
  }

  function handleCardDelete(cardId) {
    api.deleteCard(cardId)
  }

  
  return(
    <main>
      <section className="profile page__wrapper">
        <button className="profile__avatar" type="button" style={{backgroundImage: `url(${currentUser.avatar})`}} onClick={onEditAvatarClick} aria-label="edit-avatar">
          <img className="profile__avatar-button" src={editButtonSign} alt="edit-avatar" />
        </button>
        <div className="profile__info">
          <div className="profile__info-name">
            <h1 className="profile__name">{currentUser.name}</h1>
            <button className="profile__edit-button" type="button" onClick={onEditProfileClick} aria-label="edit-profile"/>
          </div>
          <p className="profile__profession">{currentUser.about}</p>
        </div>
        <button className="profile__add-button" type="button" onClick={onAddPlaceClick} aria-label="add-profile"/>
      </section>
      <section className="places page__wrapper">
        <ul className="places__list">
          {cards.map((card) => (<Card key={card._id} card={card} onCardClick={onCardClick} onCardLike={handleCardLike} onCardDelete={handleCardDelete}/>))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
