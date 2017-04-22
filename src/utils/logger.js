const winston = require('winston')
const timestamp = require('./helpers').timestamp

const formatter = (options) => {
  return options.timestamp() + ' ' + options.level.toUpperCase() + ' ' + (options.message ? options.message : '') +
      (options.meta && Object.keys(options.meta).length ? '\n\t' + JSON.stringify(options.meta) : '')
}

winston.handleExceptions(new winston.transports.File({ filename: 'logfile.log' }))

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
      timestamp: () => timestamp(new Date()),
      formatter
    }),
    new (winston.transports.File)({
      filename: 'logfile.log',
      level: 'http',
      handleExceptions: true,
      json: false,
      maxsize: 10485760, // 10 Mb
      maxFiles: 1,
      colorize: false,
      timestamp: () => timestamp(new Date()),
      formatter
    })
  ],
  exitOnError: false
})

logger.stream = {
  write: message => logger.log('http', message.trim())
}

module.exports = logger
