const errorHandler = (err, req, res, next) => {
  console.error(err.stack);
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  res.status(statusCode).json({ error: message });
};

const notFoundHandler = (req, res, next) => {
  res.status(404).json({ error: 'Not Found' });
};

module.exports = {
  errorHandler,
  notFoundHandler,
};
