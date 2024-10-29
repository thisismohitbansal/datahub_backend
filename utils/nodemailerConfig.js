require('dotenv').config();
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,  // Using environment variable
    pass: process.env.EMAIL_PASS,   // Using environment variable
  },
});

module.exports = transporter;
