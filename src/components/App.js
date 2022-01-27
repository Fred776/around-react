import React from "react";
import Header from "./Header";
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from "./PopupWithForm";
import PopupWithImage from "./PopupWithImage";

function App() {
  // Popup State and Event handlers //
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState('');

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function handleCloseClick() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard('');
  }

  return (
    <div className="page">
      <Header />
      <Main onEditProfileClick={handleEditProfileClick} onAddPlaceClick={handleAddPlaceClick} onEditAvatarClick={handleEditAvatarClick} onCardClick={handleCardClick} />
      <Footer />
      <PopupWithForm isOpen={isEditProfilePopupOpen} title='Edit Profile' onClose={handleCloseClick}>
        <input type="text" name="name" className="modal__input modal__input_content_name" id="modal__name" placeholder="Profile Name" minlength="2" maxlength="200" required/>
        <span className="modal__input-error" id="modal__name-error"></span>
        <input type="text" name="about" className="modal__input modal__input_content_profession" id="modal__profession" placeholder="Profile Profession" minlength="2" maxlength="200" required/>
        <span className="modal__input-error" id="modal__profession-error"></span>
        <button className="modal__save-button" id="Save" type="submit">Save</button>
      </PopupWithForm>
      <PopupWithForm isOpen={isAddPlacePopupOpen} title='New Place' onClose={handleCloseClick}>
        <input type="text" name="name" className="modal__input modal__input_content_card-name" id="modal__card-name" placeholder="Title" minlength="2" maxlength="30" required/>
        <span className="modal__input-error" id="modal__card-name-error"></span>
        <input type="url" name="link" className="modal__input modal__input_content_card-link" id="modal__card-link" placeholder="Image Link" required/>
        <span className="modal__input-error" id="modal__card-link-error"></span>
        <button className="modal__save-button modal__save-button_inactive modal__save-button_type_add" id="Create" type="submit" disabled>Create</button>
      </PopupWithForm>
      <PopupWithForm isOpen={isEditAvatarPopupOpen} title='Change Profile Picture' onClose={handleCloseClick}>
        <input type="url" name="avatar" className="modal__input modal__input_content_avatar-link" id="modal__avatar-link" placeholder="Image Link" required/>
        <span className="modal__input-error" id="modal__avatar-link-error"></span>
        <button className="modal__save-button" id="Save Picture" type="submit">Save Picture</button>
      </PopupWithForm>
      <PopupWithImage card={selectedCard} onClose={handleCloseClick}/>
    </div>
  );
}

export default App;