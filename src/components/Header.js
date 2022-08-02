import logotip from "../images/logotip.svg";
import React from "react";

function Header() {
    return(
        <header className="header">
            <img src={logotip} alt="логотип" className="header__logo" />
        </header>
    )
}
export default Header;
