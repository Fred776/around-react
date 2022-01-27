import React from "react";
import api from '../utils/api.js';
import Card from './Card.js';
import editButtonSign from '../images/profile__edit-button-sign.svg';

function Main({onEditProfileClick, onAddPlaceClick, onEditAvatarClick, onCardClick}) {
  // User data State and Effects //
  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getUserInfo().then(userData => {
      setUserName(userData.name);
      setUserDescription(userData.about);
      setUserAvatar(userData.avatar);
    })
    .catch(err => console.log(`Error: ${err}`));
  }, []);

  React.useEffect(() => {
    api.getCards().then(cardsData => {
      console.log(cardsData)
      setCards(cardsData);
    })
    .catch(err => console.log(`Error: ${err}`));
  }, []);

  return(
    <main>
      <section className="profile page__wrapper">
        <button className="profile__avatar" type="button" style={{backgroundImage: `url(${userAvatar})`}} onClick={onEditAvatarClick} aria-label="edit-avatar">
          <img className="profile__avatar-button" src={editButtonSign} alt="edit-avatar" />
        </button>
        <div className="profile__info">
          <div className="profile__info-name">
            <h1 className="profile__name">{userName}</h1>
            <button className="profile__edit-button" type="button" onClick={onEditProfileClick} aria-label="edit-profile"/>
          </div>
          <p className="profile__profession">{userDescription}</p>
        </div>
        <button className="profile__add-button" type="button" onClick={onAddPlaceClick} aria-label="add-profile"/>
      </section>
      <section className="places page__wrapper">
        <ul className="places__list">
          {cards.map((card, id = card._id ) => (<Card key={id} card={card} onCardClick={onCardClick}/>))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
