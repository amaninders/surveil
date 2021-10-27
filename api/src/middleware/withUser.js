const { NotFoundError } = require("../errors");
const { User } = require("../models");

module.exports = async function(req, _, next) {
  const userId = req.user ? req.user.id : null;
  const myUser = await User.findByPk(userId);

  if (!myUser) {
    throw new NotFoundError(`Invalid token.`);
  }

  req.myUser = myUser;

  next();
};