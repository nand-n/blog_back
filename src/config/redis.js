const redis = require('redis');


 const redisClient = async () => {
 const client = redis.createClient({
    socket: {
      port: 6379,
      host: 'redis-service'
   }
  });
  client.on("error", (error) => console.error(`Error : ${error}`));
  client.on("connect", () => console.log("Redis connected"));
  await client.connect();
};

module.exports = redisClient