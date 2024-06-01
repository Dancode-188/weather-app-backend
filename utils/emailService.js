const nodemailer = require('nodemailer');
const config = require('../config/config');

const transporter = nodemailer.createTransport({
  host: config.EMAIL_HOST,
  port: config.EMAIL_PORT,
  secure: false,
  auth: {
    user: config.EMAIL_USER,
    pass: config.EMAIL_PASSWORD,
  },
});

const sendEmail = async (to, subject, text) => {
  const mailOptions = {
    from: config.EMAIL_USER,
    to: to,
    subject: subject,
    text: text,
  };

  await transporter.sendMail(mailOptions);
};

module.exports = {
  sendEmail,
};
