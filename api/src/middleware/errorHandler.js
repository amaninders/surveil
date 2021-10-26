module.exports = (error, _, res, next) => {
  const errorStatus = error.status || 500;
  const errorMessage = error.message;

  res.status(errorStatus);
  res.json({ error: errorMessage });

  next(error);
};