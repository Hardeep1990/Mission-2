/*const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
  host: 'smtp.postmarkapp.com',
  port: 587,
  auth: {
    user: '228e1d1f-bff4-4f4c-9dd4-afcbcc386b06',
    pass: '228e1d1f-bff4-4f4c-9dd4-afcbcc386b06',
  },
});
const mailOptions = {
  from: 'hardeepk@missionreadyhq.com',
  to: 'sebin@missionreadyhq.com',
  subject: 'Test Email 007',
  text: 'This is in the email body',
};
transporter.sendMail(mailOptions);*/
console.log('NUMBER_OF_PROCESSORS is', process.env.NUMBER_OF_PROCESSORS);
console.log(process.env.PATH);