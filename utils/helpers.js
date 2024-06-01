const moment = require('moment');

const formatDate = (date, format = 'YYYY-MM-DD') => {
  return moment(date).format(format);
};

const generateRandomString = (length = 10) => {
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};

const capitalizeString = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

module.exports = {
  formatDate,
  generateRandomString,
  capitalizeString,
};
