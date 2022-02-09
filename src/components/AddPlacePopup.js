import React from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({isOpen, onClose, onAddCard}) {
  
  // Input Ref //
  const nameInputRef = React.useRef();
  const linkInputRef = React.useRef();

  React.useEffect(() => {
    nameInputRef.current.value = "";
    linkInputRef.current.value = "";
  }, [isOpen]);

  // Submit Handler //
  function handleSubmit(e) {
    e.preventDefault();
    onAddCard({
        name: nameInputRef.current.value,
        link: linkInputRef.current.value
    });
  }

  return (
    <PopupWithForm title='New Place' formName="addPlaceForm" isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit}>
      <input 
        type="text" 
        name="name" 
        className="modal__input modal__input_content_card-name" 
        id="modal__card-name" 
        ref={nameInputRef}
        placeholder="Title" 
        minLength="2" 
        maxLength="30" 
        required
      />
      <span className="modal__input-error" id="modal__card-name-error"/>
      <input 
        type="url"
        name="link"
        className="modal__input modal__input_content_card-link"
        id="modal__card-link" 
        ref={linkInputRef}
        placeholder="Image Link" 
        required
      />
      <span className="modal__input-error" id="modal__card-link-error"/>
      <button className="modal__save-button" id="Create" type="submit">Create</button>
    </PopupWithForm>
  );
}

export default AddPlacePopup;