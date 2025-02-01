// import config from '../config';
/* eslint-disable @typescript-eslint/no-require-imports */

const nodemailer = require('nodemailer');

export const transporter = nodemailer.createTransport({
  host: 'mail.bideex.com',
  port: 465,
  secure: true,
  auth: {
    user: 'support@bideex.com',
    pass: 'EexBid@24#',
    // pass: 'gcsa smyc ajfj qwod',
  },
});
