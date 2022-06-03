import React from 'react';
import {CurrentUserContext} from "../contexts/CurrentUserContext";
import {useContext} from "@types/react";

function Card({card, onCardClick}) {
    function handleClick() {
        onCardClick(card);
    }

    const currentUser = useContext(CurrentUserContext)
    const isOwn = card.owner._id === currentUser._id;

    const cardDeleteButtonClassName = (
        `card__delete-button ${isOwn ? 'card__delete-button_visible' : 'card__delete-button_hidden'}`
    );
    return (
        <li onClick={handleClick} className="cards__item card">
            <button type="button" className={cardDeleteButtonClassName}></button>
            <img src={card.link} alt={card.name} className="card__img"/>
            <div className="card__body">
                <h2 className="card__title">{card.name}</h2>
                <div className="card__like-area">
                    <button className="card__button card__button_like"></button>
                    <p className="card__like-counter">{card.likes.length}</p>
                </div>
            </div>
        </li>
    );
}

export default Card;

