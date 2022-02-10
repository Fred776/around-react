import React from "react";
import Popup from "./Popup";
import PopupWithForm from "./PopupWithForm";

function CardDeletePopup({card, onClose, onDeleteCard}) {
  
  function handleSubmit(e) {
    e.preventDefault();
    onDeleteCard(card._id)
  }

  return (
    <Popup type='form' card={card} onClose={onClose}>
        <PopupWithForm title="Are You Sure?" formName="deleteCardForm" buttonText="Yes" onClose={onClose} onSubmit={handleSubmit}/>
    </Popup>
  );
}

export default CardDeletePopup;