import React from "react";
import PopupWithForm from "./PopupWithForm";


function ApprovalPopup() {
    return (

        <PopupWithForm
            name={'approval'}
            formName={'approval'}
            title={'Вы уверены?'}
            buttenTitle={'Да'}
            buttenClass={'popup__save-button_confirmation'}
        >
            <div className='popup__save-button_confirmation'></div>

        </PopupWithForm>
    )

}

export default ApprovalPopup;