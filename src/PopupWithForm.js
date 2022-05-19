
import closeIcon from './img/CloseIcon.svg';
import React from 'react';
const editProfile = {name: 'editForm', title: 'Редактировать профиль', children: '<> <label htmlFor="name-input" className="form__label">\n' +
'                            <input type="text" name="nameInput" id="name-input" className="form__item form__item_el_name" placeholder="Ваше имя" maxLength={200} minLength={2} required />\n' +
'                            <span className="form__item-error name-input-error" />\n' +
'                        </label>\n' +
'                        <label htmlFor="description-input" className="form__label">\n' +
'                            <input type="text" name="descriptionInput" id="description-input" className="form__item form__item_el_description" placeholder="О себе" maxLength={400} minLength={2} required />\n' +
'                            <span className="form__item-error description-input-error" />\n' +
'                        </label>\n' +
'                        <button type="submit" className="button form__submit" aria-label="Сохранить" name="formSubmit">\n' +
'                            Сохранить\n' +
'                        </button> </>' }

function PopupWithForm(props) {
    const [cards, setCard] = React.useState({name: '', link: ''})
    //setCard([...cards, {name: '', link: '' }])
    const [avatar, setAvatar] = React.useState('')
    const [userData, setUserData] = React.useState({name: 'ells', description: 'Frontend'})

    return (
        <div className={`popup popup_${props.name}  close-area`} visibility="hidden">
            <div className="popup__container">
                <button type="button" className="button popup__button popup__button_type_close close-area" data-bs-dismiss="edit-form" aria-label="Close" data-close>
                    <img className="popup__icon popup__icon_type_close close-area" src={closeIcon} alt="крестик" />
                </button>
                <div className="popup__content">
                    <h2 className="popup__heading">{props.title}</h2>
                    <form className="popup__form form form_edit" name={props.name} noValidate>
                        {props.children}
                    </form>
                </div>
            </div>
        </div>
    );
}

export default PopupWithForm;

//В этих попапах много общей разметки: элементы внешнего и внутреннего контейнера, сама форма, заголовок и две кнопки. Вся общая разметка должна оказаться в новом компоненте. Извне должны будут передаваться только текст заголовка и идентификатор формы (в виде строк). Для этого добавьте соответствующие пропсы title и name и подставляйте их значения в JSX.
// Замечание 1. Чтобы правильно подставить name в CSS-класс контейнера используйте следующую конструкцию:
// Скопировать код
// JSX
// className={`popup popup_type_${props.name}`}
// Замечание 2. Значение пропса name будет использоваться не только в имени CSS-класса контейнера, но и для атрибута name тега form.
// Кроме заголовка и идентификатора в компонент PopupWithForm будет передаваться вложенное содержимое в виде JSX-разметки, отличающейся для всех четырёх попапов. Внутри самого компонента оно будет доступно через специальный пропс children, который также должен быть подставлен в нужном месте в JSX.


<>
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
</>