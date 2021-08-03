/* eslint-disable no-console */
const bookings = require('../models/UserSignin');
const moment = require('moment')
const util = require('../utils/utils');
const Booking = require('../models/bookingsUpdate');
// ETQ admin, je veux voir la liste des rendezVous fait par les users

exports.updateBooking = (request, response) => {

  const {date, motif,bookingId,userId} = request.body;
  
  const bookingData ={
    date,
    motif,
    bookingId,
    // userId:user_id
  }
  if (request.user.role === 'user') {
    response.status(403).json({
      message: "Vous n'êtes pas autorisé à accéder à cette ressource",
    });
  } else {
    bookings.getBook(bookingId, (error, bookingInfo) => {
      if (error) {
        response.status(400).json({ message: error.message });
      } else if (bookingInfo.length === 0) {
        response.status(400).json({
          message: "La ressource demandée n'existe pas",
        });
      } else {
        bookings.updateBook( bookingData,
          (errorUpdate, result) => {
            if (errorUpdate) {
              response.status(400).json({ message: errorUpdate.message });
            } else {
              console.log(bookingInfo);
              response.status(200).json({
                user_id: bookingInfo[0].user_id,
                date: bookingInfo[0].date,
                motif: bookingInfo[0].motif,
              });
            }
          },
        );
      }
    });
  }
};

exports.findAllBooking = (req, res) => {

  Booking.getbookings(req.body, (error, result) => {

    if (error) {
      res.json(error.message);
    } else {
      res.status(200).json(result);
    
    }
  });
};

exports.deleteBooking = (req, res) => {
  // eslint-disable-next-line no-unused-vars
  const { bookingId } = req.params;
  const role = 'admin';
  if (!role) {
    res.status(401).json({ message: 'User not connected' });
  } else if (role === 'user') {
    res.status(404).json({ message: "la demande n'est pas trouvé" });
  } else {
    // eslint-disable-next-line no-unused-vars
    Booking.deleteDate(bookingId, (error, _result) => {
      if (error) {
        res.send("Ce rendez vous n'est pas disponible ");
      } else {
        res.status(204).json({ message: 'rendez-vous est annulée' });
      }
    });
  }
};
