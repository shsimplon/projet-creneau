/* eslint-disable no-undef */
const { request } = require('express');
const db = require('../config/database');

// ETQ admin, je veux voir la liste des réservations

exports.getbookings = (req, callback) => {
  // eslint-disable-next-line no-template-curly-in-string
  const query = 'SELECT * FROM booking ';
  db.execute(query, (error, result) => {
    if (error) {
      callback(error, null);
      return;
    }
    callback(null, result);
  });
};

// ETQ admin, je veux annuler un rendez-vous
exports.deleteDate = (bookingId, callback) => {
    
  db.execute(
    `DELETE FROM booking
  WHERE id_booking="${bookingId}" ;`,
    (error, result) => {
      if (error) {
        console.log('error: ', error);
        callback(error, null);
        return;
      }
      callback(null, result);
    },
  );
};
