'use strict';

var Task = require('../models/task');
var data = {
  title: String,
  description: String,
  status: String
};

var post = function (req, res) {
  var task = new Task(data);
  task.save(data, function (err) {
    if (err) { console.log(err); }
    res.json('your data is saved');
  });
};

module.exports = post;
