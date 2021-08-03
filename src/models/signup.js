const db = require("../config/database");

exports.create = (newUser, callback) => {
  const query = `INSERT INTO user VALUES (id_user,"${newUser.username}","${newUser.email}","${newUser.password}","${newUser.role}")`;

  db.execute(query, (error, result) => {
    if (error) {
      callback(error, null);
      return;
    }

    callback(null, result);
  });
};


exports.getByEmail = (email, callback) => {
  db.execute(`SELECT * FROM user WHERE email = "${email}";`, (error, result) => {
    if (error) {
      callback(error, null);
      return;
    }

    callback(null, result);
  });
};
