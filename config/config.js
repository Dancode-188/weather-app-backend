// config.js
module.exports = {
  PORT: process.env.PORT || 3000,
  ENV: process.env.NODE_ENV || 'development',
  LOG_LEVEL: process.env.LOG_LEVEL || 'info',

  // File Upload
  FILE_UPLOAD_PATH: process.env.FILE_UPLOAD_PATH || 'uploads',
  MAX_FILE_SIZE: process.env.MAX_FILE_SIZE || 10000000,

  // Email
  EMAIL_HOST: process.env.EMAIL_HOST || 'smtp.example.com',
  EMAIL_PORT: process.env.EMAIL_PORT || 587,
  EMAIL_USER: process.env.EMAIL_USER || 'your-email@example.com',
  EMAIL_PASSWORD: process.env.EMAIL_PASSWORD || 'your-email-password',

  // Add more configuration properties as needed
};
