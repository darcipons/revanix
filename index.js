const express = require('express')
const bodyParser = require('body-parser')
const nodemailer = require('nodemailer')
const XOAuth2 = require('nodemailer/lib/xoauth2')
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.post('/api/form', (req, res) => {
  nodemailer.createTestAccount((err, account) => {
    const htmlEmail = `
      <h2>Contact Form</h2>
      <h3>Subject: ${req.body.subject}</h3>
      <ul>
        <li>Name: ${req.body.name}</li>
        <li>Email: ${req.body.email}</li>
        <li>Phone: ${req.body.phone}</li>
      </ul>
      <h3>Message:</h3>
      <p>${req.body.message}</p>
    `

    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
          type:'OAuth2',
          user: "revanix.online.form@gmail.com",
          pass: process.env.EMAIL_PASSWORD,
          clientId: process.env.GMAIL_CLIENTID,
          clientSecret: process.env.GMAIL_CLIENTSECRET,
          refreshToken: process.env.GMAIL_REFRESH_TOKEN,
          accessToken: process.env.GMAIL_ACCESS_TOKEN,
      }
    })

    let mailOptions = {
      from: "revanix.online.form@gmail.com",
      to: "darcimarie33@gmail.com",
      subject: "Online Form Submission",
      html: htmlEmail
    }

    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        return console.log(err)
      }
    })
  })
})

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})
