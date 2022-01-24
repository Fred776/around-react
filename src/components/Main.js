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
      <section class="profile page__wrapper">
        <button class="profile__avatar" type="button" aria-label="edit-avatar">
          <img class="profile__avatar-button" onClick={handleEditAvatarClick} alt="edit-avatar" />
        </button>
        <div class="profile__info">
          <div class="profile__info-name">
            <h1 class="profile__name"></h1>
            <button class="profile__edit-button" type="button" onClick={handleEditProfileClick} aria-label="edit-profile"></button>
          </div>
          <p class="profile__profession"></p>
        </div>
        <button class="profile__add-button" type="button" onClick={handleAddPlaceClick} aria-label="add-profile"></button>
      </section>
      <section class="places page__wrapper">
        <ul class="places__list">
        </ul>
      </section>
    </main>
  );
}

export default Main;
