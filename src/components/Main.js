import editProfileIcon from './img/editProfile.svg';
import avatar from './img/image.jpg';


import editIcon from './img/edit.svg';
import addIcon from './img/add_button.svg';
import React from 'react';
import api from './utils/Api';
import Card from './Card'


function Main({onEditAvatar, onEditProfile, onAddPlace, onClose, onCardClick}) {

    const [cards, setCards] = React.useState([])

    const [userAvatar, setUserAvatar] = React.useState('')
    const [userName, setUserName] = React.useState('ella')
    const [userDescription, setUserDescription] = React.useState('ella')

    React.useEffect(() => {
        Promise.all([api.getUserData(), api.getInitialCards()])
            .then(([userData, cards]) => {
                setUserAvatar(userData.avatar);
                setUserName(userData.name);
                setUserDescription(userData.about);

                setCards(cards.map(item => ({
                    name: item.name,
                    link: item.link,
                    likes: item.likes,
                    id: item._id,
                    owner: item.owner._id,
                })))
            })
            .catch(err => {
                console.log(err)
            });
    }, [])

    return (
        <main className="page__main">
            <section className="profile">
                <button onClick={onEditAvatar} className="button profile__button profile__button_type_change-avatar">
                    <img src={editProfileIcon} alt="иконка редактирования профиля" className="profile__icon profile__icon_type_edit-avatar"/>
                    <img src={userAvatar ? userAvatar : avatar} alt="фото пользователя" className="profile__avatar"/>
                </button>
                <div className="profile__info">
                    <div className="profile__name-block">
                        <h1 className="profile__name">{userName} </h1>
                        <button onClick={onEditProfile} className="button profile__button profile__button_type_edit">
                            <img className="profile__icon profile__icon_type_edit" src={editIcon}
                                 alt="иконка редактирование"/>
                        </button>
                    </div>
                    <p className="profile__description">{userDescription}</p>
                </div>
                <button onClick={onAddPlace} className="button profile__button profile__button_type_add">
                    <img className="profile__icon profile__icon_type_add" src={addIcon} alt="плюс"/>
                </button>
            </section>
            <section className="gallery" aria-label="Фото мест">
                <ul className="cards">
                    {cards.map((card, i) => (
                        <Card key={card.id} card={card} onCardClick={onCardClick}/>
                    ))}
                </ul>
            </section>
        </main>
    );

}


export default Main;

