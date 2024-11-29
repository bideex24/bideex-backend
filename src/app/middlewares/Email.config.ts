/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
// import config from '../config';
/* eslint-disable @typescript-eslint/no-require-imports */

const nodemailer = require('nodemailer');

export const transporter = nodemailer.createTransport({
  host: 'premium96.web-hosting.com',
  port: 465,
  secure: true,
  auth: {
    user: 'support@bideex.com',
    pass: 'E=.1HAWR56.W',
    // pass: 'gcsa smyc ajfj qwod',
  },
});
