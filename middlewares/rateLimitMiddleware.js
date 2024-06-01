const rateLimit = require('express-rate-limit');

const rateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
  message: 'Too many requests, please try again later',
});

const throttle = (req, res, next) => {
  setTimeout(next, 1000); // Delay the response by 1 second
};

module.exports = {
  rateLimiter,
  throttle,
};
