import React from 'react';
import api from "./utils/Api";



function Card ({card, onCardClick}) {
    function handleClick() {
        onCardClick(card);
    }

    return (
                        <li onClick={handleClick} className="cards__item card">
                            <button type="button" className="hidden card__button card__button_delete"></button>
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

