import axios from "axios";
const qs = require("qs");
var nodemailer = require("nodemailer");
import formidable from "formidable";
import fs from "fs";
export const config = {
  api: {
    bodyParser: false,
  },
};

const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  secure: true,
  auth: {
    user: process.env.MAIL_USERNAME,
    pass: process.env.MAIL_PASSWORD,
  },
});

export default async function handler(req, res) {
  if (req.method === "POST") {
    //let params = req.body;
    //console.log("Body",params);

    const form = formidable({});
    console.log("dsfkjsdfksdjfdsfdsf");
    try {
      let [fields, files] = await form.parse(req);
      console.log("dsfkjsdfksdjfdsfdsfdfsdfsdfsdf");
      console.log("fields", fields);
      console.log("files", files);
      // if(fields.name[0] == "" || fields.name[0].length < 2){
      //   res.status(400).json({ error: true, message:"Name should be atleast 3 characters long" })
      // }
      // else if(fields.email[0] == "" || !validateEmail(fields.email[0])){
      //   res.status(400).json({ error: true, message:"Enter valid email" })
      // }
      // else if(fields.phone[0] == "" || !validatePhone(fields.phone[0])){
      //   res.status(400).json({ error: true, message:"Enter valid mobile" })
      // }

      let response = await sendEmail(fields, files);
      console.log("Res", response);
      res.status(200).json({
        error: false,
        message:
          "Thank you for submitting your candidature. Our HR team will get back to you as soon as possible.",
      });
    } catch (err) {
      console.log(err);
      res.status(400).json({ error: true, message: "Something Went Wrong" });
    }
  } else {
    res.status(400).json({ error: true, message: "Method not supported" });
  }
}

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

const validatePhone = (phone) => {
  return String(phone).match(
    /^(?:(?:\+|0{0,2})91(\s*[\ -]\s*)?|[0]?)?[789]\d{9}|(\d[ -]?){10}\d$/
  );
};

const sendEmail = async (data, file) => {
  const info = await transporter.sendMail({
    from: "Legendary Lead Alert <no-reply@mailer.legendary.net.in>",
    to: "info@legendary.net.in",
    bcc: "sourabh@vkss.tech",
    subject: "New entry for Careers page.",
    text: `Hello HR, \nPlease find attached CV. \n Regards`,
    attachments: [
      { filename: file.file[0].originalFilename, path: file.file[0].filepath },
    ],
  });
  return info;
};
