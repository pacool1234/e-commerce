const nodemailer = require('nodemailer')

let transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: 'niederleytnerenciso@gmail.com',
    pass: 'pqmkfmosswiygbfi'
  }
})

module.exports = transporter