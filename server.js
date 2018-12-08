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

/* MongoDB Connection Establishment */
/*
mongoose.connect(dbConnection.connectStr, { useNewUrlParser: true });
mongoose.connection.on('error', function() {
  console.log('MongoDB Connection Error. Please make sure that MongoDB is running.');
  //process.exit(1);
});*/

/* Send all other requests to client side routing. */
app.get('*', (req, res, next) => {
  res.sendFile(path.resolve(__dirname, './client', 'index.html'))
})

/* Set Port */
app.listen(app.get( 'port' ), () => {
  console.log('Listening on port ' + app.get( 'port' ));
});
