import React from "react";

function PopupWithForm(props) {
    render(
        <div className={`modal modal_type_${props.name}`}> 
            <div className="modal__box">
                <button className="modal__close-button" type="button" aria-label="close"></button>
                <h3 className="modal__title">{props.title}</h3>
                <form className={`modal__form modal__form_${props.name}`} name="userForm">
                    <input type="text" name="name" className={`modal__input modal__input_content${props.inputName1}`} id="modal__name" placeholder={props.placeholder1} minlength="2" maxlength="200" required />
                    <span class="modal__input-error" id="modal__name-error"></span>
                    <input type="text" name="about" className={`modal__input modal__input_content${props.inputName1}`} id="modal__profession" placeholder={props.placeholder2} minlength="2" maxlength="200" required />
                    <span className="modal__input-error" id="modal__profession-error"></span>
                    <button className="modal__save-button" id="Save" type="submit">{props.saveButton}</button>
                </form>
            </div>
        </div>
    );
}

export default PopupWithForm;