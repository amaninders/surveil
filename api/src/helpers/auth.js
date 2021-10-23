const { createJwt } = require("./jwt");

const loginAs = (userId, _, res) => {
  const token = createJwt(userId);

  res.cookie('token', token, { httpOnly: true });

  return token;
};

module.exports = { loginAs };