require('process');
const nodemailer = require("nodemailer");

export default async (req, res) => {
  const { email, emailContent } = req.body;

  if( (email != null && email != undefined)
      && (emailContent != null && emailContent != undefined) ) {

        let transporter = nodemailer.createTransport({
          host: process.env.SMTP_HOST,
          port: process.env.SMTP_PORT,
          secure: true,
          auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
          },
        });

        let mailData = {
          from: email,
          to: process.env.SMTP_USER,
          subject: "onurilaslan.com",
          text: emailContent,
        };
        transporter.sendMail(mailData, function (err, info) {
          if(err)
            console.log(err)
          else
            console.log(info)
        })
  }
}
