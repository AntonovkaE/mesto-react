import closeIcon from "../img/CloseIcon.svg";

import React from 'react';

function ConfirmationPopup({card, onSubmit, isOpen, onCLose}) {
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(card)
    }
    return (
        <div className={`popup popup_deleteCard ${isOpen && 'popup_open'} close-area`}>
            <div className="popup__container">
                <button
                    onClick={onCLose}
                    type="button"
                    className="button popup__button popup__button_type_close close-area"
                    data-bs-dismiss="form_edit"
                    aria-label="Close"
                    data-close=""
                >
                    <img
                        className="popup__icon popup__icon_type_close close-area"
                        src={closeIcon}
                        alt="крестик"
                    />
                </button>
                <div className="popup__content">
                    <h2 className="popup__heading popup__heading_deletePopup">Вы уверены?</h2>
                    <form
                        onSubmit={handleSubmit}
                        className="popup__form form form_deleteCard"
                        name="deleteCardForm"
                        noValidate=""
                    >
                        <button
                            type="submit"
                            className="button form__submit"
                            aria-label="Удалить"
                            name="formSubmit"
                        >
                            Да
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ConfirmationPopup;