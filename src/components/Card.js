import React from "react";


function Card({title, link, likes, card, onCardClick}) {

    function handleImageClick() {
        onCardClick(card);
    }

    return (

        <li className="element">
            <img src={link} alt={title} className="element__image" onClick={handleImageClick}/>
            <button type="button" className="element__delete-button"></button>
            <div className="element__container">
                <h2 className="element__title">{title}</h2>
                <div className="element__container-like">
                    <button type="button" className="element__like-button"></button>
                    <span className="element__like-count">{likes}</span>
                </div>
            </div>
        </li>

    )

}

export default Card;