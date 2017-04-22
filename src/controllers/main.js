exports.client = (req, res) => {
  res.send({msg: 'client'})
}

exports.forecast = (req, res) => {
  res.send({msg: 'forecast'})
}

exports.dashboard = (req, res) => {
  res.sendFile('dashboard.html', {root: __dirname})
}