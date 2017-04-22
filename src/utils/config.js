const fs = require('fs')
const logger = require('./logger')

let config

try {
  config = JSON.parse(fs.readFileSync('./config.json', 'utf8'))
} catch (err) {
  logger.error('Error loading config.json', err)
}

module.exports = config
