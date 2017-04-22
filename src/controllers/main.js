exports.forecast = (req, res) => {
  res.send({msg: 'forecast'})
}

exports.client = (req, res) => {
  res.sendFile('index.html', {root: __dirname})
}

exports.dashboard = (req, res) => {
  res.sendFile('logfile.log', {root: __dirname})
}