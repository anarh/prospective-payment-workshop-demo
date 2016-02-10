'use strict';
var _ = require('lodash');

module.exports = _.partialRight(_.merge, function (dest, src) {
  if (_.isArray(dest)) {
    return src.concat(dest);
  }
});
