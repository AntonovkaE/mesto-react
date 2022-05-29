import closeIcon from "./img/CloseIcon.svg";

import React from 'react';


function PopupImage(props) {
    return (
        <div className={`popup popup_openImage ${props.card && 'popup_open'}  close-area`} visibility="hidden">
            <div className="popup__container popup__container_image">
                <button onClick={props.onClose} type="button" className="button popup__button popup__button_type_close close-area" data-bs-dismiss="form_add" aria-label="Close">
                    <img className="popup__icon popup__icon_type_close close-area" src={closeIcon} alt="крестик" />
                </button>
                <figure className="popup__figure">
                    <img src={props.card && props.card.link} alt={props.card.name} className="popup__img" />
                    <figcaption className="popup__caption" >{props.card.name}</figcaption>
                </figure>
            </div>
        </div>
    );
}

export default PopupImage;


