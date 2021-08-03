import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import UpdateBooking from "./components/UpdateBooking";
import Admin from "./pages/Admin";
import Booking from "./pages/Booking";
import Profil from "./pages/Profil";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/admin" exact component={Admin} />
        <Route path="/" exact component={Profil} /> 
        <Route path="/booking" exact component={Booking} />

        <Route path="/modifier/:id/:userid" exact component={UpdateBooking} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
