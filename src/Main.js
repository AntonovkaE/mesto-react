import editProfileIcon from './img/editProfile.svg';
import avatar from './img/image.jpg';


import editIcon from './img/edit.svg';
import addIcon from './img/add_button.svg';
import React from 'react';
import api from "./utils/Api";



function Main ({onEditAvatar, onEditProfile, onAddPlace, onClose}) {

    const [cards, setCard] = React.useState([])

    const [userAvatar, setUserAvatar] = React.useState('')
    const [userName, setUserName] = React.useState('ella')
    const [userDescription, setUserDescription] = React.useState('ella')

    React.useEffect(() => {
        Promise.all([api.getUserData(), api.getInitialCards()])
            .then(([userData, cards]) => {
                setUserAvatar(userData.avatar);
                setUserName(userData.name);
                setUserDescription(userData.about);

                setCard([...cards])


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
                <button onClick={onEditAvatar}  className="button profile__button profile__button_type_change-avatar">
                    <img src={editProfileIcon} className="profile__icon profile__icon_type_edit-avatar" />
                    <img src={userAvatar} alt="фото пользователя" className="profile__avatar" />
                </button>
                <div className="profile__info">
                    <div className="profile__name-block">
                        <h1 className="profile__name" >{userName} </h1>
                        <button onClick={onEditProfile} className="button profile__button profile__button_type_edit">
                            <img className="profile__icon profile__icon_type_edit" src={editIcon} alt="иконка редактирование" />
                        </button>
                    </div>
                    <p className="profile__description">{userDescription}</p>
                </div>
                <button onClick={onAddPlace} className="button profile__button profile__button_type_add">
                    <img className="profile__icon profile__icon_type_add" src={addIcon} alt="плюс" />
                </button>
            </section>
            <section className="gallery" aria-label="Фото мест">
                <ul className="cards" >
                    {/*добавить темплатес для карточки*/}
                    {cards.map((card, i) => (
                        <template id="card">
                            <li key={i} className="cards__item card">
                                <button type="button" className="hidden card__button card__button_delete"></button>
                                <img alt="" className="card__img"/>
                                <div className="card__body">
                                    <h2 className="card__title"></h2>
                                    <div className="card__like-area">
                                        <button className="card__button card__button_like"></button>
                                        <p className="card__like-counter"></p>
                                    </div>
                                </div>
                            </li>
                        </template>
                        ))}
                </ul>
            </section>
        </main>
    );


    // function handleEditProfileClick () {}
    // function handleAddPlaceClick () {}
}


export default Main;

