import React from "react";
import '../index.css';
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import EditAvatar from "./EditAvatar";
import ProfilePopup from "./ProfilePopup";
import NewPlaceAddPopup from "./NewPlaceAddPopup";
import ImagePopup from "./ImagePopup";
import ApprovalPopup from "./ApprovalPopup";



function App() {

    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setisAddPlacePopupOpen] = React.useState(false)
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
    const [selectedCard, setSelectedCard] = React.useState();


    function handleEditAvatarClick() {
        setIsEditAvatarPopupOpen(true);
    }

    function handleEditProfileClick() {
        setIsEditProfilePopupOpen(true);
    }

    function handleAddPlaceClick() {
        setisAddPlacePopupOpen(true);
    }

    function handleCardClick(card) {
        setSelectedCard(card);
    }

    function closeAllPopups() {
        setIsEditAvatarPopupOpen(false);
        setIsEditProfilePopupOpen(false);
        setisAddPlacePopupOpen(false);
        setSelectedCard(null);
    }

    return (
        <div className="App">

            <Header/>
            <Main
                onEditAvatar={handleEditAvatarClick}
                onEditProfile={handleEditProfileClick}
                onAddPlace={handleAddPlaceClick}
                onCardClick={handleCardClick}
            />

            <Footer/>

            <EditAvatar
                isOpen={isEditAvatarPopupOpen}
                onClose={closeAllPopups}
            />
            <ProfilePopup
                isOpen={isEditProfilePopupOpen}
                onClose={closeAllPopups}
            />
            <NewPlaceAddPopup
                isOpen={isAddPlacePopupOpen}
                onClose={closeAllPopups}
            />
            <ApprovalPopup/>
            <ImagePopup
                card={selectedCard}
                onClose={closeAllPopups}
            />


        </div>
    );
}

export default App;
