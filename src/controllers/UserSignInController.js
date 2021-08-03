/* eslint-disable quote-props */
/* eslint-disable no-undef */
/* eslint-disable no-restricted-globals */
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const user = require('../models/UserSignin');

exports.signin = (request, response) => {
  const { email } = request.body;
  user.getUserData(email, (error, result) => {
    if (error) {
      response.send(error.message);
    } else if (result.length === 0) {
      response.status(401).json({ message: "Votre email n'est pas enregistré" });
    } else {
      const encryptedPassword = result[0].password;
      bcrypt.compare(
        request.body.password,
        encryptedPassword,
        (errorbcrypt, correct) => {
          if (errorbcrypt) {
            response.send(error.message);
          }
        //   console.log(request.body.password);
          if (!correct) {
            response
              .status(401)
              .json({ message: "Votre mot de pass n'est pas correct" });
          } else {
            const SECRET = 'pouetpouet';
            const MAXAGE = Math.floor(Date.now() / 1000) + 60 * 60 * 60; // 1 hour of expiration
            const userObject = {
              // eslint-disable-next-line space-infix-ops

              id_user: result[0].id_user,
              email: request.body.email,
              role: result[0].role,
              exp: MAXAGE,
            };
            jwt.sign(userObject, SECRET, (errorJWT, token) => {
              if (errorJWT) {
                response.send(error.message);
              }

              request.user = userObject;
              response.cookie('authcookie', token, {
                maxAge: MAXAGE,
              });

              response.status(200).json({
                'token': token,
                'user': {
                  'id_user': result[0].id_user,
                  'role': result[0].role,
                  'email': result[0].email,
                },
              });
            });
          }
        },
      );
    }
  });
};
