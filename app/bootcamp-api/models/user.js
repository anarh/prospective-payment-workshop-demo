'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  first_name: String,
  last_name: String,
  given_rewards: [{type: Schema.Types.ObjectId, ref: 'Reward'}],
  received_rewards: [{type: Schema.Types.ObjectId, ref: 'Reward'}]
});

module.exports = mongoose.model('User', UserSchema);
