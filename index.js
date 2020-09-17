const express = require('express')

const app = express()

const { config } = require('./config/index')

app.get('/', function (req, res) {
  res.send('Hello World')
})
app.get('/json', function (req, res) {
  res.json({ 'Hello': 'World' })
})
app.get('/bisiesto/:year', function (req, res) {
  const year = parseInt(req.params.year)
  if (!isNaN(year)) {
    res.json({ 'Bisiesto': year % 4 === 0 })
  } else {
    res.send('Este no es un año')
  }
})

app.listen(config.port, function () {
  console.log(`Listening http://localhost:${config.port}`)
})