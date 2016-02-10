'use strict';

var express = require('express');
var router = express.Router();

var post = require('./routes/post');
var defaultPath = '/bootcamp-api';

var route = function (path) {
  var apiPath = path || defaultPath;
  router.route(apiPath).post(post);
  return router;
};

module.exports = route;
