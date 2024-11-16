import config from '../config';

/* eslint-disable @typescript-eslint/no-require-imports */
const nodemailer = require('nodemailer');

export const transporter = nodemailer.createTransport({
  host: config.mail_host || 'bideex.com',
  port: config.mail_port || 587,
  secure: false,
  auth: {
    user: 'support@bideex.com',
    pass: 'EexBid@24#',
    // pass: 'rfzm ihaq xhuq ddwu',
  },
});
// const sendEmail = async () => {
//   try {
//     const info = await transporter.sendMail({
//       from: '"bideex " <support@bideex.com>', // sender address
//       to: 'ibrahimsarder969@gmail.com', // list of receivers
//       subject: 'Verify Account', // Subject line
//       text: 'Hello world?', // plain text body
//       html: '<b>Hello world?</b>', // html body
//     });
//     console.log(info);
//   } catch (error) {
//     console.log(error);
//   }
// };
// sendEmail();
