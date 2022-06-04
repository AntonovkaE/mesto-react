import PopupWithForm from "./PopupWithForm";
import React, {useState} from 'react';
import {CurrentUserContext} from "../contexts/CurrentUserContext";

function AppPlacePopup({isOpen, onClose, onAddPlace}) {
    const currentUser = React.useContext(CurrentUserContext);
    const [card, setCards] = useState('')
    const [name, setName] = useState('')
    const [link, setLink] = useState('')

    const handleNameChange = (e) => {
        setName(e.target.value)
    }

    const handleLinkChange = (e) => {
        setLink(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddPlace({
            name,
            link,
            likes: []
        });
    }

    // useEffect(() => {
    //     console.log("montirovka")
    //     setName(currentUser.name);
    //     set(currentUser.about);
    // }, [currentUser]);


    return (<PopupWithForm
        name='addCard'
        title='Новое место'
        isOpen={isOpen}
        onClose={onClose}
        submitButtonText="Создать"
        onSubmit={handleSubmit}
    >
        <label htmlFor="place-input" className="form__label">
            <input onChange={handleNameChange} type="text" name="placeInput" id="place-input"
                   className="form__item form__item_el_name"
                   placeholder="Название" maxLength={30} minLength={2} required/>
            <span className="form__item-error place-input-error"/>
        </label>
        <label htmlFor="url-input" className="form__label">
            <input onChange={handleLinkChange} type="url" id="url-input" name="urlInput"
                   className="form__item form__item_el_url"
                   placeholder="Ссылка на картинку" minLength={2} required/>
            <span className="form__item-error url-input-error"/>
        </label>
    </PopupWithForm>)

}


export default AppPlacePopup;