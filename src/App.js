
import editProfileIcon from './img/editProfile.svg';
import avatar from './img/image.jpg';
import closeIcon from './img/CloseIcon.svg';
import editIcon from './img/edit.svg';
import addIcon from './img/add_button.svg';
import React from 'react';
import './App.css';
import Header from './Header'

function App() {
  return (
      <div className="root">
        <div className="page">
          <Header />
          <main className="page__main">
            <section className="profile">
              <button className="button profile__button profile__button_type_change-avatar">
                <img src={editProfileIcon} className="profile__icon profile__icon_type_edit-avatar" />
                <img src={avatar} alt="фото пользователя" className="profile__avatar" />
              </button>
              <div className="profile__info">
                <div className="profile__name-block">
                  <h1 className="profile__name" />
                  <button className="button profile__button profile__button_type_edit">
                    <img className="profile__icon profile__icon_type_edit" src={editIcon} alt="иконка редактирование" />
                  </button>
                </div>
                <p className="profile__description" />
              </div>
              <button className="button profile__button profile__button_type_add">
                <img className="profile__icon profile__icon_type_add" src={addIcon} alt="плюс" />
              </button>
            </section>
            <section className="gallery" aria-label="Фото мест">
              <ul className="cards" />
            </section>
          </main>
          <div className="popup popup_editForm close-area" visibility="hidden">
            <div className="popup__container">
              <button type="button" className="button popup__button popup__button_type_close close-area" data-bs-dismiss="edit-form" aria-label="Close" data-close>
                <img className="popup__icon popup__icon_type_close close-area" src={closeIcon} alt="крестик" />
              </button>
              <div className="popup__content">
                <h2 className="popup__heading">Редактировать профиль</h2>
                <form className="popup__form form form_edit" name="editProfile" noValidate>
                  <label htmlFor="name-input" className="form__label">
                    <input type="text" name="nameInput" id="name-input" className="form__item form__item_el_name" placeholder="Ваше имя" maxLength={200} minLength={2} required />
                    <span className="form__item-error name-input-error" />
                  </label>
                  <label htmlFor="description-input" className="form__label">
                    <input type="text" name="descriptionInput" id="description-input" className="form__item form__item_el_description" placeholder="О себе" maxLength={400} minLength={2} required />
                    <span className="form__item-error description-input-error" />
                  </label>
                  <button type="submit" className="button form__submit" aria-label="Сохранить" name="formSubmit">
                    Сохранить
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="popup popup_addCard close-area" visibility="hidden">
            <div className="popup__container">
              <button type="button" className="button popup__button popup__button_type_close close-area" data-bs-dismiss="form_edit" aria-label="Close" data-close>
                <img className="popup__icon popup__icon_type_close close-area" src={closeIcon} alt="крестик" />
              </button>
              <div className="popup__content">
                <h2 className="popup__heading">Новое место</h2>
                <form className="popup__form form form_add" name="addForm" noValidate>
                  <label htmlFor="place-input" className="form__label">
                    <input type="text" name="placeInput" id="place-input" className="form__item form__item_el_name" placeholder="Название" maxLength={30} minLength={2} required />
                    <span className="form__item-error place-input-error" />
                  </label>
                  <label htmlFor="url-input" className="form__label">
                    <input type="url" id="url-input" name="urlInput" className="form__item form__item_el_url" placeholder="Ссылка на картинку" minLength={2} required />
                    <span className="form__item-error url-input-error" />
                  </label>
                  <button type="submit" className="button form__submit" aria-label="Создать" name="formSubmit">
                    Создать
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="popup popup_openImage close-area" visibility="hidden">
            <div className="popup__container popup__container_image">
              <button type="button" className="button popup__button popup__button_type_close close-area" data-bs-dismiss="form_add" aria-label="Close">
                <img className="popup__icon popup__icon_type_close close-area" src={closeIcon} alt="крестик" />
              </button>
              <figure className="popup__figure">
                <img alt="" className="popup__img" />
                <figcaption className="popup__caption" />
              </figure>
            </div>
          </div>
          <div className="popup popup_deleteCard close-area" visibility="hidden">
            <div className="popup__container">
              <button type="button" className="button popup__button popup__button_type_close close-area" data-bs-dismiss="form_edit" aria-label="Close" data-close>
                <img className="popup__icon popup__icon_type_close close-area" src={closeIcon} alt="крестик" />
              </button>
              <div className="popup__content">
                <h2 className="popup__heading popup__heading_deletePopup">Вы уверены?</h2>
                <form className="popup__form form form_deleteCard" name="deleteCardForm" noValidate>
                  <button type="submit" className="button form__submit" aria-label="Удалить" name="formSubmit">
                    Да
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="popup popup_changeAvatar close-area" visibility="hidden">
            <div className="popup__container">
              <button type="button" className="button popup__button popup__button_type_close close-area" data-bs-dismiss="form_edit" aria-label="Close" data-close>
                <img className="popup__icon popup__icon_type_close close-area" src={closeIcon} alt="крестик" />
              </button>
              <div className="popup__content">
                <h2 className="popup__heading">Обновить аватар</h2>
                <form className="popup__form form form_add" name="addForm" noValidate>
                  <label htmlFor="place-input" className="form__label">
                    <input type="url" name="avatarInput" id="avatar-input" className="form__item form__item_el_avatar" placeholder="Ссылка на аватар" minLength={2} required />
                    <span className="form__item-error avatar-input-error" />
                  </label>
                  <button type="submit" className="button form__submit" aria-label="Создать" name="formSubmit">
                    Сохранить
                  </button>
                </form>
              </div>
            </div>
          </div>
          <footer className="footer">
            <p className="footer__copyright">© 2022 Mesto Russia</p>
          </footer>
        </div>
        <template id="card" />
      </div>
  );
}

export default App;
