import React from "react";
import Header from "./Header";
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from "./PopupWithForm";

function App() {
  // Popup State and Event handlers //
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleCloseButtonClick() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
  }

  return (
    <div className="page">
      <Header />
      <Main onEditProfileClick={handleEditProfileClick} onAddPlaceClick={handleAddPlaceClick} onEditAvatarClick={handleEditAvatarClick} />
      <Footer />
      <PopupWithForm isOpen={isEditProfilePopupOpen} title='Edit Profile' onClose={handleCloseButtonClick}>
        <input type="text" name="name" class="modal__input modal__input_content_name" id="modal__name" placeholder="Profile Name" minlength="2" maxlength="200" required/>
        <span class="modal__input-error" id="modal__name-error"></span>
        <input type="text" name="about" class="modal__input modal__input_content_profession" id="modal__profession" placeholder="Profile Profession" minlength="2" maxlength="200" required/>
        <span class="modal__input-error" id="modal__profession-error"></span>
        <button class="modal__save-button" id="Save" type="submit">Save</button>
      </PopupWithForm>
      <PopupWithForm isOpen={isAddPlacePopupOpen} title='New Place' onClose={handleCloseButtonClick}>
        <input type="text" name="name" class="modal__input modal__input_content_card-name" id="modal__card-name" placeholder="Title" minlength="2" maxlength="30" required/>
        <span class="modal__input-error" id="modal__card-name-error"></span>
        <input type="url" name="link" class="modal__input modal__input_content_card-link" id="modal__card-link" placeholder="Image Link" required/>
        <span class="modal__input-error" id="modal__card-link-error"></span>
        <button class="modal__save-button modal__save-button_inactive modal__save-button_type_add" id="Create" type="submit" disabled>Create</button>
      </PopupWithForm>
      <PopupWithForm isOpen={isEditAvatarPopupOpen} title='Change Profile Picture' onClose={handleCloseButtonClick}>
        <input type="url" name="avatar" class="modal__input modal__input_content_avatar-link" id="modal__avatar-link" placeholder="Image Link" required/>
        <span class="modal__input-error" id="modal__avatar-link-error"></span>
        <button class="modal__save-button" id="Save Picture" type="submit">Save Picture</button>
      </PopupWithForm>
    </div>
  );
}

export default App;