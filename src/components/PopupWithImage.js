import { render } from "@testing-library/react";
import React from "react";

function PopupWithImage() {
    render(
        <div className="modal modal_type_image-preview">
            <figure className="modal__figure">
                <img className="modal__image" alt="js" src="js" />
                <figcaption className="modal__caption"></figcaption>
                <button className="modal__close-button modal__close-button_type_image" type="button" aria-label="close"></button>
            </figure>
        </div>
    );
}

export default PopupWithImage;