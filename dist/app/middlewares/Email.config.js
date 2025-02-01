"use strict";
// import config from '../config';
/* eslint-disable @typescript-eslint/no-require-imports */
Object.defineProperty(exports, "__esModule", { value: true });
exports.transporter = void 0;
const nodemailer = require('nodemailer');
exports.transporter = nodemailer.createTransport({
    host: 'mail.bideex.com',
    port: 465,
    secure: true,
    auth: {
        user: 'support@bideex.com',
        pass: 'EexBid@24#',
        // pass: 'gcsa smyc ajfj qwod',
    },
});
