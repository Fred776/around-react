import React from "react";
import { UserContext } from '../contexts/CurrentUserContext';
import api from "../utils/api";
import Header from "./Header";
import Main from './Main';
import Footer from './Footer';
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
import ImagePopup from "./ImagePopup";

function App() {

  // Current User, Card and Popup States //
  const [currentUser, setCurrentUser] = React.useState({});

  const [cards, setCards] = React.useState([]);

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);

  //  Current User and Card Api calls on page load //
  React.useEffect(() => {
    api.getUserInfo().then(userData => {
      setCurrentUser(userData);
    })
    .catch(err => console.log(`Error: ${err}`));
  }, []);

  React.useEffect(() => {
    api.getCards().then(cardsData => {
      setCards(cardsData);
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

  function handleClosePopup() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard(null);
  }

  // Profile Updates and Add Card //
  function handleUpdateUser(userUpdateData) {
    api.editUserInfo(userUpdateData).then(newUserData => {
      setCurrentUser(newUserData);
      handleClosePopup();
    })
    .catch(err => console.log(`Error: ${err}`));
  }

  function handleUpdateAvatar(avatarUpdateData) {
    api.editUserAvatar(avatarUpdateData).then(newAvatarData => {
      setCurrentUser(newAvatarData);
      handleClosePopup();
    })
    .catch(err => console.log(`Error: ${err}`));
  }     

  function handleAddCard(cardData) {
    api.addCard(cardData).then(newCard => {
      setCards([newCard, ...cards])
      handleClosePopup();
    })
    .catch(err => console.log(`Error: ${err}`));
  }

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
    api.deleteCard(cardId).then(() => {
      setCards((cards) => (cards.filter((card) => card._id !== cardId)))
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
            cards={cards}
            onCardClick={handleCardClick}
            onCardLike={handleCardLike}
            onCardDelete={handleCardDelete}
          />
          <Footer/>
          <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={handleClosePopup} onUpdateUser={handleUpdateUser}/>
          <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={handleClosePopup} onUpdateAvatar={handleUpdateAvatar}/>
          <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={handleClosePopup} onAddCard={handleAddCard}/>
          <ImagePopup card={selectedCard} onClose={handleClosePopup}/>
        </div>
      </UserContext.Provider>
    </>
  );
}

export default App;