import React from 'react';
import { NavLink } from "react-router-dom";
// navlink =creer des liens avce pour aller d'une page à une autre page
const Navigation = () => {
    return (
        <div className='navigation'>
            <NavLink exact to="/profil" activeClassName="nav-active">Profil</NavLink>
            <NavLink exact to="/admin" activeClassName="nav-active">Admin</NavLink>
            <NavLink exact to="/booking" activeClassName="nav-active">Rendez-vous</NavLink>

            
        </div>
    );
};

export default Navigation;