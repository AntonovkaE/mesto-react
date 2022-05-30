import React from 'react';
import {useEfffect, useState} from 'react'
import '../App.css';
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import PopupWithForm from './PopupWithForm'
import ImagePopup from "./ImagePopup";

function App() {
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
    const [selectedCard, setSelectedCard] = useState(null)
    const handleEditProfileClick = () => {
        setIsEditProfilePopupOpen(!isEditProfilePopupOpen)
    }
    const handleEditAvatarClick = () => {
        setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen)
    }
    const handleAddPlaceClick = () => {
        setIsAddPlacePopupOpen(!isAddPlacePopupOpen)
    }
    const handleCardClick = (card) => {
        setSelectedCard(card)
    }
    const closeAllPopups = () => {
        setIsAddPlacePopupOpen(false)
        setIsEditAvatarPopupOpen(false)
        setIsEditProfilePopupOpen(false)
        setSelectedCard(null)
    }
    return (
        <div className="root">
            <div className="page">
                <Header/>
                <Main
                    onEditAvatar={handleEditAvatarClick}
                    onAddPlace={handleAddPlaceClick}
                    onEditProfile={handleEditProfileClick}
                    onClose={closeAllPopups}
                    onCardClick={handleCardClick}
                />
                <Footer/>
                <PopupWithForm name='changeAvatar'
                               title='Обновить аватар'
                               isOpen={isEditAvatarPopupOpen}
                               onClose={closeAllPopups}
                               submitButtonText="Сохранить"
                >
                    <label htmlFor="place-input" className="form__label">
                        <input type="url" name="avatarInput" id="avatar-input"
                               className="form__item form__item_el_avatar" placeholder="Ссылка на аватар"
                               minLength={2} required/>
                        <span className="form__item-error avatar-input-error"/>
                    </label>
                </PopupWithForm>
                <PopupWithForm
                    name='addCard'
                    title='Новое место'
                    isOpen={isAddPlacePopupOpen}
                    onClose={closeAllPopups}
                    submitButtonText="Создать"
                >
                    <label htmlFor="place-input" className="form__label">
                        <input type="text" name="placeInput" id="place-input" className="form__item form__item_el_name"
                               placeholder="Название" maxLength={30} minLength={2} required/>
                        <span className="form__item-error place-input-error"/>
                    </label>
                    <label htmlFor="url-input" className="form__label">
                        <input type="url" id="url-input" name="urlInput" className="form__item form__item_el_url"
                               placeholder="Ссылка на картинку" minLength={2} required/>
                        <span className="form__item-error url-input-error"/>
                    </label>
                </PopupWithForm>
                <PopupWithForm
                    name='editForm'
                    title='Редактировать профиль'
                    isOpen={isEditProfilePopupOpen}
                    onClose={closeAllPopups}
                    submitButtonText="Сохранить"
                >
                    <label htmlFor="name-input" className="form__label">
                        <input type="text" name="nameInput" id="name-input" className="form__item form__item_el_name"
                               placeholder="Ваше имя" maxLength={200} minLength={2} required/>
                        <span className="form__item-error name-input-error"/>
                    </label>
                    <label htmlFor="description-input" className="form__label">
                        <input type="text" name="descriptionInput" id="description-input"
                               className="form__item form__item_el_description" placeholder="О себе" maxLength={400}
                               minLength={2} required/>
                        <span className="form__item-error description-input-error"/>
                    </label>
                </PopupWithForm>
                <ImagePopup
                    card={selectedCard}
                    onClose={closeAllPopups}
                />
            </div>
        </div>
    );
}

export default App;
