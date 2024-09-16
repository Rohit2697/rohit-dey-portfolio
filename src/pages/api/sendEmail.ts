import { NextApiRequest, NextApiResponse } from 'next'
import nodeMailer from 'nodemailer'
export default async function sendEmail(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ "message": "supported only post" })
  const { subject, message } = req.body;
  const transporter = nodeMailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_SECRETKEY
    }
  })
  try {
    await transporter.sendMail({
      from: process.env.EMAIL,
      to: process.env.EMAIL,
      subject: subject,
      text: message,

    })
    res.status(200).json({ "message": "Mail has been sent" })
  } catch (err) {
    console.log(err)
    res.status(500).json({ "message": "Unable to Send Email" })
  }
}