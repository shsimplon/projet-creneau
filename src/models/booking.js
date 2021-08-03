const { request } = require("express");
const db = require("../config/database");

// ETQ user, je veux un rendez-vous

exports.bookDate = (booking, callback) => {

  db.execute(
    `INSERT INTO booking( user_id, date,motif) VALUES(${booking.user_id}, "${booking.newDate}", "${booking.motif}");`,
    (error, result) => {
      if (error) {
        console.log("error: ", error);
        callback(error, null);
        return;
      }
      callback(null, result);
    }
  );

};
