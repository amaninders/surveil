const { NotFoundError } = require("../errors");
const { User } = require("../models");

module.exports = async function(req, res, next) {
  const userId = req.user.id;
  const myUser = await User.findByPk(userId);

  if (!myUser) {
    throw new NotFoundError(`Could not find user with id ${userId}`);
  }

  req.myUser = myUser;

  next();
};