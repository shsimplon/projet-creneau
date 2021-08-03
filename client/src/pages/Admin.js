import React, { Component } from "react";
import BookingList from "../components/BookingList";
import { NavLink } from "react-router-dom";

export default class Admin extends Component {
  render() {
    return (
      <div>
 <div className='navigation'>

<NavLink exact to="/" activeClassName="nav-active">Profil</NavLink>
<NavLink exact to="/admin" activeClassName="nav-active">Admin</NavLink>

       
     </div>        
        <BookingList />
      </div>
    );
  }
}
