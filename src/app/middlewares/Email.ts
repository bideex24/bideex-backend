/* eslint-disable @typescript-eslint/no-explicit-any */
import { transporter } from './Email.config';

export const sendVerificationCode = async (
  email: any,
  verificationCode: any,
) => {
  try {
    console.log(email, verificationCode);
    await transporter.sendMail({
      from: '"Bideex Support " <support@bideex.com>', // sender address
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
      .nav {
        display: flex;
        justify-content: center;
        padding: 10px;
        background-color: #ffffff;
        border-bottom: 1px solid #ddd;
      }
      .nav a {
        margin: 0 10px;
        color: #333;
        text-decoration: none;
        font-size: 14px;
      }
      .nav a:hover {
        color: #ff435b;
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
      .footer a {
        color: #ffffff;
        text-decoration: none;
        margin: 0 5px;
      }
      .social-links img {
        width: 20px;
        margin: 0 5px;
        vertical-align: middle;
      }
    </style>
  </head>
  <body>
    <div class="email-container">
      <!-- Header -->
      <div class="header">
        <img src="https://bideex.com/logo.svg" alt="Logo" />
      </div>

      <!-- Navigation -->
      <div class="nav">
        <a href="https://bideex.com/">Home</a>
        <a href="#">Categories</a>
        <a href="#">About Us</a>
        <a href="#">Contact Us</a>
      </div>

      <!-- Main Content -->
      <div class="main">
        <div><i class="fa-solid fa-envelope-circle-check email"></i></div>
        <h1>Verify Your Email Address</h1>
        <p style="color: #00294d;">
          A verification code has been sent to <strong>${email}</strong> <br />Please
          enter it below to complete verification.
        </p>

        <!-- OTP Input Fields -->
         <p style="color: #00294d">To verify your email address, please use the following One Time Password (OTP):</p>
       <p style="font-size: 40px; color:#00294d; font-weight: 800;" >${verificationCode}</p>
       <p style="color: #00294d;">This code is valid for the next 10 minutes. If you did not request this verification, please disregard this email.</p>
        <p style="text-align: left; color:#00294d;">Do not share this OTP with anyone. Bideex takes your account security very seriously. Our Customer Service team will never ask you to disclose or verify your password, OTP, credit card, or banking information. If you receive a suspicious email with a link to update your account information, please do not click on the link. Instead, report the email to Bideex support for investigation.
        Thank you!</p>
    
    </div>
    <!-- Footer Section -->
    <footer style="background-color: #00294d; ">
        <div style="max-width: 1460px; margin: 0 auto; display: grid; grid-template-columns: repeat(4, 1fr); padding: 10px 10px; gap: 8px;">
          
          <nav style="word-wrap: break-word;">
            <h6 style="color: white; font-size: 10px; font-weight: bold; font-weight: 800;">About Bideex</h6>
            <p style="color: white; text-align: start; font-size: 10px;">
              Bideex is a global marketplace that connects buyers and sellers from around the world. Whether you want to buy, sell, or rent items, Bideex makes it easy and secure. With a wide range of categories, you can find everything from electronics and vehicles to jobs and services. Join Bideex today and experience a smarter way to trade!
            </p>
          </nav>
      
          <nav>
            <h6 style="color: white; font-size: 10px; font-weight: 800;">Help & Support</h6>
            <p style="color: white; font-size: 10px;">Need help?</p>
            <p style="color: white; font-size: 10px;">Our support team is here for you.</p>
            <a href="#" style="color: #ff435b; text-decoration: none; font-size:10px; ">Contact Us</a><br>
            <a href="#" style="color: #ff435b; text-decoration: none; font-size:10px; ">Help Center</a>
          </nav>
      
          <nav>
            <h6 style="color: white; font-size: 10px; font-weight: 800;">Quick Links</h6>
           
            <a href="#" style="color: #ff435b; text-decoration: none; font-size:10px; ">Sell Your Items</a><br>
            <a href="#" style="color: #ff435b; text-decoration: none; font-size:10px; ">About Us</a><br>
        <a href="#" style="color: #ff435b; text-decoration: none; font-size:10px;">Careers</a><br>
        <a href="#" style="color: #ff435b; text-decoration: none; font-size:10px;">Terms and Conditions</a><br>
        <a href="#" style="color: #ff435b; text-decoration: none; font-size:10px;">Privacy Policy</a>
          </nav>
      
          <form>
            <h6 style="color: white; font-size: 10px; font-weight: 800;">Follow Us</h6>
            <div style="display: flex; gap: 8px; margin: 16px 0;">
                <p>
                    <a style="font-size: 22px; color: #ffffff;" href="">
                        <i class="fa-brands fa-square-facebook"></i>
                    </a>
                  </p>
                <p>
                    <a style="font-size: 22px; color: #ffffff;" href="">
                        <i class="fa-brands fa-square-x-twitter"></i>
                    </a>
                  </p>
                <p>
                    <a style="font-size: 22px; color: #ffffff;" href="">
                        <i class="fa-brands fa-square-instagram"></i>
                    </a>
                  </p>
                <p>
                    <a style="font-size: 22px; color: #ffffff;" href="">
                        <i class="fa-brands fa-linkedin"></i>
                    </a>
                  </p>
                  <p>
                    <a style="font-size: 22px; color: #ffffff;" href="">
                        <i class="fa-brands fa-square-youtube"></i>
                    </a>
                  </p>
                 
            </div>
           
              <label style="color: white; font-size: 10px;">
                Sign Up to Newsletter
              </label>
              <div style="display: flex;">
                <input
                  type="text"
                  placeholder="Enter Your Email Address"
                  style="padding: 8px; border-radius: 4px; border: 1px solid #ccc; width: 80%; font-size: 10px; margin-top: 5px;" />
              </div>
              <a href="/signup" style="display: inline-block; background-color: #ff435b; color: white; text-align: center; padding: 12px 32px; font-size: 10px; border-radius: 4px; margin-top: 16px; text-decoration: none;">
                Signup
              </a>
          </form>
        </div>
        <aside style="padding: 10px 8px;">
          <p style="color: white; text-align: center; font-size: 10px;">
            Bideex © <script>document.write(new Date().getFullYear())</script> - All Rights Reserved.
          </p>
        </aside>
      </footer>
  </body>
</html>
`,
    });
  } catch (error) {
    console.log(error);
  }
};
