import React from 'react';
import {useEffect, useState} from 'react'
import '../App.css';
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import PopupWithForm from './PopupWithForm'
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
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
    const [cards, setCards] = useState([])

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
        console.log(card)
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

    const handleUpdateAvatar = (link) => {
        console.log(link)
        api.changeAvatar(link)
            .then((userData) => {
                setCurrentUser(userData)
            })
            .then(res => {
                closeAllPopups()
                return res
        })
            .catch(res => console.log("Error in promise"))
    }

    const handleCardLike = (card) => {
        const isLiked = card.likes.some(i => i._id === currentUser._id);

        api.changeLikeCardStatus(card._id, !isLiked)
            .then((newCard) => {
                setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
            });
    }

    const handleCardDelete = (card) => {
        console.log(`card ${card}`)
        api.deleteCard(card._id)
            .then((res) => {
                setCards((state) => state.filter(c => c._id !== card._id))
            });
    }

    useEffect(() => {
        api.getUserData()
            .then(res => {
                setCurrentUser(res)
            })
    }, [])

    useEffect(() => {
        api.getInitialCards()
            .then((cards) => {
                setCards(cards.map(item => ({
                    name: item.name,
                    link: item.link,
                    likes: item.likes,
                    _id: item._id,
                    owner: item.owner._id,
                })))
            })
            .catch(err => {
                console.log(err)
            });
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
                        cards={cards}
                        onCardLike={handleCardLike}
                        onCardDelete={handleCardDelete}
                    />
                    <Footer/>
                    <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar} />

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
