const jwt = require("express-jwt");

// converts exceptions into human-readable errors
module.exports = (err, _, __, next) => {
  if (err instanceof jwt.UnauthorizedError) {
    return next({ status: 401, message: "Authentication required." });
  }

  return next(err);
};