require('dotenv').config()
require('./database/connection')
const express = require('express')
const postRoutes = require('../routes/postApi')
const app = express();
//
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(express.static('./public'))
app.use(postRoutes)
module.exports = app;