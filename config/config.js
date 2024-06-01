// config.js
module.exports = {
  PORT: process.env.PORT || 3000,
  ENV: process.env.NODE_ENV || 'development',
  LOG_LEVEL: process.env.LOG_LEVEL || 'info',
  FILE_UPLOAD_PATH: process.env.FILE_UPLOAD_PATH || 'uploads',
  // Add more configuration properties as needed
};
