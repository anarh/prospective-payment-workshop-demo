'use strict';

var Data = require('../models');

var get = function (req, res) {
  var drg_definition = new RegExp(req.get('drg_definition'), 'i');

  Data.find({ drg_definition: drg_definition })
    .limit(50)
    .exec(function (err, record) {
      if (err) return;
      res.json(record);
    });
};

module.exports = get;
