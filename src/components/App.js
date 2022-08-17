import React, {useEffect, useState} from "react";
import '../index.css';
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import EditAvatar from "./EditAvatar";
import ProfilePopup from "./ProfilePopup";
import NewPlaceAddPopup from "./NewPlaceAddPopup";
import ImagePopup from "./ImagePopup";
import ApprovalPopup from "./ApprovalPopup";
import {CurrentUserContext} from "../contexts/CurrentUserContext";
import api from "../utils/Api";

function App() {

    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false)
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
    const [isApprovalPopup, setIsApprovalPopup] = useState(false);
    const [selectedCard, setSelectedCard] = useState(null);
    const [currentUser, setCurrentUser] = useState({
            name: '',
            about: '',
            _id: '',
            avatar: '',
        }
    );
    const [cards, setCards] = useState([]);
    const [cardDelete, setCardDelete] = useState({});

    useEffect(() => {
        Promise.all([api.getUserInfo(), api.getInitialCards()])
            .then(([infoProfile, cards]) => {
                setCurrentUser(infoProfile);
                setCards(cards);
            })
            .catch((err) => console.log(err));
    }, []);

    function handleEditAvatarClick() {
        setIsEditAvatarPopupOpen(true);
    }

    function handleEditProfileClick() {
        setIsEditProfilePopupOpen(true);
    }

    function handleAddPlaceClick() {
        setIsAddPlacePopupOpen(true);
    }

    function handleCardClick(card) {
        setSelectedCard(card);
    }

    function handleApprovalPopup(card) {
        setCardDelete(card);
        setIsApprovalPopup(true);
    }

    function closeAllPopups() {
        setIsEditAvatarPopupOpen(false);
        setIsEditProfilePopupOpen(false);
        setIsAddPlacePopupOpen(false)
        setIsApprovalPopup(false);
        setSelectedCard(null);
    }

    function handleCardLike(card) {
        const isLiked = card.likes.some((whoIsLike) => whoIsLike._id === currentUser._id);

        api.toggleLike(card._id, isLiked)
            .then((newCard) => {
                    setCards((state) => state.map((cardState) => cardState._id === card._id ? newCard : cardState)
                    );
                }
            )
            .catch((err) => console.log(err))
    }

    function handleCardDelete() {
        api.deleteCard(cardDelete._id)
            .then(() => {
                    setCards(
                        cards.filter((cardState) => cardState._id !== cardDelete._id)
                    );
                    closeAllPopups();
                }
            )
            .catch((err) => console.log(err))
    }

    function handleUpdateUser(data) {
        api.editProfileData(data)
            .then((res) => {
                    setCurrentUser({
                            ...currentUser,
                            name: res.name,
                            about: res.about,
                        }
                    );
                    closeAllPopups();
                }
            )
            .catch((err) => console.log(err))
    }

    function handleUpdateAvatar(avatarLink) {
        api.editAvatar(avatarLink)
            .then((res) => {
                    setCurrentUser({
                            ...currentUser,
                            avatar: res.avatar
                        }
                    );
                    closeAllPopups();
                }
            )
            .catch((err) => console.log(err))
    }

    function handleAddPlaceSubmit(data) {
        api.addingNewCard(data)
            .then((res) => {
                    setCards([res, ...cards]);
                    closeAllPopups();
                }
            )
            .catch((err) => console.log(err))

    }

    return (
        <div className="App">

            <CurrentUserContext.Provider value={currentUser}>
                <Header/>
                <Main
                    onEditAvatar={handleEditAvatarClick}
                    onEditProfile={handleEditProfileClick}
                    onAddPlace={handleAddPlaceClick}
                    onCardClick={handleCardClick}
                    onCardLike={handleCardLike}
                    onApprovalCardDelet={handleApprovalPopup}
                    cards={cards}
                />

                <Footer/>

                <EditAvatar
                    isOpen={isEditAvatarPopupOpen}
                    onClose={closeAllPopups}
                    onUpdateAvatar={handleUpdateAvatar}
                />
                <ProfilePopup
                    isOpen={isEditProfilePopupOpen}
                    onClose={closeAllPopups}
                    onUpdateUser={handleUpdateUser}
                />
                <NewPlaceAddPopup
                    isOpen={isAddPlacePopupOpen}
                    onClose={closeAllPopups}
                    onAddPlace={handleAddPlaceSubmit}
                />
                <ApprovalPopup
                    isOpen={isApprovalPopup}
                    onClose={closeAllPopups}
                    onCardDelete={handleCardDelete}
                />
                <ImagePopup
                    card={selectedCard}
                    onClose={closeAllPopups}
                />
            </CurrentUserContext.Provider>

        </div>
    );
}

export default App;