const { ERROR_CODES, STATUS_CODES } = require('./constants');

const handleValidationError = (err, res) => {
  const errors = err.details.map((detail) => detail.message);
  res.status(STATUS_CODES.BAD_REQUEST).json({
    error: ERROR_CODES.VALIDATION_ERROR,
    errors,
  });
};

const handleDatabaseError = (err, res) => {
  console.error(err);
  res.status(STATUS_CODES.INTERNAL_SERVER_ERROR).json({
    error: ERROR_CODES.INTERNAL_SERVER_ERROR,
    message: 'Database error occurred',
  });
};

module.exports = {
  handleValidationError,
  handleDatabaseError,
};
