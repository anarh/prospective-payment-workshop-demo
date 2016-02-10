'use strict';

var User = require('../models/user');
var data = {
  first_name: 'John',
  last_name: 'Brown',
  given_rewards: [],
  received_rewards: []
};

var post = function (req, res) {
  var user = new User(data);

  user.save(data, function (err) {
    if (err) {
      console.log(err);
    }

    res.json('your data is saved');
  });
};

module.exports = post;
