const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/signup");
const utils = require("../utils/utils");

exports.newAccount = (request, response) => {
  const { username, email, password, role } = request.body;

  User.getByEmail(email, (error, result) => {
    if (result.length !== 0) {
      response.status(409).json({
        message:
          "Un utilisateur utilisant cette adresse email est déjà enregistré",
      });
    } else {
      const saltRounds = 10;
      bcrypt.hash(password, saltRounds, (error, hash) => {
        if (error) {
          response.status(400).json({ message: error });
        }

        const newUser = {
          username,
          email,
        password: hash,
        role
        };

        User.create(newUser, (error, result) => {
          if (utils.requiresInputs(request.body).length > 0) {
            response.status(400).json({
              message: `Le champ ${utils.requiresInputs(
                request.body
              )} n'est pas renseigné`,
            });
          } else if (utils.dataType(request.body).length > 0) {
            response.status(400).json({
              message: `Le champ ${utils.dataType(
                request.body
              )} doit être une chaîne de caractères`,
            });
          } else {
            response.status(201).json({ lien: "api/signup" });
          }
        });
      });
    }
  });
};

