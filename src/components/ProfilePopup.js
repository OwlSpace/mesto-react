import React from "react";
import PopupWithForm from "./PopupWithForm";


function ProfilePopup(props) {
    return (
        <PopupWithForm
            isOpen={props.isOpen}
            onClose={props.onClose}
            name={'profile'}
            formName={'user-info'}
            title={'Редактировать профиль'}
            buttenTitle={'Сохранить'}
        >
            <label className="popup__fields">
                <input id="input-title" type="text" className="popup__field popup__field_input-name"
                       placeholder="Имя"
                       minLength="2"
                       maxLength="40" required/>
                <span className="input-title-error popup__error"/>
            </label>
            <label className="popup__fields">
                <input id="input-job" type="text" className="popup__field popup__field_input-job"
                       placeholder="Работа"
                       minLength="2"
                       maxLength="200" required/>
                <span className="input-job-error popup__error"></span>
            </label>

        </PopupWithForm>
    )

}

export default ProfilePopup;
