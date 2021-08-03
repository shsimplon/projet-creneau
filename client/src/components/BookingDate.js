import React, { Component } from "react";
import { DateTimePickerComponent } from "@syncfusion/ej2-react-calendars";

import { bookService } from "../services/";
import Button from "../components/Button";
import { withRouter } from "react-router";

class BookingDate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      date: null,
      motif: null,

      user_id: localStorage.getItem("user_id"),
    };
  }

  async componentDidMount() {
    // const cityName=this.props.location.query.cityName;
    try {
      const response = await bookService.bookDate();
      console.log(response);
    } catch (e) {
      console.log(e);
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleClick = async (e) => {
    const { user_id, date, motif } = this.state;
    const role = localStorage.getItem("role");
    try {
      const response = await bookService.bookDate(user_id, date, motif, role);

      this.props.history.push("/booking");
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    const dateValue: Date = new Date("02/08/2021 07:00 AM");
    const minDate: Date = new Date("02/08/2021 09:00 AM");
    const maxDate: Date = new Date("02/08/2021 17:00 PM");
    return (
      <div>
        <h1>Reserver une date </h1>
        <div className="dateTime">
          <DateTimePickerComponent
            placeholder="Choose a date and time"
            value={this.state.date}
            name="date"
            onChange={this.handleChange}
            min={minDate}
            max={maxDate}
            format="dd-MMM-yy HH:mm"
            step={60}
          ></DateTimePickerComponent>

          <label for="motif">Motif</label>
          <input
            type="text"
            name="motif"
            value={this.state.motif}
            onChange={this.handleChange}
          />
          <Button
            size="small"
            value="Enregistrer"
            handleClick={this.handleClick}
          />
        </div>
      </div>
    );
  }
}
export default withRouter(BookingDate);
