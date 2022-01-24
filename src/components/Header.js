import React from "react";
import logo from '../images/header__logo.svg';

function Header() {
    return(
        <header class="header page__wrapper page__wrapper_disabled">
            <img class='header__logo' src={logo} alt="Around the US" />
        </header>
    );
}

export default Header;