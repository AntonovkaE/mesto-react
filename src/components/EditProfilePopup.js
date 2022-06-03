import PopupWithForm from "./PopupWithForm";
import closeIcon from '../img/CloseIcon.svg';
import React from 'react';
import {useState, useEffect} from "react";
import {CurrentUserContext} from "../contexts/CurrentUserContext";

function EditProfilePopup({isOpen, onClose}) {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')

    function handleNameChange(e) {
        setName(e.target.value);
    }

    function handleDescriptionChange(e) {
        setDescription(e.target.value);
    }
    const currentUser = React.useContext(CurrentUserContext);

    useEffect(() => {
        setName(currentUser.name);
        setDescription(currentUser.about);
    }, [currentUser]);


    return (<PopupWithForm
        name='editForm'
        title='Редактировать профиль'
        isOpen={isOpen}
        onClose={onClose}
        submitButtonText="Сохранить"
    >
        <label htmlFor="name-input" className="form__label">
            <input value={name} onChange={handleNameChange} type="text" name="nameInput" id="name-input" className="form__item form__item_el_name"
                   placeholder="Ваше имя" maxLength={200} minLength={2} required/>
            <span className="form__item-error name-input-error"/>
        </label>
        <label htmlFor="description-input" className="form__label">
            <input value={description} onChange={handleDescriptionChange} type="text" name="descriptionInput" id="description-input"
                   className="form__item form__item_el_description" placeholder="О себе" maxLength={400}
                   minLength={2} required/>
            <span className="form__item-error description-input-error"/>
        </label>
    </PopupWithForm>)

}




export default EditProfilePopup;