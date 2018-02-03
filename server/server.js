//server/server.js
var express = require('express');
var router = require('./routes/routes.js')
var path = require('path');
var bodyParser = require('body-parser');
var app = express();
var mongoose = require('mongoose');




app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../client'));
app.use(express.static(path.join(__dirname, '../client')));
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: false}));
//mongoose.connect('mongodb://tsuingayin:5YOYOcom@ds117148.mlab.com:17148/expenses');




mongoose.connect('mongodb://admin:admin@ds121248.mlab.com:21248/ymg30', {
    auth: {
      user: 'admin',
      password: 'admin'
    }
  }, {authMechanism: 'ScramSHA1'})
  .then(() => console.log('connection successful'))
  .catch((err) => console.error(err));



app.use('/', router);
module.exports=app;
