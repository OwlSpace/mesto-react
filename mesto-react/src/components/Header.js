import logotip from "../images/logotip.svg";
import React from "react";

function Header(props) {
    return(
        <header className="header">
            <img src={logotip} alt="логотип" className="header__logo" />
        </header>
    )
}
export default Header;
