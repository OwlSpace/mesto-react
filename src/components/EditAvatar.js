import React from "react";
import PopupWithForm from "./PopupWithForm";


function EditAvatar(props) {

    return (
        <PopupWithForm
            isOpen={props.isOpen}
            onClose={props.onClose}
            name={'update-avatar'}
            formName={'update-avatar'}
            title={'Обновить аватар'}
            buttenTitle={'Сохранить'}
        >
            <label className="popup__fields">
                <input id="input-url" type="url" className="popup__field popup__field_input-link"
                       placeholder="Ссылка на картинку" required/>
                <span className="input-url-error popup__error"></span>
            </label>

        </PopupWithForm>
    )

}

export default EditAvatar;