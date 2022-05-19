
import closeIcon from './img/CloseIcon.svg';
import React from 'react';
import './App.css';
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import PopupWithForm from  './PopupWithForm'
import PopupImage from "./ImagePopup";

const onEditProfile = {
    name: 'editForm',
    title: 'Редактировать профиль',
    isOpen: false,
    onClose: false,
    children: '<> <label htmlFor="name-input" className="form__label">\n' +
        '                            <input type="text" name="nameInput" id="name-input" className="form__item form__item_el_name" placeholder="Ваше имя" maxLength={200} minLength={2} required />\n' +
        '                            <span className="form__item-error name-input-error" />\n' +
        '                        </label>\n' +
        '                        <label htmlFor="description-input" className="form__label">\n' +
        '                            <input type="text" name="descriptionInput" id="description-input" className="form__item form__item_el_description" placeholder="О себе" maxLength={400} minLength={2} required />\n' +
        '                            <span className="form__item-error description-input-error" />\n' +
        '                        </label>\n' +
        '                        <button type="submit" className="button form__submit" aria-label="Сохранить" name="formSubmit">\n' +
        '                            Сохранить\n' +
        '                        </button> </>'
}

const onAddPlace = {
    name: 'addCard',
    title: 'Новое место',
    isOpen: false,
    onClose: false,
    children: ' <>//                     <label htmlFor="place-input" className="form__label">\n' +
        '//                         <input type="text" name="placeInput" id="place-input" className="form__item form__item_el_name" placeholder="Название" maxLength={30} minLength={2} required />\n' +
        '//                         <span className="form__item-error place-input-error" />\n' +
        '//                     </label>\n' +
        '//                     <label htmlFor="url-input" className="form__label">\n' +
        '//                         <input type="url" id="url-input" name="urlInput" className="form__item form__item_el_url" placeholder="Ссылка на картинку" minLength={2} required />\n' +
        '//                         <span className="form__item-error url-input-error" />\n' +
        '//                     </label>\n' +
        '//                     <button type="submit" className="button form__submit" aria-label="Создать" name="formSubmit">\n' +
        '//                         Создать\n' +
        '//                     </button> </>'

}

const onEditAvatar = {
    name: 'changeAvatar',
    title:'Обновить аватар',
    isOpen: false,
    onClose: false,
    children: '<><label htmlFor="place-input" className="form__label">\n' +
        '//                         <input type="url" name="avatarInput" id="avatar-input" className="form__item form__item_el_avatar" placeholder="Ссылка на аватар" minLength={2} required />\n' +
        '//                         <span className="form__item-error avatar-input-error" />\n' +
        '//                     </label>\n' +
        '//                     <button type="submit" className="button form__submit" aria-label="Создать" name="formSubmit">\n' +
        '//                         Сохранить\n' +
        '//                     </button> </>'
}

function App() {
    // const [isEditProfilePopupOpen, setIsEditProfilePopupOpen]  = React.useState({false});
    // const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState({false});
    // const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState({false});
    //

    function handleChange(isOpen, set) {
        set(!isOpen);
    }

    function closeAllPopups(isOpen, set) {
        set(!isOpen)
    }

  return (
      <div className="root">
        <div className="page">
          <Header />
          <Main />
          <Footer />
          <PopupWithForm />
          <PopupImage />
        </div>
        <template id="card" />
      </div>
  );
}

export default App;
