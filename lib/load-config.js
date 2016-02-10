'use strict';

var _ = require('lodash');

module.exports = function loadConfig () {
  var public_config = require('../config.default');
  var private_config;

  try {
    private_config = require('../config.local');
  }
  catch (e) {
    private_config = {};
  }

   // add environment variables as overriding factors
  _.forEach(process.env, function (value, index) {
    private_config[index.toLowerCase()] = value;
  });

  return _.extend(public_config, private_config);
};
