import React from "react";


function Card(props) {

    function handleClick() {
        props.onCardClick(props.card);
    }

    return (

        <li className="element">
            <img src={props.link} alt={props.title} className="element__image" onClick={handleClick}/>
            <button type="button" className="element__delete-button"></button>
            <div className="element__container">
                <h2 className="element__title">{props.title}</h2>
                <div className="element__container-like">
                    <button type="button" className="element__like-button"></button>
                    <span className="element__like-count">{props.likes}</span>
                </div>
            </div>
        </li>

    )

}

export default Card;