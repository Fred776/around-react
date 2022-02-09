import React from "react";
import { UserContext } from "../contexts/CurrentUserContext";
import PopupWithForm from "./PopupWithForm";

function EditProfilePopup({isOpen, onClose, onUpdateUser}) {

  // CurrentUser Context and Input States //
  const currentUser = React.useContext(UserContext);

  const [name, setName] = React.useState('');
  const [profession, setProfession] = React.useState('');

  React.useEffect(() => {
    setName(currentUser.name);
    setProfession(currentUser.about);
  }, [currentUser, isOpen]);

  // Event handlers //
  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleProfessionChange(e) {
    setProfession(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser({
      name: name,
      about: profession
    });
  }

  return (
    <PopupWithForm title="Edit Profile" formName="editProfileForm" buttonText="Save" isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit}>  
      <input 
        type="text" 
        name="name" 
        className="modal__input modal__input_content_name" 
        id="modal__name" 
        value={name || ''}
        onChange={handleNameChange}
        placeholder="Profile Name" 
        minLength="2" 
        maxLength="200" 
        required
      />
      <span className="modal__input-error" id="modal__name-error"/>
      <input 
        type="text" 
        name="about" 
        className="modal__input modal__input_content_profession" 
        id="modal__profession"
        value={profession || ''}
        onChange={handleProfessionChange}
        placeholder="Profile Profession" 
        minLength="2" 
        maxLength="200" 
        required
      />
      <span className="modal__input-error" id="modal__profession-error"/>
    </PopupWithForm>
  );
}

export default EditProfilePopup;