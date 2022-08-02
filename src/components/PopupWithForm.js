import React from "react";


function PopupWithForm(props) {

    return (

        <div className={`popup popup-${props.name} ${props.isOpen ? `popup_opened` : ''}`}

        >
            <form name={`${props.formName}`} className="popup__form">
                <fieldset className="popup__section">
                    <p className="popup__title">{props.title}</p>
                    {props.children}
                    <button type="submit" className="popup__save-button">{props.buttenTitle}</button>
                </fieldset>
                <button type="button" className="popup__close-button" onClick={props.onClose}></button>
            </form>
        </div>

    )

}

export default PopupWithForm;