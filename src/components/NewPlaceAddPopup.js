import React from "react";
import PopupWithForm from "./PopupWithForm";



function NewPlaceAddPopup(props) {
    return (
        <PopupWithForm
            isOpen={props.isOpen}
            onClose={props.onClose}
            name={'card'}
            formName={'card-new'}
            title={'Новое место'}
            buttenTitle={'Сохранить'}
        >
            <label className="popup__fields">
                <input id="input-name" type="text" className="popup__field popup__field_input-name"
                       placeholder="Название" minLength="2" maxLength="30" required/>
                <span className="input-name-error popup__error"></span>
            </label>
            <label className="popup__fields">
                <input id="input-link" type="url" className="popup__field popup__field_input-link"
                       placeholder="Ссылка на картинку" required/>
                <span className="input-link-error popup__error"></span>
            </label>

        </PopupWithForm>
    )

}

export default NewPlaceAddPopup;