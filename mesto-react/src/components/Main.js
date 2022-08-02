import React, {useEffect} from "react";
import api from "../utils/Api";
import Card from "./Card";


function Main(props) {
    const [userName, setUserName] = React.useState();
    const [userDescription, setUserDescription] = React.useState();
    const [userAvatar, setUserAvatar] = React.useState();

    useEffect(() => {
        api.getUserInfo()
            .then((infoProfile) => {
                setUserName(infoProfile.name);
                setUserDescription(infoProfile.about);
                setUserAvatar(infoProfile.avatar)
            })
            .catch((err) => console.log(err));
    }, [])


    const [newCard, setNewCard] = React.useState([]);

    useEffect(() => {
        api.getInitialCards()
            .then((newCards) => {
                setNewCard(newCards);
            })
            .catch((err) => console.log(err));
    }, [])


    return (
        <main>

            <section className="profile">
                <img src={userAvatar} alt="фото_пользователя" className="profile__avatar" onClick={props.onEditAvatar}/>
                <div className="info-user">
                    <h1 className="info-user__name">{userName}</h1>
                    <button type="button" className="info-user__edit-button" onClick={props.onEditProfile}></button>
                    <p className="info-user__job">{userDescription}</p>
                </div>
                <button type="button" className="profile__add-button" onClick={props.onAddPlace}></button>
            </section>

            <section className="elements">
                <ul className="elements__list">
                    {newCard.map((card, id) => (
                        <Card
                            key={id}
                            card={card}
                            link={card.link}
                            title={card.name}
                            likes={card.likes.length}
                            onCardClick={props.onCardClick}
                        />
                        ))}


                </ul>
            </section>

        </main>
    )

}

export default Main;