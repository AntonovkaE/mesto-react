import closeIcon from './img/CloseIcon.svg';
import React, {useState, useEffect} from 'react';
import './App.css';
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import PopupWithForm from './PopupWithForm'
import PopupImage from "./ImagePopup";


function App() {
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
    const [selectedCard, setSelectedCard] = React.useState('')

    const handleEditProfileClick = () => {
        setIsEditProfilePopupOpen(!isEditProfilePopupOpen)
    }

    const handleEditAvatarClick = () => {
        setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen)
    }
    const handleAddPlaceClick = () => {setIsAddPlacePopupOpen(!isAddPlacePopupOpen)}
    
    const handleCardClick = (card) => {
        setSelectedCard(card)
    }

    const closeAllPopups = () => {
        setIsAddPlacePopupOpen(false)
        setIsEditAvatarPopupOpen(false)
        setIsEditProfilePopupOpen(false)
        setSelectedCard('')
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
                               children={<><label htmlFor="place-input" className="form__label">
                                            <input type="url" name="avatarInput" id="avatar-input" className="form__item form__item_el_avatar" placeholder="Ссылка на аватар" minLength={2} required />
                                                      <span className="form__item-error avatar-input-error" />
                                                  </label>
                                                  <button type="submit" className="button form__submit" aria-label="Создать" name="formSubmit">
                                                      Сохранить
                                                  </button> </>}
                />
                <PopupWithForm
                    name='addCard'
                    title='Новое место'
                    isOpen={isAddPlacePopupOpen}
                    onClose={closeAllPopups}
                    children={<><label htmlFor="place-input" className="form__label">
                        <input type="text" name="placeInput" id="place-input" className="form__item form__item_el_name"
                               placeholder="Название" maxLength={30} minLength={2} required/>
                        <span className="form__item-error place-input-error"/>
                    </label>
                        <label htmlFor="url-input" className="form__label">
                        <input type="url" id="url-input" name="urlInput" className="form__item form__item_el_url" placeholder="Ссылка на картинку" minLength={2} required />
                        <span className="form__item-error url-input-error" />
                        </label>
                        <button type="submit" className="button form__submit" aria-label="Создать" name="formSubmit">
                        Создать </button>
                    </> }
                        />
                <PopupWithForm
                    name='editForm'
                    title='Редактировать профиль'
                    isOpen={isEditProfilePopupOpen}
                    onClose={closeAllPopups}
                    children={<> <label htmlFor="name-input" className="form__label">
                                            <input type="text" name="nameInput" id="name-input" className="form__item form__item_el_name" placeholder="Ваше имя" maxLength={200} minLength={2} required />
                                            <span className="form__item-error name-input-error" />
                                        </label>
                                        <label htmlFor="description-input" className="form__label">
                                            <input type="text" name="descriptionInput" id="description-input" className="form__item form__item_el_description" placeholder="О себе" maxLength={400} minLength={2} required />
                                            <span className="form__item-error description-input-error" />
                                        </label>
                                       <button type="submit" className="button form__submit" aria-label="Сохранить" name="formSubmit">
                                            Сохранить
                                        </button> </>}
                />
                <PopupImage
                    card={selectedCard}
                    onClose={closeAllPopups}
                />
            </div>

        </div>
    );
}

export default App;
