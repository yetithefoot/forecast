const nodemailer = require('nodemailer')
const logger = require('./logger')
const config = require('config')
const transporter = nodemailer.createTransport(config.get('smtpConfig'))

module.exports = (mailOptions) => {
  const options = {
    from: 'Forecast <' + config.get('auth.user') + '>',
    ...mailOptions
  }

  transporter.sendMail(options, (error, info) => {
    if (error) {
      logger.error('Send mail error, options: ', mailOptions, 'error: ', error)
    }
  })
}
