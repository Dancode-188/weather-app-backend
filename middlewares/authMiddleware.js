const jwt = require('jsonwebtoken');
const config = require('../config/config');

const verifyToken = (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) {
    return res.status(401).json({ error: 'No token provided' });
  }

  try {
    const decoded = jwt.verify(token, config.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ error: 'Invalid token' });
  }
};

const checkUserRole = (role) => {
  return (req, res, next) => {
    if (req.user && req.user.role === role) {
      next();
    } else {
      return res.status(403).json({ error: 'Forbidden' });
    }
  };
};

const isAuthenticated = (req, res, next) => {
  if (req.user) {
    next();
  } else {
    return res.status(401).json({ error: 'Unauthorized' });
  }
};

module.exports = {
  verifyToken,
  checkUserRole,
  isAuthenticated,
};
