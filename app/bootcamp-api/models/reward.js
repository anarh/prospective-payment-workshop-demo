'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RewardSchema = new Schema({
  type: String,
  points: String,
  given_by_user: Schema.Types.ObjectId,
  received_by_user: Schema.Types.ObjectId
});

module.exports = mongoose.model('Reward', RewardSchema);
