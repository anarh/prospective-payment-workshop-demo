'use strict';

var ip = require('./lib/ip')();

var config = {
  port: process.env.PORT || 8080,
  use_mongo: true,
  api_url_payment: '/payments-api',
  api_url_bootcamp: '/bootcamp-api',
  api_url_todo: '/todo-api',
  mongo_db: 'cms-data',
  mongo_port: '27017',
  mongo_url: 'localhost',
  welcome_msg: 'Welcome to Prospective Payments API'
};

config.host = 'http://' + ip + ':' + config.port;
module.exports = config;
