const Redis = require('ioredis');
const redis = new Redis({
  port: 19287,
  host: 'redis-19287.c252.ap-southeast-1-1.ec2.cloud.redislabs.com',
  username: 'default',
  password: process.env.PASSWORD_REDISLABS,
});

module.exports = redis;
