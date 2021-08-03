const { execute } = require('../config/database');
const db = require('../config/database');

exports.getUserData = (email, callback) => {
  db.execute(
    `select * from user where email="${email}"`,

    (error, result) => {
      if (error) {
        callback(error, null);
        return;
      }

      callback(null, result);
    },
  );
};

exports.updateBook = (bookingData, callback) => {
 
 
  const query = `UPDATE booking SET  date="${bookingData.date}" ,motif="${bookingData.motif}" WHERE (id_booking ="${bookingData.bookingId}")`
  db.execute(
   query,
    (error, result) => {
      if (error) {
        callback(error, null);
        console.log(error);
        return;
      }

      callback(null, result);
    },
  );
  console.log(query);
};



exports.getBook = (bookingId, callback) => {
  const query = `SELECT * FROM booking  WHERE  id_booking=${bookingId}`;
  db.execute(query, (error, result) => {
    if (error) {
      callback(error, null);
      return;
    }

    callback(null, result);
  });
};
