const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
dotenv.config();
const transporter = nodemailer.createTransport({
  host: 'smtp.postmarkapp.com',
  port: 587,
  auth: {
    user: process.env.USER,
    pass: process.env.PASSWORD,
  },
});
const mailOptions = {
  from: 'hardeepk@missionreadyhq.com',
  to: 'hardeepk@missionreadyhq.com',
  subject: 'Test Email 007',
  html: `<h1>this is email body. I am using <em>HTML</em></h1>`,
};
transporter.sendMail(mailOptions);