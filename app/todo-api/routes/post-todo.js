'use strict';

var Todo = require('../models/todo');
var data = {
  title: 'Our first todo',
  created_by: 'Manny',
  description: 'The best todo ever',
  tasks: []
};

var post = function (req, res) {
  var todo = new Todo(data);
  todo.save(data, function (err) {
    if (err) { console.log(err); }
    res.json('your data is saved');
  });
};

module.exports = post;
