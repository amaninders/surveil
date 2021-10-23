const jwt = require("jsonwebtoken");

const createJwt = userId => {
  const user = { id: userId };
  const secret = process.env.JWT_SECRET;

  return jwt.sign(user, secret);
};

module.exports = { createJwt };