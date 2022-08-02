import React from "react";

function ImagePopup(props) {

    return (
        <div className={`popup popup-open-card popup_overlay-open-card ${props.card ? `popup_opened` : ''}`}>
            <div className="open-card-viewing">
                <img className="open-card-viewing__image"
                     src={`${props.card ? props.card.link : '#'}`}
                     alt={`${props.card ? props.card.name : 'фото с карточки'}`}/>
                <p className="open-card-viewing__subtitle">{`${props.card ? props.card.name : ''}`}</p>
                <button type="button" className="popup__close-button" onClick={props.onClose}></button>
            </div>
        </div>
    )
}

export default ImagePopup;