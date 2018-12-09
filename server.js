const express = require('express')
const webpack = require('webpack')
const bodyParser = require('body-parser')
const webpackMiddleware = require('webpack-dev-middleware')
const webpackConfig = require('./webpack.config.js')
const mongoose = require('mongoose')
const path = require('path')
require('babel-register')({
    presets: [ 'env' ]
})

const app = express()
app.use(webpackMiddleware(webpack(webpackConfig)))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('css'))
app.use(express.static('assets'))
app.use(express.static('client/style'))
app.use(express.static(__dirname + '/dist'));
app.engine('html', require('ejs').renderFile)
app.set('view engine', 'html')
app.set( 'port', ( process.env.PORT || 3000 ));
app.get('/serv_side', (req, res, next) => {
  res.sendFile(path.resolve(__dirname, './', 'ss.html'))
})

/*** LEVEL 2.0 - Set up a MongoDB connection! :) ***/

/*** LEVEL 2.1 - Add an initial API route ***/

// Send all other requests to client side routing.
app.get('*', (req, res, next) => {
  res.sendFile(path.resolve(__dirname, './client', 'index.html'))
})

// Set port.
app.listen(app.get( 'port' ), () => {
  console.log('Listening on port ' + app.get( 'port' ));
});
