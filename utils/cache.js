// utils/cache.js
const redis = require('redis');
const client = redis.createClient(process.env.REDIS_URL);

client.on('error', (err) => {
  console.error('Redis error:', err);
});

module.exports = client;
