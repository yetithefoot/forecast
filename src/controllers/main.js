const Forecast = require('forecast')
const config = require('../utils/config')

exports.forecast = (req, res) => {
  const {latitude, longitude} = req.query
  const forecast = new Forecast({
    service: 'darksky',
    key: config.key,
    units: 'celcius',
    cache: true
  })

  forecast.get([latitude, longitude], (err, weather) => {
    if (err) return res.status(404).send(err)
    res.send(weather)
  })
}

exports.client = (req, res) => {
  res.sendFile('index.html', {root: __dirname})
}

exports.dashboard = (req, res) => {
  res.sendFile('logfile.log', {root: __dirname})
}