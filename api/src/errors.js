class NotFoundError extends Error {
  status = 404;
}

class NotAuthorizedError extends Error {
  status = 400;
}

class PermissionError extends Error {
  status = 403;
  message = "Insufficient Permissions.";
}

module.exports = {
  NotFoundError,
  NotAuthorizedError,
  PermissionError
};