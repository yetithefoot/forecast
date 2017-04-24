const winston = require('winston')
const dateFormat = require('dateformat')

const timestamp = () => dateFormat(new Date(), 'yyyy-mm-dd HH:MM:ss', true)

const formatter = (options) => {
  return options.timestamp() + ' ' + options.level.toUpperCase() + ' ' + (options.message ? options.message : '') +
      (options.meta && Object.keys(options.meta).length ? '\n\t' + JSON.stringify(options.meta) : '')
}

const filename = './build/logfile.log'
winston.handleExceptions(new winston.transports.File({ filename }))

const logger = new (winston.Logger)({
  levels: {
    'error': 0,
    'info': 1,
    'http': 2
  },
  transports: [
    new (winston.transports.Console)({
      level: 'http',
      handleExceptions: true,
      json: false,
      colorize: true,
      timestamp,
      formatter
    }),
    new (winston.transports.File)({
      filename,
      level: 'http',
      handleExceptions: true,
      json: false,
      maxsize: 10485760, // 10 Mb
      maxFiles: 1,
      colorize: false,
      timestamp,
      formatter
    })
  ],
  exitOnError: false
})

logger.stream = {
  write: message => logger.log('http', message.trim())
}

module.exports = logger
