import React from "react";
import Header from "./Header";
import Main from './Main';
import Footer from './Footer';

function App() {
  return (
    <div class="page">
      <Header />
      <Main />
      <Footer />
      <div class="modal modal_type_edit">
        <div class="modal__box">
          <button class="modal__close-button modal__close-button_type_edit" type="button" aria-label="close"></button>
          <h3 class="modal__title">Edit Profile</h3>
          <form class="modal__form modal__form_type_edit" name="userForm">
            <input type="text" name="name" class="modal__input modal__input_content_name" id="modal__name" placeholder="Profile Name" minlength="2" maxlength="200" required />
            <span class="modal__input-error" id="modal__name-error"></span>
            <input type="text" name="about" class="modal__input modal__input_content_profession" id="modal__profession" placeholder="Profile Profession" minlength="2" maxlength="200" required />
            <span class="modal__input-error" id="modal__profession-error"></span>
            <button class="modal__save-button" id="Save" type="submit">Save</button>
          </form>
        </div>
      </div>
      <div class="modal modal_type_edit-avatar">
        <div class="modal__box">
          <button class="modal__close-button modal__close-button_type_edit-avatar" type="button" aria-label="close"></button>
          <h3 class="modal__title">Change profile picture</h3>
          <form class="modal__form modal__form_type_edit-avatar" name="userForm">
            <input type="url" name="avatar" class="modal__input modal__input_content_avatar-link" id="modal__avatar-link" placeholder="Image Link" required />
            <span class="modal__input-error" id="modal__avatar-link-error"></span>
            <button class="modal__save-button" id="Save Picture" type="submit">Save Picture</button>
          </form>
        </div>
      </div>
      <div class="modal modal_type_add">
        <div class="modal__box">
          <button class="modal__close-button modal__close-button_type_add" type="button" aria-label="close"></button>
          <h3 class="modal__title">New place</h3>
          <form class="modal__form modal__form_type_add" name="userForm">
            <input type="text" name="name" class="modal__input modal__input_content_card-name" id="modal__card-name" placeholder="Title" minlength="2" maxlength="30" required />
            <span class="modal__input-error" id="modal__card-name-error"></span>
            <input type="url" name="link" class="modal__input modal__input_content_card-link" id="modal__card-link" placeholder="Image Link" required />
            <span class="modal__input-error" id="modal__card-link-error"></span>
            <button class="modal__save-button modal__save-button_inactive modal__save-button_type_add" id="Create" type="submit" disabled>Create</button>
          </form>
        </div>
      </div>
      <div class="modal modal_type_image-preview">
        <figure class="modal__figure">
          <img class="modal__image" alt="js" src="js" />
          <figcaption class="modal__caption"></figcaption>
          <button class="modal__close-button modal__close-button_type_image" type="button" aria-label="close"></button>
        </figure>
      </div>
      <div class="modal modal_type_delete">
        <div class="modal__box">
          <button class="modal__close-button modal__close-button_type_delete" type="button" aria-label="close"></button>
          <h3 class="modal__title">Are you sure?</h3>
          <form class="modal__form modal__form_type_delete modal__form_type_small" name="userForm">
            <button class="modal__save-button modal__save-button_type_small" id="Yes" type="submit">Yes</button>
          </form>
        </div>
      </div>
      <template class="card__template">
        <li class="card">
          <div class="card__image"></div>
          <div class="card__text-container">
            <h2 class="card__title"></h2>
            <div class="card__like-container">
              <button class="card__like-button" type="button" aria-label="heart-shaped like button"></button>
              <span class="card__like-counter"></span>
            </div>
          </div>
          <button class="card__delete-button" type="button" aria-label="card delete button" disabled></button>
        </li>
      </template>
    </div>
  );
}

export default App;
