const { createJwt } = require("./jwt");

const loginAs = (userId, _, res) => {
  const token = createJwt(userId);

  res.cookie("token", token, { httpOnly: true });

  return token;
};

const logout = res => {
  res.clearCookie("token");
};

module.exports = { loginAs, logout };