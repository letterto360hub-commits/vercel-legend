import axios from "axios";
const qs = require("qs");
var nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  secure: process.env.MAIL_SECURE == "true" ? true : false,
  auth: {
    user: process.env.MAIL_USERNAME,
    pass: process.env.MAIL_PASSWORD,
  },
});

export default async function handler(req, res) {
  if (req.method === "POST") {
    let params = req.body;
    if (params.email == "" || !validateEmail(params.email)) {
      res.status(400).json({ error: true, message: "Enter valid email" });
    } else {
      try {
        let response1 = {}; //await add_lead_to_db(params);
        let response = await sendEmail(params);
        res
          .status(200)
          .json({ error: false, mailer: response, selldo: response1.data });
      } catch (e) {
        console.log(e);
        res.status(400).json({ error: true, message: "Something went wrong" });
      }
    }
  } else {
    res.status(400).json({ error: true, message: "Method not supported" });
  }
}

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    );
};

const validatePhone = (phone) => {
  return String(phone).match(
    /^(?:(?:\+|0{0,2})91(\s*[\ -]\s*)?|[0]?)?[789]\d{9}|(\d[ -]?){10}\d$/,
  );
};

const add_lead_to_db = async (qdata) => {
  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://app.sell.do/api/leads/create?api_key=c29e379899ed672ff8c68ef59112e82b&sell_do[form][lead][name]=${encodeURIComponent(qdata.name)}&sell_do[form][lead][project_id]=${qdata.project_id}&sell_do[form][lead][phone]=${encodeURIComponent(qdata.phone)}&sell_do[form][lead][email]=${encodeURIComponent(qdata.email)}&sell_do[form][note][content]=${encodeURIComponent(qdata.project + " " + qdata.message)}&sell_do[campaign][srd]=65268166940368ee392a17f0`,
    headers: {},
  };
  console.log("Data", config);
  let res = await axios.request(config);
  console.log("Result", res);
  return res;
};

const sendEmail = async (data, file) => {
  const info = await transporter.sendMail({
    from: "Bharathi Meraki Subscription Alert <no-reply@mailer.bharathimeraki.com>",
    headers: {
      "Reply-To": data.email,
    },
    to: "sales@bharathimeraki.com",
    bcc: "sourabh@vkss.tech",
    subject: "Bharathi Meraki website has new newsletter subscription",
    html: `<p>Hello, </p><p> New newsletter subscription received from Bharathi Meraki website. </p><p> Here are the details- </p><p> Email - <strong>${data.email}</strong> </p><p> Page URL - https://www.bharathimeraki.com${data.page}</p><p>Regards </p><p>-- Bharathi Meraki Web Team</p>`,
  });
  return info;
};
