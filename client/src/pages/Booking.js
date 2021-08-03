import React, { Component } from "react";
import BookingDate from "../components/BookingDate";
import { NavLink } from "react-router-dom";


export default class Booking extends Component {
  render() {
    return (
      <div>
 <NavLink exact to="/" activeClassName="nav-active">Profil</NavLink>
            <NavLink exact to="/booking" activeClassName="nav-active">Rendez-vous</NavLink> 

        <BookingDate />
      </div>
    );
  }
}
