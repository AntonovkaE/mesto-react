import editProfileIcon from './img/editProfile.svg';
import avatar from './img/image.jpg';

import editIcon from './img/edit.svg';
import addIcon from './img/add_button.svg';
import React from 'react';


function Header() {
    return (
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
    );
}

export default Header;

