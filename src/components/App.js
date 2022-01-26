import React from "react";
import Header from "./Header";
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from "./PopupWithForm";

function App() {
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
      <PopupWithForm isOpen={isEditProfilePopupOpen} title='Edit Profile' onClose={handleCloseButtonClick}/>
      <PopupWithForm isOpen={isAddPlacePopupOpen} title='New Place' onClose={handleCloseButtonClick}/>
      <PopupWithForm isOpen={isEditAvatarPopupOpen} title='Change Profile Picture' onClose={handleCloseButtonClick}/>
    </div>
  );
}

export default App;