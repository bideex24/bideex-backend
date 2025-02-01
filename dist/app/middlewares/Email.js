"use strict";
/* eslint-disable no-console */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendVerificationCode = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */
const Email_config_1 = require("./Email.config");
const sendVerificationCode = (email, verificationCode) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield Email_config_1.transporter.sendMail({
            from: '"Bideex - Verify your email" <support@bideex.com>', // sender address
            to: email, // list of receivers
            subject: 'Verify Your Email', // Subject line
            text: 'Hello world?', // plain text body
            html: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
      integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    />
    <title>Email Verification</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        background-color: #f4f4f7;
        margin: 0;
        padding: 0;
      }
      .email-container {
        max-width: 600px;
        margin: 0 auto;
        background-color: #ffffff;
        border-radius: 8px;
        overflow: hidden;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      }
      .header {
        background-color: #00294d;
        padding: 20px;
        text-align: center;
        color: #ffffff;
        font-size: 18px;
      }
      .header img {
        max-width: 100px;
      }
      .email {
        font-size: 50px;
        color: #ff435b;
      }
      .main {
        padding: 40px 20px;
        text-align: center;
        color: #333333;
      }
      .main img {
        width: 50px;
        margin-bottom: 20px;
      }
      .main h1 {
        font-size: 24px;
        color: #00294d;
        margin-bottom: 10px;
      }
      .main p {
        font-size: 14px;
        color: #666;
        margin-bottom: 20px;
      }
      .footer {
        background-color: #00294d;
        color: #ffffff;
        padding: 20px;
        text-align: center;
        font-size: 14px;
      }
      .footer p {
        margin: 10px 0;
      }
    </style>
  </head>
  <body>
    <div class="email-container">
      <!-- Main Content -->
      <div class="main">
        <div><i class="fa-solid fa-envelope-circle-check email"></i></div>
        <h1>Verify Your Email Address</h1>
        <!-- OTP Input Fields -->
         <p style="color: #00294d">To verify your email address, please use the following One Time Password (OTP):</p>
       <p style="font-size: 40px; color:#00294d; font-weight: 800;" >${verificationCode}</p>
       <p style="color: #00294d;">This code is valid for the next 10 minutes. If you did not request this verification, please disregard this email.</p>
        <p style="text-align: left; color:#00294d;">Do not share this OTP with anyone. Bideex takes your account security very seriously. Our Customer Service team will never ask you to disclose or verify your password, OTP, credit card, or banking information. If you receive a suspicious email with a link to update your account information, please do not click on the link. Instead, report the email to Bideex support for investigation.
        Thank you!</p>
    
    </div>
    <!-- Footer Section -->
    <footer style="background-color: #00294d; ">
        <div style="max-width: 1460px; margin: 0 auto; padding: 10px 10px;">
          <nav style="word-wrap: break-word;">
            <h6 style="color: white; font-size: 10px; font-weight: bold; font-weight: 800;">About Bideex</h6>
            <p style="color: white; text-align: start; font-size: 10px;">
              Bideex is a global marketplace that connects buyers and sellers from around the world. Whether you want to buy, sell, or rent items, Bideex makes it easy and secure. With a wide range of categories, you can find everything from electronics and vehicles to jobs and services. Join Bideex today and experience a smarter way to trade!
            </p>
          </nav>
        </div>
        <aside style="padding: 10px 8px;">
          <p style="color: white; text-align: center; font-size: 10px;">
            Bideex © 2024<script>document.write(new Date().getFullYear())</script> - All Rights Reserved.
          </p>
        </aside>
      </footer>
  </body>
</html>
`,
        });
    }
    catch (error) {
        console.log('email error line 232:', error);
    }
});
exports.sendVerificationCode = sendVerificationCode;
