import React from "react";

function Main() {
  function handleEditAvatarClick() {
    const editAvatarPopup = document.querySelector('.modal_type_edit-avatar');
    editAvatarPopup.classList.add('modal_open');
  }

  function handleEditProfileClick() {
    const editProfilePopup = document.querySelector('.modal_type_edit');
    editProfilePopup.classList.add('modal_open');
  }

  function handleAddPlaceClick() {
    const addCardPopup = document.querySelector('.modal_type_add');
    addCardPopup.classList.add('modal_open');
  }
  
  return(
    <main>
      <section className="profile page__wrapper">
        <button className="profile__avatar" type="button" aria-label="edit-avatar">
          <img className="profile__avatar-button" onClick={handleEditAvatarClick} alt="edit-avatar" />
        </button>
        <div className="profile__info">
          <div className="profile__info-name">
            <h1 className="profile__name"></h1>
            <button className="profile__edit-button" type="button" onClick={handleEditProfileClick} aria-label="edit-profile"></button>
          </div>
          <p className="profile__profession"></p>
        </div>
        <button className="profile__add-button" type="button" onClick={handleAddPlaceClick} aria-label="add-profile"></button>
      </section>
      <section className="places page__wrapper">
        <ul className="places__list">
        </ul>
      </section>
    </main>
  );
}

export default Main;
