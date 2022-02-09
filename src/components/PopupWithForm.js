import React from "react";

function PopupWithForm({title, formName, isOpen, onClose, onSubmit, children}) {

  return(
    <div className={`modal ${isOpen ? 'modal_open' : ''}`}> 
      <div className="modal__box">
        <button className="modal__close-button" type="button" aria-label="close" onClick={onClose}/>
        <h3 className="modal__title">{title}</h3>
        <form className='modal__form' name={formName} onSubmit={onSubmit}>
          {children}
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;