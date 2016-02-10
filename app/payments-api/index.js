'use strict';

var express = require('express');
var router = express.Router();

var get = require('./routes/get');
var defaultPath = '/payments-api';

var route = function (path) {
  var apiPath = path || defaultPath;
  router.route(apiPath).get(get);
  return router;
};

module.exports = route;
