require('dotenv').config();
const mysql = require("mysql2");

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1985Athelete",
    database: "rendezVous",
  });
db.connect((error) => {
  if (error) throw error;
  console.log("Connection to database works!");
});

module.exports = db;
