import React from "react";


function PopupWithForm({name, formName, title, children, isOpen, buttenTitle, onClose}) {

    return (

        <div className={`popup popup-${name} ${isOpen && `popup_opened`}`}>
            <form name={`${formName}`} className="popup__form">
                <fieldset className="popup__section">
                    <p className="popup__title">{title}</p>
                    {children}
                    <button type="submit" className="popup__save-button">{buttenTitle}</button>
                </fieldset>
                <button type="button" className="popup__close-button" onClick={onClose}></button>
            </form>
        </div>

    )

}

export default PopupWithForm;