import React from "react";

function PopupWithForm({type, title, isOpen, onClose, children}) {
    return(
        <div className={`modal ${isOpen ? 'modal_open' : ''}`}> 
            <div className="modal__box">
                <button className="modal__close-button" type="button" aria-label="close" onClick={onClose}></button>
                <h3 className="modal__title">{title}</h3>
                <form className={`modal__form modal__form_${type}`} name="userForm">
                    {children}
                </form>
            </div>
        </div>
    );
}

export default PopupWithForm;