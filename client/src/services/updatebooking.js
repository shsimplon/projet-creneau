import api from "./api";

const bookingService = {
  getBookings: async () => {
    return await api.get("/bookings");
  },
  getbook: async (date, motif, id_booking) => {
    const booking = { date, motif, id_booking };
    console.log(booking);
    return await api.get("/bookings", booking);
  },
  updateBooking: async (date, motif, bookingId, userId) => {
    const booking = { date, motif, bookingId, userId };
    return await api.patch("/booking/" + bookingId, booking);
  },

  deleteBooking: async (bookingId) => {
    const book = bookingId;
    console.log(book);
    return await api.delete("/booking/" + bookingId);
  },
};
export default bookingService;
