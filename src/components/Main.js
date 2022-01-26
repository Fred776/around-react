import React from "react";

function Main({onEditProfileClick, onAddPlaceClick, onEditAvatarClick, onCardClick}) {
  return(
    <main>
      <section className="profile page__wrapper">
        <button className="profile__avatar" type="button" aria-label="edit-avatar">
          <img className="profile__avatar-button" onClick={onEditAvatarClick} alt="edit-avatar" />
        </button>
        <div className="profile__info">
          <div className="profile__info-name">
            <h1 className="profile__name"></h1>
            <button className="profile__edit-button" type="button" onClick={onEditProfileClick} aria-label="edit-profile"></button>
          </div>
          <p className="profile__profession"></p>
        </div>
        <button className="profile__add-button" type="button" onClick={onAddPlaceClick} aria-label="add-profile"></button>
      </section>
      <section className="places page__wrapper">
        <ul className="places__list">
        </ul>
      </section>
    </main>
  );
}

export default Main;
