class NotFoundError extends Error {
  status = 404;
}

class NotAuthorizedError extends Error {
  status = 400;
}

module.exports = {
  NotFoundError,
  NotAuthorizedError,
};