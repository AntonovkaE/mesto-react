import editProfileIcon from './img/editProfile.svg';
import avatar from './img/image.jpg';


import editIcon from './img/edit.svg';
import addIcon from './img/add_button.svg';
import React from 'react';
import api from "./utils/Api";



function Main (props) {

    const [cards, setCard] = React.useState({name: '', link: ''})
    //setCard([...cards, {name: '', link: '' }])
    const [userAvatar, setUserAvatar] = React.useState('')
    const [userName, setUserName] = React.useState('ella')
    const [userDescription, setUserDescription] = React.useState('ella')

    // handleEditAvatarClick () {
    //         document.querySelector('.popup_changeAvatar').classList.add('popup_open')
    // }
    function handleChange(isOpen, set) {
        set(!isOpen);
    }

    React.useEffect(() => {
        Promise.all([api.getUserData(), api.getInitialCards()])
            .then(([userData, cards]) => {
                setUserAvatar(userData.avatar);
                setUserName(userData.name);
                setUserDescription(userData.about);


                const initialCards = cards.map(item => ({
                    name: item.name,
                    link: item.link,
                    likes: item.likes,
                    id: item._id,
                    owner: item.owner._id,
                }));
                // const cardsList = new Section(
                //     {
                //         item: initialCards,
                //         renderer: (item) => {
                //             const card = new Card(
                //                 item,
                //                 "#card",
                //                 user._id,
                //                 api,
                //                 () => {
                //                     popupOpenImage.open(item.link, item.name);
                //
                //                 },
                //                 (id) => {
                //                     popupDeleteCard.open(id);
                //                 },
                //             );
                //             return card.generateCard();
                //         },
                //     },
                //     selectorCardList
                // );
                // cardsList.renderItems()
            })
            .catch(err => {
                console.log(err)
            });
        // document.querySelector('.profile__avatar').style={{ backgroundImage: `url(${userAvatar})` }}
    })

    return (
        <main className="page__main">
            <section className="profile">
                <button  className="button profile__button profile__button_type_change-avatar">
                    <img src={editProfileIcon} className="profile__icon profile__icon_type_edit-avatar" />
                    <img src={userAvatar} alt="фото пользователя" className="profile__avatar" />
                </button>
                <div className="profile__info">
                    <div className="profile__name-block">
                        <h1 className="profile__name" >{userName} </h1>
                        <button className="button profile__button profile__button_type_edit">
                            <img className="profile__icon profile__icon_type_edit" src={editIcon} alt="иконка редактирование" />
                        </button>
                    </div>
                    <p className="profile__description">{userDescription}</p>
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


    // function handleEditProfileClick () {}
    // function handleAddPlaceClick () {}
}


export default Main;

