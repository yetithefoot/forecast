const nodemailer = require('nodemailer')
const logger = require('./logger')
const {smtpConfig} = require('./config')
const transporter = nodemailer.createTransport(smtpConfig)

module.exports = (mailOptions) => {
  const options = {
    from: 'Forecast <' + smtpConfig.auth.user + '>',
    ...mailOptions
  }

  transporter.sendMail(options, (error, info) => {
    if (error) {
      logger.error('Send mail error, options: ', mailOptions, 'error: ', error)
    }
  })
}
