const express = require('express')
const { join } = require('path')
const app = express()
require('dotenv').config()

let MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/cocktailsdb'


app.use(express.static(join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

require('./routes')(app)

require('mongoose').connect(MONGODB_URI, { useNewUrlParser: true, useCreateIndex: true, useFindAndModify: true })
  .then(_ => app.listen(process.env.PORT || 3000))
  .catch(e => console.log(e))