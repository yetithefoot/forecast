const nodemailer = require('nodemailer')
const logger = require('./logger')
const config = require('config')
const transporter = nodemailer.createTransport(config.get('smtp'))

module.exports = () => {
  const options = {
    from: 'Forecast <' + config.get('auth.user') + '>',
    to: config.get('adminEmail'),
    subject: 'Crush notification',
    text: 'Forecast app crushed! Please check dashboard to get more information.',
    html: '<div>Forecast app crushed! Please check dashboard to get more information.</div>'
  }

  transporter.sendMail(options, (error, info) => {
    if (error) {
      logger.error(`Send error mail to ${options.to}`, error)
    }
  })
}
