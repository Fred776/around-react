import React from "react";
import { UserContext } from '../contexts/CurrentUserContext';
import api from "../utils/api";
import Header from "./Header";
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from "./PopupWithForm";
import EditProfilePopup from "./EditProfilePopup";
import ImagePopup from "./ImagePopup";

function App() {

  // Popup State and Current User State //
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);

  const [currentUser, setCurrentUser] = React.useState({});

  React.useEffect(() => {
    api.getUserInfo().then(userData => {
      setCurrentUser(userData);
    })
    .catch(err => console.log(`Error: ${err}`));
  }, []);


  // Click Event Handlers //
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function handleClose() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard(null);
  }


  // Profile Updates //
  function handleUpdateUser(userUpdateData) {
    api.editUserInfo(userUpdateData).then(newUserData => {
      setCurrentUser(newUserData);
      handleClose();
    })
    .catch(err => console.log(`Error: ${err}`));
  }


  return (
    <>
      <UserContext.Provider value = {currentUser}>
        <div className="page">
          <Header/>
          <Main 
            onEditProfileClick={handleEditProfileClick}
            onAddPlaceClick={handleAddPlaceClick} 
            onEditAvatarClick={handleEditAvatarClick} 
            onCardClick={handleCardClick} 
          />
          <Footer/>
          <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={handleClose} onUpdateUser={handleUpdateUser}/>
          <PopupWithForm 
            isOpen={isAddPlacePopupOpen} 
            title='New Place' 
            onClose={handleClose}
          >
            <input type="text" name="name" className="modal__input modal__input_content_card-name" id="modal__card-name" placeholder="Title" minLength="2" maxLength="30" required/>
            <span className="modal__input-error" id="modal__card-name-error"/>
            <input type="url" name="link" className="modal__input modal__input_content_card-link" id="modal__card-link" placeholder="Image Link" required/>
            <span className="modal__input-error" id="modal__card-link-error"/>
            <button className="modal__save-button modal__save-button_inactive modal__save-button_type_add" id="Create" type="submit" disabled>Create</button>
          </PopupWithForm>
          <PopupWithForm 
            isOpen={isEditAvatarPopupOpen} 
            title='Change Profile Picture' 
            onClose={handleClose}
          >
            <input type="url" name="avatar" className="modal__input modal__input_content_avatar-link" id="modal__avatar-link" placeholder="Image Link" required/>
            <span className="modal__input-error" id="modal__avatar-link-error"/>
            <button className="modal__save-button" id="Save Picture" type="submit">Save Picture</button>
          </PopupWithForm>
          <ImagePopup 
            card={selectedCard} 
            onClose={handleClose}
          />
        </div>
      </UserContext.Provider>
    </>
  );
}

export default App;