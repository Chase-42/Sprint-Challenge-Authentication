const jwt = require("jsonwebtoken");
const secret = require("../config/secrets.js");

function generateToken(user) {
  const payload = {
    id: user.id,
    username: user.username
  };
  const options = {
    expiresIn: "2h"
  };
  const token = jwt.sign(payload, secret.jwtSecret, options);
  return token;
}

module.exports = generateToken;
