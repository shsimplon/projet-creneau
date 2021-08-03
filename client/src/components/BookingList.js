/* eslint-disable react/jsx-no-undef */
import React from "react";
import { bookingService } from "../services/";
import { Link } from "react-router-dom";
import moment from "moment";

class BookingList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      bookingList: [],
      error: null,
    };
  }

  async componentDidMount() {
    try {
      const response = await bookingService.getBookings();

      this.setState({ bookingList: response.data });
    } catch (error) {
      console.log(error);
    }
  }
  handleClick = async (e) => {
    const bookingId = e.target.getAttribute("index");

    try {
      const index = e.target.getAttribute("data-index");

      const bookingList = this.state.bookingList.filter(
        (item, i) => i !== parseInt(index)
      );

      this.setState({ bookingList });
      const response = await bookingService.deleteBooking(bookingId);
      
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const list = this.state.bookingList;

    return (
      <>
        <h1>les rendez-vous</h1>

        {list &&
          list.map((key, i) => (
            <article key={i}>
              {/* <p>{key.user.username}</p> */}
              <p>motif : {key.motif}</p>
              <p>date : {moment(key.date).format("YYYY-MM-DD HH:DD:MM")}</p>
              <button
                data-index={i}
                index={key.id_booking}
                size="small"
                onClick={(e) => this.handleClick(e)}
              >
                Delete
              </button>
              <Link
                to={"/modifier/" + key.id_booking + `/userid:` + key.user_id}
                size="small"
                value="modifier"
              >
                modifier
              </Link>
            </article>
          ))}
      </>
    );
  }
}

export default BookingList;
