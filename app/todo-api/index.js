'use strict';

var express = require('express');
var router = express.Router();

var post_todo = require('./routes/post-todo');
var defaultPath = '/todo-api';

var route = function (path) {
  var apiPath = path || defaultPath;
  router.route(apiPath).post(post_todo);
  return router;
};

module.exports = route;
