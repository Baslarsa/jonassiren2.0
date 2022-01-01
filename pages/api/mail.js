import nodemailer from 'nodemailer'

export default async function handler(req, res) {
  const { name, email, message } = req.body
  const transporter = nodemailer.createTransport({
    host: 'send.one.com',
    port: 587,
    secureConnection: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
    tls: {
      ciphers: 'SSLv3',
    },
  })

  const emailProperties = {
    from: `${name}<${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_RECEIVER,
    subject: 'New message from website',
    text: message,
    replyTo: email,
    html: `
      <div>
        <h4>Email sender: ${name} - <a href="mailto:${email}"">${email}</a></h4>
        <div>
          <p>${message}</p>
        </div>
      </div>
    `,
  }
  try {
    await transporter.sendMail(emailProperties)
    res.status(200).json({ message: 'Email has been sent' })
  } catch (error) {
    res.status(500).json({ error })
  }
}
