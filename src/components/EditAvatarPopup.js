import React from "react";
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
    <PopupWithForm title="Edit Avatar" formName="editAvatarForm" isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit}>
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
      <button className="modal__save-button" id="Save Picture" type="submit">Save Picture</button>
    </PopupWithForm>
  )
}

export default EditAvatarPopup;
