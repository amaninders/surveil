module.exports = (err, _, res) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message;

  res.status(errorStatus);
  res.json({ error: errorMessage });
};