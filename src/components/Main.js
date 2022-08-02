import React, {useEffect} from "react";
import api from "../utils/Api";
import Card from "./Card";
import Avatar from "../images/avatar.png"


function Main({onCardClick, onEditAvatar, onEditProfile, onAddPlace}) {
    const [userName, setUserName] = React.useState('Жак-Ив Кусто');
    const [userDescription, setUserDescription] = React.useState('Исследователь океана');
    const [userAvatar, setUserAvatar] = React.useState(Avatar);
    const [cards, setCards] = React.useState([]);

    const cardsElements = cards.map((card, id) =>
        (
            <Card
                key={id}
                card={card}
                link={card.link}
                title={card.name}
                likes={card.likes.length}
                onCardClick={onCardClick}
            />
        )
    );

    useEffect(() => {
        api.getUserInfo()
            .then((infoProfile) => {
                setUserName(infoProfile.name);
                setUserDescription(infoProfile.about);
                setUserAvatar(infoProfile.avatar)
            })
            .catch((err) => console.log(err));
    }, [])


    useEffect(() => {
        api.getInitialCards()
            .then((newCards) => {
                setCards(newCards);
            })
            .catch((err) => console.log(err));
    }, [])


    return (
        <main>

            <section className="profile">
                <img src={userAvatar}
                     alt="фото_пользователя"
                     className="profile__avatar"
                     onClick={onEditAvatar}
                />
                <div className="info-user">
                    <h1 className="info-user__name">{userName}</h1>
                    <button type="button" className="info-user__edit-button" onClick={onEditProfile}></button>
                    <p className="info-user__job">{userDescription}</p>
                </div>
                <button type="button" className="profile__add-button" onClick={onAddPlace}></button>
            </section>

            <section className="elements">
                <ul className="elements__list">
                    {cardsElements}
                </ul>
            </section>

        </main>
    )

}

export default Main;