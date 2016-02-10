'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var _ = require('lodash');
var mongoose = require('mongoose');

var app = express();
var router = express.Router();
var expressListRoutes = require('express-list-routes');

var config = require('./lib/load-config')();
var enableCors = require('./lib/enable-cors');

var apis = {
  payments: require('./app/payments-api')(config.api_url_payment),
  bootcamp: require('./app/bootcamp-api')(config.api_url_bootcamp),
  todo: require('./app/todo-api')(config.api_url_todo)
};

app.use(enableCors);
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.connect('mongodb://' + config.mongo_url + ':' + config.mongo_port + '/' + config.mongo_db);

router.get('/', function (req, res) {
  res.json({ message: config.welcome_msg });
});

app.use('/', apis.payments);
app.use('/', apis.bootcamp);
app.use('/', apis.todo);
app.use('/', router);

app.listen(config.port);
console.log(config.host);

_.forEach(apis, function (api, fn) {
  expressListRoutes({prefix: ''}, fn, api);
});
