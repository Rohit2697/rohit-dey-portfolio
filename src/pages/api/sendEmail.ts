import { NextApiRequest, NextApiResponse } from 'next'
import nodeMailer from 'nodemailer'
export default async function sendEmail(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ "message": "supported only post" })
  const { subject, message } = req.body;
  const transporter = nodeMailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'rohit.dey2697@gmail.com',
      pass: 'ynir ouwi djjs xhtg'
    }
  })
  try {
    await transporter.sendMail({
      from: 'rohit.dey2697@gmail.com',
      to: 'rohit.dey2697@gmail.com',
      subject: subject,
      text: message,

    })
    res.status(200).json({ "message": "Mail has been sent" })
  } catch (err) {
    console.log(err)
    res.status(500).json({ "message": "Unable to Send Email" })
  }
}