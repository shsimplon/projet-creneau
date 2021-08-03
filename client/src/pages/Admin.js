import React, { Component } from "react";
import Navigation from "../components/Navigation";
import BookingList from "../components/BookingList";

export default class Admin extends Component {
  render() {
    return (
      <div>
        <Navigation />
        ADMIN
        <BookingList />
      </div>
    );
  }
}
