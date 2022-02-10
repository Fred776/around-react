import React from "react";
import Popup from "./Popup";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({isOpen, onClose, onUpdateAvatar}) {

  // Input Ref //
  const inputRef = React.useRef();

  React.useEffect(() => {
    inputRef.current.value = "";
  }, [isOpen]);


  // Submit Handler //
  function handleSubmit(e) {
    e.preventDefault();
    onUpdateAvatar({
        avatar: inputRef.current.value
    });
  }


  return (
    <Popup type='form' isOpen={isOpen} onClose={onClose}>
      <PopupWithForm title="Edit Avatar" formName="editAvatarForm" buttonText="Save Picture" isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit}>
        <input 
          type="url" 
          name="avatar" 
          className="modal__input modal__input_content_avatar-link" 
          id="modal__avatar-link" 
          ref={inputRef}
          placeholder="Image Link" 
          required
        />
        <span className="modal__input-error" id="modal__avatar-link-error"/>
      </PopupWithForm>
    </Popup>
  );
}

export default EditAvatarPopup;
