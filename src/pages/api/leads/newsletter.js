import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: Number(process.env.MAIL_PORT),
  secure: process.env.MAIL_SECURE === "true",
  auth: {
    user: process.env.MAIL_USERNAME,
    pass: process.env.MAIL_PASSWORD,
  },
});

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res
      .status(405)
      .json({ error: true, message: "Method not supported" });
  }

  const params = req.body;

  if (!params.email || !validateEmail(params.email)) {
    return res.status(400).json({ error: true, message: "Enter valid email" });
  }

  try {
    const response = await sendEmail(params);
    return res.status(200).json({ error: false, mailer: response });
  } catch (e) {
    console.error("Email send error:", e);
    return res
      .status(500)
      .json({ error: true, message: "Something went wrong" });
  }
}

const validateEmail = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email).toLowerCase());
};

const sendEmail = async (data) => {
  const info = await transporter.sendMail({
    from: "Legendary Newsletter Alert <no-reply@mailer.legendary.net.in>",
    headers: {
      "Reply-To": data.email,
    },
    to: "info@legendary.net.in",
    bcc: "sourabh@vkss.tech",
    subject: "Legendary website has new newsletter subscription",
    html: `
      <p>Hello,</p>
      <p>New newsletter subscription received from Legendary website.</p>
      <p>Here are the details:</p>
      <p>Email - <strong>${data.email}</strong></p>
      <p>Page URL - https://www.legendary.in${data.page}</p>
      <p>Regards</p>
      <p>-- Legendary Web Team</p>
    `,
  });
  return info;
};
