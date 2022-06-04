import React from 'react';
import {useEffect, useState} from 'react'
import '../App.css';
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import PopupWithForm from './PopupWithForm'
import EditProfilePopup from "./EditProfilePopup";
import ImagePopup from "./ImagePopup";
import api from "../utils/Api";
import {CurrentUserContext} from "../contexts/CurrentUserContext";
import Card from "./Card";

function App() {
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
    const [selectedCard, setSelectedCard] = useState(null)
    const [currentUser, setCurrentUser] = useState({})
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

    const handleUpdateUser = ({name, about}) => {
        api.saveUserData(name, about)
            .then((userData) => {
                setCurrentUser(userData)
            })
            .then(res => {closeAllPopups()
            return res})
            .catch(res => console.log("Error in promise"))
    }

    useEffect(() => {
        api.getUserData()
            .then(res => {
                setCurrentUser(res)
            })
    }, [])



    return (
        <CurrentUserContext.Provider value={currentUser}>
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
                    <EditProfilePopup onUpdateUser={handleUpdateUser} isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} />
                    <ImagePopup
                        card={selectedCard}
                        onClose={closeAllPopups}
                    />
                </div>
            </div>
        </CurrentUserContext.Provider>

    );
}

export default App;
