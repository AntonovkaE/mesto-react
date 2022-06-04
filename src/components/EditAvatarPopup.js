import PopupWithForm from "./PopupWithForm";
import React, {useEffect, useState} from 'react';
import {CurrentUserContext} from "../contexts/CurrentUserContext";

function EditProfilePopup({isOpen, onClose, onUpdateAvatar}) {
    const currentUser = React.useContext(CurrentUserContext);
    const [avatar, setAvatar] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        onUpdateAvatar(avatar);
    }
    const handleLink = (e) => {
        setAvatar(e.target.value)
    }

    useEffect(() => {
        setAvatar(currentUser.avatar);
    }, [currentUser]);

    return (<PopupWithForm name='changeAvatar'
                           title='Обновить аватар'
                           isOpen={isOpen}
                           onClose={onClose}
                           submitButtonText="Сохранить"
                           onSubmit={handleSubmit}
    >
        <label htmlFor="place-input" className="form__label">
            <input onChange={handleLink} type="url" name="avatarInput" id="avatar-input"
                   className="form__item form__item_el_avatar" placeholder="Ссылка на аватар"
                   minLength={2} required/>
            <span className="form__item-error avatar-input-error"/>
        </label>
    </PopupWithForm>)

}


export default EditProfilePopup;