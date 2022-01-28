import React from "react";

function ImagePopup({card, onClose}) {
  return(
    <div className={`modal modal_type_image-preview" ${card ? 'modal_open' : ''}`}>
      <figure className="modal__figure">
        <img className="modal__image" alt="place" src={card ? card.link : ''}/>
        <figcaption className="modal__caption">{card ? card.name : ''}</figcaption>
        <button className="modal__close-button modal__close-button_type_image" type="button" onClick={onClose}  aria-label="close"/>
      </figure> 
    </div>
  );
}

export default ImagePopup;