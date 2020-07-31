import React from 'react';
import { Link } from "react-router-dom";

// logo e icones
import user_icon from './img/icons/user.svg';

function Nav(props) {
    return (
    <div className="nav">
        <Link to="/"><p className="logo">LOGO</p></Link>
        <input type="text" placeholder="Pesquisar"/>

        <div className="nav-direita">
            <img className="usuario" src={user_icon} width="30px" height="30px" alt=""/>
        </div>
    </div>
    );
};

export default Nav;