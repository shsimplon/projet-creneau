/* eslint-disable no-plusplus */
/* eslint-disable indent */
/* eslint-disable camelcase */
/* eslint-disable no-shadow */
const { res, req } = require("express");
const moment = require('moment')
const util = require("../utils/utils");

const book = require("../models/booking");

// ETQ user, je veux un rendez-vous
exports.userBooking = (req, res) => {
  const { user_id, motif, date } = req.body;
  const role = req.body.role;

  let newDate = moment(req.body.date).format("YYYY-MM-DD HH:DD");

  //   console.log(req.body);
  const booking = {
    user_id,
    motif,
    newDate,
  };
  if (!role) {
    res.status(401).json({ message: "User not connected" });
  } else if (role === "admin") {
    res.status(403).json({
      message: "Vous n'êtes pas autorisé à accéder à cette ressource",
    });
  } else if (!motif || !newDate) {
    res.status(400).json({ message: "Missing input" });
  } else {
    book.bookDate(booking, (error, result) => {

      if (error) {
        res.send(error);
      } else {
        res.status(201).json({ message: "rendez-vous ok" });
      }
    });
  }
};
